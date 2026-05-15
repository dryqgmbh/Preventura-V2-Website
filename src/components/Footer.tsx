"use client";
import React from "react";
import { PreventuraIcon } from "./PreventuraLogo";

const links = {
  Produkt: [
    { label: "So funktioniert's", href: "#so-funktionierts" },
    { label: "Preventura Core", href: "#core" },
    { label: "App-Erlebnis", href: "#app" },
    { label: "Biomarker", href: "#biomarker" },
  ],
  Plattform: [
    { label: "Gesundheitswert", href: "#score" },
    { label: "Top 3 Impact", href: "#impact" },
    { label: "Retest Engine", href: "#retest" },
    { label: "Für Unternehmen", href: "#unternehmen" },
  ],
  Rechtliches: [
    { label: "Datenschutz", href: "#" },
    { label: "Impressum", href: "#" },
    { label: "Nutzungsbedingungen", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#030a14", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <PreventuraIcon width={32} height={32} />
              <span className="text-white font-extrabold text-lg tracking-tight">Preventura</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-5">
              Eine digitale Präventionsplattform für Heimtests, App-basierte Insights und langfristiges Gesundheits-Tracking.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.08] transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {s === "twitter" ? (
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    ) : (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">{category}</div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gradient-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Preventura. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right max-w-lg">
            Preventura stellt Gesundheitsinformationen zur Prävention und Selbstverfolgung bereit und ersetzt keine medizinische Beratung, Diagnose oder Behandlung. Wende dich bei medizinischen Anliegen an einen qualifizierten Arzt.
          </p>
        </div>
      </div>
    </footer>
  );
}
