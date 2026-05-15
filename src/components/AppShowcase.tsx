"use client";
import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PreventuraIcon } from "./PreventuraLogo";

const features = [
  {
    id: "score",
    label: "Health Score",
    icon: "📊",
    desc: "One clear score summarizing your current biomarker baseline — updated after every test.",
  },
  {
    id: "dashboard",
    label: "Biomarker Dashboard",
    icon: "🔬",
    desc: "Every biomarker in one place with status indicators, optimal ranges and trend arrows.",
  },
  {
    id: "impact",
    label: "Top 3 Impact",
    icon: "🎯",
    desc: "Your three highest-impact improvement areas, ranked by their potential to move your score.",
  },
  {
    id: "action",
    label: "Action Plan",
    icon: "📋",
    desc: "Concrete, personalized steps for each priority area — not generic wellness advice.",
  },
  {
    id: "retest",
    label: "Retest Engine",
    icon: "🔄",
    desc: "Intelligent retest timing based on your results and improvement trajectory.",
  },
  {
    id: "trends",
    label: "Trend Comparison",
    icon: "📈",
    desc: "See how each marker has evolved over your last three or more tests side by side.",
  },
];

function AppPreview({ activeId }: { activeId: string }) {
  return (
    <div className="relative w-[260px] h-[520px] mx-auto">
      <div
        className="absolute inset-0 rounded-[36px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]"
        style={{ background: "linear-gradient(170deg, #0d1f38 0%, #050d1a 100%)" }}
      >
        {/* Header */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between">
          <PreventuraIcon width={22} height={22} />
          <div className="flex gap-1 items-end">
            {[3,4,5,4].map((h, i) => (
              <div key={i} className="w-1 bg-white/60 rounded-sm" style={{ height: h * 3 }} />
            ))}
          </div>
        </div>

        {/* Dynamic content */}
        {activeId === "score" && (
          <div className="p-4">
            <div className="text-white/50 text-xs mb-3">Health Check · May 2025</div>
            <div className="flex justify-center mb-4">
              <div className="relative w-[130px] h-[130px]">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 130 130">
                  <circle cx="65" cy="65" r="56" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                  <circle cx="65" cy="65" r="56" fill="none" stroke="#176ADD" strokeWidth="7"
                    strokeLinecap="round" strokeDasharray="351.86" strokeDashoffset="88" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white/50 text-[9px] uppercase tracking-widest">Health Score</span>
                  <span className="text-white font-black text-3xl leading-none">62</span>
                  <span className="text-white/30 text-[10px]">/100</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: "+10", label: "vs. prev. test", color: "text-orange-400" },
                { val: "2", label: "Optimal", color: "text-green-400" },
                { val: "3", label: "Noticeable", color: "text-orange-400" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-xl p-2 text-center border border-white/[0.06]">
                  <div className={`font-bold text-sm ${s.color}`}>{s.val}</div>
                  <div className="text-white/40 text-[9px] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeId === "dashboard" && (
          <div className="p-4 space-y-2">
            <div className="text-white/50 text-xs mb-1">Biomarker Results</div>
            {[
              { name: "Ferritin", val: "28.6", unit: "ng/ml", status: "notice" },
              { name: "Magnesium", val: "1.65", unit: "mg/dl", status: "notice" },
              { name: "Cortisol", val: "29.8", unit: "µg/24h", status: "notice" },
              { name: "Vitamin B12", val: "278", unit: "pg/ml", status: "optimal" },
              { name: "Vitamin D", val: "24", unit: "ng/ml", status: "optimal" },
              { name: "TSH", val: "1.8", unit: "mU/l", status: "optimal" },
            ].map((m) => (
              <div key={m.name} className="glass rounded-xl px-3 py-2 flex items-center justify-between border border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${m.status === "optimal" ? "bg-green-400" : "bg-orange-400"}`} />
                  <span className="text-white text-xs font-medium">{m.name}</span>
                </div>
                <span className="text-white/60 text-xs">{m.val} {m.unit}</span>
              </div>
            ))}
          </div>
        )}

        {activeId === "impact" && (
          <div className="p-4">
            <div className="text-white/50 text-xs mb-3">Top 3 Impact Optimization</div>
            <div className="space-y-3">
              {[
                { name: "Vitamin D", curr: "24 ng/ml", target: "≥ 30 ng/ml", delta: "+3", hint: "20 min sunlight or supplementation" },
                { name: "Ferritin", curr: "28 ng/ml", target: "≥ 50 ng/ml", delta: "+2", hint: "Increase iron intake" },
                { name: "ApoB", curr: "95 mg/dl", target: "< 80 mg/dl", delta: "+2", hint: "Dietary adjustment + tracking" },
              ].map((item) => (
                <div key={item.name} className="glass rounded-xl p-3 border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <div className="text-white font-semibold text-xs">{item.name}</div>
                      <div className="text-white/40 text-[10px]">{item.curr} → {item.target}</div>
                    </div>
                    <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold">{item.delta}</span>
                    </div>
                  </div>
                  <div className="text-white/30 text-[9px]">{item.hint}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeId === "action" && (
          <div className="p-4">
            <div className="text-white/50 text-xs mb-3">Your Action Plan</div>
            <div className="space-y-2.5">
              {[
                { title: "Vitamin D Protocol", desc: "20 min outdoor sunlight daily or Vitamin D3 supplementation", priority: "High" },
                { title: "Iron Optimization", desc: "Include red meat, legumes and vitamin C-rich foods", priority: "Medium" },
                { title: "Lipid Support", desc: "Increase omega-3s, reduce saturated fats, track LDL trend", priority: "Medium" },
              ].map((a, i) => (
                <div key={i} className="glass rounded-xl p-3 border border-white/[0.06]">
                  <div className="flex justify-between mb-1">
                    <span className="text-white text-xs font-semibold">{a.title}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                      a.priority === "High" ? "bg-orange-500/20 text-orange-400" : "bg-blue-500/20 text-blue-400"
                    }`}>{a.priority}</span>
                  </div>
                  <p className="text-white/40 text-[9px] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeId === "retest" && (
          <div className="p-4">
            <div className="text-white/50 text-xs mb-3">Retest Recommendation</div>
            <div className="glass rounded-2xl p-4 border border-blue-500/20 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-bold">Next Evaluation</div>
                  <div className="text-blue-400 text-[10px]">In 24 days</div>
                </div>
              </div>
              <div className="text-white/40 text-[9px] mb-2">Recommended Kit: Preventura Core</div>
              <div className="bg-blue-500/10 rounded-lg px-2 py-1.5">
                <div className="text-white/60 text-[9px] font-medium mb-1">Priority marker to monitor:</div>
                <div className="text-white text-[10px] font-semibold">Vitamin D · Ferritin · ApoB</div>
              </div>
            </div>
            <div className="glass rounded-xl p-3 border border-green-500/20">
              <div className="text-green-400 text-xs font-semibold mb-1">Your progress so far</div>
              <div className="text-white/50 text-[10px]">Score improved +11 since last test</div>
              <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full" style={{ width: "76%" }} />
              </div>
            </div>
          </div>
        )}

        {activeId === "trends" && (
          <div className="p-4">
            <div className="text-white/50 text-xs mb-3">Trend Comparison</div>
            <div className="space-y-3">
              {[
                { name: "Health Score", vals: [52, 64, 76], unit: "pts" },
                { name: "Vitamin D", vals: [18, 21, 24], unit: "ng/ml" },
                { name: "ApoB", vals: [110, 98, 82], unit: "mg/dl" },
              ].map((trend) => (
                <div key={trend.name} className="glass rounded-xl p-3 border border-white/[0.06]">
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-xs font-semibold">{trend.name}</span>
                    <span className="text-green-400 text-[10px]">↑ improving</span>
                  </div>
                  <div className="flex items-end gap-2 h-8">
                    {trend.vals.map((v, i) => {
                      const max = Math.max(...trend.vals);
                      const pct = (v / max) * 100;
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-sm"
                            style={{
                              height: `${pct}%`,
                              background: i === trend.vals.length - 1 ? "#176ADD" : "rgba(23,106,221,0.3)"
                            }}
                          />
                          <span className="text-white/30 text-[8px]">T{i + 1}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const ref = useScrollReveal();
  const [active, setActive] = useState("score");

  return (
    <section id="app" className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">App Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Your results, translated into a{" "}
            <span className="gradient-text">premium app experience.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Not a PDF. Not a portal. A real-time health intelligence platform built for prevention.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: feature list */}
          <div className="grid sm:grid-cols-2 gap-4 observe-fade">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`text-left rounded-2xl p-4 border transition-all duration-200 ${
                  active === f.id
                    ? "bg-blue-600/15 border-blue-500/40"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10"
                }`}
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className={`font-bold text-sm mb-1 ${active === f.id ? "text-white" : "text-white/70"}`}>
                  {f.label}
                </div>
                <p className={`text-xs leading-relaxed ${active === f.id ? "text-white/60" : "text-white/30"}`}>
                  {f.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Right: phone preview */}
          <div className="observe-fade float-animation" style={{ transitionDelay: "150ms" }}>
            <AppPreview activeId={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
