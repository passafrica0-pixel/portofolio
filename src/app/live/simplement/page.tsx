import type { Metadata } from "next";
import { HTML } from "@/components/simplement-v2/fragments/home";

export const metadata: Metadata = {
  title: "Agence Web Marseille – Des sites pensés pour générer des leads | Simplement",
  description: "Agence web à Marseille. Création de site internet sur mesure, référencement et acquisition : des sites conçus pour ramener des clients, pas pour décorer.",
};

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
