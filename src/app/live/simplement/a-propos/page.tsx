import type { Metadata } from "next";
import { HTML } from "@/components/simplement-v2/fragments/aPropos";

export const metadata: Metadata = {
  title: "À propos — L'équipe Simplement | Agence web Marseille",
  description: "L'équipe Simplement : stratégie, design, tech, SEO, Ads et IA, à Marseille et en remote.",
};

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
