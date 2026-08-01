"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, Calendar, Package, ReceiptText, List, Users, Settings, UserCircle, LayoutDashboard, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import { useAuth } from "@/context/AuthContext";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard", permission: "dashboard" },
  { name: "Mesas", icon: Grid, path: "/mesas", permission: "mesas" },
  { name: "Reservas", icon: Calendar, path: "/reservas", permission: "reservas" },
  { name: "Productos", icon: Package, path: "/productos", permission: "productos" },
  { name: "Consumos", icon: ReceiptText, path: "/consumos", permission: "consumos" },
  { name: "Detalles", icon: List, path: "/detalles", permission: "detalles" },
  { name: "Clientes", icon: Users, path: "/clientes", permission: "clientes" },
  { name: "Administración", icon: Settings, path: "/admin", permission: "admin" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, hasPermission, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-[#1e293b] text-white shadow-lg z-40 m-2 sm:m-4 rounded-xl sm:rounded-2xl flex justify-center sticky top-2 sm:top-4">
        <div className="w-full max-w-[1600px] flex items-center justify-between px-3 sm:px-8 py-2 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
          <motion.div 
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center drop-shadow-lg"
          >
            {/* The user will place their logo at public/logo.png */}
            <img src="/logo.png" alt="BlackPool Logo" className="w-full h-full object-contain" onError={(e) => {
               (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="black"/><circle cx="50" cy="50" r="25" fill="white"/><text x="50" y="55" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle" fill="black">8</text></svg>';
            }} />
          </motion.div>
          <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 tracking-tight drop-shadow-sm">
            BlackPool
          </span>
        </div>

        {/* Links Desktop */}
        <nav className="flex items-center gap-1 hidden xl:flex">
          {menuItems.filter(item => hasPermission(item.permission)).map((item) => {
            if (item.name === "Administración") {
              return (
                <div key={item.path} className="relative group">
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-300 hover:bg-slate-700">
                    <Settings className="w-4 h-4" />
                    Administración
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-1 w-40 bg-[#1e293b] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700 z-50 overflow-hidden">
                    <Link href="/usuarios" className="flex items-center px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                      <UserCircle className="w-4 h-4 mr-2" /> Usuarios
                    </Link>
                    <Link href="/roles" className="flex items-center px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      Roles
                    </Link>
                    <Link href="/categorias" className="flex items-center px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                      Categorías
                    </Link>
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link key={item.path} href={item.path} className="relative">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors relative z-10",
                    isActive ? "text-yellow-400" : "text-slate-300 hover:text-yellow-400"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-slate-700 rounded-lg -z-10 shadow-inner border border-slate-600"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
                    <item.icon className="w-4 h-4" />
                  </motion.div>
                  {item.name}
                </motion.div>
              </Link>
            );
          })}
        </nav>
          
        {/* User Profile & Logout */}
        <div className="flex items-center gap-2 sm:gap-4 ml-4">
            <div className="flex flex-col items-end mr-1 sm:mr-2">
              <span className="text-xs sm:text-sm font-bold text-white leading-tight">{user?.name || "Cargando..."}</span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium hidden sm:block">{user?.role || ""}</span>
            </div>
            
            <button 
              onClick={logout}
              className="flex items-center gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-bold text-red-400 hover:text-white hover:bg-red-500/80 transition-colors bg-red-500/10 border border-red-500/20 shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="xl:hidden fixed bottom-0 left-0 right-0 bg-[#1e293b] border-t border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] z-50 px-2 pb-safe pt-2">
        <div className="flex items-center justify-between overflow-x-auto hide-scrollbar gap-2 pb-2">
          {menuItems.filter(item => hasPermission(item.permission)).map((item) => {
            const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link key={item.path} href={item.path} className="flex-shrink-0 flex-1 min-w-[64px]">
                <div className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200",
                  isActive ? "bg-slate-800 text-yellow-400" : "text-slate-400 hover:text-slate-200"
                )}>
                  <item.icon className={cn("w-5 h-5 mb-1 transition-transform", isActive ? "scale-110" : "")} />
                  <span className="text-[10px] font-semibold tracking-tight">{item.name.split(" ")[0]}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-2 sm:px-6 pb-24 xl:pb-8 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto w-full">
          {children}
        </div>
      </main>

      <Toaster richColors position="bottom-right" />
    </div>
  );
}
