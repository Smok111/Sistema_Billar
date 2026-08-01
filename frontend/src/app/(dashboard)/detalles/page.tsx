"use client";

import { useState, useEffect } from "react";
import { Search, Tag, X, FileText, FileDown, Edit, Trash2, Plus } from "lucide-react";
import { fetchAPI } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { useRouter } from "next/navigation";

export default function DetallesPage() {
  const router = useRouter();
  const [detalles, setDetalles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
        const [detallesData, consumosData, productosData] = await Promise.all([
          fetchAPI('/consumodetalle'),
          fetchAPI('/consumo'),
          fetchAPI('/producto')
        ]);

        const grouped = consumosData.filter((c: any) => detallesData.some((d: any) => d.IdConsumo === c.IdConsumo)).map((c: any) => {
          const cDetalles = detallesData.filter((d: any) => d.IdConsumo === c.IdConsumo);
          
          let totalProd = 0;
          const mapProds = new Map();
          cDetalles.forEach((d: any) => {
            const p = productosData.find((prod: any) => prod.IdProducto === d.IdProducto);
            const subtotal = Number(d.PrecioUnitario || 0) * Number(d.Cantidad || 1);
            totalProd += subtotal;
            if (mapProds.has(d.IdProducto)) {
               const existing = mapProds.get(d.IdProducto);
               existing.Cantidad += d.Cantidad;
               existing.Subtotal += subtotal;
            } else {
               mapProds.set(d.IdProducto, {
                 Nombre: p ? p.Nombre : 'Desconocido',
                 Cantidad: d.Cantidad,
                 Precio: Number(d.PrecioUnitario || 0),
                 Subtotal: subtotal,
                 IdDetalle: d.IdDetalle
               });
            }
          });
          const prodsMapped = Array.from(mapProds.values());

          return {
            IdConsumo: c.IdConsumo,
            Mesa: c.Mesas?.NumeroMesa || c.IdMesa,
            Productos: prodsMapped,
            TotalProductos: totalProd,
            PagoMesa: Number(c.CostoMesa || 0),
            TotalConsumo: Number(c.Total || (totalProd + Number(c.CostoMesa || 0)))
          };
        });

        setDetalles(grouped.reverse());
      } catch (error) {
        console.error("Error fetching detalles:", error);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEliminar = async (idConsumo: number) => {
    if (!confirm('¿Estás seguro de que deseas eliminar TODOS los productos de este consumo?')) return;
    try {
      const data = await fetchAPI('/consumodetalle');
      const toDelete = data.filter((d: any) => d.IdConsumo === idConsumo);
      for (const d of toDelete) {
        await fetchAPI(`/consumodetalle/${d.IdDetalle}`, { method: 'DELETE' });
      }
      
      const consumo = await fetchAPI(`/consumo/${idConsumo}`);
      if (consumo) {
        await fetchAPI(`/consumo/${idConsumo}`, {
           method: 'PUT',
           body: JSON.stringify({
             IdMesa: consumo.IdMesa,
             IdCliente: consumo.IdCliente,
             IdUsuario: consumo.IdUsuario,
             TipoCobro: consumo.TipoCobro,
             Estado: consumo.Estado,
             FechaInicio: consumo.FechaInicio,
             TotalProductos: 0
           })
        });
      }
      toast.success("Productos eliminados correctamente");
      loadData();
    } catch (error) {
      toast.error("Error eliminando productos");
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto mt-4">
      
      {/* Top Card: Encabezado y Buscador */}
      <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-emerald-300 flex items-center justify-center shadow-inner"
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Detalles de Consumo</h1>
              <p className="text-gray-500 font-medium mt-1 flex items-center">
                <Tag className="w-4 h-4 text-[#4f80ff] mr-2" /> 
                Total consumos agrupados: <span className="font-bold text-gray-700 ml-1">{detalles.length}</span>
              </p>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/detalles/nuevo')}
            className="bg-[#4f80ff] hover:bg-[#3b66db] text-white font-bold rounded-full px-6 py-6 shadow-md transition-all flex items-center"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Plus className="w-5 h-5 mr-2" /></motion.div> Nuevo Detalle
          </motion.button>
        </div>

        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input 
            placeholder="Buscar por producto o número de consumo..." 
            className="w-full pl-12 pr-10 py-6 rounded-2xl border-gray-200 text-gray-700 bg-white focus-visible:ring-[#4f80ff] text-base shadow-sm"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tarjetas de Detalles (Tickets) */}
      {loading ? (
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-64" />
            <div className="flex gap-2">
              <Skeleton className="h-10 w-24 rounded-xl" />
              <Skeleton className="h-10 w-24 rounded-xl" />
              <Skeleton className="h-10 w-24 rounded-xl" />
            </div>
          </div>
          <Skeleton className="h-32 w-full rounded-xl" />
          <div className="flex justify-end">
            <Skeleton className="h-24 w-64 rounded-xl" />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {detalles.map((detalle, i) => (
            <motion.div 
              key={detalle.IdConsumo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl shadow-sm p-6 sm:p-8"
            >
              {/* Cabecera del Ticket */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center text-[#4f80ff] font-bold text-xl">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                    <span className="text-lg">🥤</span>
                  </div>
                  Consumo #{detalle.IdConsumo} - {detalle.Mesa}
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.print()}
                    className="bg-[#ef4444] hover:bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center transition-colors shadow-sm"
                  >
                    <FileDown className="w-4 h-4 mr-2" /> PDF
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(`/detalles/editar/${detalle.IdConsumo}`)}
                    className="bg-[#fbbf24] hover:bg-yellow-500 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center transition-colors shadow-sm"
                  >
                    <Edit className="w-4 h-4 mr-2" /> Editar
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEliminar(detalle.IdConsumo)}
                    className="bg-[#ef4444] hover:bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center transition-colors shadow-sm"
                  >
                    <Trash2 className="w-4 h-4 mr-2" /> Eliminar
                  </motion.button>
                </div>
              </div>

              {/* Tabla de Productos del Ticket */}
              <div className="rounded-xl overflow-hidden mb-6 border border-gray-100">
                <table className="w-full text-center">
                  <thead className="bg-[#4f80ff] text-white">
                    <tr>
                      <th className="py-3 px-4 font-bold text-left">Producto</th>
                      <th className="py-3 px-4 font-bold">Cantidad</th>
                      <th className="py-3 px-4 font-bold">Precio</th>
                      <th className="py-3 px-4 font-bold">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {detalle.Productos.map((prod: any, idx: number) => (
                      <tr key={idx} className="font-bold">
                        <td className="py-4 px-4 text-left text-gray-800">{prod.Nombre}</td>
                        <td className="py-4 px-4 text-gray-800">{prod.Cantidad}</td>
                        <td className="py-4 px-4 text-gray-800">S/ {prod.Precio.toFixed(2)}</td>
                        <td className="py-4 px-4 text-emerald-500">S/ {prod.Subtotal.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Resumen Totales */}
              <div className="flex justify-end pr-4">
                <div className="w-full max-w-xs space-y-4">
                  <div className="flex justify-between items-center font-black text-sm">
                    <span className="text-gray-800">TOTAL PRODUCTOS:</span>
                    <span className="text-emerald-500">S/ {detalle.TotalProductos.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-100 w-full" />
                  
                  <div className="flex justify-between items-center font-black text-sm">
                    <span className="text-gray-800">PAGO MESA:</span>
                    <span className="text-[#4f80ff]">S/ {detalle.PagoMesa.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-100 w-full" />
                  
                  <div className="flex justify-between items-center font-black text-base">
                    <span className="text-gray-800">TOTAL CONSUMO:</span>
                    <span className="text-emerald-500">S/ {detalle.TotalConsumo.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

    </div>
  );
}
