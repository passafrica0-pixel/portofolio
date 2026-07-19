import type { Project } from "./types";

export const liveDemos: Project[] = [
  {
    id: "simplement",
    title: "Refonte Simplement",
    role: "Site vitrine & parcours client",
    badge: "Démo en ligne",
    summary:
      "Refonte complète d’une présence digitale : case studies, réalisations, à propos, contact et prise de rendez-vous guidée. Design system soigné, parcours clair pour convertir un visiteur en lead.",
    value:
      "Une vitrine crédible et un funnel RDV sans friction — prête à être présentée à un client ou un partenaire.",
    stack: ["Next.js", "TypeScript", "CSS design system", "Maquettes HTML"],
    href: "/live/simplement",
    live: true,
    inScene: true,
    color: "#3A86FF",
    position: [1.35, 0.85, 0.35],
    theme: {
      brand: "simply",
      motif: "canvas",
      bg: "#1a3a7a",
      bg2: "#3A86FF",
      ink: "#ffffff",
      accent: "#9ec2ff",
      tagline: "Parcours web · conversion · design system",
    },
  },
  {
    id: "relais",
    title: "Relais",
    role: "Dashboard ops voix × studio contenu",
    badge: "Démo en ligne",
    summary:
      "Interface de pilotage call center IA : files d’appels, monitoring live, wallboard, pipeline éditorial, actions opérateurs (prise de main, TTS, kanban).",
    value:
      "Montrer concrètement comment une console ops dense peut rester lisible — et actionnable.",
    stack: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    href: "/live/dashboard",
    live: true,
    inScene: true,
    color: "#F07838",
    position: [-0.15, 1.05, 0.9],
    theme: {
      brand: "relais",
      motif: "ops",
      bg: "#1c1410",
      bg2: "#F07838",
      ink: "#fff8f2",
      accent: "#ffb07a",
      tagline: "Temps réel · voix · studio contenu",
    },
  },
];

