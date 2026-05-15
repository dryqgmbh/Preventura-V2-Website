"use client";
import React from "react";

/* ── Score-Ring Farbe je nach Wert (exakt wie App) ── */
function getScoreRingColor(score: number) {
  if (score >= 65) return { id: "heroGood", c1: "#176ADD", c2: "#22c55e" };
  if (score >= 40) return { id: "heroMid", c1: "#176ADD", c2: "#60a5fa" };
  return { id: "heroBad", c1: "#ef4444", c2: "#dc2626" };
}

/* ── Exaktes App Phone Mockup nach Figma ── */
function PhoneMockup() {
  const score = 62;
  const ring = getScoreRingColor(score);
  const radius = 60;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;

  return (
    <div className="relative w-[290px] mx-auto" style={{ height: 590 }}>
      {/* Frame */}
      <div
        className="absolute inset-0 rounded-[44px] overflow-hidden border border-white/[0.1] shadow-[0_60px_120px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.04)]"
        style={{ background: "linear-gradient(170deg, #0e2244 0%, #050d1a 100%)" }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[96px] h-[26px] bg-black rounded-full z-10" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-[22px] pb-1 text-[11px] text-white/50">
          <span className="font-semibold">9:41</span>
          <div className="flex gap-1 items-end">
            {[3,4,5,4].map((h,i)=>(
              <div key={i} className="w-[3px] bg-white/60 rounded-sm" style={{height:h*2.5}}/>
            ))}
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center gap-2 px-5 pt-1 pb-2 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <svg className="w-4 h-4 text-white/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
          </svg>
          <span className="text-white text-[12px] font-bold">Health Check — Mai 2025</span>
        </div>

        {/* Score ring */}
        <div className="flex justify-center py-4">
          <div className="relative w-[148px] h-[148px]">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 148 148">
              <circle cx="74" cy="74" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9"/>
              <circle cx="74" cy="74" r={radius} fill="none"
                stroke={`url(#${ring.id})`} strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={circ} strokeDashoffset={offset}/>
              <defs>
                <linearGradient id={ring.id} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={ring.c1}/>
                  <stop offset="100%" stopColor={ring.c2}/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white/40 text-[8px] uppercase tracking-widest font-semibold">Gesundheitswert</span>
              <span className="text-white font-black text-[40px] leading-none mt-0.5">{score}</span>
              <span className="text-white/30 text-[11px]">/100</span>
            </div>
          </div>
        </div>

        {/* Optimal / Auffällig badges */}
        <div className="flex items-center gap-2 px-5 pb-3">
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.25)" }}>
            2 Optimal
          </span>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.25)" }}>
            3 Auffällig
          </span>
        </div>

        {/* Potential card */}
        <div className="mx-4 mb-2.5 rounded-2xl border border-white/[0.06] p-3"
          style={{background:"rgba(255,255,255,0.04)"}}>
          <div className="text-white/30 text-[8px] uppercase tracking-widest mb-2">Verbesserungspotenzial</div>
          <div className="flex items-center gap-2">
            <div className="text-center shrink-0">
              <div className="text-white/30 text-[8px] uppercase">Aktuell</div>
              <div className="text-white font-black text-[17px] leading-tight">62</div>
            </div>
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-400" style={{width:"62%"}}/>
              </div>
              <div className="h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width:"71%",background:"linear-gradient(90deg,rgba(23,106,221,0.5),#22c55e)"}}/>
              </div>
            </div>
            <div className="text-center shrink-0">
              <div className="text-white/30 text-[8px] uppercase">Prognose</div>
              <div className="text-green-400 font-black text-[17px] leading-tight">71</div>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <span className="text-white text-[9px] font-black">+9</span>
            </div>
          </div>
        </div>

        {/* Top 3 Impact — exakt wie App */}
        <div className="mx-4 rounded-2xl border border-white/[0.06] p-3"
          style={{background:"rgba(255,255,255,0.04)"}}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-white/30 text-[8px] uppercase tracking-widest">Top 3 Impact Optimierung</span>
            <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
          <div className="text-white/20 text-[8px] mb-2">Sortiert nach gewichtetem Impact auf den Score</div>
          {[
            {name:"Vitamin D", curr:"24 ng/ml", target:"≥ 30 ng/ml", delta:"+3"},
            {name:"Ferritin", curr:"28.6 ng/ml", target:"≥ 50 ng/ml", delta:"+2"},
            {name:"Magnesium", curr:"1.65 mg/dl", target:"≥ 2.0 mg/dl", delta:"+1"},
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between py-1 border-t border-white/[0.04] first:border-0 first:pt-0">
              <div>
                <div className="text-white text-[10px] font-semibold">{item.name}</div>
                <div className="text-white/30 text-[8px]">{item.curr} → {item.target}</div>
              </div>
              <div className="bg-green-500 rounded-full px-1.5 py-0.5">
                <span className="text-white text-[8px] font-black">{item.delta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingCard({ children, className = "", style }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/[0.1] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${className}`}
      style={{ background: "rgba(13,31,56,0.88)", ...style }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[80px] overflow-hidden flex flex-col" style={{ background: "#050d1a" }}>
      {/* Background photo — lege /public/images/hero-bg.jpg ab (z.B. abstraktes Gesundheitsbild) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.07 }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />

      {/* Gradient-Überlagerung über dem Bild */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 110% 70% at 50% -5%, rgba(23,106,221,0.38) 0%, transparent 65%), radial-gradient(ellipse 70% 50% at 80% 60%, rgba(0,212,232,0.09) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(34,197,94,0.05) 0%, transparent 60%)"
      }}/>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage:"linear-gradient(rgba(23,106,221,1) 1px, transparent 1px), linear-gradient(90deg, rgba(23,106,221,1) 1px, transparent 1px)",
        backgroundSize:"70px 70px",
      }}/>

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 lg:pt-14 flex-1">
        {/* Badge mit Urgency */}
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot"/>
          <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Früher Zugang · Limitierte Plätze</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-[80px] xl:text-[88px] font-black leading-[1.0] tracking-[-0.04em] text-white mb-6 max-w-[900px]">
          Verstehe deine Gesundheit,{" "}
          <br className="hidden sm:block"/>
          <span className="gradient-text">bevor Probleme</span>
          <br className="hidden sm:block"/>
          sichtbar werden.
        </h1>

        {/* Sub */}
        <p className="text-white/50 text-lg sm:text-xl leading-relaxed mb-8 max-w-[580px]">
          Preventura kombiniert Heimtests zur Biomarker-Analyse, zertifizierte Laborauswertung und eine Premium-App — für einen klaren Gesundheitswert, priorisierte Erkenntnisse und einen persönlichen Retest-Plan.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <a href="#fruehen-zugang"
            className="inline-flex items-center justify-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.45)] hover:shadow-[0_12px_40px_rgba(23,106,221,0.6)] hover:-translate-y-0.5">
            Frühen Zugang sichern
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
          <a href="#so-funktionierts"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 text-white font-semibold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5">
            <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            So funktioniert&apos;s
          </a>
        </div>

        {/* Trust micro */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center text-white/30 text-sm mb-10">
          {["Heimprobe · kein Arztbesuch", "Zertifizierte Laboranalyse", "App-basierte Auswertung"].map((t,i) => (
            <span key={i} className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-500/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {t}
            </span>
          ))}
        </div>

        {/* Phone composition */}
        <div className="relative w-full max-w-[700px] mx-auto" style={{minHeight:520}}>
          {/* Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{background:"radial-gradient(circle, #176ADD 0%, transparent 70%)"}}/>

          {/* Phone */}
          <div className="float-animation relative z-10 flex justify-center">
            <PhoneMockup/>
          </div>

          {/* Floating card: ApoB — links */}
          <FloatingCard className="hidden sm:block left-0 top-[90px] z-20 px-4 py-3 min-w-[145px]"
            style={{animation:"float 7s ease-in-out infinite", animationDelay:"-1s"}}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400"/>
              <span className="text-white/50 text-xs">ApoB</span>
              <span className="ml-auto text-[9px] text-green-400 font-semibold bg-green-500/15 rounded-full px-1.5 py-0.5">Optimal</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-black text-xl">82</span>
              <span className="text-white/30 text-xs">mg/dl</span>
            </div>
          </FloatingCard>

          {/* Floating card: hs-CRP — rechts, ROT */}
          <FloatingCard className="hidden sm:block right-0 top-[130px] z-20 px-4 py-3 min-w-[155px]"
            style={{animation:"float 8.5s ease-in-out infinite", animationDelay:"-3s"}}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400"/>
              <span className="text-white/50 text-xs">hs-CRP</span>
              <span className="ml-auto text-[9px] text-red-400 font-semibold bg-red-500/15 rounded-full px-1.5 py-0.5">Beobachten</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-black text-xl">1.8</span>
              <span className="text-white/30 text-xs">mg/l</span>
            </div>
          </FloatingCard>

          {/* Floating card: Retest — links unten */}
          <FloatingCard className="hidden sm:block left-2 bottom-[90px] z-20 px-4 py-3 min-w-[175px]"
            style={{animation:"float 9s ease-in-out infinite", animationDelay:"-5s"}}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/25 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-xs">Nächster Retest</div>
                <div className="text-blue-400 text-[11px]">In 24 Tagen</div>
              </div>
            </div>
          </FloatingCard>

          {/* Floating card: Vitamin D — rechts unten */}
          <FloatingCard className="hidden sm:block right-0 bottom-[110px] z-20 px-4 py-3 min-w-[155px]"
            style={{animation:"float 7.5s ease-in-out infinite", animationDelay:"-2s"}}>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400"/>
              <span className="text-white/50 text-xs">Vitamin D</span>
            </div>
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="text-white font-black text-xl">24</span>
              <span className="text-white/30 text-xs">ng/ml</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-white/30">Ziel</span>
              <span className="text-green-400 font-semibold">≥ 30</span>
              <div className="ml-auto bg-green-500 rounded-full px-1.5 py-0.5 font-bold text-white text-[9px]">+3</div>
            </div>
          </FloatingCard>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{background:"linear-gradient(transparent, #050d1a)"}}/>
    </section>
  );
}
