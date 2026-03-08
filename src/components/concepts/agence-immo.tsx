"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, MapPin, Star } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: "348", label: "Biens disponibles" },
  { value: "120+", label: "Vendus ce trimestre" },
  { value: "4.8/5", label: "Satisfaction client" },
];

const PROPERTIES = [
  {
    type: "Appartement",
    name: "Le Marais Prestige",
    location: "Paris 3e · 75003",
    price: "1 240 000 €",
    surface: "98 m²",
    rooms: "4 pièces",
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #0f2d4a 60%, #0a1e36 100%)",
    accent: "#0EA5E9",
    tag: "Coup de cœur",
  },
  {
    type: "Villa",
    name: "Villa Horizon",
    location: "Neuilly-sur-Seine · 92200",
    price: "3 850 000 €",
    surface: "320 m²",
    rooms: "8 pièces",
    gradient: "linear-gradient(135deg, #0d1f0f 0%, #0f2f12 60%, #091a0b 100%)",
    accent: "#22c55e",
    tag: "Exclusif",
  },
  {
    type: "Loft",
    name: "Bastille Loft Industriel",
    location: "Paris 11e · 75011",
    price: "780 000 €",
    surface: "145 m²",
    rooms: "3 pièces",
    gradient: "linear-gradient(135deg, #1a0f0d 0%, #2d1a16 60%, #1a100e 100%)",
    accent: "#f97316",
    tag: "Nouveau",
  },
];

const FEATURES = [
  { icon: Shield, title: "Transaction sécurisée", desc: "Suivi juridique complet de A à Z. Notaires partenaires agréés." },
  { icon: Clock, title: "Réponse en 24h", desc: "Un expert vous rappelle sous 24h pour chaque demande." },
  { icon: MapPin, title: "Expertise locale", desc: "15 ans de présence à Paris et Île-de-France." },
  { icon: Star, title: "4.8/5 de satisfaction", desc: "Plus de 800 familles accompagnées depuis 2010." },
];

