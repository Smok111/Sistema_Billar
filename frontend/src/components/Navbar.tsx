"use client";

import { Menu, Search, Bell, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const pageTitle = pathname === "/" ? "Dashboard" : pathname.substring(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-md border-b border-zinc-800/50 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-zinc-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold text-zinc-100 hidden sm:block">
          {pageTitle}
        </h2>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="w-64 bg-zinc-900/50 border border-zinc-800 rounded-full pl-10 pr-4 py-1.5 text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
          />
        </div>
        
        <button className="relative text-zinc-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-zinc-950"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-zinc-200">Admin</p>
            <p className="text-xs text-zinc-500">admin@billar.com</p>
          </div>
          <UserCircle className="w-8 h-8 text-zinc-400" />
        </div>
      </div>
    </header>
  );
}
