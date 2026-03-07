"use client";

import { useState } from "react";

export function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer select-none"
      style={{ perspective: "1000px", width: "280px", height: "180px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #1e1b4b, #312e81)",
            border: "1px solid rgba(99,102,241,0.3)",
          }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#818cf8" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm font-medium" style={{ color: "#e0e7ff" }}>Hover to flip</p>
          <p className="text-xs" style={{ color: "rgba(199,210,254,0.5)" }}>Click me</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2 p-5"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #064e3b, #065f46)",
            border: "1px solid rgba(34,197,94,0.3)",
          }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#4ade80" }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm font-semibold text-center" style={{ color: "#d1fae5" }}>Flip Card</p>
          <p className="text-xs text-center" style={{ color: "rgba(167,243,208,0.6)" }}>3D CSS transform</p>
        </div>
      </div>
    </div>
  );
}
