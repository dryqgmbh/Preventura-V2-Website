"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Order your kit",
    body: "Order Preventura Core online. Your kit arrives with everything needed for a capillary blood collection at home.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Activate in the app",
    body: "Scan the QR code on your kit or enter your activation code. Kit activation takes less than 60 seconds.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Collect at home",
    body: "Follow the step-by-step instructions in the app to collect a small capillary blood sample — no clinic visit needed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Send to the lab",
    body: "Place your sample in the prepaid return envelope. It's shipped directly to our professional laboratory partner for certified analysis.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Get your score",
    body: "Results appear in the Preventura app. Your Health Score is calculated, your Top 3 Impact areas are identified, and your Action Plan is ready.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Improve and retest",
    body: "Follow your personalized action plan, track your progress and retest on schedule. See your score improve over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: "#0a1628" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="text-center mb-16 observe-fade">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Preventura turns biomarkers into{" "}
            <span className="gradient-text">a clear prevention system.</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
            From your first kit to measurable progress — a structured, repeatable process designed for long-term health tracking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass card-hover rounded-2xl p-6 border border-white/[0.06] relative overflow-hidden observe-fade"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Step number background */}
              <div className="absolute top-4 right-5 text-[72px] font-black text-white/[0.04] leading-none select-none">
                {step.number}
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 relative z-10">
                {step.icon}
              </div>
              <div className="text-blue-400/70 text-xs font-bold uppercase tracking-widest mb-1.5 relative z-10">
                Step {step.number}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 relative z-10">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
