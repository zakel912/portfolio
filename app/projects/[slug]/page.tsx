import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { getProject, projects } from "@/content/projects";
import { localizeProject } from "@/content/i18n/projects.fr";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const frenchProject = localizeProject(project, "fr");
  return { title: frenchProject.title, description: frenchProject.description, openGraph: { title: `${frenchProject.title} | Zakaria El Mrani`, description: frenchProject.description, type: "article" } };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return <ProjectCaseStudy project={project} next={next} currentIndex={currentIndex} total={projects.length} />;
}
