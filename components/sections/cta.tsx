"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";

export function Cta() {
  const { t } = useI18n();

  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-dark" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
      
      <div className="relative container-custom px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm mb-8">
            <Send size={14} />
            <span>Devis gratuit sous 48h</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 max-w-3xl mx-auto leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10">
            {t("cta.subtitle")}
          </p>

          <a
            href="/devis"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-white font-bold text-lg rounded-full hover:bg-accent-light transition-all duration-300 shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105"
          >
            {t("cta.button")}
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


