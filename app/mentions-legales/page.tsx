import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 section-padding">
        <div className="container-custom px-6 lg:px-12 max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="font-heading text-4xl font-extrabold text-dark dark:text-white mb-8">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">Éditeur du site</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">RJ RENOVA — Société de droit marocain<br />Siège social : Casablanca, Maroc<br />Email : contact@rjrenova.ma<br />Téléphone : +212 5XX-XXXXXX</p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">Hébergement</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">Propriété intellectuelle</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">L'ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive de RJ RENOVA. Toute reproduction est interdite sans autorisation préalable.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">Crédits</h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">Conception et développement : S. Hamouch<br />Photographies : Projets réalisés par nos équipes projets partout au Maroc.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}


