"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Truck, Lock, RotateCcw, Star, Gift } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: Leaf, title: "Sustainably sourced", desc: "Carbon neutral since 2022" },
  { icon: Truck, title: "Free shipping", desc: "On orders over $50" },
  { icon: Lock, title: "Secure checkout", desc: "256-bit SSL encryption" },
  { icon: RotateCcw, title: "30-day returns", desc: "No questions asked" },
  { icon: Star, title: "Award winning", desc: "Best design 2025" },
  { icon: Gift, title: "Gift wrapping", desc: "Free on any order" },
];

const REVIEWS = [
  { name: "Sarah M.", initials: "SM", rating: 5, text: "Absolutely love it. Best purchase I made this year." },
  { name: "James K.", initials: "JK", rating: 5, text: "The quality exceeded my expectations. Stunning design." },
  { name: "Léa D.", initials: "LD", rating: 5, text: "Shipped fast, packaged beautifully. 10/10 would recommend." },
  { name: "Carlos R.", initials: "CR", rating: 4, text: "Great product, solid build. Really happy with it overall." },
];

// ─── Tilt Card (inline — self-contained) ─────────────────────────────────────
function ProductTiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 24 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div style={{ perspective: "1000px", width: "100%", maxWidth: 360 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX, rotateY,
          transformStyle: "preserve-3d",
          borderRadius: 20,
          overflow: "hidden",
          cursor: "grab",
        }}
      >
        {/* Product visual */}
        <div style={{
          aspectRatio: "1",
          background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #0f1a10 100%)",
          border: "1px solid rgba(74,222,128,0.2)",
          borderRadius: 20,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* Background glow */}
          <div style={{
            position: "absolute", top: "20%", left: "20%",
            width: "60%", height: "60%",
            background: "radial-gradient(circle, rgba(74,222,128,0.2), transparent)",
          }} />

          {/* Product icon/illustration */}
          <div style={{
            width: 160, height: 160,
            background: "linear-gradient(135deg, #4ade80, #22d3ee)",
            borderRadius: 32,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 20px 60px rgba(74,222,128,0.3)",
            transform: "translateZ(20px)",
          }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.25)" }} />
          </div>

          {/* Price badge — floating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              position: "absolute", bottom: 20, right: 20,
              background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(74,222,128,0.3)",
              borderRadius: 12, padding: "8px 14px",
              transform: "translateZ(30px)",
            }}
          >
            <span style={{ color: "#4ade80", fontSize: 18, fontWeight: 800 }}>$89</span>
            <span style={{ color: "#555", fontSize: 12, marginLeft: 6, textDecoration: "line-through" }}>$129</span>
          </motion.div>

          {/* New badge */}
          <div style={{
            position: "absolute", top: 16, left: 16,
            background: "#4ade80", color: "#0a0a0a",
            borderRadius: 999, padding: "3px 10px",
            fontSize: 10, fontWeight: 800, letterSpacing: "0.06em",
            transform: "translateZ(30px)",
          }}>
            NEW
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function EcommerceProduct() {
  const featRef = useRef(null);
  const reviewRef = useRef(null);
  const ctaRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: "-60px" });
  const reviewInView = useInView(reviewRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div style={{
      background: "#0a0a0a", minHeight: "100vh",
      fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
      color: "#fafafa",
    }}>

      {/* ── Split Hero ── */}
      <section style={{
        maxWidth: 1000, margin: "0 auto",
        padding: "80px 24px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 60, alignItems: "center",
      }}>
        {/* Left: Product tilt card */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ProductTiltCard />
        </motion.div>

        {/* Right: Copy + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand */}
          <p style={{
            color: "#4ade80", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12,
          }}>
            Verdant Studio
          </p>

          <h1 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16,
          }}>
            The{" "}
            <span style={{
              background: "linear-gradient(135deg, #4ade80, #22d3ee)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Lumina
            </span>{" "}
            Collection
          </h1>

          {/* Stars */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{ color: "#4ade80", fontSize: 14 }}>{s}</span>
              ))}
            </div>
            <span style={{ color: "#555", fontSize: 12 }}>4.9 (247 reviews)</span>
          </div>

          <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
            Handcrafted from sustainable materials. Designed to last a lifetime. The perfect blend of form and function.
          </p>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 28 }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: "#4ade80" }}>$89</span>
            <span style={{ fontSize: 18, color: "#444", textDecoration: "line-through" }}>$129</span>
            <span style={{
              background: "rgba(74,222,128,0.1)", color: "#4ade80",
              border: "1px solid rgba(74,222,128,0.25)",
              borderRadius: 999, padding: "2px 10px", fontSize: 12, fontWeight: 600,
            }}>
              Save 31%
            </span>
          </div>

          {/* Colors */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ color: "#555", fontSize: 12, marginBottom: 10 }}>Color: <span style={{ color: "#fafafa" }}>Forest Green</span></p>
            <div style={{ display: "flex", gap: 10 }}>
              {["#4ade80", "#22d3ee", "#a78bfa", "#f97316"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: 24, height: 24, borderRadius: "50%", background: c,
                    border: c === "#4ade80" ? "2px solid #fff" : "2px solid transparent",
                    outline: c === "#4ade80" ? "1px solid #4ade80" : "none",
                    outlineOffset: 2, cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button style={{
              flex: "1 1 auto",
              background: "#4ade80", color: "#0a0a0a", border: "none",
              borderRadius: 10, padding: "14px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 8px 32px rgba(74,222,128,0.3)",
            }}>
              Add to cart — $89
            </button>
            <button style={{
              background: "transparent", color: "#888",
              border: "1px solid #1f1f1f",
              borderRadius: 10, padding: "14px 20px", fontSize: 15, cursor: "pointer",
            }}>
              ♡
            </button>
          </div>

          <p style={{ color: "#444", fontSize: 11, marginTop: 12 }}>
            ✓ Free shipping over $50 · ✓ 30-day returns · ✓ In stock (18 left)
          </p>
        </motion.div>
      </section>

      {/* ── Features Grid ── */}
      <section ref={featRef} style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 48 }}>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={featInView ? { opacity: 1, y: 0 } : {}}
            style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 28 }}
          >
            Why Lumina
          </motion.h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  background: "#111", border: "1px solid #1a1a1a",
                  borderRadius: 12, padding: "16px",
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <f.icon size={14} color="#4ade80" />
                </div>
                <div>
                  <p style={{ color: "#fafafa", fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{f.title}</p>
                  <p style={{ color: "#555", fontSize: 12 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section ref={reviewRef} style={{ padding: "0 0 80px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", marginBottom: 24 }}>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={reviewInView ? { opacity: 1, y: 0 } : {}}
            style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            What people say
          </motion.h2>
        </div>
        <div style={{ display: "flex", gap: 14, padding: "4px 24px", overflowX: "auto", scrollbarWidth: "none" }}>
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: 20 }}
              animate={reviewInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              style={{
                flexShrink: 0, width: 260,
                background: "#111", border: "1px solid #1a1a1a",
                borderRadius: 14, padding: "20px",
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "linear-gradient(135deg, #4ade80, #22d3ee)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "#0a0a0a", flexShrink: 0,
                }}>
                  {r.initials}
                </div>
                <div>
                  <p style={{ color: "#fafafa", fontSize: 13, fontWeight: 600 }}>{r.name}</p>
                  <div style={{ display: "flex", gap: 1 }}>
                    {"★".repeat(r.rating).split("").map((s, j) => (
                      <span key={j} style={{ color: "#4ade80", fontSize: 11 }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6, fontStyle: "italic" }}>
                &ldquo;{r.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section ref={ctaRef} style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 100px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          style={{
            background: "linear-gradient(135deg, rgba(74,222,128,0.1), rgba(34,211,238,0.08))",
            border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: 20, padding: "56px 40px", textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
            Ready to experience Lumina?
          </h2>
          <p style={{ color: "#666", fontSize: 15, marginBottom: 32 }}>
            Join 12,000+ happy customers. Free shipping. 30-day guarantee.
          </p>
          <button style={{
            background: "#4ade80", color: "#0a0a0a", border: "none",
            borderRadius: 12, padding: "14px 40px", fontSize: 16, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 8px 40px rgba(74,222,128,0.3)",
          }}>
            Shop now — $89
          </button>
        </motion.div>
      </section>

    </div>
  );
}
