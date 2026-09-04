import type { Metadata } from "next";
import { ProjectsListing } from "@/components/projects-listing";

export const metadata: Metadata = { title: "Projets", description: "Études de cas d’ingénierie autour des plateformes data, du RAG, des pipelines cloud, du Machine Learning et des systèmes logiciels." };

export default function ProjectsPage() {
  return <ProjectsListing />;
}
