"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";

const content = {
  fr: {
    title: "Mentions Légales",
    s1t: "Éditeur du site",
    s1b: "RJ RENOVA - Société de droit marocain - Siège social : Agadir, Maroc - Email : contact@rjrenova.ma - Téléphone : (+212) 0660 006 757",
    s2t: "Hébergement",
    s2b: "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
    s3t: "Propriété intellectuelle",
    s3b: "L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de RJ RENOVA. Toute reproduction est interdite sans autorisation préalable.",
    s4t: "Crédits",
    s4b: "Conception et développement : HAMOUCH - Photographies : Projets réalisés par nos équipes projets partout au Maroc.",
  },
  en: {
    title: "Legal Notice",
    s1t: "Site Publisher",
    s1b: "RJ RENOVA - Moroccan company - Head office: Agadir, Morocco - Email: contact@rjrenova.ma - Phone: (+212) 0660 006 757",
    s2t: "Hosting",
    s2b: "This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
    s3t: "Intellectual Property",
    s3b: "All content on this site (text, images, logos) is the exclusive property of RJ RENOVA. Any reproduction is prohibited without prior authorization.",
    s4t: "Credits",
    s4b: "Design & development: HAMOUCH - Photography: Projects carried out by our project teams across Morocco.",
  },
  ar: {
    title: "إشعار قانوني",
    s1t: "ناشر الموقع",
    s1b: "RJ RENOVA - شركة مغربية - المقر الاجتماعي : أكادير، المغرب - البريد : contact@rjrenova.ma - الهاتف : (212+) 0660 006 757",
    s2t: "الاستضافة",
    s2b: "هذا الموقع مستضاف من قبل Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
    s3t: "الملكية الفكرية",
    s3b: "جميع محتويات هذا الموقع (نصوص، صور، شعارات) هي ملكية حصرية لـ RJ RENOVA. أي استنساخ ممنوع بدون إذن مسبق.",
    s4t: "اعتمادات",
    s4b: "التصميم والتطوير : HAMOUCH - الصور : مشاريع منجزة من طرف فرقنا عبر المغرب.",
  },
  tzm: {
    title: "ⵜⵉⵡⴰⵍⵉⵏ ⵜⵉⵣⵔⴼⴰⵏⵉⵏ",
    s1t: "ⴰⵏⵙⵙⵉⵖⴼ ⵏ ⵡⴰⵏⵜⵉⵔⵏⵉⵜ",
    s1b: "RJ RENOVA - ⵜⴰⵎⵙⵙⵓⵔⵜ ⵜⴰⵎⵖⵔⵉⴱⵉⵜ - ⴰⴳⴰⴷⵉⵔ, ⵍⵎⵖⵔⵉⴱ - ⵉⵎⴰⵢⵍ: contact@rjrenova.ma - ⵜⵉⵍⵉⴼⵓⵏ: (+212) 0660 006 757",
    s2t: "ⴰⵙⵏⵙⵙⵉ",
    s2b: "ⵡⴰⵏⵜⵉⵔⵏⵉⵜ ⴰⴷ ⵉⵜⵜⵡⴰⵙⵏⵙⵙⴰ ⵙⴳ Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
    s3t: "ⴰⵢⵍⴰ ⴰⴷⵍⵙⴰⵏ",
    s3b: "ⵎⴰⵕⵕⴰ ⵉⴳⵎⴰⵎⵏ ⵏ ⵡⴰⵏⵜⵉⵔⵏⵉⵜ ⴰⴷ (ⵉⴹⵕⵉⵚⵏ, ⵜⵉⵡⵍⴰⴼⵉⵏ, ⵉⵛⵏⵢⴰⵍⵏ) ⴷ ⴰⵢⵍⴰ ⵏ RJ RENOVA. ⴽⵔⴰ ⵏ ⵓⵙⵏⵖⵍ ⵉⵜⵜⵓⵙⴳⴷⵍ ⴱⵍⴰ ⵜⵙⵉⵔⴳⵜ.",
    s4t: "ⵉⵙⵎⴰⵡⵏ",
    s4b: "ⴰⵙⵇⵇⵙⵉ ⴷ ⵓⵙⵏⴼⵍⵓⵍ : HAMOUCH - ⵜⵉⵡⵍⴰⴼⵉⵏ : ⵉⵙⵏⴼⴰⵔⵏ ⵉⵜⵜⵡⴰⵙⴽⴰⵔⵏ ⵙⴳ ⵜⴰⵔⴰⴱⴱⵓⵜ ⵏⵏⵖ ⴳ ⵎⴰⵕⵕⴰ ⵍⵎⵖⵔⵉⴱ.",
  },
};

export default function LegalPage() {
  const { locale } = useI18n();
  const l = (locale === "tzm" ? "tzm" : locale) as "fr" | "en" | "ar" | "tzm";
  const t = content[l] || content.fr;

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 section-padding">
        <div className="container-custom px-6 lg:px-12 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-extrabold text-dark dark:text-white mb-10">{t.title}</h1>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s1t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s1b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s2t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s2b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s3t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s3b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s4t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s4b}</p></section>
        </div>
      </main>
      <Footer />
    </>
  );
}





