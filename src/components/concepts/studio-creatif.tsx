"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────
const TAGS = [
  "Branding", "Web Design", "Motion", "Print", "UX Research",
  "Identité visuelle", "Packaging", "Direction artistique",
];

const PROJECTS = [
  {
    name: "Volta Beverages",
    category: "Branding · Packaging",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
    year: "2025",
    span: "col",
  },
  {
    name: "Meridian",
    category: "Web Design · UX",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
    year: "2025",
    span: "row",
  },
  {
    name: "Sage Finance",
    category: "Identité · Motion",
    gradient: "linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)",
    year: "2024",
    span: "none",
  },
  {
    name: "Nova Collective",
    category: "Direction artistique",
    gradient: "linear-gradient(135deg, #4ade80 0%, #22d3ee 100%)",
    year: "2024",
    span: "none",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Branding & Identité",
    desc: "Logo, charte graphique, système de design. Une identité cohérente et mémorable pour votre marque.",
  },
  {
    num: "02",
    title: "Web Design & UX",
    desc: "Sites vitrines, e-commerce, landing pages. Du wireframe au pixel final.",
  },
  {
    num: "03",
    title: "Motion & Vidéo",
    desc: "Animation de logo, motion design, vidéos de marque. Pour une communication qui capte l&apos;attention.",
  },
  {
    num: "04",
    title: "Direction artistique",
    desc: "Shooting produit, direction de campagne, cohérence visuelle sur tous vos supports.",
  },
];

// ─── Main Export ─────────────────────────────────────────────────────────────
export function StudioCreatif() {
  const workRef = useRef(null);
  const servRef = useRef(null);
  const ctaRef = useRef(null);
  const workInView = useInView(workRef, { once: true, margin: "-60px" });
  const servInView = useInView(servRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#060606", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa", overflowX: "hidden",
    }}>
      <style>{`
        @keyframes marquee-tags {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "100px 24px 64px" }}>
        {/* Studio badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 999, padding: "4px 14px", marginBottom: 40,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1" }} />
          <span style={{ fontSize: 12, color: "#818cf8", fontWeight: 500 }}>
            Prism Studio — Paris · Berlin · Montréal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(44px, 8vw, 88px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: 24,
          }}
        >
          We make brands{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366f1 0%, #ec4899 60%, #f97316 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            unforgettable
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          style={{
            color: "#555", fontSize: 17, lineHeight: 1.7,
            maxWidth: 480, marginBottom: 40,
          }}
        >
          Studio de design multi-disciplinaire. On crée des identités, des expériences et des contenus qui font la différence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <button style={{
            background: "linear-gradient(135deg, #6366f1, #ec4899)",
            color: "#fff", border: "none", borderRadius: 10,
            padding: "13px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
          }}>
            Lancer un projet
          </button>
          <button style={{
            background: "transparent", color: "#555",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10,
            padding: "13px 32px", fontSize: 14, fontWeight: 500, cursor: "pointer",
          }}>
            Voir nos travaux ↓
          </button>
        </motion.div>
      </section>

      {/* ── Tags marquee ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "14px 0", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", gap: 0,
          animation: "marquee-tags 18s linear infinite",
          width: "max-content",
        }}>
          {[...TAGS, ...TAGS].map((tag, i) => (
            <span key={i} style={{
              padding: "0 28px",
              fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
              textTransform: "uppercase", whiteSpace: "nowrap",
              color: "rgba(255,255,255,0.15)",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Work grid ── */}
      <section
        ref={workRef}
        style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            marginBottom: 32,
          }}
        >
          <div>
            <p style={{
              color: "#6366f1", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8,
            }}>
              Travaux récents
            </p>
            <h2 style={{
              fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.03em",
            }}>
              Sélection 2024–2025
            </h2>
          </div>
          <button style={{
            display: "flex", alignItems: "center", gap: 4,
            background: "transparent", color: "#555",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8,
            padding: "8px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>
            Tous les projets <ArrowUpRight size={12} />
          </button>
        </motion.div>

        {/* 2×2 grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "240px 240px",
          gap: 12,
        }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={workInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                borderRadius: 16, overflow: "hidden",
                background: p.gradient, position: "relative",
                cursor: "pointer",
                gridColumn: i === 0 ? "1" : i === 1 ? "2" : "auto",
                gridRow: i === 1 ? "1 / 3" : "auto",
              }}
            >
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)",
              }} />
              {/* Content */}
              <div style={{
                position: "absolute", bottom: 20, left: 20, right: 20,
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              }}>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: "0.1em", marginBottom: 4 }}>
                    {p.category} · {p.year}
                  </p>
                  <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{p.name}</h3>
                </div>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ArrowUpRight size={14} color="#fff" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section
        ref={servRef}
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={servInView ? { opacity: 1, y: 0 } : {}}
            style={{ marginBottom: 48 }}
          >
            <p style={{
              color: "#6366f1", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8,
            }}>
              Ce qu&apos;on fait
            </p>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.03em" }}>
              Nos services
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                animate={servInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: "flex", gap: 32, alignItems: "flex-start",
                  padding: "32px 0",
                  borderBottom: i < SERVICES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                {/* Number */}
                <span style={{
                  fontSize: 11, fontWeight: 700, color: "rgba(99,102,241,0.5)",
                  letterSpacing: "0.08em", flexShrink: 0, marginTop: 4, width: 28,
                }}>
                  {s.num}
                </span>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em",
                    marginBottom: 8, color: "#fafafa",
                  }}>
                    {s.title}
                  </h3>
                  <p
                    style={{ color: "#555", fontSize: 14, lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: s.desc }}
                  />
                </div>
                {/* Arrow */}
                <ArrowUpRight size={18} color="#333" style={{ flexShrink: 0, marginTop: 4 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(236,72,153,0.06) 100%)",
            border: "1px solid rgba(99,102,241,0.15)",
            borderRadius: 20, padding: "64px 40px",
            display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
          }}
        >
          <h2 style={{
            fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 12,
          }}>
            Prêt à lancer votre projet ?
          </h2>
          <p style={{ color: "#555", fontSize: 15, marginBottom: 40, maxWidth: 380 }}>
            Dites-nous ce que vous préparez. Premier échange offert.
          </p>

          {/* Email input inline */}
          <div style={{
            display: "flex", gap: 0,
            background: "#111", border: "1px solid #2a2a2a",
            borderRadius: 12, overflow: "hidden", maxWidth: 480, width: "100%",
          }}>
            <input
              type="email"
              placeholder="votre@email.com"
              readOnly
              style={{
                flex: 1, padding: "14px 20px", background: "transparent",
                border: "none", outline: "none", color: "#888", fontSize: 14,
              }}
            />
            <button style={{
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
              color: "#fff", border: "none",
              padding: "0 28px", fontSize: 14, fontWeight: 700, cursor: "pointer",
              flexShrink: 0,
            }}>
              Démarrer →
            </button>
          </div>

          <p style={{ color: "#333", fontSize: 11, marginTop: 14 }}>
            Réponse sous 24h · Aucun engagement
          </p>
        </motion.div>
      </section>

    </div>
  );
}
