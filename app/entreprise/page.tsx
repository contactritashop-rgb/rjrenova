"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Lightbulb, Clock, Target, Heart, TrendingUp } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";

const content = {
  hero: {
    fr: { title: "L'excellence en façades aluminium", subtitle: "Depuis 2023, RJ RENOVA façonne l'architecture marocaine." },
    en: { title: "Excellence in aluminum facades", subtitle: "Since 2023, RJ RENOVA has been shaping Moroccan architecture." },
    ar: { title: "التميز في واجهات الألمنيوم", subtitle: "منذ 2023، تشكل RJ RENOVA العمارة المغربية." },
    tzm: { title: "ⴰⵎⵏⵣⴰⵖ ⴳ ⵉⵖⴼⴰⵡⵏ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ", subtitle: "ⵙⴳ 2023, RJ RENOVA ⴷⴰ ⵜⵙⵇⵇⵙⴰ ⵜⴰⵡⵡⵓⵏⴽⵜ ⵜⴰⵎⵖⵔⵉⴱⵉⵜ." },
  },
  mission: {
    fr: { title: "Notre Mission", text: "Concevoir, fabriquer et installer des façades aluminium qui allient performance technique, esthétique architecturale et respect de l'environnement." },
    en: { title: "Our Mission", text: "Design, manufacture, and install aluminum facades combining technical performance, architectural aesthetics, and environmental respect." },
    ar: { title: "مهمتنا", text: "تصميم وتصنيع وتركيب واجهات الألمنيوم التي تجمع بين الأداء التقني والجمالية المعمارية واحترام البيئة." },
    tzm: { title: "ⵜⴰⵎⵙⵙⵓⵔⵜ ⵏⵏⵖ", text: "ⴰⵙⵇⵇⵙⵉ, ⴰⵙⵏⴼⵍⵓⵍ ⴷ ⵓⵙⴱⴷⴷ ⵏ ⵉⵖⴼⴰⵡⵏ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⵉⵙⵎⵓⵏⵏ ⵜⴰⵡⵓⵔⵉ ⵜⴰⵜⵉⴽⵏⵉⵢⵜ, ⴰⵙⵜⵀⵉⵜⵉⴽ ⴰⵎⵙⵡⵓⵔⵉ ⴷ ⵓⵙⵔⵓⵙ ⵏ ⵜⵡⵏⵏⴰⴹⵜ." },
  },
  values: [
    { icon: ShieldCheck, key: "quality", fr: "Qualité", en: "Quality", ar: "الجودة", tzm: "ⵜⴰⵔⴰⵡⵉ", frDesc: "Matériaux certifiés et contrôle rigoureux.", enDesc: "Certified materials and rigorous control.", arDesc: "مواد معتمدة ومراقبة صارمة.", tzmDesc: "ⵉⵎⴰⵙⵙⵏ ⵉⵜⵜⵓⵙⴷⴷⵉⴷⵏ ⴷ ⵓⵙⵏⵇⴷ ⵉⵇⵓⵔⴰⵏ." },
    { icon: Lightbulb, key: "innovation", fr: "Innovation", en: "Innovation", ar: "الابتكار", tzm: "ⴰⵙⵏⴼⵍⵓⵍ", frDesc: "Technologies de pointe pour solutions performantes.", enDesc: "Cutting-edge technologies for efficient solutions.", arDesc: "تقنيات متطورة لحلول فعالة.", tzmDesc: "ⵜⵉⵜⵉⴽⵏⵓⵍⵓⵊⵉⵢⵉⵏ ⵜⵉⵎⵣⵡⴰⵔⵉⵏ ⵉ ⵜⴼⵔⴰⵜⵉⵏ ⵉⵎⵇⵇⵓⵔⵏ." },
    { icon: Heart, key: "engagement", fr: "Engagement", en: "Commitment", ar: "الالتزام", tzm: "ⴰⵣⴷⴰⵢ", frDesc: "Une équipe passionnée dédiée à votre réussite.", enDesc: "A passionate team dedicated to your success.", arDesc: "فريق شغوف مكرس لنجاحكم.", tzmDesc: "ⵜⴰⵔⴰⴱⴱⵓⵜ ⵉⵅⴰⵜⵔⵏ ⵉⵣⴷⴰⵢⵏ ⵖⵔ ⵓⵔⵏⵓ ⵏⵏⴽ." },
    { icon: Target, key: "precision", fr: "Précision", en: "Precision", ar: "الدقة", tzm: "ⵜⵓⵙⵙⴷⴰ", frDesc: "Une exigence du détail qui fait la différence.", enDesc: "A demand for detail that makes the difference.", arDesc: "الاهتمام بالتفاصيل يصنع الفرق.", tzmDesc: "ⴰⵙⵔⵓⵙ ⵏ ⵜⴼⵔⴽⵉⵡⵉⵏ ⵏⵏⴰ ⵉⵙⵏⴼⴰⵍⵉⵏ." },
  ],
  stats: [
    { value: 120, suffix: "+", fr: "Projets réalisés", en: "Completed projects", ar: "مشروع منجز", tzm: "ⵉⵙⵏⴼⴰⵔⵏ ⵉⵜⵜⵡⴰⵙⴽⴰⵔⵏ" },
    { value: 80, suffix: "+", fr: "Clients satisfaits", en: "Satisfied clients", ar: "عميل راضٍ", tzm: "ⵉⵎⵙⴰⵖⵏ ⵉⵜⵜⵓⵇⵏⴰⵄⵏ" },
    { value: 3, suffix: "", fr: "Années d'expertise", en: "Years of expertise", ar: "سنوات خبرة", tzm: "ⵉⵙⴳⴳⵯⴰⵙⵏ ⵏ ⵜⵡⵉⵙⵉ" },
    { value: 25, suffix: "+", fr: "Collaborateurs", en: "Team members", ar: "متعاون", tzm: "ⵉⵎⴰⵡⴰⵙⵏ" },
  ],
  timeline: [
    { year: "2023", fr: "Création de RJ RENOVA à Casablanca", en: "RJ RENOVA founded in Casablanca", ar: "تأسيس RJ RENOVA في الدار البيضاء", tzm: "ⴰⵙⵏⵓⵍⴼⵓ ⵏ RJ RENOVA ⴳ ⴰⵏⴼⴰ" },
    { year: "2024", fr: "Ouverture de l'usine de production", en: "Production plant opening", ar: "افتتاح مصنع الإنتاج", tzm: "ⴰⵙⵔⵖⵓ ⵏ ⵓⵙⵏⴽⴰⵔ ⵏ ⵓⴼⴰⵔⵙ" },
    { year: "2024", fr: "Premier projet hôtelier 5 étoiles", en: "First 5-star hotel project", ar: "أول مشروع فندقي 5 نجوم", tzm: "ⴰⵙⵏⴼⴰⵔ ⴰⵎⵣⵡⴰⵔⵓ ⵏ ⵓⵙⵏⵙⵉ ⵙ 5 ⵉⵜⵔⴰⵏ" },
    { year: "2025", fr: "Expansion nationale, 12 villes", en: "National expansion, 12 cities", ar: "توسع وطني، 12 مدينة", tzm: "ⴰⵙⵙⵉⵎⵖⵔ ⴰⵏⴰⵎⵓⵔ, 12 ⵏ ⵜⵖⵔⵎⵉⵏ" },
    { year: "2026", fr: "Lancement nouvelle gamme bioclimatique", en: "New bioclimatic range launch", ar: "إطلاق مجموعة مناخية جديدة", tzm: "ⴰⵙⵙⵏⵜⵉ ⵏ ⵜⴰⵢⵙⵉ ⵜⴰⵎⴰⵢⵏⵓⵜ ⵜⴰⴱⵢⵓⴽⵍⵉⵎⴰⵜⵉⵢⵜ" },
  ],
  sections: {
    values: { fr: "Nos Valeurs", en: "Our Values", ar: "قيمنا", tzm: "ⴰⵣⴰⵍ ⵏⵏⵖ" },
    history: { fr: "Notre Histoire", en: "Our History", ar: "قصتنا", tzm: "ⴰⵎⵣⵔⵓⵢ ⵏⵏⵖ" },
    ctaTitle: { fr: "Construisons l'avenir ensemble", en: "Let's build the future together", ar: "لنبني المستقبل معاً", tzm: "ⴰⴷ ⵏⵙⴱⵖⵔ ⵉⵎⴰⵍ ⴷⵉⴷⵙ" },
    ctaSub: { fr: "Contactez-nous pour discuter de votre projet.", en: "Contact us to discuss your project.", ar: "اتصلوا بنا لمناقشة مشروعكم.", tzm: "ⴰⵡⵙ ⴰⵖ ⴰⴷ ⵏⵙⴰⵡⴰⵍ ⵅⴼ ⵓⵙⵏⴼⴰⵔ ⵏⵏⴽ." },
    ctaBtn: { fr: "Demander un devis", en: "Request a quote", ar: "طلب عرض سعر", tzm: "ⵙⵙⵓⵜⵔ ⴰⵙⵡⵉⵔⵉ" },
  },
};

