"use client";

import { useI18n } from "@/lib/i18n/i18n-provider";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Chatbot } from "@/components/chatbot/chatbot";

const serviceLinks = [
  { key: "services.curtain", slug: "mur-rideau" },
  { key: "services.cladding", slug: "bardage" },
  { key: "services.joinery", slug: "menuiserie-aluminium" },
  { key: "services.canopies", slug: "verrieres" },
  { key: "services.pergolas", slug: "pergolas" },
] as const;

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-dark text-white/80">
      <Chatbot />
      <div className="container-custom px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-5 bg-white/95 rounded-xl p-2 hover:bg-white transition-colors duration-200">
              <Logo variant="full" className="h-14 w-auto" />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={`/services/${link.slug}`}
                    className="text-white/60 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {t(link.key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/entreprise" className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
                  {t("nav.company")}
                </a>
              </li>
              <li>
                <a href="/realisations" className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="/devis" className="text-white/60 hover:text-accent transition-colors duration-300 text-sm">
                  {t("nav.quote")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-accent shrink-0" />
                {t("footer.address")}
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-accent shrink-0" />
                {t("footer.phone")}
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                {t("footer.email")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} RJ RENOVA. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="/politique-confidentialite" className="hover:text-accent transition-colors duration-300">
              {t("footer.privacy")}
            </a>
            <a href="/mentions-legales" className="hover:text-accent transition-colors duration-300">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



