"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import type { Project, ProjectGroup } from "@/content/projects";
import { useLocale } from "./locale-provider";

const filters: ("All" | ProjectGroup)[] = ["All", "Data Engineering", "AI Engineering", "Machine Learning", "Software Engineering"];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const { messages } = useLocale();
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.group === active);
  const labels = [messages.projectsPage.filters.all, messages.projectsPage.filters.data, messages.projectsPage.filters.ai, messages.projectsPage.filters.ml, messages.projectsPage.filters.software];

  return (
    <>
      <div className="filters" aria-label={messages.common.projects}>
        {filters.map((filter, index) => <button className={filter === active ? "active" : ""} key={filter} onClick={() => setActive(filter)} type="button">{labels[index]}</button>)}
      </div>
      <p className="result-count" aria-live="polite">{String(visible.length).padStart(2, "0")} {messages.projectsPage.count}</p>
      <div className="projects-grid">
        {visible.map((project) => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />)}
      </div>
    </>
  );
}
