"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import { Plus, Save, Trash2, ArrowLeft, Edit3, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function EditarDetalleConsumo() {
  const router = useRouter();
  const params = useParams();
  const idConsumo = params.id as string;
  
  const [productos, setProductos] = useState<any[]>([]);
  const [consumoBase, setConsumoBase] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [lineas, setLineas] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [detallesData, consumoData, productosData] = await Promise.all([
          fetchAPI('/consumodetalle'),
          fetchAPI(`/consumo/${idConsumo}`),
          fetchAPI('/producto')
        ]);
        
        setConsumoBase(consumoData);
        setProductos(productosData || []);

        const cDetalles = (detallesData || []).filter((d: any) => d.IdConsumo.toString() === idConsumo);
        if (cDetalles.length > 0) {
          setLineas(cDetalles.map((d: any) => ({
            id: d.IdDetalle.toString(),
            IdProducto: d.IdProducto.toString(),
            Cantidad: d.Cantidad,
            PrecioUnitario: parseFloat(d.PrecioUnitario),
            Subtotal: parseFloat(d.PrecioUnitario) * d.Cantidad
          })));
        } else {
          // If no details exist, show one empty line
          setLineas([{ id: Date.now().toString(), IdProducto: "", Cantidad: 1, PrecioUnitario: 0, Subtotal: 0 }]);
        }
      } catch (error) {
        toast.error("Error al cargar datos");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [idConsumo]);

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
    const lineasValidas = lineas.filter(l => l.IdProducto !== "");
    
    setIsSaving(true);
    try {
      // 1. Eliminar todos los detalles anteriores para este consumo
      const data = await fetchAPI('/consumodetalle');
      const toDelete = data.filter((d: any) => d.IdConsumo.toString() === idConsumo);
      for (const d of toDelete) {
        await fetchAPI(`/consumodetalle/${d.IdDetalle}`, { method: 'DELETE' });
      }

      // 2. Agregar los nuevos detalles si existen
      for (const linea of lineasValidas) {
        await fetchAPI('/consumodetalle', {
          method: 'POST',
          body: JSON.stringify({
            IdConsumo: parseInt(idConsumo),
            IdProducto: parseInt(linea.IdProducto),
            Cantidad: linea.Cantidad,
            PrecioUnitario: linea.PrecioUnitario,
            FechaRegistro: new Date().toISOString()
          })
        });
      }

      // 3. Actualizar el TotalProductos en el Consumo padre
      if (consumoBase) {
        await fetchAPI(`/consumo/${idConsumo}`, {
          method: 'PUT',
          body: JSON.stringify({
            IdMesa: consumoBase.IdMesa,
            IdCliente: consumoBase.IdCliente,
            IdUsuario: consumoBase.IdUsuario,
            TipoCobro: consumoBase.TipoCobro,
            Estado: consumoBase.Estado,
            FechaInicio: consumoBase.FechaInicio,
            TotalProductos: totalGeneral
          })
        });
      }

      toast.success("Consumo editado exitosamente");
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
              className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-amber-300 flex items-center justify-center shadow-inner"
            >
              <Edit3 className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Editar Productos</h1>
              <p className="text-gray-500 font-medium mt-1">Modifica los productos del Consumo #{idConsumo}</p>
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
            <div className="mb-6 font-bold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center">
              Mesa asignada al consumo: <span className="ml-2 text-[#4f80ff] text-xl">{consumoBase?.Mesas?.NumeroMesa || consumoBase?.IdMesa}</span>
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
                          <button 
                            onClick={() => eliminarLinea(linea.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors mx-auto inline-flex items-center"
                          >
                            <X className="w-4 h-4 mr-1" /> Eliminar
                          </button>
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
                className="rounded-xl py-6 px-8 font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-200"
              >
                {isSaving ? "Guardando..." : (
                  <>
                    <Save className="w-5 h-5 mr-2" /> Guardar Cambios
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
