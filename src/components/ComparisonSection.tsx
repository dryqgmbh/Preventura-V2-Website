"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type CellValue = boolean | "partial";

const rows: { label: string; lab: CellValue; app: CellValue; preventura: CellValue }[] = [
  { label: "Heimtest", lab: false, app: false, preventura: true },
  { label: "Labor-Biomarker", lab: true, app: false, preventura: true },
  { label: "Gesundheitswert (Score)", lab: false, app: "partial", preventura: true },
  { label: "Priorisierte Maßnahmen", lab: false, app: false, preventura: true },
  { label: "Verlaufsverfolgung", lab: false, app: "partial", preventura: true },
  { label: "Retest-Empfehlung", lab: false, app: false, preventura: true },
  { label: "App-First-Erlebnis", lab: false, app: "partial", preventura: true },
  { label: "Zertifizierte Laboranalyse", lab: true, app: false, preventura: true },
];

function Cell({ value, highlight = false }: { value: CellValue; highlight?: boolean }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${highlight ? "bg-blue-500" : "bg-green-500/15"}`}>
          <svg className={`w-4 h-4 ${highlight ? "text-white" : "text-green-500"}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-yellow-500/10 flex items-center justify-center">
          <span className="text-yellow-500 text-sm font-bold">~</span>
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-black/[0.04] flex items-center justify-center">
        <svg className="w-4 h-4 text-[#cbd5e1]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default function ComparisonSection() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 px-6" style={{ background: "#f0f4fa" }}>
      <div className="max-w-[900px] mx-auto" ref={ref}>
        <div className="text-center mb-12 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Vergleich</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#0a1628] tracking-[-0.03em] leading-tight mb-4">
            Mehr als ein{" "}
            <span style={{ background: "linear-gradient(135deg, #176ADD, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Laborbericht.
            </span>
          </h2>
          <p className="text-[#475569] text-xl max-w-xl mx-auto">
            Die meisten haben entweder rohe Labordaten oder vage Wellness-Apps. Preventura ist die integrierte Schicht dazwischen.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-black/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.08)] observe-fade bg-white" style={{ transitionDelay: "100ms" }}>
          <div className="grid grid-cols-4 border-b border-black/[0.06]" style={{ background: "#f8fafc" }}>
            <div className="p-5" />
            {[
              { label: "Klassischer\nLaborbericht", dark: false },
              { label: "Generische\nGesundheits-App", dark: false },
              { label: "Preventura", dark: true },
            ].map((col, i) => (
              <div key={i} className={`p-5 text-center border-l border-black/[0.05] ${col.dark ? "bg-[#176ADD]" : ""}`}>
                <div className={`font-bold text-sm whitespace-pre-line ${col.dark ? "text-white" : "text-[#475569]"}`}>
                  {col.label}
                </div>
                {col.dark && <div className="text-blue-200 text-xs mt-0.5">All-in-one</div>}
              </div>
            ))}
          </div>

          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-4 border-b border-black/[0.04] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}`}>
              <div className="p-4 pl-5 text-[#334155] text-sm font-medium">{row.label}</div>
              <div className="p-4 border-l border-black/[0.04] flex items-center justify-center">
                <Cell value={row.lab} />
              </div>
              <div className="p-4 border-l border-black/[0.04] flex items-center justify-center">
                <Cell value={row.app} />
              </div>
              <div className="p-4 border-l border-black/[0.04] flex items-center justify-center bg-blue-50/50">
                <Cell value={row.preventura} highlight />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center observe-fade" style={{ transitionDelay: "200ms" }}>
          <a href="#fruehen-zugang"
            className="inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.3)] hover:-translate-y-0.5">
            Mit Preventura starten
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
