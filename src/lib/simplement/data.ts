export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  tags: string[];
  tagLabels: string[];
  href: string;
};

export type Work = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  categories: string[];
  tagLabels: string[];
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  photoAlt?: string;
  initials?: string;
};

export type Review = {
  text: string;
  author: string;
};

export type Quote = {
  text: string;
  author: string;
  context?: string;
};

export type StackQuote = {
  num: string;
  title: string;
  pull: string;
  body: string;
};

export type AccordionItem = {
  summary: string;
  body: string;
};

export type JourneyStep = {
  num: string;
  title: string;
  body: string;
};

export type MethodStep = {
  num: string;
  label: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  chips: string[];
  chipsOrbit?: boolean;
  image: string;
};

export type TalkLine = {
  text: string;
  speaker: string;
  side: "them" | "us";
};

export const talkLines: TalkLine[] = [
  {
    text: "Mon site est joli… mais je n’ai presque aucun contact.",
    speaker: "Prospect",
    side: "them",
  },
  {
    text: "Un site web sans stratégie, c’est comme un bateau sans gouvernail. On commence par vos objectifs.",
    speaker: "Simplement",
    side: "us",
  },
  {
    text: "Et pour être visible sur Google ?",
    speaker: "Prospect",
    side: "them",
  },
  {
    text: "SEO, SEA, SMO + un design qui convertit. Proposition claire — souvent sous 24h.",
    speaker: "Simplement",
    side: "us",
  },
];

export const stackQuotes: StackQuote[] = [
  {
    num: "01",
    title: "Une stratégie marketing",
    pull: "« Un site web sans stratégie, c’est comme un bateau sans gouvernail. »",
    body: "Nous définissons une stratégie sur mesure pour atteindre vos objectifs.",
  },
  {
    num: "02",
    title: "Une expérience utilisateur (UX/UI) fluide",
    pull: "Un visiteur frustré quitte un site en quelques secondes.",
    body: "Pour éviter cela, nous créons un design ergonomique qui combine navigation intuitive, rapidité et compatibilité mobile.",
  },
  {
    num: "03",
    title: "Un site visible",
    pull: "« Un site sans visiteur est comme une boutique fermée. »",
    body: "Votre site doit être optimisé pour les moteurs de recherche (SEO) afin d’apparaître en haut des résultats sur Google.",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    num: "01",
    title: "Contact",
    body: "Vous nous partagez vos besoins et vos idées, et nous échangeons pour mieux comprendre votre projet et vos objectifs.",
  },
  {
    num: "02",
    title: "Proposition",
    body: "Sur la base de nos échanges, nous vous envoyons une proposition claire et détaillée, incluant les solutions envisagées, un planning précis, et un devis adapté à votre budget.",
  },
  {
    num: "03",
    title: "Onboarding",
    body: "Une fois la proposition validée, nous lançons officiellement le projet. Vous recevez un planning détaillé et des étapes définies pour suivre la progression.",
  },
  {
    num: "04",
    title: "Livraison & Révisions",
    body: "Votre projet finalisé vous est livré dans les délais. Nous incluons les révisions nécessaires pour garantir que le résultat correspond parfaitement à vos attentes.",
  },
];

