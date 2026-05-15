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

/* Packaging-Foto Showcase — zeigt das echte Kit-Produkt.
   Bild-Pfad: /public/images/kit.jpg (dort die Packaging-Foto-Datei ablegen).
   Wenn die Datei fehlt, bleibt der gestaltete dunkle Kasten sichtbar. */
function KitShowcase() {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-16 observe-fade" style={{ minHeight: 420 }}>
      {/* Hintergrundfoto — lege /public/images/kit.jpg ab */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/kit.jpg"
        alt="Preventura Core Kit — geöffnet"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />

      {/* Hintergrund-Fallback (sichtbar wenn kein Foto) */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, #0a1f3d 0%, #0e2a50 50%, #081529 100%)"
      }}/>

      {/* Gradient-Overlay über dem Foto für Lesbarkeit */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to right, rgba(5,13,26,0.92) 0%, rgba(5,13,26,0.55) 50%, rgba(5,13,26,0.15) 100%)"
      }}/>

      {/* Inhalt */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[420px] px-10 py-12 max-w-lg">
        <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-6 w-fit">
          <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Preventura Core Kit</span>
        </div>

        <h3 className="text-white font-black text-4xl sm:text-5xl tracking-tight leading-tight mb-4">
          Alles dabei.<br/>
          <span style={{ background: "linear-gradient(135deg, #176ADD, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Sofort einsatzbereit.
          </span>
        </h3>

        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Das Preventura Core Kit enthält alles für eine einfache kapilläre Blutentnahme zu Hause — inklusive vorfrankiertem Rückumschlag und Schritt-für-Schritt-Anleitung in der App.
        </p>

        {/* Kit-Inhalt */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { label: "Collection Pouch", icon: "🧪" },
            { label: "Safety Bag", icon: "🛡️" },
            { label: "Freiumschlag", icon: "📬" },
            { label: "QR-Aktivierung", icon: "📱" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 rounded-full px-3.5 py-1.5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <span className="text-sm">{item.icon}</span>
              <span className="text-white/70 text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Tagline aus dem echten Packaging */}
        <p className="text-white/30 text-sm italic">
          &ldquo;Ihre Gesundheit. Unsere Priorität.&rdquo;
        </p>
      </div>

      {/* Drei Schritte-Icons rechts (dekorativ, spiegelt die Kit-Anleitung wider) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[
          { num: "1", label: "Aktivieren", icon: "📱" },
          { num: "2", label: "Probe entnehmen", icon: "🩸" },
          { num: "3", label: "Zurücksenden", icon: "📬" },
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
            <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 text-xs font-black shrink-0">
              {s.num}
            </div>
            <div>
              <div className="text-white text-xs font-semibold">{s.label}</div>
            </div>
            <span className="ml-2 text-base">{s.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

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

        {/* Packaging Foto Showcase */}
        <KitShowcase />

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
