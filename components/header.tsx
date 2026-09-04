"use client";

import Link from "next/link";
import { ArrowIcon, MenuMark } from "./icons";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "./locale-provider";
import { profile } from "@/content/profile";

export function Header() {
  const { messages } = useLocale();
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Zakaria El Mrani, home">
          <MenuMark />
          <span>Zakaria El Mrani</span>
        </Link>
        <nav aria-label="Navigation principale">
          <Link href="/projects">{messages.common.projects}</Link>
          <Link href="/experience">{messages.common.experience}</Link>
          <Link href="/about">{messages.common.about}</Link>
          <Link className="nav-contact" href="/#contact">{messages.common.contact}</Link>
          <a className="nav-external" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
