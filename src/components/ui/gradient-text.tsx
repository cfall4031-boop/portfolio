"use client";

const GRADIENTS = [
  "linear-gradient(135deg, #6366f1, #818cf8, #a78bfa)",
  "linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)",
  "linear-gradient(135deg, #10b981, #06b6d4, #6366f1)",
  "linear-gradient(135deg, #f97316, #eab308, #22c55e)",
];

const WORDS = ["Beautiful.", "Creative.", "Animated.", "Gradient."];

export function GradientText() {
  return (
    <div className="flex flex-col items-center gap-4">
      {GRADIENTS.map((gradient, i) => (
        <span
          key={i}
          className="text-2xl font-bold tracking-tight cursor-default select-none"
          style={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% 200%",
            animation: `gradientShift ${2 + i * 0.5}s ease infinite`,
          }}
        >
          {WORDS[i]}
        </span>
      ))}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
