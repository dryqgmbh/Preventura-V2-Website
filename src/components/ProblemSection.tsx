"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Lab values are hard to interpret",
    body: "Traditional lab reports return dozens of values with reference ranges — but no context, no priorities, no next steps. Most people don't know what to do with the information.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "One-time tests don't show trends",
    body: "Health is not a single data point — it's a pattern over time. Without repeated measurement, it's impossible to see whether markers are improving, declining or stable.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Generic advice doesn't tell you what to fix first",
    body: "\"Eat better, exercise more\" applies to everyone — which means it's useful to no one. Without personalized prioritization, most people don't know where to focus their effort.",
  },
];

export default function ProblemSection() {
  const ref = useScrollReveal();
  return (
    <section className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Eyebrow */}
        <div className="text-center mb-12 observe-fade">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Most people only see their blood values{" "}
            <span className="text-orange-400">once something feels wrong.</span>
          </h2>
          <p className="text-white/50 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
            Preventive health often fails because lab results are hard to understand, rarely tracked over time and not translated into concrete next steps.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="glass card-hover rounded-2xl p-6 border border-white/[0.06] observe-fade"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                {p.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
