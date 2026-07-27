"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

const services = [
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

export default function AdminServices() {
  const [search, setSearch] = useState("");
  const filtered = services.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Services</h1>
          <p className="text-muted mt-1">{services.length} services</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Plus size={18} />Ajouter</button>
      </div>

      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un service..." className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-surface dark:bg-dark-alt text-dark dark:text-white focus:border-accent outline-none transition-colors" />
      </div>

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-muted text-left bg-surface-alt dark:bg-dark"><th className="p-4 font-medium">Service</th><th className="p-4 font-medium hidden sm:table-cell">Slug</th><th className="p-4 font-medium hidden md:table-cell">Projets</th><th className="p-4 font-medium">Statut</th><th className="p-4 font-medium text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-border dark:divide-white/5">
            {filtered.map((s) => (
              <tr key={s.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                <td className="p-4 font-medium text-dark dark:text-white">{s.name}</td>
                <td className="p-4 text-muted hidden sm:table-cell">{s.slug}</td>
                <td className="p-4 text-muted hidden md:table-cell">{s.projects}</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">{s.status}</span></td>
                <td className="p-4"><div className="flex items-center justify-end gap-2"><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Pencil size={16} /></button><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-red-500 transition-all"><Trash2 size={16} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

