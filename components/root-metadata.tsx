import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RJ RENOVA - Façades Aluminium | Fabrication & Installation - Maroc",
    template: "%s | RJ RENOVA",
  },
  description:
    "RJ RENOVA, expert en conception, fabrication et installation de façades aluminium sur mesure au Maroc : mur rideau, bardage, menuiserie aluminium, verrières, pergolas. Devis gratuit.",
  keywords: [
    "façade aluminium",
    "mur rideau",
    "bardage aluminium",
    "menuiserie aluminium",
    "verrière",
    "pergola",
    "garde-corps",
    "RJ RENOVA",
    "Maroc",
    "Casablanca",
    "Rabat",
    "Marrakech",
  ],
  authors: [{ name: "RJ RENOVA" }],
  creator: "RJ RENOVA",
  publisher: "RJ RENOVA",
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  icons: {
    icon: "/codewords-asterisk.svg",
  },
  openGraph: {
    title: "RJ RENOVA - Façades Aluminium au Maroc",
    description:
      "Fabrication et installation de façades aluminium sur mesure. Qualité premium, innovation et excellence architecturale.",
    type: "website",
    locale: "fr_FR",
    siteName: "RJ RENOVA",
    countryName: "Morocco",
    alternateLocale: ["en_US", "ar_MA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ RENOVA - Façades Aluminium au Maroc",
    description:
      "Fabrication et installation de façades aluminium sur mesure. Qualité premium, innovation et excellence architecturale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



