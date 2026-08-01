"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-[#13111C] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Fondo con brillo sutil estilo neón */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#13111C] to-[#13111C]" />

      {/* Círculo Principal Luminoso */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] rounded-full flex flex-col items-center justify-center z-10"
      >
        {/* Anillo rotatorio exterior de líneas y estrellitas */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-indigo-500/30 border-dashed pointer-events-none"
        >
          {/* Estrellitas o detalles del borde */}
          <div className="absolute top-1/4 -left-3 w-6 h-6 rotate-45 border-r border-b border-indigo-400/70" />
          <div className="absolute top-1/4 -right-3 w-6 h-6 -rotate-45 border-l border-b border-indigo-400/70" />
          <div className="absolute bottom-1/4 -left-3 w-6 h-6 -rotate-45 border-r border-t border-indigo-400/70" />
          <div className="absolute bottom-1/4 -right-3 w-6 h-6 rotate-45 border-l border-t border-indigo-400/70" />
        </motion.div>

        {/* Anillo rotatorio interior punteado que gira al revés */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="absolute inset-6 rounded-full border-2 border-indigo-400/20 border-dotted pointer-events-none"
        />

        {/* Anillo de resplandor (Glow Ring estático) */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(79,70,229,0.3)] pointer-events-none" />

        {/* Ícono central: Logo */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative mt-8 mb-6 w-56 h-56 flex items-center justify-center drop-shadow-[0_0_50px_rgba(250,204,21,0.5)] z-10"
        >
          <img src="/logo.png" alt="BlackPool Logo" className="w-full h-full object-contain" onError={(e) => {
               (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="black"/><circle cx="50" cy="50" r="25" fill="white"/><text x="50" y="55" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="black">8</text></svg>';
          }} />
        </motion.div>

        {/* Textos Principales */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center z-10 space-y-2 mt-4"
        >
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,1)] uppercase">
            Billar
          </h1>
          <h2 className="text-4xl sm:text-5xl font-black text-[#A78BFA] tracking-widest drop-shadow-[0_0_15px_rgba(167,139,250,0.5)] uppercase" style={{ WebkitTextStroke: '1px #6D28D9' }}>
            Black Pool
          </h2>
          <p className="text-indigo-300/80 tracking-[0.3em] text-sm mt-4 uppercase pt-4">
            Pool Hall
          </p>
        </motion.div>

        {/* Botón de Acceso */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 z-10"
        >
          <Link href="/login">
            <button className="px-10 py-3 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] border border-[#A78BFA]/50 text-white font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(109,40,217,0.5)] hover:shadow-[0_0_30px_rgba(167,139,250,0.8)] flex items-center gap-2 group">
              <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white animate-pulse" />
              Acceso
              <span className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white animate-pulse" />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
