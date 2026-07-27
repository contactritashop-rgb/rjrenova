"use client";

import { useState, useEffect, useCallback } from "react";

export interface AdminService { id: number; name: string; slug: string; status: string; projects: number; }
export interface AdminProject { id: number; name: string; city: string; category: string; year: string; status: string; }
export interface AdminTestimonial { id: number; name: string; role: string; rating: number; date: string; status: string; text: string; }
export interface AdminQuote { id: number; name: string; email: string; phone: string; service: string; city: string; budget: string; date: string; status: string; }
export interface AdminSettings { companyName: string; email: string; phone: string; address: string; whatsapp: string; facebook: string; instagram: string; }

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function save<T>(key: string, data: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
}

const DEFAULT_SERVICES: AdminService[] = [
  { id: 1, name: "Mur Rideau", slug: "mur-rideau", status: "Actif", projects: 45 },
  { id: 2, name: "Bardage", slug: "bardage", status: "Actif", projects: 38 },
  { id: 3, name: "Habillage de Façade", slug: "habillage-facade", status: "Actif", projects: 22 },
  { id: 4, name: "Menuiserie Aluminium", slug: "menuiserie-aluminium", status: "Actif", projects: 67 },
  { id: 5, name: "Verrières", slug: "verrieres", status: "Actif", projects: 15 },
  { id: 6, name: "Pergolas", slug: "pergolas", status: "Actif", projects: 28 },
  { id: 7, name: "Garde-corps", slug: "garde-corps", status: "Actif", projects: 19 },
  { id: 8, name: "Portes Aluminium", slug: "portes-aluminium", status: "Actif", projects: 31 },
  { id: 9, name: "Fenêtres Aluminium", slug: "fenetres-aluminium", status: "Actif", projects: 52 },
];

const DEFAULT_PROJECTS: AdminProject[] = [
  { id: 1, name: "Résidence Al Andalous", city: "Casablanca", category: "Résidentiel", year: "2024", status: "Publié" },
  { id: 2, name: "BMCE Tower", city: "Rabat", category: "Commercial", year: "2024", status: "Publié" },
  { id: 3, name: "Royal Mansour", city: "Marrakech", category: "Hôtellerie", year: "2023", status: "Publié" },
  { id: 4, name: "Université Mohammed VI", city: "Benguérir", category: "Institutionnel", year: "2024", status: "Brouillon" },
  { id: 5, name: "Villa Majorelle", city: "Marrakech", category: "Résidentiel", year: "2025", status: "Publié" },
];

const DEFAULT_TESTIMONIALS: AdminTestimonial[] = [
  { id: 1, name: "Ahmed B.", role: "Architecte", rating: 5, date: "12/06/2026", status: "Publié", text: "Service exceptionnel." },
  { id: 2, name: "Sophie M.", role: "Directrice Hôtel", rating: 5, date: "03/05/2026", status: "Publié", text: "Travail remarquable." },
  { id: 3, name: "Karim L.", role: "Promoteur", rating: 5, date: "18/04/2026", status: "Publié", text: "Je recommande vivement." },
];

const DEFAULT_QUOTES: AdminQuote[] = [
  { id: 1, name: "Ahmed B.", email: "ahmed@email.com", phone: "+212 6XX-XXXXXX", service: "Mur Rideau", city: "Casablanca", budget: "100k-500k MAD", date: "26/07/2026", status: "Nouveau" },
  { id: 2, name: "Sophie M.", email: "sophie@email.com", phone: "+212 6XX-XXXXXX", service: "Pergola", city: "Marrakech", budget: "< 100k MAD", date: "25/07/2026", status: "Contacté" },
  { id: 3, name: "Karim L.", email: "karim@email.com", phone: "+212 6XX-XXXXXX", service: "Bardage", city: "Rabat", budget: "500k-2M MAD", date: "24/07/2026", status: "Nouveau" },
];

const DEFAULT_SETTINGS: AdminSettings = { companyName: "RJ RENOVA", email: "contact@rjrenova.ma", phone: "+212 5XX-XXXXXX", address: "Casablanca, Maroc", whatsapp: "+212XXXXXXXXX", facebook: "", instagram: "" };

function useStore<T>(key: string, fallback: T): [T, (data: T) => void, () => void] {
  const [data, setData] = useState<T>(fallback);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setData(load(key, fallback));
    setHydrated(true);
  }, [key]);

  const update = useCallback((newData: T) => { setData(newData); save(key, newData); }, [key]);
  const reset = useCallback(() => { setData(fallback); save(key, fallback); }, [key, fallback]);

  return [hydrated ? data : fallback, update, reset];
}

export function useServices() {
  const [items, setItems] = useStore<AdminService[]>("rjrenova_services", DEFAULT_SERVICES);
  const add = (item: Omit<AdminService, "id">) => { const newItem = { ...item, id: Date.now() }; setItems([...items, newItem]); };
  const update = (id: number, patch: Partial<AdminService>) => { setItems(items.map((i) => (i.id === id ? { ...i, ...patch } : i))); };
  const remove = (id: number) => { setItems(items.filter((i) => i.id !== id)); };
  return { items, add, update, remove };
}

export function useProjects() {
  const [items, setItems] = useStore<AdminProject[]>("rjrenova_projects", DEFAULT_PROJECTS);
  const add = (item: Omit<AdminProject, "id">) => { setItems([...items, { ...item, id: Date.now() }]); };
  const update = (id: number, patch: Partial<AdminProject>) => { setItems(items.map((i) => (i.id === id ? { ...i, ...patch } : i))); };
  const remove = (id: number) => { setItems(items.filter((i) => i.id !== id)); };
  return { items, add, update, remove };
}

export function useTestimonials() {
  const [items, setItems] = useStore<AdminTestimonial[]>("rjrenova_testimonials", DEFAULT_TESTIMONIALS);
  const add = (item: Omit<AdminTestimonial, "id">) => { setItems([...items, { ...item, id: Date.now() }]); };
  const update = (id: number, patch: Partial<AdminTestimonial>) => { setItems(items.map((i) => (i.id === id ? { ...i, ...patch } : i))); };
  const remove = (id: number) => { setItems(items.filter((i) => i.id !== id)); };
  return { items, add, update, remove };
}

export function useQuotes() {
  const [items, setItems] = useStore<AdminQuote[]>("rjrenova_quotes", DEFAULT_QUOTES);
  const updateStatus = (id: number, status: string) => { setItems(items.map((i) => (i.id === id ? { ...i, status } : i))); };
  const remove = (id: number) => { setItems(items.filter((i) => i.id !== id)); };
  return { items, updateStatus, remove };
}

export function useSettings() {
  const [settings, setSettings] = useStore<AdminSettings>("rjrenova_settings", DEFAULT_SETTINGS);
  return { settings, setSettings };
}