export const methodSteps: MethodStep[] = [
  {
    num: "01",
    label: "Stratégie",
    kicker: "Étape 01",
    title: "Définition de la Stratégie pour votre site internet",
    paragraphs: [
      "Notre agence vous offre un accompagnement complet pour votre stratégie de communication en ligne. Elle vous aide à définir vos objectifs, à cibler votre audience et à élaborer des messages efficaces pour atteindre vos clients potentiels. Vous gagnez ainsi en visibilité et en notoriété, des atouts majeurs pour le développement de votre entreprise.",
    ],
    chips: ["Objectifs", "Audience", "Messages", "Notoriété"],
    image: "/assets/image-accueil5.png",
  },
  {
    num: "02",
    label: "Design",
    kicker: "Étape 02",
    title: "Design sur Mesure (modifications illimitées)",
    paragraphs: [
      "Nous nous consacrons à la création de votre site web et au référencement, assurant une présence robuste sur le web. Que vous cherchiez à créer des sites vitrines, des applications web ou une refonte complète de votre plateforme web, notre équipe répond aux besoins spécifiques de chaque projet.",
      "En tant qu’agence de communication experte en conception web, notre mission est d’offrir des sites internet sur-mesure, développés avec les technologies les plus récentes et les plus adaptées.",
    ],
    chips: ["Sur-mesure", "Modifs illimitées*", "Tech récente", "Refonte / vitrine"],
    image: "/assets/ACCEUIL-5v3.png",
  },
  {
    num: "03",
    label: "Acquisition",
    kicker: "Étape 03",
    title: "Mise en place de l’acquisition clients",
    paragraphs: [
      "Parce que votre site web ne sert à rien s’il n’est pas vu, le référencement est une étape cruciale de tout projet digital. Il s’agit d’optimiser votre site pour qu’il apparaisse en haut des résultats de recherche sur Google.",
      "Notre équipe, grâce à son expertise en référencement, saura mettre en place une stratégie efficace pour vous permettre de gagner en visibilité. Tout en respectant les règles imposées par Google, l’équipe de Simplement travaillera sur les différents leviers du référencement : le SEO, le SEA et le SMO.",
    ],
    chips: ["SEO", "SEA", "SMO", "Visibilité Google"],
    chipsOrbit: true,
    image: "/assets/Perspective-1024x683.png",
  },
];

export const chooseAgencyAccordion: AccordionItem[] = [
  {
    summary: "01. Expertise de l’équipe d’agence web à Marseille",
    body: "Au cœur de la cité phocéenne, il est impératif de choisir une agence web Marseille dotée d’une solide expertise, couvrant le développement, le design et le référencement naturel, pour assurer la réalisation performante de votre projet de site internet.",
  },
  {
    summary: "02. Réalisations et retours clients",
    body: "Parcourez les créations de site de cette agence web spécialisée et découvrez les témoignages des clients. N’hésitez pas à explorer les sites web qu’elle a conçus pour avoir un aperçu de leur compétence. La meilleure preuve d’un travail bien fait est souvent le retour positif des clients précédents.",
  },
  {
    summary: "03. Capacité d’adaptation de l’agence",
    body: "Dans le dynamique monde du digital, une bonne agence web à Marseille, comme l’agence Simplement, se distingue par sa flexibilité. Elle devrait être capable de s’ajuster à vos besoins spécifiques et d’évoluer avec votre stratégie digitale, optimisant ainsi votre présence sur le web tout au long du processus de création ou de refonte de votre site web.",
  },
  {
    summary: "04. Aspects financiers et modalités",
    body: "Sélectionnez une agence web Marseille qui allie qualité et coût adapté à votre budget. Les conditions de paiement, qu’il s’agisse d’un acompte, d’un échéancier ou d’autres modalités, devraient être clairement définies pour éviter tout malentendu. Une agence transparente, comme l’agence web certifiée Google Partner, est souvent un gage de confiance.",
  },
];

export const faqAccordion: AccordionItem[] = [
  {
    summary: "Quels sont les avantages de travailler avec une agence de communication à Marseille ?",
    body: "Une bonne agence à Marseille, spécialisée dans la communication digitale et la création de sites web, offre une expertise complète. De la conception web à la refonte, en passant par le référencement et le positionnement sur les moteurs de recherche, elle assure une présence optimale sur le web.",
  },
  {
    summary: "Quels services offre une agence digitale à Marseille ?",
    body: "Outre la création de votre site internet, une agence digitale à Marseille propose des services tels que le développement d’applications web, la création de plateformes web sur mesure, le référencement, et bien d’autres solutions web.",
  },
  {
    summary: "J’ai entendu parler d’agences spécialisées dans la création de sites vitrines. De quoi s’agit-il ?",
    body: "Un site vitrine est un site web qui présente votre entreprise, vos services ou produits. Il s’agit d’une « vitrine » digitale de votre activité. Si vous cherchez à créer un tel site, certaines agences à Marseille sont spécialisées dans ce domaine.",
  },
  {
    summary: "Comment est fixé le prix pour la création d’un site internet à Marseille ?",
    body: "Le tarif dépend de plusieurs facteurs : la complexité du site, les fonctionnalités souhaitées, le CMS utilisé, etc. Il est recommandé de demander un devis détaillé à l’agence pour avoir une idée claire des coûts.",
  },
];

