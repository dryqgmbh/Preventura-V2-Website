"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Order your kit",
    body: "Order Preventura Core online. Your kit arrives with everything needed for a capillary blood collection at home.",
    emoji: "📦",
  },
  {
    number: "02",
    title: "Activate in the app",
    body: "Scan the QR code or enter your activation code. Kit activation takes less than 60 seconds.",
    emoji: "📱",
  },
  {
    number: "03",
    title: "Collect at home",
    body: "Follow the step-by-step in-app instructions to collect a small capillary blood sample. No clinic visit needed.",
    emoji: "🩸",
  },
  {
    number: "04",
    title: "Send to the lab",
    body: "Place the sample in the prepaid return envelope and send it to our professional laboratory partner for certified analysis.",
    emoji: "📬",
  },
  {
    number: "05",
    title: "Get your score",
    body: "Results appear in the app. Your Health Score is calculated, Top 3 Impact areas identified, Action Plan generated.",
    emoji: "📊",
  },
  {
    number: "06",
    title: "Improve and retest",
    body: "Follow your plan, track progress and retest on schedule. Your score updates with every test.",
    emoji: "🔄",
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: "#f0f4fa" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div className="observe-fade">
            <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-600/25 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">How It Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-[#0a1628] tracking-[-0.03em] leading-tight">
              Preventura turns biomarkers into{" "}
              <span style={{ background: "linear-gradient(135deg, #176ADD, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                a clear system.
              </span>
            </h2>
          </div>
          <div className="observe-fade" style={{ transitionDelay: "100ms" }}>
            <p className="text-[#475569] text-xl leading-relaxed">
              From your first kit to measurable progress — a structured, repeatable process designed for long-term health tracking.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border relative overflow-hidden observe-fade"
              style={{
                background: i % 2 === 0 ? "#ffffff" : "#1a3058",
                borderColor: i % 2 === 0 ? "rgba(0,0,0,0.06)" : "rgba(23,106,221,0.2)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="absolute top-4 right-4 text-[64px] font-black leading-none select-none"
                style={{ color: i % 2 === 0 ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)" }}
              >
                {step.number}
              </div>
              <div className="text-3xl mb-4">{step.emoji}</div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: i % 2 === 0 ? "#176ADD" : "rgba(23,106,221,0.7)" }}
              >
                Step {step.number}
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: i % 2 === 0 ? "#0a1628" : "#ffffff" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: i % 2 === 0 ? "#64748b" : "rgba(255,255,255,0.5)" }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
