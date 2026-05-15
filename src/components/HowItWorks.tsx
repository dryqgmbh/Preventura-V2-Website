"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { number: "01", title: "Kit bestellen", body: "Preventura Core online bestellen. Das Kit wird mit allem geliefert, was für eine kapilläre Blutentnahme zu Hause benötigt wird.", emoji: "📦" },
  { number: "02", title: "In der App aktivieren", body: "QR-Code scannen oder Aktivierungscode eingeben. Die Kit-Aktivierung dauert weniger als 60 Sekunden.", emoji: "📱" },
  { number: "03", title: "Zuhause entnehmen", body: "Schritt-für-Schritt-Anleitung in der App zur Entnahme einer kleinen kapillären Blutprobe folgen. Kein Arztbesuch nötig.", emoji: "🩸" },
  { number: "04", title: "Ans Labor senden", body: "Probe in den vorfrankierten Rückumschlag legen und ans Labor senden. Zertifizierte Analyse durch unseren professionellen Laborpartner.", emoji: "📬" },
  { number: "05", title: "Deinen Score erhalten", body: "Ergebnisse erscheinen in der App. Gesundheitswert wird berechnet, Top 3 Impact-Bereiche identifiziert, Aktionsplan erstellt.", emoji: "📊" },
  { number: "06", title: "Verbessern & erneut testen", body: "Plan befolgen, Fortschritt verfolgen und zum empfohlenen Zeitpunkt erneut testen. Der Score wird mit jedem Test aktualisiert.", emoji: "🔄" },
];

export default function HowItWorks() {
  const ref = useScrollReveal();
  return (
    <section id="so-funktionierts" className="py-24 px-6" style={{background:"#f0f4fa"}}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div className="observe-fade">
            <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-600/25 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">So funktioniert&apos;s</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#0a1628] tracking-[-0.03em] leading-tight">
              Preventura macht Biomarker zu einem{" "}
              <span style={{background:"linear-gradient(135deg, #176ADD, #22c55e)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"}}>
                klaren System.
              </span>
            </h2>
          </div>
          <div className="observe-fade" style={{transitionDelay:"100ms"}}>
            <p className="text-[#475569] text-xl leading-relaxed">
              Vom ersten Kit bis zu messbaren Ergebnissen — ein strukturierter, wiederholbarer Prozess für langfristiges Gesundheits-Tracking.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl p-6 border relative overflow-hidden observe-fade"
              style={{
                background: i % 2 === 0 ? "#ffffff" : "#1a3058",
                borderColor: i % 2 === 0 ? "rgba(0,0,0,0.06)" : "rgba(23,106,221,0.2)",
                transitionDelay:`${i*80}ms`,
              }}>
              <div className="absolute top-4 right-4 text-[64px] font-black leading-none select-none"
                style={{color: i%2===0 ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)"}}>
                {step.number}
              </div>
              <div className="text-3xl mb-4">{step.emoji}</div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{color: i%2===0 ? "#176ADD" : "rgba(23,106,221,0.7)"}}>
                Schritt {step.number}
              </div>
              <h3 className="font-bold text-lg mb-2" style={{color: i%2===0 ? "#0a1628" : "#ffffff"}}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{color: i%2===0 ? "#64748b" : "rgba(255,255,255,0.5)"}}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
