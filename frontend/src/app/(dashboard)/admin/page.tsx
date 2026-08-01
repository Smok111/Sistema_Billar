"use client";

import Link from "next/link";
import { UserCircle, ShieldCheck, Tags, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminPage() {
  const adminLinks = [
    {
      title: "Usuarios del Sistema",
      description: "Gestiona los accesos, contraseñas y cuentas de tu personal.",
      icon: UserCircle,
      href: "/usuarios",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      text: "text-blue-600"
    },
    {
      title: "Roles y Permisos",
      description: "Define qué puede ver y hacer cada tipo de empleado.",
      icon: ShieldCheck,
      href: "/roles",
      color: "from-indigo-500 to-purple-500",
      bg: "bg-indigo-50",
      text: "text-indigo-600"
    },
    {
      title: "Categorías de Productos",
      description: "Clasifica tus productos (Bebidas, Snacks, Tragos, etc).",
      icon: Tags,
      href: "/categorias",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
      text: "text-emerald-600"
    }
  ];

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto mt-4">
      {/* Top Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-800 flex items-center justify-center shadow-inner shrink-0"
          >
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-black text-[#1e3a8a] tracking-tight">Administración</h1>
            <p className="text-sm sm:text-base text-gray-500 font-medium mt-1">
              Configuraciones generales y seguridad del sistema.
            </p>
          </div>
        </div>
      </div>

      {/* Grid de opciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {adminLinks.map((link, i) => (
          <Link key={link.href} href={link.href}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all h-full flex flex-col group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${link.color}`} />
              
              <div className={`w-14 h-14 rounded-2xl ${link.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <link.icon className={`w-7 h-7 ${link.text}`} />
              </div>
              
              <h2 className="text-xl font-bold text-slate-800 mb-2">{link.title}</h2>
              <p className="text-sm text-slate-500 flex-1">{link.description}</p>
              
              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#4f80ff] group-hover:text-[#3b66db]">
                Gestionar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
