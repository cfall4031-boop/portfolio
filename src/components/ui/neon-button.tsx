"use client";

import { useState } from "react";

const VARIANTS = [
  { label: "Indigo", color: "#6366f1", glow: "rgba(99,102,241,0.6)" },
  { label: "Cyan", color: "#06b6d4", glow: "rgba(6,182,212,0.6)" },
  { label: "Green", color: "#22c55e", glow: "rgba(34,197,94,0.6)" },
  { label: "Pink", color: "#ec4899", glow: "rgba(236,72,153,0.6)" },
];

export function NeonButton() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex gap-2">
        {VARIANTS.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(i)}
            className="w-5 h-5 rounded-full border-2 transition-transform hover:scale-110"
            style={{
              backgroundColor: v.color,
              borderColor: i === active ? "#fff" : "transparent",
              boxShadow: i === active ? `0 0 8px ${v.glow}` : "none",
            }}
          />
        ))}
      </div>

      <button
        className="relative px-8 py-3 rounded-xl font-medium text-sm tracking-wide overflow-hidden transition-all"
        style={{
          color: VARIANTS[active].color,
          border: `1px solid ${VARIANTS[active].color}`,
          boxShadow: `0 0 16px ${VARIANTS[active].glow}, 0 0 32px ${VARIANTS[active].glow}44, inset 0 0 12px ${VARIANTS[active].glow}22`,
          backgroundColor: `${VARIANTS[active].glow}11`,
          textShadow: `0 0 10px ${VARIANTS[active].color}`,
          transition: "all 0.3s ease",
        }}
      >
        {VARIANTS[active].label} Neon
      </button>
    </div>
  );
}
