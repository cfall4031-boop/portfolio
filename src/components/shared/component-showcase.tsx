"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, Code, Eye } from "lucide-react";
import { ComponentMeta } from "@/lib/components";
import { cn } from "@/lib/cn";

// Dynamic component map
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TiltCard } from "@/components/ui/tilt-card";
import { TextScramble } from "@/components/ui/text-scramble";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlowingBorder } from "@/components/ui/glowing-border";
import { CommandPalette } from "@/components/ui/command-palette";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Typewriter } from "@/components/ui/typewriter";
import { RippleButton } from "@/components/ui/ripple-button";
import { FlipCard } from "@/components/ui/flip-card";
import { Marquee } from "@/components/ui/marquee";
import { StaggerList } from "@/components/ui/stagger-list";
import { Toast } from "@/components/ui/toast";
import { Skeleton } from "@/components/ui/skeleton";
import { SwitchToggle } from "@/components/ui/switch-toggle";
import { GradientText } from "@/components/ui/gradient-text";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { Glassmorphism } from "@/components/ui/glassmorphism";
import { NeonButton } from "@/components/ui/neon-button";
import { FloatingInput } from "@/components/ui/floating-input";

const componentMap: Record<string, React.ComponentType> = {
  "magnetic-button": MagneticButton,
  "tilt-card": TiltCard,
  "text-scramble": TextScramble,
  "animated-counter": AnimatedCounter,
  "glowing-border": GlowingBorder,
  "command-palette": CommandPalette,
  "spotlight-card": SpotlightCard,
  "typewriter": Typewriter,
  "ripple-button": RippleButton,
  "flip-card": FlipCard,
  "marquee": Marquee,
  "stagger-list": StaggerList,
  "toast": Toast,
  "skeleton": Skeleton,
  "switch-toggle": SwitchToggle,
  "gradient-text": GradientText,
  "blur-reveal": BlurReveal,
  "progress-steps": ProgressSteps,
  "glassmorphism": Glassmorphism,
  "neon-button": NeonButton,
  "floating-input": FloatingInput,
};

const codeMap: Record<string, string> = {
  "magnetic-button": `"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
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
      className="px-8 py-4 rounded-full bg-indigo-500 text-white font-medium"
    >
      Hover me
    </motion.button>
  );
}`,
  "tilt-card": `"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="w-64 h-40 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-6"
    >
      <div style={{ transform: "translateZ(40px)" }} className="text-white font-bold">
        3D Tilt Card
      </div>
    </motion.div>
  );
}`,
  "text-scramble": `"use client";
import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({ text = "Hello, World." }: { text?: string }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);

  const scramble = () => {
    let iteration = 0;
    clearInterval(frameRef.current);
    frameRef.current = window.setInterval(() => {
      setDisplay(text.split("").map((char, i) => {
        if (char === " ") return " ";
        if (i < iteration) return text[i];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(""));
      if (iteration >= text.length) clearInterval(frameRef.current);
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <span onMouseEnter={scramble} className="font-mono cursor-pointer select-none">
      {display}
    </span>
  );
}`,
  "animated-counter": `"use client";
import { useEffect, useRef, useState } from "react";

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedCounter({ target = 1000, duration = 2000 }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setValue(Math.round(easeOut(progress) * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="text-6xl font-bold tabular-nums">{value.toLocaleString()}</span>;
}`,
  "glowing-border": `"use client";
import { useRef } from "react";

export function GlowingBorder() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--mx", \`\${e.clientX - rect.left}px\`);
    ref.current!.style.setProperty("--my", \`\${e.clientY - rect.top}px\`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl p-px"
      style={{
        background: "radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.5), transparent 60%), #1f1f1f",
      }}
    >
      <div className="rounded-2xl bg-zinc-900 p-8">
        <h3 className="text-white font-semibold mb-2">Glowing Border</h3>
        <p className="text-zinc-400 text-sm">Move your cursor over the card.</p>
      </div>
    </div>
  );
}`,
  "command-palette": `"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = [
  { id: "home", label: "Go Home", shortcut: "G H" },
  { id: "components", label: "View Components", shortcut: "G C" },
  { id: "github", label: "Open GitHub", shortcut: "G G" },
  { id: "twitter", label: "Open Twitter", shortcut: "G T" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-400 text-sm flex items-center gap-3 hover:border-zinc-600 transition-colors">
        Search commands...
        <kbd className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded">⌘K</kbd>
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.96, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl overflow-hidden">
              <div className="border-b border-zinc-800 px-4 py-3">
                <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..." className="w-full bg-transparent text-white text-sm outline-none placeholder:text-zinc-500" />
              </div>
              <div className="p-2 max-h-72 overflow-y-auto">
                {filtered.map((cmd) => (
                  <button key={cmd.id} className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-800 text-sm text-zinc-300 transition-colors">
                    {cmd.label}
                    <kbd className="text-[10px] text-zinc-500">{cmd.shortcut}</kbd>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}`,
};

interface Props {
  component: ComponentMeta;
}

export function ComponentShowcase({ component }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const PreviewComponent = componentMap[component.slug];
  const code = codeMap[component.slug] || "// Code coming soon";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/components"
          className="inline-flex items-center gap-1.5 text-sm mb-8 hover:opacity-100 transition-opacity"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Components
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-8"
      >
        <h1
          className="text-3xl font-bold tracking-tight mb-2"
          style={{ color: "var(--text)" }}
        >
          {component.title}
        </h1>
        <p style={{ color: "var(--text-muted)" }}>{component.description}</p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-4">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border"
              style={{
                color: "var(--text-muted)",
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div
          className="flex items-center justify-between mb-4"
        >
          <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: "var(--bg-card)" }}>
            {(["preview", "code"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs transition-all capitalize",
                  tab === t ? "shadow-sm" : "opacity-50 hover:opacity-75"
                )}
                style={{
                  backgroundColor: tab === t ? "var(--bg)" : "transparent",
                  color: tab === t ? "var(--text)" : "var(--text-muted)",
                  border: tab === t ? "1px solid var(--border)" : "1px solid transparent",
                }}
              >
                {t === "preview" ? <Eye className="w-3 h-3" /> : <Code className="w-3 h-3" />}
                {t}
              </button>
            ))}
          </div>

          {tab === "code" && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-all hover:opacity-80"
              style={{
                color: copied ? "var(--green)" : "var(--text-muted)",
                borderColor: copied ? "rgba(34,197,94,0.3)" : "var(--border)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>

        {/* Panel */}
        <div
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "var(--border)" }}
        >
          {tab === "preview" ? (
            <div
              className="min-h-72 flex items-center justify-center p-12"
              style={{
                backgroundColor: "var(--bg-card)",
                backgroundImage: "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            >
              {PreviewComponent ? (
                <PreviewComponent />
              ) : (
                <p style={{ color: "var(--text-muted)" }}>Preview coming soon</p>
              )}
            </div>
          ) : (
            <pre
              className="p-6 overflow-x-auto text-xs leading-relaxed"
              style={{
                backgroundColor: "#0d0d0d",
                color: "#e2e8f0",
                fontFamily: "var(--font-geist-mono), monospace",
              }}
            >
              <code>{code}</code>
            </pre>
          )}
        </div>
      </motion.div>
    </div>
  );
}
