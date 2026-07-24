import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_HTML } from "@/components/simplement-v2/fragments/cases";

const META: Record<string, { title: string; description: string }> = {
  "sofranel": { title: "Étude de cas SOFRANEL — Refonte UI/UX | Simplement", description: "Refonte du site SOFRANEL : plateforme moderne pour l'expert du contrôle non destructif depuis 1958." },
  "frate-mate": { title: "Étude de cas Fraté Maté — SEO &amp; structure e-commerce | Simplement", description: "Restructuration, quick wins SEO et netlinking pour positionner la référence du maté en France." },
  "motivart": { title: "Étude de cas Motivart — Conversion &amp; storytelling | Simplement", description: "Avatars clients, storytelling des collections, refonte conversion et optimisation Ads / e-mail pour Motivart." },
  "welcomeurope": { title: "Étude de cas Welcomeurope — Refonte UI/UX | Simplement", description: "Refonte UX Welcomeurope : +300 % de leads en dix mois après optimisation du parcours." },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(CASE_HTML).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return META[slug] ?? { title: "Étude de cas | Simplement" };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const html = CASE_HTML[slug];
  if (!html) notFound();
  return <main id="main" dangerouslySetInnerHTML={{ __html: html }} />;
}
