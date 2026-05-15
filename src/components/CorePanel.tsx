"use client";
import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type MarkerStatus = "optimal" | "attention";

interface Marker {
  name: string;
  value: string;
  unit: string;
  status: MarkerStatus;
}

interface Category {
  id: string;
  label: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
  markers: Marker[];
  description: string;
}

const categories: Category[] = [
  {
    id: "cardio", label: "Herz & Lipide", emoji: "❤️", color: "#ef4444",
    bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.2)",
    description: "Kardiovaskuläre Risikomarker helfen dabei, lipidbedingte Muster zu erkennen, die langfristig die Herzgesundheit beeinflussen können.",
    markers: [
      { name: "ApoB", value: "95", unit: "mg/dl", status: "attention" },
      { name: "LDL-Cholesterin", value: "142", unit: "mg/dl", status: "attention" },
      { name: "HDL-Cholesterin", value: "58", unit: "mg/dl", status: "optimal" },
      { name: "Gesamtcholesterin", value: "210", unit: "mg/dl", status: "attention" },
      { name: "Triglyceride", value: "98", unit: "mg/dl", status: "optimal" },
      { name: "Non-HDL", value: "152", unit: "mg/dl", status: "attention" },
    ],
  },
  {
    id: "stoffwechsel", label: "Stoffwechsel", emoji: "⚡", color: "#176ADD",
    bg: "rgba(23,106,221,0.1)", border: "rgba(23,106,221,0.2)",
    description: "Stoffwechselmarker geben Einblick in die Blutzuckerregulation und den Energiestoffwechsel über Zeit.",
    markers: [
      { name: "HbA1c", value: "5.4", unit: "%", status: "optimal" },
      { name: "Nüchternglukose", value: "88", unit: "mg/dl", status: "optimal" },
      { name: "Insulin", value: "8.2", unit: "µIU/ml", status: "optimal" },
    ],
  },
  {
    id: "entzuendung", label: "Entzündung", emoji: "🔥", color: "#ef4444",
    bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.2)",
    description: "Entzündungsmarker wie hochsensitives CRP können systemische Entzündungen anzeigen, bevor sie klinisch sichtbar werden.",
    markers: [
      { name: "hs-CRP", value: "1.8", unit: "mg/l", status: "attention" },
      { name: "Homocystein", value: "12.4", unit: "µmol/l", status: "attention" },
    ],
  },
  {
    id: "niere", label: "Niere", emoji: "🫘", color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)",
    description: "Frühzeitige Nierenfunktionsmarker — besonders Cystatin C — bieten sensible Signale bei Veränderungen der Filterfunktion.",
    markers: [
      { name: "Cystatin C", value: "0.92", unit: "mg/l", status: "optimal" },
      { name: "Kreatinin", value: "0.8", unit: "mg/dl", status: "optimal" },
      { name: "eGFR", value: "94", unit: "ml/min", status: "optimal" },
    ],
  },
  {
    id: "schilddruese", label: "Schilddrüse", emoji: "🦋", color: "#06b6d4",
    bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.2)",
    description: "Das Schilddrüsen-stimulierende Hormon (TSH) ist der primäre Marker für die Schilddrüsenfunktion in der Routineprävention.",
    markers: [
      { name: "TSH", value: "1.8", unit: "mIU/l", status: "optimal" },
    ],
  },
  {
    id: "vitamine", label: "Vitamine & Mineralien", emoji: "💊", color: "#22c55e",
    bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.2)",
    description: "Essenzielle Mikronährstoffe, die Energie, Immunsystem, Knochendichte und viele Stoffwechselprozesse beeinflussen.",
    markers: [
      { name: "Vitamin D", value: "24", unit: "ng/ml", status: "attention" },
      { name: "Ferritin", value: "28.6", unit: "ng/ml", status: "attention" },
      { name: "Vitamin B12", value: "278", unit: "pg/ml", status: "optimal" },
      { name: "Magnesium", value: "1.65", unit: "mg/dl", status: "attention" },
    ],
  },
];

function BiomarkerRow({ name, value, unit, status }: {
  name: string; value: string; unit: string; status: "optimal" | "attention";
}) {
  return (
    <div className="flex items-center justify-between px-3 py-2" style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10 }}>
      <div className="flex items-center gap-2.5">
        {status === "optimal" ? (
          <div className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0"
            style={{ background: "rgba(34,197,94,0.2)", borderColor: "rgba(34,197,94,0.4)" }}>
            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0"
            style={{ background: "rgba(239,68,68,0.2)", borderColor: "rgba(239,68,68,0.4)" }}>
            <span className="text-red-400 text-[9px] font-black">!</span>
          </div>
        )}
        <span className="text-white text-xs font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-white text-xs font-semibold">{value}</span>
        <span className="text-white/40 text-[10px]">{unit}</span>
        <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}

