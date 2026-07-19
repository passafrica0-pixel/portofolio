import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "@/styles/main.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${sans.variable} ${mono.variable} portfolio-root`}>
      {children}
    </div>
  );
}
