"use client";

import { useRef } from "react";

export function GlowingBorder() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl p-px cursor-default select-none w-72"
      style={{
        background:
          "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.6) 0%, rgba(99,102,241,0.1) 40%, transparent 70%), var(--border)",
      }}
    >
      <div
        className="rounded-2xl p-6 h-full"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--accent-glow)", border: "1px solid rgba(99,102,241,0.3)" }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "var(--accent-hover)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>

        <h3 className="font-semibold text-sm mb-1.5" style={{ color: "var(--text)" }}>
          Glowing Border
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Move your cursor anywhere on the card to see the glow follow.
        </p>

        {/* Bottom stats */}
        <div
          className="flex items-center gap-3 mt-5 pt-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex -space-x-2">
            {["#6366f1", "#818cf8", "#a78bfa"].map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2"
                style={{
                  backgroundColor: color,
                  borderColor: "var(--bg-card)",
                }}
              />
            ))}
          </div>
          <span className="text-xs" style={{ color: "var(--text-subtle)" }}>
            Pure CSS magic
          </span>
        </div>
      </div>
    </div>
  );
}
