"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const PHRASES = [
  "Hello, World.",
  "Build something cool.",
  "Ship it.",
  "UI is craft.",
  "Details matter.",
];

export function TextScramble() {
  const [display, setDisplay] = useState(PHRASES[0]);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phraseIndex = useRef(0);

  const scrambleTo = useCallback((target: string) => {
    let iteration = 0;
    if (frameRef.current) clearInterval(frameRef.current);

    frameRef.current = setInterval(() => {
      setDisplay(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= target.length) {
        if (frameRef.current) clearInterval(frameRef.current);
      }
      iteration += 0.5;
    }, 30);
  }, []);

  const handleClick = () => {
    phraseIndex.current = (phraseIndex.current + 1) % PHRASES.length;
    scrambleTo(PHRASES[phraseIndex.current]);
  };

  // Auto-cycle
  useEffect(() => {
    const interval = setInterval(() => {
      phraseIndex.current = (phraseIndex.current + 1) % PHRASES.length;
      scrambleTo(PHRASES[phraseIndex.current]);
    }, 3000);
    return () => {
      clearInterval(interval);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [scrambleTo]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="text-2xl sm:text-3xl font-mono font-bold cursor-pointer select-none transition-colors hover:opacity-80 text-center min-w-[16ch]"
        style={{ color: "var(--text)" }}
        onClick={handleClick}
        title="Click to change"
      >
        {display}
      </div>
      <p className="text-xs text-center" style={{ color: "var(--text-subtle)" }}>
        Auto-cycling · click to trigger
      </p>
    </div>
  );
}
