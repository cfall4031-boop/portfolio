"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "⚡", title: "Lightning Fast", desc: "Edge-optimized delivery. Sub-100ms globally." },
  { icon: "🔒", title: "Secure by Default", desc: "SOC2 compliant. Zero-trust architecture." },
  { icon: "📊", title: "Real-time Analytics", desc: "Live dashboards. No extra setup needed." },
  { icon: "🔄", title: "Auto Scaling", desc: "From 1 to 1M users without config changes." },
  { icon: "🧩", title: "API-First", desc: "RESTful + GraphQL. Integrates with anything." },
  { icon: "🌍", title: "Global CDN", desc: "200+ edge locations. Always close to users." },
];

const LOGOS = ["Stripe", "Vercel", "Linear", "Notion", "Figma", "GitHub", "Supabase", "Railway"];

// ─── Sub-components ───────────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, index, inView }: {
  icon: string; title: string; desc: string; index: number; inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{
        background: "#111111",
        border: "1px solid #1f1f1f",
        borderRadius: 16,
        padding: "24px",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <h3 style={{ color: "#fafafa", fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{title}</h3>
      <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function SaasDark() {
  const featRef = useRef(null);
  const ctaRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "var(--font-geist-sans, system-ui, sans-serif)", color: "#fafafa" }}>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px 80px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 999, padding: "5px 14px", marginBottom: 32,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#6366f1", display: "inline-block", boxShadow: "0 0 8px #6366f1" }} />
          <span style={{ fontSize: 12, color: "#818cf8", fontWeight: 500 }}>Now in Public Beta — Free to start</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20,
          }}
        >
          Ship faster with{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            less code
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: "#888", fontSize: 18, lineHeight: 1.7, maxWidth: 540, margin: "0 auto 36px" }}
        >
          The platform that handles auth, payments, and scaling — so you can focus on building what matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <button style={{
            background: "#6366f1", color: "#fff", border: "none",
            borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 600,
            cursor: "pointer",
          }}>
            Start for free →
          </button>
          <button style={{
            background: "transparent", color: "#888", border: "1px solid #1f1f1f",
            borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 500,
            cursor: "pointer",
          }}>
            View docs
          </button>
        </motion.div>
      </section>

      {/* ── Social Proof Bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f",
          padding: "18px 24px",
        }}
      >
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 8, flexWrap: "wrap",
        }}>
          <span style={{ color: "#555", fontSize: 11, fontWeight: 500, marginRight: 8 }}>TRUSTED BY</span>
          {LOGOS.map((logo, i) => (
            <span key={logo} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#444", fontSize: 13, fontFamily: "var(--font-geist-mono, monospace)", fontWeight: 600 }}>
                {logo}
              </span>
              {i < LOGOS.length - 1 && (
                <span style={{ color: "#2a2a2a", fontSize: 16 }}>·</span>
              )}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Features ── */}
      <section ref={featRef} style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={featInView ? { opacity: 1 } : {}}
            style={{ color: "#6366f1", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}
          >
            Everything you need
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Built for modern teams
          </motion.h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} inView={featInView} />
          ))}
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section ref={ctaRef} style={{ padding: "80px 24px 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 640, margin: "0 auto", textAlign: "center",
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 24, padding: "60px 40px",
          }}
        >
          <p style={{ color: "#6366f1", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Simple pricing
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
            Start free, scale when ready
          </h2>
          <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            $0/month to start. No credit card required. Upgrade as you grow.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button style={{
              background: "#6366f1", color: "#fff", border: "none",
              borderRadius: 10, padding: "13px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer",
              boxShadow: "0 0 32px rgba(99,102,241,0.4)",
            }}>
              Get started free
            </button>
          </div>
          <p style={{ color: "#555", fontSize: 12, marginTop: 16 }}>
            No credit card · Cancel anytime · SOC2 compliant
          </p>
        </motion.div>
      </section>

    </div>
  );
}
