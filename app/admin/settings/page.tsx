"use client";

import { Save } from "lucide-react";

export default function AdminSettings() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Paramètres</h1>
        <p className="text-muted mt-1">Configuration du site</p>
      </div>

      <div className="max-w-2xl space-y-8">
        <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 p-6">
          <h2 className="font-heading text-lg font-bold text-dark dark:text-white mb-4">Informations générales</h2>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Nom de l'entreprise</label><input defaultValue="RJ RENOVA" className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Email de contact</label><input defaultValue="contact@rjrenova.ma" className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Téléphone</label><input defaultValue="+212 5XX-XXXXXX" className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Adresse</label><input defaultValue="Casablanca, Maroc" className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
          </div>
        </div>

        <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 p-6">
          <h2 className="font-heading text-lg font-bold text-dark dark:text-white mb-4">Réseaux sociaux</h2>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">WhatsApp</label><input defaultValue="+212XXXXXXXXX" className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Facebook</label><input placeholder="https://facebook.com/..." className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Instagram</label><input placeholder="https://instagram.com/..." className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
          </div>
        </div>

        <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 p-6">
          <h2 className="font-heading text-lg font-bold text-dark dark:text-white mb-4">Sécurité</h2>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Nouveau mot de passe</label><input type="password" className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Confirmer le mot de passe</label><input type="password" className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all"><Save size={18} />Enregistrer les modifications</button>
      </div>
    </div>
  );
}

