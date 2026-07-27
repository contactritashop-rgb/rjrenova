"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cuboid, Layers, PaintBucket, LayoutGrid, Sun, Umbrella, Shield, DoorOpen, AppWindow } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";

const services = [
  { key: "services.curtain" as const, descKey: "services.curtain.desc" as const, icon: Cuboid, slug: "mur-rideau" },
  { key: "services.cladding" as const, descKey: "services.cladding.desc" as const, icon: Layers, slug: "bardage" },
  { key: "services.dressing" as const, descKey: "services.dressing.desc" as const, icon: PaintBucket, slug: "habillage-facade" },
  { key: "services.joinery" as const, descKey: "services.joinery.desc" as const, icon: LayoutGrid, slug: "menuiserie-aluminium" },
  { key: "services.canopies" as const, descKey: "services.canopies.desc" as const, icon: Sun, slug: "verrieres" },
  { key: "services.pergolas" as const, descKey: "services.pergolas.desc" as const, icon: Umbrella, slug: "pergolas" },
  { key: "services.guardrails" as const, descKey: "services.guardrails.desc" as const, icon: Shield, slug: "garde-corps" },
  { key: "services.doors" as const, descKey: "services.doors.desc" as const, icon: DoorOpen, slug: "portes-aluminium" },
  { key: "services.windows" as const, descKey: "services.windows.desc" as const, icon: AppWindow, slug: "fenetres-aluminium" },
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="section-padding bg-surface-alt">
      <div className="container-custom px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-accent text-accent font-semibold text-sm uppercase tracking-widest">
            {t("nav.services")}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark dark:text-white mt-4 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-surface dark:bg-dark-alt rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-accent/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <service.icon size={28} className="text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-xl font-bold text-dark dark:text-white mb-3">
                {t(service.key)}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {t(service.descKey)}
              </p>
              <a
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm group/link hover:gap-3 transition-all duration-300"
              >
                {t("services.discover")}
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

