"use client";
import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PreventuraIcon } from "./PreventuraLogo";

export default function EarlyAccess() {
  const ref = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="fruehen-zugang" className="py-28 px-6 relative overflow-hidden" style={{ background: "#050d1a" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #176ADD 0%, transparent 70%)" }} />

      <div className="max-w-[680px] mx-auto text-center relative z-10" ref={ref}>
        <div className="observe-fade">
          <div className="flex justify-center mb-6">
            <PreventuraIcon width={60} height={60} />
          </div>

          <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">Früher Zugang · Limitierte Plätze</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-black text-white tracking-[-0.04em] leading-[1.0] mb-6">
            Verstehe deine Gesundheit.{" "}
            <span className="gradient-text">Mit Klarheit.</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed mb-4 max-w-lg mx-auto">
            Tritt Preventura bei und verwandle deine Biomarker in einen Score, einen Plan und messbaren Fortschritt.
          </p>
          <p className="text-white/25 text-sm mb-8">
            Begrenzter Frühzugang · Erste 500 Mitglieder erhalten Vorzugspreise
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-7">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deine E-Mail-Adresse"
                required
                className="flex-1 bg-white/[0.07] border border-white/10 rounded-full px-5 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-blue-500/50 focus:bg-white/[0.1] transition-all"
              />
              <button type="submit" disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-[#176ADD] hover:bg-[#1e7ae8] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-[0_8px_32px_rgba(23,106,221,0.4)] hover:shadow-[0_12px_40px_rgba(23,106,221,0.55)] disabled:opacity-70 whitespace-nowrap">
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : "Frühen Zugang sichern"}
              </button>
            </form>
          ) : (
            <div className="glass rounded-2xl border border-green-500/30 p-7 max-w-md mx-auto mb-7">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Du bist auf der Liste.</h3>
              <p className="text-white/50 text-sm">Wir melden uns, sobald der frühe Zugang geöffnet wird.</p>
            </div>
          )}

          <div className="flex flex-wrap gap-5 justify-center text-white/30 text-sm">
            {["Kein Spam", "Jederzeit abmeldbar", "DSGVO-konform"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500/60" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
