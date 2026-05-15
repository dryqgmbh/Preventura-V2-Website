"use client";
import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "Is Preventura a replacement for a doctor?",
    a: "No. Preventura is designed for prevention, tracking and health optimization. It does not replace medical diagnosis or treatment. For medical concerns, always consult a qualified physician. Preventura supports informed conversations with healthcare professionals — it is not a diagnostic tool.",
  },
  {
    q: "How does the home test work?",
    a: "You activate your kit in the Preventura app by scanning the QR code or entering your activation code. Then follow the step-by-step instructions to collect a small capillary blood sample at home. Place the sample in the prepaid return envelope and send it to the lab. Results appear in the app within a few business days.",
  },
  {
    q: "What is the Preventura Score?",
    a: "The Preventura Score summarizes selected biomarker results into a single trackable number between 0 and 100. It helps you understand how your current results compare to optimal reference ranges and highlights where improvement potential exists. The score is updated after every test, allowing you to track progress over time.",
  },
  {
    q: "Why retest regularly?",
    a: "A single measurement is only a snapshot. Biomarkers change in response to lifestyle, nutrition, stress, seasons and other factors. Retesting allows you to see whether your interventions are working, confirm improvements and adjust your focus over time. Preventura's Retest Engine recommends when and how to retest based on your individual results.",
  },
  {
    q: "Which biomarkers are included in Preventura Core?",
    a: "Preventura Core focuses on key prevention markers across cardiovascular health (ApoB, LDL, HDL, triglycerides), metabolism (HbA1c), inflammation (hs-CRP), kidney function (Cystatin C, eGFR), thyroid (TSH) and vitamins and minerals (Vitamin D, Ferritin, B12). The exact panel may vary by market and laboratory setup.",
  },
  {
    q: "Is my health data secure?",
    a: "Health data is handled with a strong focus on privacy, security and GDPR-conscious processes. Your data is stored securely and is never shared with employers or third parties without your explicit consent. Please refer to our Privacy Policy for full details.",
  },
  {
    q: "What happens after I get my results?",
    a: "Once your results appear in the app, your Preventura Score is calculated, your Top 3 Impact areas are identified and a personalized Action Plan is generated. The app also provides a clear retest recommendation so you know when and how to track your progress next.",
  },
];

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border rounded-xl transition-colors duration-200 ${open ? "border-blue-500/30 bg-blue-600/5" : "border-white/[0.06]"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-semibold text-sm leading-snug ${open ? "text-white" : "text-white/70"}`}>{q}</span>
        <div
          className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
            open ? "border-blue-500/50 bg-blue-500/20 rotate-45" : "border-white/15 bg-white/5"
          }`}
        >
          <svg className={`w-3 h-3 ${open ? "text-blue-400" : "text-white/40"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/[0.04] pt-3">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal();
  return (
    <section id="faq" className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-[800px] mx-auto" ref={ref}>
        <div className="text-center mb-12 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Common questions
          </h2>
          <p className="text-white/50">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-3 observe-fade" style={{ transitionDelay: "100ms" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>

        <div className="mt-8 text-center observe-fade" style={{ transitionDelay: "200ms" }}>
          <p className="text-white/30 text-sm">
            More questions?{" "}
            <a href="#early-access" className="text-blue-400 hover:text-blue-300 transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
