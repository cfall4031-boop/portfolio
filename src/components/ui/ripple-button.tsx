"use client";

import { useRef, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function RippleButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        ref={ref}
        onClick={handleClick}
        className="relative overflow-hidden px-8 py-3.5 rounded-xl text-sm font-medium select-none"
        style={{
          backgroundColor: "var(--accent)",
          color: "#fff",
          boxShadow: "0 0 20px var(--accent-glow)",
        }}
      >
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute rounded-full pointer-events-none animate-ping"
            style={{
              left: r.x,
              top: r.y,
              width: 8,
              height: 8,
              transform: "translate(-50%, -50%) scale(1)",
              backgroundColor: "rgba(255,255,255,0.4)",
              animation: "ripple 0.7s ease-out forwards",
            }}
          />
        ))}
        <span className="relative z-10">Click me</span>
      </button>
      <style>{`
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; width: 8px; height: 8px; }
          100% { transform: translate(-50%, -50%) scale(30); opacity: 0; width: 8px; height: 8px; }
        }
      `}</style>
      <p className="text-xs" style={{ color: "var(--text-subtle)" }}>Click to trigger ripple</p>
    </div>
  );
}
