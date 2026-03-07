"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Layers } from "lucide-react";
import { components } from "@/lib/components";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stats = [
  { label: "Components", value: components.length, icon: Layers },
  { label: "Animations", value: "60fps", icon: Sparkles },
  { label: "Stack", value: "Next.js", icon: Code2 },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center max-w-4xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-8 border"
          style={{
            backgroundColor: "var(--accent-glow)",
            borderColor: "rgba(99,102,241,0.3)",
            color: "var(--accent-hover)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--accent)" }}
          />
          Open to opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6"
          style={{ color: "var(--text)" }}
        >
          I build things
          <br />
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            people love to click.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg max-w-xl mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          A collection of handcrafted UI components & interactions built with
          Next.js, Tailwind, and Framer Motion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <Link
            href="/components"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              boxShadow: "0 0 24px var(--accent-glow)",
            }}
          >
            View components
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all hover:opacity-80"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 grid grid-cols-3 gap-8 border-t pt-10 w-full max-w-sm"
          style={{ borderColor: "var(--border)" }}
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon
                className="w-4 h-4 mb-1"
                style={{ color: "var(--text-subtle)" }}
              />
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {value}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured strip */}
      <motion.section
        custom={5}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="border-t px-6 py-8"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-5xl mx-auto flex items-center gap-4 overflow-x-auto">
          <span className="text-xs shrink-0" style={{ color: "var(--text-subtle)" }}>
            Featured —
          </span>
          {components
            .filter((c) => c.featured)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/components/${c.slug}`}
                className="shrink-0 px-3 py-1.5 rounded-md text-xs border transition-colors hover:opacity-100 opacity-60"
                style={{
                  color: "var(--text-muted)",
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                {c.title}
              </Link>
            ))}
        </div>
      </motion.section>
    </div>
  );
}
