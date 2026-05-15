"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedScoreRing({ score, animated }: { score: number; animated: boolean }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-[220px] h-[220px]">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
        <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(23,106,221,0.1)" strokeWidth="12"
          strokeDasharray={circumference} strokeDashoffset="0" />
        <circle
          cx="110" cy="110" r={radius} fill="none" stroke="url(#scoreGrad2)"
          strokeWidth="12" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />
        <defs>
          <linearGradient id="scoreGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#176ADD" />
            <stop offset="50%" stopColor="#00d4e8" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white/40 text-xs uppercase tracking-widest font-medium">Health Score</span>
        <span className="text-white font-black text-6xl leading-none mt-1">{animated ? score : 0}</span>
        <span className="text-white/30 text-sm">/100</span>
        <div className="mt-2 flex items-center gap-1.5 bg-green-500/15 border border-green-500/25 rounded-full px-3 py-1">
          <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="text-green-400 text-xs font-semibold">+11 since last test</span>
        </div>
      </div>
    </div>
  );
}

export default function ScoreSection() {
  const ref = useScrollReveal();
  const [animated, setAnimated] = useState(false);
  const scoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scoreRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="score" className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>

        {/* Large section headline — Habitline style */}
        <div className="text-center mb-16 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Preventura Score</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white tracking-[-0.03em] leading-tight max-w-4xl mx-auto">
            One score.{" "}
            <span className="gradient-text">Clear priorities.</span>{" "}
            Measurable progress.
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mt-5">
            Instead of reading isolated lab values, you see what matters most now — and how your score changes over time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Score visual */}
          <div className="flex flex-col items-center observe-fade" ref={scoreRef}>
            <AnimatedScoreRing score={76} animated={animated} />

            {/* Improvement card */}
            <div className="mt-8 w-full max-w-sm glass rounded-2xl p-5 border border-white/[0.06]">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-4">Potential For Improvement</div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">Current</div>
                  <div className="text-white font-black text-3xl">76</div>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full rounded-full" style={{
                      width: animated ? "76%" : "0%",
                      background: "linear-gradient(90deg, #176ADD, #00d4e8)",
                      transition: "width 2s ease-out 0.5s",
                    }} />
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{
                      width: animated ? "83%" : "0%",
                      background: "linear-gradient(90deg, rgba(23,106,221,0.4), #22c55e)",
                      transition: "width 2s ease-out 0.8s",
                    }} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">Projected</div>
                  <div className="text-green-400 font-black text-3xl">83</div>
                </div>
                <div className="impact-badge">+7</div>
              </div>
              <p className="text-white/30 text-xs">If you address your Top 3 Impact areas</p>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-6 observe-fade" style={{ transitionDelay: "150ms" }}>
            <h3 className="text-white font-bold text-2xl">Your current health baseline, quantified.</h3>
            <p className="text-white/50 leading-relaxed text-lg">
              The Preventura Score summarizes selected biomarker results into a clear, trackable signal between 0 and 100. It highlights where improvement potential exists — not just which values are out of range.
            </p>

            <div className="space-y-5">
              {[
                { icon: "🎯", title: "Score reflects your actual baseline", desc: "Calculated from real lab values, not self-reported data or estimates." },
                { icon: "📈", title: "Tracks improvement over time", desc: "Every retest updates your score. You can see exactly how much it changed and why." },
                { icon: "🔍", title: "Shows what to focus on next", desc: "The score connects directly to your Top 3 Impact areas — always your next best action." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-white/40 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a href="#early-access"
                className="inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.35)] hover:-translate-y-0.5">
                Get Your Score
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
