"use client";
import React from "react";

const signals = [
  { icon: "🏠", label: "At-home testing", sub: "No clinic visit required" },
  { icon: "🔬", label: "Lab-based analysis", sub: "Professional lab partners" },
  { icon: "🔒", label: "GDPR-conscious", sub: "Privacy-first by design" },
  { icon: "📱", label: "Premium app", sub: "Clear insights, not raw data" },
  { icon: "🔄", label: "Retest recommendations", sub: "Track progress over time" },
];

export default function TrustBar() {
  return (
    <section className="py-7 border-y" style={{ background: "#0a1628", borderColor: "rgba(23,106,221,0.1)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {signals.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl shrink-0">{s.icon}</span>
              <div>
                <div className="text-white text-sm font-semibold leading-tight">{s.label}</div>
                <div className="text-white/30 text-xs mt-0.5">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
