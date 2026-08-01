"use client";

import { useState, useEffect } from "react";
import { Plus, Search, CalendarClock, Square, CheckCircle2, CheckCircle, XCircle, PencilLine, Edit, Trash2, X, AlertTriangle, Info, User, Grid2X2, Clock, Users, Calendar, AlignLeft } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function ReservasPage() {
  const [reservas, setReservas] = useState<any[]>([]);
  const [clientes, setClientes] = useState<any[]>([]);
  const [mesas, setMesas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Form fields
  const [nuevaFecha, setNuevaFecha] = useState("");
  const [nuevaHoraInicio, setNuevaHoraInicio] = useState("");
  const [nuevaHoraFin, setNuevaHoraFin] = useState("");
  const [nuevoIdCliente, setNuevoIdCliente] = useState("");
  const [nuevoIdMesa, setNuevoIdMesa] = useState("");
  const [nuevoNumPersonas, setNuevoNumPersonas] = useState("");
  const [nuevoEstado, setNuevoEstado] = useState("Pendiente");
  const [nuevasObservaciones, setNuevasObservaciones] = useState("");

  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [reservasData, clientesData, mesasData] = await Promise.all([
        fetchAPI('/reserva'),
        fetchAPI('/cliente'),
        fetchAPI('/mesa')
      ]);
      setReservas(reservasData || []);
      setClientes(clientesData || []);
      setMesas(mesasData || []);
    } catch (error) {
      console.error("Error fetching reservas:", error);
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
    setNuevaFecha(new Date().toISOString().split('T')[0]);
    setNuevaHoraInicio("18:00");
    setNuevaHoraFin("20:00");
    setNuevoIdCliente("");
    setNuevoIdMesa("");
    setNuevoNumPersonas("2");
    setNuevoEstado("Pendiente");
    setNuevasObservaciones("");
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setNuevaFecha(new Date(item.FechaReserva).toISOString().split('T')[0]);
    setNuevaHoraInicio(item.HoraInicio);
    setNuevaHoraFin(item.HoraFin);
    setNuevoIdCliente(String(item.IdCliente));
    setNuevoIdMesa(String(item.IdMesa));
    setNuevoNumPersonas(String(item.NumeroPersonas));
    setNuevoEstado(item.Estado);
    setNuevasObservaciones(item.Observaciones || "");
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!nuevaFecha || !nuevaHoraInicio || !nuevaHoraFin || !nuevoIdCliente || !nuevoIdMesa || !nuevoNumPersonas) {
      toast.error("Complete todos los campos obligatorios");
      return;
    }

    setIsSaving(true);
    const data = {
      FechaReserva: new Date(nuevaFecha).toISOString(),
      HoraInicio: nuevaHoraInicio,
      HoraFin: nuevaHoraFin,
      IdCliente: parseInt(nuevoIdCliente),
      IdMesa: parseInt(nuevoIdMesa),
      NumeroPersonas: parseInt(nuevoNumPersonas),
      Estado: nuevoEstado,
      Observaciones: nuevasObservaciones
    };

    try {
      if (editingItem) {
        await fetchAPI(`/reserva/${editingItem.IdReserva}`, { method: 'PUT', body: JSON.stringify(data) });
        toast.success("Reserva actualizada exitosamente");
      } else {
        await fetchAPI('/reserva', { method: 'POST', body: JSON.stringify(data) });
        toast.success("Reserva creada exitosamente");
      }
      setIsModalOpen(false);
      setEditingItem(null);
      loadData();
    } catch (error) {
      toast.error(editingItem ? "Error al actualizar" : "Error al crear la reserva");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setIsDeleting(true);
    try {
      await fetchAPI(`/reserva/${deleteItem.IdReserva}`, { method: 'DELETE' });
      toast.success("Reserva eliminada exitosamente");
      setDeleteItem(null);
      loadData();
    } catch (error) {
      toast.error("Error al eliminar la reserva");
    } finally {
      setIsDeleting(false);
    }
  };

  const reservasFiltradas = reservas.filter(r => {
    if (filtroActivo === "Todos") return true;
    return r.Estado === filtroActivo;
  });

  return (
    <>
      <div className="space-y-6 max-w-6xl mx-auto mt-4">
        
        {/* Top Card: Encabezado, Buscador y Filtros */}
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-6">
              <motion.div 
                animate={{ rotate: [0, -20, 20, 0], y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner"
              >
                <CalendarClock className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Gestión de Reservas</h1>
                <p className="text-gray-500 font-medium mt-1 flex items-center">
                  <motion.span 
                    animate={{ rotate: [0, 15, -5, 15, 0] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="text-gray-400 mr-2 origin-bottom-right inline-block"
                  >
                    👤
                  </motion.span> 
                  Total: <span className="font-bold text-gray-700 ml-1 mr-1">{reservas.length}</span> reservas registradas
                </p>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCreateModal}
              className="bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-full px-6 py-6 shadow-md transition-all flex items-center"
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nueva Reserva
            </motion.button>
          </div>

          <div className="relative w-full mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
            <Input 
              placeholder="Buscar por cliente, mesa o estado..." 
              className="w-full pl-12 pr-4 py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#4f80ff] text-base shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => setFiltroActivo("Todos")}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${filtroActivo === "Todos" ? "bg-[#4f80ff] text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>
              Todos
            </button>
            <button onClick={() => setFiltroActivo("Pendiente")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${filtroActivo === "Pendiente" ? "bg-orange-50 border border-orange-200 text-orange-600" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Square className="w-4 h-4 text-orange-400" /></motion.div> Pendiente
            </button>
            <button onClick={() => setFiltroActivo("Confirmada")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${filtroActivo === "Confirmada" ? "bg-green-50 border border-green-200 text-green-600" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><CheckCircle2 className="w-4 h-4 text-green-400" /></motion.div> Confirmada
            </button>
            <button onClick={() => setFiltroActivo("Completada")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${filtroActivo === "Completada" ? "bg-blue-50 border border-blue-200 text-blue-600" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}><CheckCircle className="w-4 h-4 text-blue-400" /></motion.div> Completada
            </button>
            <button onClick={() => setFiltroActivo("Cancelada")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${filtroActivo === "Cancelada" ? "bg-red-50 border border-red-200 text-red-600" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>
              <motion.div animate={{ rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 3 }}><XCircle className="w-4 h-4 text-red-400" /></motion.div> Cancelada
            </button>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-48" />
          </div>
        ) : reservas.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-16 text-center">
            <motion.div 
              animate={{ 
                rotate: [0, -15, 5, -10, 0],
                x: [0, -4, 4, -2, 0],
                y: [0, -4, 0]
              }} 
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-16 h-16 mb-6 text-blue-400 opacity-80"
            >
              <Edit strokeWidth={1.5} className="w-full h-full" />
            </motion.div>
            <h2 className="text-3xl font-black text-[#1e293b] mb-3">No hay reservas registradas</h2>
            <p className="text-gray-500 font-medium mb-8">Comienza agregando tu primera reserva al sistema</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openCreateModal}
              className="bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-full px-8 py-6 shadow-md transition-all flex items-center">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Agregar Primera Reserva
            </motion.button>
          </motion.div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-gray-100">
                  <tr>
                    <th className="py-4 px-6">Cliente</th>
                    <th className="py-4 px-6 text-center">Mesa</th>
                    <th className="py-4 px-6 text-center">Personas</th>
                    <th className="py-4 px-6 text-center">Fecha / Hora</th>
                    <th className="py-4 px-6 text-center">Estado</th>
                    <th className="py-4 px-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reservasFiltradas.map((reserva, idx) => {
                    const client = clientes.find(c => c.IdCliente === reserva.IdCliente);
                    const mesa = mesas.find(m => m.IdMesa === reserva.IdMesa);
                    return (
                      <motion.tr 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={reserva.IdReserva} className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                              {client?.Nombre?.charAt(0) || 'C'}
                            </div>
                            <span className="font-bold text-slate-800">{client?.Nombre || 'Desconocido'}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-bold text-slate-700">
                          {mesa ? `Mesa ${mesa.NumeroMesa}` : 'N/A'}
                        </td>
                        <td className="py-4 px-6 text-center font-medium text-slate-600">
                          {reserva.NumeroPersonas}
                        </td>
                        <td className="py-4 px-6 text-center text-slate-600">
                          <div className="flex flex-col items-center">
                            <span className="font-bold">{new Date(reserva.FechaReserva).toLocaleDateString()}</span>
                            <span className="text-xs">{reserva.HoraInicio} - {reserva.HoraFin}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className={`px-3 py-1 rounded-full font-bold text-[10px] uppercase text-white ${
                            reserva.Estado === 'Confirmada' ? 'bg-green-500' :
                            reserva.Estado === 'Pendiente' ? 'bg-orange-500' :
                            reserva.Estado === 'Cancelada' ? 'bg-red-500' : 'bg-blue-500'
                          }`}>
                            {reserva.Estado}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-center gap-2">
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => openEditModal(reserva)}
                              className="w-8 h-8 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-white flex items-center justify-center transition-colors shadow-sm">
                              <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Edit className="w-4 h-4" /></motion.div></motion.div>
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setDeleteItem(reserva)}
                              className="w-8 h-8 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white flex items-center justify-center transition-colors shadow-sm">
                              <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}><motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}><Trash2 className="w-4 h-4" /></motion.div></motion.div>
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal Crear/Editar Reserva */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isSaving && setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }} className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 max-h-[90vh] overflow-y-auto">
              <button onClick={() => !isSaving && setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors" disabled={isSaving}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner mb-4">
                  <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><CalendarClock className="w-10 h-10 text-white" /></motion.div>
                </div>
                <h2 className="text-2xl font-black text-[#1e3a8a]">{editingItem ? "Editar Reserva" : "Registrar Nueva Reserva"}</h2>
                <p className="text-sm text-slate-500 font-medium">{editingItem ? "Modifica los datos de la reserva" : "Complete los datos de la reserva"}</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><User className="w-4 h-4 text-blue-500" /></motion.div> Cliente <span className="text-red-500">*</span>
                    </label>
                    <select value={nuevoIdCliente} onChange={(e) => setNuevoIdCliente(e.target.value)} disabled={isSaving}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 text-base bg-white">
                      <option value="" disabled>-- Seleccione cliente --</option>
                      {clientes.map(cli => (
                        <option key={cli.IdCliente} value={cli.IdCliente}>{cli.Nombre}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Grid2X2 className="w-4 h-4 text-blue-500" /></motion.div> Mesa <span className="text-red-500">*</span>
                    </label>
                    <select value={nuevoIdMesa} onChange={(e) => setNuevoIdMesa(e.target.value)} disabled={isSaving}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 text-base bg-white">
                      <option value="" disabled>-- Seleccione mesa --</option>
                      {mesas.map(m => (
                        <option key={m.IdMesa} value={m.IdMesa}>Mesa {m.NumeroMesa}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Calendar className="w-4 h-4 text-blue-500" /></motion.div> Fecha <span className="text-red-500">*</span>
                    </label>
                    <Input type="date" value={nuevaFecha} onChange={(e) => setNuevaFecha(e.target.value)} className="w-full px-4 py-6 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Users className="w-4 h-4 text-blue-500" /></motion.div> Personas <span className="text-red-500">*</span>
                    </label>
                    <Input type="number" min="1" value={nuevoNumPersonas} onChange={(e) => setNuevoNumPersonas(e.target.value)} placeholder="2" className="w-full px-4 py-6 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Clock className="w-4 h-4 text-blue-500" /></motion.div> Hora Inicio <span className="text-red-500">*</span>
                    </label>
                    <Input type="time" value={nuevaHoraInicio} onChange={(e) => setNuevaHoraInicio(e.target.value)} className="w-full px-4 py-6 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Clock className="w-4 h-4 text-blue-500" /></motion.div> Hora Fin <span className="text-red-500">*</span>
                    </label>
                    <Input type="time" value={nuevaHoraFin} onChange={(e) => setNuevaHoraFin(e.target.value)} className="w-full px-4 py-6 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Info className="w-4 h-4 text-blue-500" /></motion.div> Estado <span className="text-red-500">*</span>
                    </label>
                    <select value={nuevoEstado} onChange={(e) => setNuevoEstado(e.target.value)} disabled={isSaving}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 text-base bg-white">
                      <option value="Pendiente">Pendiente</option>
                      <option value="Confirmada">Confirmada</option>
                      <option value="Completada">Completada</option>
                      <option value="Cancelada">Cancelada</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><AlignLeft className="w-4 h-4 text-blue-500" /></motion.div> Notas (Opcional)
                    </label>
                    <Input value={nuevasObservaciones} onChange={(e) => setNuevasObservaciones(e.target.value)} placeholder="Ej. Cumpleaños..." className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-blue-700 font-medium leading-relaxed">
                      <span className="font-bold">Información:</span> Asegúrate de que la mesa seleccionada no tenga otra reserva en el mismo horario.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold text-slate-600 hover:bg-slate-50 border-slate-200" disabled={isSaving}>Cancelar</Button>
                  <Button onClick={handleSave} disabled={isSaving} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white shadow-md shadow-blue-200">
                    {isSaving ? "Guardando..." : (editingItem ? "Actualizar Reserva" : "Crear Reserva")}
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
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Eliminar reserva?</h2>
              <p className="text-sm text-slate-500 mb-6">Estás a punto de eliminar la reserva permanentemente.</p>
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
    </>
  );
}
