"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const STEPS = ["Design", "Develop", "Review", "Deploy"];

export function ProgressSteps() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((s) => Math.min(s + 1, STEPS.length));
  const reset = () => setCurrent(0);

  return (
    <div className="flex flex-col items-center gap-6 w-72">
      {/* Steps */}
      <div className="flex items-center w-full">
        {STEPS.map((step, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={step} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <motion.div
                  animate={{
                    backgroundColor: done ? "#22c55e" : active ? "var(--accent)" : "var(--bg-card)",
                    borderColor: done ? "#22c55e" : active ? "var(--accent)" : "var(--border)",
                    scale: active ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold"
                  style={{ color: done || active ? "#fff" : "var(--text-subtle)" }}
                >
                  {done ? <Check className="w-4 h-4" /> : i + 1}
                </motion.div>
                <span className="text-[10px] whitespace-nowrap" style={{ color: active ? "var(--text)" : "var(--text-subtle)" }}>
                  {step}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex-1 mx-2 mb-5">
                  <div className="h-0.5 w-full rounded" style={{ backgroundColor: "var(--border)" }}>
                    <motion.div
                      animate={{ width: i < current ? "100%" : "0%" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="h-full rounded"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={reset}
          disabled={current === 0}
          className="px-3 py-1.5 rounded-lg text-xs border transition-opacity disabled:opacity-30 hover:opacity-80"
          style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
        >
          Reset
        </button>
        <button
          onClick={next}
          disabled={current >= STEPS.length}
          className="px-4 py-1.5 rounded-lg text-xs font-medium transition-opacity disabled:opacity-30 hover:opacity-90"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          {current >= STEPS.length ? "Done!" : "Next step"}
        </button>
      </div>
    </div>
  );
}
