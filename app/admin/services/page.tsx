"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search, X, Save } from "lucide-react";
import { useServices, type AdminService } from "@/lib/admin/store";

export default function AdminServices() {
  const { items, add, update, remove } = useServices();
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<AdminService | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", slug: "", status: "Actif", projects: 0 });

  const filtered = items.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  const openEdit = (s: AdminService) => { setEditing(s); setForm({ name: s.name, slug: s.slug, status: s.status, projects: s.projects }); };
  const openAdd = () => { setAdding(true); setForm({ name: "", slug: "", status: "Actif", projects: 0 }); };
  const closeForm = () => { setEditing(null); setAdding(false); };

  const handleSave = () => {
    if (!form.name) return;
    const slug = form.slug || form.name.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (editing) { update(editing.id, { ...form, slug }); }
    else { add({ ...form, slug }); }
    closeForm();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Services</h1><p className="text-muted mt-1">{items.length} services</p></div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Plus size={18} />Ajouter</button>
      </div>

      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un service..." className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-surface dark:bg-dark-alt text-dark dark:text-white focus:border-accent outline-none transition-colors" />
      </div>

      {(editing || adding) && (
        <div className="mb-6 bg-surface dark:bg-dark-alt rounded-2xl border border-accent/30 p-6">
          <div className="flex items-center justify-between mb-4"><h3 className="font-heading font-bold text-dark dark:text-white">{editing ? "Modifier le service" : "Nouveau service"}</h3><button onClick={closeForm} className="p-1.5 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted"><X size={18} /></button></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Nom *</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Slug</label><input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Statut</label><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none"><option>Actif</option><option>Inactif</option><option>Brouillon</option></select></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Projets</label><input type="number" value={form.projects} onChange={(e) => setForm({ ...form, projects: Number(e.target.value) })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={closeForm} className="px-4 py-2.5 rounded-xl text-sm font-medium text-muted hover:bg-surface-alt dark:hover:bg-dark transition-all">Annuler</button>
            <button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Save size={16} />Enregistrer</button>
          </div>
        </div>
      )}

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-muted text-left bg-surface-alt dark:bg-dark"><th className="p-4 font-medium">Service</th><th className="p-4 font-medium hidden sm:table-cell">Slug</th><th className="p-4 font-medium hidden md:table-cell">Projets</th><th className="p-4 font-medium">Statut</th><th className="p-4 font-medium text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-border dark:divide-white/5">
            {filtered.map((s) => (
              <tr key={s.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                <td className="p-4 font-medium text-dark dark:text-white">{s.name}</td>
                <td className="p-4 text-muted hidden sm:table-cell">{s.slug}</td>
                <td className="p-4 text-muted hidden md:table-cell">{s.projects}</td>
                <td className="p-4"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s.status === "Actif" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}`}>{s.status}</span></td>
                <td className="p-4"><div className="flex items-center justify-end gap-2"><button onClick={() => openEdit(s)} className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Pencil size={16} /></button><button onClick={() => { if (confirm(`Supprimer "${s.name}" ?`)) remove(s.id); }} className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-red-500 transition-all"><Trash2 size={16} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

