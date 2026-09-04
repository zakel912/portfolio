"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { localizeProject } from "@/content/i18n/projects.fr";

export function ProjectCard({ project, index, compact = false }: { project: Project; index: number; compact?: boolean }) {
  const { locale, messages } = useLocale();
  const translated = localizeProject(project, locale);
  return (
    <article className={`project-card ${compact ? "project-card-compact" : ""}`}>
      <div className="project-card-top">
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-type">{translated.category}</span>
      </div>
      <div className="project-card-body">
        <p className="project-context">{translated.contextLabel}</p>
        <h3><Link href={`/projects/${project.slug}`}>{translated.title}</Link></h3>
        <p>{translated.description}</p>
      </div>
      <div className="project-card-footer">
        <ul className="tag-list" aria-label={messages.common.technologies}>
          {project.technologies.slice(0, compact ? 4 : 6).map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <Link className="icon-link" aria-label={`${messages.common.projects} : ${translated.title}`} href={`/projects/${project.slug}`}><ArrowIcon /></Link>
      </div>
    </article>
  );
}
