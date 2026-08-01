"use client";

import { useState, useEffect } from "react";
import { Plus, Search, Layers, Edit, Trash2, X, AlertTriangle, Info, DollarSign, Folder } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function ProductosPage() {
  const [productos, setProductos] = useState<any[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const [deleteItem, setDeleteItem] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [productosData, categoriasData] = await Promise.all([
        fetchAPI('/producto'),
        fetchAPI('/categoria')
      ]);
      setProductos(productosData || []);
      setCategorias(categoriasData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setNuevoNombre("");
    setNuevoPrecio("");
    setNuevaCategoria("");
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    setNuevoNombre(item.Nombre);
    setNuevoPrecio(String(item.Precio));
    setNuevaCategoria(String(item.IdCategoria));
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!nuevoNombre.trim() || !nuevoPrecio || !nuevaCategoria) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    setIsSaving(true);
    try {
      const body = { Nombre: nuevoNombre.trim(), Precio: parseFloat(nuevoPrecio), IdCategoria: parseInt(nuevaCategoria) };
      if (editingItem) {
        await fetchAPI(`/producto/${editingItem.IdProducto}`, { method: 'PUT', body: JSON.stringify(body) });
        toast.success("Producto actualizado exitosamente");
      } else {
        await fetchAPI('/producto', { method: 'POST', body: JSON.stringify(body) });
        toast.success("Producto creado exitosamente");
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
      await fetchAPI(`/producto/${deleteItem.IdProducto}`, { method: 'DELETE' });
      toast.success("Producto eliminado exitosamente");
      setDeleteItem(null);
      loadData();
    } catch (error) {
      console.error("Error eliminando:", error);
      toast.error("Error al eliminar el producto");
    } finally {
      setIsDeleting(false);
    }
  };

  const getInitial = (name: string) => name?.charAt(0)?.toUpperCase() || "?";
  const getAvatarColor = (initial: string) => {
    const colors = ["bg-emerald-400", "bg-blue-400", "bg-indigo-400", "bg-teal-400", "bg-cyan-400", "bg-sky-400", "bg-violet-400"];
    return colors[initial.charCodeAt(0) % colors.length];
  };

  return (
    <>
      <div className="space-y-6 max-w-5xl mx-auto mt-4">
      
      {/* Top Card */}
      <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "circOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner"
            >
              <Layers className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Gestión de Productos</h1>
              <p className="text-gray-500 font-medium mt-1">
                <motion.span animate={{ rotate: [0, 15, -5, 15, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-gray-400 mr-2 origin-bottom-right inline-block">👤</motion.span> 
                Total: <span className="font-bold text-gray-700">{productos.length}</span> productos registrados
              </p>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openCreateModal}
            className="bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-full px-6 py-6 shadow-md transition-all flex items-center">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nuevo Producto
          </motion.button>
        </div>
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
          <Input placeholder="Buscar por nombre, categoría o precio..." className="w-full pl-12 pr-4 py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#4f80ff] text-base shadow-sm" />
        </div>
      </div>

      {/* Tabla */}
      {loading ? (
        <div className="bg-white rounded-3xl shadow-sm p-6 overflow-hidden">
          <div className="space-y-4">
            <Skeleton className="h-10 w-full rounded-xl" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-12 w-16" />
                <Skeleton className="h-12 w-[30%] rounded-full" />
                <Skeleton className="h-12 w-[20%]" />
                <Skeleton className="h-12 w-[20%]" />
                <Skeleton className="h-12 flex-1" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium text-gray-800">Todos los Productos</h2>
            <span className="bg-[#1d4ed8] text-white text-xs font-bold px-3 py-1 rounded-full">{productos.length} productos</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-sm font-bold text-[#1e3a8a]">
                  <th className="pb-4 px-4 font-bold">ID</th>
                  <th className="pb-4 px-4 font-bold">Nombre</th>
                  <th className="pb-4 px-4 font-bold">Precio</th>
                  <th className="pb-4 px-4 font-bold">Categoría</th>
                  <th className="pb-4 px-4 font-bold text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-gray-700">
                {productos.map((producto, i) => (
                  <motion.tr key={producto.IdProducto} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 text-gray-500">#{producto.IdProducto}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${getAvatarColor(getInitial(producto.Nombre))} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                          {getInitial(producto.Nombre)}
                        </div>
                        <span className="text-[#1e293b]">{producto.Nombre}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">S/ {Number(producto.Precio || 0).toFixed(2)}</td>
                    <td className="py-4 px-4">{producto.CategoriasProductos?.Nombre || 'Sin Categoría'}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => openEditModal(producto)}
                          className="w-8 h-8 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-white flex items-center justify-center transition-colors shadow-sm">
                          <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Edit className="w-4 h-4" /></motion.div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setDeleteItem(producto)}
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
                  <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Layers className="w-10 h-10 text-white" /></motion.div>
                </div>
                <h2 className="text-2xl font-black text-[#1e3a8a]">{editingItem ? "Editar Producto" : "Registrar Nuevo Producto"}</h2>
                <p className="text-sm text-slate-500 font-medium">{editingItem ? "Modifica los datos del producto" : "Complete los datos del producto"}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Layers className="w-4 h-4 text-blue-500" /></motion.div>
                    Nombre del Producto <span className="text-red-500">*</span>
                  </label>
                  <Input value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} placeholder="Ej. Gaseosa, Cerveza..." className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><DollarSign className="w-4 h-4 text-blue-500" /></motion.div>
                      Precio (S/) <span className="text-red-500">*</span>
                    </label>
                    <Input type="number" step="0.10" value={nuevoPrecio} onChange={(e) => setNuevoPrecio(e.target.value)} placeholder="0.00" className="w-full px-4 py-5 rounded-2xl border-slate-200 focus-visible:ring-blue-500 text-base" disabled={isSaving} />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Folder className="w-4 h-4 text-blue-500" /></motion.div>
                      Categoría <span className="text-red-500">*</span>
                    </label>
                    <select value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)} disabled={isSaving}
                      className="w-full px-4 py-5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-white">
                      <option value="" disabled>-- Seleccione una categoría --</option>
                      {categorias.map(cat => (<option key={cat.IdCategoria} value={cat.IdCategoria}>{cat.Nombre}</option>))}
                    </select>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-blue-700 font-medium leading-relaxed">
                      <span className="font-bold">Información:</span> Los productos que registres estarán disponibles para ser agregados a los consumos de las mesas.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold text-slate-600 hover:bg-slate-50 border-slate-200" disabled={isSaving}>Cancelar</Button>
                  <Button onClick={handleSave} disabled={isSaving} className="w-1/2 max-w-[200px] rounded-2xl py-6 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white shadow-md shadow-blue-200">
                    {isSaving ? "Guardando..." : (editingItem ? "Actualizar Producto" : "Registrar Producto")}
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
              <h2 className="text-xl font-black text-slate-800 mb-2">¿Eliminar producto?</h2>
              <p className="text-sm text-slate-500 mb-6">Estás a punto de eliminar <span className="font-bold text-slate-700">"{deleteItem.Nombre}"</span>. Esta acción no se puede deshacer.</p>
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
