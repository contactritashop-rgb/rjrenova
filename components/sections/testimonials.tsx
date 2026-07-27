"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";

const testimonials = [
  {
    name: "Ahmed B.",
    role: "Architecte, Casablanca",
    text: "RJ RENOVA a dépassé toutes nos attentes. Leur travail sur la façade de notre projet résidentiel est tout simplement exceptionnel. Qualité et professionnalisme au rendez-vous.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Directrice Hôtel, Marrakech",
    text: "Une équipe remarquable qui a su comprendre notre vision et la traduire en réalité. La verrière de notre hôtel est devenue la signature architecturale de l'établissement.",
    rating: 5,
  },
  {
    name: "Karim L.",
    role: "Promoteur Immobilier, Rabat",
    text: "Collaborer avec RJ RENOVA est un gage de sérénité. Délais respectés, finitions impeccables, et un service après-vente réactif. Je recommande sans hésiter.",
    rating: 5,
  },
];

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-surface-alt">
      <div className="container-custom px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-accent text-accent font-semibold text-sm uppercase tracking-widest">
            Avis
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark dark:text-white mt-4 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-surface dark:bg-dark-alt rounded-2xl p-8 border border-border dark:border-white/5"
            >
              <Quote size={32} className="text-accent/20 mb-4" />
              <p className="text-dark/80 dark:text-white/70 text-sm leading-relaxed mb-6 italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-accent" fill="currentColor" />
                ))}
              </div>
              <div>
                <div className="font-heading font-bold text-dark dark:text-white">
                  {item.name}
                </div>
                <div className="text-muted text-sm">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

