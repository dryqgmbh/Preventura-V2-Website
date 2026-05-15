"use client";
import React from "react";
import { PreventuraIcon } from "./PreventuraLogo";

function PhoneMockupLarge() {
  return (
    <div className="relative w-[300px] h-[600px] mx-auto">
      <div
        className="absolute inset-0 rounded-[44px] border border-white/[0.12] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        style={{ background: "linear-gradient(160deg, #0e2040 0%, #060f1e 100%)" }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-10" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-5 pb-2 text-white/60 text-[11px]">
          <span className="font-semibold">9:41</span>
          <div className="flex gap-1 items-end">
            {[3,4,5,4].map((h, i) => (
              <div key={i} className="w-1 bg-white/60 rounded-sm" style={{ height: h * 2.5 }} />
            ))}
          </div>
        </div>

        {/* App header */}
        <div className="flex justify-between items-center px-5 pt-1 pb-2">
          <div className="flex items-center gap-2">
            <PreventuraIcon width={22} height={22} />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Preventura</span>
          </div>
          <div className="flex items-center gap-1.5 border border-blue-500/30 bg-blue-500/10 rounded-full px-3 py-1">
            <span className="text-[10px] text-blue-300 font-semibold">+ Add test</span>
          </div>
        </div>

        {/* Greeting */}
        <div className="px-5 pt-1 pb-0">
          <p className="text-white/40 text-xs">Hello,</p>
          <h3 className="text-white font-black text-xl tracking-tight">Markus</h3>
        </div>

        {/* Score ring */}
        <div className="flex justify-center py-5">
          <div className="relative w-[150px] h-[150px]">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 150 150">
              <circle cx="75" cy="75" r="64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9" />
              <circle cx="75" cy="75" r="64" fill="none" stroke="url(#heroScoreGrad)" strokeWidth="9"
                strokeLinecap="round" strokeDasharray="402.12" strokeDashoffset="100" />
              <defs>
                <linearGradient id="heroScoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#176ADD" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white/40 text-[9px] uppercase tracking-widest font-semibold">Health Score</span>
              <span className="text-white font-black text-[42px] leading-none mt-1">76</span>
              <span className="text-white/30 text-[11px]">/100</span>
              <div className="mt-1.5 flex items-center gap-1 bg-green-500/15 border border-green-500/25 rounded-full px-2.5 py-0.5">
                <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7 7 7" />
                </svg>
                <span className="text-green-400 text-[9px] font-bold">+11 since last test</span>
              </div>
            </div>
          </div>
        </div>

        {/* Improvement card */}
        <div className="mx-4 mb-3 rounded-2xl border border-white/[0.06] p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="text-white/30 text-[9px] uppercase tracking-widest mb-2">Potential For Improvement</div>
          <div className="flex items-center gap-2">
            <div className="text-center shrink-0">
              <div className="text-white/30 text-[8px] uppercase">Current</div>
              <div className="text-white font-black text-lg leading-tight">76</div>
            </div>
            <div className="flex-1">
              <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden mb-1">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: "76%" }} />
              </div>
              <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "83%", background: "linear-gradient(90deg, rgba(23,106,221,0.5), #22c55e)" }} />
              </div>
            </div>
            <div className="text-center shrink-0">
              <div className="text-white/30 text-[8px] uppercase">Projected</div>
              <div className="text-green-400 font-black text-lg leading-tight">83</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <span className="text-white text-[9px] font-black">+7</span>
            </div>
          </div>
        </div>

        {/* Top impact */}
        <div className="mx-4 rounded-2xl border border-white/[0.06] p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-white/30 text-[9px] uppercase tracking-widest">Top 3 Impact</span>
            <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="text-white/20 text-[8px] mb-2">Ranked by weighted impact on score</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-semibold text-xs">Vitamin D</div>
              <div className="text-white/30 text-[9px]">24 ng/ml → ≥ 30 ng/ml</div>
            </div>
            <div className="bg-green-500 rounded-full px-2 py-0.5">
              <span className="text-white text-[9px] font-bold">+3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/[0.1] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${className}`}
      style={{ background: "rgba(13,31,56,0.85)", ...style }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[80px] overflow-hidden flex flex-col" style={{
      background: "radial-gradient(ellipse 100% 70% at 50% -5%, rgba(23,106,221,0.28) 0%, transparent 65%), radial-gradient(ellipse 70% 50% at 80% 60%, rgba(0,212,232,0.07) 0%, transparent 60%), #050d1a"
    }}>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(23,106,221,1) 1px, transparent 1px), linear-gradient(90deg, rgba(23,106,221,1) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-12 lg:pt-16 flex-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
          <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Digital Prevention Platform</span>
        </div>

        {/* Headline — Habitline-style: very large, centered, bold */}
        <h1 className="text-5xl sm:text-6xl lg:text-[80px] xl:text-[88px] font-black leading-[1.0] tracking-[-0.04em] text-white mb-6 max-w-[900px]">
          Understand your health{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">before problems</span>
          <br className="hidden sm:block" />
          become visible.
        </h1>

        {/* Subheadline */}
        <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-8 max-w-[600px]">
          At-home biomarker testing, certified lab analysis and a premium app — turning blood values into a clear Health Score, prioritized insights and a personal retest plan.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a href="#early-access"
            className="inline-flex items-center justify-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_8px_32px_rgba(23,106,221,0.45)] hover:shadow-[0_12px_40px_rgba(23,106,221,0.6)] hover:-translate-y-0.5">
            Get Early Access
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5">
            <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See how it works
          </a>
        </div>

        {/* Trust micro */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center text-white/30 text-sm mb-12">
          {["At-home sample collection", "Lab-based analysis", "App-based insights"].map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-500/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        {/* Phone composition — Habitline style: large centered with floating cards */}
        <div className="relative w-full max-w-[700px] mx-auto pb-0" style={{ minHeight: 520 }}>
          {/* Glow behind phone */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #176ADD 0%, transparent 70%)" }} />

          {/* Phone */}
          <div className="float-animation relative z-10 flex justify-center">
            <PhoneMockupLarge />
          </div>

          {/* Floating card: ApoB — left */}
          <FloatingCard className="hidden sm:block left-0 top-[80px] z-20 px-4 py-3 min-w-[140px]"
            style={{ animation: "float 7s ease-in-out infinite", animationDelay: "-1s" } as React.CSSProperties}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/50 text-xs">ApoB</span>
              <span className="ml-auto text-[10px] text-green-400 font-semibold bg-green-500/15 rounded-full px-1.5 py-0.5">Optimal</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-black text-xl">82</span>
              <span className="text-white/30 text-xs">mg/dl</span>
            </div>
          </FloatingCard>

          {/* Floating card: hs-CRP — right */}
          <FloatingCard className="hidden sm:block right-0 top-[120px] z-20 px-4 py-3 min-w-[150px]"
            style={{ animation: "float 8.5s ease-in-out infinite", animationDelay: "-3s" } as React.CSSProperties}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-orange-400" />
              <span className="text-white/50 text-xs">hs-CRP</span>
              <span className="ml-auto text-[10px] text-orange-400 font-semibold bg-orange-500/15 rounded-full px-1.5 py-0.5">Monitor</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-black text-xl">1.8</span>
              <span className="text-white/30 text-xs">mg/l</span>
            </div>
          </FloatingCard>

          {/* Floating card: Retest — left bottom */}
          <FloatingCard className="hidden sm:block left-4 bottom-[80px] z-20 px-4 py-3 min-w-[170px]"
            style={{ animation: "float 9s ease-in-out infinite", animationDelay: "-5s" } as React.CSSProperties}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/25 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-xs">Next Retest</div>
                <div className="text-blue-400 text-[11px]">In 24 days</div>
              </div>
            </div>
          </FloatingCard>

          {/* Floating card: Vitamin D — right bottom */}
          <FloatingCard className="hidden sm:block right-0 bottom-[100px] z-20 px-4 py-3 min-w-[155px]"
            style={{ animation: "float 7.5s ease-in-out infinite", animationDelay: "-2s" } as React.CSSProperties}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-white/50 text-xs">Vitamin D</span>
            </div>
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="text-white font-black text-xl">24</span>
              <span className="text-white/30 text-xs">ng/ml</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-white/30">Target</span>
              <span className="text-green-400 font-semibold">≥ 30</span>
              <div className="ml-auto bg-green-500 rounded-full px-1.5 py-0.5 font-bold text-white">+3</div>
            </div>
          </FloatingCard>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(transparent, #050d1a)" }} />
    </section>
  );
}
