"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Package, Grid, Calendar, LogOut, ReceiptText } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Mesas", icon: Grid, path: "/mesas" },
  { name: "Clientes", icon: Users, path: "/clientes" },
  { name: "Productos", icon: Package, path: "/productos" },
  { name: "Categorías", icon: Package, path: "/categorias" },
  { name: "Reservas", icon: Calendar, path: "/reservas" },
  { name: "Consumos", icon: ReceiptText, path: "/consumos" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 text-zinc-300 flex flex-col h-screen hidden md:flex">
      <div className="h-16 flex items-center justify-center border-b border-zinc-800 px-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          BillarBlackPool
        </h1>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
          
          return (
            <Link key={item.path} href={item.path}>
              <div
                className={cn(
                  "relative flex items-center px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer mb-1",
                  isActive ? "text-emerald-400 font-medium" : "hover:text-white hover:bg-zinc-900/50"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-emerald-500/10 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon className={cn("w-5 h-5 mr-3 z-10 transition-colors", isActive ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-300")} />
                <span className="z-10">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <button className="flex items-center w-full px-4 py-3 text-zinc-400 hover:text-red-400 transition-colors rounded-xl hover:bg-red-500/10">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