// ─── Sub-components ─────────────────────────────────────────────────────────
function PropertyCard({ property, index, inView }: {
  property: typeof PROPERTIES[0]; index: number; inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        background: "#111", border: "1px solid #1f1f1f",
        borderRadius: 16, overflow: "hidden",
      }}
    >
      {/* Visual placeholder */}
      <div style={{
        height: 180, background: property.gradient,
        position: "relative", display: "flex",
        alignItems: "flex-start", justifyContent: "flex-end",
        padding: 16,
      }}>
        {/* Tag */}
        <div style={{
          background: property.accent, color: "#fff",
          fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
          textTransform: "uppercase", padding: "4px 12px", borderRadius: 999,
        }}>
          {property.tag}
        </div>
        {/* Decorative lines */}
        <div style={{
          position: "absolute", bottom: 20, left: 20,
          width: "40%", height: 1, background: "rgba(255,255,255,0.1)",
        }} />
        <div style={{
          position: "absolute", bottom: 28, left: 20,
          width: "25%", height: 1, background: "rgba(255,255,255,0.06)",
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: "20px 20px 22px" }}>
        <p style={{
          color: property.accent, fontSize: 10, fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6,
        }}>
          {property.type}
        </p>
        <h3 style={{ color: "#fafafa", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
          {property.name}
        </h3>
        <p style={{ color: "#555", fontSize: 12, marginBottom: 16 }}>{property.location}</p>

        {/* Specs */}
        <div style={{
          display: "flex", gap: 12,
          borderTop: "1px solid #1f1f1f", paddingTop: 14, marginBottom: 16,
        }}>
          {[property.surface, property.rooms].map((spec) => (
            <span key={spec} style={{
              fontSize: 12, color: "#888",
              background: "#0d0d0d", border: "1px solid #1f1f1f",
              borderRadius: 6, padding: "4px 10px",
            }}>
              {spec}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#fafafa", fontSize: 18, fontWeight: 700 }}>{property.price}</span>
          <button style={{
            background: property.accent, color: "#fff", border: "none",
            borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>
            Voir le bien
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export function AgenceImmo() {
  const propRef = useRef(null);
  const featRef = useRef(null);
  const ctaRef = useRef(null);
  const propInView = useInView(propRef, { once: true, margin: "-60px" });
  const featInView = useInView(featRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#0f0f0f", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa",
    }}>

      {/* ── Hero ── */}
      <section style={{
        maxWidth: 900, margin: "0 auto",
        padding: "100px 24px 80px",
      }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 64,
          }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "#0EA5E9",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: "#fff" }} />
          </div>
          <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em" }}>Haus</span>
          <span style={{ color: "#444", fontSize: 14 }}>Property</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16,
          }}
        >
          Trouvez le bien{" "}
          <span style={{
            background: "linear-gradient(135deg, #0EA5E9, #38bdf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            qui vous ressemble
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: "#666", fontSize: 16, lineHeight: 1.7, maxWidth: 480, marginBottom: 40 }}
        >
          Haus Property, votre partenaire de confiance depuis 2010. Achat, vente, location — nos experts vous accompagnent à chaque étape.
        </motion.p>

        {/* Search bar (stylized, non-functional) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "flex", gap: 0,
            background: "#111", border: "1px solid #2a2a2a",
            borderRadius: 12, overflow: "hidden",
            maxWidth: 600,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{
            flex: 1, padding: "16px 20px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <MapPin size={16} color="#555" />
            <span style={{ color: "#555", fontSize: 14 }}>Paris, Île-de-France...</span>
          </div>
          <div style={{
            width: 1, background: "#1f1f1f", margin: "12px 0",
          }} />
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#555", fontSize: 14 }}>Appartement</span>
          </div>
          <button style={{
            background: "#0EA5E9", color: "#fff", border: "none",
            padding: "0 28px", fontSize: 14, fontWeight: 600, cursor: "pointer",
            flexShrink: 0,
          }}>
            Chercher
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em",
                color: "#0EA5E9", marginBottom: 2,
              }}>
                {s.value}
              </div>
              <div style={{ color: "#555", fontSize: 12 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Properties ── */}
      <section
        ref={propRef}
        style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}
      >
        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 64, marginBottom: 36 }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={propInView ? { opacity: 1, y: 0 } : {}}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
          >
            <div>
              <p style={{
                color: "#0EA5E9", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8,
              }}>
                Sélection
              </p>
              <h2 style={{
                fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.03em",
              }}>
                Biens en vedette
              </h2>
            </div>
            <button style={{
              background: "transparent", color: "#0EA5E9",
              border: "1px solid rgba(14,165,233,0.3)", borderRadius: 8,
              padding: "8px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}>
              Voir tous les biens →
            </button>
          </motion.div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}>
          {PROPERTIES.map((p, i) => (
            <PropertyCard key={p.name} property={p} index={i} inView={propInView} />
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section
        ref={featRef}
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.03em" }}>
              Pourquoi choisir Haus ?
            </h2>
          </motion.div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
          }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "#111", border: "1px solid #1f1f1f",
                  borderRadius: 14, padding: "24px 20px",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10, marginBottom: 16,
                  background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <f.icon size={16} color="#0EA5E9" />
                </div>
                <h3 style={{ color: "#fafafa", fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "#555", fontSize: 12, lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          style={{
            background: "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(56,189,248,0.06))",
            border: "1px solid rgba(14,165,233,0.2)",
            borderRadius: 20, padding: "60px 40px", textAlign: "center",
          }}
        >
          <h2 style={{
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700,
            letterSpacing: "-0.03em", marginBottom: 12,
          }}>
            Parlons de votre projet
          </h2>
          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 36px" }}>
            Un expert vous rappelle sous 24h pour une consultation offerte et personnalisée.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              background: "#0EA5E9", color: "#fff", border: "none",
              borderRadius: 10, padding: "14px 36px", fontSize: 14, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 8px 32px rgba(14,165,233,0.3)",
            }}>
              Parler à un agent
            </button>
            <button style={{
              background: "transparent", color: "#888",
              border: "1px solid #2a2a2a", borderRadius: 10,
              padding: "14px 36px", fontSize: 14, fontWeight: 500, cursor: "pointer",
            }}>
              Voir notre catalogue
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
