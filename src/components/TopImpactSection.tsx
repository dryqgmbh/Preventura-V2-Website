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
    /* Light section */
    <section id="impact" className="py-24 px-6" style={{ background: "#f0f4fa" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div className="observe-fade">
            <div className="inline-flex items-center gap-2 bg-green-600/15 border border-green-500/25 rounded-full px-4 py-1.5 mb-5">
              <span className="text-green-700 text-xs font-semibold uppercase tracking-widest">Top 3 Impact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#0a1628] tracking-[-0.03em] leading-tight">
              Focus on what moves the{" "}
              <span style={{ background: "linear-gradient(135deg, #176ADD, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                needle first.
              </span>
            </h2>
          </div>
          <div className="observe-fade" style={{ transitionDelay: "100ms" }}>
            <p className="text-[#475569] text-xl leading-relaxed">
              Preventura highlights the three biomarkers with the highest improvement potential — ranked by score impact, so you always know where to focus.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {impacts.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 border observe-fade"
              style={{
                background: "#ffffff",
                borderColor: "rgba(0,0,0,0.06)",
                transitionDelay: `${i * 100}ms`,
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
            >
              {/* Rank + badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black"
                  style={{ background: `${item.color}15`, color: item.color, border: `1.5px solid ${item.color}30` }}>
                  #{item.rank}
                </div>
                <div className="bg-green-500 text-white font-bold text-sm px-3 py-1 rounded-full">
                  {item.scoreDelta}
                </div>
              </div>

              <div className="mb-3">
                <div className="text-[#94a3b8] text-xs uppercase tracking-wider mb-1">{item.category}</div>
                <h3 className="text-[#0a1628] font-black text-2xl">{item.name}</h3>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 my-4">
                <div className="rounded-lg px-3 py-1.5 text-sm font-medium text-[#475569] border border-black/[0.08] bg-[#f1f5f9]">
                  {item.current}
                </div>
                <svg className="w-4 h-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="rounded-lg px-3 py-1.5 text-sm font-semibold"
                  style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}>
                  {item.target}
                </div>
              </div>

              {/* Status tag */}
              <div className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-4"
                style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}20` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                {item.status}
              </div>

              <div className="border-t border-black/[0.05] pt-4">
                <div className="text-[#94a3b8] text-xs uppercase tracking-wider mb-1">Action hint</div>
                <p className="text-[#475569] text-sm leading-relaxed">{item.hint}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="rounded-3xl p-7 border border-[#176ADD]/15 observe-fade bg-white" style={{ transitionDelay: "300ms", boxShadow: "0 2px 20px rgba(23,106,221,0.08)" }}>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="text-4xl shrink-0">🎯</div>
            <div className="text-center sm:text-left">
              <h3 className="text-[#0a1628] font-bold text-lg mb-1">Not overwhelmed by 30 values — focused on 3 priorities.</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Preventura analyzes your full panel and tells you which three areas have the highest impact potential — ranked by score improvement, not by how alarming a value looks.
              </p>
            </div>
            <a href="#early-access"
              className="shrink-0 inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-6 py-3 rounded-full text-sm transition-all whitespace-nowrap">
              See my priorities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