export default function CorePanel() {
  const ref = useScrollReveal();
  const [active, setActive] = useState("cardio");
  const selected = categories.find(c => c.id === active) ?? categories[0];

  const optimalCount = selected.markers.filter(m => m.status === "optimal").length;
  const attentionCount = selected.markers.filter(m => m.status === "attention").length;

  return (
    <section id="core" className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div className="observe-fade">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Preventura Core</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-white tracking-[-0.03em] leading-tight">
              Dein wiederkehrender{" "}
              <span className="gradient-text">Gesundheits-Baseline.</span>
            </h2>
          </div>
          <div className="observe-fade" style={{ transitionDelay: "100ms" }}>
            <p className="text-white/50 text-xl leading-relaxed mb-3">
              Ein fokussiertes Biomarker-Panel zur Verfolgung wichtiger Signale in Stoffwechsel, Herz-Kreislauf, Entzündung, Niere, Schilddrüse und Vitaminstatus.
            </p>
            <p className="text-white/25 text-sm">Beispiele — genaues Panel kann je nach Markt und Laboraufstellung variieren.</p>
          </div>
        </div>

        <div id="biomarker" className="grid lg:grid-cols-5 gap-5 observe-fade" style={{ transitionDelay: "150ms" }}>
          {/* Left: Category tabs */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {categories.map((cat) => {
              const isActive = active === cat.id;
              const catOpt = cat.markers.filter(m => m.status === "optimal").length;
              const catAtt = cat.markers.filter(m => m.status === "attention").length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="text-left rounded-2xl transition-all duration-200 overflow-hidden"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isActive ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)"}`,
                    borderLeft: isActive ? `3px solid ${cat.color}` : "3px solid transparent",
                  }}
                >
                  <div className="flex items-center gap-3 px-4 py-4">
                    <span className="text-xl">{cat.emoji}</span>
                    <span className={`font-semibold text-sm flex-1 ${isActive ? "text-white" : "text-white/50"}`}>
                      {cat.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {catOpt > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.25)" }}>
                          {catOpt} Opt
                        </span>
                      )}
                      {catAtt > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.25)" }}>
                          {catAtt} Auf
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Phone Frame */}
          <div className="lg:col-span-3 flex flex-col items-center justify-start gap-4">
            {/* Phone frame */}
            <div
              className="w-[280px] rounded-[36px] overflow-hidden border"
              style={{
                background: "#0e1e36",
                borderColor: "rgba(255,255,255,0.1)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-4 pb-1">
                <span className="text-white text-[11px] font-semibold">9:41</span>
                <div className="flex gap-1 items-end">
                  {[3, 4, 5, 4].map((h, i) => (
                    <div key={i} className="w-[3px] bg-white/60 rounded-sm" style={{ height: h * 2.5 }} />
                  ))}
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center gap-2 px-5 py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
                </svg>
                <span className="text-white text-[12px] font-bold">Health Check — Mai 2025</span>
              </div>

              {/* Category chip */}
              <div className="px-4 pt-3 pb-1 flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: selected.bg,
                    border: `1px solid ${selected.border}`,
                    color: selected.color,
                  }}
                >
                  {selected.emoji} {selected.label}
                </span>
              </div>

              {/* Stats summary */}
              <div className="flex items-center gap-2 px-4 py-2">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.25)" }}>
                  {optimalCount} Optimal
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.25)" }}>
                  {attentionCount} Auffällig
                </span>
              </div>

              {/* Biomarker rows */}
              <div className="px-3 pb-4 flex flex-col gap-1.5">
                {selected.markers.map(m => (
                  <BiomarkerRow
                    key={m.name}
                    name={m.name}
                    value={m.value}
                    unit={m.unit}
                    status={m.status}
                  />
                ))}
              </div>
            </div>

            {/* Below phone */}
            <div className="flex flex-col items-center gap-3 w-[280px]">
              <p className="text-white/25 text-xs text-center">
                Beispieldaten — genaues Panel kann je nach Markt variieren.
              </p>
              <a
                href="#fruehen-zugang"
                className="w-full text-center bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-semibold text-sm px-5 py-3 rounded-full transition-all"
              >
                Mit Core starten
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
