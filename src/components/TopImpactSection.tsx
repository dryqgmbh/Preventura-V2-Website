"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const impacts = [
  {
    rank: 1,
    name: "Vitamin D",
    current: "24 ng/ml",
    target: "≥ 30 ng/ml",
    scoreDelta: "+3",
    hint: "20 min sunlight daily or D3 supplementation (2000 IU)",
    category: "Vitamins & Minerals",
    color: "#22c55e",
    status: "below target",
  },
  {
    rank: 2,
    name: "Ferritin",
    current: "28.6 ng/ml",
    target: "≥ 50 ng/ml",
    scoreDelta: "+2",
    hint: "Increase iron-rich foods and consider B12 co-factors",
    category: "Minerals",
    color: "#f59e0b",
    status: "monitor closely",
  },
  {
    rank: 3,
    name: "ApoB",
    current: "95 mg/dl",
    target: "< 80 mg/dl",
    scoreDelta: "+2",
    hint: "Dietary saturated fat reduction and regular lipid monitoring",
    category: "Cardiovascular",
    color: "#ef4444",
    status: "optimize",
  },
];

export default function TopImpactSection() {
  const ref = useScrollReveal();
  return (
    <section id="impact" className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14 observe-fade">
          <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Top 3 Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Focus on what moves the{" "}
            <span className="gradient-text">needle first.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Preventura highlights the three biomarkers or health areas with the highest improvement potential — so you know what to focus on first, not what to worry about least.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="glass card-hover rounded-2xl p-6 border border-white/[0.06] observe-fade"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Rank + badge */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white"
                  style={{ background: `${item.color}25`, border: `1px solid ${item.color}50` }}
                >
                  #{item.rank}
                </div>
                <div className="impact-badge">{item.scoreDelta}</div>
              </div>

              {/* Marker */}
              <div className="mb-2">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{item.category}</div>
                <h3 className="text-white font-black text-2xl">{item.name}</h3>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 my-4">
                <div className="glass-light rounded-lg px-3 py-1.5 text-sm font-medium text-white/60">
                  {item.current}
                </div>
                <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div
                  className="rounded-lg px-3 py-1.5 text-sm font-semibold"
                  style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                >
                  {item.target}
                </div>
              </div>

              {/* Status */}
              <div
                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-4"
                style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                {item.status}
              </div>

              {/* Hint */}
              <div className="border-t border-white/[0.06] pt-4">
                <div className="text-white/30 text-xs uppercase tracking-wider mb-1">Action hint</div>
                <p className="text-white/50 text-sm leading-relaxed">{item.hint}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="glass rounded-2xl p-6 border border-blue-500/20 observe-fade" style={{ transitionDelay: "300ms" }}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-4xl">🎯</div>
            <div className="text-center sm:text-left">
              <h3 className="text-white font-bold text-lg mb-1">Not overwhelmed by 30 lab values — focused on 3 priorities.</h3>
              <p className="text-white/40 text-sm">
                Preventura does not dump raw lab data on you. It analyzes your full panel and tells you which three areas have the highest impact potential — ranked by score improvement, not by how alarming a value looks.
              </p>
            </div>
            <a href="#early-access" className="btn-primary shrink-0 whitespace-nowrap">
              See my priorities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
