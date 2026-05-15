"use client";
import React, { useState, useEffect } from "react";
import { PreventuraIcon } from "./PreventuraLogo";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Core", href: "#core" },
  { label: "App", href: "#app" },
  { label: "Biomarkers", href: "#biomarkers" },
  { label: "For Companies", href: "#companies" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 pointer-events-none">
        <div
          className={`pointer-events-auto transition-all duration-500 ease-out ${
            scrolled
              ? "bg-[rgba(5,13,26,0.88)] backdrop-blur-2xl rounded-full border border-white/[0.1] shadow-[0_8px_40px_rgba(0,0,0,0.5)] px-5 py-2.5 flex items-center gap-2"
              : "bg-transparent w-full max-w-[1200px] px-0 py-0 flex items-center"
          }`}
          style={scrolled ? { maxWidth: "fit-content" } : {}}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`flex items-center gap-2 group transition-all duration-300 ${scrolled ? "mr-4" : "mr-auto"}`}
          >
            <PreventuraIcon width={scrolled ? 26 : 32} height={scrolled ? 26 : 32} />
            {!scrolled && (
              <span className="text-white font-extrabold text-[1.15rem] tracking-[-0.02em]">
                Preventura
              </span>
            )}
          </button>

          {/* Nav items */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                  scrolled
                    ? "text-white/70 hover:text-white hover:bg-white/[0.08]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#early-access"
            className={`hidden lg:inline-flex items-center gap-1.5 font-semibold text-sm rounded-full transition-all duration-200 ${
              scrolled
                ? "ml-3 bg-white text-[#050d1a] hover:bg-blue-50 px-4 py-1.5"
                : "ml-6 bg-[#176ADD] text-white hover:bg-[#1e7ae8] px-5 py-2.5 shadow-[0_4px_20px_rgba(23,106,221,0.4)]"
            }`}
          >
            Get Early Access
            {!scrolled && (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </a>

          {/* Mobile hamburger (always visible on mobile, left side) */}
          <button
            className={`lg:hidden ml-auto p-2 flex flex-col gap-1.5 ${scrolled ? "ml-3" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(5,13,26,0.97)", backdropFilter: "blur(24px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="#early-access"
            className="mt-4 bg-[#176ADD] text-white font-semibold px-8 py-3 rounded-full text-base hover:bg-[#1e7ae8] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Early Access
          </a>
        </div>
      </div>
    </>
  );
}
