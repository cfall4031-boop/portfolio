"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────
const MENU = {
  entrees: [
    { name: "Tartare de Saint-Jacques", desc: "Caviar d'Aquitaine, crème citronnée", price: "32 €" },
    { name: "Velouté de truffes noires", desc: "Crème fouettée, brioche dorée", price: "28 €" },
    { name: "Foie gras mi-cuit maison", desc: "Chutney de figues, pain brioché", price: "38 €" },
  ],
  plats: [
    { name: "Filet de bœuf Wagyu", desc: "Jus corsé, pommes soufflées, légumes rôtis", price: "68 €" },
    { name: "Homard bleu rôti", desc: "Beurre Café de Paris, riz de mer sauvage", price: "74 €" },
    { name: "Pigeon en croûte de sel", desc: "Polenta crémeuse, jus truffé", price: "58 €" },
  ],
  desserts: [
    { name: "Soufflé au Grand Marnier", desc: "Crème anglaise à la vanille Bourbon", price: "18 €" },
    { name: "Mille-feuille revisité", desc: "Crème légère, caramel beurre salé", price: "16 €" },
    { name: "Chariot de fromages", desc: "Sélection affinée, confitures maison", price: "22 €" },
  ],
};

const INFO = [
  { label: "Adresse", value: "12 Rue de la Paix, 75001 Paris" },
  { label: "Horaires", value: "Mar–Sam : 12h–14h · 19h–22h30" },
  { label: "Réservations", value: "+33 1 42 60 12 12" },
];

// ─── Sub-components ─────────────────────────────────────────────────────────
function Separator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "48px 0" }}>
      <div style={{ flex: 1, height: 1, background: "rgba(212,175,55,0.2)" }} />
      <div style={{ width: 6, height: 6, background: "#D4AF37", transform: "rotate(45deg)" }} />
      <div style={{ flex: 1, height: 1, background: "rgba(212,175,55,0.2)" }} />
    </div>
  );
}

