"use client";

import { useState } from "react";

function SkeletonPulse({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-md ${className}`}
      style={{
        backgroundColor: "var(--border)",
        backgroundImage: "linear-gradient(90deg, var(--border) 0%, var(--bg-card-hover) 50%, var(--border) 100%)",
        backgroundSize: "200% 100%",
        animation: "skeleton 1.5s ease-in-out infinite",
        ...style,
      }}
    />
  );
}

export function Skeleton() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-72">
      <style>{`
        @keyframes skeleton {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {loaded ? (
        <div
          className="w-full rounded-2xl p-4"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "var(--accent-glow)", border: "2px solid var(--accent)" }} />
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--text)" }}>Alex Dupont</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Frontend Developer</p>
            </div>
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>Building beautiful UIs one component at a time.</p>
        </div>
      ) : (
        <div
          className="w-full rounded-2xl p-4"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <SkeletonPulse className="w-10 h-10 rounded-full shrink-0" />
            <div className="flex-1 flex flex-col gap-2">
              <SkeletonPulse style={{ height: "14px", width: "60%" }} />
              <SkeletonPulse style={{ height: "12px", width: "40%" }} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <SkeletonPulse style={{ height: "12px" }} />
            <SkeletonPulse style={{ height: "12px", width: "75%" }} />
          </div>
        </div>
      )}

      <button
        onClick={() => setLoaded((l) => !l)}
        className="text-xs px-4 py-1.5 rounded-lg border transition-opacity hover:opacity-80"
        style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
      >
        {loaded ? "Show Skeleton" : "Load Content"}
      </button>
    </div>
  );
}
