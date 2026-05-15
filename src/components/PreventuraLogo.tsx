"use client";
import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  darkText?: boolean;
}

export function PreventuraIcon({ className = "", width = 40, height = 40 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="heartBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#176ADD" />
          <stop offset="100%" stopColor="#0d4fa8" />
        </linearGradient>
        <linearGradient id="heartGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="plusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#e0f2ff" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      {/* Heart left lobe (blue) */}
      <path
        d="M100 175 C100 175 20 120 20 70 C20 42 42 22 68 22 C82 22 95 30 100 42 C105 30 118 22 132 22 C158 22 180 42 180 70 C180 120 100 175 100 175Z"
        fill="url(#heartBlue)"
      />
      {/* Heart right overlay (green) */}
      <path
        d="M100 175 C100 175 100 100 130 65 C145 48 162 38 178 52 C188 62 180 80 170 95 C150 130 100 175 100 175Z"
        fill="url(#heartGreen)"
        opacity="0.9"
      />
      {/* Plus cross */}
      <rect x="82" y="62" width="36" height="76" rx="8" fill="url(#plusGrad)" />
      <rect x="62" y="82" width="76" height="36" rx="8" fill="url(#plusGrad)" />
    </svg>
  );
}

export function PreventuraLogo({ className = "", width = 160, height = 36, darkText = false }: LogoProps) {
  const textColor = darkText ? "#111827" : "#ffffff";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 640 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoHeartBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#176ADD" />
          <stop offset="100%" stopColor="#0d4fa8" />
        </linearGradient>
        <linearGradient id="logoHeartGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      {/* Heart icon */}
      <g transform="scale(0.67) translate(10, 5)">
        <path
          d="M100 175 C100 175 20 120 20 70 C20 42 42 22 68 22 C82 22 95 30 100 42 C105 30 118 22 132 22 C158 22 180 42 180 70 C180 120 100 175 100 175Z"
          fill="url(#logoHeartBlue)"
        />
        <path
          d="M100 175 C100 175 100 100 130 65 C145 48 162 38 178 52 C188 62 180 80 170 95 C150 130 100 175 100 175Z"
          fill="url(#logoHeartGreen)"
          opacity="0.9"
        />
        <rect x="82" y="62" width="36" height="76" rx="8" fill="white" opacity="0.95" />
        <rect x="62" y="82" width="76" height="36" rx="8" fill="white" opacity="0.95" />
      </g>
      {/* Preventura text */}
      <text
        x="120"
        y="100"
        fontFamily="'Inter', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="88"
        letterSpacing="-2"
        fill={textColor}
      >
        Preventura
      </text>
    </svg>
  );
}
