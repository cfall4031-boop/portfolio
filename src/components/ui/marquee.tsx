"use client";

const ITEMS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Vercel", "Node.js", "Figma", "CSS", "JavaScript",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="w-full max-w-sm overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marquee 12s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 px-3 py-1.5 rounded-full text-xs border whitespace-nowrap"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
