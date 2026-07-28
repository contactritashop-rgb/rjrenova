import { Header } from "@/components/layout/header";

const SimpleFooter = () => (
  <footer className="bg-dark text-white/50 py-8 text-center text-sm">© 2026 RJ RENOVA - Tous droits réservés.</footer>
);

const content = {
  fr: {
    title: "Mentions Légales",
    s1t: "Éditeur du site", s1b: "RJ RENOVA - Société de droit marocain - Siège social : Agadir, Maroc - Email : contact@rjrenova.ma - Téléphone : (+212) 0660 006 757",
    s2t: "Hébergement", s2b: "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
    s3t: "Propriété intellectuelle", s3b: "L'ensemble du contenu de ce site est la propriété exclusive de RJ RENOVA. Toute reproduction est interdite sans autorisation préalable.",
    s4t: "Crédits", s4b: "Conception et développement : HAMOUCH - Photographies : Projets réalisés par nos équipes projets partout au Maroc.",
  },
  en: {
    title: "Legal Notice",
    s1t: "Site Publisher", s1b: "RJ RENOVA - Moroccan company - Head office: Agadir, Morocco - Email: contact@rjrenova.ma - Phone: (+212) 0660 006 757",
    s2t: "Hosting", s2b: "This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
    s3t: "Intellectual Property", s3b: "All content is the exclusive property of RJ RENOVA. Reproduction prohibited without authorization.",
    s4t: "Credits", s4b: "Design & development: HAMOUCH - Photography: Projects carried out by our teams across Morocco.",
  },
  ar: {
    title: "إشعار قانوني",
    s1t: "ناشر الموقع", s1b: "RJ RENOVA - شركة مغربية - أكادير، المغرب - contact@rjrenova.ma - (+212) 0660 006 757",
    s2t: "الاستضافة", s2b: "مستضاف من قبل Vercel Inc., USA.",
    s3t: "الملكية الفكرية", s3b: "جميع المحتويات ملكية حصرية لـ RJ RENOVA. الاستنساخ ممنوع بدون إذن.",
    s4t: "اعتمادات", s4b: "التصميم : HAMOUCH - الصور : مشاريع فرقنا عبر المغرب.",
  },
  tzm: {
    title: "ⵜⵉⵡⴰⵍⵉⵏ ⵜⵉⵣⵔⴼⴰⵏⵉⵏ",
    s1t: "ⴰⵏⵙⵙⵉⵖⴼ", s1b: "RJ RENOVA - ⴰⴳⴰⴷⵉⵔ - contact@rjrenova.ma - (+212) 0660 006 757",
    s2t: "ⴰⵙⵏⵙⵙⵉ", s2b: "Vercel Inc., USA.",
    s3t: "ⴰⵢⵍⴰ ⴰⴷⵍⵙⴰⵏ", s3b: "ⵎⴰⵕⵕⴰ ⴷ ⴰⵢⵍⴰ ⵏ RJ RENOVA.",
    s4t: "ⵉⵙⵎⴰⵡⵏ", s4b: "HAMOUCH - ⵜⵉⵡⵍⴰⴼⵉⵏ ⵙⴳ ⵉⵙⵏⴼⴰⵔⵏ ⵏⵏⵖ.",
  },
};

export default function LegalPage() {
  const t = content.fr;
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


