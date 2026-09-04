"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteTranslations, type Locale } from "@/content/i18n/site";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: (typeof siteTranslations)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    if (saved === "en" || saved === "fr") {
      const timer = window.setTimeout(() => setLocaleState(saved), 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale: setLocaleState, messages: siteTranslations[locale] }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
