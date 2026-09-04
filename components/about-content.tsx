"use client";

import Link from "next/link";
import { ArrowIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { ProfilePhoto } from "./profile-photo";

const skillItems = [
  ["Python", "SQL", "Airflow", "dbt", "Kafka", "FastAPI", "ETL / ELT"],
  ["AWS", "EC2", "S3", "Glue", "Athena", "Spark", "Hadoop", "Hive"],
  ["RAG", "LangChain", "LangGraph", "OpenAI", "Vector search", "LLM workflows"],
  ["PostgreSQL", "MongoDB", "Supabase", "Pinecone", "OpenSearch"],
  ["pandas", "NumPy", "scikit-learn", "XGBoost", "R", "Statistics"],
  ["Docker", "Git", "Linux", "REST APIs", "C++", "JavaScript", "PHP"]
];

export function AboutContent() {
  const { messages } = useLocale();
  const t = messages.aboutPage;
  return (
    <main id="main">
      <section className="container about-hero">
        <p className="eyebrow"><span>{t.eyebrow}</span></p>
        <div className="about-hero-grid">
          <h1>{t.title}</h1>
          <div className="about-profile-copy"><ProfilePhoto /><p>{t.intro1}</p><p>{t.intro2}</p></div>
        </div>
      </section>

      <section className="about-education">
        <div className="container">
          <div className="education-header"><p className="eyebrow"><span>01</span> {t.education}</p><span>2023—2026</span></div>
          <div className="degree-grid">
            <div><p className="degree-school">ENSIIE</p><h2>{t.degree.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2><p className="degree-specialisation">{t.specialization}</p></div>
            <div className="curriculum-groups">
              {t.curriculum.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section container story-section">
        <p className="eyebrow"><span>02</span> {t.connect}</p>
        <div className="story-grid">
          <h2>{t.storyTitle.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h2>
          <div>{t.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <div className="skills-heading"><div><p className="eyebrow"><span>03</span> {t.toolkit}</p><h2>{t.toolkitTitle}</h2></div><p>{t.toolkitNote}</p></div>
          <div className="skills-grid">{t.skillLabels.map((label, index) => <article key={label}><h3>{label}</h3><ul>{skillItems[index].map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
          <div className="about-cta"><p>{t.cta}</p><Link className="button button-primary" href="/projects">{t.caseStudies} <ArrowIcon /></Link></div>
        </div>
      </section>

      <section className="personal-section">
        <div className="container personal-grid">
          <article className="languages-panel">
            <p className="eyebrow"><span>04 / A</span></p>
            <h2>{t.languagesTitle}</h2>
            <dl>
              {t.languages.map((language) => (
                <div key={language.name}>
                  <dt>{language.name}</dt>
                  <dd>{language.level}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="interests-panel">
            <p className="eyebrow"><span>04 / B</span></p>
            <h2>{t.outsideCode}</h2>
            <div className="interest-list">
              {t.interests.map((interest) => (
                <div className="interest-item" key={interest.title}>
                  <h3>{interest.title}</h3>
                  <p>{interest.text}</p>
                </div>
              ))}
            </div>
            <div className="interest-tags" aria-label={t.otherInterests}>
              <span>{t.otherInterests}</span>
              {t.interestTags.map((interest) => <small key={interest}>{interest}</small>)}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
