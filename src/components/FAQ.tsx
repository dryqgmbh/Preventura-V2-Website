"use client";
import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "Ist Preventura ein Ersatz für einen Arzt?",
    a: "Nein. Preventura ist für Prävention, Verlaufsverfolgung und Gesundheitsoptimierung konzipiert. Es ersetzt keine medizinische Diagnose oder Behandlung. Wende dich bei medizinischen Anliegen immer an einen qualifizierten Arzt. Preventura unterstützt informierte Gespräche mit Gesundheitsexperten — es ist kein Diagnosewerkzeug.",
  },
  {
    q: "Wie funktioniert der Heimtest?",
    a: "Du aktivierst dein Kit in der Preventura-App, indem du den QR-Code scannst oder deinen Aktivierungscode eingibst. Befolge die Schritt-für-Schritt-Anleitung, um zu Hause eine kleine kapilläre Blutprobe zu entnehmen. Lege die Probe in den vorfrankierten Rückumschlag und sende sie ans Labor. Die Ergebnisse erscheinen innerhalb weniger Werktage in der App.",
  },
  {
    q: "Was ist der Preventura Score?",
    a: "Der Preventura Score fasst ausgewählte Biomarker-Ergebnisse in einer einzigen verfolgbaren Zahl zwischen 0 und 100 zusammen. Er hilft dir zu verstehen, wie deine Werte im Vergleich zu optimalen Bereichen stehen, und zeigt, wo Verbesserungspotenzial besteht. Der Score wird nach jedem Test aktualisiert.",
  },
  {
    q: "Warum regelmäßig erneut testen?",
    a: "Eine einzelne Messung ist nur eine Momentaufnahme. Wiederholte Tests ermöglichen es dir zu sehen, ob deine Maßnahmen wirken, Verbesserungen zu bestätigen und deinen Fokus anzupassen. Preventuras Retest Engine empfiehlt, wann und wie du erneut testen solltest — basierend auf deinen individuellen Ergebnissen.",
  },
  {
    q: "Welche Biomarker sind in Preventura Core enthalten?",
    a: "Preventura Core konzentriert sich auf wichtige Präventionsmarker in den Bereichen Herz-Kreislauf (ApoB, LDL, HDL, Triglyceride), Stoffwechsel (HbA1c), Entzündung (hs-CRP), Nierenfunktion (Cystatin C, eGFR), Schilddrüse (TSH) sowie Vitamine und Mineralien (Vitamin D, Ferritin, B12). Das genaue Panel kann je nach Markt und Laboraufstellung variieren.",
  },
  {
    q: "Sind meine Gesundheitsdaten sicher?",
    a: "Gesundheitsdaten werden mit einem starken Fokus auf Datenschutz, Sicherheit und DSGVO-konforme Prozesse behandelt. Deine Daten werden sicher gespeichert und ohne deine ausdrückliche Zustimmung niemals an Arbeitgeber oder Dritte weitergegeben.",
  },
  {
    q: "Was passiert, nachdem ich meine Ergebnisse erhalte?",
    a: "Sobald die Ergebnisse in der App erscheinen, wird dein Preventura Score berechnet, deine Top 3 Impact-Bereiche identifiziert und ein personalisierter Aktionsplan erstellt. Die App liefert außerdem eine klare Retest-Empfehlung.",
  },
];

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border rounded-2xl transition-all duration-200 ${
      open ? "border-[#176ADD]/30 bg-blue-50" : "border-black/[0.06] bg-white"
    }`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className={`font-semibold text-sm leading-snug ${open ? "text-[#0a1628]" : "text-[#334155]"}`}>{q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          open ? "bg-[#176ADD] rotate-45" : "bg-black/[0.05]"
        }`}>
          <svg className={`w-3.5 h-3.5 ${open ? "text-white" : "text-[#64748b]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-5 text-[#475569] text-sm leading-relaxed border-t border-black/[0.04] pt-3">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal();
  return (
    <section id="faq" className="py-24 px-6" style={{ background: "#f0f4fa" }}>
      <div className="max-w-[800px] mx-auto" ref={ref}>
        <div className="text-center mb-12 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0a1628] tracking-[-0.03em] mb-4">
            Häufige Fragen
          </h2>
          <p className="text-[#64748b] text-lg">Alles, was du vor dem Start wissen musst.</p>
        </div>

        <div className="space-y-3 observe-fade" style={{ transitionDelay: "100ms" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="mt-8 text-center observe-fade" style={{ transitionDelay: "200ms" }}>
          <p className="text-[#64748b] text-sm">
            Weitere Fragen?{" "}
            <a href="#fruehen-zugang" className="text-[#176ADD] hover:text-[#1e7ae8] font-medium transition-colors">
              Melde dich bei uns
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
