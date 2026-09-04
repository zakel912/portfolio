"use client";

import Link from "next/link";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { ArrowIcon, GithubIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { useLocale } from "@/components/locale-provider";
import { localizeExperience } from "@/content/i18n/experiences.fr";
import { ProfilePhoto } from "@/components/profile-photo";
import { profile } from "@/content/profile";

export default function HomePage() {
  const { locale, messages } = useLocale();
  const t = messages.home;
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured).slice(0, 4);

  return (
    <main id="main">
      <section className="hero container">
        <div className="hero-status"><span className="status-dot" /> {t.status}</div>
        <div className="hero-grid">
          <div>
            <p className="hero-name">Zakaria El Mrani</p>
            <h1>{t.titleA} <span>{t.titleB}</span></h1>
          </div>
          <div className="hero-side">
            <ProfilePhoto />
            <p className="hero-role">{t.role.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</p>
            <p>{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">{t.contactCta} <ArrowIcon /></a>
              <Link className="button button-secondary" href="/projects">{t.explore} <ArrowIcon /></Link>
              <a className="button button-secondary button-icon" aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /></a>
            </div>
          </div>
        </div>
        <div className="hero-system" aria-label="Engineering">
          {t.system.map((item, index) => <span className="hero-system-item" key={item}><span>{item}</span>{index < t.system.length - 1 && <i>→</i>}</span>)}
        </div>
      </section>

      <section className="section container" id="selected-work">
        <SectionHeading index="01" label={t.selectedLabel} title={t.selectedTitle} action={<Link className="text-link" href="/projects">{t.viewAll} <ArrowIcon /></Link>} />
        <div className="featured-grid">
          {featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
      </section>

      <section className="section axes-section">
        <div className="container">
          <SectionHeading index="02" label={t.focusLabel} title={t.focusTitle} />
          <div className="axes-grid">
            <article className="axis-panel">
              <div className="axis-title"><span>01 / DATA</span><h3>{t.dataTitle}</h3></div>
              <p>{t.dataText}</p>
              <ul>{t.dataItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="axis-panel axis-panel-ai">
              <div className="axis-title"><span>02 / AI</span><h3>{t.aiTitle}</h3></div>
              <p>{t.aiText}</p>
              <ul>{t.aiItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <ArchitectureFlow label={t.thread} steps={[...t.threadSteps]} />
        </div>
      </section>

      <section className="section container">
        <SectionHeading index="03" label={t.experienceLabel} title={t.experienceTitle} action={<Link className="text-link" href="/experience">{t.fullExperience} <ArrowIcon /></Link>} />
        <div className="experience-list">
          {experiences.map((item) => {
            const experience = localizeExperience(item, locale);
            return (
            <article className="experience-row" key={experience.company}>
              <div><span className="experience-year">{experience.year}</span><h3>{experience.company}</h3></div>
              <div><p className="experience-role">{experience.role}</p><p>{experience.summary}</p></div>
              <ul className="tag-list">{experience.technologies.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul>
            </article>
          );})}
        </div>
      </section>

      <section className="section container">
        <SectionHeading index="04" label={t.moreLabel} title={t.moreTitle} />
        <div className="additional-grid">
          {additional.map((project, index) => <ProjectCard compact key={project.slug} project={project} index={index + featured.length} />)}
        </div>
        <div className="center-action"><Link className="button button-secondary" href="/projects">{t.allTen} <ArrowIcon /></Link></div>
      </section>

      <section className="education-band">
        <div className="container education-grid">
          <div><p className="eyebrow"><span>05</span> {t.education}</p><h2>{t.educationTitle}</h2></div>
          <div className="education-card">
            <div><span>2023—2026</span><span>Évry-Courcouronnes, France</span></div>
            <h3>ENSIIE</h3>
            <p className="education-degree">{t.degree}<br /><strong>{t.specialization}</strong></p>
            <p>{t.educationText}</p>
            <Link className="text-link" href="/about">{t.background} <ArrowIcon /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
