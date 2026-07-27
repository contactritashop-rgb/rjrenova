"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { type Locale, type TranslationKey, translations, locales, isRTL, localeLabels, localeFlags } from "./translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  dir: "ltr" | "rtl";
  localeLabel: string;
  localeFlag: string;
  locales: { code: Locale; label: string; flag: string }[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = "rjrenova-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && (stored === "fr" || stored === "en" || stored === "ar")) {
    return stored;
  }
  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "fr") return "fr";
  if (browserLang === "ar") return "ar";
  return "fr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = isRTL(newLocale) ? "rtl" : "ltr";
    if (isRTL(newLocale)) {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    if (isRTL(locale)) {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }
  }, [locale, mounted]);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] ?? translations.fr[key] ?? key;
    },
    [locale]
  );

  const localeList = locales.map((code) => ({
    code,
    label: localeLabels[code],
    flag: localeFlags[code],
  }));

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
        dir: isRTL(locale) ? "rtl" : "ltr",
        localeLabel: localeLabels[locale],
        localeFlag: localeFlags[locale],
        locales: localeList,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

