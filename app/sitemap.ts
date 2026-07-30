export const dynamic = "force-static";

import type { MetadataRoute } from "next";

const BASE_URL = "https://rjrenova.codewords.run";

const serviceSlugs = [
  "mur-rideau", "bardage", "habillage-facade", "menuiserie-aluminium",
  "verrieres", "pergolas", "garde-corps", "portes-aluminium", "fenetres-aluminium",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/entreprise`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/realisations`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/devis`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/politique-confidentialite`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/mentions-legales`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: new Date(),
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: new Date() })),
    ...servicePages,
  ];
}


