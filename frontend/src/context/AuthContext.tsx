"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  permisos: string[];
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Restaurar sesión desde localStorage al recargar la página
    const storedUser = localStorage.getItem("user_info");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user info from local storage", error);
      }
    }
  }, []);

  const login = (userData: User, token: string) => {
    setUser(userData);
    localStorage.setItem("user_info", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_info");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const hasPermission = (permission: string) => {
    if (!user) return false;
    // Si es Administrador por defecto, o si tiene el permiso explícitamente.
    // También aceptamos un wildcard o si no hay permisos pero es admin.
    if (user.role?.toLowerCase().includes("admin")) return true;
    return user.permisos?.includes(permission) ?? false;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
