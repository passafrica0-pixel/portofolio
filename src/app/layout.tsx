import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dex",
  description: "Dex — démos Relais & Simplement, projets sélectionnés.",
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
