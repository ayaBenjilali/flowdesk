import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FlowDesk - Plateforme de productivité et gestion de projets",
  description: "FlowDesk aide les équipes à centraliser leurs projets, suivre leurs tâches et piloter leurs performances dans un espace clair et collaboratif.",
  keywords: ["gestion de projets", "productivité équipe", "collaboration", "tableau de bord", "suivi des taches", "FlowDesk"],
  openGraph: { title: "FlowDesk - Organisez vos projets avec précision", description: "Centralisez les projets, les tâches, les objectifs et les rapports de votre équipe dans une plateforme moderne.", type: "website", locale: "fr_FR" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
