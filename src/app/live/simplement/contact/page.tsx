import type { Metadata } from "next";
import { HTML } from "@/components/simplement-v2/fragments/contact";

export const metadata: Metadata = {
  title: "Contact — Simplement | Agence web Marseille",
  description: "Contactez Simplement : téléphone, e-mail ou formulaire. Devis sous 24h.",
};

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
