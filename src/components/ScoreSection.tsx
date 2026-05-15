"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function getScoreGrad(score: number) {
  if (score >= 65) return { id: "ss_good", c1: "#176ADD", c2: "#22c55e" };
  if (score >= 40) return { id: "ss_mid", c1: "#176ADD", c2: "#60a5fa" };
  return { id: "ss_bad", c1: "#ef4444", c2: "#dc2626" };
}

function AnimatedScoreRing({ score, animated }: { score: number; animated: boolean }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const g = getScoreGrad(score);

  return (
    <div className="relative w-[220px] h-[220px]">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12"/>
        <circle cx="110" cy="110" r={radius} fill="none" stroke="rgba(23,106,221,0.08)" strokeWidth="12"
          strokeDasharray={circumference} strokeDashoffset="0"/>
        <circle cx="110" cy="110" r={radius} fill="none" stroke={`url(#${g.id})`}
          strokeWidth="12" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          style={{transition:"stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)"}}/>
        <defs>
          <linearGradient id={g.id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={g.c1}/><stop offset="100%" stopColor={g.c2}/>
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-white/40 text-xs uppercase tracking-widest font-medium">Gesundheitswert</span>
        <span className="text-white font-black text-6xl leading-none mt-1">{animated ? score : 0}</span>
        <span className="text-white/30 text-sm">/100</span>
        <div className="mt-2 flex items-center gap-1.5 bg-green-500/15 border border-green-500/25 rounded-full px-3 py-1">
          <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
          <span className="text-green-400 text-xs font-semibold">+11 seit letztem Test</span>
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
    <section id="score" className="py-24 px-6" style={{background:"#050d1a"}}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-16 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Preventura Score</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white tracking-[-0.03em] leading-tight max-w-4xl mx-auto">
            Ein Wert.{" "}
            <span className="gradient-text">Klare Prioritäten.</span>{" "}
            Messbarer Fortschritt.
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mt-5">
            Statt isolierter Laborwerte siehst du, was jetzt am wichtigsten ist — und wie sich dein Score über Zeit verändert.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col items-center observe-fade" ref={scoreRef}>
            <AnimatedScoreRing score={76} animated={animated}/>

            <div className="mt-8 w-full max-w-sm glass rounded-2xl p-5 border border-white/[0.06]">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-4">Verbesserungspotenzial</div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">Aktuell</div>
                  <div className="text-white font-black text-3xl">76</div>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full rounded-full" style={{
                      width: animated ? "76%" : "0%",
                      background:"linear-gradient(90deg, #176ADD, #00d4e8)",
                      transition:"width 2s ease-out 0.5s",
                    }}/>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{
                      width: animated ? "83%" : "0%",
                      background:"linear-gradient(90deg, rgba(23,106,221,0.4), #22c55e)",
                      transition:"width 2s ease-out 0.8s",
                    }}/>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">Prognose</div>
                  <div className="text-green-400 font-black text-3xl">83</div>
                </div>
                <div className="impact-badge">+7</div>
              </div>
              <p className="text-white/30 text-xs">Wenn du deine Top 3 Impact-Bereiche angehst</p>
            </div>
          </div>

          <div className="space-y-6 observe-fade" style={{transitionDelay:"150ms"}}>
            <h3 className="text-white font-bold text-2xl">Dein aktueller Gesundheits-Baseline, quantifiziert.</h3>
            <p className="text-white/50 leading-relaxed text-lg">
              Der Preventura Score fasst ausgewählte Biomarker-Ergebnisse in einem klaren, verfolgbaren Wert zwischen 0 und 100 zusammen. Er zeigt, wo Verbesserungspotenzial besteht — nicht nur, welche Werte außerhalb des Referenzbereichs liegen.
            </p>

            <div className="space-y-5">
              {[
                { icon: "🎯", title: "Score basiert auf echten Laborwerten", desc: "Berechnet aus realen Labordaten, nicht aus selbst angegebenen Angaben oder Schätzungen." },
                { icon: "📈", title: "Verfolgt Verbesserungen über Zeit", desc: "Jeder Retest aktualisiert deinen Score. Du siehst genau, wie er sich verändert hat und warum." },
                { icon: "🔍", title: "Zeigt den nächsten besten Schritt", desc: "Der Score ist direkt mit deinen Top 3 Impact-Bereichen verknüpft — immer dein nächster bester Schritt." },
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
              <a href="#fruehen-zugang"
                className="inline-flex items-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-[0_8px_32px_rgba(23,106,221,0.35)] hover:-translate-y-0.5">
                Meinen Score erhalten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
