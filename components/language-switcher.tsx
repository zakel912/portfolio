"use client";

import { useLocale } from "./locale-provider";

export function LanguageSwitcher() {
  const { locale, setLocale, messages } = useLocale();
  return (
    <div className="language-switcher" role="group" aria-label={messages.common.language}>
      <button type="button" className={locale === "fr" ? "active" : ""} onClick={() => setLocale("fr")} aria-pressed={locale === "fr"}>FR</button>
      <span>/</span>
      <button type="button" className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")} aria-pressed={locale === "en"}>EN</button>
    </div>
  );
}