export const reviews: Review[] = [
  {
    text: "« Jonathan et son équipe gère notre SEO, très bon résultats et très bonne communication je recommande »",
    author: "Juste Moi",
  },
  {
    text: "« Merci à Jonathan pour ce service incroyablement rapide. À partir de maintenant je passe par vous pour mon site. »",
    author: "Yohann Pejon (Yohann)",
  },
  {
    text: "« J’ai réalisé une immersion professionnelle d’une semaine chez Simplement. C’était une expérience géniale. Jonathan est très professionnel, passionné, dynamique, arrangeant et généreux ! »",
    author: "Emma Pourcel",
  },
  {
    text: "« L’équipe est au top, toujours là a rendre service. Merci pour tous ces conseils marketing et les avancées web fait sur mon site. Je recommande. »",
    author: "Corneliu VOROSAN",
  },
  {
    text: "« Respect du délai et du budget, pleins de conseils business. Je recommande leur expertise pour les lancements de projets »",
    author: "Emy Vaillancourt",
  },
  {
    text: "« Un excellent travail ! Nous avons fait appel à leur service pour améliorer notre site internet, nous sommes entièrement satisfait du résultat. Je recommande leur service »",
    author: "Micro Crèche ZICRECHE",
  },
  {
    text: "« Nous avons fait appel à l’agence Simplement pour la création de 2 sites internet et nous sommes très satisfaits ! Équipe au top, réactive, flexible et à l’écoute. Tarifs compétitifs et SAV parfait. »",
    author: "IRH By ACT-ON GROUP",
  },
];

export const cases: CaseStudy[] = [
  {
    slug: "frate-mate",
    title: "Fraté Maté",
    excerpt:
      "Spécialiste du maté argentin, Fraté Maté souhaitait se démarquer dans un marché dominé par de grands acteurs du thé. Simplement a redéfini leur structure de site pour une distinction claire entre contenu informatif et transactionnel, optimisé leur SEO avec du contenu ciblé, et établi des partenariats stratégiques pour augmenter le trafic qualifié.",
    image: "/assets/image-etude-de-cas-simplementv2-copie.jpg",
    imageAlt: "Fraté Maté",
    tags: ["seo", "site"],
    tagLabels: ["SEO", "Site"],
    href: "/live/simplement/case-studies/frate-mate",
  },
  {
    slug: "motivart",
    title: "Motivart",
    excerpt:
      "Marque spécialisée en décoration d’intérieur, Motivart cherchait à accroître ses ventes. Simplement a remédié au faible taux de conversion en redessinant les avatars clients via des enquêtes, en humanisant la marque à travers des histoires captivantes liées à chaque collection, en refondant le site et en optimisant leurs publicités et campagnes d’e-mails.",
    image: "/assets/motiv-art-etude-de-cas.jpg",
    imageAlt: "Motivart",
    tags: ["site", "ads"],
    tagLabels: ["Site", "Ads"],
    href: "/live/simplement/case-studies/motivart",
  },
  {
    slug: "welcomeurope",
    title: "Welcomeurope",
    excerpt:
      "Le cabinet de levée de fonds public Welcomeurope a fait appel à nos services pour une refonte complète de leur site. Simplement a transformé leur site en une plateforme moderne et efficace, reflétant leur expertise en matière de levée de fonds tout en optimisant l’expérience utilisateur pour attirer et rassurer leurs clients potentiels.",
    image: "/assets/welcomeurope-etude-de-cas.jpg",
    imageAlt: "Welcomeurope",
    tags: ["site"],
    tagLabels: ["Site", "Refonte"],
    href: "/live/simplement/case-studies/welcomeurope",
  },
  {
    slug: "sofranel",
    title: "SOFRANEL",
    excerpt:
      "Expert en contrôle non destructif (CND) depuis 1958, SOFRANEL nous a confié la refonte de son site. Nous avons créé une plateforme moderne, reflétant leur expertise et mettant en avant leurs solutions avancées, comme le TOFD et les ultrasons multi-éléments. Ce nouveau site renforce leur attractivité et fidélise leurs clients.",
    image: "/assets/sofranel-etude-de-cas-preview.jpg",
    imageAlt: "SOFRANEL",
    tags: ["site"],
    tagLabels: ["Site", "Refonte"],
    href: "/live/simplement/case-studies/sofranel",
  },
  {
    slug: "welcomeurope-ux",
    title: "Welcomeurope — +300 % leads",
    excerpt:
      "Optimisation de la navigation, des CTA et de la présentation des informations. Résultat : une augmentation de 300 % des leads en dix mois grâce à des tests utilisateurs et la correction des points de friction.",
    image: "/assets/welcomeurope-etude-de-cas-2.jpg",
    imageAlt: "Welcomeurope UX",
    tags: ["site", "ux"],
    tagLabels: ["UX", "Site"],
    href: "/live/simplement/case-studies/welcomeurope-ux",
  },
];