function MenuSection({ title, items }: { title: string; items: { name: string; desc: string; price: string }[] }) {
  return (
    <div>
      <p style={{
        fontSize: 10, fontWeight: 600, letterSpacing: "0.2em",
        textTransform: "uppercase", color: "#D4AF37", marginBottom: 24,
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}>
        {title}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {items.map((item) => (
          <div key={item.name} style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            <div>
              <p style={{
                color: "#fafafa", fontSize: 15,
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic", marginBottom: 4,
              }}>
                {item.name}
              </p>
              <p style={{ color: "#666", fontSize: 12 }}>{item.desc}</p>
            </div>
            <p style={{
              color: "#D4AF37", fontSize: 14, fontWeight: 500,
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export function RestaurantLuxe() {
  const menuRef = useRef(null);
  const chefRef = useRef(null);
  const infoRef = useRef(null);
  const menuInView = useInView(menuRef, { once: true, margin: "-60px" });
  const chefInView = useInView(chefRef, { once: true, margin: "-60px" });
  const infoInView = useInView(infoRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#080808", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa",
    }}>

      {/* ── Hero ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "80px 24px",
        background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
      }}>
        {/* Top line ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: 80, height: 1, background: "#D4AF37",
            marginBottom: 32,
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#D4AF37", marginBottom: 24,
          }}
        >
          Fine Dining · Paris · Depuis 1987
        </motion.p>

        {/* Restaurant name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(52px, 10vw, 100px)",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400, fontStyle: "italic",
            letterSpacing: "-0.02em", lineHeight: 1.05,
            marginBottom: 32,
          }}
        >
          Maison Laurent
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#888", fontSize: 16, lineHeight: 1.7,
            maxWidth: 440, marginBottom: 48,
          }}
        >
          Une cuisine de haute gastronomie, où chaque plat raconte l'histoire d'un terroir et d'une passion.
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1px solid rgba(212,175,55,0.4)",
            borderRadius: 999, padding: "5px 16px", marginBottom: 40,
            background: "rgba(212,175,55,0.06)",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37" }} />
          <span style={{ fontSize: 12, color: "#D4AF37" }}>Réservations ouvertes</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
        >
          <button style={{
            background: "#D4AF37", color: "#080808",
            border: "none", borderRadius: 2,
            padding: "14px 36px", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer",
          }}>
            Réserver une table
          </button>
          <button style={{
            background: "transparent", color: "#888",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 2,
            padding: "14px 36px", fontSize: 12, fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
          }}>
            Voir la carte
          </button>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            position: "absolute", bottom: 40,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          }}
        >
          <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "#444", textTransform: "uppercase" }}>
            Découvrir
          </span>
          <div style={{ width: 1, height: 40, background: "rgba(212,175,55,0.3)" }} />
        </motion.div>
      </section>

      {/* ── Menu ── */}
      <section
        ref={menuRef}
        style={{ maxWidth: 760, margin: "0 auto", padding: "100px 24px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={menuInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <p style={{
            fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#D4AF37", marginBottom: 16,
          }}>
            La Carte
          </p>
          <h2 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, fontStyle: "italic",
          }}>
            Menu Gastronomique
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={menuInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            background: "#0d0d0d", border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: 4, padding: "48px 40px",
          }}
        >
          <MenuSection title="Entrées" items={MENU.entrees} />
          <Separator />
          <MenuSection title="Plats" items={MENU.plats} />
          <Separator />
          <MenuSection title="Desserts" items={MENU.desserts} />
        </motion.div>
      </section>

      {/* ── Chef ── */}
      <section
        ref={chefRef}
        style={{
          borderTop: "1px solid rgba(212,175,55,0.1)",
          borderBottom: "1px solid rgba(212,175,55,0.1)",
          padding: "80px 24px",
          textAlign: "center",
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={chefInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          {/* Quote mark */}
          <p style={{
            fontSize: 60, lineHeight: 1, color: "rgba(212,175,55,0.3)",
            fontFamily: "Georgia, serif", marginBottom: 8,
          }}>
            &ldquo;
          </p>
          <blockquote style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(18px, 2.5vw, 24px)", fontStyle: "italic",
            fontWeight: 400, lineHeight: 1.7, color: "#ccc",
            marginBottom: 32, margin: "0 0 32px",
          }}>
            La cuisine est un acte d&rsquo;amour. Chaque assiette que je prépare porte en elle des années de passion, de voyages et de rencontres.
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <div style={{ width: 40, height: 1, background: "rgba(212,175,55,0.4)" }} />
            <div>
              <p style={{ color: "#fafafa", fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
                Jean-Pierre Laurent
              </p>
              <p style={{ color: "#666", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Chef Propriétaire · 2 Étoiles Michelin
              </p>
            </div>
            <div style={{ width: 40, height: 1, background: "rgba(212,175,55,0.4)" }} />
          </div>
        </motion.div>
      </section>

      {/* ── Infos pratiques ── */}
      <section
        ref={infoRef}
        style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 100px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={infoInView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{
            fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#D4AF37", marginBottom: 16,
          }}>
            Nous trouver
          </p>
          <h2 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, fontStyle: "italic",
          }}>
            Informations pratiques
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 1,
          border: "1px solid rgba(212,175,55,0.12)",
          borderRadius: 4, overflow: "hidden",
        }}>
          {INFO.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "36px 28px", textAlign: "center",
                background: "#0d0d0d",
                borderRight: i < INFO.length - 1 ? "1px solid rgba(212,175,55,0.12)" : "none",
              }}
            >
              <p style={{
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#D4AF37", marginBottom: 12,
              }}>
                {item.label}
              </p>
              <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6 }}>{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={infoInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 60 }}
        >
          <button style={{
            background: "transparent", color: "#D4AF37",
            border: "1px solid rgba(212,175,55,0.4)", borderRadius: 2,
            padding: "14px 48px", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer",
          }}>
            Réserver en ligne
          </button>
        </motion.div>
      </section>

    </div>
  );
}