export default function EntreprisePage() {
  const { locale } = useI18n();
  const l = locale as "fr" | "en" | "ar" | "tzm";
  const t = (obj: any) => obj?.[l] || obj?.fr || "";

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-dark" />
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full glass border-white/20 text-white/90 text-sm mb-6">RJ RENOVA</span>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4">{t(content.hero).title}</h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{t(content.hero).subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-dark dark:text-white mb-6">{t(content.mission).title}</h2>
                <p className="text-lg text-dark/70 dark:text-white/70 leading-relaxed">{t(content.mission).text}</p>
              </motion.div>

              <h2 className="font-heading text-3xl font-extrabold text-dark dark:text-white mb-12 text-center">{t(content.sections.values)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                {content.values.map((v, i) => (
                  <motion.div key={v.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-5 p-6 rounded-2xl bg-surface-alt dark:bg-dark-alt">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><v.icon size={24} className="text-primary" /></div>
                    <div>
                      <h3 className="font-heading font-bold text-dark dark:text-white mb-1">{l === "fr" ? v.fr : l === "en" ? v.en : l === "ar" ? v.ar : v.tzm}</h3>
                      <p className="text-muted text-sm">{l === "fr" ? v.frDesc : l === "en" ? v.enDesc : l === "ar" ? v.arDesc : v.tzmDesc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {content.stats.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-surface-alt dark:bg-dark-alt">
                    <div className="font-heading text-3xl md:text-4xl font-extrabold text-accent mb-1">{stat.value}{stat.suffix}</div>
                    <div className="text-muted text-sm">{t(stat)}</div>
                  </motion.div>
                ))}
              </div>

              <h2 className="font-heading text-3xl font-extrabold text-dark dark:text-white mb-12 text-center">{t(content.sections.history)}</h2>
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
                <div className="space-y-8">
                  {content.timeline.map((item, i) => (
                    <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex flex-col md:flex-row gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <span className="font-accent text-accent font-extrabold text-lg">{item.year}</span>
                        <p className="text-dark/70 dark:text-white/70 mt-1">{t(item)}</p>
                      </div>
                      <div className="hidden md:flex items-center justify-center"><div className="w-4 h-4 rounded-full bg-accent shrink-0 z-10" /></div>
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
          <div className="relative container-custom px-6 lg:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-4xl font-extrabold text-white mb-4">{t(content.sections.ctaTitle)}</h2>
              <p className="text-white/60 text-lg mb-8">{t(content.sections.ctaSub)}</p>
              <a href="/devis" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/30">
                {t(content.sections.ctaBtn)}<ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



