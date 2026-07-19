import type { Metadata } from "next";
import "@/styles/dashboard/styles.css";

export const metadata: Metadata = {
  title: "Relais — Voice · Content ops",
  description: "Dashboard ops Relais — file d’appels, contenus live, pilotage.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-root" data-demo="relais">
      {children}
    </div>
  );
}
