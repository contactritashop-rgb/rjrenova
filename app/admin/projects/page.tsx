"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search, MapPin } from "lucide-react";

const projects = [
  { id: 1, name: "Résidence Al Andalous", city: "Casablanca", category: "Résidentiel", year: "2024", status: "Publié" },
  { id: 2, name: "BMCE Tower", city: "Rabat", category: "Commercial", year: "2024", status: "Publié" },
  { id: 3, name: "Royal Mansour", city: "Marrakech", category: "Hôtellerie", year: "2023", status: "Publié" },
  { id: 4, name: "Université Mohammed VI", city: "Benguérir", category: "Institutionnel", year: "2024", status: "Brouillon" },
  { id: 5, name: "Villa Majorelle", city: "Marrakech", category: "Résidentiel", year: "2025", status: "Publié" },
];

export default function AdminProjects() {
  const [search, setSearch] = useState("");
  const filtered = projects.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Réalisations</h1>
          <p className="text-muted mt-1">{projects.length} projets</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Plus size={18} />Ajouter</button>
      </div>

      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un projet..." className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-surface dark:bg-dark-alt text-dark dark:text-white focus:border-accent outline-none transition-colors" />
      </div>

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-muted text-left bg-surface-alt dark:bg-dark"><th className="p-4 font-medium">Projet</th><th className="p-4 font-medium hidden sm:table-cell">Catégorie</th><th className="p-4 font-medium hidden md:table-cell">Année</th><th className="p-4 font-medium">Statut</th><th className="p-4 font-medium text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-border dark:divide-white/5">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                <td className="p-4"><div className="font-medium text-dark dark:text-white">{p.name}</div><div className="text-muted text-xs flex items-center gap-1 mt-0.5"><MapPin size={12} />{p.city}</div></td>
                <td className="p-4 text-muted hidden sm:table-cell">{p.category}</td>
                <td className="p-4 text-muted hidden md:table-cell">{p.year}</td>
                <td className="p-4"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.status === "Publié" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}`}>{p.status}</span></td>
                <td className="p-4"><div className="flex items-center justify-end gap-2"><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Pencil size={16} /></button><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-red-500 transition-all"><Trash2 size={16} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

