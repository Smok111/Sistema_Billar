"use client";

import { useState, useEffect } from "react";
import { Plus, Search, User, FileText, LayoutList, Check, Info, Edit, Trash2, X, AlertTriangle } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Estados para Modal Crear/Editar
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Estado para Modal Eliminar
  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchAPI('/categoria');
      setCategorias(data || []);
    } catch (error) {
      console.error("Error fetching categorias:", error);
      toast.error("Error al cargar las categorías");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setNuevaCategoria("");
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setNuevaCategoria(item.Nombre);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!nuevaCategoria.trim()) {
      toast.error("El nombre de la categoría es obligatorio");
      return;
    }

    setIsSaving(true);
    try {
      if (editingItem) {
        await fetchAPI(`/categoria/${editingItem.IdCategoria}`, {
          method: 'PUT',
          body: JSON.stringify({ Nombre: nuevaCategoria.trim() }),
        });
        toast.success("Categoría actualizada exitosamente");
      } else {
        await fetchAPI('/categoria', {
          method: 'POST',
          body: JSON.stringify({ Nombre: nuevaCategoria.trim() }),
        });
        toast.success("Categoría creada exitosamente");
      }
      setNuevaCategoria("");
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
      await fetchAPI(`/categoria/${deleteItem.IdCategoria}`, { method: 'DELETE' });
      toast.success("Categoría eliminada exitosamente");
      setDeleteItem(null);
      loadData();
    } catch (error) {
      console.error("Error eliminando:", error);
      toast.error("Error al eliminar la categoría");
    } finally {
      setIsDeleting(false);
    }
  };

  const getInitial = (name: string) => name?.charAt(0)?.toUpperCase() || "?";

  return (
    <>
      <div className="space-y-6 w-full mx-auto mt-4">
      
      {/* Top Card */}
      <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center shadow-inner" 
            >
              <LayoutList className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e293b] tracking-tight">Gestión de Categorías</h1>
              <p className="text-gray-500 font-medium mt-1">
                <motion.span animate={{ rotate: [0, 15, -5, 15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-gray-400 mr-2 origin-bottom-right inline-block">👤</motion.span> 
                Total: <span className="font-bold text-gray-700">{categorias.length}</span> categorías registradas
              </p>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCreateModal}
            className="bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold rounded-full px-6 py-6 shadow-md transition-all flex items-center"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nueva Categoría
          </motion.button>
        </div>

        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
          <Input 
            placeholder="Buscar categoría por nombre..." 
            className="w-full pl-12 pr-4 py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#7e22ce] text-base shadow-sm"
          />
        </div>
      </div>

      {/* Tabla */}
      {loading ? (
        <div className="bg-white rounded-3xl shadow-sm p-6 overflow-hidden">
          <div className="space-y-4">
            <Skeleton className="h-10 w-full rounded-xl" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-12 w-16 rounded-full" />
                <Skeleton className="h-12 w-[30%]" />
                <Skeleton className="h-12 w-[20%] rounded-full" />
                <Skeleton className="h-12 flex-1" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-sm font-bold text-[#7e22ce]">
                  <th className="pb-4 px-4 font-bold">
                    <div className="flex items-center justify-center gap-1.5 text-[#9333ea]">
                      <User className="w-4 h-4 text-[#a855f7]" /> ID
                    </div>
                  </th>
                  <th className="pb-4 px-4 font-bold">
                    <div className="flex items-center justify-center gap-1.5 text-[#9333ea]">
                      <FileText className="w-4 h-4 text-[#a855f7]" /> Nombre
                    </div>
                  </th>
                  <th className="pb-4 px-4 font-bold">
                    <div className="flex items-center justify-center gap-1.5 text-[#9333ea]">
                      <LayoutList className="w-4 h-4 text-[#a855f7]" /> Productos
                    </div>
                  </th>
                  <th className="pb-4 px-4 font-bold">
                    <div className="flex items-center justify-center gap-1.5 text-[#9333ea]">
                      <Check className="w-4 h-4 text-[#a855f7]" /> Acciones
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-gray-700">
                {categorias.map((categoria, i) => (
                  <motion.tr 
                    key={categoria.IdCategoria}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-6 px-4">
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#7e22ce] text-white flex items-center justify-center text-xs font-black shadow-sm">
                          {categoria.IdCategoria}
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#d97706] flex items-center justify-center text-white font-bold text-sm shadow-sm opacity-90">
                          {getInitial(categoria.Nombre)}
                        </div>
                        <span className="text-[#1e293b] font-bold">{categoria.Nombre}</span>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <span className="bg-[#f97316] text-white px-4 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wider">
                        {categoria.Productos?.length || 0} productos
                      </span>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => openEditModal(categoria)}
                          className="w-9 h-9 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-white flex items-center justify-center transition-colors shadow-sm"
                        >
                          <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Edit className="w-4 h-4" /></motion.div>
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setDeleteItem(categoria)}
                          className="w-9 h-9 rounded-full bg-[#ef4444] hover:bg-[#dc2626] text-white flex items-center justify-center transition-colors shadow-sm"
                        >
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

    </div>

      {/* Modal de Crear/Editar */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => !isSaving && setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 z-10 m-4"
            >
              <div className="flex flex-col items-center mb-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center shadow-inner mb-4 relative overflow-hidden">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent)]" />
                  <LayoutList className="w-10 h-10 text-white relative z-10" />
                </div>
                <h2 className="text-3xl font-black text-[#1e3a8a] tracking-tight">{editingItem ? "Editar Categoría" : "Nueva Categoría"}</h2>
                <p className="text-sm text-slate-500 font-medium mt-2">{editingItem ? "Modifique el formulario para actualizar la categoría" : "Complete el formulario para registrar una nueva categoría"}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Edit className="w-4 h-4 text-purple-500" /> Nombre de la Categoría <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input 
                      value={nuevaCategoria}
                      onChange={(e) => setNuevaCategoria(e.target.value)}
                      placeholder="Ej: Bebidas, Snacks, Accesorios..." 
                      className="w-full px-4 py-6 rounded-2xl border-slate-200 focus-visible:ring-[#9333ea] focus-visible:border-[#9333ea] text-base bg-white"
                      disabled={isSaving}
                      maxLength={50}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                      <LayoutList className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Máximo 50 caracteres</p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-purple-400" />
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-900">Información importante:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-purple-800 font-medium ml-7 list-disc">
                    <li>El nombre de la categoría debe ser único y descriptivo.</li>
                    <li>Podrá asignar productos a esta categoría después de crearla.</li>
                    <li>Elija un nombre claro para facilitar la organización de sus productos.</li>
                  </ul>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button 
                    onClick={handleSave} 
                    disabled={isSaving} 
                    className="rounded-xl py-6 px-8 font-bold bg-[#9333ea] hover:bg-[#7e22ce] text-white shadow-md shadow-purple-200 transition-all flex-1 sm:flex-none"
                  >
                    {isSaving ? "Guardando..." : (
                      <>
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Check className="w-5 h-5 mr-2" /></motion.div> {editingItem ? "Actualizar Categoría" : "Guardar Categoría"}
                      </>
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsModalOpen(false)} 
                    className="rounded-xl py-6 px-8 font-bold text-slate-600 bg-slate-500 hover:bg-slate-600 hover:text-white border-0 transition-all flex-1 sm:flex-none" 
                    disabled={isSaving}
                  >
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><X className="w-5 h-5 mr-2" /></motion.div> Cancelar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal de Confirmación de Eliminación */}
      <AnimatePresence>
        {deleteItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => !isDeleting && setDeleteItem(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 z-10 m-4 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}><AlertTriangle className="w-8 h-8 text-red-500" /></motion.div>
              </div>
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Eliminar categoría?</h2>
              <p className="text-sm text-slate-500 mb-6">
                Estás a punto de eliminar <span className="font-bold text-slate-700">"{deleteItem.Nombre}"</span>. Esta acción no se puede deshacer.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setDeleteItem(null)} className="flex-1 rounded-2xl py-5 font-bold" disabled={isDeleting}>
                  Cancelar
                </Button>
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
