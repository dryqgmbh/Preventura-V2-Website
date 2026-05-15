"use client";
import React from "react";
import { PreventuraIcon } from "./PreventuraLogo";

function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[560px] mx-auto">
      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[40px] border-2 border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]"
        style={{
          background: "linear-gradient(160deg, #0d1f38 0%, #050d1a 100%)",
        }}
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2">
          <span className="text-white text-xs font-semibold">9:41</span>
          <div className="w-[100px] h-[26px] bg-black rounded-full" />
          <div className="flex gap-1 items-center">
            <div className="flex gap-0.5">
              {[3,4,4,5].map((h, i) => (
                <div key={i} className="w-1 rounded-sm bg-white/80" style={{ height: h * 2 + 6 }} />
              ))}
            </div>
            <svg className="w-4 h-4 text-white/80 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="w-6 h-3 border border-white/70 rounded-sm ml-1 relative">
              <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-white/90 rounded-sm" />
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="flex justify-between items-center px-5 py-2">
          <div className="flex items-center gap-2">
            <PreventuraIcon width={20} height={20} />
            <span className="text-white text-xs font-bold tracking-wide">PREVENTURA</span>
          </div>
          <div className="flex items-center gap-1.5 bg-blue-600/30 border border-blue-500/30 rounded-full px-2.5 py-1">
            <span className="text-blue-300 text-[10px] font-semibold">+ Add test</span>
          </div>
        </div>

        {/* Greeting */}
        <div className="px-5 pt-1">
          <p className="text-white/50 text-xs">Hello,</p>
          <h3 className="text-white font-bold text-lg tracking-tight">Markus</h3>
        </div>

        {/* Score circle */}
        <div className="flex flex-col items-center py-4">
          <div className="relative w-[140px] h-[140px]">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
              <circle cx="70" cy="70" r="60" fill="none" stroke="#176ADD" strokeWidth="8"
                strokeLinecap="round" strokeDasharray="376.99" strokeDashoffset="94" />
              <circle cx="70" cy="70" r="60" fill="none" stroke="#22c55e" strokeWidth="8"
                strokeLinecap="round" strokeDasharray="376.99" strokeDashoffset="270"
                opacity="0.6" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white/60 text-[10px] font-medium uppercase tracking-widest">HEALTH SCORE</span>
              <span className="text-white font-black text-4xl leading-none mt-0.5">76</span>
              <span className="text-white/40 text-xs">/100</span>
              <div className="mt-1 bg-green-500/20 border border-green-500/30 rounded-full px-2 py-0.5">
                <span className="text-green-400 text-[10px] font-semibold">+11 since last test</span>
              </div>
            </div>
          </div>
        </div>

        {/* Potential for improvement */}
        <div className="mx-4 glass rounded-2xl p-3 mb-3">
          <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider mb-2">Potential For Improvement</div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-white/40 text-[9px]">CURRENT</div>
              <div className="text-white font-bold text-base">76</div>
            </div>
            <div className="flex-1 mx-3">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full" style={{ width: "76%" }} />
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-blue-500/50 to-green-400/50 rounded-full" style={{ width: "83%" }} />
              </div>
            </div>
            <div>
              <div className="text-white/40 text-[9px]">PROJECTED</div>
              <div className="text-white font-bold text-base">83</div>
            </div>
            <div className="ml-2 bg-green-500 rounded-full w-7 h-7 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">+7</span>
            </div>
          </div>
        </div>

        {/* Top impact */}
        <div className="mx-4 glass rounded-2xl p-3">
          <div className="flex justify-between items-center">
            <div className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Top 3 Impact</div>
            <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="text-white/30 text-[9px] mb-2">Ranked by weighted impact on total score</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white/80 text-[11px] font-semibold">Vitamin D</div>
              <div className="text-white/40 text-[9px]">24 → ≥ 30 ng/ml</div>
            </div>
            <div className="bg-green-500 rounded-full px-2 py-0.5">
              <span className="text-white text-[10px] font-bold">+3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingBiomarkerCard({ label, value, unit, status, delay }: {
  label: string; value: string; unit: string; status: "optimal" | "notice"; delay: string;
}) {
  const isOptimal = status === "optimal";
  return (
    <div
      className="glass rounded-xl px-3 py-2.5 shadow-xl border"
      style={{
        borderColor: isOptimal ? "rgba(34,197,94,0.3)" : "rgba(251,146,60,0.3)",
        animationDelay: delay,
        animation: "float 7s ease-in-out infinite",
      }}
    >
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${isOptimal ? "bg-green-400" : "bg-orange-400"}`} />
        <span className="text-white/60 text-xs">{label}</span>
      </div>
      <div className="flex items-baseline gap-1 mt-0.5">
        <span className="text-white font-bold text-sm">{value}</span>
        <span className="text-white/40 text-[10px]">{unit}</span>
      </div>
    </div>
  );
}

function RetestCard() {
  return (
    <div className="glass rounded-xl p-3 shadow-xl border border-blue-500/20 min-w-[160px]"
      style={{ animation: "float 9s ease-in-out infinite", animationDelay: "-1s" }}>
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-white/60 text-[10px] font-medium">Next Retest</span>
      </div>
      <div className="text-white font-bold text-xs">In 24 days</div>
      <div className="text-white/40 text-[10px] mt-0.5">Preventura Core</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen pt-[68px] overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(23,106,221,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(23,106,221,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #176ADD 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #00d4e8 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
              <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">
                Digital Prevention Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-0.03em] text-white mb-6">
              Understand your health{" "}
              <span className="gradient-text">before problems</span>{" "}
              become visible.
            </h1>

            {/* Subheadline */}
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0">
              Preventura combines at-home biomarker testing, certified lab analysis and a premium app experience — turning your blood values into a clear Health Score, prioritized insights and a personal retest plan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <a href="#early-access" className="btn-primary text-base">
                Get Early Access
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary text-base">
                See how it works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust microcopy */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start text-white/40 text-sm">
              {["At-home sample collection", "Lab-based analysis", "App-based insights"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: App visual */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            {/* Main phone */}
            <div className="float-animation relative z-10">
              <PhoneMockup />
            </div>

            {/* Floating cards */}
            <div className="absolute left-0 top-[15%] z-20 hidden sm:block">
              <FloatingBiomarkerCard label="ApoB" value="82" unit="mg/dl" status="optimal" delay="-1s" />
            </div>
            <div className="absolute right-0 top-[25%] z-20 hidden sm:block">
              <FloatingBiomarkerCard label="hs-CRP" value="1.2" unit="mg/l" status="notice" delay="-3s" />
            </div>
            <div className="absolute left-2 bottom-[20%] z-20 hidden sm:block">
              <FloatingBiomarkerCard label="Vitamin D" value="24" unit="ng/ml" status="notice" delay="-5s" />
            </div>
            <div className="absolute right-0 bottom-[10%] z-20 hidden sm:block">
              <RetestCard />
            </div>

            {/* Glow behind phone */}
            <div className="absolute inset-0 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle at center, #176ADD 0%, transparent 70%)" }} />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(transparent, #050d1a)" }} />
    </section>
  );
}
