"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Users, Star, TrendingUp, ArrowRight } from "lucide-react";

const stats = [
  { label: "Projets", value: 250, icon: Building2, color: "bg-blue-500/10 text-blue-500", change: "+12%" },
  { label: "Devis reçus", value: 47, icon: FileText, color: "bg-accent/10 text-accent", change: "+8%" },
  { label: "Clients", value: 180, icon: Users, color: "bg-green-500/10 text-green-500", change: "+15%" },
  { label: "Avis", value: 32, icon: Star, color: "bg-yellow-500/10 text-yellow-500", change: "+5%" },
];

const recentQuotes = [
  { id: 1, name: "Ahmed B.", service: "Mur Rideau", city: "Casablanca", date: "26/07/2026", status: "Nouveau" },
  { id: 2, name: "Sophie M.", service: "Pergola", city: "Marrakech", date: "25/07/2026", status: "En cours" },
  { id: 3, name: "Karim L.", service: "Bardage", city: "Rabat", date: "24/07/2026", status: "Nouveau" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Tableau de bord</h1>
        <p className="text-muted mt-1">Vue d'ensemble de votre activité</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-surface dark:bg-dark-alt rounded-2xl p-6 border border-border dark:border-white/5">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}><stat.icon size={20} /></div>
              <span className="text-xs font-semibold text-green-500 flex items-center gap-1"><TrendingUp size={12} />{stat.change}</span>
            </div>
            <div className="font-heading text-2xl font-extrabold text-dark dark:text-white">{stat.value}</div>
            <div className="text-muted text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-lg font-bold text-dark dark:text-white">Devis récents</h2>
          <a href="/admin/quotes" className="text-accent text-sm font-semibold flex items-center gap-1 hover:underline">Voir tout <ArrowRight size={14} /></a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted text-left">
                <th className="pb-3 font-medium">Client</th><th className="pb-3 font-medium">Service</th><th className="pb-3 font-medium">Ville</th><th className="pb-3 font-medium">Date</th><th className="pb-3 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-white/5">
              {recentQuotes.map((q) => (
                <tr key={q.id} className="hover:bg-surface-alt dark:hover:bg-dark transition-colors">
                  <td className="py-3 font-medium text-dark dark:text-white">{q.name}</td>
                  <td className="py-3 text-muted">{q.service}</td>
                  <td className="py-3 text-muted">{q.city}</td>
                  <td className="py-3 text-muted">{q.date}</td>
                  <td className="py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${q.status === "Nouveau" ? "bg-accent/10 text-accent" : "bg-blue-500/10 text-blue-500"}`}>{q.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