export const dossierProjects: Project[] = [
  {
    id: "odoo",
    title: "ERP Odoo",
    role: "Intégrateur · versions 16 à 19",
    badge: "Production",
    summary:
      "Reprise et mise à niveau de l’intégration transporteur GLS, modules métier sur-mesure (CRM, ventes, inventaire, e-commerce, signature). Cohérence maintenue sur plusieurs versions en parallèle, déploiement Docker.",
    value:
      "Flux d’expédition à nouveau fiable, ERP aligné sur les process réels du client sans rupture pour les utilisateurs.",
    stack: ["Odoo 16–19", "Python", "Docker", "PostgreSQL", "API GLS"],
    href: null,
    live: false,
    inScene: true,
    color: "#875A7B",
    position: [0.4, -0.55, -0.4],
    theme: {
      brand: "odoo",
      motif: "modules",
      bg: "#4a3144",
      bg2: "#875A7B",
      ink: "#ffffff",
      accent: "#e8d4e0",
      tagline: "ERP · GLS · modules sur-mesure",
    },
  },
  {
    id: "crm-immo",
    title: "CRM Immobilier",
    role: "Développeur · Laravel 12 + Filament 4",
    badge: "Production",
    summary:
      "Panneau Filament complet : contrats PDF automatisés, diffusion vidéo multi-plateformes, médiathèque, cartographie, recherche Typesense, multilingue DeepL, IA d’assistance intégrée.",
    value:
      "Moins de paperasse pour les agents, plus de temps sur la relation client — base testée et supervisée en production.",
    stack: ["Laravel 12", "Filament 4", "TCPDF", "Typesense", "Laravel AI"],
    href: null,
    live: false,
    inScene: true,
    color: "#FF2D20",
    position: [2.1, -0.15, -0.85],
    theme: {
      brand: "laravel",
      motif: "map",
      bg: "#3b1010",
      bg2: "#FF2D20",
      ink: "#fff5f4",
      accent: "#ffb4ae",
      tagline: "Filament · PDF · cartographie · IA",
    },
  },
  {
    id: "maildrop",
    title: "Maildrop",
    role: "Développeur · Next.js + Flutter offline",
    badge: "Production",
    summary:
      "Inventaire de biens et canvassing terrain : web Next.js + mobile Flutter hors-ligne, GPS, sync bidirectionnelle, descriptions photo par IA.",
    value:
      "Équipes terrain autonomes sans réseau ; managers avec vision réelle de couverture et de performance.",
    stack: ["Next.js", "Prisma", "Flutter", "SQLite", "Firebase Auth"],
    href: null,
    live: false,
    inScene: false,
    color: "#54C5F8",
    position: [0, 0, 0],
    theme: {
      brand: "flutter",
      motif: "map",
      bg: "#0b2a3d",
      bg2: "#54C5F8",
      ink: "#f0faff",
      accent: "#b8eaff",
      tagline: "Offline-first · GPS · sync terrain",
    },
  },
  {
    id: "brochures",
    title: "Brochures Drag & Drop",
    role: "Développeur · Next.js",
    badge: "Production",
    summary:
      "Éditeur visuel autonome pour composer brochures (blocs, images, textes) sans passer par un cycle design/dev à chaque mise à jour.",
    value:
      "Autonomie marketing / commercial — supports actualisés sans ticket technique.",
    stack: ["Next.js", "Éditeur drag & drop"],
    href: null,
    live: false,
    inScene: false,
    color: "#111111",
    position: [0, 0, 0],
    theme: {
      brand: "nextjs",
      motif: "layers",
      bg: "#111111",
      bg2: "#333333",
      ink: "#ffffff",
      accent: "#a3a3a3",
      tagline: "Éditeur visuel · autonomie marketing",
    },
  },
  {
    id: "crm-php",
    title: "CRM PHP natif",
    role: "Développeur · MVC",
    badge: "Production",
    summary:
      "Programme cadeaux collaborateurs (points → boutique → livraison) et prospection téléphonique assistée par IA, sur CRM maison restructuré en MVC.",
    value:
      "Fidélisation interne prête à l’emploi et relances qui tournent sans mobiliser un commercial à chaque appel.",
    stack: ["PHP", "MVC", "Webhooks", "API", "IA prospection"],
    href: null,
    live: false,
    inScene: false,
    color: "#777BB4",
    position: [0, 0, 0],
    theme: {
      brand: "php",
      motif: "hex",
      bg: "#2f3150",
      bg2: "#777BB4",
      ink: "#f4f4ff",
      accent: "#c5c8e8",
      tagline: "MVC · fidélisation · IA téléphonique",
    },
  },
  {
    id: "wakago",
    title: "Wakago",
    role: "Lead developer · NestJS + MongoDB",
    badge: "Lead",
    summary:
      "Plateforme de transport type VTC locale : prebooking, trafic temps réel, gamification, choix chauffeur, WebSockets, files Redis/Bull, stockage S3.",
    value:
      "Une alternative locale complète, pensée pour monter en charge et évoluer dans la durée.",
    stack: ["NestJS 11", "MongoDB", "Socket.io", "Redis", "AWS S3"],
    href: null,
    live: false,
    inScene: true,
    color: "#E0234E",
    position: [1.0, 0.2, -1.2],
    theme: {
      brand: "nestjs",
      motif: "nodes",
      bg: "#1a0a10",
      bg2: "#E0234E",
      ink: "#fff5f7",
      accent: "#ff8aa8",
      tagline: "Lead · temps réel · files · scale",
    },
  },
  {
    id: "expertconnect",
    title: "ExpertConnect",
    role: "Développeur · microservices + Kafka",
    badge: "Architecture",
    summary:
      "EdTech en 3 microservices (mise en relation, coaching voix, paiements) : Kafka, Elasticsearch, Stripe/PayPal, OpenAI, Twilio/Vonage.",
    value:
      "Architecture découplée pour sessions live et paiements sous charge, sans point de défaillance unique.",
    stack: ["NestJS", "Kafka", "Prisma", "Stripe", "Elasticsearch"],
    href: null,
    live: false,
    inScene: true,
    color: "#231F20",
    position: [2.55, 1.2, -0.55],
    theme: {
      brand: "kafka",
      motif: "nodes",
      bg: "#121212",
      bg2: "#3d3a3a",
      ink: "#f5f5f5",
      accent: "#c4c4c4",
      tagline: "Microservices · Kafka · paiements",
    },
  },
];

export const projects: Project[] = [...liveDemos, ...dossierProjects];

export const profile = {
  name: "Thierno Barry",
  shortName: "Thierno",
  role: "Développeur fullstack",
  tagline:
    "Je reprends, j’intègre et je fais tenir des systèmes en production — avec une exécution augmentée par l’IA.",
  pitch:
    "Sept dossiers clients (ERP, CRM, mobile, transport, EdTech) et deux démos en ligne pour juger le rendu sans attendre un NDA.",
  stack: [
    "Odoo",
    "Laravel / Filament",
    "NestJS",
    "Next.js",
    "Flutter",
    "PHP",
    "PostgreSQL",
    "MongoDB",
    "Kafka",
    "Redis",
    "Prisma",
    "IA appliquée",
  ],
};
