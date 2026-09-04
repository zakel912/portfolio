"use client";

import Link from "next/link";
import { ArchitectureFlow } from "./architecture-flow";
import { ArrowIcon, GithubIcon } from "./icons";
import type { Project } from "@/content/projects";
import { localizeProject } from "@/content/i18n/projects.fr";
import { useLocale } from "./locale-provider";

export function ProjectCaseStudy({ project: baseProject, next: baseNext, currentIndex, total }: { project: Project; next: Project; currentIndex: number; total: number }) {
  const { locale, messages } = useLocale();
  const project = localizeProject(baseProject, locale);
  const next = localizeProject(baseNext, locale);
  const t = messages.caseStudy;
  const [provenanceBefore, provenanceAfter] = t.provenanceText.split("{source}");

  return (
    <main id="main">
      <article>
        <header className="case-hero container">
          <Link className="back-link" href="/projects">← {t.allProjects}</Link>
          <div className="case-kicker"><span>{String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span><span>{project.category}</span></div>
          <h1>{project.title}</h1>
          <p className="case-statement">{project.statement}</p>
          <div className="case-meta">
            <div><span>{t.context}</span><strong>{project.contextLabel}</strong></div>
            <div><span>{t.stack}</span><strong>{project.technologies.slice(0, 5).join(" · ")}</strong></div>
            {project.github && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><GithubIcon /> {messages.common.sourceCode} <ArrowIcon /></a>}
          </div>
        </header>

        <div className="case-body container">
          <aside className="case-nav" aria-label={t.onPage}>
            <span>{t.onPage}</span>
            <a href="#overview">{t.overviewNav}</a><a href="#architecture">{t.architectureNav}</a><a href="#decisions">{t.decisionsNav}</a><a href="#challenges">{t.challengesNav}</a><a href="#outcome">{t.outcomeNav}</a><a href="#limitations">{t.limitationsNav}</a>
          </aside>
          <div className="case-content">
            <section id="overview" className="case-section">
              <p className="case-section-index">01 / {t.overview}</p>
              <h2>{t.contextObjective}</h2>
              {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="problem-block"><span>{t.problem}</span><p>{project.problem}</p></div>
              <div className="role-block"><span>{t.myRole}</span><p>{project.role}</p></div>
            </section>

            <section id="architecture" className="case-section case-section-wide">
              <p className="case-section-index">02 / {t.architecture}</p>
              <h2>{t.systemMoves}</h2>
              <ArchitectureFlow label={project.flowLabel} steps={project.flow} />
              <p className="diagram-note">{t.diagramNote}</p>
            </section>

            <section id="decisions" className="case-section">
              <p className="case-section-index">03 / {t.decisions}</p>
              <h2>{t.choices}</h2>
              <div className="decision-list">
                {project.decisions.map((decision, index) => (
                  <article className="decision" key={decision.title}>
                    <div className="decision-title"><span>{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3></div>
                    <dl><div><dt>{t.requirement}</dt><dd>{decision.requirement}</dd></div><div><dt>{t.decision}</dt><dd>{decision.decision}</dd></div><div><dt>{t.tradeoff}</dt><dd>{decision.tradeoff}</dd></div></dl>
                  </article>
                ))}
              </div>
            </section>

            <section id="challenges" className="case-section">
              <p className="case-section-index">04 / {t.challenges}</p>
              <h2>{t.judgement}</h2>
              <div className="challenge-grid">
                {project.challenges.map((challenge) => <article key={challenge.title}><h3>{challenge.title}</h3><p>{challenge.detail}</p><span>{t.response}</span><p>{challenge.response}</p></article>)}
              </div>
            </section>

            <section id="outcome" className="case-section">
              <p className="case-section-index">05 / {t.outcome}</p>
              <h2>{t.established}</h2>
              {project.outcome.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            <section id="limitations" className="case-section limitations">
              <p className="case-section-index">06 / {t.limitations}</p>
              <h2>{t.stops}</h2>
              <ul>{project.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
            </section>

            <footer className="source-note"><span>{t.provenance}</span><p>{provenanceBefore}<code>{project.sourceMarkdown}</code>{provenanceAfter}</p></footer>
          </div>
        </div>
      </article>

      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span>{t.next}</span><strong>{next.shortTitle}</strong><ArrowIcon />
      </Link>
    </main>
  );
}
