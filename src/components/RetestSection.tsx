"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function RetestCard() {
  return (
    <div className="rounded-3xl p-6 border border-[#176ADD]/20 max-w-sm mx-auto"
      style={{ background: "rgba(23,106,221,0.06)" }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-white font-bold text-sm">Nächste Auswertung</div>
          <div className="text-blue-400 text-xs font-semibold">In 24 Tagen</div>
        </div>
        <div className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
      </div>

      <div className="glass rounded-2xl p-4 mb-4">
        <div className="text-white/30 text-xs uppercase tracking-wider mb-2">Empfohlenes Kit</div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-500/15 rounded-xl flex items-center justify-center text-base">📦</div>
          <div>
            <div className="text-white font-semibold text-sm">Preventura Core</div>
            <div className="text-white/30 text-xs">Vollständiges Präventionspanel</div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="text-white/30 text-xs uppercase tracking-wider mb-2">Prioritäts-Marker</div>
        <div className="flex flex-wrap gap-1.5">
          {["Vitamin D", "Ferritin", "ApoB", "hs-CRP"].map((m) => (
            <span key={m} className="biomarker-tag">{m}</span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06] pt-4">
        <div className="text-white/30 text-xs uppercase tracking-wider mb-3">Testverlauf</div>
        <div className="space-y-2.5">
          {[
            { date: "Feb 2025", score: 52, label: "Test 1" },
            { date: "Apr 2025", score: 64, label: "Test 2" },
            { date: "Mai 2025", score: 76, label: "Jetzt" },
            { date: "Jun 2025", score: null, label: "Geplant" },
          ].map((entry, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${entry.score ? "bg-blue-400" : "bg-white/15"}`} />
              <span className="text-white/30 text-xs w-20">{entry.date}</span>
              <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                {entry.score && (
                  <div className="h-full rounded-full"
                    style={{ width: `${entry.score}%`, background: "linear-gradient(90deg, #176ADD, #22c55e)" }} />
                )}
              </div>
              <span className={`text-xs font-medium w-20 text-right ${entry.score ? "text-white/60" : "text-white/20"}`}>
                {entry.score ? `${entry.score}/100` : "Ausstehend"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RetestSection() {
  const ref = useScrollReveal();
  return (
    <section id="retest" className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="observe-fade">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Retest Engine</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-white tracking-[-0.03em] leading-tight mb-6">
              Prävention funktioniert nur,{" "}
              <span className="gradient-text">wenn du erneut misst.</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-8">
              Ein einzelner Datenpunkt ist nur eine Momentaufnahme. Preventura empfiehlt, wann du erneut testen solltest, welches Kit sinnvoll ist — und zeigt dir genau, was sich seit deinem letzten Ergebnis verändert hat.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { emoji: "⏱️", title: "Intelligentes Retest-Timing", desc: "Basierend auf deinen Markern und Fortschritten berechnet Preventura das optimale Retest-Fenster." },
                { emoji: "📦", title: "Kit-Empfehlung", desc: "Preventura schlägt das richtige Kit für deine nächste Auswertung vor." },
                { emoji: "📊", title: "Fortschrittsvergleich", desc: "Sieh, wie sich jeder Biomarker verändert hat und ob deine Maßnahmen wirken." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-white/40 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#fruehen-zugang"
              className="inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.35)] hover:-translate-y-0.5">
              Tracking starten
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="observe-fade" style={{ transitionDelay: "150ms" }}>
            <RetestCard />
          </div>
        </div>
      </div>
    </section>
  );
}
