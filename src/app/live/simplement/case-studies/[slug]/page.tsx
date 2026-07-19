import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseDetailView } from "@/components/simplement/CaseDetailView";
import {
  getCaseDetail,
  getCaseDetailSlugs,
} from "@/lib/simplement/case-details";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCaseDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getCaseDetail(slug);
  if (!detail) return { title: "Étude de cas | Simplement" };
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = getCaseDetail(slug);
  if (!detail) notFound();
  return <CaseDetailView detail={detail} />;
}
