"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Edit, Trash2, Search, Grid2X2, X, AlertTriangle, Clock, Coins, Info, Check } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function MesasPage() {
  const [mesas, setMesas] = useState<any[]>([]);
  const [consumos, setConsumos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(new Date());

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numeroMesa, setNumeroMesa] = useState("");
  const [estadoMesa, setEstadoMesa] = useState("Disponible");
  const [isSaving, setIsSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [closeItem, setCloseItem] = useState<any>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Timer para actualizar cada segundo
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [mesasData, consumosData] = await Promise.all([
        fetchAPI('/mesa'),
        fetchAPI('/consumo')
      ]);
      const sorted = (mesasData || []).sort((a: any, b: any) => a.NumeroMesa - b.NumeroMesa);
      setMesas(sorted);
      setConsumos(consumosData || []);
    } catch (error) {
      console.error("Error fetching:", error);
      toast.error("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  // Encontrar consumo activo de una mesa
  const getActiveConsumo = (idMesa: number) => {
    return consumos.find(c => c.IdMesa === idMesa && (c.Estado === "En curso" || c.Estado === "Abierto" || c.Estado === "Activo"));
  };

  // Calcular tiempo transcurrido
  const getElapsedTime = (fechaInicio: string) => {
    const start = new Date(fechaInicio);
    const diff = Math.max(0, Math.floor((now.getTime() - start.getTime()) / 1000));
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    return {
      formatted: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
      totalMinutes: diff / 60,
      totalSeconds: diff
    };
  };

  // Calcular costo en tiempo real
  const calculateCost = (consumo: any) => {
    if (!consumo?.FechaInicio) return 0;
    const { totalMinutes } = getElapsedTime(consumo.FechaInicio);
    const tipo = (consumo.TipoCobro || "").toLowerCase();
    if (tipo.includes("hora")) return (totalMinutes / 60) * 6.00;
    if (tipo.includes("media")) return (totalMinutes / 30) * 3.00;
    if (tipo.includes("libre")) return totalMinutes * 0.10;
    return totalMinutes * 0.10;
  };

  const handleCloseConsumo = async (consumo: any) => {
    setIsClosing(true);
    try {
      const res = await fetchAPI(`/consumo/${consumo.IdConsumo}`);
      const currentData = res || consumo;

      const start = new Date(currentData.FechaInicio);
      const diffMs = Math.max(0, new Date().getTime() - start.getTime());
      const exactMins = diffMs / 60000;
      
      let costoMesa = Number(currentData.CostoMesa || 0);
      if (costoMesa === 0) {
         const ph = Number(currentData.PrecioHora || 6);
         const pmh = Number(currentData.PrecioMediaHora || 3);
         const plm = Number(currentData.PrecioLibrePorMinuto || 0.10);
         const tipo = (currentData.TipoCobro || '').toLowerCase();
         if (tipo.includes('hora')) costoMesa = (exactMins / 60) * ph;
         else if (tipo.includes('media')) costoMesa = (exactMins / 30) * pmh;
         else costoMesa = exactMins * plm;
      }
      
      costoMesa = Math.round(costoMesa * 10) / 10;
      
      await fetchAPI(`/consumo/${consumo.IdConsumo}`, {
        method: 'PUT',
        body: JSON.stringify({ 
          IdMesa: currentData.IdMesa,
          IdCliente: currentData.IdCliente,
          IdUsuario: currentData.IdUsuario,
          TipoCobro: currentData.TipoCobro,
          Estado: 'Cerrado',
          FechaFin: new Date().toISOString(),
          MinutosJugados: Math.floor(exactMins),
          CostoMesa: Number(Number(costoMesa).toFixed(2)),
          Total: Number(Number(costoMesa).toFixed(2)) + Number(currentData.TotalProductos || 0)
        }),
      });

      await fetchAPI(`/mesa/${consumo.IdMesa}`, {
        method: 'PUT',
        body: JSON.stringify({ Estado: "Disponible" })
      });

      toast.success("Consumo cerrado exitosamente");
      loadData();
    } catch (error) {
      toast.error("Error al cerrar consumo");
    } finally {
      setIsClosing(false);
      setCloseItem(null);
    }
  };

  const openCreateModal = () => {
    setEditingItem(null);
    setNumeroMesa("");
    setEstadoMesa("Disponible");
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setNumeroMesa(String(item.NumeroMesa));
    setEstadoMesa(item.Estado);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!numeroMesa) { toast.error("El número de mesa es obligatorio"); return; }
    setIsSaving(true);
    try {
      if (editingItem) {
        await fetchAPI(`/mesa/${editingItem.IdMesa}`, { method: 'PUT', body: JSON.stringify({ NumeroMesa: parseInt(numeroMesa), Estado: estadoMesa }) });
        toast.success("Mesa actualizada exitosamente");
      } else {
        await fetchAPI('/mesa', { method: 'POST', body: JSON.stringify({ NumeroMesa: parseInt(numeroMesa), Estado: estadoMesa }) });
        toast.success("Mesa agregada exitosamente");
      }
      setIsModalOpen(false);
      setEditingItem(null);
      loadData();
    } catch (error) {
      toast.error(editingItem ? "Error al actualizar" : "Error al crear la mesa");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setIsDeleting(true);
    try {
      await fetchAPI(`/mesa/${deleteItem.IdMesa}`, { method: 'DELETE' });
      toast.success("Mesa eliminada exitosamente");
      setDeleteItem(null);
      loadData();
    } catch (error) {
      toast.error("Error al eliminar la mesa");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="space-y-6 w-full mx-auto mt-4">
      
      {/* Top Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-4 sm:p-8 mb-2 sm:mb-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-6">
            <motion.div 
              animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "circInOut" }}
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner shrink-0"
            >
              <Grid2X2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-3xl font-black text-[#1e3a8a] tracking-tight">Gestión de Mesas</h1>
              <p className="text-sm sm:text-base text-gray-500 font-medium mt-1">
                <motion.span animate={{ rotate: [0, 15, -5, 15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-gray-400 mr-1 sm:mr-2 origin-bottom-right inline-block">👤</motion.span> 
                Total: <span className="font-bold text-gray-700">{mesas.length}</span> mesas
              </p>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openCreateModal}
            className="w-full sm:w-auto bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-2xl sm:rounded-full px-4 sm:px-6 py-4 sm:py-6 shadow-md transition-all flex items-center justify-center outline-none focus:outline-none ring-0 border-none">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nueva Mesa
          </motion.button>
        </div>
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input placeholder="Buscar por número de mesa..." className="w-full pl-12 pr-4 py-4 sm:py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#4f80ff] text-sm sm:text-base" />
        </div>
      </div>

      {/* Grid de Mesas */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex justify-between items-center"><Skeleton className="h-6 w-24" /><Skeleton className="h-6 w-20 rounded-full" /></div>
              <Skeleton className="h-20 w-full" />
              <div className="flex justify-center gap-3"><Skeleton className="w-10 h-10 rounded-full" /><Skeleton className="w-10 h-10 rounded-full" /></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mesas.map((mesa, i) => {
            const consumoActivo = getActiveConsumo(mesa.IdMesa);
            const isOcupada = mesa.Estado === 'Ocupada' || !!consumoActivo;
            const elapsed = consumoActivo ? getElapsedTime(consumoActivo.FechaInicio) : null;
            const costo = consumoActivo ? calculateCost(consumoActivo) : 0;
            
            return (
              <motion.div
                key={mesa.IdMesa}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`bg-white rounded-2xl shadow-sm border-2 overflow-hidden transition-shadow hover:shadow-lg ${
                  isOcupada ? 'border-red-400' : mesa.Estado === 'Reservada' ? 'border-yellow-400' : 'border-[#4ade80]'
                }`}
              >
                {/* Header */}
                <div className="p-5 pb-3">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-black text-[#1e293b]">Mesa {mesa.NumeroMesa}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      isOcupada ? 'bg-red-500' : mesa.Estado === 'Reservada' ? 'bg-yellow-500' : 'bg-[#4ade80]'
                    }`}>
                      {isOcupada ? 'Ocupada' : mesa.Estado}
                    </span>
                  </div>

                  {/* Live Timer - Solo si está ocupada */}
                  {isOcupada && consumoActivo && elapsed && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider">Tiempo en vivo</span>
                      </div>
                      
                      <div className="bg-slate-50 rounded-xl p-3 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">Inicio:</span>
                          <span className="text-[11px] text-slate-600 font-bold">
                            {new Date(consumoActivo.FechaInicio).toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' })}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">Tipo:</span>
                          <span className="text-[11px] text-blue-600 font-bold">{consumoActivo.TipoCobro}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                              <Clock className="w-3.5 h-3.5 text-emerald-500" />
                            </motion.div>
                            <span className="text-[11px] text-slate-400 font-medium">Transcurrido:</span>
                          </div>
                          <span className="text-sm text-emerald-600 font-black font-mono tracking-wider">
                            {elapsed.formatted}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                          <div className="flex items-center gap-1">
                            <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                              <Coins className="w-3.5 h-3.5 text-amber-500" />
                            </motion.div>
                            <span className="text-[11px] text-slate-400 font-medium">Costo actual:</span>
                          </div>
                          <span className="text-base text-amber-600 font-black">
                            S/ {costo.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className={`flex justify-center items-center gap-3 px-5 pb-4 ${!isOcupada ? 'pt-2' : ''}`}>
                  {isOcupada && consumoActivo && (
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setCloseItem(consumoActivo)}
                      className="w-10 h-10 rounded-full bg-[#4ade80] hover:bg-[#22c55e] text-white flex items-center justify-center transition-colors shadow-sm group">
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <Check className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  )}
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => openEditModal(mesa)}
                    className="w-10 h-10 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-white flex items-center justify-center transition-colors shadow-sm group">
                    <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
                      <Edit className="w-5 h-5 group-hover:animate-pulse" />
                    </motion.div>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setDeleteItem(mesa)}
                    className="w-10 h-10 rounded-full bg-[#f87171] hover:bg-[#ef4444] text-white flex items-center justify-center transition-colors shadow-sm group">
                    <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.4 }}>
                      <Trash2 className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>

      {/* Modal Crear/Editar */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isSaving && setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }} className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 z-10 m-4">
              <button onClick={() => !isSaving && setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors" disabled={isSaving}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner mb-4">
                  <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Grid2X2 className="w-10 h-10 text-white" /></motion.div>
                </div>
                <h2 className="text-2xl font-black text-[#1e3a8a]">{editingItem ? "Editar Mesa" : "Registrar Nueva Mesa"}</h2>
                <p className="text-sm text-slate-500 font-medium">{editingItem ? "Modifica los datos de la mesa" : "Complete los datos de la mesa"}</p>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Grid2X2 className="w-4 h-4 text-blue-500" /></motion.div>
                    Número de Mesa <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} placeholder="Ej. 1, 2, 3..." className="w-full px-4 py-6 rounded-2xl border-slate-200 focus-visible:ring-[#4f80ff] text-base" disabled={isSaving} />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Info className="w-4 h-4 text-blue-500" /></motion.div>
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Disponible", "Ocupada", "Reservada"].map(est => (
                      <button key={est} onClick={() => setEstadoMesa(est)}
                        className={`py-3 px-2 rounded-xl font-bold border-2 transition-all text-sm ${
                          estadoMesa === est 
                            ? est === "Disponible" ? "border-[#4ade80] bg-[#4ade80]/10 text-green-700" 
                            : est === "Ocupada" ? "border-red-400 bg-red-50 text-red-700"
                            : "border-yellow-400 bg-yellow-400/10 text-yellow-700"
                            : "border-slate-200 text-slate-500 hover:border-slate-300"
                        }`}>{est}</button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-blue-700 font-medium leading-relaxed">
                      <span className="font-bold">Información:</span> Las mesas te permitirán organizar el espacio de tu establecimiento y gestionar las reservas y consumos de manera eficiente.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold text-slate-600 hover:bg-slate-50 border-slate-200" disabled={isSaving}>Cancelar</Button>
                  <Button onClick={handleSave} disabled={isSaving} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white shadow-md shadow-blue-200">
                    {isSaving ? "Guardando..." : (editingItem ? "Actualizar Mesa" : "Registrar Mesa")}
                  </Button>
                </div>
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
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Eliminar mesa?</h2>
              <p className="text-sm text-slate-500 mb-6">Estás a punto de eliminar <span className="font-bold text-slate-700">"Mesa {deleteItem.NumeroMesa}"</span>.</p>
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
      {/* Modal Cerrar Consumo */}
      <AnimatePresence>
        {closeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isClosing && setCloseItem(null)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }} className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"><Check className="w-8 h-8 text-emerald-500" /></div>
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Cerrar consumo?</h2>
              <p className="text-sm text-slate-500 mb-6">Estás a punto de cerrar el consumo de la <span className="font-bold text-slate-700">Mesa {closeItem.Mesas?.NumeroMesa || closeItem.IdMesa}</span>.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setCloseItem(null)} className="flex-1 rounded-2xl py-5 font-bold" disabled={isClosing}>Cancelar</Button>
                <Button onClick={() => handleCloseConsumo(closeItem)} disabled={isClosing} className="flex-1 rounded-2xl py-5 font-bold bg-emerald-500 hover:bg-emerald-600 text-white">
                  {isClosing ? "Cerrando..." : "Sí, Cerrar"}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
