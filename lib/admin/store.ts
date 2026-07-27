"use client";

import { useState, useEffect, useCallback } from "react";
import { adminApi } from "./api";

export interface AdminService { id: number; name: string; slug: string; status: string; projects: number; }
export interface AdminProject { id: number; name: string; city: string; category: string; year: string; status: string; }
export interface AdminTestimonial { id: number; name: string; role: string; rating: number; date: string; status: string; text: string; }
export interface AdminQuote { id: number; name: string; email: string; phone: string; service: string; city: string; budget: string; date: string; status: string; }
export interface AdminSettings { companyName: string; email: string; phone: string; address: string; whatsapp: string; facebook: string; instagram: string; }

const DEFAULT_SERVICES: AdminService[] = [{ id: 1, name: "Chargement...", slug: "-", status: "-", projects: 0 }];
const DEFAULT_PROJECTS: AdminProject[] = [{ id: 1, name: "Chargement...", city: "-", category: "-", year: "-", status: "-" }];
const DEFAULT_TESTIMONIALS: AdminTestimonial[] = [{ id: 1, name: "Chargement...", role: "-", rating: 5, date: "-", status: "-", text: "-" }];
const DEFAULT_QUOTES: AdminQuote[] = [{ id: 1, name: "Chargement...", email: "-", phone: "-", service: "-", city: "-", budget: "-", date: "-", status: "-" }];
const DEFAULT_SETTINGS: AdminSettings = { companyName: "RJ RENOVA", email: "contact@rjrenova.ma", phone: "(+212) 0660 006 757", address: "Agadir, Maroc", whatsapp: "+212660006757", facebook: "", instagram: "" };

function loadLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
}
function saveLocal<T>(key: string, data: T) { if (typeof window !== "undefined") localStorage.setItem(key, JSON.stringify(data)); }

function useApiStore<T>(
  listFn: () => Promise<any[]>,
  localKey: string,
  fallback: T[],
  mapFn: (item: any) => T
): [T[], (items: T[]) => void, boolean, string | null] {
  const [data, setData] = useState<T[]>(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const rows = await listFn();
        if (!cancelled && rows?.length) {
          const mapped = rows.map(mapFn);
          setData(mapped);
          saveLocal(localKey, mapped);
          setLoading(false);
          return;
        }
      } catch (e) { /* fall through to local */ }
      if (!cancelled) {
        const local = loadLocal<T[]>(localKey, fallback);
        if (local !== fallback) setData(local);
        setError("MySQL indisponible — données locales");
        setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return [data, setData, loading, error];
}

export function useServices() {
  const [items, setItems] = useApiStore<AdminService>(
    () => adminApi.services.list(),
    "rjrenova_services",
    DEFAULT_SERVICES,
    (r: any) => ({ id: r.id, name: r.name, slug: r.slug, status: r.status, projects: r.projects })
  );
  const add = async (item: Omit<AdminService, "id">) => {
    try { const res = await adminApi.services.create(item); setItems([...items, { ...item, id: res.id }]); } catch { setItems([...items, { ...item, id: Date.now() }]); }
  };
  const update = async (id: number, patch: Partial<AdminService>) => {
    setItems(items.map((i) => (i.id === id ? { ...i, ...patch } : i)));
    try { await adminApi.services.update(id, patch); } catch {}
  };
  const remove = async (id: number) => {
    setItems(items.filter((i) => i.id !== id));
    try { await adminApi.services.delete(id); } catch {}
  };
  return { items, add, update, remove };
}

export function useProjects() {
  const [items, setItems] = useApiStore<AdminProject>(
    () => adminApi.projects.list(),
    "rjrenova_projects",
    DEFAULT_PROJECTS,
    (r: any) => ({ id: r.id, name: r.name, city: r.city, category: r.category, year: r.year, status: r.status })
  );
  const add = async (item: Omit<AdminProject, "id">) => {
    try { const res = await adminApi.projects.create(item); setItems([...items, { ...item, id: res.id }]); } catch { setItems([...items, { ...item, id: Date.now() }]); }
  };
  const update = async (id: number, patch: Partial<AdminProject>) => {
    setItems(items.map((i) => (i.id === id ? { ...i, ...patch } : i)));
    try { await adminApi.projects.update(id, patch); } catch {}
  };
  const remove = async (id: number) => {
    setItems(items.filter((i) => i.id !== id));
    try { await adminApi.projects.delete(id); } catch {}
  };
  return { items, add, update, remove };
}

export function useTestimonials() {
  const [items, setItems] = useApiStore<AdminTestimonial>(
    () => adminApi.testimonials.list(),
    "rjrenova_testimonials",
    DEFAULT_TESTIMONIALS,
    (r: any) => ({ id: r.id, name: r.name, role: r.role, rating: r.rating, date: r.date, status: r.status, text: r.text })
  );
  const add = async (item: Omit<AdminTestimonial, "id">) => {
    try { const res = await adminApi.testimonials.create(item); setItems([...items, { ...item, id: res.id }]); } catch { setItems([...items, { ...item, id: Date.now() }]); }
  };
  const update = async (id: number, patch: Partial<AdminTestimonial>) => {
    setItems(items.map((i) => (i.id === id ? { ...i, ...patch } : i)));
    try { await adminApi.testimonials.update(id, patch); } catch {}
  };
  const remove = async (id: number) => {
    setItems(items.filter((i) => i.id !== id));
    try { await adminApi.testimonials.delete(id); } catch {}
  };
  return { items, add, update, remove };
}

export function useQuotes() {
  const [items, setItems] = useApiStore<AdminQuote>(
    () => adminApi.quotes.list(),
    "rjrenova_quotes",
    DEFAULT_QUOTES,
    (r: any) => ({ id: r.id, name: r.name, email: r.email, phone: r.phone, service: r.service, city: r.city, budget: r.budget, date: r.date, status: r.status })
  );
  const updateStatus = async (id: number, status: string) => {
    setItems(items.map((i) => (i.id === id ? { ...i, status } : i)));
    try { await adminApi.quotes.updateStatus(id, status); } catch {}
  };
  const remove = async (id: number) => {
    setItems(items.filter((i) => i.id !== id));
    try { await adminApi.quotes.delete(id); } catch {}
  };
  return { items, updateStatus, remove };
}

export function useSettings() {
  const [settings, setSettingsState] = useState<AdminSettings>(DEFAULT_SETTINGS);
  useEffect(() => { setSettingsState(loadLocal("rjrenova_settings", DEFAULT_SETTINGS)); }, []);
  const setSettings = (s: AdminSettings) => { setSettingsState(s); saveLocal("rjrenova_settings", s); };
  return { settings, setSettings };
}


