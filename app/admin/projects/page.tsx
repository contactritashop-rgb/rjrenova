"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search, MapPin, X, Save } from "lucide-react";
import { useProjects, type AdminProject } from "@/lib/admin/store";

export default function AdminProjects() {
  const { items, add, update, remove } = useProjects();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<AdminProject | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", city: "Casablanca", category: "Résidentiel", year: String(new Date().getFullYear()), status: "Brouillon" });

  const filtered = items.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  const openEdit = (p: AdminProject) => { setEditing(p); setForm({ name: p.name, city: p.city, category: p.category, year: p.year, status: p.status }); };
  const openAdd = () => { setAdding(true); setForm({ name: "", city: "Casablanca", category: "Résidentiel", year: String(new Date().getFullYear()), status: "Brouillon" }); };
  const closeForm = () => { setEditing(null); setAdding(false); };

  const handleSave = () => {
    if (!form.name) return;
    if (editing) update(editing.id, form); else add(form);
    closeForm();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Réalisations</h1><p className="text-muted mt-1">{items.length} projets</p></div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Plus size={18} />Ajouter</button>
      </div>

      <div className="relative mb-6"><Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un projet..." className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-surface dark:bg-dark-alt text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>

      {(editing || adding) && (
        <div className="mb-6 bg-surface dark:bg-dark-alt rounded-2xl border border-accent/30 p-6">
          <div className="flex items-center justify-between mb-4"><h3 className="font-heading font-bold text-dark dark:text-white">{editing ? "Modifier le projet" : "Nouveau projet"}</h3><button onClick={closeForm} className="p-1.5 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted"><X size={18} /></button></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Nom *</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Ville</label><input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Catégorie</label><select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none"><option>Résidentiel</option><option>Commercial</option><option>Industriel</option><option>Hôtellerie</option><option>Institutionnel</option></select></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Année</label><input value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Statut</label><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none"><option>Publié</option><option>Brouillon</option><option>Archivé</option></select></div>
          </div>
          <div className="flex justify-end gap-3"><button onClick={closeForm} className="px-4 py-2.5 rounded-xl text-sm font-medium text-muted hover:bg-surface-alt dark:hover:bg-dark transition-all">Annuler</button><button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Save size={16} />Enregistrer</button></div>
        </div>
      )}

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
                <td className="p-4"><div className="flex items-center justify-end gap-2"><button onClick={() => openEdit(p)} className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Pencil size={16} /></button><button onClick={() => { if (confirm(`Supprimer "${p.name}" ?`)) remove(p.id); }} className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-red-500 transition-all"><Trash2 size={16} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

