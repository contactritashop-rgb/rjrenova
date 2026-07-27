"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Lightbulb, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";

const reasons = [
  { key: "why.quality" as const, descKey: "why.quality.desc" as const, icon: ShieldCheck },
  { key: "why.expertise" as const, descKey: "why.expertise.desc" as const, icon: Award },
  { key: "why.innovation" as const, descKey: "why.innovation.desc" as const, icon: Lightbulb },
  { key: "why.deadlines" as const, descKey: "why.deadlines.desc" as const, icon: Clock },
];

export function Why() {
  const { t } = useI18n();

  return (
    <section id="why" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNDNBNUUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMjAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="relative container-custom px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-accent text-accent font-semibold text-sm uppercase tracking-widest">
            RJ RENOVA
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark dark:text-white mt-4 mb-4">
            {t("why.title")}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("why.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl hover:bg-surface-alt dark:hover:bg-dark-alt transition-colors duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <reason.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-dark dark:text-white mb-3">
                {t(reason.key)}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {t(reason.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

