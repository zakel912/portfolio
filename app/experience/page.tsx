import type { Metadata } from "next";
import { ExperienceContent } from "@/components/experience-content";

export const metadata: Metadata = { title: "Expériences", description: "Stages en AI Engineering chez CID et IDEMIA : workflows documentaires, agents, appels d’outils et intégration backend." };

export default function ExperiencePage() {
  return <ExperienceContent />;
}