export const caseFilters = [
  { id: "all", label: "Tous" },
  { id: "seo", label: "SEO" },
  { id: "site", label: "Site" },
  { id: "ads", label: "Ads" },
] as const;

export const works: Work[] = [
  {
    slug: "modern-vape-cbd",
    title: "Modern Vape CBD",
    excerpt: "Boutique en ligne CBD & vapotage : catalogue clair, parcours d’achat fluide, image premium.",
    image: "/assets/modernvapecbd.jpg",
    imageAlt: "Site e-commerce Modern Vape CBD",
    categories: ["ecommerce"],
    tagLabels: ["E-commerce", "Bien-être"],
    href: "#",
  },
  {
    slug: "lyde-conseil",
    title: "Lyde Conseil",
    excerpt:
      "Cabinet SI & AMOA : site institutionnel qui rassure et met en avant la double expertise métier / tech.",
    image: "/assets/lyde-conseil.jpg",
    imageAlt: "Site vitrine Lyde Conseil",
    categories: ["vitrine", "services"],
    tagLabels: ["Site vitrine", "Conseil"],
    href: "#",
  },
  {
    slug: "hey-hr",
    title: "Hey HR!",
    excerpt:
      "Conseil RH & SIRH : offres lisibles, positionnement clair sur l’adoption, l’IA et l’expérience collaborateur.",
    image: "/assets/hey-hr.jpg",
    imageAlt: "Site Hey HR",
    categories: ["vitrine", "services"],
    tagLabels: ["Site vitrine", "RH"],
    href: "#",
  },
  {
    slug: "prepamental",
    title: "Prepamental",
    excerpt: "Préparation mentale & gestion du stress : services, formations et ateliers présentés avec clarté.",
    image: "/assets/prepamental.jpg",
    imageAlt: "Site Prepamental",
    categories: ["vitrine", "services"],
    tagLabels: ["Site vitrine", "Santé"],
    href: "#",
  },
  {
    slug: "clairciel",
    title: "ClairCiel",
    excerpt: "Agence web Nice : site sur mesure orienté conversion, SEO et accompagnement personnalisé.",
    image: "/assets/clairciel.jpg",
    imageAlt: "Mockup site ClairCiel",
    categories: ["vitrine"],
    tagLabels: ["Site vitrine", "Agence"],
    href: "#",
  },
  {
    slug: "cresp",
    title: "CRESP Formations",
    excerpt: "Organisme de formation : programmes, objectifs pédagogiques et parcours d’inscription lisibles.",
    image: "/assets/cresp.jpg",
    imageAlt: "Site CRESP Formations",
    categories: ["vitrine", "services"],
    tagLabels: ["Site vitrine", "Formation"],
    href: "#",
  },
  {
    slug: "seeqle",
    title: "Seeqle",
    excerpt: "Plateforme talents / entreprises : interface moderne, matching et parcours candidat / recruteur.",
    image: "/assets/seeqle.jpg",
    imageAlt: "Plateforme Seeqle",
    categories: ["vitrine", "services"],
    tagLabels: ["Plateforme", "Recrutement"],
    href: "#",
  },
  {
    slug: "gardiens-des-cles",
    title: "Les Gardiens des Clés",
    excerpt: "Conciergerie locations saisonnières Marseille / Aix / Cassis : offre premium, confiance propriétaire.",
    image: "/assets/gardiens-des-cles.jpg",
    imageAlt: "Site Les Gardiens des Clés",
    categories: ["vitrine", "services"],
    tagLabels: ["Site vitrine", "Tourisme"],
    href: "#",
  },
];

