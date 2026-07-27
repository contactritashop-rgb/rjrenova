"use client";

import { Plus, Pencil, Trash2, Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "Ahmed B.", role: "Architecte", rating: 5, date: "12/06/2026", status: "Publié" },
  { id: 2, name: "Sophie M.", role: "Directrice Hôtel", rating: 5, date: "03/05/2026", status: "Publié" },
  { id: 3, name: "Karim L.", role: "Promoteur", rating: 5, date: "18/04/2026", status: "Publié" },
];

export default function AdminTestimonials() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Témoignages</h1>
          <p className="text-muted mt-1">{testimonials.length} témoignages</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-semibold rounded-xl text-sm hover:bg-accent-light transition-all"><Plus size={18} />Ajouter</button>
      </div>

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="text-muted text-left bg-surface-alt dark:bg-dark"><th className="p-4 font-medium">Client</th><th className="p-4 font-medium hidden sm:table-cell">Rôle</th><th className="p-4 font-medium">Note</th><th className="p-4 font-medium hidden md:table-cell">Date</th><th className="p-4 font-medium">Statut</th><th className="p-4 font-medium text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-border dark:divide-white/5">
            {testimonials.map((t) => (
              <tr key={t.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                <td className="p-4 font-medium text-dark dark:text-white">{t.name}</td>
                <td className="p-4 text-muted hidden sm:table-cell">{t.role}</td>
                <td className="p-4"><div className="flex items-center gap-0.5">{Array.from({ length: t.rating }).map((_, i) => (<Star key={i} size={14} className="text-accent" fill="currentColor" />))}</div></td>
                <td className="p-4 text-muted hidden md:table-cell">{t.date}</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">{t.status}</span></td>
                <td className="p-4"><div className="flex items-center justify-end gap-2"><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Pencil size={16} /></button><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-red-500 transition-all"><Trash2 size={16} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

