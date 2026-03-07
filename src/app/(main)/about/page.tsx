"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowRight, Layers, Sparkles, Code2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const services = [
  {
    icon: Sparkles,
    title: "UI/UX Design",
    description:
      "Wireframes, interactive prototypes, component systems. I turn complex problems into clean, intuitive interfaces.",
    accent: "#6366f1",
  },
  {
    icon: Code2,
    title: "Front-end Development",
    description:
      "React, Next.js, TypeScript, Framer Motion. Production-grade code with smooth animations and pixel-perfect details.",
    accent: "#a78bfa",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    description:
      "Fast, polished, and deployed in days. From concept to live URL — scroll-animating, conversion-focused pages.",
    accent: "#22d3ee",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "Node.js",
  "Vercel",
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* ── Hero ── */}
      <section className="mb-20">
        {/* Availability badge */}
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
          Open to freelance &amp; full-time opportunities
        </motion.div>

        {/* Name + title */}
        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-sm font-medium mb-3" style={{ color: "var(--text-subtle)" }}>
            Hey, I&apos;m
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tighter leading-[1.05] mb-4"
            style={{ color: "var(--text)" }}
          >
            C. Fall
          </h1>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            UI/UX Designer &amp; Developer
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg max-w-2xl leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          I design and build digital products that people love to use. My work
          sits at the intersection of design and engineering — from polished UI
          component systems to full-stack Next.js applications. I care deeply
          about the details: smooth animations, accessible interfaces, and code
          that&apos;s a joy to maintain.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-3"
        >
          <a
            href="mailto:cfall4031@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              boxShadow: "0 0 24px var(--accent-glow)",
            }}
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/cfall4031-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all hover:opacity-80"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--text-subtle)" }}
          >
            What I do
          </h2>
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Services
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl p-5 border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: s.accent + "20" }}
              >
                <s.icon className="w-4 h-4" style={{ color: s.accent }} />
              </div>
              <h4
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--text)" }}
              >
                {s.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--text-subtle)" }}
          >
            Tools &amp; technologies
          </h2>
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            My Stack
          </h3>
        </motion.div>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="px-3 py-1.5 rounded-lg text-sm border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-8 border text-center"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        {/* Status dot */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#22d3ee" }}
          />
          <span className="text-xs font-medium" style={{ color: "#22d3ee" }}>
            Available — March 2026
          </span>
        </div>

        <h3
          className="text-2xl font-bold tracking-tight mb-3"
          style={{ color: "var(--text)" }}
        >
          Let&apos;s build something great
        </h3>
        <p
          className="text-sm max-w-md mx-auto mb-8 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Whether you need a landing page, a full UI design system, or a
          complete web app — I&apos;d love to hear about your project.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="mailto:cfall4031@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              boxShadow: "0 0 24px var(--accent-glow)",
            }}
          >
            <Mail className="w-4 h-4" />
            cfall4031@gmail.com
          </a>
          <a
            href="https://github.com/cfall4031-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all hover:opacity-80"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
              backgroundColor: "var(--bg)",
            }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </motion.section>
    </div>
  );
}
