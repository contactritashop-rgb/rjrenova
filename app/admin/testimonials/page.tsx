"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Star, X, Save } from "lucide-react";
import { useTestimonials, type AdminTestimonial } from "@/lib/admin/store";

export default function AdminTestimonials() {
  const { items, add, update, remove } = useTestimonials();
  const [editing, setEditing] = useState<AdminTestimonial | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", rating: 5, text: "", status: "Publié" });

  const openEdit = (t: AdminTestimonial) => { setEditing(t); setForm({ name: t.name, role: t.role, rating: t.rating, text: t.text, status: t.status }); };
  const openAdd = () => { setAdding(true); setForm({ name: "", role: "", rating: 5, text: "", status: "Publié" }); };
  const closeForm = () => { setEditing(null); setAdding(false); };

  const handleSave = () => {
    if (!form.name) return;
    const date = new Date().toLocaleDateString("fr-FR");
    if (editing) update(editing.id, { ...form, date: editing.date });
    else add({ ...form, date });
    closeForm();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div><h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Témoignages</h1><p className="text-muted mt-1">{items.length} témoignages</p></div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Plus size={18} />Ajouter</button>
      </div>

      {(editing || adding) && (
        <div className="mb-6 bg-surface dark:bg-dark-alt rounded-2xl border border-accent/30 p-6">
          <div className="flex items-center justify-between mb-4"><h3 className="font-heading font-bold text-dark dark:text-white">{editing ? "Modifier le témoignage" : "Nouveau témoignage"}</h3><button onClick={closeForm} className="p-1.5 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted"><X size={18} /></button></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Nom *</label><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Rôle</label><input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Note (1-5)</label><div className="flex items-center gap-1">{[1,2,3,4,5].map((n) => (<button key={n} onClick={() => setForm({ ...form, rating: n })} className="p-1"><Star size={22} className={n <= form.rating ? "text-accent" : "text-border"} fill={n <= form.rating ? "currentColor" : "none"} /></button>))}</div></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1">Statut</label><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none"><option>Publié</option><option>Brouillon</option></select></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium text-dark dark:text-white mb-1">Témoignage</label><textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none resize-none" /></div>
          </div>
          <div className="flex justify-end gap-3"><button onClick={closeForm} className="px-4 py-2.5 rounded-xl text-sm font-medium text-muted hover:bg-surface-alt dark:hover:bg-dark transition-all">Annuler</button><button onClick={handleSave} className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Save size={16} />Enregistrer</button></div>
        </div>
      )}

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-muted text-left bg-surface-alt dark:bg-dark"><th className="p-4 font-medium">Client</th><th className="p-4 font-medium hidden sm:table-cell">Rôle</th><th className="p-4 font-medium">Note</th><th className="p-4 font-medium hidden md:table-cell">Date</th><th className="p-4 font-medium">Statut</th><th className="p-4 font-medium text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-border dark:divide-white/5">
            {items.map((t) => (
              <tr key={t.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                <td className="p-4 font-medium text-dark dark:text-white">{t.name}</td>
                <td className="p-4 text-muted hidden sm:table-cell">{t.role}</td>
                <td className="p-4"><div className="flex items-center gap-0.5">{Array.from({ length: t.rating }).map((_, i) => (<Star key={i} size={14} className="text-accent" fill="currentColor" />))}</div></td>
                <td className="p-4 text-muted hidden md:table-cell">{t.date}</td>
                <td className="p-4"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${t.status === "Publié" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}`}>{t.status}</span></td>
                <td className="p-4"><div className="flex items-center justify-end gap-2"><button onClick={() => openEdit(t)} className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Pencil size={16} /></button><button onClick={() => { if (confirm(`Supprimer le témoignage de ${t.name} ?`)) remove(t.id); }} className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-red-500 transition-all"><Trash2 size={16} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

