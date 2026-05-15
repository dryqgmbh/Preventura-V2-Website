"use client";
import React from "react";

/* ─────────────────────────────────────────────────────────────────
   Preventura Logo SVG – exakt nach Brand-Assets nachgebaut:
   - Zwei organische Hälften ergeben das Herz
   - Linke Hälfte: Blau-Gradient  (#4BABF0 → #1560CC)
   - Rechte Hälfte: Grün-Gradient (#6EE89A → #1CB852)
   - Weiße Schnittlinie leicht rechts der Mitte (wie im Original)
   - Weißes Kreuz/Plus, abgerundete Ecken
   ───────────────────────────────────────────────────────────────── */

const HEART_PATH = "M50 87 C25 71 4 54 4 31 C4 16 15 7 29 7 C39 7 47 13 50 21 C53 13 61 7 71 7 C85 7 96 16 96 31 C96 54 75 71 50 87Z";

/* Clip-Pfad für den grünen Teil: startet bei x=53 oben, biegt leicht
   nach rechts (x=58 mittig) und trifft den Herzpunkt (x=50) unten.
   So deckt Grün: rechte Lobe + untere Herzspitze — wie im echten Logo. */
const GREEN_CLIP_PATH = "M53 0 C58 40 55 65 50 100 L100 100 L100 0 Z";

export function PreventuraIcon({
  width = 40,
  height = 40,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Blau: hellblau oben-links → kräftiges Blau unten-rechts */}
        <linearGradient id="pvBlue" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#4BABF0" />
          <stop offset="100%" stopColor="#1560CC" />
        </linearGradient>
        {/* Grün: helles Grün oben-rechts → satteres Grün unten-links */}
        <linearGradient id="pvGreen" x1="85%" y1="0%" x2="15%" y2="100%">
          <stop offset="0%" stopColor="#6EE89A" />
          <stop offset="100%" stopColor="#1CB852" />
        </linearGradient>
        {/* Kreuz: reines Weiß zu leichtem Blau-Weiß */}
        <linearGradient id="pvCross" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DEEEFF" />
        </linearGradient>
        <clipPath id="pvGreenClip">
          <path d={GREEN_CLIP_PATH} />
        </clipPath>
      </defs>

      {/* Blaues Herz (volle Form als Basis) */}
      <path d={HEART_PATH} fill="url(#pvBlue)" />

      {/* Grüne Überlagerung – rechte Hälfte + Herzspitze via Clip */}
      <path d={HEART_PATH} fill="url(#pvGreen)" clipPath="url(#pvGreenClip)" />

      {/* Weißes Plus/Kreuz – vertikal */}
      <rect x="44" y="18" width="12" height="50" rx="4" fill="url(#pvCross)" />
      {/* Weißes Plus/Kreuz – horizontal */}
      <rect x="27" y="38" width="46" height="12" rx="4" fill="url(#pvCross)" />
    </svg>
  );
}

export function PreventuraLogo({
  height = 34,
  dark = false,
  className = "",
}: {
  height?: number;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: Math.round(height * 0.3) }}
    >
      <PreventuraIcon width={height} height={height} />
      <span
        style={{
          color: dark ? "#0a1628" : "#ffffff",
          fontWeight: 800,
          fontSize: Math.round(height * 0.65),
          letterSpacing: "-0.02em",
          lineHeight: 1,
          fontFamily: "inherit",
        }}
      >
        Preventura
      </span>
    </span>
  );
}
