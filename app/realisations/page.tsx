"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";

const filters = [
  { id: "all", fr: "Tous", en: "All", ar: "الكل", tzm: "ⵎⴰⵕⵕⴰ" },
  { id: "residential", fr: "Résidentiel", en: "Residential", ar: "سكني", tzm: "ⴰⵙⴷⵔⴼⵉ" },
  { id: "commercial", fr: "Commercial", en: "Commercial", ar: "تجاري", tzm: "ⴰⵙⵏⵣⵉ" },
  { id: "hotel", fr: "Hôtellerie", en: "Hotel", ar: "فندقي", tzm: "ⴰⵙⵏⵙⵉ" },
  { id: "industrial", fr: "Industriel", en: "Industrial", ar: "صناعي", tzm: "ⴰⵙⵏⴽⴰⵔⵉ" },
  { id: "institutional", fr: "Institutionnel", en: "Institutional", ar: "مؤسساتي", tzm: "ⴰⵙⵏⵎⴰⵍⴰ" },
];

const projects = [
  { id: 1, title: { fr: "Résidence Al Andalous", en: "Al Andalous Residence", ar: "إقامة الأندلس", tzm: "ⵜⴰⵎⵙⵙⵓⵔⵜ ⵍⴰⵏⴷⴰⵍⵓⵙ" }, city: "Casablanca", category: "residential", year: "2024", surface: "2 500 m²", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", desc: { fr: "Façade mur rideau et bardage aluminium.", en: "Curtain wall facade and aluminum cladding.", ar: "واجهة زجاجية وتكسية ألمنيوم.", tzm: "ⴰⵖⴼⴰⵡ ⵏ ⵜⵣⴳⴰ ⴷ ⵓⵙⵙⵓⵎⵔ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ." } },
  { id: 2, title: { fr: "Siège BMCE Tower", en: "BMCE Tower HQ", ar: "مقر برج BMCE", tzm: "ⴱⵔⵊ BMCE" }, city: "Rabat", category: "commercial", year: "2024", surface: "8 000 m²", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", desc: { fr: "Mur rideau double peau.", en: "Double-skin curtain wall.", ar: "واجهة زجاجية مزدوجة.", tzm: "ⴰⵖⴼⴰⵡ ⵏ ⵜⵣⴳⴰ ⵙ ⵙⵉⵏ ⵉⴷⵓⵔⴰⵏ." } },
  { id: 3, title: { fr: "Hôtel Royal Mansour", en: "Royal Mansour Hotel", ar: "فندق رويال منصور", tzm: "ⴰⵙⵏⵙⵉ ⵔⵡⴰⵢⴰⵍ ⵎⴰⵏⵚⵓⵕ" }, city: "Marrakech", category: "hotel", year: "2023", surface: "4 200 m²", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", desc: { fr: "Menuiseries aluminium et verrières.", en: "Aluminum joinery and canopies.", ar: "نجارة ألمنيوم ومظلات.", tzm: "ⵜⴰⵡⵡⵓⵔⵉ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⴷ ⵜⵎⴱⵡⴰⵢⵉⵏ." } },
  { id: 4, title: { fr: "Université Mohammed VI", en: "Mohammed VI University", ar: "جامعة محمد السادس", tzm: "ⵜⴰⵙⴷⴰⵡⵉⵜ ⵎⵓⵃⵎⵎⴰⴷ ⵡⵉⵙ ⵚⴹⵉⵚ" }, city: "Benguérir", category: "institutional", year: "2024", surface: "12 000 m²", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80", desc: { fr: "Façades aluminium et brise-soleil.", en: "Aluminum facades and sunshades.", ar: "واجهات ألمنيوم وكاسرات شمس.", tzm: "ⵉⵖⴼⴰⵡⵏ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⴷ ⵓⵙⵔⴰⴳ ⵏ ⵜⴰⴼⵓⴽⵜ." } },
  { id: 5, title: { fr: "Villa Majorelle", en: "Majorelle Villa", ar: "فيلا ماجوريل", tzm: "ⴼⵉⵍⴰ ⵎⴰⵊⵓⵔⵉⵍ" }, city: "Marrakech", category: "residential", year: "2025", surface: "800 m²", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", desc: { fr: "Pergola bioclimatique et menuiseries.", en: "Bioclimatic pergola and joinery.", ar: "برجولة مناخية ونجارة.", tzm: "ⴰⴱⵔⴰⵔ ⴰⴱⵢⵓⴽⵍⵉⵎⴰⵜⵉⴽ ⴷ ⵜⴰⵡⵡⵓⵔⵉ." } },
  { id: 6, title: { fr: "Marina Shopping", en: "Marina Shopping", ar: "مارينا للتسوق", tzm: "ⵎⴰⵔⵉⵏⴰ ⵏ ⵜⴰⵙⴱⴱⴰⴱⵜ" }, city: "Casablanca", category: "commercial", year: "2023", surface: "15 000 m²", image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", desc: { fr: "Bardage et habillage de façade.", en: "Cladding and facade dressing.", ar: "تكسية وتلبيس واجهة.", tzm: "ⴰⵙⵙⵓⵎⵔ ⴷ ⵓⵙⵙⵓⵏ ⵏ ⵓⵖⴼⴰⵡ." } },
  { id: 7, title: { fr: "Usine Aéronautique", en: "Aeronautics Factory", ar: "مصنع طيران", tzm: "ⴰⵙⵏⴽⴰⵔ ⵏ ⵜⴰⵢⵍⴰⵍⵜ" }, city: "Tanger", category: "industrial", year: "2022", surface: "20 000 m²", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", desc: { fr: "Bardage industriel et menuiseries.", en: "Industrial cladding and joinery.", ar: "تكسية صناعية ونجارة.", tzm: "ⴰⵙⵙⵓⵎⵔ ⴰⵙⵏⴽⴰⵔⵉ ⴷ ⵜⴰⵡⵡⵓⵔⵉ." } },
  { id: 8, title: { fr: "Palais des Congrès", en: "Convention Center", ar: "قصر المؤتمرات", tzm: "ⵉⴳⴷⴷⴰⵍ ⵏ ⵉⵎⵓⵙⵙⵓⵜⵏ" }, city: "Agadir", category: "institutional", year: "2025", surface: "6 500 m²", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", desc: { fr: "Mur rideau et verrière monumentale.", en: "Monumental curtain wall and canopy.", ar: "واجهة زجاجية ومظلة ضخمة.", tzm: "ⴰⵖⴼⴰⵡ ⵏ ⵜⵣⴳⴰ ⴷ ⵜⵎⴱⵡⴰⵢⵜ ⵜⴰⵎⵇⵇⵔⴰⵏⵜ." } },
  { id: 9, title: { fr: "Riad El Fenn", en: "Riad El Fenn", ar: "رياض الفن", tzm: "ⵕⵢⴰⴹ ⵍⴼⴰⵏ" }, city: "Marrakech", category: "hotel", year: "2024", surface: "1 200 m²", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", desc: { fr: "Fenêtres aluminium et garde-corps design.", en: "Aluminum windows and design guardrails.", ar: "نوافذ ألمنيوم ودرابزينات.", tzm: "ⵜⵉⵣⴳⴰⵔ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⴷ ⵉⵃⵟⵟⴰⵏ." } },
];

const t = (obj: any) => (l: string) => obj?.[l] || obj?.fr || "";

export default function ProjectsPage() {
  const { locale } = useI18n();
  const l = (locale === "tzm" ? "tzm" : locale) as "fr" | "en" | "ar" | "tzm";
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center bg-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-dark" />
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4">
                {l === "fr" ? "Nos Réalisations" : l === "en" ? "Our Projects" : l === "ar" ? "أعمالنا" : "ⵉⵙⵏⴼⴰⵔⵏ ⵏⵏⵖ"}
              </h1>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                {l === "fr" ? "Découvrez nos projets à travers le Maroc" : l === "en" ? "Discover our projects across Morocco" : l === "ar" ? "اكتشفوا مشاريعنا عبر المغرب" : "ⴼⵙⵔ ⵉⵙⵏⴼⴰⵔⵏ ⵏⵏⵖ ⴳ ⵍⵎⵖⵔⵉⴱ"}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((f) => (
                <button key={f.id} onClick={() => setFilter(f.id)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === f.id ? "bg-primary text-white" : "bg-surface-alt dark:bg-dark-alt text-muted hover:text-dark"}`}>{l === "fr" ? f.fr : l === "en" ? f.en : l === "ar" ? f.ar : f.tzm}</button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.article key={p.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="group relative rounded-2xl overflow-hidden bg-surface dark:bg-dark-alt border border-border dark:border-white/5">
                    <div className="aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.title.fr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-muted text-xs mb-2"><span className="flex items-center gap-1"><MapPin size={13} /> {p.city}</span><span className="flex items-center gap-1"><Calendar size={13} /> {p.year}</span></div>
                      <h3 className="font-heading text-lg font-bold text-dark dark:text-white mb-2">{l === "fr" ? p.title.fr : l === "en" ? p.title.en : l === "ar" ? p.title.ar : p.title.tzm}</h3>
                      <p className="text-muted text-sm mb-4">{l === "fr" ? p.desc.fr : l === "en" ? p.desc.en : l === "ar" ? p.desc.ar : p.desc.tzm}</p>
                      <span className="text-accent text-xs font-semibold">{p.surface}</span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            <div className="text-center mt-16">
              <a href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all">
                {l === "fr" ? "Démarrer votre projet" : l === "en" ? "Start your project" : l === "ar" ? "ابدأ مشروعك" : "ⵙⵙⵏⵜⵉ ⴰⵙⵏⴼⴰⵔ ⵏⵏⴽ"}
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

