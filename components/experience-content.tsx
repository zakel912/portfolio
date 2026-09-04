"use client";

import { ArchitectureFlow } from "./architecture-flow";
import { experiences } from "@/content/experience";
import { localizeExperience } from "@/content/i18n/experiences.fr";
import { useLocale } from "./locale-provider";

export function ExperienceContent() {
  const { locale, messages } = useLocale();
  const t = messages.experiencePage;
  return (
    <main id="main" className="container experience-page">
      <header className="page-intro">
        <p className="eyebrow"><span>{t.eyebrow}</span></p>
        <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
        <p>{t.intro}</p>
      </header>
      <div className="experience-timeline">
        {experiences.map((baseExperience, index) => {
          const experience = localizeExperience(baseExperience, locale);
          return (
            <article className="experience-detail" key={experience.company}>
              <div className="timeline-rail"><span>{experience.year}</span><i /></div>
              <div>
                <p className="eyebrow">0{index + 1} / {t.itemLabel}</p>
                <h2>{experience.company}</h2>
                <p className="experience-detail-role">{experience.role}</p>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="experience-focus">{experience.focus.map((item) => <li key={item}>{item}</li>)}</ul>
                <ul className="tag-list">{experience.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <ArchitectureFlow label={t.publicView} steps={experience.flow} />
                <p className="confidentiality-note">{t.confidentiality}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
