import type { Metadata } from "next";
import { HTML } from "@/components/simplement-v2/fragments/caseStudies";

export const metadata: Metadata = {
  title: "Études de cas clients — Case Studies | Simplement",
  description: "Refonte, SEO, acquisition : les études de cas Simplement, du brief au résultat mesuré.",
};

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
