"use client";

import { useState } from "react";
import { Search, Trash2, Mail, Phone, Eye } from "lucide-react";
import { useQuotes } from "@/lib/admin/store";

const statusOptions = ["Nouveau", "Contacté", "Devis envoyé", "Accepté", "Refusé", "Archivé"];
const statusColors: Record<string, string> = { "Nouveau": "bg-accent/10 text-accent", "Contacté": "bg-blue-500/10 text-blue-500", "Devis envoyé": "bg-green-500/10 text-green-500", "Accepté": "bg-emerald-500/10 text-emerald-500", "Refusé": "bg-red-500/10 text-red-500", "Archivé": "bg-muted/10 text-muted" };

export default function AdminQuotes() {
  const { items, updateStatus, remove } = useQuotes();
  const [search, setSearch] = useState("");
  const [editingStatus, setEditingStatus] = useState<number | null>(null);

  const filtered = items.filter((q) => q.name.toLowerCase().includes(search.toLowerCase()) || q.service.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="mb-8"><h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Devis</h1><p className="text-muted mt-1">{items.length} demandes</p></div>
      <div className="relative mb-6"><Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher..." className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-surface dark:bg-dark-alt text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 overflow-hidden">
        <div className="overflow-x-auto"><table className="w-full text-sm">
          <thead><tr className="text-muted text-left bg-surface-alt dark:bg-dark"><th className="p-4 font-medium">Client</th><th className="p-4 font-medium hidden md:table-cell">Contact</th><th className="p-4 font-medium hidden lg:table-cell">Service</th><th className="p-4 font-medium hidden sm:table-cell">Date</th><th className="p-4 font-medium">Statut</th><th className="p-4 font-medium text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-border dark:divide-white/5">
            {filtered.map((q) => (
              <tr key={q.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                <td className="p-4"><div className="font-medium text-dark dark:text-white">{q.name}</div><div className="text-muted text-xs">{q.city}</div></td>
                <td className="p-4 hidden md:table-cell"><div className="text-muted text-xs flex items-center gap-1"><Mail size={12} />{q.email}</div><div className="text-muted text-xs flex items-center gap-1 mt-0.5"><Phone size={12} />{q.phone}</div></td>
                <td className="p-4 text-muted hidden lg:table-cell">{q.service}</td>
                <td className="p-4 text-muted hidden sm:table-cell">{q.date}</td>
                <td className="p-4">{editingStatus === q.id ? (<select value={q.status} onChange={(e) => { updateStatus(q.id, e.target.value); setEditingStatus(null); }} onBlur={() => setEditingStatus(null)} autoFocus className="px-2 py-1 rounded-lg border border-border bg-transparent text-xs font-medium outline-none">{statusOptions.map((s) => (<option key={s} value={s}>{s}</option>))}</select>) : (<button onClick={() => setEditingStatus(q.id)} className={`px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 ${statusColors[q.status] || ""}`}>{q.status}</button>)}</td>
                <td className="p-4"><div className="flex items-center justify-end gap-1"><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Eye size={16} /></button><button onClick={() => { if (confirm("Supprimer ce devis ?")) remove(q.id); }} className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-red-500 transition-all"><Trash2 size={16} /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table></div>
      </div>
    </div>
  );
}

