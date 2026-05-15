import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preventura – Digital Prevention Platform",
  description:
    "Preventura combines at-home biomarker testing, certified lab analysis and a premium app experience to turn your blood values into a clear Health Score, prioritized insights and a personal retest plan.",
  keywords:
    "biomarker testing, health score, preventive health, at-home blood test, health tracking, ApoB, Vitamin D, hs-CRP",
  openGraph: {
    title: "Preventura – Understand your health before problems become visible.",
    description:
      "At-home biomarker testing, certified lab analysis, app-based insights and a Preventura Health Score.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
