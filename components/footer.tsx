"use client";

import { ArrowIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { profile } from "@/content/profile";
import { publicAsset } from "@/lib/paths";

export function Footer() {
  const { messages } = useLocale();
  const { common, footer } = messages;
  return (
    <footer className="site-footer" id="contact">
      <div className="container contact-header">
        <p className="eyebrow"><span>06</span> {footer.contactLabel}</p>
        <h2>{footer.contactTitle}</h2>
        <p className="footer-copy">{footer.copy}</p>
      </div>
      <div className="container contact-grid">
        <div className="contact-methods">
          <a href={`mailto:${profile.email}`}><span>{footer.email}</span><strong>{profile.email}</strong><ArrowIcon /></a>
          <a href={`tel:${profile.phoneHref}`}><span>{footer.phone}</span><strong>{profile.phoneDisplay}</strong><ArrowIcon /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><span>{common.github}</span><strong>github.com/zakel912</strong><ArrowIcon /></a>
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>{common.linkedin}</span><strong>LinkedIn</strong><ArrowIcon /></a> : <div className="contact-disabled" aria-disabled="true"><span>{common.linkedin}</span><strong>{common.unavailable}</strong></div>}
        </div>
        <div className="resume-area">
          <h3>{footer.resumes}</h3>
          <p>{footer.resumeIntro}</p>
          <div className="resume-list">
            {profile.resumes.map((resume) => resume.available ? (
              <a className="button button-secondary" href={publicAsset(resume.file)} download key={resume.id}>{footer.resumeLabels[resume.id]} <ArrowIcon /></a>
            ) : (
              <span className="button button-disabled" aria-disabled="true" key={resume.id}>{footer.resumeLabels[resume.id]} · {common.unavailable}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} Zakaria El Mrani</span>
      </div>
    </footer>
  );
}
