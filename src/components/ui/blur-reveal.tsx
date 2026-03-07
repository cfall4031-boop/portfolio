"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BlurReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-64">
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full" style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }} />
            <div>
              <p className="text-xs font-medium" style={{ color: "var(--text)" }}>Hidden Content</p>
              <p className="text-[10px]" style={{ color: "var(--text-subtle)" }}>Revealed on click</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            This secret content is hidden behind a blur. Click the button to reveal it with a smooth transition.
          </p>
        </div>

        {/* Blur overlay */}
        <AnimatePresence>
          {!revealed && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(10,10,10,0.4)" }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Blur reveal</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={() => setRevealed((v) => !v)}
        className="text-xs px-4 py-1.5 rounded-lg border transition-all hover:opacity-80"
        style={{
          color: revealed ? "var(--text-muted)" : "var(--accent-hover)",
          borderColor: revealed ? "var(--border)" : "rgba(99,102,241,0.4)",
          backgroundColor: revealed ? "transparent" : "var(--accent-glow)",
        }}
      >
        {revealed ? "Hide content" : "Reveal content"}
      </button>
    </div>
  );
}
