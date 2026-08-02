"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, Grid, DollarSign, Calendar, TrendingUp, Activity, Coins, ArrowUpRight, ArrowDownRight, Clock, Zap, Target, Star, BarChart3, PieChart, Wallet, Receipt, CreditCard, BadgeDollarSign } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

function getLocalDateStr(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

export default function DashboardPage() {
  const [ingresosHoy, setIngresosHoy] = useState(0);
  const [ingresosSemana, setIngresosSemana] = useState(0);
  const [ingresosMes, setIngresosMes] = useState(0);
  const [ingresosTotal, setIngresosTotal] = useState(0);
  const [mesasActivas, setMesasActivas] = useState(0);
  const [totalMesas, setTotalMesas] = useState(0);
  const [clientesTotal, setClientesTotal] = useState(0);
  const [reservasHoy, setReservasHoy] = useState(0);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [totalConsumos, setTotalConsumos] = useState(0);
  const [consumosHoy, setConsumosHoy] = useState(0);
  const [consumosAbiertos, setConsumosAbiertos] = useState(0);
  const [promedioConsumo, setPromedioConsumo] = useState(0);
  const [mejorDia, setMejorDia] = useState({ dia: '', total: 0 });
  const [periodoGrafico, setPeriodoGrafico] = useState<'7d' | '15d' | '30d'>('7d');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const [consumos, mesas, clientes, reservas] = await Promise.all([
          fetchAPI('/consumo'),
          fetchAPI('/mesa'),
          fetchAPI('/cliente'),
          fetchAPI('/reserva')
        ]);

        const today = new Date();
        const todayStr = getLocalDateStr(today);
        
        // Inicio de la semana (lunes)
        const startOfWeek = new Date(today);
        const dayOfWeek = today.getDay();
        const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        startOfWeek.setDate(today.getDate() - diffToMonday);
        startOfWeek.setHours(0,0,0,0);

        // Inicio del mes
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        let ingresosDia = 0;
        let ingresosSem = 0;
        let ingresosMensual = 0;
        let ingresosHistorico = 0;
        let consumosDelDia = 0;
        let abiertos = 0;
        let cerradosTotal = 0;
        let sumaTotal = 0;
        let recent: any[] = [];

        if (consumos && consumos.length > 0) {
          setTotalConsumos(consumos.length);
          
          consumos.forEach((c: any) => {
            const cDate = new Date(c.FechaInicio);
            const cDateStr = getLocalDateStr(cDate);
            const total = Number(c.Total || 0);

            // Consumos de hoy (abiertos y cerrados)
            if (cDateStr === todayStr) {
              consumosDelDia++;
            }

            // Consumos abiertos
            if (c.Estado === 'En curso') {
              abiertos++;
            }
            
            // Solo consumos cerrados para ingresos
            if (c.Estado === 'Cerrado') {
              cerradosTotal++;
              sumaTotal += total;
              ingresosHistorico += total;

              // Hoy
              if (cDateStr === todayStr) {
                ingresosDia += total;
              }

              // Semana
              if (cDate >= startOfWeek) {
                ingresosSem += total;
              }

              // Mes
              if (cDate >= startOfMonth) {
                ingresosMensual += total;
              }
            }
          });

          // Promedio por consumo cerrado
          setPromedioConsumo(cerradosTotal > 0 ? sumaTotal / cerradosTotal : 0);

          recent = [...consumos].sort((a: any, b: any) => new Date(b.FechaInicio).getTime() - new Date(a.FechaInicio).getTime()).slice(0, 8);

          // Gráfico de Ingresos (según el período seleccionado)
          const dias = periodoGrafico === '7d' ? 7 : periodoGrafico === '15d' ? 15 : 30;
          const lastDays = Array.from({length: dias}, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - (dias - 1 - i));
            return { 
              dateStr: getLocalDateStr(d), 
              display: d.toLocaleDateString('es-PE', { weekday: 'short', day: 'numeric' }), 
              total: 0,
              consumos: 0
            };
          });

          consumos.forEach((c: any) => {
            if (c.Estado === 'Cerrado' && c.Total) {
               const cDateStr = getLocalDateStr(new Date(c.FechaInicio));
               const dayObj = lastDays.find(d => d.dateStr === cDateStr);
               if (dayObj) {
                  dayObj.total += Number(c.Total);
                  dayObj.consumos++;
               }
            }
          });
          setRevenueData(lastDays);

          // Mejor día
          const best = lastDays.reduce((max, d) => d.total > max.total ? d : max, { display: '-', total: 0, dateStr: '', consumos: 0 });
          setMejorDia({ dia: best.display, total: best.total });
        } else {
          setTotalConsumos(0);
          setRevenueData([]);
          setMejorDia({ dia: '-', total: 0 });
          setPromedioConsumo(0);
        }

        setIngresosHoy(ingresosDia);
        setIngresosSemana(ingresosSem);
        setIngresosMes(ingresosMensual);
        setIngresosTotal(ingresosHistorico);
        setConsumosHoy(consumosDelDia);
        setConsumosAbiertos(abiertos);
        setRecentActivity(recent);

        // Mesas
        if (mesas) {
          setTotalMesas(mesas.length);
          setMesasActivas(mesas.filter((m: any) => m.Estado === 'Ocupada').length);
        }

        // Clientes
        if (clientes) {
          setClientesTotal(clientes.length);
        }

        // Reservas
        if (reservas) {
          const reservasHoyCount = reservas.filter((r: any) => r.Estado !== 'Cancelada' && r.Estado !== 'Completada').length;
          setReservasHoy(reservasHoyCount);
        }

      } catch (error) {
        console.error("Error loading dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
    const interval = setInterval(loadDashboardData, 30000);
    return () => clearInterval(interval);
  }, [periodoGrafico]);

  const occupancyPercent = totalMesas > 0 ? Math.round((mesasActivas / totalMesas) * 100) : 0;

  const formatMoney = (n: number) => `S/ ${n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="space-y-6 w-full mx-auto mt-4 pb-8">
      
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#1e293b] via-[#1e3a5f] to-[#312e81] rounded-3xl shadow-xl p-6 sm:p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-8 right-20 w-3 h-3 bg-yellow-400 rounded-full"
        />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-5">
            <motion.div 
              animate={{ y: [0, -6, 0], rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30"
            >
              <LayoutDashboard className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Dashboard
              </h1>
              <p className="text-slate-300 font-medium mt-1 text-sm sm:text-base">
                Bienvenido · Resumen en tiempo real
              </p>
              <div className="flex items-center gap-2 mt-2">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                />
                <span className="text-xs sm:text-sm text-emerald-400 font-bold">Sistema activo</span>
                <span className="text-slate-500 text-sm ml-1">·</span>
                <span className="text-slate-400 text-xs sm:text-sm font-medium ml-1">
                  {new Date().toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Revenue Cards Row - Lo más importante */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Ingresos Hoy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 shadow-lg shadow-emerald-200/50 text-white relative overflow-hidden"
        >
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-emerald-100 uppercase tracking-wider">Hoy</span>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Coins className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">{formatMoney(ingresosHoy)}</h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">{consumosHoy} consumos</span>
          </div>
        </motion.div>

        {/* Ingresos Semana */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-lg shadow-blue-200/50 text-white relative overflow-hidden"
        >
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-blue-100 uppercase tracking-wider">Esta Semana</span>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">{formatMoney(ingresosSemana)}</h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">Lunes a hoy</span>
          </div>
        </motion.div>

        {/* Ingresos Mes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6 shadow-lg shadow-purple-200/50 text-white relative overflow-hidden"
        >
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-violet-100 uppercase tracking-wider">Este Mes</span>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">{formatMoney(ingresosMes)}</h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">{new Date().toLocaleDateString('es-PE', { month: 'long' })}</span>
          </div>
        </motion.div>

        {/* Ingresos Total */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 shadow-lg shadow-orange-200/50 text-white relative overflow-hidden"
        >
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-amber-100 uppercase tracking-wider">Total Histórico</span>
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <BadgeDollarSign className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">{formatMoney(ingresosTotal)}</h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">{totalConsumos} consumos totales</span>
          </div>
        </motion.div>
      </div>

      {/* Mini Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
              <Grid className="w-4.5 h-4.5 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase">Mesas</span>
          </div>
          <p className="text-2xl font-black text-[#1e293b]">{mesasActivas} / {totalMesas}</p>
          <p className="text-xs text-gray-400 font-medium mt-1">{occupancyPercent}% ocupación</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Receipt className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase">En curso</span>
          </div>
          <p className="text-2xl font-black text-[#1e293b]">{consumosAbiertos}</p>
          <p className="text-xs text-gray-400 font-medium mt-1">Consumos activos</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center">
              <Users className="w-4.5 h-4.5 text-orange-600" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase">Clientes</span>
          </div>
          <p className="text-2xl font-black text-[#1e293b]">{clientesTotal}</p>
          <p className="text-xs text-gray-400 font-medium mt-1">Registrados</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center">
              <Calendar className="w-4.5 h-4.5 text-purple-600" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase">Reservas</span>
          </div>
          <p className="text-2xl font-black text-[#1e293b]">{reservasHoy}</p>
          <p className="text-xs text-gray-400 font-medium mt-1">Pendientes</p>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200"
              >
                <TrendingUp className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h2 className="text-xl font-black text-[#1e293b]">Ingresos por Día</h2>
                <p className="text-sm text-gray-500 font-medium">Ganancias diarias</p>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
              {(['7d', '15d', '30d'] as const).map(p => (
                <button key={p} onClick={() => setPeriodoGrafico(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    periodoGrafico === p ? 'bg-white text-[#1e293b] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {p === '7d' ? '7 días' : p === '15d' ? '15 días' : '30 días'}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 min-h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#059669" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="display" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} dy={10} interval={periodoGrafico === '30d' ? 3 : periodoGrafico === '15d' ? 1 : 0} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} tickFormatter={(value) => `S/${value}`} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', fontSize: '14px', fontWeight: 600 }}
                  formatter={(value: any, name: any) => [`S/ ${Number(value).toFixed(2)}`, 'Ingresos']}
                  labelStyle={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '4px', fontSize: '13px' }}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="total" fill="url(#barGradient)" radius={[8, 8, 0, 0]} maxBarSize={40}>
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.dateStr === getLocalDateStr(new Date()) ? '#f59e0b' : 'url(#barGradient)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Quick Stats Sidebar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-200"
            >
              <BarChart3 className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <h2 className="text-xl font-black text-[#1e293b]">Estadísticas</h2>
              <p className="text-sm text-gray-500 font-medium">Datos clave</p>
            </div>
          </div>
          
          <div className="space-y-4 flex-1">
            {/* Promedio por consumo */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-emerald-800">Ticket Promedio</span>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">Por consumo cerrado</p>
                </div>
                <span className="text-xl font-black text-emerald-600">{formatMoney(promedioConsumo)}</span>
              </div>
            </div>

            {/* Mejor Día */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-4 border border-amber-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-amber-800">Mejor Día</span>
                  <p className="text-xs text-amber-600 font-medium mt-0.5">{mejorDia.dia}</p>
                </div>
                <span className="text-xl font-black text-amber-600">{formatMoney(mejorDia.total)}</span>
              </div>
            </div>

            {/* Ocupación */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-blue-800">Ocupación</span>
                <span className="text-xl font-black text-blue-600">{occupancyPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-blue-200/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${occupancyPercent}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </div>
              <p className="text-xs text-blue-600 font-medium mt-1.5">{mesasActivas} de {totalMesas} mesas</p>
            </div>

            {/* Total Consumos */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-4 border border-purple-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-purple-800">Total Consumos</span>
                  <p className="text-xs text-purple-600 font-medium mt-0.5">Histórico del sistema</p>
                </div>
                <span className="text-xl font-black text-purple-600">{totalConsumos}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Activity Feed */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-200"
            >
              <Activity className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <h2 className="text-xl font-black text-[#1e293b]">Actividad Reciente</h2>
              <p className="text-sm text-gray-500 font-medium">Últimos consumos registrados</p>
            </div>
          </div>
          <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
            {recentActivity.length} registros
          </span>
        </div>
        
        {recentActivity.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4"
            >
              <Activity className="w-8 h-8 text-gray-400" />
            </motion.div>
            <h3 className="text-xl font-black text-gray-600 mb-1">Sin actividad reciente</h3>
            <p className="text-sm text-gray-400 font-medium">Los consumos aparecerán aquí cuando se registren</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {recentActivity.map((activity, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-100 hover:border-slate-200 hover:shadow-sm cursor-default"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-sm ${
                      activity.Estado === 'En curso' ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' : 'bg-gradient-to-br from-gray-400 to-gray-600'
                    }`}
                  >
                    M{activity.Mesas?.NumeroMesa || activity.IdMesa}
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800">
                      {activity.Estado === 'En curso' ? '🟢 Activo' : '⚫ Cerrado'}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {activity.Clientes?.Nombre || 'Cliente'} · {activity.TipoCobro}
                    </p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="text-[10px] font-bold text-slate-400">
                    {new Date(activity.FechaInicio).toLocaleDateString('es-PE', { day: '2-digit', month: 'short' })} {new Date(activity.FechaInicio).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="text-base font-black text-slate-700">
                    S/ {Number(activity.Total || 0).toFixed(2)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
