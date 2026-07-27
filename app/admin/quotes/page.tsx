"use client";

import { Search, Eye, Mail, Phone } from "lucide-react";
import { useState } from "react";

const quotes = [
  { id: 1, name: "Ahmed B.", email: "ahmed@email.com", phone: "+212 6XX-XXXXXX", service: "Mur Rideau", city: "Casablanca", budget: "100k-500k MAD", date: "26/07/2026", status: "Nouveau" },
  { id: 2, name: "Sophie M.", email: "sophie@email.com", phone: "+212 6XX-XXXXXX", service: "Pergola", city: "Marrakech", budget: "< 100k MAD", date: "25/07/2026", status: "Contacté" },
  { id: 3, name: "Karim L.", email: "karim@email.com", phone: "+212 6XX-XXXXXX", service: "Bardage", city: "Rabat", budget: "500k-2M MAD", date: "24/07/2026", status: "Nouveau" },
  { id: 4, name: "Fatima R.", email: "fatima@email.com", phone: "+212 6XX-XXXXXX", service: "Fenêtres", city: "Tanger", budget: "< 100k MAD", date: "22/07/2026", status: "Devis envoyé" },
  { id: 5, name: "Youssef H.", email: "youssef@email.com", phone: "+212 6XX-XXXXXX", service: "Verrières", city: "Agadir", budget: "100k-500k MAD", date: "20/07/2026", status: "Nouveau" },
];

const statusColors: Record<string, string> = { "Nouveau": "bg-accent/10 text-accent", "Contacté": "bg-blue-500/10 text-blue-500", "Devis envoyé": "bg-green-500/10 text-green-500", "Archivé": "bg-muted/10 text-muted" };

export default function AdminQuotes() {
  const [search, setSearch] = useState("");
  const filtered = quotes.filter((q) => q.name.toLowerCase().includes(search.toLowerCase()) || q.service.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Devis</h1>
        <p className="text-muted mt-1">{quotes.length} demandes reçues</p>
      </div>

      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un devis..." className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-border bg-surface dark:bg-dark-alt text-dark dark:text-white focus:border-accent outline-none transition-colors" />
      </div>

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-muted text-left bg-surface-alt dark:bg-dark"><th className="p-4 font-medium">Client</th><th className="p-4 font-medium hidden md:table-cell">Contact</th><th className="p-4 font-medium hidden lg:table-cell">Service</th><th className="p-4 font-medium hidden lg:table-cell">Budget</th><th className="p-4 font-medium hidden sm:table-cell">Date</th><th className="p-4 font-medium">Statut</th><th className="p-4 font-medium text-right">Actions</th></tr></thead>
            <tbody className="divide-y divide-border dark:divide-white/5">
              {filtered.map((q) => (
                <tr key={q.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                  <td className="p-4"><div className="font-medium text-dark dark:text-white">{q.name}</div><div className="text-muted text-xs hidden md:block">{q.city}</div></td>
                  <td className="p-4 hidden md:table-cell"><div className="flex items-center gap-1 text-muted text-xs"><Mail size={12} />{q.email}</div><div className="flex items-center gap-1 text-muted text-xs mt-0.5"><Phone size={12} />{q.phone}</div></td>
                  <td className="p-4 text-muted hidden lg:table-cell">{q.service}</td>
                  <td className="p-4 text-muted hidden lg:table-cell">{q.budget}</td>
                  <td className="p-4 text-muted hidden sm:table-cell">{q.date}</td>
                  <td className="p-4"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[q.status] || "bg-muted text-muted"}`}>{q.status}</span></td>
                  <td className="p-4"><div className="flex items-center justify-end"><button className="p-2 rounded-lg hover:bg-surface-alt dark:hover:bg-dark text-muted hover:text-accent transition-all"><Eye size={16} /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

