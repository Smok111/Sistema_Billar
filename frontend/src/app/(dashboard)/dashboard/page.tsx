"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, Grid, DollarSign, Calendar, TrendingUp, Activity, Coins, ArrowUpRight, ArrowDownRight, Clock, Zap, Target, Star } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function DashboardPage() {
  const [ingresosHoy, setIngresosHoy] = useState(0);
  const [mesasActivas, setMesasActivas] = useState(0);
  const [totalMesas, setTotalMesas] = useState(0);
  const [clientesTotal, setClientesTotal] = useState(0);
  const [reservasHoy, setReservasHoy] = useState(0);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [revenueData, setRevenueData] = useState<any[]>([]);
  const [totalConsumos, setTotalConsumos] = useState(0);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [consumos, mesas, clientes, reservas] = await Promise.all([
          fetchAPI('/consumo'),
          fetchAPI('/mesa'),
          fetchAPI('/cliente'),
          fetchAPI('/reserva')
        ]);

        // Ingresos Hoy
        const todayStr = new Date().toDateString();
        let ingresos = 0;
        let recent = [];
        if (consumos) {
          setTotalConsumos(consumos.length);
          ingresos = consumos
            .filter((c: any) => c.Estado === 'Cerrado' && new Date(c.FechaInicio).toDateString() === todayStr)
            .reduce((sum: number, c: any) => sum + Number(c.Total || 0), 0);
          
          recent = [...consumos].sort((a: any, b: any) => new Date(b.FechaInicio).getTime() - new Date(a.FechaInicio).getTime()).slice(0, 6);
          
          // Gráfico de Ingresos (Últimos 7 días)
          const last7Days = Array.from({length: 7}, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - (6 - i));
            return { 
              dateStr: d.toDateString(), 
              display: d.toLocaleDateString('es-PE', { weekday: 'short', day: 'numeric' }), 
              total: 0 
            };
          });

          consumos.forEach((c: any) => {
            if (c.Estado === 'Cerrado' && c.Total) {
               const cDateStr = new Date(c.FechaInicio).toDateString();
               const dayObj = last7Days.find(d => d.dateStr === cDateStr);
               if (dayObj) {
                  dayObj.total += Number(c.Total);
               }
            }
          });
          setRevenueData(last7Days);
        }
        setIngresosHoy(ingresos);
        setRecentActivity(recent);

        // Mesas Activas
        if (mesas) {
          setTotalMesas(mesas.length);
          setMesasActivas(mesas.filter((m: any) => m.Estado === 'Ocupada').length);
        }

        // Clientes
        if (clientes) {
          setClientesTotal(clientes.length);
        }

        // Reservas Hoy
        if (reservas) {
          const reservasHoyCount = reservas.filter((r: any) => r.Estado !== 'Cancelada' && r.Estado !== 'Completada').length;
          setReservasHoy(reservasHoyCount);
        }

      } catch (error) {
        console.error("Error loading dashboard data", error);
      }
    };

    loadDashboardData();
    const interval = setInterval(loadDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const occupancyPercent = totalMesas > 0 ? Math.round((mesasActivas / totalMesas) * 100) : 0;

  const statsCards = [
    {
      title: "Ingresos del Día",
      value: `S/ ${ingresosHoy.toFixed(2)}`,
      icon: Coins,
      gradient: "from-emerald-500 to-teal-600",
      bgGlow: "bg-emerald-400/20",
      badge: "En tiempo real",
      badgeColor: "text-emerald-700 bg-emerald-100",
      trendIcon: ArrowUpRight,
      trendColor: "text-emerald-500",
    },
    {
      title: "Mesas Ocupadas",
      value: `${mesasActivas} / ${totalMesas}`,
      icon: Grid,
      gradient: "from-blue-500 to-indigo-600",
      bgGlow: "bg-blue-400/20",
      badge: `${occupancyPercent}% ocupación`,
      badgeColor: "text-blue-700 bg-blue-100",
      trendIcon: Target,
      trendColor: "text-blue-500",
    },
    {
      title: "Clientes Registrados",
      value: `${clientesTotal}`,
      icon: Users,
      gradient: "from-orange-400 to-rose-500",
      bgGlow: "bg-orange-400/20",
      badge: "Total acumulado",
      badgeColor: "text-orange-700 bg-orange-100",
      trendIcon: Star,
      trendColor: "text-orange-500",
    },
    {
      title: "Reservas Activas",
      value: `${reservasHoy}`,
      icon: Calendar,
      gradient: "from-violet-500 to-purple-600",
      bgGlow: "bg-purple-400/20",
      badge: "Pendientes",
      badgeColor: "text-purple-700 bg-purple-100",
      trendIcon: Clock,
      trendColor: "text-purple-500",
    },
  ];

  return (
    <div className="space-y-8 w-full mx-auto mt-4 pb-8">
      
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-[#1e293b] via-[#1e3a5f] to-[#312e81] rounded-3xl shadow-xl p-8 sm:p-10 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-8 right-20 w-3 h-3 bg-yellow-400 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-12 right-40 w-2 h-2 bg-indigo-400 rounded-full"
        />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ y: [0, -6, 0], rotate: [0, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30"
            >
              <LayoutDashboard className="w-12 h-12 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Dashboard
              </h1>
              <p className="text-slate-300 font-medium mt-2 text-base">
                Bienvenido de vuelta · Resumen en tiempo real
              </p>
              <div className="flex items-center gap-2 mt-3">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                />
                <span className="text-sm text-emerald-400 font-bold">Sistema activo</span>
                <span className="text-slate-500 text-sm ml-2">·</span>
                <span className="text-slate-400 text-sm font-medium ml-2">
                  {new Date().toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-2xl px-8 py-5 shadow-lg transition-all flex items-center gap-3 border border-white/10"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <span className="text-base">Reporte Mensual</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, idx) => (
          <motion.div 
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden group cursor-default"
          >
            <div className={`absolute -right-8 -top-8 w-32 h-32 ${card.bgGlow} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{card.title}</p>
                <h3 className="text-3xl font-black text-[#1e293b] tracking-tight">{card.value}</h3>
              </div>
              <motion.div 
                animate={{ y: [0, -4, 0], rotate: [0, -5, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: idx * 0.3 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg`}
              >
                <card.icon className="w-7 h-7" />
              </motion.div>
            </div>
            
            <div className="mt-5 flex items-center gap-3">
              <span className={`text-sm font-bold ${card.badgeColor} px-3 py-1.5 rounded-full`}>
                {card.badge}
              </span>
              <motion.div animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <card.trendIcon className={`w-4 h-4 ${card.trendColor}`} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Chart - Takes 2 columns */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200"
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-black text-[#1e293b]">Ingresos Semanal</h2>
                <p className="text-base text-gray-500 font-medium">Últimos 7 días</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 rounded-full bg-emerald-500" 
              />
              <span className="text-sm font-bold text-emerald-700">Actualizado</span>
            </div>
          </div>
          <div className="flex-1 min-h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="display" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 14, fontWeight: 600}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 14, fontWeight: 600}} tickFormatter={(value) => `S/${value}`} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', fontSize: '15px', fontWeight: 600 }}
                  formatter={(value: any) => [`S/ ${Number(value).toFixed(2)}`, 'Ingresos']}
                  labelStyle={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '4px', fontSize: '14px' }}
                />
                <Area type="monotone" dataKey="total" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorTotal)" activeDot={{ r: 8, strokeWidth: 3, stroke: '#fff', fill: '#10b981' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Quick Stats / Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-200"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-black text-[#1e293b]">Resumen Rápido</h2>
              <p className="text-base text-gray-500 font-medium">Estado actual</p>
            </div>
          </div>
          
          <div className="space-y-5 flex-1">
            {/* Mesa Availability */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-blue-800">Ocupación de Mesas</span>
                <span className="text-2xl font-black text-blue-600">{occupancyPercent}%</span>
              </div>
              <div className="w-full h-3 bg-blue-200/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${occupancyPercent}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              </div>
              <p className="text-sm text-blue-600 font-medium mt-2">{mesasActivas} ocupadas de {totalMesas} totales</p>
            </div>

            {/* Total Consumos */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-emerald-800">Total Consumos</span>
                  <p className="text-sm text-emerald-600 font-medium mt-1">Registrados en sistema</p>
                </div>
                <span className="text-3xl font-black text-emerald-600">{totalConsumos}</span>
              </div>
            </div>

            {/* Reservas Summary */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-5 border border-purple-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-purple-800">Reservas Pendientes</span>
                  <p className="text-sm text-purple-600 font-medium mt-1">Por confirmar o atender</p>
                </div>
                <span className="text-3xl font-black text-purple-600">{reservasHoy}</span>
              </div>
            </div>

            {/* Clientes Summary */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-base font-bold text-orange-800">Base de Clientes</span>
                  <p className="text-sm text-orange-600 font-medium mt-1">Clientes únicos</p>
                </div>
                <span className="text-3xl font-black text-orange-600">{clientesTotal}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Activity Feed */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-200"
            >
              <Activity className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-black text-[#1e293b]">Actividad Reciente</h2>
              <p className="text-base text-gray-500 font-medium">Últimos consumos registrados</p>
            </div>
          </div>
          <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
            {recentActivity.length} registros
          </span>
        </div>
        
        {recentActivity.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5"
            >
              <Activity className="w-10 h-10 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-black text-gray-600 mb-2">Sin actividad reciente</h3>
            <p className="text-lg text-gray-400 font-medium">Los consumos aparecerán aquí cuando se registren</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentActivity.map((activity, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all border border-slate-100 hover:border-slate-200 hover:shadow-sm cursor-default"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-sm ${
                      activity.Estado === 'En curso' ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' : 'bg-gradient-to-br from-gray-400 to-gray-600'
                    }`}
                  >
                    M{activity.Mesas?.NumeroMesa || activity.IdMesa}
                  </motion.div>
                  <div>
                    <h4 className="text-base font-black text-slate-800">
                      Consumo {activity.Estado === 'En curso' ? 'activo' : 'cerrado'}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">
                      {activity.Clientes?.Nombre || 'Cliente'} · {activity.TipoCobro}
                    </p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-xs font-bold text-slate-400 mb-1">
                    {new Date(activity.FechaInicio).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="text-lg font-black text-slate-700">
                    S/ {Number(activity.Total || 0).toFixed(2)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>
  );
}
