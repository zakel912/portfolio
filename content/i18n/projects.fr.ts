import type { Project } from "@/content/projects";

type ProjectTranslation = Pick<Project,
  "title" | "shortTitle" | "category" | "contextLabel" | "description" | "statement" |
  "overview" | "problem" | "role" | "flow" | "flowLabel" | "decisions" | "challenges" | "outcome" | "limitations"
>;

const frenchProjects: Record<string, ProjectTranslation> = {
  "xrpl-data-platform": {
    title: "Plateforme Data XRPL",
    shortTitle: "Plateforme Data XRPL",
    category: "Data Engineering · Plateforme Data",
    contextLabel: "Projet personnel · Prototype de deux semaines",
    description: "Une plateforme analytique locale qui ingère de manière incrémentale l’activité publique du XRP Ledger, la modélise avec dbt et l’expose via une API et un dashboard.",
    statement: "Des événements d’un ledger public aux modèles analytiques interrogeables — avec traçabilité, état incrémental et responsabilités clairement séparées.",
    overview: [
      "J’ai construit ce projet pour comprendre le parcours complet derrière un produit data : collecter les événements, conserver la donnée source, la transformer en modèles analytiques et exposer le résultat à des applications.",
      "Le périmètre était volontairement limité : suivre un ensemble de wallets configurés et prendre principalement en charge les transactions XRP de type Payment. Il s’agit d’un prototype batch local, pas d’un indexeur blockchain complet ni d’un produit de trading."
    ],
    problem: "Retélécharger l’historique complet des wallets à chaque exécution aurait multiplié les appels API et les traitements. Transformer directement les réponses aurait aussi supprimé la traçabilité de la source. La plateforme devait fournir un chemin reprenable entre l’API publique du ledger et des tables analytiques testées.",
    role: "Projet personnel. J’ai décomposé le système, examiné les propositions d’architecture, exécuté et débogué chaque composant, puis repris le système complet pour comprendre leurs interactions. GPT a généré une part importante de l’implémentation ; cette contrainte fait partie du retour critique sur le projet et n’est pas masquée.",
    flow: ["API XRPL", "Ingestion Python", "PostgreSQL raw", "Modèles dbt", "FastAPI", "Streamlit"],
    decisions: [
      { title: "Conserver les réponses brutes", requirement: "Préserver la source et rendre les transformations reproductibles.", decision: "Stocker une représentation large des réponses API dans PostgreSQL avant de sélectionner les champs analytiques avec dbt.", tradeoff: "La couche raw conserve plus de données que les vues actuelles n’en utilisent, mais évite de perdre des champs potentiellement utiles." },
      { title: "Ingestion idempotente avec checkpoint", requirement: "Reprendre la progression dans le ledger sans dupliquer les événements.", decision: "Persister un checkpoint de ledger et protéger l’identité des transactions avec des contraintes en base et une logique ON CONFLICT.", tradeoff: "Cette approche réduit le travail redondant pour les wallets suivis, mais nécessite toujours un chemin de backfill historique distinct pour les nouveaux wallets." },
      { title: "Séparer transformation et exposition", requirement: "Garder les préoccupations API en dehors de l’ingestion et de la modélisation.", decision: "Utiliser dbt pour les transformations raw → staging → analytics, puis faire interroger les tables analytiques par FastAPI.", tradeoff: "Le nombre de services alourdit le prototype, mais chaque composant conserve une responsabilité claire." },
      { title: "Commencer par du batch", requirement: "Automatiser un prototype suivant environ dix wallets.", decision: "Orchestrer l’ingestion, les contrôles de fraîcheur, les exécutions dbt et les tests avec Airflow.", tradeoff: "Le polling suffit à ce périmètre, mais ne convient pas à une indexation complète du ledger en temps réel." }
    ],
    challenges: [
      { title: "Ingestion courante ou historique", detail: "Un nouveau wallet a besoin de son activité passée, tandis que les wallets existants n’ont besoin que des événements récents.", response: "J’ai séparé le backfill reprenable de l’ingestion régulière fondée sur un checkpoint." },
      { title: "Présenter honnêtement les alertes", detail: "Des règles de transfert important et de pic d’activité existaient, mais leurs seuils n’avaient pas été étudiés rigoureusement.", response: "Elles restent présentées comme des expérimentations plutôt que comme une détection d’anomalies robuste." }
    ],
    outcome: ["L’environnement conteneurisé pouvait ingérer les wallets configurés, exécuter les transformations dbt et exposer résumés, transactions, activité quotidienne et interactions via FastAPI.", "Streamlit proposait des vues globale, wallet, transaction et graphe de réseau. Les alertes restaient incomplètes."],
    limitations: ["Prototype local sans déploiement cloud", "Polling plutôt que streaming WebSocket", "Prise en charge centrée sur les paiements XRP", "Observabilité limitée et tests incomplets", "Pas d’étude mesurée des performances PostgreSQL"]
  },
  "nawaraz-rag-platform": {
    title: "Plateforme RAG NAWARAZ",
    shortTitle: "NAWARAZ",
    category: "AI Engineering · RAG",
    contextLabel: "Expérimentation produit personnelle · 2024—2025",
    description: "Un système de chatbot fondé sur des documents avec ingestion, recherche vectorielle, contexte conversationnel, backend FastAPI et interface web intégrable.",
    statement: "Un prototype RAG de bout en bout conçu autour de documents d’entreprise et d’un chatbot intégrable dans un site externe.",
    overview: ["NAWARAZ a commencé comme un projet entrepreneurial personnel explorant des services numériques pour les entreprises. La direction technique centrale est devenue un chatbot spécialisé capable de répondre à partir des documents d’un client.", "Le travail couvrait le flux RAG et la surface produit : traitement documentaire, frontière API, widget intégrable et personnalisable, première modélisation par client, expérimentations de déploiement et évaluation manuelle."],
    problem: "Un modèle généraliste ne peut pas répondre de manière fiable à partir des connaissances privées d’une entreprise. Le système devait retrouver les passages pertinents dans les documents fournis, ajouter ce contexte à la requête et livrer le résultat dans une interface intégrable à un autre site.",
    role: "Projet personnel développé seul pendant environ six mois. J’ai réalisé le prototype technique ainsi que l’étude des concurrents, la première définition du service, l’analyse des coûts et le positionnement produit.",
    flow: ["Documents", "Extraction & chunks", "Embeddings", "Pinecone", "FastAPI + LLM", "Widget intégré"],
    flowLabel: "Parcours des documents et des requêtes",
    decisions: [
      { title: "Retrouver avant de générer", requirement: "Ancrer les réponses dans les documents de chaque client.", decision: "Transformer les chunks en embeddings, retrouver les passages proches d’une question et les inclure dans le contexte du modèle.", tradeoff: "La première stratégie de retrieval restait simple ; le reranking et l’évaluation systématique n’étaient pas implémentés." },
      { title: "Découpler l’interface", requirement: "Permettre au même backend IA de servir un site externe.", decision: "Exposer le moteur RAG via FastAPI et charger un chatbot hébergé séparément depuis une URL ou un petit snippet d’intégration.", tradeoff: "Le principe du widget a été validé, mais le déploiement de production et la sécurisation de l’API restaient ouverts." },
      { title: "Réduire la complexité self-service", requirement: "Garder un premier service compréhensible et livrable.", decision: "Abandonner progressivement le configurateur visuel entièrement autonome au profit d’une configuration réalisée dans le cadre de la prestation.", tradeoff: "Moins d’autonomie côté client, mais une première offre plus petite et réaliste." }
    ],
    challenges: [
      { title: "Qualité du chunking et du retrieval", detail: "Les premiers paramètres de chunking venaient en partie de documentations et d’exemples, pas d’un programme d’évaluation comparatif.", response: "J’ai testé avec des documents dont je connaissais le contenu, examiné les passages récupérés et les réponses, puis conservé cette limite explicitement." },
      { title: "Validation produit", detail: "J’ai consacré davantage de temps au produit technique qu’aux entretiens avec des clients potentiels ou à la validation de leur volonté de payer.", response: "J’ai mis le projet en pause et conservé ce constat comme enseignement central plutôt que de présenter le prototype comme une activité validée." }
    ],
    outcome: ["Le prototype ingérait et découpait les documents, stockait leurs embeddings, récupérait du contexte, générait les réponses, conservait le contexte conversationnel et exposait le workflow via FastAPI.", "Une URL de chatbot hébergée a été intégrée avec succès au site NAWARAZ, validant le principe du widget externe."],
    limitations: ["Évaluation RAG manuelle et qualitative", "Pas de reranking ni de benchmark systématique du retrieval", "Isolation multi-client incomplète", "Sécurité API, monitoring et onboarding à renforcer pour la production", "Qdrant était envisagé pour une migration ; Pinecone était la première implémentation confirmée"]
  },
  "aws-streaming-pipeline": {
    title: "Pipeline Data Streaming sur AWS",
    shortTitle: "Pipeline Streaming AWS",
    category: "Cloud Data Engineering",
    contextLabel: "Projet personnel guidé par un tutoriel",
    description: "Une pipeline de prise en main allant du producer à la requête avec Kafka sur EC2, stockage S3 par lots, catalogage Glue et Athena.",
    statement: "Une première mise en pratique du parcours des événements entre calcul, stockage objet, métadonnées et analytique serverless sur AWS.",
    overview: ["J’ai reproduit cette architecture depuis un tutoriel vidéo sur mon propre compte AWS afin de manipuler directement chaque service et d’en comprendre la responsabilité.", "L’objectif était l’apprentissage, pas une revendication de production : producer et consumer étaient lancés manuellement, sans orchestration, reprise sur erreur ni Infrastructure as Code."],
    problem: "Je voulais comprendre concrètement comment un broker, une machine distante, du stockage objet, un catalogue de données et une couche de requête s’intègrent dans un même flux data cloud.",
    role: "Projet personnel guidé par un tutoriel. J’ai créé et configuré les ressources AWS, installé Kafka sur EC2, relié les scripts producer et consumer, manipulé les permissions IAM et validé les données via Athena.",
    flow: ["Producer Python", "Kafka sur EC2", "Consumer Python", "Amazon S3", "Catalogue Glue", "SQL Athena"],
    decisions: [
      { title: "Écritures par lots dans S3", requirement: "Déplacer les événements consommés du broker vers le stockage objet.", decision: "Regrouper les messages avant de les écrire dans S3, organisés selon le temps et un champ métier comme le pays.", tradeoff: "Cette organisation se rapproche d’un data lake simple, sans séparation complète raw/processed/curated." },
      { title: "Découvrir le schéma", requirement: "Rendre les fichiers S3 interrogeables sans définir une base traditionnelle.", decision: "Utiliser un Glue Crawler pour inférer la structure et enregistrer les métadonnées dans Glue Data Catalog, puis interroger avec Athena.", tradeoff: "Pratique pour l’exploration, mais le projet n’étudiait ni les cas limites du crawler ni l’optimisation des requêtes." }
    ],
    challenges: [{ title: "Relier les services", detail: "La difficulté principale était de comprendre les échanges entre environnement local, EC2, Kafka, S3, Glue et Athena.", response: "J’ai suivi le flux étape par étape, configuré le réseau et les permissions IAM, puis validé le schéma final et les lignes avec SQL." }],
    outcome: ["Le parcours déclenché manuellement fonctionnait de bout en bout : publier les messages, les consommer, observer les fichiers dans S3, cataloguer les données puis les interroger avec Athena."],
    limitations: ["Projet d’apprentissage fondé sur un tutoriel", "Exécution manuelle sans orchestration", "Pas de gestion avancée des offsets ou consumer groups", "Pas de monitoring, tolérance aux pannes ou Infrastructure as Code", "Pas de comparaison des partitions ou formats de fichiers"]
  },
  "nyc-taxi-big-data": {
    title: "Analyse Big Data des taxis de NYC",
    shortTitle: "NYC Taxi",
    category: "Big Data · Traitement distribué",
    contextLabel: "Projet académique en groupe · 2e année",
    description: "Nettoyage et analyse distribués d’un dataset taxi de 1,9 Go avec HDFS, Hive, Spark, formats colonnes et OpenSearch.",
    statement: "Une étude pratique d’un environnement Big Data fourni — du CSV dans HDFS aux datasets ORC/Parquet nettoyés et à leur exploration.",
    overview: ["Projet académique à quatre autour des trajets NYC Yellow Taxi de mars 2016. Le CSV de 1,9 Go contenait plusieurs millions de courses.", "La VM, la stack Docker et le cluster Hadoop étaient fournis et préconfigurés. Notre travail portait sur leur utilisation et leur compréhension, pas sur la conception de l’infrastructure."],
    problem: "Le groupe devait ingérer un fichier volumineux, appliquer des règles de qualité défendables avec deux approches de traitement, stocker des représentations analytiques et explorer les données nettoyées.",
    role: "Projet de groupe dans lequel chacun a travaillé sur plusieurs parties de la stack pédagogique. Les notes disponibles ne permettent pas de revendiquer la propriété exclusive d’un composant précis.",
    flow: ["CSV", "HDFS", "Hive / Spark", "ORC / Parquet", "OpenSearch"],
    decisions: [
      { title: "Représentations colonnes", requirement: "Dépasser le CSV orienté lignes pour les traitements analytiques.", decision: "Créer une table ORC via Hive et écrire la sortie Spark au format Parquet.", tradeoff: "Le projet explorait les deux formats sans documenter de benchmark contrôlé du stockage ou des performances." },
      { title: "Deux chemins de nettoyage", requirement: "Comprendre la différence entre Hive et Spark.", decision: "Appliquer des filtres de validité comparables dans Hive et Spark, puis confronter les agrégats obtenus.", tradeoff: "De petits écarts subsistaient car les règles de nettoyage n’étaient pas parfaitement identiques." }
    ],
    challenges: [{ title: "Un nouvel écosystème distribué", detail: "HDFS, Hive, Spark, les frontières de la VM et les formats colonnes étaient nouveaux pour le groupe.", response: "Nous avons reconstruit le parcours composant par composant et comparé les sorties des moteurs pour vérifier leur cohérence." }],
    outcome: ["La chaîne CSV → HDFS → Hive/Spark → ORC/Parquet → OpenSearch était fonctionnelle, sans être automatisée de bout en bout."],
    limitations: ["Infrastructure fournie et préconfigurée", "Plusieurs étapes restaient manuelles", "Responsabilités individuelles non documentées au niveau des composants", "Liste complète des indicateurs OpenSearch indisponible"]
  },
  "housing-price-ml": {
    title: "Prédiction de prix immobiliers",
    shortTitle: "Prédiction immobilière",
    category: "Machine Learning appliqué",
    contextLabel: "Projet académique en binôme · Un mois",
    description: "Un workflow supervisé itératif couvrant preprocessing hétérogène, feature engineering, régularisation, boosting et soumissions Kaggle.",
    statement: "Un workflow de développement de modèles où la préparation et la conception des variables comptaient autant que le choix de l’algorithme.",
    overview: ["Réalisé pour un cours de modélisation statistique appliquée, ce projet en binôme prédisait les prix de vente à partir d’un mélange hétérogène de variables numériques, catégorielles, ordinales et incomplètes.", "Plusieurs notebooks conservaient les itérations successives, du preprocessing à l’évaluation externe sur Kaggle."],
    problem: "L’espace des variables contenait des valeurs manquantes, des types mixtes, des redondances et des relations non linéaires. Un modèle utile nécessitait donc une préparation cohérente avant le tuning.",
    role: "Projet en binôme. J’estime avoir réalisé 60 à 70 % du travail : preprocessing, feature engineering, entraînement, tuning, analyse et participation au rapport et à la soutenance.",
    flow: ["Variables brutes", "Preprocessing", "Feature engineering", "Recherche de modèles", "Prédictions", "Kaggle"],
    decisions: [
      { title: "Baselines linéaires et modèles flexibles", requirement: "Comparer des modèles régularisés interprétables à des approches capables de représenter les non-linéarités.", decision: "Tester Ridge et Lasso aux côtés d’ensembles d’arbres et de XGBoost.", tradeoff: "La stratégie exacte d’hyperparamètres linéaires n’est pas documentée de manière fiable et n’est donc pas revendiquée ici." },
      { title: "Variables dérivées", requirement: "Représenter des caractéristiques globales de chaque bien.", decision: "Créer des variables comme la surface totale et des regroupements structurels, tout en supprimant ou consolidant des entrées redondantes.", tradeoff: "Les nouvelles variables ont amélioré les résultats, mais chaque ajout devait justifier l’augmentation de dimension." }
    ],
    challenges: [{ title: "Données hétérogènes", detail: "La difficulté principale consistait à choisir comment imputer, encoder, transformer ou supprimer un grand nombre de variables variées.", response: "Nous avons itéré entre préparation, entraînement, analyse des erreurs, modification des variables, tuning et nouvelles soumissions." }],
    outcome: ["Le projet a livré des notebooks, des prédictions, un rapport et une soutenance. Les modèles basés sur les arbres, dont XGBoost, étaient particulièrement adaptés au problème.", "La source confirme l’évaluation Kaggle sans documenter un score final ou un classement suffisamment fiable ; aucun n’est donc affiché."],
    limitations: ["Score et classement Kaggle exacts indisponibles", "Détails précis du tuning linéaire non documentés", "Benchmark académique, pas service de prédiction déployé"]
  },
  "support2-mortality-analysis": {
    title: "Analyse de mortalité SUPPORT2",
    shortTitle: "Analyse SUPPORT2",
    category: "ML appliqué · Statistiques",
    contextLabel: "Projet académique en binôme · 2e année",
    description: "Une étude de classification clinique attentive aux fuites d’information, comparant régression logistique, régularisation L1/L2, sélection de variables et clustering exploratoire.",
    statement: "Une étude académique centrée sur la préparation, la régularisation et l’interprétation prudente — pas un système médical validé.",
    overview: ["Ce projet en binôme utilisait le dataset SUPPORT2 de 9 105 patients critiques pour étudier la classification de mortalité et l’interprétation des modèles.", "Le travail associait modélisation supervisée, PCA et clustering exploratoires, tout en discutant explicitement les fuites de données, valeurs manquantes et conséquences inégales des erreurs de classification."],
    problem: "Les variables cliniques contenaient des données manquantes et certains champs déjà étroitement liés au pronostic. Un score global élevé pouvait être trompeur si le modèle exploitait une fuite d’information ou masquait des faux négatifs importants.",
    role: "Projet académique réalisé intégralement en binôme : exploration, preprocessing, régression logistique, Ridge, Lasso, sélection stepwise, validation croisée, visualisation et rapport.",
    flow: ["Données cliniques", "Contrôles de fuite", "Preprocessing", "Modèles régularisés", "Validation croisée", "Interprétation"],
    decisions: [
      { title: "Retirer les variables proches du pronostic", requirement: "Éviter des prédictions artificiellement fortes fondées sur des champs trop proches de la cible.", decision: "Exclure les variables documentées surv2m, surv6m, prg2m et prg6m avant la modélisation.", tradeoff: "Le problème devient plus honnête, tout en nécessitant toujours une revue clinique plus approfondie." },
      { title: "Comparer L1 et L2", requirement: "Étudier le compromis entre stabilité et parcimonie.", decision: "Utiliser Ridge pour réduire les coefficients en gardant les variables, et Lasso pour réaliser une sélection implicite.", tradeoff: "Leurs performances rapportées étaient proches ; le choix concerne donc aussi l’interprétation, pas uniquement l’accuracy." }
    ],
    challenges: [{ title: "Interpréter les métriques", detail: "En prédiction de mortalité, faux positifs et faux négatifs n’ont pas les mêmes conséquences ; l’accuracy seule ne suffit pas.", response: "Nous avons aussi étudié F1 et AUC, et identifié la sensibilité, la spécificité et l’analyse du seuil comme approfondissements nécessaires." }],
    outcome: ["Les modèles logistique et régularisés présentaient des performances rapportées globalement proches, et la validation croisée servait à examiner leur stabilité.", "Le résumé final de la source inversant certains chiffres Ridge/Lasso, cette page évite volontairement de reproduire ces métriques contradictoires."],
    limitations: ["Étude académique et exploratoire, non validée cliniquement", "Pas de validation externe", "Analyse du seuil et des faux négatifs à approfondir", "Interprétations des clusters encore hypothétiques", "Résumé source contradictoire sur Ridge/Lasso"]
  },
  "customer-churn-models": {
    title: "Comparaison de modèles de churn",
    shortTitle: "Modèles de churn",
    category: "Machine Learning · IA responsable",
    contextLabel: "Projet académique en binôme",
    description: "Une étude comparative de classification entre modèles linéaires, voisins, arbres et ensembles, suivie d’une analyse de fairness.",
    statement: "Une comparaison conçue pour étudier généralisation, sensibilité au preprocessing et équité entre groupes — pas seulement le meilleur score.",
    overview: ["Le projet final d’une UE de Machine Learning utilisait environ 8 000 clients et une dizaine de variables explicatives pour prédire le churn.", "Il synthétisait une série plus large de travaux pratiques autour des méthodes supervisées, ensembles et évaluations de modèles."],
    problem: "Les familles de classifieurs réagissent différemment au scaling, à la complexité et à la structure des variables. Les comparer exigeait un preprocessing cohérent et une évaluation allant au-delà de l’accuracy d’entraînement.",
    role: "Projet en binôme. Les modèles étaient répartis entre les deux membres, puis les résultats et conclusions étaient réunis. J’ai participé au preprocessing, à l’entraînement de plusieurs modèles, à leur comparaison, à l’analyse et à la rédaction.",
    flow: ["Données clients", "Preprocessing", "Neuf classifieurs", "Validation croisée", "Sélection", "Analyse de fairness"],
    decisions: [{ title: "Évaluer plusieurs familles", requirement: "Comprendre les comportements plutôt que sélectionner uniquement le meilleur score.", decision: "Comparer régression logistique, LDA/QDA, KNN, arbres, Random Forest, Extra Trees, AdaBoost et Gradient Boosting.", tradeoff: "Une comparaison large donne du recul mais limite la profondeur de tuning possible pour chaque modèle dans un projet de cours." }],
    challenges: [{ title: "Sensibilité au preprocessing", detail: "KNN, fondé sur les distances, est particulièrement sensible à l’échelle des variables.", response: "Nous avons comparé plusieurs configurations pour rendre visible l’effet de la standardisation plutôt que de traiter le preprocessing comme une étape neutre." }],
    outcome: ["Les méthodes d’ensemble étaient globalement les plus fortes sur ce dataset, et Gradient Boosting a été retenu pour ses performances et sa stabilité. Les métriques exactes ne figurent pas dans la source.", "L’analyse finale étudiait Independence, Separation et Sufficiency avec le genre comme attribut sensible, et constatait que certains critères de fairness n’étaient pas pleinement satisfaits."],
    limitations: ["Métriques exactes non documentées", "Dataset et expérimentation à l’échelle d’un cours", "L’analyse de fairness identifie des écarts sans les résoudre à elle seule"]
  },
  "football-performance-analysis": {
    title: "Performance football & valeur de transfert",
    shortTitle: "Analyse football",
    category: "Statistiques appliquées · Analyse de données",
    contextLabel: "Projet académique en groupe · 2e année",
    description: "Une exploration multivariée des performances et valeurs de transfert à partir de plusieurs tables, avec PCA et K-Means.",
    statement: "Une étude exploratoire reliant la structure statistique à une question réelle sans transformer une corrélation en prédiction de prix.",
    overview: ["Le groupe étudiait la relation entre les performances d’un joueur et sa valeur de marché à partir de tables Kaggle sur les joueurs, apparitions, clubs, performances et transferts.", "Les méthodes multivariées étaient réparties dans le groupe. Ma contribution principale portait sur la PCA et K-Means, puis sur l’interprétation et la rédaction communes."],
    problem: "Les données étaient réparties entre plusieurs tables et mélangeaient performances saisonnières et informations de marché. L’analyse nécessitait d’abord des jointures, agrégations, traitements des valeurs manquantes, choix de périodes et standardisation.",
    role: "Projet de groupe d’environ quatre à cinq étudiants. J’ai principalement réalisé la PCA et K-Means puis participé à la synthèse finale. L’AFC et la CCA appartenaient aux analyses des autres membres.",
    flow: ["Tables Kaggle", "Jointures & agrégats", "Standardisation", "PCA", "K-Means", "Interprétation"],
    decisions: [{ title: "Explorer plutôt que prédire", requirement: "Étudier la relation entre performance sportive et valeur de marché.", decision: "Utiliser analyse multivariée et clustering sans présenter un modèle de prédiction du prix des joueurs.", tradeoff: "Le résultat décrit des associations et des outliers, pas un mécanisme causal ou complet de valorisation." }],
    challenges: [{ title: "Interpréter les dimensions latentes", detail: "Les composantes principales sont des combinaisons mathématiques, pas des concepts football immédiatement lisibles.", response: "J’ai étudié variance expliquée, contributions des variables et position des joueurs pour relier l’espace réduit aux statistiques sportives." }],
    outcome: ["L’analyse a mis en évidence une relation entre performance et valeur, avec des outliers montrant que les statistiques sportives seules n’expliquent pas les prix de transfert."],
    limitations: ["Étude exploratoire, non prédictive et non causale", "Certaines méthodes appartenaient à d’autres membres du groupe", "Des facteurs externes de valorisation étaient absents du dataset"]
  },
  "visulart-platform": {
    title: "Plateforme publicitaire Visulart",
    shortTitle: "Visulart",
    category: "Backend Engineering · Produit",
    contextLabel: "MVP en équipe · Challenge entrepreneuriat 2024",
    description: "Un MVP PHP/MySQL pour réserver des créneaux publicitaires sur des écrans partenaires, avec rôles, modération et dashboard administrateur.",
    statement: "Un MVP principalement backend équilibrant modélisation des données, workflows utilisateurs et contraintes produit dans une équipe pluridisciplinaire.",
    overview: ["Visulart mettait en relation des clients cherchant des emplacements publicitaires et des partenaires disposant d’écrans. Les clients pouvaient choisir un écran et un créneau, déposer leur publicité puis suivre son approbation.", "Le projet a été sélectionné parmi huit finalistes sur 110 équipes lors du 25e Challenge Projets d’Entreprendre."],
    problem: "Le MVP devait coordonner quatre rôles utilisateurs et préserver l’état d’une demande de campagne, de sa soumission à sa validation administrative puis à l’affichage des informations de diffusion.",
    role: "Équipe pluridisciplinaire d’environ cinq personnes. À partir d’un template frontend, j’ai travaillé avec un autre développeur et pris en charge une grande partie de la conception relationnelle et du backend : authentification, sessions, rôles, workflows métier et requêtes administrateur.",
    flow: ["Demande client", "Backend PHP", "MySQL", "Validation admin", "Statut campagne"],
    decisions: [{ title: "Modéliser le workflow en premier", requirement: "Représenter de manière cohérente clients, partenaires, écrans, demandes et diffusions.", decision: "Définir un schéma relationnel avec clés primaires et étrangères explicites avant d’implémenter les workflows PHP.", tradeoff: "La stack XAMPP locale convenait au MVP du challenge, pas à une revendication de déploiement en production." }],
    challenges: [{ title: "Périmètre produit", detail: "L’équipe devait démontrer la valeur dans le temps d’un challenge entrepreneurial plutôt que couvrir toutes les préoccupations de production.", response: "Nous avons priorisé authentification, demandes de réservation, décisions administrateur et visibilité des campagnes comme parcours central du MVP." }],
    outcome: ["L’équipe a livré un MVP fonctionnel et l’a présenté en finale après sa sélection parmi huit lauréats sur 110 équipes participantes."],
    limitations: ["Prototype, pas déploiement de production", "Frontend issu initialement d’un template", "Fournisseurs cartographique et SMS non documentés", "Contribution collective décrite uniquement lorsque la source l’attribue"]
  },
  "cpp-3d-engine": {
    title: "Moteur de visualisation 3D",
    shortTitle: "Moteur 3D",
    category: "Software Engineering · Mathématiques appliquées",
    contextLabel: "Projet académique en binôme · 2e année",
    description: "Un petit moteur interactif C++/SDL2 implémentant projection 3D vers 2D, rotations et profondeur sans moteur 3D existant.",
    statement: "Un moteur centré sur la géométrie où projection, rotation et primitives réutilisables ont été implémentées directement en C++.",
    overview: ["Le projet affichait un cube et une sphère en projetant des points tridimensionnels vers un écran SDL2 en deux dimensions.", "Les formes complexes étaient composées de classes réutilisables pour points, triangles, quadrilatères et solides, avec des tests séparés pour les composants."],
    problem: "Chaque transformation devait conserver une géométrie cohérente, reprojeter les coordonnées modifiées et dessiner les surfaces dans un ordre de profondeur utile, sans déléguer le travail à un moteur 3D.",
    role: "Projet en binôme. J’ai contribué aux transformations géométriques et ajouté les interactions de déplacement, rotation et sélection indépendante des objets.",
    flow: ["Primitives 3D", "Transformations", "Projection", "Ordre de profondeur", "Rendu SDL2"],
    decisions: [{ title: "Construire à partir de primitives", requirement: "Prendre en charge plusieurs formes sans dupliquer la logique géométrique.", decision: "Composer les solides depuis des classes Point, Triangle et Quad réutilisables, avec des composants distincts pour la scène et le renderer.", tradeoff: "Davantage de conception de classes au départ, mais une meilleure réutilisation et des tests progressifs." }],
    challenges: [{ title: "Tourner, puis projeter", detail: "La translation était directe, mais la rotation exigeait de recalculer chaque point avant de projeter à nouveau la forme.", response: "Nous avons implémenté les transformations géométriques et trigonométriques sur X, Y et Z, puis itéré jusqu’à obtenir un mouvement et un rendu visuellement cohérents." }],
    outcome: ["L’application affichait simultanément un cube et une sphère, avec sélection indépendante, déplacements et rotations sur trois axes, déplacement de caméra, ordre tenant compte de la profondeur et dégradé facilitant la lecture."],
    limitations: ["Moteur pédagogique simple, pas moteur 3D généraliste", "La couleur de profondeur n’est pas un modèle d’éclairage physique", "Répartition des contributions du binôme seulement partiellement documentée"]
  }
};

export function localizeProject(project: Project, locale: "fr" | "en"): Project {
  return locale === "fr" ? { ...project, ...frenchProjects[project.slug] } : project;
}
