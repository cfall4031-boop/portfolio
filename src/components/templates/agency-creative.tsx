"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const WORKS = [
  { title: "Horizon Brand", category: "Brand Identity", color: "linear-gradient(135deg, #ec4899, #f97316)", span: 2 },
  { title: "Pulse Dashboard", category: "Web Design", color: "linear-gradient(135deg, #6366f1, #ec4899)", span: 1 },
  { title: "Motion App", category: "Mobile + Motion", color: "linear-gradient(135deg, #22d3ee, #6366f1)", span: 1 },
  { title: "Nova Rebrand", category: "Brand + Web", color: "linear-gradient(135deg, #f97316, #f59e0b)", span: 1 },
  { title: "Grid System", category: "Design System", color: "linear-gradient(135deg, #a78bfa, #22d3ee)", span: 1 },
];

const SERVICES = [
  "Brand Strategy", "Visual Identity", "UX/UI Design",
  "Web Development", "Motion & Animation", "Design Systems",
  "Digital Marketing", "Art Direction",
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function GeometricVisual() {
  return (
    <div style={{ position: "relative", width: "100%", height: "360px", minWidth: 0 }}>
      {/* Main square */}
      <div style={{
        position: "absolute", top: "10%", left: "15%",
        width: 200, height: 200,
        background: "linear-gradient(135deg, #ec4899, #f97316)",
        borderRadius: 4,
        transform: "rotate(-6deg)",
      }} />
      {/* Offset square */}
      <div style={{
        position: "absolute", top: "15%", left: "20%",
        width: 200, height: 200,
        background: "transparent",
        border: "2px solid #ec4899",
        borderRadius: 4,
        transform: "rotate(2deg)",
      }} />
      {/* Small circle */}
      <div style={{
        position: "absolute", bottom: "25%", right: "20%",
        width: 80, height: 80,
        background: "linear-gradient(135deg, #6366f1, #a78bfa)",
        borderRadius: "50%",
      }} />
      {/* Diagonal line */}
      <div style={{
        position: "absolute", bottom: "35%", left: "10%",
        width: 120, height: 3,
        background: "#ec4899",
        transform: "rotate(-30deg)",
        transformOrigin: "left center",
      }} />
      <div style={{
        position: "absolute", bottom: "42%", left: "12%",
        width: 80, height: 3,
        background: "rgba(236,72,153,0.4)",
        transform: "rotate(-30deg)",
        transformOrigin: "left center",
      }} />
      {/* Text tag */}
      <div style={{
        position: "absolute", bottom: "15%", right: "15%",
        background: "#0a0a0a", border: "1px solid #1f1f1f",
        borderRadius: 8, padding: "8px 14px",
        fontSize: 11, fontFamily: "var(--font-geist-mono, monospace)",
        color: "#ec4899", fontWeight: 600,
      }}>
        studio.creative
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function AgencyCreative() {
  const worksRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const worksInView = useInView(worksRef, { once: true, margin: "-60px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#0a0a0a", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa", overflowX: "hidden",
    }}>

      {/* ── Hero Split ── */}
      <section style={{
        maxWidth: 1000, margin: "0 auto",
        padding: "80px 24px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 48, alignItems: "center",
      }}>
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{
            display: "inline-block",
            background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.25)",
            borderRadius: 999, padding: "4px 14px", marginBottom: 24,
            fontSize: 11, fontWeight: 700, color: "#ec4899",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            Creative Studio ✦
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900,
            letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20,
          }}>
            We craft{" "}
            <span style={{ color: "#ec4899", fontStyle: "italic" }}>bold</span>
            <br />
            brands that{" "}
            <span style={{
              textDecoration: "underline",
              textDecorationColor: "#ec4899",
              textUnderlineOffset: 6,
            }}>
              stick
            </span>
          </h1>

          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 400 }}>
            Award-winning creative agency. We turn complex ideas into iconic brands. Strategy, design, code — under one roof.
          </p>

          {/* Service pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
            {["Brand", "Web", "Motion", "Strategy"].map((s) => (
              <span key={s} style={{
                background: "rgba(236,72,153,0.08)",
                border: "1px solid rgba(236,72,153,0.2)",
                borderRadius: 999, padding: "5px 14px",
                fontSize: 12, color: "#ec4899", fontWeight: 600,
              }}>
                {s}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button style={{
              background: "#ec4899", color: "#fff", border: "none",
              borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 700,
              cursor: "pointer",
              boxShadow: "4px 4px 0px #a21c6a",
            }}>
              Start a project
            </button>
            <button style={{
              background: "transparent", color: "#888",
              border: "1px solid #2a2a2a",
              borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 500,
              cursor: "pointer",
            }}>
              Our work ↓
            </button>
          </div>
        </motion.div>

        {/* Right: Geometric visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <GeometricVisual />
        </motion.div>
      </section>

      {/* ── Work Grid ── */}
      <section ref={worksRef} style={{ maxWidth: 1000, margin: "0 auto", padding: "20px 24px 80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={worksInView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: 32 }}
        >
          <p style={{ color: "#555", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: 8 }}>
            Selected work
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Projects we&apos;re proud of
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}>
          {WORKS.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 24 }}
              animate={worksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                gridColumn: work.span === 2 ? "span 2" : "span 1",
                aspectRatio: work.span === 2 ? "21/9" : "4/3",
                background: work.color,
                borderRadius: 12, overflow: "hidden",
                position: "relative", cursor: "pointer",
              }}
            >
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                display: "flex", alignItems: "flex-end", padding: 20,
              }}>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {work.category}
                  </p>
                  <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginTop: 2 }}>
                    {work.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services Scrollable ── */}
      <section ref={servicesRef} style={{ padding: "20px 0 80px", borderTop: "1px solid #1a1a1a" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", marginBottom: 28 }}
        >
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            What we do
          </h2>
        </motion.div>
        <div style={{
          display: "flex", gap: 10,
          overflowX: "auto", padding: "4px 24px",
          scrollbarWidth: "none",
        }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: 20 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              style={{
                flexShrink: 0,
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: 10, padding: "14px 20px",
                fontSize: 13, fontWeight: 600, color: "#ccc",
                cursor: "default",
                boxShadow: "3px 3px 0 #ec4899",
              }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Brutalist ── */}
      <section ref={ctaRef} style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            background: "#ec4899",
            borderRadius: 16, padding: "60px 48px",
            position: "relative", overflow: "hidden",
            boxShadow: "8px 8px 0 #a21c6a",
          }}
        >
          {/* Background pattern */}
          <div style={{
            position: "absolute", top: -40, right: -40,
            width: 200, height: 200, borderRadius: "50%",
            border: "40px solid rgba(255,255,255,0.08)",
          }} />
          <div style={{
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24,
          }}>
            <div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", marginBottom: 8 }}>
                Got a project?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16 }}>
                Let&apos;s talk. hello@studio.creative
              </p>
            </div>
            <button style={{
              background: "#fff", color: "#ec4899", border: "none",
              borderRadius: 8, padding: "14px 32px", fontSize: 15, fontWeight: 800,
              cursor: "pointer",
              boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
            }}>
              Start a project →
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
