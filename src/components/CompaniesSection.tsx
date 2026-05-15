"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CompaniesSection() {
  const ref = useScrollReveal();
  return (
    <section id="unternehmen" className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="glass rounded-3xl border border-blue-500/15 p-10 lg:p-14 observe-fade">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Für Unternehmen</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-[-0.03em] leading-tight mb-4">
                Präventive Gesundheit für{" "}
                <span className="gradient-text">moderne Teams.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                Preventura unterstützt Unternehmen mit wiederkehrenden Mitarbeiter-Gesundheitschecks, App-basierten Insights und anonymisierten Kohorten-Berichten — wo rechtlich und ethisch angemessen.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { emoji: "🔒", text: "Individuelle Mitarbeiter-Gesundheitsdaten werden niemals an den Arbeitgeber weitergegeben." },
                  { emoji: "📊", text: "Anonymisierte Trendberichte erfordern eine Mindestkohortengröße zum Schutz der Privatsphäre." },
                  { emoji: "🔄", text: "Wiederkehrende Check-ins unterstützen langfristiges Gesundheits-Tracking der Belegschaft." },
                  { emoji: "🎁", text: "Flexible Formate: individuelle Mitarbeiter-Credits oder Gruppenprogramme." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-lg shrink-0">{item.emoji}</span>
                    <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <a href="#fruehen-zugang"
                className="inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.35)] hover:-translate-y-0.5">
                Unternehmenszugang anfragen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Wiederkehrende Check-ins", emoji: "🔄", desc: "Quartals- oder halbjährliche Panels" },
                { label: "Kohorten-Insights", emoji: "📈", desc: "Anonymisierte Gruppentrends" },
                { label: "Mitarbeiter-Credits", emoji: "🎁", desc: "Flexible Benefit-Integration" },
                { label: "Privacy-first", emoji: "🔒", desc: "DSGVO-konform by Design" },
              ].map((card, i) => (
                <div key={i} className="glass rounded-2xl p-5 border border-white/[0.06]">
                  <div className="text-2xl mb-2">{card.emoji}</div>
                  <div className="text-white font-semibold text-sm mb-1">{card.label}</div>
                  <div className="text-white/30 text-xs">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
