export type Locale = "fr" | "en";

export const siteTranslations = {
  fr: {
    common: {
      language: "Langue",
      french: "Français",
      english: "English",
      projects: "Projets",
      experience: "Expériences",
      about: "À propos",
      contact: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      unavailable: "À ajouter",
      sourceCode: "Code source",
      technologies: "Technologies",
      download: "Télécharger",
      resumeSoon: "CV bientôt disponible",
      availabilityLabel: "Disponibilité professionnelle",
      availability: "Disponible dès maintenant — Recherche stage de fin d'études de 6 mois en Data Engineering, AI Engineering ou Conseil Data / IA"
    },
    home: {
      status: "Ouvert aux opportunités de fin d’études",
      titleA: "Construire des plateformes data",
      titleB: "& des systèmes IA.",
      role: "Ingénieur Data & IA\nÉlève-ingénieur à l’ENSIIE",
      intro: "Je conçois les systèmes autour des données et des modèles — de l’ingestion, du stockage et de l’orchestration aux pipelines RAG, APIs et produits destinés aux utilisateurs.",
      contactCta: "Me contacter",
      resumeCta: "Télécharger mon CV",
      explore: "Découvrir mes projets",
      system: ["Sources", "Pipelines", "Modèles", "APIs", "Produits"],
      selectedLabel: "Projets sélectionnés",
      selectedTitle: "Des systèmes, de bout en bout.",
      viewAll: "Voir tous les projets",
      focusLabel: "Axes d’ingénierie",
      focusTitle: "Deux disciplines connectées.",
      dataTitle: "Data Engineering",
      dataText: "Des chemins fiables entre les systèmes sources et des données modélisées, testées, interrogées puis exposées.",
      dataItems: ["Pipelines incrémentaux & batch", "Fondations streaming", "Modélisation & qualité", "Orchestration & stockage cloud"],
      aiTitle: "AI Engineering",
      aiText: "Des applications autour des modèles de langage : traitement documentaire, retrieval, outils contrôlés et intégration API.",
      aiItems: ["RAG & recherche vectorielle", "Workflows LLM & agents", "Sorties structurées", "APIs adossées à l’IA"],
      thread: "Fil conducteur commun",
      threadSteps: ["Ingérer", "Structurer", "Raisonner", "Exposer", "Évaluer"],
      experienceLabel: "Expériences",
      experienceTitle: "L’IA appliquée en contexte professionnel.",
      fullExperience: "Voir les expériences",
      moreLabel: "Autres projets",
      moreTitle: "Machine Learning appliqué & bases logicielles.",
      allTen: "Voir les dix projets",
      education: "Formation",
      educationTitle: "L’informatique, ancrée dans les mathématiques.",
      degree: "Diplôme d’ingénieur en informatique",
      specialization: "Spécialisation : Mathématiques appliquées",
      educationText: "Probabilités, statistiques, machine learning, optimisation, bases de données, Big Data, algorithmique et systèmes logiciels.",
      background: "Découvrir mon parcours"
    },
    projectsPage: {
      eyebrow: "Projets / 10 systèmes",
      titleA: "L’ingénierie à travers",
      titleB: "des systèmes complets.",
      intro: "Les projets sont classés selon leur profondeur technique, et non uniquement par date. Chaque étude distingue ce qui a été construit, son fonctionnement, ma contribution et ses limites.",
      filters: { all: "Tous", data: "Data Engineering", ai: "AI Engineering", ml: "Machine Learning", software: "Software Engineering" },
      count: "projets"
    },
    caseStudy: {
      allProjects: "Tous les projets",
      context: "Contexte",
      stack: "Stack principale",
      onPage: "Sur cette page",
      overviewNav: "Vue d’ensemble",
      architectureNav: "Architecture",
      decisionsNav: "Décisions",
      challengesNav: "Difficultés",
      outcomeNav: "Résultat",
      limitationsNav: "Limites",
      overview: "Vue d’ensemble",
      contextObjective: "Contexte & objectif",
      problem: "Le problème technique",
      myRole: "Mon rôle",
      architecture: "Architecture",
      systemMoves: "Le parcours du système.",
      diagramNote: "Vue volontairement simplifiée du flux implémenté. Elle représente les responsabilités, pas l’échelle de déploiement.",
      decisions: "Décisions d’ingénierie",
      choices: "Besoins, choix et compromis.",
      requirement: "Besoin",
      decision: "Décision",
      tradeoff: "Compromis",
      challenges: "Difficultés",
      judgement: "Ce qui a demandé du discernement.",
      response: "Réponse",
      outcome: "Résultat",
      established: "Ce que le projet a établi.",
      limitations: "Limites",
      stops: "Là où le projet s’arrête.",
      provenance: "Provenance du contenu",
      provenanceText: "Étude de cas synthétisée depuis {source}. Les dates, métriques, liens et détails d’implémentation non étayés sont volontairement omis.",
      next: "Étude de cas suivante"
    },
    experiencePage: {
      eyebrow: "Expériences / Systèmes IA",
      titleA: "Des prototypes construits autour",
      titleB: "de contraintes réelles.",
      intro: "Deux stages explorant la façon dont les modèles de langage peuvent assister le traitement documentaire et traduire avec prudence une intention en action système.",
      itemLabel: "Expérience professionnelle",
      publicView: "Vue publique au niveau système",
      confidentiality: "Les détails restent volontairement au niveau système. Aucune donnée interne, aucun document, endpoint ou élément d’architecture d’entreprise n’est divulgué."
    },
    aboutPage: {
      eyebrow: "À propos / Parcours",
      title: "Entre les modèles mathématiques et les systèmes qui les rendent utiles.",
      intro1: "Je suis Zakaria El Mrani, élève-ingénieur en troisième année à l’ENSIIE, spécialisé en Mathématiques appliquées.",
      intro2: "Mon travail se situe entre Data Engineering et AI Engineering parce que je m’intéresse au système complet : l’origine des données, leur structuration et transformation, leur utilisation par un modèle et la façon dont le résultat atteint une application.",
      education: "Formation",
      degree: "Diplôme d’ingénieur\nen informatique",
      specialization: "Spécialisation Mathématiques appliquées",
      curriculum: [
        { title: "Mathématiques appliquées & ML", text: "Probabilités, statistiques, régression, processus stochastiques, séries temporelles, simulation, apprentissage prédictif et non supervisé." },
        { title: "Optimisation & Algorithmique", text: "Recherche opérationnelle, optimisation de réseaux, méthodes polyédriques, graphes et complexité algorithmique." },
        { title: "Data & Systèmes", text: "Bases relationnelles, réseaux de données, systèmes d’exploitation, architectures Big Data et IA distribuée." },
        { title: "Software Engineering", text: "Programmation impérative, fonctionnelle, logique et orientée objet, programmation avancée, web et projets en équipe." }
      ],
      connect: "Comment les éléments se relient",
      storyTitle: "Les modèles répondent aux questions.\nLes systèmes rendent les réponses utilisables.",
      story: [
        "Les mathématiques appliquées m’ont donné des outils pour raisonner sur l’incertitude, l’optimisation et le comportement des modèles. Le génie logiciel me permet de traduire ce raisonnement en composants maintenables.",
        "Mes projets récents relient ces deux dimensions : une pipeline blockchain avec des couches analytiques traçables, une application RAG fondée sur des documents, des flux data cloud et des workflows agentiques aux limites explicites.",
        "Je souhaite poursuivre sur des problématiques de Data Engineering, AI Engineering, ML Engineering ou Cloud Data où architecture et implémentation doivent fonctionner ensemble."
      ],
      toolkit: "Outils mis en pratique",
      toolkitTitle: "Utilisés dans les projets.",
      toolkitNote: "Regroupés par contexte — sans scores de compétence arbitraires.",
      skillLabels: ["Data engineering", "Cloud & big data", "AI engineering", "Données & stockage", "Machine learning", "Systèmes logiciels"],
      cta: "Voir comment ces outils interagissent dans des architectures complètes.",
      caseStudies: "Découvrir les études de cas"
    },
    footer: {
      kicker: "Construisons des systèmes utiles.",
      copy: "Ouvert aux opportunités de fin d’études en Data Engineering, AI Engineering et ML Engineering.",
      contactLabel: "Contact",
      contactTitle: "Échangeons.",
      email: "Email",
      phone: "Téléphone",
      resumes: "Curriculum vitæ",
      resumeIntro: "Les emplacements sont prêts. Les boutons s’activeront dès que les PDF seront ajoutés.",
      resumeLabels: { general: "CV général", "data-engineering": "CV Data Engineering", "data-ai": "CV Data Science / IA" }
    },
    notFound: {
      eyebrow: "404 / Page introuvable",
      title: "Cette route sort du système.",
      text: "La page a peut-être été déplacée ou le projet n’existe pas.",
      action: "Parcourir les projets"
    }
  },
  en: {
    common: {
      language: "Language", french: "Français", english: "English", projects: "Projects", experience: "Experience", about: "About", contact: "Contact", github: "GitHub", linkedin: "LinkedIn", unavailable: "Add link", sourceCode: "Source code", technologies: "Technologies", download: "Download", resumeSoon: "Resume coming soon", availabilityLabel: "Professional availability", availability: "Available now — Seeking a 6-month final-year internship in Data Engineering, AI Engineering or Data/AI Consulting"
    },
    home: {
      status: "Open to graduate opportunities", titleA: "Building data platforms", titleB: "& AI systems.", role: "Data & AI Engineer\nEngineering student at ENSIIE", intro: "I design the systems around data and models—from ingestion, storage and orchestration to RAG pipelines, APIs and user-facing products.", contactCta: "Contact me", resumeCta: "Download my resume", explore: "Explore my work", system: ["Sources", "Pipelines", "Models", "APIs", "Products"], selectedLabel: "Selected work", selectedTitle: "Systems, end to end.", viewAll: "View all projects", focusLabel: "Engineering focus", focusTitle: "Two connected disciplines.", dataTitle: "Data Engineering", dataText: "Reliable paths from source systems to data that can be modelled, tested, queried and served.", dataItems: ["Incremental & batch pipelines", "Streaming foundations", "Data modelling & quality", "Orchestration & cloud storage"], aiTitle: "AI Engineering", aiText: "Applications around language models: document processing, retrieval, controlled tool use and API integration.", aiItems: ["RAG & vector search", "LLM workflows & agents", "Structured outputs", "AI-backed APIs"], thread: "Shared engineering thread", threadSteps: ["Ingest", "Structure", "Reason", "Serve", "Evaluate"], experienceLabel: "Experience", experienceTitle: "Applied AI in professional settings.", fullExperience: "Full experience", moreLabel: "More work", moreTitle: "Applied ML & software foundations.", allTen: "See all ten projects", education: "Education", educationTitle: "Computer science, grounded in mathematics.", degree: "Engineering Degree in Computer Science", specialization: "Specialisation: Applied Mathematics", educationText: "Probability, statistics, machine learning, optimisation, databases, Big Data, algorithms and software systems.", background: "About my background"
    },
    projectsPage: { eyebrow: "Work / 10 systems", titleA: "Engineering through", titleB: "complete systems.", intro: "Projects are ordered by engineering depth, not chronology. Each case study separates what was built, how it works, what I owned and where the limits are.", filters: { all: "All", data: "Data Engineering", ai: "AI Engineering", ml: "Machine Learning", software: "Software Engineering" }, count: "projects" },
    caseStudy: { allProjects: "All projects", context: "Context", stack: "Core stack", onPage: "On this page", overviewNav: "Overview", architectureNav: "Architecture", decisionsNav: "Decisions", challengesNav: "Challenges", outcomeNav: "Outcome", limitationsNav: "Limitations", overview: "Overview", contextObjective: "Context & objective", problem: "The technical problem", myRole: "My role", architecture: "Architecture", systemMoves: "How the system moves.", diagramNote: "A deliberately simplified view of the implemented path. It shows responsibilities, not deployment scale.", decisions: "Engineering decisions", choices: "Requirements, choices, trade-offs.", requirement: "Requirement", decision: "Decision", tradeoff: "Trade-off", challenges: "Challenges", judgement: "What required judgement.", response: "Response", outcome: "Outcome", established: "What the project established.", limitations: "Limitations", stops: "Where the work stops.", provenance: "Content provenance", provenanceText: "Case study distilled from {source}. Unsupported dates, metrics, links and implementation details are intentionally omitted.", next: "Next case study" },
    experiencePage: { eyebrow: "Experience / AI systems", titleA: "Prototypes built around", titleB: "real constraints.", intro: "Two internships exploring how language models can support document-heavy work and safely translate intent into system actions.", itemLabel: "Professional experience", publicView: "Public, system-level view", confidentiality: "Details are intentionally kept at a system level. No internal data, documents, endpoints or company architecture are disclosed." },
    aboutPage: {
      eyebrow: "About / Background", title: "Between mathematical models and the systems that make them useful.", intro1: "I’m Zakaria El Mrani, a third-year engineering student at ENSIIE specialising in Applied Mathematics.", intro2: "My work sits across Data Engineering and AI Engineering because I’m interested in the whole system: where data comes from, how it is structured and transformed, how a model uses it, and how the result reaches an application.", education: "Education", degree: "Engineering Degree\nin Computer Science", specialization: "Applied Mathematics specialisation",
      curriculum: [
        { title: "Applied Mathematics & ML", text: "Probability, statistics, regression, stochastic processes, time series, simulation, predictive and unsupervised learning." },
        { title: "Optimisation & Algorithms", text: "Operations research, network optimisation, polyhedral methods, graphs and algorithmic complexity." },
        { title: "Data & Systems", text: "Relational databases, data networks, operating systems, Big Data architectures and distributed AI." },
        { title: "Software Engineering", text: "Imperative, functional, logic and object-oriented programming, advanced programming, web development and team projects." }
      ],
      connect: "How the pieces connect", storyTitle: "Models answer questions.\nSystems make the answers usable.", story: ["Applied mathematics gave me tools to reason about uncertainty, optimisation and model behaviour. Software engineering gave me the means to turn that reasoning into maintainable components.", "My recent projects connect both sides: a ledger pipeline with traceable analytical layers, a document-grounded RAG application, cloud data movement, and agent workflows with explicit limitations.", "I’m looking to continue on Data Engineering, AI Engineering, ML Engineering or Cloud Data problems where architecture and implementation have to work together."], toolkit: "Working toolkit", toolkitTitle: "Used across the work.", toolkitNote: "Grouped by context—not ranked with arbitrary proficiency scores.", skillLabels: ["Data engineering", "Cloud & big data", "AI engineering", "Data & storage", "Machine learning", "Software systems"], cta: "See how these tools interact inside complete project architectures.", caseStudies: "Explore case studies"
    },
    footer: { kicker: "Let’s build useful systems.", copy: "Open to graduate opportunities across Data Engineering, AI Engineering and ML Engineering.", contactLabel: "Contact", contactTitle: "Let’s talk.", email: "Email", phone: "Phone", resumes: "Resumes", resumeIntro: "The file slots are ready. Download buttons activate once the PDFs are added.", resumeLabels: { general: "General resume", "data-engineering": "Data Engineering resume", "data-ai": "Data Science / AI resume" } },
    notFound: { eyebrow: "404 / Not found", title: "This route is outside the system.", text: "The page may have moved, or the project does not exist.", action: "Browse projects" }
  }
} as const;
