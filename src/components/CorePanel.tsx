"use client";
import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    id: "cardio",
    label: "Heart & Lipids",
    icon: "❤️",
    color: "#ef4444",
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.2)",
    markers: ["ApoB", "LDL Cholesterol", "HDL Cholesterol", "Total Cholesterol", "Triglycerides", "Non-HDL Cholesterol"],
    description: "Cardiovascular risk markers help identify lipid-related patterns that may affect long-term heart health.",
  },
  {
    id: "metabolism",
    label: "Metabolism",
    icon: "⚡",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
    markers: ["HbA1c", "Fasting Glucose", "Insulin", "Triglyceride patterns"],
    description: "Metabolic markers provide insight into blood sugar regulation and energy metabolism over time.",
  },
  {
    id: "inflammation",
    label: "Inflammation",
    icon: "🔥",
    color: "#f97316",
    bg: "rgba(249,115,22,0.1)",
    border: "rgba(249,115,22,0.2)",
    markers: ["hs-CRP", "Homocysteine"],
    description: "Inflammatory markers like high-sensitivity CRP can signal systemic inflammation before it becomes clinically apparent.",
  },
  {
    id: "kidney",
    label: "Kidney",
    icon: "🫘",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    markers: ["Cystatin C", "Creatinine", "eGFR"],
    description: "Early kidney function markers including Cystatin C offer a sensitive signal for early filtering capacity changes.",
  },
  {
    id: "thyroid",
    label: "Thyroid",
    icon: "🦋",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.2)",
    markers: ["TSH"],
    description: "Thyroid-stimulating hormone (TSH) is the primary marker for thyroid function assessment in routine prevention.",
  },
  {
    id: "vitamins",
    label: "Vitamins & Minerals",
    icon: "💊",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
    border: "rgba(34,197,94,0.2)",
    markers: ["Vitamin D (25-OH)", "Ferritin", "Vitamin B12 / HoloTC", "Magnesium"],
    description: "Essential micronutrients that influence energy, immunity, bone density and a wide range of metabolic processes.",
  },
];

export default function CorePanel() {
  const ref = useScrollReveal();
  const [active, setActive] = useState("cardio");
  const selected = categories.find((c) => c.id === active) || categories[0];

  return (
    <section id="core" className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Preventura Core</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Your recurring{" "}
            <span className="gradient-text">health baseline.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            A focused biomarker panel designed to help you track key signals across metabolism, cardiovascular health, inflammation, liver, kidney, thyroid and vitamin status.
          </p>
          <p className="text-white/30 text-sm mt-3">Examples include — exact panel may vary by market and laboratory setup.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 observe-fade" style={{ transitionDelay: "100ms" }}>
          {/* Category tabs */}
          <div id="biomarkers" className="lg:col-span-2 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-left rounded-xl p-4 border transition-all duration-200 ${
                  active === cat.id
                    ? "border-blue-500/40 bg-blue-600/10"
                    : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <span className={`font-semibold text-sm ${active === cat.id ? "text-white" : "text-white/60"}`}>
                    {cat.label}
                  </span>
                  {active === cat.id && (
                    <svg className="w-4 h-4 text-blue-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            key={selected.id}
            className="lg:col-span-3 glass rounded-2xl p-7 border flex flex-col justify-between"
            style={{ borderColor: selected.border }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: selected.bg, border: `1px solid ${selected.border}` }}
              >
                {selected.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{selected.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{selected.description}</p>

              <div className="grid grid-cols-2 gap-2">
                {selected.markers.map((m) => (
                  <div key={m} className="flex items-center gap-2 biomarker-tag w-fit">
                    <div className="w-1 h-1 rounded-full" style={{ background: selected.color }} />
                    {m}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <p className="text-white/40 text-xs">Preventura Core covers {categories.length} health categories</p>
              <a href="#early-access" className="btn-primary text-sm py-2 px-4">
                Start with Core
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
