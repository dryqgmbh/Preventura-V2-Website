"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type CellValue = boolean | "partial";

const rows: { label: string; lab: CellValue; app: CellValue; preventura: CellValue }[] = [
  { label: "At-home testing", lab: false, app: false, preventura: true },
  { label: "Lab-based biomarkers", lab: true, app: false, preventura: true },
  { label: "Health Score", lab: false, app: "partial", preventura: true },
  { label: "Prioritized actions", lab: false, app: false, preventura: true },
  { label: "Trend tracking", lab: false, app: "partial", preventura: true },
  { label: "Retest recommendation", lab: false, app: false, preventura: true },
  { label: "App-first experience", lab: false, app: "partial", preventura: true },
  { label: "Certified lab analysis", lab: true, app: false, preventura: true },
];

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-yellow-500/15 flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-bold">~</span>
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-white/20" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default function ComparisonSection() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-[900px] mx-auto" ref={ref}>
        <div className="text-center mb-12 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            More than a{" "}
            <span className="gradient-text">lab report.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Most people have either raw lab data or vague wellness apps. Preventura is the integrated layer between them.
          </p>
        </div>

        <div className="glass rounded-2xl border border-white/[0.06] overflow-hidden observe-fade" style={{ transitionDelay: "100ms" }}>
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-white/[0.06]">
            <div className="p-4" />
            {[
              { label: "Traditional\nLab Report", sub: "" },
              { label: "Generic\nHealth App", sub: "" },
              { label: "Preventura", sub: "All-in-one", highlight: true },
            ].map((col, i) => (
              <div
                key={i}
                className={`p-4 text-center border-l border-white/[0.06] ${col.highlight ? "bg-blue-600/10" : ""}`}
              >
                <div className={`font-bold text-sm whitespace-pre-line ${col.highlight ? "text-white" : "text-white/50"}`}>
                  {col.label}
                </div>
                {col.sub && (
                  <div className="text-blue-400 text-xs mt-0.5">{col.sub}</div>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
            >
              <div className="p-4 text-white/60 text-sm font-medium">{row.label}</div>
              <div className="p-4 border-l border-white/[0.04] flex items-center justify-center">
                <Cell value={row.lab} />
              </div>
              <div className="p-4 border-l border-white/[0.04] flex items-center justify-center">
                <Cell value={row.app} />
              </div>
              <div className="p-4 border-l border-white/[0.04] bg-blue-600/[0.05] flex items-center justify-center">
                <Cell value={row.preventura} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center observe-fade" style={{ transitionDelay: "200ms" }}>
          <a href="#early-access" className="btn-primary">
            Start with Preventura
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
