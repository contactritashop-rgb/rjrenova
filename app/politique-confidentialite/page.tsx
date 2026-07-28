import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const content = {
  fr: {
    title: "Politique de Confidentialité", update: "Dernière mise à jour : Juillet 2026",
    s1t: "1. Collecte des données", s1b: "RJ RENOVA collecte les données personnelles que vous fournissez volontairement via nos formulaires : nom, email, téléphone, et informations projet.",
    s2t: "2. Utilisation", s2b: "Vos données servent exclusivement à traiter vos demandes et établir des devis. Jamais vendues ni cédées.",
    s3t: "3. Conservation", s3b: "Données conservées pendant la durée de la relation commerciale, maximum 5 ans après le dernier contact.",
    s4t: "4. Vos droits", s4b: "Conformément à la loi 09-08, vous avez un droit d'accès, rectification et suppression. Contact : contact@rjrenova.ma",
    s5t: "5. Cookies", s5b: "Notre site utilise des cookies techniques nécessaires. Aucun cookie publicitaire sans consentement.",
  },
};

export default function PrivacyPage() {
  const t = content.fr;
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 section-padding">
        <div className="container-custom px-6 lg:px-12 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-extrabold text-dark dark:text-white mb-4">{t.title}</h1>
          <p className="text-muted mb-10">{t.update}</p>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s1t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s1b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s2t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s2b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s3t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s3b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s4t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s4b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s5t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s5b}</p></section>
        </div>
      </main>
      <Footer />
    </>
  );
}

