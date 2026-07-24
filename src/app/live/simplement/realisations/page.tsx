import type { Metadata } from "next";
import { HTML } from "@/components/simplement-v2/fragments/realisations";

export const metadata: Metadata = {
  title: "Nos réalisations — Portfolio sites web | Simplement",
  description: "Sites vitrine, e-commerce et plateformes livrés par Simplement, agence web à Marseille.",
};

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
