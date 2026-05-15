"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PreventuraIcon } from "./PreventuraLogo";

/* ── Bento-grid card types ── */

function ScoreCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/40 text-xs uppercase tracking-widest mb-3">Health Score</div>
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-[100px] h-[100px] shrink-0">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#bentoScore)" strokeWidth="8"
              strokeLinecap="round" strokeDasharray="263.89" strokeDashoffset="66" />
            <defs>
              <linearGradient id="bentoScore" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#176ADD" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white font-black text-3xl leading-none">76</span>
            <span className="text-white/30 text-[10px]">/100</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1.5 flex-1 bg-white/[0.06] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full" style={{ width: "76%" }} />
            </div>
            <span className="text-white/40 text-xs">76%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7 7 7" />
            </svg>
            <span className="text-green-400 text-xs font-semibold">+11 since last test</span>
          </div>
          <p className="text-white/30 text-xs mt-2 leading-relaxed">Updated after every retest</p>
        </div>
      </div>
    </div>
  );
}

function DashboardCard() {
  const markers = [
    { name: "Ferritin", val: "28.6 ng/ml", status: "notice" },
    { name: "Vitamin B12", val: "278 pg/ml", status: "optimal" },
    { name: "Vitamin D", val: "24 ng/ml", status: "notice" },
    { name: "TSH", val: "1.8 mU/l", status: "optimal" },
    { name: "hs-CRP", val: "1.2 mg/l", status: "optimal" },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <PreventuraIcon width={18} height={18} />
        <div className="text-white/40 text-xs uppercase tracking-widest">Biomarker Dashboard</div>
      </div>
      <div className="space-y-2 flex-1">
        {markers.map((m) => (
          <div key={m.name} className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${m.status === "optimal" ? "bg-green-400" : "bg-orange-400"}`} />
              <span className="text-white text-xs font-medium">{m.name}</span>
            </div>
            <span className="text-white/40 text-xs">{m.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImpactCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/40 text-xs uppercase tracking-widest mb-4">Top 3 Impact Optimization</div>
      <div className="space-y-3 flex-1">
        {[
          { name: "Vitamin D", curr: "24", target: "≥ 30 ng/ml", delta: "+3", color: "#22c55e" },
          { name: "Ferritin", curr: "28.6", target: "≥ 50 ng/ml", delta: "+2", color: "#f59e0b" },
          { name: "ApoB", curr: "95", target: "< 80 mg/dl", delta: "+2", color: "#ef4444" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background: "rgba(255,255,255,0.04)" }}>
            <div className="flex-1">
              <div className="text-white font-semibold text-sm">{item.name}</div>
              <div className="text-white/30 text-xs">{item.curr} → {item.target}</div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black" style={{ background: item.color }}>
              {item.delta}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RetestCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/40 text-xs uppercase tracking-widest mb-4">Retest Engine</div>
      <div className="rounded-2xl p-4 mb-3 border border-blue-500/20 flex-1" style={{ background: "rgba(23,106,221,0.08)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/25 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-sm">Next Evaluation</div>
            <div className="text-blue-400 text-xs font-semibold">In 24 days</div>
          </div>
        </div>
        <div className="text-white/40 text-xs mb-2">Recommended Kit</div>
        <div className="text-white font-semibold text-sm">Preventura Core</div>
        <div className="mt-2 flex gap-1.5 flex-wrap">
          {["Vitamin D", "Ferritin", "ApoB"].map((m) => (
            <span key={m} className="biomarker-tag">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrendsCard() {
  const data = [
    { label: "Test 1\nFeb", score: 52, color: "rgba(23,106,221,0.35)" },
    { label: "Test 2\nApr", score: 64, color: "rgba(23,106,221,0.55)" },
    { label: "Test 3\nMay", score: 76, color: "#176ADD" },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/40 text-xs uppercase tracking-widest mb-4">Trend Comparison</div>
      <div className="flex items-end gap-3 flex-1 pb-2">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="text-white font-bold text-lg">{d.score}</div>
            <div
              className="w-full rounded-xl transition-all"
              style={{ height: `${d.score * 1.2}px`, background: d.color, maxHeight: 110 }}
            />
            <div className="text-white/30 text-[10px] text-center whitespace-pre-wrap leading-tight">{d.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-green-400 text-xs font-semibold">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7 7 7" />
        </svg>
        Score improved +24 over 3 tests
      </div>
    </div>
  );
}

function ActionPlanCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/40 text-xs uppercase tracking-widest mb-4">Action Plan</div>
      <div className="space-y-2.5 flex-1">
        {[
          { title: "Vitamin D Protocol", priority: "High", desc: "20 min sunlight or D3 supplementation" },
          { title: "Iron Optimization", priority: "Medium", desc: "Increase iron-rich foods + Vitamin C" },
          { title: "Lipid Support", priority: "Medium", desc: "Omega-3s, reduce saturated fats" },
        ].map((a) => (
          <div key={a.title} className="rounded-xl p-3 border border-white/[0.05]" style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-white text-xs font-semibold">{a.title}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                a.priority === "High" ? "bg-orange-500/20 text-orange-400" : "bg-blue-500/15 text-blue-400"
              }`}>{a.priority}</span>
            </div>
            <p className="text-white/30 text-[10px] leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const ref = useScrollReveal();

  return (
    <section id="app" className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">App Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white tracking-[-0.03em] leading-tight mb-4">
            Your results, translated into a{" "}
            <span className="gradient-text">premium app.</span>
          </h2>
          <p className="text-white/50 text-xl max-w-xl mx-auto">
            Not a PDF. Not a portal. A real-time health intelligence platform built for prevention.
          </p>
        </div>

        {/* Bento grid — Habitline-style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 observe-fade" style={{ transitionDelay: "100ms" }}>

          {/* Row 1: Score (large) + Dashboard */}
          <div className="md:col-span-5 glass rounded-3xl p-6 border border-white/[0.06] card-hover min-h-[220px]">
            <ScoreCard />
          </div>
          <div className="md:col-span-7 glass rounded-3xl p-6 border border-white/[0.06] card-hover min-h-[220px]">
            <DashboardCard />
          </div>

          {/* Row 2: Impact (large) + Retest + Trends */}
          <div className="md:col-span-5 glass rounded-3xl p-6 border border-white/[0.06] card-hover min-h-[260px]">
            <ImpactCard />
          </div>
          <div className="md:col-span-3 glass rounded-3xl p-6 border border-white/[0.06] card-hover min-h-[260px]">
            <RetestCard />
          </div>
          <div className="md:col-span-4 glass rounded-3xl p-6 border border-white/[0.06] card-hover min-h-[260px]">
            <TrendsCard />
          </div>

          {/* Row 3: Action plan (full width) */}
          <div className="md:col-span-12 glass rounded-3xl p-6 border border-white/[0.06] card-hover">
            <ActionPlanCard />
          </div>
        </div>

        <div className="mt-10 text-center observe-fade" style={{ transitionDelay: "200ms" }}>
          <a href="#early-access" className="inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(23,106,221,0.5)]">
            Explore the app
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
