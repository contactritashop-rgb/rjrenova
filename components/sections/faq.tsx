"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";
import type { TranslationKey } from "@/lib/i18n/translations";

const faqItems = [
  { q: "faq.q1" as TranslationKey, a: "faq.a1" as TranslationKey },
  { q: "faq.q2" as TranslationKey, a: "faq.a2" as TranslationKey },
  { q: "faq.q3" as TranslationKey, a: "faq.a3" as TranslationKey },
  { q: "faq.q4" as TranslationKey, a: "faq.a4" as TranslationKey },
  { q: "faq.q5" as TranslationKey, a: "faq.a5" as TranslationKey },
];

export function Faq() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-accent text-accent font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark dark:text-white mt-4 mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border dark:border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-alt dark:hover:bg-dark-alt transition-colors duration-300"
              >
                <span className="font-heading font-bold text-dark dark:text-white pr-4">
                  {t(item.q)}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted text-sm leading-relaxed">
                      {t(item.a)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

