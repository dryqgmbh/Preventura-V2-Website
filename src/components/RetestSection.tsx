"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function RetestCard() {
  return (
    <div className="glass rounded-2xl p-6 border border-blue-500/25 max-w-sm mx-auto">
      {/* Calendar header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <div className="text-white font-bold text-sm">Next Evaluation</div>
          <div className="text-blue-400 text-xs font-semibold">In 24 days</div>
        </div>
        <div className="ml-auto">
          <div className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
        </div>
      </div>

      {/* Kit recommendation */}
      <div className="bg-blue-600/10 rounded-xl p-4 mb-4 border border-blue-500/15">
        <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Recommended Kit</div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-sm">📦</div>
          <div>
            <div className="text-white font-semibold text-sm">Preventura Core</div>
            <div className="text-white/40 text-xs">Full prevention panel</div>
          </div>
        </div>
      </div>

      {/* Priority markers */}
      <div className="mb-4">
        <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Priority markers to monitor</div>
        <div className="flex flex-wrap gap-1.5">
          {["Vitamin D", "Ferritin", "ApoB", "hs-CRP"].map((m) => (
            <span key={m} className="biomarker-tag">{m}</span>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="border-t border-white/[0.06] pt-4">
        <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Testing history</div>
        <div className="space-y-2">
          {[
            { date: "Feb 2025", score: 52, label: "Test 1" },
            { date: "Apr 2025", score: 64, label: "Test 2" },
            { date: "May 2025", score: 76, label: "Test 3 · Now" },
            { date: "Jun 2025", score: null, label: "Test 4 · Upcoming" },
          ].map((entry, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                entry.score ? "bg-blue-400" : "bg-white/20"
              }`} />
              <span className="text-white/40 text-xs w-20">{entry.date}</span>
              <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                {entry.score && (
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${entry.score}%`,
                      background: "linear-gradient(90deg, #176ADD, #22c55e)",
                    }}
                  />
                )}
              </div>
              <span className={`text-xs font-medium w-20 text-right ${
                entry.score ? "text-white/70" : "text-white/25"
              }`}>
                {entry.score ? `${entry.score}/100` : "Scheduled"}
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
    <section id="retest" className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div className="observe-fade">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Retest Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              Prevention only works{" "}
              <span className="gradient-text">when you measure again.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              A single data point is just a snapshot. Preventura recommends when to retest, which kit makes sense for your situation, and shows you exactly what changed since your last result.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "⏱️",
                  title: "Smart retest timing",
                  desc: "Based on your markers and progress, Preventura calculates the optimal retest window — not too early, not too late.",
                },
                {
                  icon: "📦",
                  title: "Kit recommendation",
                  desc: "Preventura suggests the right kit for your next evaluation, so you're always testing what matters most.",
                },
                {
                  icon: "📊",
                  title: "Progress comparison",
                  desc: "See how each biomarker shifted since your last test, and whether your interventions are working.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-white/40 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#early-access" className="btn-primary">
                Start tracking
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: card */}
          <div className="observe-fade" style={{ transitionDelay: "150ms" }}>
            <RetestCard />
          </div>
        </div>
      </div>
    </section>
  );
}
