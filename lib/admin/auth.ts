"use client";

export interface AdminUser { email: string; name: string; role: string; }

const MOCK_CREDENTIALS = { email: "admin@rjrenova.ma", password: "rjrenova2026" };
const MOCK_USER: AdminUser = { email: "admin@rjrenova.ma", name: "Admin RJ RENOVA", role: "Administrateur" };

export function login(email: string, password: string): AdminUser | null {
  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    if (typeof window !== "undefined") {
      localStorage.setItem("rjrenova_admin", JSON.stringify(MOCK_USER));
    }
    return MOCK_USER;
  }
  return null;
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("rjrenova_admin");
  }
}

export function getCurrentAdmin(): AdminUser | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("rjrenova_admin");
  if (!data) return null;
  try { return JSON.parse(data); } catch { return null; }
}

export function isAuthenticated(): boolean {
  return getCurrentAdmin() !== null;
}

