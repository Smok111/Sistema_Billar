"use client";

import { useState, useEffect } from "react";
import { Plus, Search, User, Phone, Mail, MapPin, Calendar, Settings, Edit, Trash2, IdCard, X, AlertTriangle, Info } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function ClientesPage() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoTelefono, setNuevoTelefono] = useState("");
  const [nuevoEmail, setNuevoEmail] = useState("");
  const [nuevaDireccion, setNuevaDireccion] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchAPI('/cliente');
      setClientes(data || []);
    } catch (error) {
      console.error("Error fetching clientes:", error);
      toast.error("Error al cargar los clientes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setNuevoNombre(""); setNuevoTelefono(""); setNuevoEmail(""); setNuevaDireccion("");
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setNuevoNombre(item.Nombre || "");
    setNuevoTelefono(item.Telefono || "");
    setNuevoEmail(item.Email || "");
    setNuevaDireccion(item.Direccion || "");
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!nuevoNombre.trim() || !nuevoTelefono.trim()) {
      toast.error("Nombre y Teléfono son obligatorios");
      return;
    }
    setIsSaving(true);
    try {
      const body: any = { Nombre: nuevoNombre.trim(), Telefono: nuevoTelefono.trim(), Email: nuevoEmail.trim() || null, Direccion: nuevaDireccion.trim() || null };
      if (editingItem) {
        await fetchAPI(`/cliente/${editingItem.IdCliente}`, { method: 'PUT', body: JSON.stringify(body) });
        toast.success("Cliente actualizado exitosamente");
      } else {
        body.FechaRegistro = new Date().toISOString();
        await fetchAPI('/cliente', { method: 'POST', body: JSON.stringify(body) });
        toast.success("Cliente creado exitosamente");
      }
      setIsModalOpen(false);
      setEditingItem(null);
      loadData();
    } catch (error) {
      console.error("Error:", error);
      toast.error(editingItem ? "Error al actualizar" : "Error al crear");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;
    setIsDeleting(true);
    try {
      await fetchAPI(`/cliente/${deleteItem.IdCliente}`, { method: 'DELETE' });
      toast.success("Cliente eliminado exitosamente");
      setDeleteItem(null);
      loadData();
    } catch (error) {
      console.error("Error eliminando:", error);
      toast.error("Error al eliminar el cliente");
    } finally {
      setIsDeleting(false);
    }
  };

  const getInitial = (name: string) => name?.charAt(0)?.toUpperCase() || "?";
  const getAvatarColor = (initial: string) => {
    const colors = ["bg-[#60a5fa]", "bg-[#34d399]", "bg-[#f472b6]", "bg-[#fbbf24]", "bg-[#a78bfa]", "bg-[#2dd4bf]", "bg-[#fb923c]"];
    return colors[initial.charCodeAt(0) % colors.length];
  };

  return (
    <>
      <div className="space-y-6 max-w-6xl mx-auto mt-4">
      
      {/* Top Card */}
      <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner">
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Gestión de Clientes</h1>
              <p className="text-gray-500 font-medium mt-1">
                <motion.span animate={{ rotate: [0, 15, -5, 15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-gray-400 mr-2 origin-bottom-right inline-block">👤</motion.span> Total: <span className="font-bold text-gray-700">{clientes.length}</span> clientes registrados
              </p>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openCreateModal}
            className="bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-full px-6 py-6 shadow-md transition-all flex items-center">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nuevo Cliente
          </motion.button>
        </div>
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
          <Input placeholder="Buscar por nombre, teléfono, email o dirección..." className="w-full pl-12 pr-4 py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#4f80ff] text-base shadow-sm" />
        </div>
      </div>

      {/* Tabla */}
      {loading ? (
        <div className="bg-white rounded-3xl shadow-sm p-6 overflow-hidden">
          <div className="space-y-4">
            <Skeleton className="h-10 w-full rounded-xl" />
            {[...Array(5)].map((_, i) => (<div key={i} className="flex gap-4"><Skeleton className="h-12 w-12 rounded-full" /><Skeleton className="h-12 w-[20%]" /><Skeleton className="h-12 w-[20%]" /><Skeleton className="h-12 w-[30%]" /><Skeleton className="h-12 flex-1" /></div>))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm p-2 sm:p-4 overflow-hidden relative">
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
            <table className="w-full text-center border-collapse min-w-[900px]">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="border-b border-gray-100 text-sm font-bold text-[#1e3a8a]">
                  <th className="py-4 px-2"><div className="flex items-center justify-center gap-1.5"><IdCard className="w-4 h-4 text-emerald-400" /> ID</div></th>
                  <th className="py-4 px-2"><div className="flex items-center justify-center gap-1.5"><User className="w-4 h-4 text-blue-400" /> Nombre</div></th>
                  <th className="py-4 px-2"><div className="flex items-center justify-center gap-1.5"><Phone className="w-4 h-4 text-blue-400" /> Teléfono</div></th>
                  <th className="py-4 px-2"><div className="flex items-center justify-center gap-1.5"><Mail className="w-4 h-4 text-blue-400" /> Email</div></th>
                  <th className="py-4 px-2"><div className="flex items-center justify-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> Dirección</div></th>
                  <th className="py-4 px-2"><div className="flex items-center justify-center gap-1.5"><Calendar className="w-4 h-4 text-blue-400" /> Registro</div></th>
                  <th className="py-4 px-2"><div className="flex items-center justify-center gap-1.5"><Settings className="w-4 h-4 text-blue-400" /> Acciones</div></th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold text-gray-700">
                {clientes.map((cliente, i) => (
                  <motion.tr key={cliente.IdCliente} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-[#4f80ff] text-white flex items-center justify-center text-xs font-black shadow-sm">{cliente.IdCliente}</div>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${getAvatarColor(getInitial(cliente.Nombre))} flex items-center justify-center text-white font-black text-xs shadow-sm flex-shrink-0`}>
                          {getInitial(cliente.Nombre)}
                        </div>
                        <span className="text-[#1e293b]">{cliente.Nombre}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-2 text-[#059669]">
                        <Phone className="w-4 h-4 fill-current" /><span>{cliente.Telefono}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-gray-600">
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-orange-300 fill-orange-100" />{cliente.Email || "-"}
                      </div>
                    </td>
                    <td className="py-4 px-2 text-gray-600"><div className="max-w-[150px] mx-auto leading-tight">{cliente.Direccion || "-"}</div></td>
                    <td className="py-4 px-2 text-gray-500 font-medium">{cliente.FechaRegistro ? new Date(cliente.FechaRegistro).toLocaleDateString() : 'N/A'}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => openEditModal(cliente)}
                          className="w-8 h-8 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-white flex items-center justify-center transition-colors shadow-sm">
                          <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Edit className="w-4 h-4" /></motion.div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setDeleteItem(cliente)}
                          className="w-8 h-8 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white flex items-center justify-center transition-colors shadow-sm">
                          <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}><Trash2 className="w-4 h-4" /></motion.div>
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

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>

      {/* Modal Crear/Editar */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isSaving && setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }} className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 max-h-[90vh] overflow-y-auto">
              <button onClick={() => !isSaving && setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors" disabled={isSaving}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner mb-4">
                  <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><User className="w-10 h-10 text-white" /></motion.div>
                </div>
                <h2 className="text-2xl font-black text-[#1e3a8a]">{editingItem ? "Editar Cliente" : "Registrar Nuevo Cliente"}</h2>
                <p className="text-sm text-slate-500 font-medium">{editingItem ? "Modifica los datos del cliente" : "Complete los datos del cliente"}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><User className="w-4 h-4 text-blue-500" /></motion.div>
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <Input value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} placeholder="Ej. Carlos Torres" className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Phone className="w-4 h-4 text-blue-500" /></motion.div>
                      Teléfono
                    </label>
                    <Input value={nuevoTelefono} onChange={(e) => setNuevoTelefono(e.target.value)} placeholder="Ej. 987654321" className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Mail className="w-4 h-4 text-blue-500" /></motion.div>
                      Correo Electrónico
                    </label>
                    <Input type="email" value={nuevoEmail} onChange={(e) => setNuevoEmail(e.target.value)} placeholder="carlos@correo.com" className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><MapPin className="w-4 h-4 text-blue-500" /></motion.div>
                    Dirección
                  </label>
                  <Input value={nuevaDireccion} onChange={(e) => setNuevaDireccion(e.target.value)} placeholder="Av. Principal 123" className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-blue-700 font-medium leading-relaxed">
                      <span className="font-bold">Información:</span> Los clientes registrados podrán ser asociados a consumos y reservas en el sistema.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold text-slate-600 hover:bg-slate-50 border-slate-200" disabled={isSaving}>Cancelar</Button>
                  <Button onClick={handleSave} disabled={isSaving} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white shadow-md shadow-blue-200">
                    {isSaving ? "Guardando..." : (editingItem ? "Actualizar Cliente" : "Registrar Cliente")}
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
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Eliminar cliente?</h2>
              <p className="text-sm text-slate-500 mb-6">Estás a punto de eliminar a <span className="font-bold text-slate-700">"{deleteItem.Nombre}"</span>. Esta acción no se puede deshacer.</p>
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
