"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, Wrench, FolderOpen, Star, FileText, Settings, LogOut, Menu, X, ChevronRight } from "lucide-react";
import { isAuthenticated, logout, getCurrentAdmin, type AdminUser } from "@/lib/admin/auth";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { href: "/admin/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
  { href: "/admin/services", icon: Wrench, label: "Services" },
  { href: "/admin/projects", icon: FolderOpen, label: "Réalisations" },
  { href: "/admin/testimonials", icon: Star, label: "Témoignages" },
  { href: "/admin/quotes", icon: FileText, label: "Devis" },
  { href: "/admin/settings", icon: Settings, label: "Paramètres" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    if (pathname === "/admin/login") return;
    if (!isAuthenticated()) { router.push("/admin/login"); return; }
    setUser(getCurrentAdmin());
  }, [pathname, router]);

  if (pathname === "/admin/login") return <>{children}</>;
  if (!user) return <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-dark"><div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full" /></div>;

  const handleLogout = () => { logout(); router.push("/admin/login"); };

  return (
    <div className="min-h-screen bg-surface-alt dark:bg-dark">
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-dark flex-col z-30">
        <div className="p-6 border-b border-white/10">
          <span className="font-accent text-xl font-bold text-white">RJ<span className="text-accent">RENOVA</span></span>
          <p className="text-white/40 text-xs mt-1">Administration</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === item.href ? "bg-accent text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
              <item.icon size={18} />{item.label}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">A</div>
            <div><div className="text-white text-sm font-medium">{user.name}</div><div className="text-white/40 text-xs">{user.role}</div></div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-400/10 text-sm transition-all"><LogOut size={16} />Déconnexion</button>
        </div>
      </aside>

      <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-dark text-white">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-dark flex flex-col">
            <div className="p-6 border-b border-white/10">
              <span className="font-accent text-xl font-bold text-white">RJ<span className="text-accent">RENOVA</span></span>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === item.href ? "bg-accent text-white" : "text-white/60 hover:text-white hover:bg-white/5"}`}><item.icon size={18} />{item.label}</a>
              ))}
            </nav>
            <div className="p-4 border-t border-white/10">
              <button onClick={() => { logout(); router.push("/admin/login"); }} className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-400/10 text-sm"><LogOut size={16} />Déconnexion</button>
            </div>
          </div>
        </div>
      )}

      <main className="lg:ml-64 min-h-screen">
        <header className="sticky top-0 z-20 glass-heavy px-6 py-4 flex items-center justify-end gap-4 border-b border-border dark:border-white/5">
          <div className="flex items-center gap-2 text-sm text-muted">
            <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="hidden sm:inline text-dark dark:text-white font-medium">{user.name}</span>
          </div>
        </header>
        <div className="p-6 lg:p-10">{children}</div>
      </main>
    </div>
  );
}


