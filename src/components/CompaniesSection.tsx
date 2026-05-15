"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CompaniesSection() {
  const ref = useScrollReveal();
  return (
    <section id="companies" className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="glass rounded-2xl border border-blue-500/15 p-10 lg:p-14 observe-fade">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">For Companies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Preventive health for{" "}
                <span className="gradient-text">modern teams.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                Preventura supports companies with recurring employee health check-ins, app-based insights and anonymized cohort-level reporting — where legally and ethically appropriate.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: "🔒",
                    text: "No individual employee health data is shared with the employer — ever.",
                  },
                  {
                    icon: "📊",
                    text: "Anonymized trend reports require a minimum cohort size to ensure privacy.",
                  },
                  {
                    icon: "🔄",
                    text: "Recurring check-ins support long-term workforce health tracking.",
                  },
                  {
                    icon: "🎁",
                    text: "Flexible formats: individual employee health credits or group programs.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <a href="#early-access" className="btn-primary">
                Request company access
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Recurring check-ins", icon: "🔄", desc: "Quarterly or bi-annual panels" },
                { label: "Cohort insights", icon: "📈", desc: "Anonymized group-level trends" },
                { label: "Employee credits", icon: "🎁", desc: "Flexible benefit integration" },
                { label: "Privacy-first", icon: "🔒", desc: "GDPR-conscious by design" },
              ].map((card, i) => (
                <div key={i} className="glass-light rounded-xl p-4 border border-white/[0.06]">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{card.label}</div>
                  <div className="text-white/40 text-xs">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
