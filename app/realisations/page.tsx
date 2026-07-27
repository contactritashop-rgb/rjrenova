"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";

const filters = [
  { id: "all", fr: "Tous", en: "All", ar: "الكل" },
  { id: "residential", fr: "Résidentiel", en: "Residential", ar: "سكني" },
  { id: "commercial", fr: "Commercial", en: "Commercial", ar: "تجاري" },
  { id: "hotel", fr: "Hôtellerie", en: "Hotel", ar: "فندقي" },
  { id: "industrial", fr: "Industriel", en: "Industrial", ar: "صناعي" },
  { id: "institutional", fr: "Institutionnel", en: "Institutional", ar: "مؤسساتي" },
];

const projects = [
  { id: 1, title: { fr: "Résidence Al Andalous", en: "Al Andalous Residence", ar: "إقامة الأندلس" }, city: "Casablanca", category: "residential", year: "2024", surface: "2 500 m²", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", desc: { fr: "Façade mur rideau et bardage aluminium.", en: "Curtain wall facade and aluminum cladding.", ar: "واجهة زجاجية وتكسية ألمنيوم." } },
  { id: 2, title: { fr: "Siège BMCE Tower", en: "BMCE Tower HQ", ar: "مقر برج BMCE" }, city: "Rabat", category: "commercial", year: "2024", surface: "8 000 m²", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", desc: { fr: "Mur rideau double peau pour cette tour emblématique.", en: "Double-skin curtain wall for this iconic tower.", ar: "واجهة زجاجية مزدوجة لهذا البرج الأيقوني." } },
  { id: 3, title: { fr: "Hôtel Royal Mansour", en: "Royal Mansour Hotel", ar: "فندق رويال منصور" }, city: "Marrakech", category: "hotel", year: "2023", surface: "4 200 m²", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", desc: { fr: "Menuiseries aluminium et verrières pour ce palace.", en: "Aluminum joinery and canopies for this palace.", ar: "نجارة ألمنيوم ومظلات زجاجية لهذا القصر." } },
  { id: 4, title: { fr: "Université Mohammed VI", en: "Mohammed VI University", ar: "جامعة محمد السادس" }, city: "Benguérir", category: "institutional", year: "2024", surface: "12 000 m²", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80", desc: { fr: "Façades aluminium et brise-soleil nouvelle génération.", en: "Aluminum facades and next-gen sunshades.", ar: "واجهات ألمنيوم وكاسرات شمس الجيل الجديد." } },
  { id: 5, title: { fr: "Villa Majorelle", en: "Majorelle Villa", ar: "فيلا ماجوريل" }, city: "Marrakech", category: "residential", year: "2025", surface: "800 m²", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", desc: { fr: "Pergola bioclimatique et menuiseries sur mesure.", en: "Bioclimatic pergola and custom joinery.", ar: "برجولة مناخية ونجارة حسب الطلب." } },
  { id: 6, title: { fr: "Marina Shopping", en: "Marina Shopping", ar: "مارينا للتسوق" }, city: "Casablanca", category: "commercial", year: "2023", surface: "15 000 m²", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", desc: { fr: "Bardage et habillage de façade.", en: "Cladding and facade dressing.", ar: "تكسية وتلبيس واجهة." } },
  { id: 7, title: { fr: "Usine Aéronautique", en: "Aeronautics Factory", ar: "مصنع طيران" }, city: "Tanger", category: "industrial", year: "2022", surface: "20 000 m²", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", desc: { fr: "Bardage industriel et menuiseries aluminium.", en: "Industrial cladding and aluminum joinery.", ar: "تكسية صناعية ونجارة ألمنيوم." } },
  { id: 8, title: { fr: "Palais des Congrès", en: "Convention Center", ar: "قصر المؤتمرات" }, city: "Agadir", category: "institutional", year: "2025", surface: "6 500 m²", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", desc: { fr: "Mur rideau et verrière monumentale.", en: "Monumental curtain wall and canopy.", ar: "واجهة زجاجية ومظلة ضخمة." } },
  { id: 9, title: { fr: "Riad El Fenn", en: "Riad El Fenn", ar: "رياض الفن" }, city: "Marrakech", category: "hotel", year: "2024", surface: "1 200 m²", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", desc: { fr: "Fenêtres aluminium et garde-corps design.", en: "Aluminum windows and design guardrails.", ar: "نوافذ ألمنيوم ودرابزينات تصميمية." } },
];

export default function ProjectsPage() {
  const { locale } = useI18n();
  const l = locale as "fr" | "en" | "ar";
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center bg-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-dark" />
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4">
                {l === "fr" ? "Nos Réalisations" : l === "en" ? "Our Projects" : "أعمالنا"}
              </h1>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                {l === "fr" ? "Découvrez nos projets à travers le Maroc" : l === "en" ? "Discover our projects across Morocco" : "اكتشفوا مشاريعنا عبر المغرب"}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((f) => (
                <button key={f.id} onClick={() => setFilter(f.id)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === f.id ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-surface-alt dark:bg-dark-alt text-muted hover:text-dark dark:hover:text-white"}`}>{f.fr && typeof f.fr === "string" ? (l === "fr" ? f.fr : l === "en" ? f.en : f.ar) : ""}</button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.article key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="group relative rounded-2xl overflow-hidden bg-surface dark:bg-dark-alt border border-border dark:border-white/5">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.title.fr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-muted text-xs mb-2">
                        <span className="flex items-center gap-1"><MapPin size={13} /> {p.city}</span>
                        <span className="flex items-center gap-1"><Calendar size={13} /> {p.year}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-dark dark:text-white mb-2">{l === "fr" ? p.title.fr : l === "en" ? p.title.en : p.title.ar}</h3>
                      <p className="text-muted text-sm mb-4">{l === "fr" ? p.desc.fr : l === "en" ? p.desc.en : p.desc.ar}</p>
                      <span className="text-accent text-xs font-semibold">{p.surface}</span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            <div className="text-center mt-16">
              <a href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all shadow-xl shadow-accent/25">
                {l === "fr" ? "Démarrer votre projet" : l === "en" ? "Start your project" : "ابدأ مشروعك"}
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