export const workFilters = [
  { id: "all", label: "Tous" },
  { id: "vitrine", label: "Site vitrine" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "services", label: "Services" },
] as const;

export const team: TeamMember[] = [
  {
    name: "Hugo L",
    role: "Consultant SEO / SEA",
    photo: "/assets/Team1-r0qceqwinwkceitsup6hd27otmegbrx3bglsbim69s.jpg",
    photoAlt: "Hugo L",
  },
  {
    name: "Jonathan C",
    role: "Directeur IA & Delivery",
    photo: "/assets/team2-r0qcel9hiwcmgv1zrmqpy3mx9b691lapaoovfuujb4.jpg",
    photoAlt: "Jonathan C",
  },
  {
    name: "Edwin P",
    role: "Directeur Commercial & stratégie",
    photo: "/assets/team3-r0qcf34f4r12lgc1vcgmrh4ojmq83u9lp533k4420w.jpg",
    photoAlt: "Edwin P",
  },
  { name: "Supriya P", role: "Webdesign UX / UI", initials: "SP" },
  { name: "Romane M", role: "Cheffe de projet web & Responsable SEO", initials: "RM" },
  { name: "Gaetan P", role: "Développeur web full stack", initials: "GP" },
  { name: "Manon D", role: "Cheffe de projet web & Responsable SEA", initials: "MD" },
];

export const homeTeamPhotos = [
  {
    src: "/assets/Team1-r0qceqwinwkceitsup6hd27otmegbrx3bglsbim69s.jpg",
    alt: "Membre de l’équipe Simplement",
  },
  {
    src: "/assets/team2-r0qcel9hiwcmgv1zrmqpy3mx9b691lapaoovfuujb4.jpg",
    alt: "Membre de l’équipe Simplement",
  },
  {
    src: "/assets/team3-r0qcf34f4r12lgc1vcgmrh4ojmq83u9lp533k4420w.jpg",
    alt: "Membre de l’équipe Simplement",
  },
];

export const worksQuotes: Quote[] = [
  {
    text: "« Meilleure agence web que j’ai pu rencontrer. Les équipes sont super réactives et le suivi post-presta est top. »",
    author: "Julien D.",
    context: "Savane et Mousson",
  },
  {
    text: "« Une parfaite compréhension de nos besoins, une réactivité au top niveau. »",
    author: "Kevork D.",
    context: "Adoption",
  },
  {
    text: "« Équipe dynamique qui a su répondre à nos besoins et qui continue d’assurer un suivi régulier. »",
    author: "Christophe",
    context: "E-commerce",
  },
];

export const contactQuotes: Quote[] = [
  {
    text: "« Jonathan et son équipe gèrent notre SEO — très bons résultats et très bonne communication. Je recommande. »",
    author: "Client Google",
    context: "SEO",
  },
  {
    text: "« Respect du délai et du budget, plein de conseils business. Je recommande leur expertise pour les lancements. »",
    author: "Client Google",
    context: "Lancement",
  },
  {
    text: "« Équipe au top, réactive, flexible et à l’écoute. Un vrai bonheur — tarifs compétitifs, SAV parfait. »",
    author: "IRH By ACT-ON GROUP",
  },
];

export const rdvQuotes: Quote[] = [
  {
    text: "« Merci à Jonathan pour ce service incroyablement rapide. À partir de maintenant je passe par vous pour mon site. »",
    author: "Client Google",
  },
  {
    text: "« L’équipe est au top, toujours là à rendre service. Merci pour tous ces conseils marketing. »",
    author: "Client Google",
  },
];

export const contactNeedOptions = [
  "Création de site",
  "Refonte",
  "Maintenance",
  "SEO",
  "Google Ads / Meta Ads",
  "HubSpot / email marketing",
  "Shopify",
  "Accompagnement IA",
  "Autre",
] as const;
