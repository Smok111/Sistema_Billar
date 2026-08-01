"use client";

import { useState, useEffect } from "react";
import { Plus, Search, ReceiptText, Info, Edit, Trash2, X, AlertTriangle, Grid2X2, User, CheckCircle2, Calendar, Settings } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function ConsumosPage() {
  const [consumos, setConsumos] = useState<any[]>([]);
  const [mesas, setMesas] = useState<any[]>([]);
  const [clientes, setClientes] = useState<any[]>([]);
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(new Date());

  // Estados del Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nuevaMesa, setNuevaMesa] = useState("");
  const [nuevoCliente, setNuevoCliente] = useState("");
  const [nuevoUsuario, setNuevoUsuario] = useState("");
  const [nuevoTipoCobro, setNuevoTipoCobro] = useState("Por Hora");
  const [isSaving, setIsSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  
  const [infoItem, setInfoItem] = useState<any>(null);

  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [closeItem, setCloseItem] = useState<any>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Configuración de Tarifas
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [configRates, setConfigRates] = useState({ ph: 6.00, pmh: 3.00, plm: 0.10 });
  const [tempRates, setTempRates] = useState({ ph: 6.00, pmh: 3.00, plm: 0.10 });

  useEffect(() => {
    const saved = localStorage.getItem('tarifasBillar');
    if (saved) {
      try {
        setConfigRates(JSON.parse(saved));
        setTempRates(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const saveConfig = () => {
    setConfigRates(tempRates);
    localStorage.setItem('tarifasBillar', JSON.stringify(tempRates));
    toast.success("Tarifas globales actualizadas correctamente");
    setIsConfigOpen(false);
  };

  // Timer para actualizar cada segundo
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [consumosData, mesasData, clientesData, usuariosData] = await Promise.all([
        fetchAPI('/consumo'),
        fetchAPI('/mesa'),
        fetchAPI('/cliente'),
        fetchAPI('/usuario')
      ]);
      setConsumos(consumosData || []);
      setMesas(mesasData || []);
      setClientes(clientesData || []);
      setUsuarios(usuariosData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setNuevaMesa("");
    setNuevoCliente("");
    setNuevoUsuario("");
    setNuevoTipoCobro("Por Hora");
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setNuevaMesa(item.IdMesa?.toString() || "");
    setNuevoCliente(item.IdCliente?.toString() || "");
    setNuevoUsuario(item.IdUsuario?.toString() || "");
    setNuevoTipoCobro(item.TipoCobro || "Por Hora");
    setIsModalOpen(true);
  };

  const handleCreateConsumo = async () => {
    if (!nuevaMesa || !nuevoCliente || !nuevoUsuario || !nuevoTipoCobro) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    setIsSaving(true);
    try {
      if (editingItem) {
        // Edit mode
        await fetchAPI(`/consumo/${editingItem.IdConsumo}`, {
          method: 'PUT',
          body: JSON.stringify({ 
            IdMesa: parseInt(nuevaMesa),
            IdCliente: parseInt(nuevoCliente),
            IdUsuario: parseInt(nuevoUsuario),
            TipoCobro: nuevoTipoCobro
          }),
        });
        toast.success("Consumo actualizado exitosamente");
      } else {
        // Create mode
        await fetchAPI('/consumo', {
          method: 'POST',
          body: JSON.stringify({ 
            IdMesa: parseInt(nuevaMesa),
            IdCliente: parseInt(nuevoCliente),
            IdUsuario: parseInt(nuevoUsuario),
            TipoCobro: nuevoTipoCobro,
            FechaInicio: new Date().toISOString(),
            Estado: "En curso",
            PrecioHora: configRates.ph,
            PrecioMediaHora: configRates.pmh,
            PrecioLibrePorMinuto: configRates.plm,
            CostoMesa: 0,
            TotalProductos: 0,
            Total: 0
          }),
        });

        await fetchAPI(`/mesa/${nuevaMesa}`, {
          method: 'PUT',
          body: JSON.stringify({ Estado: "Ocupada" })
        });
        toast.success("Consumo iniciado exitosamente");
      }

      setNuevaMesa("");
      setNuevoCliente("");
      setNuevoUsuario("");
      setIsModalOpen(false);
      setEditingItem(null);
      loadData();
    } catch (error) {
      console.error("Error creando consumo:", error);
      toast.error("Error al iniciar el consumo");
    } finally {
      setIsSaving(false);
    }
  };
  const handleDelete = async () => {
    if (!deleteItem) return;
    setIsDeleting(true);
    try {
      // Free the mesa back to "Disponible"
      if (deleteItem.IdMesa) {
        await fetchAPI(`/mesa/${deleteItem.IdMesa}`, { method: 'PUT', body: JSON.stringify({ Estado: "Disponible" }) });
      }
      await fetchAPI(`/consumo/${deleteItem.IdConsumo}`, { method: 'DELETE' });
      toast.success("Consumo eliminado exitosamente");
      setDeleteItem(null);
      loadData();
    } catch (error) {
      toast.error("Error al eliminar consumo");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCloseConsumo = async () => {
    if (!closeItem) return;
    setIsClosing(true);
    try {
      // Obtenemos los datos actuales
      const res = await fetchAPI(`/consumo/${closeItem.IdConsumo}`);
      const currentData = res || closeItem;

      // Calculamos tiempo exacto en base a ms
      const start = new Date(currentData.FechaInicio);
      const end = new Date();
      const diffMs = Math.max(0, end.getTime() - start.getTime());
      const exactMins = diffMs / 60000;
      const minsRounded = Math.floor(exactMins);

      let costoMesa = Number(currentData.CostoMesa || 0);
      if (costoMesa === 0) {
         const ph = Number(currentData.PrecioHora || configRates.ph);
         const pmh = Number(currentData.PrecioMediaHora || configRates.pmh);
         const plm = Number(currentData.PrecioLibrePorMinuto || configRates.plm);
         const tipo = (currentData.TipoCobro || '').toLowerCase();
         if (tipo.includes('hora')) costoMesa = (exactMins / 60) * ph;
         else if (tipo.includes('media')) costoMesa = (exactMins / 30) * pmh;
         else if (tipo.includes('libre')) costoMesa = exactMins * plm;
         else costoMesa = exactMins * plm;
      }
      
      // Redondear a los 10 céntimos más cercanos (ej: 2.32 -> 2.30, 2.36 -> 2.40)
      costoMesa = Math.round(costoMesa * 10) / 10;
      
      await fetchAPI(`/consumo/${closeItem.IdConsumo}`, {
        method: 'PUT',
        body: JSON.stringify({ 
          IdMesa: currentData.IdMesa,
          IdCliente: currentData.IdCliente,
          IdUsuario: currentData.IdUsuario,
          TipoCobro: currentData.TipoCobro,
          Estado: 'Cerrado',
          FechaFin: end.toISOString(),
          MinutosJugados: minsRounded,
          CostoMesa: Number(Number(costoMesa).toFixed(2)),
          Total: Number(Number(costoMesa).toFixed(2)) + Number(currentData.TotalProductos || 0)
        }),
      });

      await fetchAPI(`/mesa/${closeItem.IdMesa}`, {
        method: 'PUT',
        body: JSON.stringify({ Estado: "Disponible" })
      });

      toast.success("Consumo cerrado exitosamente");
      setCloseItem(null);
      loadData();
    } catch (error) {
      console.error(error);
      toast.error("Error al cerrar consumo");
    } finally {
      setIsClosing(false);
    }
  };

  const getInitial = (name: string) => name?.charAt(0)?.toUpperCase() || "?";

  // Calcular tiempo transcurrido en tiempo real
  const getElapsedTime = (fechaInicio: string) => {
    const start = new Date(fechaInicio);
    const diff = Math.max(0, Math.floor((now.getTime() - start.getTime()) / 1000));
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    return {
      formatted: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
      totalMinutes: diff / 60
    };
  };

  // Calcular costo en tiempo real
  const calculateLiveCost = (consumo: any) => {
    if (!consumo?.FechaInicio) return 0;
    const isActive = consumo.Estado === 'En curso' || consumo.Estado === 'Abierto' || consumo.Estado === 'Activo';
    if (!isActive) return Number(consumo.CostoMesa || 0);
    const { totalMinutes } = getElapsedTime(consumo.FechaInicio);
    const tipo = (consumo.TipoCobro || '').toLowerCase();
    const ph = Number(consumo.PrecioHora || configRates.ph);
    const pmh = Number(consumo.PrecioMediaHora || configRates.pmh);
    const plm = Number(consumo.PrecioLibrePorMinuto || configRates.plm);
    
    let calculated = 0;
    if (tipo.includes('hora')) calculated = (totalMinutes / 60) * ph;
    else if (tipo.includes('media')) calculated = (totalMinutes / 30) * pmh;
    else if (tipo.includes('libre')) calculated = totalMinutes * plm;
    else calculated = totalMinutes * plm;
    
    // Redondear a los 10 céntimos más cercanos para la vista en vivo
    return Math.round(calculated * 10) / 10;
  };

  return (
    <>
      <div className="space-y-6 w-full mx-auto mt-4">
      
      {/* Top Card: Encabezado y Buscador */}
      <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner"
            >
              <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><ReceiptText className="w-10 h-10 text-white" /></motion.div>
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Gestión de Consumos</h1>
              <p className="text-gray-500 font-medium mt-1">
                <motion.span animate={{ rotate: [0, 15, -5, 15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-gray-400 mr-2 origin-bottom-right inline-block">👤</motion.span> 
                Total: <span className="font-bold text-gray-700">{consumos.length}</span> consumos registrados
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setTempRates(configRates);
                setIsConfigOpen(true);
              }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-full px-5 py-4 shadow-sm transition-all flex items-center border border-gray-200"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
                <Settings className="w-5 h-5 sm:mr-2 text-gray-500" /> 
              </motion.div>
              <span className="hidden sm:inline">Tarifas</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCreateModal}
              className="bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-full px-6 py-4 shadow-md transition-all flex items-center"
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nuevo Consumo
            </motion.button>
          </div>
        </div>

        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
          <Input 
            placeholder="Buscar por mesa, cliente o estado..." 
            className="w-full pl-12 pr-4 py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#4f80ff] text-base shadow-sm"
          />
        </div>
      </div>

      {/* Tabla de Consumos */}
      {loading ? (
        <div className="bg-white rounded-3xl shadow-sm p-6 overflow-hidden">
          <div className="space-y-4">
            <Skeleton className="h-10 w-full rounded-xl" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-12 w-[10%]" />
                <Skeleton className="h-12 w-[15%] rounded-full" />
                <Skeleton className="h-12 w-[10%]" />
                <Skeleton className="h-12 w-[10%]" />
                <Skeleton className="h-12 flex-1" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 overflow-hidden">
          <div className="overflow-x-auto pb-4">
            <table className="w-full text-center border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-gray-100 text-xs font-black text-[#1e3a8a] uppercase tracking-wider">
                  <th className="pb-4 px-2">Mesa</th>
                  <th className="pb-4 px-2">Cliente</th>
                  <th className="pb-4 px-2">Usuario</th>
                  <th className="pb-4 px-2">Tipo Cobro</th>
                  <th className="pb-4 px-2">Minutos</th>
                  <th className="pb-4 px-2">Tiempo</th>
                  <th className="pb-4 px-2">Costo Mesa</th>
                  <th className="pb-4 px-2">Total Productos</th>
                  <th className="pb-4 px-2">Total</th>
                  <th className="pb-4 px-2">Estado</th>
                  <th className="pb-4 px-2">Fecha Inicio</th>
                  <th className="pb-4 px-2">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-xs font-bold text-gray-700">
                {consumos.map((consumo, i) => (
                  <motion.tr 
                    key={consumo.IdConsumo}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    {/* Mesa */}
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-8 bg-emerald-400 rounded-full" />
                        <span className="text-[#1e293b]">Mesa {consumo.Mesas?.NumeroMesa || consumo.IdMesa || '?'}</span>
                      </div>
                    </td>
                    
                    {/* Cliente */}
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#fbbf24] flex flex-shrink-0 items-center justify-center text-white font-bold text-[10px]">
                          {getInitial(consumo.Clientes?.Nombre || 'C')}
                        </div>
                        <span className="text-[#1e293b] w-20 truncate" title={consumo.Clientes?.Nombre || 'Desconocido'}>
                          {(consumo.Clientes?.Nombre || 'Desconocido').split(' ').slice(0, 2).join(' ')}
                        </span>
                      </div>
                    </td>

                    {/* Usuario */}
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#60a5fa] flex items-center justify-center text-white font-bold text-[10px]">
                          {getInitial(consumo.Usuarios?.NomUsuario || 'U')}
                        </div>
                        <span className="text-[#1e293b]">{consumo.Usuarios?.NomUsuario || 'Admin'}</span>
                      </div>
                    </td>

                    {/* Tipo Cobro */}
                    <td className="py-4 px-2">
                      <span className="bg-[#06b6d4] text-white px-2 py-0.5 rounded-full font-bold text-[10px] uppercase">
                        {consumo.TipoCobro}
                      </span>
                    </td>

                    {/* Minutos y Tiempo - LIVE */}
                    {(() => {
                      const isActive = consumo.Estado === 'En curso' || consumo.Estado === 'Abierto' || consumo.Estado === 'Activo';
                      const elapsed = consumo.FechaInicio ? getElapsedTime(consumo.FechaInicio) : null;
                      const liveCost = calculateLiveCost(consumo);

                      let closedMins = consumo.MinutosJugados || 0;
                      let closedFormatted = '00:00:00';
                      if (!isActive && consumo.FechaInicio && consumo.FechaFin) {
                        const start = new Date(consumo.FechaInicio).getTime();
                        const end = new Date(consumo.FechaFin).getTime();
                        const diffSecs = Math.max(0, Math.floor((end - start) / 1000));
                        closedMins = Math.floor(diffSecs / 60);
                        const h = Math.floor(diffSecs / 3600);
                        const m = Math.floor((diffSecs % 3600) / 60);
                        const s = diffSecs % 60;
                        closedFormatted = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
                      }

                      return (
                        <>
                          <td className="py-4 px-2">
                            {isActive && elapsed ? Math.floor(elapsed.totalMinutes) : closedMins}
                          </td>
                          <td className="py-4 px-2 font-mono">
                            {isActive && elapsed ? (
                              <span className="text-emerald-600 font-black">
                                {elapsed.formatted}
                              </span>
                            ) : (
                              <span className="text-gray-500">
                                {closedFormatted}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex flex-col">
                              <span className="text-gray-400 text-[10px]">S/</span>
                              <span className={isActive ? 'text-amber-600 font-black' : ''}>{liveCost.toFixed(2)}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex flex-col">
                              <span className="text-gray-400 text-[10px]">S/</span>
                              <span>{Number(consumo.TotalProductos || 0).toFixed(2)}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2 text-[#1e3a8a] font-black">
                            <div className="flex flex-col">
                              <span className="text-gray-400 text-[10px]">S/</span>
                              <span className={isActive ? 'text-blue-700' : ''}>{(liveCost + Number(consumo.TotalProductos || 0)).toFixed(2)}</span>
                            </div>
                          </td>
                        </>
                      );
                    })()}

                    {/* Estado */}
                    <td className="py-4 px-2">
                      {(() => {
                        const isActive = consumo.Estado === 'En curso' || consumo.Estado === 'Abierto' || consumo.Estado === 'Activo';
                        return (
                          <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] uppercase text-white ${
                            isActive ? 'bg-emerald-500' : consumo.Estado === 'Cerrado' ? 'bg-gray-500' : 'bg-gray-600'
                          }`}>
                            {isActive && (
                              <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse" />
                            )}
                            {consumo.Estado}
                          </span>
                        );
                      })()}
                    </td>

                    {/* Fecha Inicio */}
                    <td className="py-4 px-2 text-[11px] text-gray-500">
                      {consumo.FechaInicio ? new Date(consumo.FechaInicio).toLocaleString() : 'N/A'}
                    </td>

                    {/* Acciones */}
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-1.5">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setInfoItem(consumo)}
                          className="w-7 h-7 rounded-full bg-[#60a5fa] hover:bg-[#3b82f6] text-white flex items-center justify-center transition-colors shadow-sm"
                        >
                          <Info className="w-3.5 h-3.5" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.location.href = `/consumos/editar/${consumo.IdConsumo}`}
                          className="w-7 h-7 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-white flex items-center justify-center transition-colors shadow-sm"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => consumo.Estado !== 'Cerrado' && setCloseItem(consumo)}
                          disabled={consumo.Estado === 'Cerrado'}
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                            consumo.Estado === 'Cerrado' ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-600'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setDeleteItem(consumo)}
                          className="w-7 h-7 rounded-full bg-[#f87171] hover:bg-[#ef4444] text-white flex items-center justify-center transition-colors shadow-sm"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>

      {/* MODAL CONFIGURACIÓN TARIFAS */}
      <AnimatePresence>
        {isConfigOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 to-gray-500" />
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-800">Tarifas Globales</h2>
                </div>
                <button onClick={() => setIsConfigOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Precio Por Hora (S/)</label>
                  <Input 
                    type="number" step="0.10"
                    value={tempRates.ph}
                    onChange={(e) => setTempRates({...tempRates, ph: parseFloat(e.target.value) || 0})}
                    className="w-full py-6 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-gray-400 text-lg font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Precio Media Hora (S/)</label>
                  <Input 
                    type="number" step="0.10"
                    value={tempRates.pmh}
                    onChange={(e) => setTempRates({...tempRates, pmh: parseFloat(e.target.value) || 0})}
                    className="w-full py-6 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-gray-400 text-lg font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Precio Libre (Por Minuto) (S/)</label>
                  <Input 
                    type="number" step="0.01"
                    value={tempRates.plm}
                    onChange={(e) => setTempRates({...tempRates, plm: parseFloat(e.target.value) || 0})}
                    className="w-full py-6 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-gray-400 text-lg font-medium"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <Button variant="outline" onClick={() => setIsConfigOpen(false)} className="rounded-xl py-6 px-6 text-gray-600 font-bold border-gray-200">
                  Cancelar
                </Button>
                <Button onClick={saveConfig} className="bg-gray-800 hover:bg-gray-900 text-white rounded-xl py-6 px-8 font-bold shadow-md">
                  Guardar Tarifas
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Creación de Consumo */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay desenfocado */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSaving && setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            {/* Contenido del Modal */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => !isSaving && setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
                disabled={isSaving}
              >
                <X className="w-5 h-5 text-slate-400 hover:text-slate-600" />
              </button>

              <div className="flex flex-col items-center mb-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner mb-4">
                  <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><ReceiptText className="w-10 h-10 text-white" /></motion.div>
                </div>
                <h2 className="text-2xl font-black text-[#1e3a8a]">{editingItem ? "Editar Consumo" : "Registrar Nuevo Consumo"}</h2>
                <p className="text-sm text-slate-500 font-medium">{editingItem ? "Modifique los datos del consumo" : "Complete los datos para abrir una mesa"}</p>
              </div>

              <div className="space-y-4">
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Grid2X2 className="w-4 h-4 text-blue-500" /></motion.div>
                      Mesa <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={nuevaMesa}
                      onChange={(e) => setNuevaMesa(e.target.value)}
                      disabled={isSaving}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white"
                    >
                      <option value="" disabled>-- Seleccione una mesa --</option>
                      {mesas.filter(m => m.Estado === 'Disponible' || (editingItem && m.IdMesa === editingItem.IdMesa)).map(mesa => (
                        <option key={mesa.IdMesa} value={mesa.IdMesa}>
                          Mesa {mesa.NumeroMesa}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Info className="w-4 h-4 text-blue-500" /></motion.div>
                      Tipo de Cobro <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={nuevoTipoCobro}
                      onChange={(e) => setNuevoTipoCobro(e.target.value)}
                      disabled={isSaving}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white"
                    >
                      <option value="Por Hora">Por Hora (S/ {configRates.ph.toFixed(2)})</option>
                      <option value="Media Hora">Media Hora (S/ {configRates.pmh.toFixed(2)})</option>
                      <option value="Libre">Libre (S/ {configRates.plm.toFixed(2)} x min)</option>
                    </select>
                  </div>
                </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><User className="w-4 h-4 text-blue-500" /></motion.div>
                      Cliente <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={nuevoCliente}
                      onChange={(e) => setNuevoCliente(e.target.value)}
                      disabled={isSaving}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white"
                    >
                      <option value="" disabled>-- Seleccione un cliente --</option>
                    {clientes.map(cli => (
                      <option key={cli.IdCliente} value={cli.IdCliente}>
                        {cli.Nombre}
                      </option>
                    ))}
                  </select>
                </div>
                                <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><User className="w-4 h-4 text-blue-500" /></motion.div>
                      Usuario / Mesero <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={nuevoUsuario}
                      onChange={(e) => setNuevoUsuario(e.target.value)}
                      disabled={isSaving}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white"
                    >
                      <option value="" disabled>-- Seleccione un mesero --</option>
                    {usuarios.map(user => (
                      <option key={user.IdUsuario} value={user.IdUsuario}>
                        {user.NomUsuario} {user.ApeUsuario}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Vista previa del tiempo */}
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center">
                      <ReceiptText className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-blue-800">Vista previa del tiempo</span>
                  </div>
                  <ul className="text-xs text-blue-700 space-y-1 ml-8">
                    <li>• Fecha: <span className="font-bold">{new Date().toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' })}</span></li>
                    <li>• Fin estimado: <span className="font-bold">Se calcula en tiempo real</span></li>
                    <li>• Tiempo transcurrido: <span className="font-bold">00:00:00</span></li>
                    <li>• Costo estimado: <span className="font-bold">S/ 0.00</span></li>
                  </ul>
                </div>

                {/* Tarifas configuradas */}
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-blue-800">Tarifas configuradas</span>
                  </div>
                  <ul className="text-xs text-blue-700 space-y-1 ml-8">
                    <li>• Hora: <span className="font-bold">S/ {configRates.ph.toFixed(2)}</span></li>
                    <li>• Media hora: <span className="font-bold">S/ {configRates.pmh.toFixed(2)}</span></li>
                    <li>• Libre: <span className="font-bold">S/ {configRates.plm.toFixed(2)} por minuto</span></li>
                  </ul>
                </div>

                {/* Info importante */}
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center">
                      <AlertTriangle className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-blue-800">Información importante</span>
                  </div>
                  <ul className="text-xs text-blue-700 space-y-1 ml-8">
                    <li>• La Fecha de Inicio se registra automáticamente al momento de crear.</li>
                    <li>• El Estado inicial será <span className="font-bold">"En curso"</span>.</li>
                    <li>• El cálculo final se realiza al cerrar el consumo.</li>
                  </ul>
                </div>
                <div className="pt-4 flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 rounded-2xl py-6 font-bold text-slate-600 hover:bg-slate-50 border-slate-200"
                    disabled={isSaving}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleCreateConsumo}
                    disabled={isSaving || (!editingItem && mesas.filter(m => m.Estado === 'Disponible').length === 0)}
                    className="flex-1 rounded-2xl py-6 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white shadow-md shadow-blue-200"
                  >
                    {isSaving ? "Guardando..." : (editingItem ? "Actualizar" : "Iniciar Mesa")}
                  </Button>
                </div>
                {!editingItem && mesas.filter(m => m.Estado === 'Disponible').length === 0 && (
                  <p className="text-sm text-red-500 text-center font-bold">No hay mesas disponibles.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Eliminar */}
      <AnimatePresence>
        {deleteItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isDeleting && setDeleteItem(null)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }} className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4"><motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}><AlertTriangle className="w-8 h-8 text-red-500" /></motion.div></div>
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Eliminar consumo?</h2>
              <p className="text-sm text-slate-500 mb-6">Se eliminará el consumo <span className="font-bold text-slate-700">#{deleteItem.IdConsumo}</span> y la mesa volverá a estar disponible.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setDeleteItem(null)} className="flex-1 rounded-2xl py-5 font-bold" disabled={isDeleting}>Cancelar</Button>
                <Button onClick={handleDelete} disabled={isDeleting} className="flex-1 rounded-2xl py-5 font-bold bg-red-500 hover:bg-red-600 text-white">
                  {isDeleting ? "Eliminando..." : "Sí, Eliminar"}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Modal de Información (Ticket Summary) */}
      <AnimatePresence>
        {infoItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setInfoItem(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 overflow-y-auto max-h-[90vh]"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center text-blue-500">
                    <Info className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-black text-[#1e3a8a]">Detalles del Consumo</h2>
                </div>
                <button onClick={() => setInfoItem(null)} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="space-y-0">
                {/* ID Consumo */}
                <div className="flex items-center gap-4 py-3 border-b border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-500">
                    <span className="font-bold">#</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">ID Consumo</p>
                    <p className="font-bold text-slate-800">#{infoItem.IdConsumo}</p>
                  </div>
                </div>

                {/* Mesa */}
                <div className="flex items-center gap-4 py-3 border-b border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-500">
                    <Grid2X2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Mesa</p>
                    <p className="font-bold text-slate-800">Mesa {infoItem.Mesas?.NumeroMesa || infoItem.IdMesa}</p>
                  </div>
                </div>

                {/* Cliente */}
                <div className="flex items-center gap-4 py-3 border-b border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-500">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Cliente</p>
                    <p className="font-bold text-slate-800">{infoItem.Clientes?.Nombre || 'Desconocido'}</p>
                  </div>
                </div>

                {/* Usuario Responsable */}
                <div className="flex items-center gap-4 py-3 border-b border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-500">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Usuario Responsable</p>
                    <p className="font-bold text-slate-800">{infoItem.Usuarios?.NomUsuario ? `${infoItem.Usuarios.NomUsuario} ${infoItem.Usuarios.ApeUsuario || ''}` : 'Admin Sistema'}</p>
                  </div>
                </div>

                {/* Estado */}
                <div className="flex items-center gap-4 py-3 border-b border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-emerald-500">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Estado</p>
                    <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-black uppercase text-white ${
                      ['En curso', 'Activo', 'Abierto'].includes(infoItem.Estado) ? 'bg-emerald-500' : 'bg-gray-500'
                    }`}>
                      {infoItem.Estado}
                    </span>
                  </div>
                </div>

                {/* Fecha Inicio */}
                <div className="flex items-center gap-4 py-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center text-blue-500">
                    <div className="w-4 h-4 border-2 border-current rounded-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-0.5">Fecha Inicio</p>
                    <p className="font-bold text-slate-800">{new Date(infoItem.FechaInicio).toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' })}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-6 pt-2">
                <Button variant="outline" onClick={() => setInfoItem(null)} className="rounded-xl py-6 px-6 font-bold text-slate-600 border-slate-200">
                  Cerrar
                </Button>
                <Button 
                  onClick={() => {
                    setInfoItem(null);
                    window.location.href = `/consumos/editar/${infoItem.IdConsumo}`;
                  }} 
                  className="rounded-xl py-6 px-8 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white flex items-center gap-2"
                >
                  <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Edit className="w-4 h-4" /></motion.div> Editar
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Modal de Cerrar Consumo */}
      <AnimatePresence>
        {closeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => !isClosing && setCloseItem(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 text-center"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-emerald-200 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-black text-[#1e3a8a]">Cerrar Consumo</h2>
                </div>
                <button onClick={() => !isClosing && setCloseItem(null)} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
              </div>

              <h2 className="text-2xl font-black text-[#1e293b] mb-2">¿Cerrar este consumo?</h2>
              <p className="text-slate-500 font-medium mb-6">Vas a cerrar el consumo:</p>

              <div className="bg-red-50 text-red-500 font-bold px-4 py-2 rounded-xl inline-flex items-center gap-2 mb-4">
                <User className="w-4 h-4" />
                Consumo #{closeItem.IdConsumo} - Mesa {closeItem.Mesas?.NumeroMesa || closeItem.IdMesa}
              </div>

              <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold px-4 py-3 rounded-xl flex items-center justify-center gap-2 mb-8">
                <Calendar className="w-4 h-4" />
                La mesa se liberará automáticamente
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setCloseItem(null)}
                  disabled={isClosing}
                  className="flex-1 rounded-2xl py-6 font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 border-none"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={handleCloseConsumo}
                  disabled={isClosing}
                  className="flex-1 rounded-2xl py-6 font-bold bg-[#10b981] hover:bg-[#059669] text-white shadow-md shadow-emerald-200"
                >
                  {isClosing ? "Cerrando..." : "Cerrar Consumo"}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
