export function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "RJ RENOVA",
    description:
      "Fabrication et installation de façades aluminium sur mesure au Maroc. Mur rideau, bardage, menuiserie aluminium, verrières, pergolas.",
    url: "https://rjrenova.codewords.run",
    telephone: "+212 5XX-XXXXXX",
    email: "contact@rjrenova.ma",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
    sameAs: ["https://wa.me/212XXXXXXXXX"],
    areaServed: [
      { "@type": "City", name: "Casablanca" },
      { "@type": "City", name: "Rabat" },
      { "@type": "City", name: "Marrakech" },
      { "@type": "City", name: "Tanger" },
      { "@type": "City", name: "Agadir" },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function FAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Quels types de projets réalisez-vous ?", acceptedAnswer: { "@type": "Answer", text: "Nous intervenons sur tous types de bâtiments : résidentiel, commercial, industriel, hôtelier et institutionnel. Chaque projet bénéficie de solutions sur mesure." } },
      { "@type": "Question", name: "Quel est le délai moyen pour un projet de façade ?", acceptedAnswer: { "@type": "Answer", text: "Le délai varie selon la complexité du projet. En moyenne, comptez 4 à 8 semaines entre la validation des plans et la fin de l'installation." } },
      { "@type": "Question", name: "Proposez-vous un service de maintenance ?", acceptedAnswer: { "@type": "Answer", text: "Oui, nous assurons le suivi et la maintenance de toutes nos installations pour garantir leur durabilité." } },
      { "@type": "Question", name: "Travaillez-vous dans tout le Maroc ?", acceptedAnswer: { "@type": "Answer", text: "Absolument. Nous intervenons dans les principales villes du Royaume : Casablanca, Rabat, Marrakech, Tanger, Agadir et bien d'autres." } },
      { "@type": "Question", name: "Comment obtenir un devis ?", acceptedAnswer: { "@type": "Answer", text: "Utilisez notre configurateur de devis en ligne ou contactez-nous directement. Nous vous répondons sous 48h." } },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function BreadcrumbSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://rjrenova.codewords.run" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://rjrenova.codewords.run/services" },
      { "@type": "ListItem", position: 3, name: "Devis", item: "https://rjrenova.codewords.run/devis" },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

