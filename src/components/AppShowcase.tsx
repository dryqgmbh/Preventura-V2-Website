"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PreventuraIcon } from "./PreventuraLogo";

/* ── Score-Ring Farbe (exakt nach App) ── */
function getScoreGradient(score: number): { id: string; c1: string; c2: string } {
  if (score >= 65) return { id: `sg${score}g`, c1: "#176ADD", c2: "#22c55e" };
  if (score >= 40) return { id: `sg${score}m`, c1: "#176ADD", c2: "#60a5fa" };
  return { id: `sg${score}b`, c1: "#ef4444", c2: "#dc2626" };
}

function MiniScoreRing({ score, size = 44 }: { score: number; size?: number }) {
  const r = size * 0.4;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const g = getScoreGradient(score);
  const cx = size / 2, cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" style={{display:"inline-block"}}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={size * 0.08}/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={`url(#${g.id})`}
        strokeWidth={size * 0.08} strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset}/>
      <defs>
        <linearGradient id={g.id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={g.c1}/><stop offset="100%" stopColor={g.c2}/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Biomarker-Zeile exakt wie in der App ── */
function BiomarkerRow({ name, value, unit, status }: {
  name: string; value: string; unit: string; status: "optimal" | "attention";
}) {
  return (
    <div className="flex items-center justify-between rounded-xl px-3 py-3" style={{background:"rgba(255,255,255,0.05)"}}>
      <div className="flex items-center gap-3">
        {status === "optimal" ? (
          <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
            <span className="text-red-400 text-[10px] font-black">!</span>
          </div>
        )}
        <span className="text-white text-sm font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-white text-sm font-bold">{value}</span>
        <span className="text-white/40 text-xs">{unit}</span>
        <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}

/* ── Bento Cards ── */

function ScoreCard() {
  const score = 76;
  const g = getScoreGradient(score);
  const r = 50, circ = 2 * Math.PI * r;
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/35 text-[10px] uppercase tracking-widest mb-3">Gesundheitswert</div>
      <div className="flex items-center gap-5 flex-1">
        <div className="relative shrink-0 w-[110px] h-[110px]">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 110 110">
            <circle cx="55" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9"/>
            <circle cx="55" cy="55" r={r} fill="none" stroke={`url(#${g.id}sc)`}
              strokeWidth="9" strokeLinecap="round"
              strokeDasharray={circ} strokeDashoffset={circ - (score/100)*circ}/>
            <defs>
              <linearGradient id={`${g.id}sc`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={g.c1}/><stop offset="100%" stopColor={g.c2}/>
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white font-black text-3xl leading-none">{score}</span>
            <span className="text-white/30 text-[9px]">/100</span>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {/* +11 since last test */}
          <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5 w-fit">
            <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7 7 7"/>
            </svg>
            <span className="text-green-400 text-[10px] font-bold">+11 seit letztem Test</span>
          </div>
          {/* Stats row */}
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-1.5">
              <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
              <span className="text-red-400 text-[10px] font-bold">-10 vs. Vortest</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5">
              <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-green-400 text-[10px] font-bold">2 Optimal</span>
            </div>
            <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-1.5">
              <span className="text-red-400 text-[10px] font-bold">3 Auffällig</span>
            </div>
          </div>
          <p className="text-white/25 text-[9px] leading-relaxed">Aktualisiert nach jedem Retest</p>
        </div>
      </div>
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <PreventuraIcon width={18} height={18}/>
        <div className="text-white font-semibold text-sm">Laborergebnisse</div>
      </div>
      <div className="space-y-2 flex-1">
        <BiomarkerRow name="Ferritin" value="28.6" unit="ng/ml" status="attention"/>
        <BiomarkerRow name="Magnesium" value="1.65" unit="mg/dl" status="attention"/>
        <BiomarkerRow name="Cortisol" value="29.8" unit="µg/24h" status="attention"/>
        <BiomarkerRow name="Vitamin B12" value="278" unit="pg/ml" status="optimal"/>
        <BiomarkerRow name="Vitamin D" value="24" unit="ng/ml" status="optimal"/>
      </div>
    </div>
  );
}

function ImpactCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-white font-semibold text-sm mb-1">Schwerpunkt-Maßnahmen</div>
      <div className="text-white/20 text-[9px] mb-3">Fokussier dich auf diese Maßnahmen für den größten Score-Impact</div>
      <div className="space-y-2.5 flex-1">
        {[
          { name: "Vitamin D", curr: "24 ng/ml", target: "≥ 30 ng/ml", delta: "+3", hint: "20 Min. Sonnenlicht oder Supplementierung" },
          { name: "Ferritin", curr: "28.6 ng/ml", target: "≥ 50 ng/ml", delta: "+2", hint: "Eisenreiche Ernährung erhöhen" },
          { name: "Magnesium", curr: "1.65 mg/dl", target: "≥ 2.0 mg/dl", delta: "+1", hint: "Magnesium vor dem Schlafen" },
        ].map((item) => (
          <div key={item.name} className="rounded-xl px-3 py-2.5 border border-white/[0.08]"
            style={{background:"rgba(255,255,255,0.05)"}}>
            <div className="flex items-center justify-between mb-1">
              <div className="text-white font-bold text-sm">{item.name}</div>
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <span className="text-white text-[10px] font-black">{item.delta}</span>
              </div>
            </div>
            <div className="text-white/30 text-[9px]">{item.curr} → {item.target}</div>
            <div className="text-white/20 text-[9px] mt-0.5">{item.hint}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RetestBentoCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/35 text-[10px] uppercase tracking-widest mb-3">Nächste Auswertung</div>
      <div className="rounded-2xl p-3 mb-3 border border-blue-500/20 flex-1"
        style={{background:"rgba(23,106,221,0.07)"}}>
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/25 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-xs">In 24 Tagen</div>
            <div className="text-white/30 text-[10px]">Preventura Core</div>
          </div>
        </div>
        <div className="text-white/30 text-[9px] mb-1.5">Prioritäts-Marker</div>
        <div className="flex gap-1 flex-wrap">
          {["Vitamin D","Ferritin","ApoB"].map(m=>(
            <span key={m} className="biomarker-tag text-[9px] px-1.5 py-0.5">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrendsCard() {
  const tests = [
    { label: "Feb", score: 52 },
    { label: "Apr", score: 64 },
    { label: "Mai", score: 76 },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/35 text-[10px] uppercase tracking-widest mb-3">Verlauf</div>
      <div className="flex items-end gap-3 flex-1 pb-1">
        {tests.map((d,i) => {
          const g = getScoreGradient(d.score);
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="relative">
                <MiniScoreRing score={d.score} size={42}/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-[11px] rotate-90">{d.score}</span>
                </div>
              </div>
              <div className="text-white/30 text-[9px]">{d.label}</div>
              <div style={{display:"none"}}>{g.id}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-green-400 text-[10px] font-semibold">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7 7 7"/>
        </svg>
        Score +24 über 3 Tests
      </div>
    </div>
  );
}

function ActionPlanCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="text-white/35 text-[10px] uppercase tracking-widest mb-3">KI-Aktionsplan</div>
      <div className="grid sm:grid-cols-3 gap-3 flex-1">
        {[
          { title: "Vitamin D Protokoll", priority: "Hoch", desc: "20 Min. Sonnenlicht täglich oder Vitamin D3 Supplementierung", col: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", pColor: "text-red-400" },
          { title: "Eisenoptimierung", priority: "Mittel", desc: "Rotes Fleisch, Hülsenfrüchte und Vitamin-C-reiche Lebensmittel integrieren", col: "rgba(23,106,221,0.05)", border: "rgba(23,106,221,0.15)", pColor: "text-blue-400" },
          { title: "Lipid-Optimierung", priority: "Mittel", desc: "Omega-3-Fettsäuren erhöhen, gesättigte Fettzufuhr reduzieren", col: "rgba(23,106,221,0.05)", border: "rgba(23,106,221,0.15)", pColor: "text-blue-400" },
        ].map((a) => (
          <div key={a.title} className="rounded-2xl p-3 border"
            style={{background:a.col, borderColor:a.border}}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-xs font-bold">{a.title}</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${a.pColor}`}
                style={{background:a.col}}>{a.priority}</span>
            </div>
            <p className="text-white/40 text-[10px] leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const ref = useScrollReveal();
  return (
    <section id="app" className="py-24 px-6" style={{background:"#0a1628"}}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-14 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">App-Erfahrung</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white tracking-[-0.03em] leading-tight mb-4">
            Deine Ergebnisse — in einer{" "}
            <span className="gradient-text">Premium-App.</span>
          </h2>
          <p className="text-white/50 text-xl max-w-xl mx-auto">
            Kein PDF. Kein Portal. Eine Echtzeit-Gesundheitsplattform für Prävention.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 observe-fade" style={{transitionDelay:"100ms"}}>
          <div className="md:col-span-5 glass rounded-3xl p-6 border border-white/[0.08] card-hover min-h-[200px]">
            <ScoreCard/>
          </div>
          <div className="md:col-span-7 glass rounded-3xl p-6 border border-white/[0.08] card-hover min-h-[200px]">
            <DashboardCard/>
          </div>

          <div className="md:col-span-5 glass rounded-3xl p-6 border border-white/[0.08] card-hover min-h-[260px]">
            <ImpactCard/>
          </div>
          <div className="md:col-span-3 glass rounded-3xl p-6 border border-white/[0.08] card-hover min-h-[260px]">
            <RetestBentoCard/>
          </div>
          <div className="md:col-span-4 glass rounded-3xl p-6 border border-white/[0.08] card-hover min-h-[260px]">
            <TrendsCard/>
          </div>

          <div className="md:col-span-12 glass rounded-3xl p-6 border border-white/[0.08] card-hover">
            <ActionPlanCard/>
          </div>
        </div>

        <div className="mt-10 text-center observe-fade" style={{transitionDelay:"200ms"}}>
          <a href="#fruehen-zugang"
            className="inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.35)] hover:-translate-y-0.5">
            App entdecken
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
