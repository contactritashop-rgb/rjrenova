"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";
import { servicesData } from "@/lib/data/services";
import type { Locale } from "@/lib/i18n/translations";

export function ServicePageClient({ slug }: { slug: string }) {
  const { t, locale } = useI18n();
  const loc = locale as Locale;
  const service = servicesData[slug];
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  if (!service) notFound();

  // Safe accessor: try locale, fall back to fr
  const tx = (obj: any) => obj?.[loc] || obj?.fr || "";

  // Render helper: use tx() for nested lookup
  const renderL = (key: string) => (obj: any) => obj?.[key] || obj?.fr || "";
  const L = (key: string) => renderL(key);

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-dark/60 z-10" />
          <img src={service.heroImage} alt={tx(service.title)} className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 container-custom px-6 lg:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full glass border-white/20 text-white/90 text-sm mb-6">
                {t("nav.services")}
              </span>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">{tx(service.title)}</h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">{tx(service.subtitle)}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg text-dark/70 dark:text-white/70 leading-relaxed mb-16">
                {service.description[loc]}
              </motion.p>

              <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-10 text-center">Avantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                {service.advantages.map((adv, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 rounded-2xl bg-surface-alt dark:bg-dark-alt">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Check size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-dark dark:text-white mb-1">{adv.title[loc]}</h3>
                      <p className="text-muted text-sm">{adv.description[loc]}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-10 text-center">Étapes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {service.process.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center p-6">
                    <span className="font-accent text-4xl font-extrabold text-accent/20">{step.step}</span>
                    <h3 className="font-heading font-bold text-dark dark:text-white mt-2 mb-2">{step.title[loc]}</h3>
                    <p className="text-muted text-sm">{step.description[loc]}</p>
                  </motion.div>
                ))}
              </div>

              {service.gallery.length > 0 && (
                <>
                  <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-10 text-center">Galerie</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
                    {service.gallery.map((img, i) => (
                      <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl overflow-hidden aspect-[4/3]">
                        <img src={img.src} alt={img.alt[loc]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {service.faq.length > 0 && (
                <>
                  <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-10 text-center">{t("faq.title")}</h2>
                  <div className="space-y-3 mb-20">
                    {service.faq.map((item, i) => (
                      <div key={i} className="rounded-2xl border border-border dark:border-white/10 overflow-hidden">
                        <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-alt dark:hover:bg-dark-alt transition-colors">
                          <span className="font-heading font-semibold text-dark dark:text-white pr-4">{tx(item.q)}</span>
                          <ChevronDown size={18} className={`shrink-0 text-muted transition-transform ${faqOpen === i ? "rotate-180" : ""}`} />
                        </button>
                        {faqOpen === i && (
                          <div className="px-5 pb-5 text-muted text-sm">{item.a[loc]}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
          <div className="relative container-custom px-6 lg:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6">{service.ctaTitle[loc]}</h2>
              <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/30">
                {t("cta.button")}
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}








