import type { Metadata } from "next";
import { CHROME_BOTTOM, CHROME_TOP } from "@/components/simplement-v2/fragments/chrome";
import { SimplementRuntime } from "@/components/simplement-v2/SimplementRuntime";
import "@/styles/simplement/site.css";
import "@/styles/simplement/pages.css";

export const metadata: Metadata = {
  title: "Simplement — Agence web Marseille",
  description:
    "Agence web à Marseille, spécialiste en création de site internet performant. Sites pensés pour générer des leads.",
};

/**
 * Layout v2 « Le flux ». Le chrome partagé (rideau, curseur, dock, drawer,
 * footer, cookie) provient directement des maquettes validées : markup statique
 * rendu tel quel, comportements rejoués par SimplementRuntime après hydratation.
 */
export default function SimplementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="simplement-root" data-demo="simplement">
      <div dangerouslySetInnerHTML={{ __html: CHROME_TOP }} />
      {children}
      <div dangerouslySetInnerHTML={{ __html: CHROME_BOTTOM }} />
      <SimplementRuntime />
    </div>
  );
}
