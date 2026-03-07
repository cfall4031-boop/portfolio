"use client";

import { useEffect, useState } from "react";

const LINES = [
  "Building the future.",
  "One component at a time.",
  "Pixel perfect.",
  "Ship it.",
];

export function Typewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = LINES[lineIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setCharIndex(0);
          setLineIndex((i) => (i + 1) % LINES.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex]);

  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-subtle)" }}>
        Typewriter
      </p>
      <h2
        className="text-2xl sm:text-3xl font-bold tracking-tight min-h-[2.5rem] flex items-center justify-center gap-1"
        style={{ color: "var(--text)" }}
      >
        {text}
        <span
          className="inline-block w-0.5 h-7 animate-pulse ml-0.5"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </h2>
    </div>
  );
}
