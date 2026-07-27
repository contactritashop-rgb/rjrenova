"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";
import type { Locale } from "@/lib/i18n/translations";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { href: "#services", key: "nav.services" as const },
  { href: "#process", key: "nav.company" as const },
  { href: "#gallery", key: "nav.projects" as const },
  { href: "#faq", key: "nav.faq" as const },
];

export function Header() {
  const { t, locale, setLocale, locales } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-heavy py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom px-6 lg:px-12 flex items-center justify-between">
          <a href="/" className="flex items-center">
            {/* Logo compact: adapts color based on scroll/dark mode */}
            <Logo
              variant="compact"
              dark={scrolled ? dark : true}
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-dark/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors duration-300"
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href="/devis"
              className="px-6 py-2.5 bg-accent text-white font-semibold text-sm rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40"
            >
              {t("nav.quote")}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full hover:bg-dark/5 dark:hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium hover:bg-dark/5 dark:hover:bg-white/10 transition-colors duration-300"
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{locale.toUpperCase()}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-full mt-2 glass-heavy rounded-xl py-2 min-w-[160px] shadow-xl"
                  >
                    {locales.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLocale(l.code as Locale);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-dark/5 dark:hover:bg-white/5 transition-colors duration-200 flex items-center gap-2 ${
                          locale === l.code ? "text-accent font-semibold" : ""
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-dark/5 dark:hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <nav className="absolute right-0 top-0 bottom-0 w-80 glass-heavy p-8 pt-24 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-dark dark:text-white hover:text-accent transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-6 py-3 bg-accent text-white font-semibold rounded-full text-center hover:bg-accent-dark transition-all duration-300"
              >
                {t("nav.quote")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}




