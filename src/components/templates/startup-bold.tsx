"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "200K+", label: "Active users", suffix: "" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
  { value: "$4.2M", label: "Raised in seed", suffix: "" },
];

const LOGOS = ["Acme Inc", "Globex", "Initech", "Umbrella", "Hooli", "Pied Piper", "Dunder", "Vehement"];

const SERVICES = [
  "Product Design", "Brand Identity", "Web Development",
  "Mobile Apps", "Motion Design", "Copywriting",
  "SEO Strategy", "Growth Hacking",
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function GlassCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      flex: "1 1 180px",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 20,
      padding: "28px 24px",
      textAlign: "center",
    }}>
      <div style={{
        fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900,
        letterSpacing: "-0.04em", color: "#fff",
        background: "linear-gradient(135deg, #f97316, #fb923c)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>
        {value}
      </div>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 6 }}>{label}</div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function StartupBold() {
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#080808", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)", color: "#fff",
      overflowX: "hidden",
    }}>
      <style>{`
        @keyframes marquee-startup {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "90px 24px 72px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: 999, padding: "5px 14px", marginBottom: 36,
          }}
        >
          <span style={{
            width: 6, height: 6, borderRadius: "50%", background: "#f97316",
            display: "inline-block", animation: "ping 1.5s ease-in-out infinite",
          }} />
          <span style={{ fontSize: 12, color: "#fb923c", fontWeight: 500 }}>We just raised $4.2M — Join us</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(52px, 10vw, 108px)",
            fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.95,
            marginBottom: 28,
          }}
        >
          Build the{" "}
          <span style={{
            background: "linear-gradient(135deg, #f97316 0%, #ec4899 60%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}>
            future
          </span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.85)" }}>faster.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{ color: "rgba(255,255,255,0.45)", fontSize: 18, lineHeight: 1.65, maxWidth: 500, margin: "0 auto 40px" }}
        >
          The startup toolkit that turns your idea into a product in days, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          <button style={{
            background: "linear-gradient(135deg, #f97316, #ec4899)",
            color: "#fff", border: "none", borderRadius: 12,
            padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 8px 40px rgba(249,115,22,0.4)",
          }}>
            Start building free
          </button>
          <button style={{
            background: "transparent", color: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
            padding: "14px 32px", fontSize: 15, fontWeight: 500, cursor: "pointer",
          }}>
            Watch demo ▶
          </button>
        </motion.div>
      </section>

      {/* ── Stats Glassmorphism ── */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 32 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 80px" }}
      >
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          {STATS.map((s) => (
            <GlassCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </motion.section>

      {/* ── Marquee ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 0", overflow: "hidden" }}>
        <div style={{
          display: "flex", gap: 0,
          animation: "marquee-startup 20s linear infinite",
          width: "max-content",
        }}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span key={i} style={{
              color: "rgba(255,255,255,0.2)", fontSize: 13,
              fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "0 32px", borderRight: "1px solid rgba(255,255,255,0.06)",
              whiteSpace: "nowrap",
            }}>
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12 }}>
            What we{" "}
            <span style={{
              background: "linear-gradient(90deg, #f97316, #ec4899)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>ship</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>
            From zero to product. We cover every angle.
          </p>
        </motion.div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          {SERVICES.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 999, padding: "8px 20px",
                fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)",
              }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── CTA Angled ── */}
      <section ref={ctaRef} style={{ padding: "0 24px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)",
            clipPath: "polygon(0 6%, 100% 0, 100% 94%, 0 100%)",
            padding: "90px 40px",
            textAlign: "center",
          }}
        >
          <h2 style={{
            fontSize: "clamp(32px, 6vw, 60px)", fontWeight: 900,
            letterSpacing: "-0.04em", color: "#fff", marginBottom: 16,
          }}>
            Ready to move fast?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginBottom: 36 }}>
            Join 200K+ builders shipping faster with us.
          </p>
          <button style={{
            background: "#fff", color: "#f97316", border: "none",
            borderRadius: 12, padding: "14px 36px", fontSize: 16, fontWeight: 800,
            cursor: "pointer", boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
          }}>
            Get started — it's free
          </button>
        </motion.div>
      </section>

    </div>
  );
}
