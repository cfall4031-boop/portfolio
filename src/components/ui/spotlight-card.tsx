"use client";

import { useRef } from "react";

export function SpotlightCard() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl p-6 w-72 overflow-hidden cursor-default"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.08), transparent 40%)",
        }}
      />
      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--accent-hover)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>Spotlight Effect</h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Move your cursor to reveal the spotlight. Pure CSS radial gradient tracking.
        </p>
        <div className="flex gap-1.5 mt-4">
          {["CSS", "Hover", "Glow"].map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--bg)", color: "var(--text-subtle)", border: "1px solid var(--border)" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
