"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className="relative px-8 py-4 rounded-full text-white font-medium text-sm cursor-pointer select-none overflow-hidden"
      aria-label="Magnetic button demo"
    >
      {/* Gradient background */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(135deg, #6366f1, #818cf8)",
          boxShadow: "0 0 32px rgba(99,102,241,0.4)",
        }}
      />
      {/* Shimmer */}
      <motion.span
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        <span>Attract me</span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </motion.button>
  );
}
