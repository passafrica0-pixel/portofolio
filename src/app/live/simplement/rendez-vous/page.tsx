import type { Metadata } from "next";
import { HTML } from "@/components/simplement-v2/fragments/rendezVous";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — Simplement | Agence web Marseille",
  description: "Réservez 30 minutes avec l'équipe Simplement : visio ou téléphone, proposition claire sous 24h.",
};

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
