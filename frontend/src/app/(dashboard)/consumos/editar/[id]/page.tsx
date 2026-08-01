"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import { Edit, Save, ArrowLeft, Clock, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function EditarConsumoPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [consumo, setConsumo] = useState<any>(null);
  const [mesas, setMesas] = useState<any[]>([]);
  const [clientes, setClientes] = useState<any[]>([]);
  const [usuarios, setUsuarios] = useState<any[]>([]);

  // Form states
  const [idMesa, setIdMesa] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const [tipoCobro, setTipoCobro] = useState("");
  const [precioHora, setPrecioHora] = useState(0);
  const [precioMediaHora, setPrecioMediaHora] = useState(0);
  const [precioLibre, setPrecioLibre] = useState(0);
  const [minutosJugados, setMinutosJugados] = useState(0);
  const [costoMesa, setCostoMesa] = useState(0);
  const [total, setTotal] = useState(0);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [cData, mData, cliData, uData] = await Promise.all([
          fetchAPI(`/consumo/${id}`),
          fetchAPI('/mesa'),
          fetchAPI('/cliente'),
          fetchAPI('/usuario')
        ]);
        
        setConsumo(cData);
        setMesas(mData || []);
        setClientes(cliData || []);
        setUsuarios(uData || []);

        setIdMesa(cData.IdMesa?.toString() || "");
        setIdCliente(cData.IdCliente?.toString() || "");
        setIdUsuario(cData.IdUsuario?.toString() || "");
        setTipoCobro(cData.TipoCobro || "Por Hora");
        setPrecioHora(cData.PrecioHora || 0);
        setPrecioMediaHora(cData.PrecioMediaHora || 0);
        setPrecioLibre(cData.PrecioLibrePorMinuto || 0);
        
        // Calcular minutos (si no está cerrado, calcular hasta ahora, si está cerrado usar tiempo)
        const start = new Date(cData.FechaInicio);
        const end = cData.FechaFin ? new Date(cData.FechaFin) : new Date();
        const diffMs = end.getTime() - start.getTime();
        const mins = Math.floor(diffMs / 60000);
        setMinutosJugados(mins);

        setCostoMesa(cData.CostoMesa || 0);
        setTotal(cData.Total || 0);
        setEstado(cData.Estado || "Abierto");
      } catch (error) {
        console.error("Error loading details:", error);
        toast.error("Error al cargar consumo");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetchAPI(`/consumo/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          IdMesa: parseInt(idMesa),
          IdCliente: parseInt(idCliente),
          IdUsuario: parseInt(idUsuario),
          TipoCobro: tipoCobro,
          PrecioHora: precioHora,
          PrecioMediaHora: precioMediaHora,
          PrecioLibrePorMinuto: precioLibre,
          CostoMesa: costoMesa,
          Total: total,
          Estado: estado,
          ...(estado === 'Cerrado' ? { FechaFin: new Date().toISOString() } : {})
        })
      });

      if (estado === 'Cerrado') {
        await fetchAPI(`/mesa/${idMesa}`, {
          method: 'PUT',
          body: JSON.stringify({ Estado: "Disponible" })
        });
      }

      toast.success("Consumo actualizado correctamente");
      router.push("/consumos");
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar consumo");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-50 overflow-hidden">
        
        <div className="p-8 sm:p-10 text-center relative border-b border-slate-50">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-300 to-emerald-300 rounded-full flex items-center justify-center shadow-inner mb-4">
            <Edit className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black text-[#1e3a8a] tracking-tight">Editar Consumo</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            Modifique la información del consumo #{id}
          </p>
        </div>

        <div className="p-8 sm:p-10 space-y-8">
          {/* Info Card */}
          <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-blue-900">Información del Consumo</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-500 font-medium">Fecha de Inicio: </span>
                <span className="font-bold text-slate-800">{new Date(consumo?.FechaInicio).toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Estado Actual: </span>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white ${estado === 'Cerrado' ? 'bg-gray-500' : 'bg-emerald-500'}`}>
                  {estado}
                </span>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Total Productos: </span>
                <span className="font-bold text-slate-800">S/ {Number(consumo?.TotalProductos || 0).toFixed(2)}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Costo de Mesa: </span>
                <span className="font-bold text-slate-800">S/ {Number(costoMesa || 0).toFixed(2)}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500 font-medium">Total: </span>
                <span className="font-bold text-slate-800">S/ {Number(total || 0).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Mesa <span className="text-red-500">*</span></label>
              <select 
                value={idMesa}
                onChange={(e) => setIdMesa(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              >
                {mesas.map(m => (
                  <option key={m.IdMesa} value={m.IdMesa}>Mesa {m.NumeroMesa} - {m.Estado}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Usuario Responsable <span className="text-red-500">*</span></label>
              <select 
                value={idUsuario}
                onChange={(e) => setIdUsuario(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              >
                {usuarios.map(u => (
                  <option key={u.IdUsuario} value={u.IdUsuario}>{u.NomUsuario} {u.ApeUsuario}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Cliente <span className="text-red-500">*</span></label>
              <select 
                value={idCliente}
                onChange={(e) => setIdCliente(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              >
                {clientes.map(c => (
                  <option key={c.IdCliente} value={c.IdCliente}>{c.Nombre}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Tipo de Cobro <span className="text-red-500">*</span></label>
              <select 
                value={tipoCobro}
                onChange={(e) => setTipoCobro(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              >
                <option value="Por Hora">Por Hora</option>
                <option value="Media Hora">Media Hora</option>
                <option value="Libre">Libre</option>
              </select>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-blue-900">Vista previa del tiempo</h3>
            </div>
            <ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Inicio: {new Date(consumo?.FechaInicio).toLocaleString()}</li>
              <li>Fin estimado: Se calcula en tiempo real.</li>
              <li>Tiempo transcurrido: {Math.floor(minutosJugados / 60)}h {minutosJugados % 60}m</li>
              <li>Costo estimado: S/ {Number(costoMesa).toFixed(2)}</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Precio por Hora</label>
              <input type="number" value={precioHora} onChange={e => setPrecioHora(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Precio Media Hora</label>
              <input type="number" value={precioMediaHora} onChange={e => setPrecioMediaHora(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Precio por Minuto</label>
              <input type="number" step="0.01" value={precioLibre} onChange={e => setPrecioLibre(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white" />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Minutos Jugados</label>
              <input type="number" value={minutosJugados} onChange={e => setMinutosJugados(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Costo de Mesa</label>
              <input type="number" step="0.01" value={costoMesa} onChange={e => setCostoMesa(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 mb-1 block">Total</label>
              <input type="number" step="0.01" value={total} onChange={e => setTotal(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white" />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700 mb-2 block flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-[10px]">E</span>
              Estado del Consumo <span className="text-red-500">*</span>
            </label>
            <select 
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-3.5 rounded-2xl border border-slate-200 focus-visible:ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            >
              <option value="Abierto">Abierto</option>
              <option value="En curso">En curso</option>
              <option value="Cerrado">Cerrado</option>
            </select>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-800 font-medium leading-relaxed">
              <span className="font-bold">Atención: </span> Revise cuidadosamente los cambios antes de guardar. 
              Si cambia el estado a 'Cerrado', se liberará la mesa automáticamente.
            </p>
          </div>

          <div className="pt-6 flex justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => router.push('/consumos')}
              className="rounded-2xl py-6 px-8 font-bold text-slate-600 hover:bg-slate-50 border-slate-200"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSave}
              disabled={saving}
              className="rounded-2xl py-6 px-8 font-bold bg-[#4f80ff] hover:bg-[#3b66db] text-white shadow-md shadow-blue-200"
            >
              {saving ? "Guardando..." : "Guardar Cambios"}
            </Button>
          </div>

        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={() => router.push('/consumos')}
          className="text-sm font-bold text-[#4f80ff] hover:text-[#3b66db] transition-colors"
        >
          ← Volver a la Lista de consumos
        </button>
      </div>
    </div>
  );
}
