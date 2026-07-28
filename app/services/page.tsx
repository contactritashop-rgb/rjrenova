"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";
import { servicesData } from "@/lib/data/services";
import type { Locale } from "@/lib/i18n/translations";

export default function ServicesIndexPage() {
  const { t, locale } = useI18n();
  const loc = (locale === "tzm" ? "fr" : locale) as "fr" | "en" | "ar";
  const services = Object.values(servicesData);

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center bg-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-dark" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4">{t("services.title")}</h1>
              <p className="text-white/60 text-lg max-w-xl mx-auto">{t("services.subtitle")}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-custom px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative bg-surface dark:bg-dark-alt rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-accent/20"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-500">
                    <span className="text-accent group-hover:text-white transition-colors duration-500 font-accent text-xl font-bold">{service.icon === "Cuboid" ? "▣" : service.icon === "Layers" ? "▤" : service.icon === "PaintBucket" ? "🎨" : service.icon === "LayoutGrid" ? "⊞" : service.icon === "Sun" ? "☀" : service.icon === "Umbrella" ? "☂" : service.icon === "Shield" ? "🛡" : service.icon === "DoorOpen" ? "🚪" : "🪟"}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark dark:text-white mb-3">{service.title[loc]}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{service.subtitle[loc]}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    {t("services.discover")}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



