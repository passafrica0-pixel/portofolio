import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thierno Barry — Portfolio",
  description:
    "Portfolio de Thierno Barry — développeur fullstack. Démos Relais & Simplement, dossier de compétences.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
