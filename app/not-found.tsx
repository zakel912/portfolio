"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export default function NotFound() {
  const { messages } = useLocale();
  const t = messages.notFound;
  return (
    <main id="main" className="container not-found">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1>{t.title}</h1>
      <p>{t.text}</p>
      <Link className="button button-primary" href="/projects">{t.action} <span aria-hidden>↗</span></Link>
    </main>
  );
}
