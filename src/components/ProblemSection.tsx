"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: "Laborwerte sind schwer zu deuten",
    body: "Klassische Befunde liefern Dutzende Werte mit Referenzbereichen — aber keinen Kontext, keine Prioritäten und keine konkreten nächsten Schritte.",
    color: "#ef4444",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Einmalige Tests zeigen keine Verläufe",
    body: "Gesundheit ist ein Muster über Zeit. Ohne wiederholte Messung ist nicht erkennbar, ob sich Werte verbessern, verschlechtern oder stagnieren.",
    color: "#ef4444",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Allgemeine Ratschläge sagen nicht, was zuerst zu verbessern ist",
    body: "Ohne persönliche Priorisierung wissen die meisten Menschen nicht, worauf sie sich fokussieren sollen — also fokussieren sie sich auf nichts.",
    color: "#ef4444",
  },
];

export default function ProblemSection() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 px-6" style={{background:"#f0f4fa"}}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14 observe-fade">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-red-600 text-xs font-semibold uppercase tracking-widest">Das Problem</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#0a1628] tracking-[-0.03em] leading-tight max-w-3xl mx-auto">
            Die meisten Menschen sehen ihre Blutwerte erst,{" "}
            <span className="text-red-500">wenn etwas nicht mehr stimmt.</span>
          </h2>
          <p className="text-[#475569] mt-5 text-xl max-w-2xl mx-auto leading-relaxed">
            Prävention scheitert häufig daran, dass Laborergebnisse schwer verständlich sind, selten über Zeit verfolgt werden und nicht in konkrete nächste Schritte übersetzt werden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div key={i} className="rounded-2xl p-7 border card-hover observe-fade"
              style={{background:"#ffffff", borderColor:"rgba(0,0,0,0.06)", transitionDelay:`${i*100}ms`}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{background:`${p.color}12`, color:p.color, border:`1px solid ${p.color}22`}}>
                {p.icon}
              </div>
              <h3 className="text-[#0a1628] font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
