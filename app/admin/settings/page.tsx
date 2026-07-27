"use client";

import { useState } from "react";
import { Save, Check } from "lucide-react";
import { useSettings } from "@/lib/admin/store";

export default function AdminSettings() {
  const { settings, setSettings } = useSettings();
  const [form, setForm] = useState(settings);
  const [saved, setSaved] = useState(false);

  const handleSave = () => { setSettings(form); setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div>
      <div className="mb-8"><h1 className="font-heading text-3xl font-extrabold text-dark dark:text-white">Paramètres</h1><p className="text-muted mt-1">Configuration</p></div>

      <div className="max-w-2xl space-y-8">
        <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 p-6">
          <h2 className="font-heading text-lg font-bold text-dark dark:text-white mb-4">Informations générales</h2>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Nom</label><input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Email</label><input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Téléphone</label><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Adresse</label><input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
          </div>
        </div>

        <div className="bg-surface dark:bg-dark-alt rounded-2xl border border-border dark:border-white/5 p-6">
          <h2 className="font-heading text-lg font-bold text-dark dark:text-white mb-4">Réseaux sociaux</h2>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">WhatsApp</label><input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Facebook</label><input value={form.facebook} onChange={(e) => setForm({ ...form, facebook: e.target.value })} placeholder="https://facebook.com/..." className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
            <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Instagram</label><input value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} placeholder="https://instagram.com/..." className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none" /></div>
          </div>
        </div>

        <button onClick={handleSave} className={`inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all ${saved ? "bg-green-500" : "bg-accent hover:bg-accent-light"}`}>
          {saved ? <><Check size={18} />Enregistré !</> : <><Save size={18} />Enregistrer les modifications</>}
        </button>
      </div>
    </div>
  );
}

