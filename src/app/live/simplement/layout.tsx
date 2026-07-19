import type { Metadata } from "next";
import { CookieBanner } from "@/components/simplement/CookieBanner";
import { ProgressBar } from "@/components/simplement/ProgressBar";
import { SiteFooter } from "@/components/simplement/SiteFooter";
import { SiteHeader } from "@/components/simplement/SiteHeader";
import "@/styles/simplement/tokens.css";
import "@/styles/simplement/site.css";

export const metadata: Metadata = {
  title: "Simplement — Agence web Marseille",
  description:
    "Agence web à Marseille, spécialiste en création de site internet performant. Sites pensés pour générer des leads.",
};

export default function SimplementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="simplement-root" data-demo="simplement">
      <ProgressBar />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <CookieBanner />
    </div>
  );
}
