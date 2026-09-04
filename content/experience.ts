export type Experience = {
  company: string;
  role: string;
  year: string;
  summary: string;
  focus: string[];
  technologies: string[];
  source: string;
  flow: string[];
};

export const experiences: Experience[] = [
  {
    company: "CID",
    role: "Artificial Intelligence Intern",
    year: "2025",
    summary: "Designed an autonomous, multi-stage workflow to extract, structure and analyse long tender documents, then generate a first organised proposal for expert review.",
    focus: [
      "Mapped a complex document into specialised extraction, constraint-analysis and generation stages instead of relying on one large prompt.",
      "Orchestrated branches, conditional paths and shared state with LangGraph; used structured JSON outputs between stages.",
      "Kept deterministic parsing, cleaning and table reconstruction in Python where an LLM added no value.",
      "Evaluated qualitatively against the one tender/response pair available and documented why a broader internal corpus would be necessary for grounded domain generation."
    ],
    technologies: ["Python", "LangGraph", "Groq", "OCR", "Flask", "React", "JSON"],
    source: "cid-stage-ia-appels-offres.md",
    flow: ["Tender PDF", "OCR & structure", "LangGraph state", "Specialised LLM steps", "Draft proposal"]
  },
  {
    company: "IDEMIA",
    role: "Artificial Intelligence Intern",
    year: "2024",
    summary: "Built an exploratory agent that translated natural-language requests into selected database tools and maintained context across multi-step account operations.",
    focus: [
      "Researched LLMs, embeddings, agent patterns, tool calling and conversational memory before designing the POC.",
      "Defined tools around CRUD operations and connected the agent to MongoDB through a Flask backend.",
      "Tested paraphrased intents and checked both tool selection and resulting database state.",
      "Identified the deterministic confirmation, access-control and injection protections required before allowing an agent to modify real data."
    ],
    technologies: ["OpenAI", "LangChain", "Python", "Flask", "MongoDB", "JavaScript", "JSON"],
    source: "idemia-stage-agent-ia-bdd.md",
    flow: ["User intent", "Agent", "Tool selection", "MongoDB action", "Response"]
  }
];
