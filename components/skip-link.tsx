"use client";

import { useLocale } from "./locale-provider";

export function SkipLink() {
  const { locale } = useLocale();
  return <a className="skip-link" href="#main">{locale === "fr" ? "Aller au contenu" : "Skip to content"}</a>;
}
