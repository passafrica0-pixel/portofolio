export type CaseStep = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type CaseDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  lede: string;
  story: string;
  objective: string;
  challenges: string[];
  methodIntro?: string;
  steps: CaseStep[];
  beforeAfter?: { before: string; after: string; beforeAlt: string; afterAlt: string };
  galleryTitle?: string;
  galleryEyebrow?: string;
  gallery?: { src: string; alt: string; width?: number; height?: number }[];
  galleryClass?: string;
  galleryWide?: { src: string; alt: string }[];
  metric?: { value: string; label: string };
  ctaTitle: string;
  ctaDescription: string;
  navLabel: string;
  navHint: string;
};

export const caseDetails: CaseDetail[] = [
  {
    slug: "frate-mate",
    title: "Simple au service de Fraté Maté",
    metaTitle: "Étude de cas Fraté Maté — SEO & structure e-commerce | Simplement",
    metaDescription:
      "Comment Simplement a restructuré le site Fraté Maté, optimisé le SEO et développé le netlinking pour gagner en trafic qualifié.",
    tags: ["SEO", "E-commerce", "Netlinking"],
    lede: "Restructuration du site, quick wins SEO et partenariats d’affiliation pour positionner la référence du maté en France face aux grands acteurs du thé.",
    story:
      "Fraté Maté est un site e-commerce spécialisé dans le maté (thé argentin). Méconnue en France, l’entreprise doit éduquer les internautes sur les bienfaits et la préparation de cette boisson. Ils commercialisent leurs produits sur leur site, chez Monoprix et sur Amazon.",
    objective:
      "Devenir le leader et la référence du maté en France — performer sur Meta, Google Ads et SEO, et viser le top 3 des plus gros mots-clés de leur niche.",
    challenges: [
      "Gros acteurs du thé arrivés sur la tendance maté",
      "Ils ont pris les premières positions grâce à leur autorité",
      "Site Fraté Maté non optimisé SEO, structure inadéquate",
    ],
    methodIntro: "L’équipe Simplement a commencé à travailler sur le site en juin 2022.",
    steps: [
      {
        title: "Changement de la structure du site",
        body: "Nous avons dissocié la partie blog et les « money pages » (pages à fort volume de recherche destinées à convertir). Les mots-clés informationnels (ex. : comment préparer le maté ?) vont dans le blog ; les mots-clés transactionnels ont leur propre page, liée à l’accueil.",
      },
      {
        title: "Travail on-site et quick wins",
        bullets: [
          "Optimisation des titres, balises Title et méta descriptions des articles existants",
          "Correction des erreurs 404",
          "Ajout des balises Alt manquantes",
          "Maillage interne entre articles et pages",
        ],
      },
      {
        title: "Identification de nouvelles opportunités",
        body: "Beaucoup de mots-clés n’étaient pas couverts. Nous avons identifié une vingtaine de mots-clés intéressants (25 % transactionnels) à difficulté faible ou moyenne pour obtenir du trafic rapidement.",
      },
      {
        title: "Rédaction d’articles, pages et descriptions produits",
        body: "Rédaction et publication en interne du nouveau contenu. Sur les fiches produits déjà bien positionnées, ajout de texte répondant aux questions courantes des internautes.",
      },
      {
        title: "Campagne de netlinking (backlinks)",
        body: "Partenariats avec des sites d’affiliation qui envoyaient du trafic vers Amazon : redirection vers Fraté Maté contre une commission plus élevée. Puis campagne de netlinking sur les pages stratégiques, avec variation des ancres.",
      },
    ],
    beforeAfter: {
      before: "/assets/CleanShot-2023-08-02-at-16.23.48at2x-1024x290.jpg",
      after: "/assets/CleanShot-2023-08-02-at-16.24.13at2x-1024x283.jpg",
      beforeAlt: "Positions SEO avant intervention",
      afterAlt: "Positions SEO après intervention",
    },
    galleryEyebrow: "Univers marque",
    galleryTitle: "Visuels produit",
    galleryClass: "case-gallery case-gallery--products",
    gallery: [
      { src: "/assets/thermos-bambou-pack-2023.webp", alt: "Pack thermos bambou Fraté Maté" },
      { src: "/assets/collection-the-home-page.webp", alt: "Collection thé — page d’accueil" },
      { src: "/assets/foot-energie_1.jpg", alt: "Produit Fraté Maté" },
      { src: "/assets/image-etude-de-cas-simplementv2-copie.jpg", alt: "Visuel étude de cas Fraté Maté" },
    ],
    ctaTitle: "Un résultat SEO comme Fraté Maté ?",
    ctaDescription: "On cadre vos mots-clés, votre structure et votre plan d’acquisition en 30 minutes.",
    navLabel: "Fraté Maté",
    navHint: "SEO & structure e-commerce",
  },
  {
    slug: "motivart",
    title: "Simplement au service de Motiv-art",
    metaTitle: "Étude de cas Motivart — Conversion, storytelling & Ads | Simplement",
    metaDescription:
      "Avatars clients, storytelling des collections, refonte orientée conversion et optimisation Ads / e-mail pour Motivart.",
    tags: ["Site", "Ads", "Email", "Conversion"],
    lede: "Avatars clients, storytelling des collections, refonte orientée conversion et optimisation Ads / e-mail pour accélérer la croissance e-commerce.",
    story:
      "Motivart est une marque de décoration d’intérieur proposant des tableaux exclusifs. Conscients de l’opportunité du digital, ils vendent via leur site e-commerce et livrent dans le monde entier depuis des années.",
    objective: "Accélérer la croissance grâce au digital et générer plus de 100 000 € de CA par mois.",
    challenges: [
      "Taux de conversion trop bas pour augmenter le budget pub",
      "Panier moyen trop faible et peu d’acheteurs récurrents",
      "Campagnes AdWords peu optimisées",
      "Flows e-mail peu développés et trop génériques",
    ],
    methodIntro:
      "Avec plus de 1000 produits et une dizaine de collections créées au fil des années, Motivart n’avait pas conscience d’avoir développé de nouveaux types de prospects — quasiment un par collection.",
    steps: [
      {
        title: "Questionnaires post-achat & avatars",
        body: "Mise en place de questionnaires après l’achat pour redessiner les différents avatars clients de l’e-commerce.",
      },
      {
        title: "Storytelling des collections",
        body: "À partir des retours (« qu’est-ce qui vous a poussé à acheter ? », « pourquoi nous ? »), réécriture des histoires de collections : parcours des fondateurs, genèse des collections et des tableaux — pour créer un lien émotionnel client ↔ Motiv-art.",
      },
      {
        title: "Refonte du site orientée conversion",
        body: "Intégration d’éléments renforçant l’histoire et le lien avec les avatars. Objectif unique : augmenter le taux de conversion pour gagner de la liberté dans la gestion publicitaire.",
      },
      {
        title: "Google Ads & flows e-mail",
        body: "Amélioration des publicités Google Ads, et refonte du flow d’e-mail — un parcours par type de collection.",
      },
    ],
    galleryEyebrow: "Univers produit",
    galleryTitle: "Collections Motivart",
    galleryClass: "case-gallery case-gallery--products",
    gallery: [
      {
        src: "/assets/Untitled-1copy_419d4108-4a14-488f-9a02-2bf233e5d1f4_1800x1800.webp",
        alt: "Tableau Motivart",
      },
      {
        src: "/assets/Untitled-4copy_b0ff8036-fd7e-4d69-8a21-ddd7c045e670_1800x1800.webp",
        alt: "Tableau Motivart",
      },
      { src: "/assets/Untitled-1copy_3_1800x1800.webp", alt: "Tableau Motivart" },
      {
        src: "/assets/Untitled-2copy_a92a02ca-2f84-466e-8446-7d53fe05c897_1800x1800.webp",
        alt: "Tableau Motivart",
      },
    ],
    ctaTitle: "Boostez votre taux de conversion comme Motivart.",
    ctaDescription: "Avatars, site, Ads, e-mail — on aligne le tunnel pour vendre plus avec le même trafic.",
    navLabel: "Motivart",
    navHint: "Conversion, storytelling & Ads",
  },
  {
    slug: "welcomeurope",
    title: "Refonte UI UX Welcomeurope",
    metaTitle: "Étude de cas Welcomeurope — Refonte UI/UX | Simplement",
    metaDescription:
      "Refonte complète Welcomeurope : plateforme moderne, UX optimisée et +300 % de leads en dix mois.",
    tags: ["UX", "UI", "Refonte", "Conversion"],
    lede: "Le cabinet de levée de fonds public Welcomeurope a confié à Simplement une refonte complète : une plateforme moderne qui reflète leur expertise et rassure leurs clients potentiels.",
    story:
      "Welcomeurope accompagne les acteurs publics et privés dans la levée de fonds européens. Leur site devait mieux traduire cette expertise et faciliter le contact pour des prospects exigeants.",
    objective:
      "Transformer le site en plateforme moderne et efficace — optimiser l’expérience utilisateur pour attirer et convertir davantage de leads qualifiés.",
    challenges: [
      "Navigation et parcours peu fluides",
      "CTA et présentation d’information à clarifier",
      "Points de friction à identifier via tests utilisateurs",
    ],
    metric: { value: "+300 %", label: "de leads en dix mois après optimisation UX" },
    steps: [
      {
        title: "Refonte de l’expérience utilisateur",
        body: "Optimisation de la navigation, des appels à l’action et de la présentation des informations pour maximiser conversion et satisfaction.",
      },
      {
        title: "Tests utilisateurs",
        body: "Des tests approfondis ont permis d’identifier et de corriger les points de friction du parcours — pour affiner le design en conditions réelles.",
      },
      {
        title: "Plateforme moderne & rassurante",
        body: "Un site qui reflète l’expertise Welcomeurope en levée de fonds, tout en rassurant les clients potentiels dès les premières secondes.",
      },
    ],
    galleryEyebrow: "Livrables",
    galleryTitle: "Direction artistique & écrans",
    gallery: [
      { src: "/assets/V6-transparent.png", alt: "Direction visuelle Welcomeurope" },
      { src: "/assets/Etude-de-cas-2eme-image.png", alt: "Écran étude de cas Welcomeurope" },
      { src: "/assets/image-3-v3.png", alt: "Interface Welcomeurope" },
      { src: "/assets/Illustration-v2.png", alt: "Illustration projet Welcomeurope" },
    ],
    ctaTitle: "Une UX qui fait +300 % de leads ?",
    ctaDescription: "On audite votre parcours, vos CTA et vos frictions — puis on priorise ce qui convertit.",
    navLabel: "Welcomeurope",
    navHint: "Refonte UI/UX · +300 % leads",
  },
  {
    slug: "sofranel",
    title: "Refonte UI UX Sofranel",
    metaTitle: "Étude de cas SOFRANEL — Refonte site B2B CND | Simplement",
    metaDescription:
      "Refonte du site SOFRANEL : plateforme moderne mettant en avant TOFD et ultrasons multi-éléments.",
    tags: ["Site", "UI", "UX", "B2B"],
    lede: "Expert en contrôle non destructif (CND) depuis 1958, SOFRANEL nous a confié la refonte de son site pour refléter son expertise et mettre en avant ses solutions avancées.",
    story:
      "SOFRANEL conçoit et commercialise des solutions de contrôle non destructif depuis 1958. Leur site devait mieux incarner cette expertise technique et faciliter la découverte de leurs technologies.",
    objective:
      "Créer une plateforme moderne qui renforce l’attractivité de la marque et fidélise les clients, en valorisant notamment le TOFD et les ultrasons multi-éléments.",
    challenges: [
      "Offre technique dense à rendre lisible",
      "Image de marque à moderniser sans perdre en crédibilité",
      "Mettre en avant les solutions différenciantes (TOFD, PAUT)",
    ],
    steps: [
      {
        title: "Plateforme moderne",
        body: "Conception d’un site contemporain qui reflète l’expertise SOFRANEL et modernise la perception de la marque auprès des décideurs industriels.",
      },
      {
        title: "Mise en avant des solutions avancées",
        body: "Valorisation claire des technologies différenciantes — TOFD et ultrasons multi-éléments — pour aider les visiteurs à comprendre l’offre rapidement.",
      },
      {
        title: "Attractivité & fidélisation",
        body: "Une expérience plus claire et plus crédible pour renforcer l’attractivité commerciale et accompagner la fidélisation des clients existants.",
      },
    ],
    galleryEyebrow: "Livrables",
    galleryTitle: "Écrans & direction de la refonte",
    galleryWide: [
      {
        src: "/assets/SOF-edc_Plan-de-travail-1-scaled.jpg",
        alt: "Plan de travail refonte SOFRANEL",
      },
    ],
    gallery: [
      { src: "/assets/SOF-edc-03-scaled.jpg", alt: "Écran SOFRANEL — vue 1" },
      { src: "/assets/SOF-edc-02-scaled.jpg", alt: "Écran SOFRANEL — vue 2" },
    ],
    ctaTitle: "Une refonte B2B aussi claire que SOFRANEL ?",
    ctaDescription: "On traduit votre expertise technique en site qui convertit — sans jargon inutile.",
    navLabel: "SOFRANEL",
    navHint: "Refonte site B2B CND",
  },
];

/** Alias : carte « welcomeurope-ux » → même détail que Welcomeurope */
const aliases: Record<string, string> = {
  "welcomeurope-ux": "welcomeurope",
};

export function getCaseDetail(slug: string): CaseDetail | undefined {
  const resolved = aliases[slug] ?? slug;
  return caseDetails.find((c) => c.slug === resolved);
}

export function getCaseDetailSlugs(): string[] {
  return [...caseDetails.map((c) => c.slug), ...Object.keys(aliases)];
}
