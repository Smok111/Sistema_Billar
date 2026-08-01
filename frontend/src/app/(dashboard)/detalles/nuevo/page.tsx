"use client";

import { useState, useEffect } from "react";
import { fetchAPI } from "@/lib/api";
import { Plus, Save, Trash2, ArrowLeft, Receipt, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function NuevoDetalleConsumo() {
  const router = useRouter();
  const [consumos, setConsumos] = useState<any[]>([]);
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [selectedConsumo, setSelectedConsumo] = useState("");
  const [lineas, setLineas] = useState([
    { id: Date.now().toString(), IdProducto: "", Cantidad: 1, PrecioUnitario: 0, Subtotal: 0 }
  ]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [consumosData, productosData] = await Promise.all([
          fetchAPI('/consumo'),
          fetchAPI('/producto')
        ]);
        
        // Solo mostrar consumos activos para agregar productos
        const consumosActivos = (consumosData || []).filter(
          (c: any) => c.Estado === "En curso" || c.Estado === "Abierto" || c.Estado === "Activo"
        );
        setConsumos(consumosActivos);
        setProductos(productosData || []);
      } catch (error) {
        toast.error("Error al cargar datos");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleProductoChange = (idLinea: string, idProductoStr: string) => {
    const idProducto = parseInt(idProductoStr);
    const prod = productos.find(p => p.IdProducto === idProducto);
    const precio = prod ? parseFloat(prod.Precio) : 0;
    
    setLineas(prev => prev.map(linea => {
      if (linea.id === idLinea) {
        return { 
          ...linea, 
          IdProducto: idProductoStr, 
          PrecioUnitario: precio, 
          Subtotal: precio * linea.Cantidad 
        };
      }
      return linea;
    }));
  };

  const handleCantidadChange = (idLinea: string, cantidadStr: string) => {
    const cant = parseInt(cantidadStr) || 1;
    setLineas(prev => prev.map(linea => {
      if (linea.id === idLinea) {
        return { 
          ...linea, 
          Cantidad: cant, 
          Subtotal: cant * linea.PrecioUnitario 
        };
      }
      return linea;
    }));
  };

  const agregarLinea = () => {
    setLineas(prev => [...prev, { id: Date.now().toString(), IdProducto: "", Cantidad: 1, PrecioUnitario: 0, Subtotal: 0 }]);
  };

  const eliminarLinea = (idLinea: string) => {
    setLineas(prev => prev.filter(l => l.id !== idLinea));
  };

  const totalGeneral = lineas.reduce((acc, curr) => acc + curr.Subtotal, 0);

  const guardarTodos = async () => {
    if (!selectedConsumo) {
      toast.error("Seleccione un consumo");
      return;
    }
    const lineasValidas = lineas.filter(l => l.IdProducto !== "");
    if (lineasValidas.length === 0) {
      toast.error("Debe agregar al menos un producto válido");
      return;
    }

    setIsSaving(true);
    try {
      const consumo = consumos.find(c => c.IdConsumo.toString() === selectedConsumo);
      
      // Guardar todos los detalles secuencialmente
      for (const linea of lineasValidas) {
        await fetchAPI('/consumodetalle', {
          method: 'POST',
          body: JSON.stringify({
            IdConsumo: parseInt(selectedConsumo),
            IdProducto: parseInt(linea.IdProducto),
            Cantidad: linea.Cantidad,
            PrecioUnitario: linea.PrecioUnitario,
            FechaRegistro: new Date().toISOString()
          })
        });
      }

      // Actualizar el TotalProductos en el Consumo padre si existe
      if (consumo) {
        const currentTotal = parseFloat(consumo.TotalProductos || 0);
        const newTotal = currentTotal + totalGeneral;
        await fetchAPI(`/consumo/${selectedConsumo}`, {
          method: 'PUT',
          body: JSON.stringify({
            IdMesa: consumo.IdMesa,
            IdCliente: consumo.IdCliente,
            IdUsuario: consumo.IdUsuario,
            TipoCobro: consumo.TipoCobro,
            Estado: consumo.Estado,
            FechaInicio: consumo.FechaInicio,
            TotalProductos: newTotal
          })
        });
      }

      toast.success("Productos agregados exitosamente");
      router.push('/detalles');
    } catch (error) {
      toast.error("Error al guardar los productos");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto mt-4">
      
      {/* Top Banner */}
      <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-300 to-teal-300 flex items-center justify-center shadow-inner"
            >
              <Receipt className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Nuevo Detalle de Consumo</h1>
              <p className="text-gray-500 font-medium mt-1">Agrega uno o varios productos al consumo seleccionado</p>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/detalles')}
            className="bg-slate-500 hover:bg-slate-600 text-white font-bold rounded-full px-6 py-4 shadow-md transition-all flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Volver a la Lista
          </motion.button>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-10 w-48" />
          </div>
        ) : (
          <div className="p-8">
            {/* Consumo Selection */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                Consumo: <span className="text-red-500">*</span>
              </label>
              <select 
                value={selectedConsumo} 
                onChange={(e) => setSelectedConsumo(e.target.value)} 
                className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 focus-visible:border-[#4f80ff] focus-visible:outline-none text-base bg-white"
              >
                <option value="">-- Seleccione --</option>
                {consumos.map(c => (
                  <option key={c.IdConsumo} value={c.IdConsumo}>
                    Consumo #{c.IdConsumo} - Mesa {c.Mesas?.NumeroMesa || c.IdMesa} ({c.Clientes?.Nombre || 'Sin Cliente'})
                  </option>
                ))}
              </select>
            </div>

            {/* Table */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
              <table className="w-full text-center">
                <thead className="bg-[#4f80ff] text-white">
                  <tr>
                    <th className="py-4 px-4 font-bold text-left">Producto</th>
                    <th className="py-4 px-4 font-bold">Cantidad</th>
                    <th className="py-4 px-4 font-bold">Precio Unit.</th>
                    <th className="py-4 px-4 font-bold">Subtotal</th>
                    <th className="py-4 px-4 font-bold">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100">
                  <AnimatePresence>
                    {lineas.map((linea, index) => (
                      <motion.tr 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        key={linea.id} 
                        className="hover:bg-slate-50/50"
                      >
                        <td className="py-3 px-4 text-left">
                          <select 
                            value={linea.IdProducto} 
                            onChange={(e) => handleProductoChange(linea.id, e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus-visible:border-blue-500 bg-white"
                          >
                            <option value="">-- Seleccione --</option>
                            {productos.map(p => (
                              <option key={p.IdProducto} value={p.IdProducto}>{p.Nombre}</option>
                            ))}
                          </select>
                        </td>
                        <td className="py-3 px-4">
                          <input 
                            type="number" 
                            min="1" 
                            value={linea.Cantidad} 
                            onChange={(e) => handleCantidadChange(linea.id, e.target.value)}
                            className="w-24 text-center mx-auto px-4 py-3 rounded-xl border border-slate-200 focus-visible:border-blue-500"
                          />
                        </td>
                        <td className="py-3 px-4 font-mono font-medium text-slate-600">
                          {linea.PrecioUnitario.toFixed(2)}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-emerald-600">
                          {linea.Subtotal.toFixed(2)}
                        </td>
                        <td className="py-3 px-4">
                          {lineas.length > 1 && (
                            <button 
                              onClick={() => eliminarLinea(linea.id)}
                              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors mx-auto inline-flex items-center"
                            >
                              <X className="w-4 h-4 mr-1" /> Eliminar
                            </button>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
                <tfoot className="bg-slate-50 border-t border-slate-200">
                  <tr>
                    <td colSpan={3} className="py-5 px-6 text-right font-black text-slate-800 uppercase tracking-widest text-sm">
                      TOTAL GENERAL:
                    </td>
                    <td className="py-5 px-4 font-black font-mono text-xl text-emerald-600">
                      {totalGeneral.toFixed(2)}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Actions */}
            <div className="flex justify-start gap-4 pt-4 border-t border-slate-100">
              <Button 
                variant="outline" 
                onClick={agregarLinea} 
                className="rounded-xl py-6 px-6 font-bold text-slate-700 border-2 hover:bg-slate-50 shadow-sm"
              >
                <Plus className="w-5 h-5 mr-2" /> Agregar Producto
              </Button>
              <Button 
                onClick={guardarTodos} 
                disabled={isSaving}
                className="rounded-xl py-6 px-8 font-bold bg-[#10b981] hover:bg-[#059669] text-white shadow-md shadow-emerald-200"
              >
                {isSaving ? "Guardando..." : (
                  <>
                    <Save className="w-5 h-5 mr-2" /> Guardar Todos
                  </>
                )}
              </Button>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
