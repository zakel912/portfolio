import type { Experience } from "@/content/experience";

const frenchExperiences: Record<string, Pick<Experience, "role" | "summary" | "focus" | "flow">> = {
  CID: {
    role: "Stagiaire en Intelligence Artificielle",
    summary: "Conception d’un workflow autonome multi-étapes capable d’extraire, structurer et analyser de longs appels d’offres, puis de générer une première proposition organisée destinée à être relue par des experts.",
    focus: [
      "Décomposition d’un document complexe en étapes spécialisées d’extraction, d’analyse des contraintes et de génération, plutôt qu’en un prompt unique.",
      "Orchestration de branches, chemins conditionnels et état partagé avec LangGraph ; utilisation de sorties JSON structurées entre les étapes.",
      "Conservation du parsing, du nettoyage et de la reconstruction des tableaux dans du Python déterministe lorsqu’un LLM n’apportait pas de valeur.",
      "Évaluation qualitative face au seul couple appel d’offres/réponse disponible et documentation du besoin d’un corpus interne plus large pour ancrer la génération métier."
    ],
    flow: ["Appel d’offres PDF", "OCR & structure", "État LangGraph", "Étapes LLM spécialisées", "Proposition initiale"]
  },
  IDEMIA: {
    role: "Stagiaire en Intelligence Artificielle",
    summary: "Développement d’un agent exploratoire traduisant des demandes en langage naturel en outils de base de données, avec maintien du contexte sur des opérations de compte en plusieurs étapes.",
    focus: [
      "Étude des LLM, embeddings, agents, appels d’outils et mécanismes de mémoire conversationnelle avant la conception du POC.",
      "Définition d’outils autour des opérations CRUD et connexion de l’agent à MongoDB via un backend Flask.",
      "Test de formulations variées pour une même intention, puis vérification de la sélection de l’outil et de l’état obtenu en base.",
      "Identification des confirmations déterministes, contrôles d’accès et protections contre les injections nécessaires avant d’autoriser un agent à modifier des données réelles."
    ],
    flow: ["Intention utilisateur", "Agent", "Choix de l’outil", "Action MongoDB", "Réponse"]
  }
};

export function localizeExperience(experience: Experience, locale: "fr" | "en"): Experience {
  return locale === "fr" ? { ...experience, ...frenchExperiences[experience.company] } : experience;
}
