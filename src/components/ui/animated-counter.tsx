"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function Counter({ target, suffix = "", label, duration = 2000 }: CounterProps) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setValue(Math.round(easeOutCubic(progress) * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, started]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span
        className="text-5xl font-bold tabular-nums tracking-tight"
        style={{ color: "var(--text)" }}
      >
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>
        {label}
      </span>
    </div>
  );
}

export function AnimatedCounter() {
  return (
    <div className="grid grid-cols-3 gap-12">
      <Counter target={10000} suffix="+" label="Downloads" />
      <Counter target={99} suffix="%" label="Satisfaction" duration={1800} />
      <Counter target={42} label="Components" duration={1500} />
    </div>
  );
}
