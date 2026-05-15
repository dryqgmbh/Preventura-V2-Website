import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preventura – Deine digitale Präventionsplattform",
  description:
    "Preventura kombiniert Heimtests zur Biomarker-Analyse, zertifizierte Laborauswertung und eine Premium-App — für einen klaren Gesundheitswert, priorisierte Erkenntnisse und einen persönlichen Retest-Plan.",
  keywords:
    "Biomarker Test, Gesundheitswert, Prävention, Heimbluttest, Gesundheits-Tracking, ApoB, Vitamin D, hs-CRP, Laborbefund App",
  openGraph: {
    title: "Preventura – Verstehe deine Gesundheit, bevor Probleme sichtbar werden.",
    description:
      "Heimtest, Laboranalyse, App-Auswertung und Preventura Gesundheitswert — alles in einer Plattform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
