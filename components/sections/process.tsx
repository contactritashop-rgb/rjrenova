"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PencilRuler, Factory, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";

const steps = [
  { key: "process.step1" as const, descKey: "process.step1.desc" as const, icon: ClipboardCheck, number: "01" },
  { key: "process.step2" as const, descKey: "process.step2.desc" as const, icon: PencilRuler, number: "02" },
  { key: "process.step3" as const, descKey: "process.step3.desc" as const, icon: Factory, number: "03" },
  { key: "process.step4" as const, descKey: "process.step4.desc" as const, icon: Wrench, number: "04" },
];

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      
      <div className="relative container-custom px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-accent text-accent font-semibold text-sm uppercase tracking-widest">
            Méthodologie
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-4">
            {t("process.title")}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                  <step.icon size={36} className="text-accent" />
                </div>
                <span className="font-accent text-5xl font-extrabold text-white/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 select-none">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {t(step.key)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

