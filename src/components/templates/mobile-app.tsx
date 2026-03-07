"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "🔔", title: "Smart Alerts", desc: "Real-time push notifications" },
  { icon: "🔒", title: "Private & Secure", desc: "End-to-end encrypted" },
  { icon: "⚡", title: "Instant Sync", desc: "Cross-device in milliseconds" },
  { icon: "🌙", title: "Dark Mode", desc: "Easy on your eyes, always" },
  { icon: "📶", title: "Works Offline", desc: "Full offline support" },
  { icon: "🎯", title: "Smart Focus", desc: "AI-powered suggestions" },
];

const STATS = [
  { value: "10M+", label: "Downloads" },
  { value: "4.9★", label: "Rating" },
  { value: "150+", label: "Countries" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function PhoneFrame() {
  return (
    <div style={{
      width: 180, height: 360,
      background: "#111",
      borderRadius: 36,
      border: "2px solid rgba(34,211,238,0.3)",
      boxShadow: "0 0 60px rgba(34,211,238,0.2), 0 40px 80px rgba(0,0,0,0.6)",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{
        position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
        width: 60, height: 20, background: "#0a0a0a",
        borderRadius: 10, zIndex: 10,
      }} />
      {/* Screen content */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(34,211,238,0.2) 0%, rgba(99,102,241,0.15) 50%, #0d0d0d 100%)",
        display: "flex", flexDirection: "column", alignItems: "center",
        paddingTop: 60, paddingBottom: 20,
      }}>
        {/* App icon */}
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: "linear-gradient(135deg, #22d3ee, #6366f1)",
          marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22,
        }}>
          ✦
        </div>
        {/* Fake content lines */}
        {[80, 60, 75, 55, 70, 45, 80, 50].map((w, i) => (
          <div key={i} style={{
            width: `${w}%`, height: 8, borderRadius: 4,
            background: i % 3 === 0
              ? "rgba(34,211,238,0.3)"
              : "rgba(255,255,255,0.07)",
            marginBottom: 8,
          }} />
        ))}
        {/* CTA button in screen */}
        <div style={{
          marginTop: 16, width: "70%", height: 32, borderRadius: 8,
          background: "linear-gradient(135deg, #22d3ee, #6366f1)",
          opacity: 0.8,
        }} />
      </div>
      {/* Home bar */}
      <div style={{
        position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)",
        width: 80, height: 4, borderRadius: 2,
        background: "rgba(255,255,255,0.3)",
      }} />
    </div>
  );
}

function FeatureBubble({ icon, title, desc, style }: {
  icon: string; title: string; desc: string; style?: React.CSSProperties;
}) {
  return (
    <div style={{
      background: "#111",
      border: "1px solid rgba(34,211,238,0.15)",
      borderRadius: 12,
      padding: "12px 16px",
      maxWidth: 160,
      ...style,
    }}>
      <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
      <div style={{ color: "#fafafa", fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{title}</div>
      <div style={{ color: "#555", fontSize: 11 }}>{desc}</div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function MobileApp() {
  const featRef = useRef(null);
  const statsRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: "-60px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#0a0a0a", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa", overflowX: "hidden",
    }}>

      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.18) 0%, transparent 70%)",
        padding: "80px 24px 60px",
        textAlign: "center",
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)",
            borderRadius: 999, padding: "4px 14px", marginBottom: 28,
          }}
        >
          <span style={{ fontSize: 14 }}>🚀</span>
          <span style={{ fontSize: 12, color: "#22d3ee", fontWeight: 500 }}>App of the Year 2025 — App Store</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16,
          }}
        >
          Your{" "}
          <span style={{
            background: "linear-gradient(135deg, #22d3ee, #6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            focus
          </span>
          , amplified.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ color: "#666", fontSize: 16, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 40px" }}
        >
          The productivity app that learns your habits and helps you get more done — without the noise.
        </motion.p>

        {/* Phone + Bubbles */}
        <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
          {/* Left bubbles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginRight: 24 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <FeatureBubble icon="🔔" title="Smart Alerts" desc="Real-time notifications" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <FeatureBubble icon="⚡" title="Instant Sync" desc="Cross-device sync" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <FeatureBubble icon="🌙" title="Dark Mode" desc="Easy on your eyes" />
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <PhoneFrame />
          </motion.div>

          {/* Right bubbles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginLeft: 24 }}>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }}>
              <FeatureBubble icon="🔒" title="Private" desc="End-to-end encrypted" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }}>
              <FeatureBubble icon="📶" title="Offline" desc="Works without internet" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>
              <FeatureBubble icon="🎯" title="AI Focus" desc="Smart suggestions" />
            </motion.div>
          </div>
        </div>

        {/* Store buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 36 }}
        >
          <button style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "#fff", color: "#0a0a0a", border: "none",
            borderRadius: 12, padding: "12px 24px", cursor: "pointer",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 9, lineHeight: 1, opacity: 0.7 }}>Download on the</div>
              <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>App Store</div>
            </div>
          </button>
          <button style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "transparent", color: "#fafafa",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12, padding: "12px 24px", cursor: "pointer",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3.18 23.28C2.48 22.54 2.1 21.38 2.1 19.9V4.1C2.1 2.62 2.48 1.46 3.18.72L3.28.62l8.67 8.67v.2L3.28 18.16l-.1-.1z" fill="#EA4335"/>
              <path d="M15.27 13.28l-3.32-3.32v-.2l3.32-3.32 1.56.89 3.93 2.23c1.12.64 1.12 1.67 0 2.31l-3.93 2.23-1.56.88z" fill="#FBBC04"/>
              <path d="M15.27 12.39L11.95 9.07 3.18.3c.43-.47 1.02-.3 1.69.09l10.4 5.91-3.32 3.32z" fill="#4285F4"/>
              <path d="M15.27 12.39l-3.32 3.32-10.4 5.91c-.67.38-1.26.56-1.69.09l8.77-8.77 3.32 3.32z" fill="#34A853"/>
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 9, lineHeight: 1, opacity: 0.6 }}>Get it on</div>
              <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>Google Play</div>
            </div>
          </button>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section ref={statsRef} style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{
          maxWidth: 600, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "32px 24px",
        }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{
                flex: 1, textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid #1a1a1a" : "none",
              }}
            >
              <div style={{
                fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em",
                color: "#22d3ee",
              }}>
                {s.value}
              </div>
              <div style={{ color: "#555", fontSize: 12, marginTop: 4 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section ref={featRef} style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Everything you need, nothing you don&apos;t
          </motion.h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={featInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "#111",
                border: "1px solid rgba(34,211,238,0.1)",
                borderRadius: 14, padding: "20px",
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
              <h3 style={{ color: "#fafafa", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{f.title}</h3>
              <p style={{ color: "#555", fontSize: 12, lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
