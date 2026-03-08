"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: "1,200+", label: "Membres actifs" },
  { value: "32", label: "Cours / semaine" },
  { value: "8 ans", label: "D&apos;expérience" },
];

const CLASSES = [
  { name: "CrossFit", level: "Tous niveaux", time: "06:30 · 12:00 · 18:30", color: "#EF4444" },
  { name: "Yoga Flow", level: "Débutant / Inter.", time: "07:00 · 12:30 · 19:00", color: "#F97316" },
  { name: "HIIT Intense", level: "Intermédiaire+", time: "06:00 · 17:30 · 19:30", color: "#EF4444" },
  { name: "Boxing", level: "Tous niveaux", time: "08:00 · 18:00 · 20:00", color: "#F97316" },
];

const PLANS = [
  { name: "Mensuel", price: "59", unit: "/ mois", features: ["Accès illimité", "Vestiaires premium", "App mobile"], popular: false },
  { name: "Trimestriel", price: "149", unit: "/ 3 mois", features: ["Tout Mensuel", "1 coaching perso", "Bilan nutrition"], popular: true },
  { name: "Annuel", price: "449", unit: "/ an", features: ["Tout Trimestriel", "4 coachings/an", "Tshirt Iron Core"], popular: false },
];

// ─── Main Export ─────────────────────────────────────────────────────────────
export function StudioFitness() {
  const statsRef = useRef(null);
  const classRef = useRef(null);
  const planRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const classInView = useInView(classRef, { once: true, margin: "-60px" });
  const planInView = useInView(planRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#0a0a0a", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa", overflowX: "hidden",
    }}>
      <style>{`
        @keyframes pulse-red { 0%,100%{ opacity:1 } 50%{ opacity:0.5 } }
      `}</style>

      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        padding: "100px 24px 80px",
        background: "radial-gradient(ellipse 80% 50% at 0% 50%, rgba(239,68,68,0.12) 0%, transparent 60%)",
        overflow: "hidden",
      }}>
        {/* Big background text */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(120px, 22vw, 260px)", fontWeight: 900,
          letterSpacing: "-0.05em", lineHeight: 1,
          color: "rgba(255,255,255,0.02)",
          whiteSpace: "nowrap", userSelect: "none",
          pointerEvents: "none",
        }}>
          IRON
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: 999, padding: "5px 14px", marginBottom: 32,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444", animation: "pulse-red 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 12, color: "#EF4444", fontWeight: 600 }}>Prochaine séance dans 2h</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(60px, 12vw, 120px)",
              fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.9,
              textTransform: "uppercase", marginBottom: 24,
            }}
          >
            UNLOCK
            <br />
            <span style={{ color: "#EF4444" }}>YOUR</span>
            <br />
            POTENTIAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              color: "#666", fontSize: 17, lineHeight: 1.7,
              maxWidth: 440, marginBottom: 40,
            }}
          >
            Iron Core Studio — le studio de fitness qui transforme votre corps et votre mindset. Des coachs d&apos;élite, des équipements haut de gamme.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <button style={{
              background: "#EF4444", color: "#fff", border: "none",
              borderRadius: 6, padding: "15px 36px", fontSize: 14, fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
              boxShadow: "0 8px 40px rgba(239,68,68,0.35)",
            }}>
              Essai gratuit →
            </button>
            <button style={{
              background: "transparent", color: "#888",
              border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6,
              padding: "15px 36px", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
            }}>
              Voir les cours
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section
        ref={statsRef}
        style={{
          borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{
          maxWidth: 700, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "40px 24px",
        }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{
                flex: 1, textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid #1a1a1a" : "none",
              }}
            >
              <div style={{
                fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900,
                letterSpacing: "-0.03em", color: "#EF4444", marginBottom: 6,
              }}>
                {s.value}
              </div>
              <div style={{ color: "#555", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Classes ── */}
      <section
        ref={classRef}
        style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={classInView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: 40 }}
        >
          <p style={{
            color: "#EF4444", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12,
          }}>
            Programme
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900,
            letterSpacing: "-0.04em", textTransform: "uppercase",
          }}>
            Nos cours
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 12,
        }}>
          {CLASSES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={classInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "#111", border: "1px solid #1f1f1f",
                borderRadius: 10, padding: "24px 20px",
                borderTop: `3px solid ${c.color}`,
              }}
            >
              <h3 style={{
                fontSize: 18, fontWeight: 900, letterSpacing: "-0.03em",
                textTransform: "uppercase", marginBottom: 8, color: "#fafafa",
              }}>
                {c.name}
              </h3>
              <p style={{
                color: c.color, fontSize: 10, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
              }}>
                {c.level}
              </p>
              <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 14 }}>
                <p style={{ color: "#555", fontSize: 11, marginBottom: 4 }}>Horaires</p>
                <p style={{ color: "#888", fontSize: 12, lineHeight: 1.8 }}>
                  {c.time.split(" · ").map((t, j) => (
                    <span key={j} style={{ display: "block" }}>{t}</span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        ref={planRef}
        style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={planInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{
            color: "#EF4444", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12,
          }}>
            Tarifs
          </p>
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900,
            letterSpacing: "-0.04em", textTransform: "uppercase",
          }}>
            Choisissez votre plan
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16, alignItems: "stretch",
        }}>
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={planInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{
                background: p.popular ? "#111" : "#0d0d0d",
                border: p.popular ? "1px solid rgba(239,68,68,0.5)" : "1px solid #1a1a1a",
                borderRadius: 12, padding: "32px 24px",
                position: "relative",
              }}
            >
              {p.popular && (
                <div style={{
                  position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)",
                  background: "#EF4444", color: "#fff",
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "4px 16px", borderRadius: "0 0 8px 8px",
                }}>
                  Populaire
                </div>
              )}
              <p style={{
                color: "#888", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
              }}>
                {p.name}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                <span style={{ color: "#fafafa", fontSize: 40, fontWeight: 900, letterSpacing: "-0.03em" }}>
                  {p.price}€
                </span>
                <span style={{ color: "#555", fontSize: 13 }}>{p.unit}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#EF4444", flexShrink: 0 }} />
                    <span style={{ color: "#888", fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%",
                background: p.popular ? "#EF4444" : "transparent",
                color: p.popular ? "#fff" : "#888",
                border: p.popular ? "none" : "1px solid #2a2a2a",
                borderRadius: 6, padding: "12px 0", fontSize: 13, fontWeight: 700,
                letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
              }}>
                Choisir ce plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
