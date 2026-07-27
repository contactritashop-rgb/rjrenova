"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";

const filters = [
  "gallery.filter.all",
  "gallery.filter.residential",
  "gallery.filter.commercial",
  "gallery.filter.hotel",
  "gallery.filter.institutional",
] as const;

const projects = [
  { id: 1, title: "Résidence Al Andalous", city: "Casablanca", category: "residential", year: "2024", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 2, title: "Siège BMCE Tower", city: "Rabat", category: "commercial", year: "2024", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: 3, title: "Hôtel Royal Mansour", city: "Marrakech", category: "hotel", year: "2023", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { id: 4, title: "Université Mohammed VI", city: "Benguérir", category: "institutional", year: "2024", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" },
  { id: 5, title: "Villa Majorelle", city: "Marrakech", category: "residential", year: "2025", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
  { id: 6, title: "Marina Shopping", city: "Casablanca", category: "commercial", year: "2023", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
];

export function Gallery() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-accent text-accent font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark dark:text-white mt-4 mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterKey) => {
            const filter = filterKey.replace("gallery.filter.", "");
            const label = filter === "all" ? t("gallery.filter.all") : t(filterKey as any);
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-surface-alt dark:bg-dark-alt text-muted hover:text-dark dark:hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {project.city} - {project.year}
                  </span>
                  <h3 className="text-white font-heading text-xl font-bold mt-1">
                    {project.title}
                  </h3>
                  <ArrowRight size={18} className="text-white/60 mt-3" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


