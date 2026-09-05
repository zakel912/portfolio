export type ProjectGroup = "Data Engineering" | "AI Engineering" | "Machine Learning" | "Software Engineering";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  group: ProjectGroup;
  contextLabel: string;
  description: string;
  statement: string;
  technologies: string[];
  featured: boolean;
  sourceMarkdown: string;
  github?: string;
  overview: string[];
  problem: string;
  role: string;
  flow: string[];
  flowLabel?: string;
  decisions: { title: string; requirement: string; decision: string; tradeoff: string }[];
  challenges: { title: string; detail: string; response: string }[];
  outcome: string[];
  limitations: string[];
};

export const projects: Project[] = [
  {
    slug: "xrpl-data-platform",
    title: "XRPL Data Platform",
    shortTitle: "XRPL Data Platform",
    category: "Data Engineering · Data Platform",
    group: "Data Engineering",
    contextLabel: "Personal project · Two-week prototype",
    description: "A local analytical platform that incrementally ingests public XRP Ledger activity, models it with dbt and serves it through an API and dashboard.",
    statement: "From public ledger events to queryable analytical models—with traceability, incremental state and explicit service boundaries.",
    technologies: ["Python", "PostgreSQL", "dbt", "Airflow", "FastAPI", "Docker", "Streamlit", "XRPL"],
    featured: true,
    sourceMarkdown: "xrpl-data-platform-pipeline-analytique-blockchain.md",
    overview: [
      "I built this project to understand the full path behind a data product: collecting events, retaining source records, transforming them into analytical models and exposing the result to applications.",
      "The scope was deliberately narrow: follow a configured set of wallets and primarily support XRP Payment transactions. It is a local batch prototype, not a complete blockchain indexer or trading product."
    ],
    problem: "Repeatedly downloading complete wallet histories would waste API calls and processing, while transforming directly from the response would lose source traceability. The platform needed a resumable path from a public ledger API to useful, tested analytical tables.",
    role: "Personal project. I defined the functional stages, reviewed and refined the architecture, integrated the services, and validated the complete system through execution, debugging and end-to-end analysis. AI tools supported parts of the implementation and troubleshooting workflow.",
    flow: ["XRPL API", "Python ingestion", "PostgreSQL raw", "dbt models", "FastAPI", "Streamlit"],
    decisions: [
      { title: "Retain raw responses", requirement: "Preserve the source and make transformations reproducible.", decision: "Store a broad representation of API responses in PostgreSQL before selecting analytical fields with dbt.", tradeoff: "The raw layer keeps more data than current views need, but avoids discarding fields that may become useful later." },
      { title: "Checkpointed, idempotent ingestion", requirement: "Resume from ledger progress without creating duplicate events.", decision: "Persist a ledger checkpoint and protect transaction identity with database constraints and ON CONFLICT behaviour.", tradeoff: "This reduces redundant work for tracked wallets, while still requiring a separate historical backfill path for newly added wallets." },
      { title: "Separate transformation from serving", requirement: "Keep API concerns out of ingestion and modelling.", decision: "Use dbt for raw → staging → analytics transformations, then let FastAPI query the resulting analytical tables.", tradeoff: "More services make the prototype heavier, but each component has a clear responsibility." },
      { title: "Start with batch", requirement: "Automate a prototype following roughly ten wallets.", decision: "Schedule ingestion, freshness checks, dbt runs and tests with Airflow.", tradeoff: "Polling is sufficient for this scope, but it is not suitable for comprehensive real-time ledger indexing." }
    ],
    challenges: [
      { title: "Current ingestion versus history", detail: "A new wallet needs past activity while existing wallets only need newer ledger events.", response: "I separated resumable backfill from regular checkpoint-based ingestion." },
      { title: "Honest anomaly detection", detail: "Large-transfer and activity-spike rules existed, but their thresholds were not rigorously studied.", response: "They remain labelled as experiments rather than being presented as robust anomaly detection." }
    ],
    outcome: ["A containerised environment could ingest configured wallets, run dbt transformations and expose wallet summaries, transactions, daily activity and interactions through FastAPI.", "Streamlit included overview, wallet, transaction and network-graph views. Alerting remained incomplete."],
    limitations: ["Local prototype with no cloud deployment", "Polling rather than WebSocket streaming", "Primarily supports XRP Payment transactions", "Limited observability and incomplete tests", "No measured PostgreSQL performance work"]
  },
  {
    slug: "nawaraz-rag-platform",
    title: "NAWARAZ RAG Platform",
    shortTitle: "NAWARAZ",
    category: "AI Engineering · RAG",
    group: "AI Engineering",
    contextLabel: "Personal product experiment · 2024—2025",
    description: "A document-grounded chatbot system with ingestion, vector retrieval, conversational context, a FastAPI backend and an embeddable web interface.",
    statement: "An end-to-end RAG prototype designed around company documents and a chatbot that can be embedded into an external website.",
    technologies: ["LangChain", "OpenAI", "Pinecone", "FastAPI", "Supabase", "JavaScript", "Render"],
    featured: true,
    sourceMarkdown: "nawaraz-plateforme-rag-chatbot.md",
    overview: ["NAWARAZ began as a solo entrepreneurial project exploring digital services for businesses. The core technical direction became a specialised chatbot able to answer from a client’s own documents.", "The work covered both the RAG path and the product surface around it: document handling, an API boundary, an embeddable and customisable widget, early client-specific data modelling, deployment experiments and manual evaluation."],
    problem: "A general-purpose model cannot reliably answer questions grounded in one company’s private knowledge. The system needed to retrieve relevant passages from supplied documents, add that context to the request and deliver the result through an interface that could live on another website.",
    role: "Solo personal project developed over roughly six months. I handled the technical prototype as well as competitor research, early service design, costs and product positioning.",
    flow: ["Documents", "Extract & chunk", "Embeddings", "Pinecone", "FastAPI + LLM", "Embedded widget"],
    flowLabel: "Document and request path",
    decisions: [
      { title: "Retrieval before generation", requirement: "Ground answers in each client’s documents.", decision: "Embed document chunks, retrieve similar passages for a question and include them in the model context.", tradeoff: "The first retrieval strategy was simple; reranking and systematic retrieval evaluation were not implemented." },
      { title: "Decouple the interface", requirement: "Allow the same AI backend to support an external site.", decision: "Expose the RAG engine through FastAPI and load a separately hosted chatbot through a URL or small integration snippet.", tradeoff: "This validated embedding the widget, but production deployment and API security remained open work." },
      { title: "Reduce self-service complexity", requirement: "Keep the initial service understandable and deliverable.", decision: "Move away from a fully self-configured visual builder toward configuration as part of a client service.", tradeoff: "Less client autonomy, but a smaller and more realistic first product surface." }
    ],
    challenges: [
      { title: "Chunking and retrieval quality", detail: "Initial chunk parameters came partly from documentation and examples, not a comparative evaluation programme.", response: "I tested with documents whose content I knew, reviewed retrieved information and responses, and kept the limitation explicit." },
      { title: "Product validation", detail: "I spent more time building the technical product than interviewing potential clients or validating willingness to pay.", response: "I paused the project and retained this as a central product lesson rather than treating the prototype as a validated business." }
    ],
    outcome: ["The prototype ingested and chunked documents, stored embeddings, retrieved context, generated responses, retained conversational context and exposed the workflow through FastAPI.", "A hosted chatbot URL was successfully embedded into the NAWARAZ site, validating the external-widget concept."],
    limitations: ["Manual, qualitative RAG evaluation", "No reranking or systematic retrieval benchmark", "Multi-client isolation was incomplete", "API security, monitoring and onboarding needed production work", "Qdrant was considered for migration; Pinecone was the confirmed first implementation"]
  },
  {
    slug: "aws-streaming-pipeline",
    title: "Streaming Data Pipeline on AWS",
    shortTitle: "AWS Streaming Pipeline",
    category: "Cloud Data Engineering",
    group: "Data Engineering",
    contextLabel: "Personal AWS learning project",
    description: "A hands-on producer-to-query pipeline using Kafka on EC2, batched S3 storage, Glue cataloguing and Athena.",
    statement: "A first practical walkthrough of how streamed events move between compute, object storage, metadata and serverless analytics on AWS.",
    technologies: ["Python", "Kafka", "EC2", "S3", "IAM", "AWS Glue", "Athena"],
    featured: true,
    sourceMarkdown: "pipeline-donnees-streaming-aws.md",
    overview: ["Starting from a reference architecture, I deployed the pipeline in my own AWS account to configure each service directly and understand its responsibility.", "The goal was hands-on learning rather than production readiness: the producer and consumer were launched manually, and the pipeline did not address orchestration, failure recovery or infrastructure as code."],
    problem: "I wanted a concrete understanding of how a broker, remote compute, object storage, a data catalogue and a query layer fit into one cloud data path.",
    role: "Personal learning project. I created and configured the AWS resources, installed Kafka on EC2, connected producer and consumer scripts, managed IAM permissions and validated the resulting data through Athena.",
    flow: ["Python producer", "Kafka on EC2", "Python consumer", "Amazon S3", "Glue Catalog", "Athena SQL"],
    decisions: [
      { title: "Batch writes into S3", requirement: "Move consumed events from the broker into object storage.", decision: "Group consumed messages before writing them to S3, organised by time and a business field such as country.", tradeoff: "This introduced a simple lake-like layout, without a full raw/processed/curated zone design." },
      { title: "Discover the schema", requirement: "Make files in S3 queryable without defining a traditional database.", decision: "Use a Glue Crawler to infer structure and register metadata in the Glue Data Catalog, then query with Athena.", tradeoff: "Convenient for exploration, but the project did not examine crawler edge cases or query optimisation." }
    ],
    challenges: [{ title: "Connecting the services", detail: "The main difficulty was understanding communication between a local environment, EC2, Kafka, S3, Glue and Athena.", response: "I traced the data step by step, configured network access and IAM permissions, then validated the final schema and rows with SQL." }],
    outcome: ["The full manually triggered path worked: publish messages, consume them, observe batched files in S3, catalogue the data and query it through Athena."],
    limitations: ["Hands-on learning scope rather than production deployment", "Manual execution with no orchestration", "No advanced offset or consumer-group management", "No monitoring, fault tolerance or infrastructure as code", "No partition or file-format comparison"]
  },
  {
    slug: "nyc-taxi-big-data",
    title: "NYC Taxi Big Data Analysis",
    shortTitle: "NYC Taxi",
    category: "Big Data · Distributed Processing",
    group: "Data Engineering",
    contextLabel: "Academic group project · Engineering year 2",
    description: "Distributed cleaning and analysis of a 1.9 GB taxi dataset with HDFS, Hive, Spark, columnar formats and OpenSearch.",
    statement: "A hands-on study of a supplied Big Data environment—from CSV in HDFS to cleaned ORC/Parquet datasets and visual exploration.",
    technologies: ["HDFS", "Hive", "Spark", "ORC", "Parquet", "OpenSearch", "Docker"],
    featured: false,
    sourceMarkdown: "analyse-big-data-nyc-taxi.md",
    overview: ["A four-person academic project using March 2016 NYC Yellow Taxi trip data. The 1.9 GB CSV contained several million journeys.", "The VM, Docker stack and Hadoop cluster were supplied and preconfigured. Our work focused on using and understanding the platform, not claiming to have designed its infrastructure."],
    problem: "The group needed to ingest a sizeable flat file, apply defensible quality rules with two processing approaches, store analytical representations and explore the cleaned data.",
    role: "Group project in which every member worked across several parts of the educational stack. The available notes do not support a narrower claim of exclusive ownership.",
    flow: ["CSV", "HDFS", "Hive / Spark", "ORC / Parquet", "OpenSearch"],
    decisions: [
      { title: "Columnar representations", requirement: "Move beyond a row-oriented CSV for analytical work.", decision: "Create an ORC table through Hive and write Spark output as Parquet.", tradeoff: "The project explored both formats, but did not document a controlled storage or performance benchmark." },
      { title: "Parallel cleaning paths", requirement: "Understand the difference between Hive and Spark.", decision: "Apply comparable validity filters in Hive and Spark, then compare aggregate outputs.", tradeoff: "Small result differences remained because cleaning rules were not perfectly identical." }
    ],
    challenges: [{ title: "A new distributed ecosystem", detail: "HDFS, Hive, Spark, VM boundaries and columnar formats were new to the group.", response: "We rebuilt the data path component by component and compared outputs between engines to check coherence." }],
    outcome: ["The chain CSV → HDFS → Hive/Spark → ORC/Parquet → OpenSearch was functional, although not automated end to end."],
    limitations: ["Infrastructure was supplied and preconfigured", "Several steps remained manual", "Individual ownership is not documented at component level", "The full set of OpenSearch indicators is no longer documented"]
  },
  {
    slug: "housing-price-ml",
    title: "Housing Price Prediction",
    shortTitle: "Housing Price Prediction",
    category: "Applied Machine Learning",
    group: "Machine Learning",
    contextLabel: "Academic pair project · One month",
    description: "An iterative supervised-learning workflow spanning heterogeneous preprocessing, feature engineering, regularisation, boosting and Kaggle submissions.",
    statement: "A model-development workflow where data preparation and feature design mattered as much as algorithm selection.",
    technologies: ["Python", "pandas", "scikit-learn", "XGBoost", "Jupyter", "Kaggle"],
    featured: false,
    sourceMarkdown: "prediction-prix-immobilier-most.md",
    github: "https://github.com/zakel912/MOST-project",
    overview: ["Completed for an applied statistical modelling course, this pair project predicted sale prices from a heterogeneous mix of numerical, categorical, ordinal and incomplete features.", "Multiple notebooks captured successive iterations from preprocessing through external Kaggle evaluation."],
    problem: "The feature space contained missing values, mixed data types, redundant variables and non-linear relationships. A useful model required a coherent preparation pipeline before tuning.",
    role: "Pair project. I estimate that I completed 60–70% of the work, including preprocessing, feature engineering, model training, tuning, analysis and contributions to the report and presentation.",
    flow: ["Raw features", "Preprocessing", "Feature engineering", "Model search", "Predictions", "Kaggle"],
    decisions: [
      { title: "Linear baselines and flexible models", requirement: "Compare interpretable regularised models with approaches able to represent non-linearity.", decision: "Test Ridge and Lasso alongside tree ensembles and XGBoost.", tradeoff: "The exact linear hyperparameter strategy is not reliably documented, so it is not claimed here." },
      { title: "Derived features", requirement: "Represent broader characteristics of each property.", decision: "Create features such as total surface area and grouped structural characteristics, while removing or consolidating redundant inputs.", tradeoff: "New features improved results, but each addition had to justify added dimensionality." }
    ],
    challenges: [{ title: "Heterogeneous data", detail: "The main difficulty was choosing how to impute, encode, transform or remove a large number of varied features.", response: "We iterated through preparation, training, error analysis, feature changes, tuning and new submissions." }],
    outcome: ["The project delivered notebooks, predictions, a report and an oral presentation. Tree-based models, including XGBoost, were particularly well suited to the problem.", "The source confirms Kaggle scoring but does not document a trustworthy final score or ranking, so none is shown."],
    limitations: ["Exact Kaggle score and ranking are unavailable", "Exact linear-model tuning details are not documented", "Academic benchmark rather than a deployed prediction service"]
  },
  {
    slug: "support2-mortality-analysis",
    title: "SUPPORT2 Mortality Analysis",
    shortTitle: "SUPPORT2 Analysis",
    category: "Applied ML · Statistics",
    group: "Machine Learning",
    contextLabel: "Academic pair project · Engineering year 2",
    description: "A leakage-aware clinical classification study comparing logistic regression, L1/L2 regularisation, variable selection and exploratory clustering.",
    statement: "An academic modelling study focused on preparation, regularisation and cautious interpretation.",
    technologies: ["R", "glmnet", "Logistic regression", "Ridge", "Lasso", "PCA", "K-Means"],
    featured: false,
    sourceMarkdown: "analyse-medicale-mortalite-support2.md",
    overview: ["This pair project used the SUPPORT2 dataset of 9,105 critically ill patients to study mortality classification and model interpretation.", "The work combined supervised modelling with exploratory PCA and clustering, while explicitly discussing data leakage, missing values and the unequal significance of classification errors."],
    problem: "Clinical variables included missing data and some fields already closely related to prognosis. A high aggregate score could be misleading if the model used leaked signals or hid consequential false negatives.",
    role: "Academic pair project completed jointly across exploration, preprocessing, logistic regression, Ridge, Lasso, stepwise selection, cross-validation, visualisation and reporting.",
    flow: ["Clinical data", "Leakage checks", "Preprocessing", "Regularised models", "Cross-validation", "Interpretation"],
    decisions: [
      { title: "Remove prognosis-like fields", requirement: "Avoid artificially strong predictions from variables too close to the target.", decision: "Exclude documented fields such as surv2m, surv6m, prg2m and prg6m before modelling.", tradeoff: "This makes the problem more honest, while still leaving the need for deeper clinical review." },
      { title: "Compare L1 and L2", requirement: "Study stability against model parsimony.", decision: "Use Ridge to shrink coefficients while retaining variables and Lasso to perform implicit selection.", tradeoff: "Their reported performance was close; the choice therefore also concerns interpretation, not only accuracy." }
    ],
    challenges: [{ title: "Metric interpretation", detail: "In mortality prediction, false positives and false negatives have different consequences, so accuracy alone is insufficient.", response: "We also considered F1 and AUC and identified sensitivity, specificity and threshold analysis as necessary deeper work." }],
    outcome: ["Logistic and regularised models showed broadly similar reported performance, and cross-validation was used to examine stability.", "Because the source’s trailing summary swaps some Ridge/Lasso figures, this page intentionally avoids reproducing conflicting per-model metrics."],
    limitations: ["Academic and exploratory; not clinically validated", "No external validation", "Threshold and false-negative analysis should be deeper", "Cluster interpretations remain hypotheses", "Source summary contains conflicting Ridge/Lasso figures"]
  },
  {
    slug: "customer-churn-models",
    title: "Customer Churn Model Comparison",
    shortTitle: "Churn Model Comparison",
    category: "Machine Learning · Responsible AI",
    group: "Machine Learning",
    contextLabel: "Academic pair project",
    description: "A comparative classification study across linear, neighbour, tree and ensemble models, followed by a fairness analysis.",
    statement: "A model comparison designed to examine generalisation, preprocessing sensitivity and group fairness.",
    technologies: ["Python", "scikit-learn", "pandas", "Gradient Boosting", "ROC-AUC", "Jupyter"],
    featured: false,
    sourceMarkdown: "machine-learning-comparaison-modeles.md",
    overview: ["The final project of a Machine Learning course used roughly 8,000 customer records and around ten explanatory variables to predict churn.", "It consolidated a wider sequence of practical work across supervised methods, ensembles and model evaluation."],
    problem: "Different classifier families respond differently to scaling, complexity and feature structure. Comparing them required consistent preprocessing and evaluation beyond training accuracy.",
    role: "Pair project. Models were divided between both contributors, then results and conclusions were brought together. I participated in preprocessing, training several models, comparison, analysis and writing.",
    flow: ["Customer data", "Preprocessing", "Nine classifiers", "Cross-validation", "Model selection", "Fairness review"],
    decisions: [{ title: "Evaluate across model families", requirement: "Understand behaviour, not only select a score leader.", decision: "Compare logistic regression, LDA/QDA, KNN, decision trees, Random Forest, Extra Trees, AdaBoost and Gradient Boosting.", tradeoff: "A broad comparison gives perspective but limits how deeply each model can be tuned within a course project." }],
    challenges: [{ title: "Preprocessing sensitivity", detail: "Distance-based KNN is especially sensitive to variable scale.", response: "We compared configurations to make the effect of standardisation visible rather than treating preprocessing as a neutral step." }],
    outcome: ["Ensemble methods were generally strongest on this dataset, with Gradient Boosting selected for its performance and stability. Exact metrics are not present in the source.", "The final analysis examined Independence, Separation and Sufficiency using gender as a sensitive attribute and found that some fairness criteria were not fully satisfied."],
    limitations: ["No exact metrics documented", "Course-scale dataset and experiment", "Fairness analysis identifies disparities but does not by itself resolve them"]
  },
  {
    slug: "football-performance-analysis",
    title: "Football Performance & Transfer Value",
    shortTitle: "Football Data Analysis",
    category: "Applied Statistics · Data Analysis",
    group: "Machine Learning",
    contextLabel: "Academic group project · Engineering year 2",
    description: "A multivariate exploration of player performance and transfer value using joined football datasets, PCA and K-Means.",
    statement: "An exploratory study connecting statistical structure to a real question without turning correlation into a price-prediction claim.",
    technologies: ["Python", "pandas", "PCA", "K-Means", "FCA", "CCA", "Jupyter"],
    featured: false,
    sourceMarkdown: "analyse-donnees-football.md",
    overview: ["The group studied whether player performance was related to market and transfer value using several Kaggle tables covering players, appearances, clubs, performance and transfers.", "Different multivariate methods were assigned across the group. My principal contribution was PCA and K-Means, followed by shared interpretation and reporting."],
    problem: "The data lived across multiple tables and mixed season-level performance with market information. Before analysis, it needed joins, aggregation, missing-value handling, period selection and scaling.",
    role: "Group project of approximately four to five students. I primarily owned the PCA and K-Means work and participated in the final synthesis. FCA and CCA belonged to other members’ analyses.",
    flow: ["Kaggle tables", "Join & aggregate", "Standardise", "PCA", "K-Means", "Interpret"],
    decisions: [{ title: "Explore rather than predict", requirement: "Study relationships between sport performance and market value.", decision: "Use multivariate analysis and clustering rather than presenting a player-price prediction model.", tradeoff: "The result describes associations and outliers, not a causal or complete valuation mechanism." }],
    challenges: [{ title: "Interpret latent dimensions", detail: "Principal components are mathematical combinations, not immediately meaningful football concepts.", response: "I examined explained variance, variable contributions and player positions to connect the reduced space back to sporting statistics." }],
    outcome: ["The analysis found a relationship between performance and value, alongside outliers showing that sporting statistics alone do not explain transfer prices."],
    limitations: ["Exploratory, not predictive or causal", "Some methods were owned by other group members", "External factors influencing valuation were absent from the dataset"]
  },
  {
    slug: "visulart-platform",
    title: "Visulart Advertising Platform",
    shortTitle: "Visulart",
    category: "Backend Engineering · Product",
    group: "Software Engineering",
    contextLabel: "Team MVP · 2024 entrepreneurship challenge",
    description: "A PHP/MySQL MVP for booking advertising slots on partner screens, with roles, moderation and an administrative dashboard.",
    statement: "A backend-heavy MVP balancing data modelling, user workflows and product constraints in a multidisciplinary team.",
    technologies: ["PHP", "MySQL", "SQL", "JavaScript", "Apache", "XAMPP"],
    featured: false,
    sourceMarkdown: "visulart.md",
    overview: ["Visulart connected clients seeking advertising placements with partners providing screens. Customers could select a screen and time slot, submit creative material and follow approval status.", "The project was one of eight selected finalists from 110 teams in the 25th Challenge Projets d’Entreprendre."],
    problem: "The MVP needed to coordinate four user roles and preserve the state of a campaign request from submission through administrative review and display information.",
    role: "Multidisciplinary team of about five. Starting from a frontend template, I worked with another developer and took responsibility for much of the relational design and backend: authentication, sessions, role controls, business workflows and admin queries.",
    flow: ["Client request", "PHP backend", "MySQL", "Admin review", "Campaign status"],
    decisions: [{ title: "Model the workflow first", requirement: "Represent clients, partners, screens, requests and placements consistently.", decision: "Define a relational schema with explicit primary/foreign keys before implementing the PHP workflows.", tradeoff: "The local XAMPP stack was appropriate for the challenge MVP, not a statement about production deployment." }],
    challenges: [{ title: "Product scope", detail: "The team had to demonstrate value within an entrepreneurship challenge rather than build every production concern.", response: "We prioritised authentication, booking requests, administrative decisions and campaign visibility as the core MVP path." }],
    outcome: ["The team delivered a functional MVP and presented it in the final round after selection among eight laureates from 110 participating teams."],
    limitations: ["Prototype, not production deployment", "Frontend originated from a template", "External mapping and SMS providers are not documented", "Team contribution is described only where the source identifies it"]
  },
  {
    slug: "cpp-3d-engine",
    title: "3D Visualisation Engine",
    shortTitle: "3D Engine",
    category: "Software Engineering · Applied Mathematics",
    group: "Software Engineering",
    contextLabel: "Academic pair project · Engineering year 2",
    description: "A small interactive C++/SDL2 renderer implementing 3D-to-2D projection, rotations and depth handling without an existing 3D engine.",
    statement: "A geometry-first renderer where projection, rotation and reusable primitives were implemented directly in C++.",
    technologies: ["C++", "SDL2", "OOP", "Geometry", "Trigonometry"],
    featured: false,
    sourceMarkdown: "pap-moteur-visualisation-3d-cpp-sdl2.md",
    overview: ["The project rendered a cube and sphere by projecting three-dimensional points onto a two-dimensional SDL2 display.", "Complex forms were composed from reusable point, triangle, quadrilateral and solid classes, with separate component tests."],
    problem: "Every object transformation had to preserve coherent geometry, reproject updated coordinates and draw surfaces in a useful depth order—without delegating the work to a 3D engine.",
    role: "Pair project. I contributed to geometric transformations and added interaction for moving, rotating and independently selecting objects.",
    flow: ["3D primitives", "Transformations", "Projection", "Depth order", "SDL2 renderer"],
    decisions: [{ title: "Build from primitives", requirement: "Support more than one shape without duplicating geometry logic.", decision: "Compose solids from reusable Point, Triangle and Quad classes with dedicated scene and renderer components.", tradeoff: "More up-front class design, but clearer reuse and progressive component testing." }],
    challenges: [{ title: "Rotate, then project", detail: "Translation was direct, while rotation required recalculating every point before projecting the shape again.", response: "We implemented geometric and trigonometric transforms for X, Y and Z, then iterated until movement and rendering remained visually coherent." }],
    outcome: ["The application displayed a cube and sphere simultaneously with independent selection, three-axis movement and rotation, camera movement, depth-aware drawing and a readability-oriented colour gradient."],
    limitations: ["Simple educational renderer, not a general 3D engine", "Depth colouring is not a physical lighting model", "Pair contribution boundaries are only partially documented"]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
