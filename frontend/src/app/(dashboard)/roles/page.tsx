"use client";

import { useState, useEffect } from "react";
import { Plus, Search, ShieldCheck, Info, Edit, Trash2, X, AlertTriangle } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function RolesPage() {
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nuevoNomRol, setNuevoNomRol] = useState("");
  const [nuevoDesRol, setNuevoDesRol] = useState("");
  const [permisosSeleccionados, setPermisosSeleccionados] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const MODULES = [
    { id: "dashboard", label: "Dashboard General" },
    { id: "mesas", label: "Control de Mesas" },
    { id: "reservas", label: "Reservas" },
    { id: "productos", label: "Productos / Ventas" },
    { id: "consumos", label: "Consumos Activos" },
    { id: "detalles", label: "Detalles" },
    { id: "clientes", label: "Gestión de Clientes" },
    { id: "admin", label: "Administración (Roles, Usuarios)" },
  ];

  const handleTogglePermiso = (id: string) => {
    setPermisosSeleccionados(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchAPI('/rol');
      setRoles(data || []);
    } catch (error) {
      console.error("Error fetching roles:", error);
      toast.error("Error al cargar los roles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setNuevoNomRol(""); setNuevoDesRol(""); setPermisosSeleccionados([]);
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setNuevoNomRol(item.NomRol || "");
    setNuevoDesRol(item.DesRol || "");
    try {
      setPermisosSeleccionados(item.Permisos ? JSON.parse(item.Permisos) : []);
    } catch {
      setPermisosSeleccionados([]);
    }
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!nuevoNomRol.trim()) {
      toast.error("El nombre del rol es obligatorio");
      return;
    }
    setIsSaving(true);
    try {
      const body = { 
        NomRol: nuevoNomRol.trim(), 
        DesRol: nuevoDesRol.trim(),
        Permisos: JSON.stringify(permisosSeleccionados)
      };
      if (editingItem) {
        await fetchAPI(`/rol/${editingItem.IdRol}`, { method: 'PUT', body: JSON.stringify(body) });
        toast.success("Rol actualizado exitosamente");
      } else {
        await fetchAPI('/rol', { method: 'POST', body: JSON.stringify(body) });
        toast.success("Rol creado exitosamente");
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
      await fetchAPI(`/rol/${deleteItem.IdRol}`, { method: 'DELETE' });
      toast.success("Rol eliminado exitosamente");
      setDeleteItem(null);
      loadData();
    } catch (error) {
      console.error("Error eliminando:", error);
      toast.error("Error al eliminar el rol. Puede que tenga usuarios asignados.");
    } finally {
      setIsDeleting(false);
    }
  };

  const getRoleColor = (name: string) => {
    const n = (name || "").toLowerCase();
    if (n.includes("admin")) return "from-[#1e3a8a] to-[#3b82f6]";
    if (n.includes("mesero")) return "from-[#059669] to-[#34d399]";
    if (n.includes("cajero")) return "from-[#d97706] to-[#fbbf24]";
    return "from-[#6b21a8] to-[#a855f7]";
  };

  return (
    <>
      <div className="space-y-6 max-w-5xl mx-auto mt-4">
      
      {/* Top Card */}
      <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <motion.div animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Gestión de Roles</h1>
              <p className="text-gray-500 font-medium mt-1">
                <motion.span animate={{ rotate: [0, 15, -5, 15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-gray-400 mr-2 origin-bottom-right inline-block">👤</motion.span> Total: <span className="font-bold text-gray-700">{roles.length}</span> roles registrados
              </p>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openCreateModal}
            className="bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-full px-6 py-6 shadow-md transition-all flex items-center">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nuevo Rol
          </motion.button>
        </div>
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
          <Input placeholder="Buscar por nombre de rol..." className="w-full pl-12 pr-4 py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#4f80ff] text-base shadow-sm" />
        </div>
      </div>

      {/* Grid de Roles como tarjetas */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Skeleton className="h-8 w-32 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((rol, i) => (
            <motion.div key={rol.IdRol} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${getRoleColor(rol.NomRol)}`} />
              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getRoleColor(rol.NomRol)} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800">{rol.NomRol}</h3>
                  <span className="text-xs text-slate-400 font-medium">ID: {rol.IdRol}</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">{rol.DesRol || "Sin descripción"}</p>
              <div className="flex justify-end gap-2">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => openEditModal(rol)}
                  className="w-9 h-9 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-white flex items-center justify-center transition-colors shadow-sm">
                  <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Edit className="w-4 h-4" /></motion.div>
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setDeleteItem(rol)}
                  className="w-9 h-9 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white flex items-center justify-center transition-colors shadow-sm">
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}><Trash2 className="w-4 h-4" /></motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
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
                  <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><ShieldCheck className="w-10 h-10 text-white" /></motion.div>
                </div>
                <h2 className="text-2xl font-black text-[#1e3a8a]">{editingItem ? "Editar Rol" : "Registrar Nuevo Rol"}</h2>
                <p className="text-sm text-slate-500 font-medium">{editingItem ? "Modifica los datos del rol" : "Complete los datos del rol"}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ShieldCheck className="w-4 h-4 text-blue-500" /></motion.div>
                    Nombre del Rol <span className="text-red-500">*</span>
                  </label>
                  <Input value={nuevoNomRol} onChange={(e) => setNuevoNomRol(e.target.value)} placeholder="Ej. Administrador, Usuario, Moderador" className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Info className="w-4 h-4 text-blue-500" /></motion.div>
                    Descripción <span className="text-red-500">*</span>
                  </label>
                  <textarea value={nuevoDesRol} onChange={(e) => setNuevoDesRol(e.target.value)} placeholder="Descripción de las funciones y permisos del rol..." className="w-full px-4 py-5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white h-24 resize-none" disabled={isSaving} />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-3 mt-4">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    Permisos de Acceso
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto p-1 rounded-xl bg-slate-50 border border-slate-100">
                    {MODULES.map(mod => (
                      <label key={mod.id} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${permisosSeleccionados.includes(mod.id) ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200 hover:bg-slate-100'}`}>
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          checked={permisosSeleccionados.includes(mod.id)}
                          onChange={() => handleTogglePermiso(mod.id)}
                          disabled={isSaving}
                        />
                        <span className={`text-sm font-semibold ${permisosSeleccionados.includes(mod.id) ? 'text-blue-800' : 'text-slate-700'}`}>{mod.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 mt-2">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-blue-700 font-medium leading-relaxed">
                      <span className="font-bold">Información:</span> Los roles definen los permisos y acceso a funciones del sistema para los usuarios.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold text-slate-600 hover:bg-slate-50 border-slate-200" disabled={isSaving}>Cancelar</Button>
                  <Button onClick={handleSave} disabled={isSaving} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white shadow-md shadow-blue-200">
                    {isSaving ? "Guardando..." : (editingItem ? "Actualizar Rol" : "Registrar Rol")}
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
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Eliminar rol?</h2>
              <p className="text-sm text-slate-500 mb-6">Estás a punto de eliminar el rol <span className="font-bold text-slate-700">"{deleteItem.NomRol}"</span>. Los usuarios con este rol podrían verse afectados.</p>
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
