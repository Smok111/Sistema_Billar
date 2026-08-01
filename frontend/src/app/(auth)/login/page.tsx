"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, ChevronLeft, Loader2 } from "lucide-react";
import { fetchAPI } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const data = await fetchAPI('/acceso/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      
      if (data && data.access_token) {
        localStorage.setItem('token', data.access_token);
        if (data.user) {
          localStorage.setItem('user_info', JSON.stringify(data.user));
        }
        // Redirigir al dashboard
        window.location.href = "/dashboard";
      } else {
        setErrorMsg("Error desconocido al iniciar sesión");
        setLoading(false);
      }
    } catch (error: any) {
      setErrorMsg(error.message || "Correo o contraseña incorrectos");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#06b6d4] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Fondo animado rico en detalles (Burbujas grandes flotantes) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Burbujas gigantes borrosas (Iluminación de fondo) */}
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px]" />
        <motion.div animate={{ scale: [1, 1.5, 1], x: [0, -50, 0], y: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }} className="absolute -top-20 -right-20 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[120px]" />

        {/* Burbujas definidas grandes (Glassmorphism) */}
        <motion.div animate={{ y: [0, -60, 0], x: [0, 30, 0], rotate: [0, 45, 0] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute top-[15%] left-[5%] w-32 h-32 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm" />
        <motion.div animate={{ y: [0, 80, 0], x: [0, -40, 0], rotate: [0, -45, 0] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute bottom-[20%] right-[8%] w-48 h-48 rounded-full border border-cyan-300/20 bg-gradient-to-bl from-cyan-400/10 to-transparent backdrop-blur-sm" />
        <motion.div animate={{ y: [0, -40, 0], x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} className="absolute top-[60%] left-[25%] w-20 h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
        <motion.div animate={{ y: [0, 50, 0], x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }} className="absolute top-[10%] right-[25%] w-24 h-24 rounded-full border border-indigo-300/20 bg-indigo-400/10 backdrop-blur-sm" />

        {/* Partículas pequeñas (Polvo estelar) */}
        <motion.div animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[25%] right-[40%] w-2 h-2 bg-white/60 rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
        <motion.div animate={{ y: [0, 40, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute bottom-[35%] left-[45%] w-3 h-3 bg-white/40 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-[50%] right-[15%] w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
      </div>

      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 mb-8"
      >
        {/* Logo "Black Pool" */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-48 h-48 flex items-center justify-center drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]"
        >
          <img src="/logo.png" alt="BlackPool Logo" className="w-full h-full object-contain drop-shadow-2xl" onError={(e) => {
               (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="black"/><circle cx="50" cy="50" r="25" fill="white"/><text x="50" y="55" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="black">8</text></svg>';
          }} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="w-full max-w-[420px] z-10"
      >
        <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
          
          {/* Decoración de esquinas (brackets) */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-indigo-200/60 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-indigo-200/60 rounded-br-lg" />

          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-[#1e3a8a] mb-2 tracking-tight">Iniciar Sesión</h1>
            <p className="text-sm text-gray-500 font-medium">Ingresa tus credenciales para acceder al sistema</p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-3 rounded-lg bg-red-100 border border-red-200 text-red-600 text-sm font-semibold text-center animate-pulse">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 relative">
              <label className="text-xs font-bold text-[#1e3a8a] tracking-wider uppercase ml-1 block">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com" 
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <label className="text-xs font-bold text-[#1e3a8a] tracking-wider uppercase ml-1 block">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-indigo-400" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all"
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center group mt-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <ArrowRight className="w-5 h-5 mr-2 opacity-80 group-hover:-translate-x-1 transition-transform" />
                  ACCEDER
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-[#1e3a8a] transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
