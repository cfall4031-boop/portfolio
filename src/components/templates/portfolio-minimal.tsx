"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  { title: "Orbit Design System", category: "Design System", color: "linear-gradient(135deg, #a78bfa, #6366f1)", year: "2025" },
  { title: "Nova Mobile App", category: "iOS / Android", color: "linear-gradient(135deg, #22d3ee, #a78bfa)", year: "2025" },
  { title: "Stellar Dashboard", category: "Web App", color: "linear-gradient(135deg, #6366f1, #22d3ee)", year: "2024" },
  { title: "Flux Branding", category: "Brand Identity", color: "linear-gradient(135deg, #f97316, #a78bfa)", year: "2024" },
];

const SKILLS = [
  "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS",
  "Figma", "React Native", "Node.js", "PostgreSQL",
  "Vercel", "Supabase",
];

const ROLES = ["UI Engineer", "Design Engineer", "Frontend Dev", "Product Designer"];

// ─── Sub-components ───────────────────────────────────────────────────────────
function Typewriter({ words }: { words: string[] }) {
  return (
    <motion.span
      key={words[0]}
      style={{
        color: "#a78bfa", fontStyle: "italic",
        display: "inline-block",
      }}
    >
      {words[0]}
    </motion.span>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function PortfolioMinimal() {
  const worksRef = useRef(null);
  const skillsRef = useRef(null);
  const worksInView = useInView(worksRef, { once: true, margin: "-60px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#0a0a0a", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa",
    }}>

      {/* ── Hero ── */}
      <section style={{
        maxWidth: 680, margin: "0 auto",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 80, height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a78bfa, #6366f1)",
            margin: "0 auto 24px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32,
            boxShadow: "0 0 40px rgba(167,139,250,0.3)",
          }}
        >
          ✦
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: 999, padding: "3px 12px", marginBottom: 24,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 500 }}>Open to opportunities</span>
        </motion.div>

        {/* Name reveal */}
        <div style={{ overflow: "hidden", marginBottom: 16 }}>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
              letterSpacing: "-0.04em", lineHeight: 1.1,
            }}
          >
            Alex Morin
          </motion.h1>
        </div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: 18, marginBottom: 20 }}
        >
          <Typewriter words={ROLES} />{" "}
          <span style={{ color: "#555" }}>based in Montréal</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ color: "#666", fontSize: 15, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 36px" }}
        >
          I design and build interfaces that feel as good as they look. 4 years turning ideas into products people love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ display: "flex", gap: 12, justifyContent: "center" }}
        >
          <button style={{
            background: "#a78bfa", color: "#fff", border: "none",
            borderRadius: 10, padding: "11px 26px", fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>
            View work ↓
          </button>
          <button style={{
            background: "transparent", color: "#888",
            border: "1px solid #1f1f1f",
            borderRadius: 10, padding: "11px 26px", fontSize: 14, fontWeight: 500, cursor: "pointer",
          }}>
            Download CV
          </button>
        </motion.div>
      </section>

      {/* ── Divider ── */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ borderTop: "1px solid #1a1a1a" }} />
      </div>

      {/* ── Selected Work ── */}
      <section ref={worksRef} style={{ maxWidth: 680, margin: "0 auto", padding: "60px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={worksInView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: 28 }}
        >
          <p style={{ color: "#555", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            Selected work
          </p>
          <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em" }}>
            Recent projects
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={worksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ cursor: "pointer" }}
            >
              {/* Project visual */}
              <div style={{
                aspectRatio: "4/3",
                background: p.color,
                borderRadius: 12,
                marginBottom: 10,
                overflow: "hidden",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 32, opacity: 0.3,
                }}>
                  ✦
                </div>
              </div>
              {/* Meta */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h3 style={{ color: "#fafafa", fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{p.title}</h3>
                  <p style={{ color: "#555", fontSize: 12 }}>{p.category}</p>
                </div>
                <span style={{ color: "#333", fontSize: 12, fontFamily: "var(--font-geist-mono, monospace)" }}>{p.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section ref={skillsRef} style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 48 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            style={{ color: "#555", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}
          >
            Tools & Stack
          </motion.p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {SKILLS.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05 }}
                style={{
                  background: "#111",
                  border: "1px solid #1f1f1f",
                  borderRadius: 999, padding: "4px 12px",
                  fontSize: 12, color: "#888",
                  fontFamily: "var(--font-geist-mono, monospace)",
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer / Contact ── */}
      <footer style={{
        borderTop: "1px solid #1a1a1a",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ color: "#555", fontSize: 13, marginBottom: 20 }}>
            Let&apos;s build something together
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "hello@alexmorin.dev", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#555", fontSize: 13, textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p style={{ color: "#2a2a2a", fontSize: 11, marginTop: 32, fontFamily: "var(--font-geist-mono, monospace)" }}>
            © 2026 Alex Morin · Built with Next.js
          </p>
        </motion.div>
      </footer>

    </div>
  );
}
