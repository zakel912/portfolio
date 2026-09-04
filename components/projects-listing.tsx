"use client";

import { ProjectFilter } from "./project-filter";
import { projects } from "@/content/projects";
import { useLocale } from "./locale-provider";

export function ProjectsListing() {
  const { messages } = useLocale();
  const t = messages.projectsPage;
  return (
    <main id="main" className="container listing-page">
      <header className="page-intro">
        <p className="eyebrow"><span>{t.eyebrow}</span></p>
        <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
        <p>{t.intro}</p>
      </header>
      <ProjectFilter projects={projects} />
    </main>
  );
}
