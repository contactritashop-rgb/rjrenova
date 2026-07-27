import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 section-padding">
        <div className="container-custom px-6 lg:px-12 max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="font-heading text-4xl font-extrabold text-dark dark:text-white mb-8">Politique de Confidentialité</h1>
          <p className="text-muted mb-8">Dernière mise à jour : Juillet 2026</p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">1. Collecte des données</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">RJ RENOVA collecte les données personnelles que vous nous fournissez volontairement via nos formulaires de contact et de devis : nom, email, téléphone, et informations relatives à votre projet.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">2. Utilisation des données</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">Vos données sont utilisées exclusivement pour traiter vos demandes, établir des devis, et assurer le suivi de nos prestations. Elles ne sont jamais vendues ni cédées à des tiers.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">3. Conservation</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">Vos données sont conservées pendant la durée nécessaire à la relation commerciale, et au maximum 5 ans après le dernier contact.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">4. Vos droits</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à contact@rjrenova.ma pour exercer ces droits.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">5. Cookies</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">Notre site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire n'est déposé sans votre consentement.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

