import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = { title: "À propos", description: "Zakaria El Mrani, élève-ingénieur à l’ENSIIE : informatique, mathématiques appliquées, Data Engineering et AI Engineering." };

export default function AboutPage() {
  return <AboutContent />;
}
