"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import { login } from "@/lib/admin/auth";
import { Logo } from "@/components/ui/logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    const user = login(email, password);
    setLoading(false);
    if (user) { router.push("/admin/dashboard"); } else { setError("Email ou mot de passe incorrect"); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="font-accent text-3xl font-bold text-white">RJ<span className="text-accent">RENOVA</span></span>
          <p className="text-white/40 text-sm mt-2">Administration</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-heavy rounded-2xl p-8 border border-white/10">
          <h1 className="font-heading text-2xl font-bold text-white mb-6">Connexion</h1>

          {error && <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/60 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@rjrenova.ma" className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-accent outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/60 mb-1.5">Mot de passe</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input type={showPw ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-11 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-accent outline-none transition-colors" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">{showPw ? <EyeOff size={18} /> : <Eye size={18} />}</button>
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light disabled:opacity-50 transition-all">
            {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><span>Se connecter</span><ArrowRight size={18} /></>}
          </button>

          <p className="text-white/20 text-xs text-center mt-6">admin@rjrenova.ma / rjrenova2026</p>
        </form>
      </motion.div>
    </div>
  );
}


