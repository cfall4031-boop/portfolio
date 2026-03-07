// Code snippets displayed in the "Code" tab of each template showcase.
// Showing the hero section only — full source available on GitHub.

export const templateCodeMap: Record<string, string> = {
  "saas-dark": `"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Zap, Lock, BarChart2, RefreshCw, Puzzle, Globe } from "lucide-react";

const FEATURES = [
  { icon: Zap,       title: "Lightning Fast",      desc: "Edge-optimized delivery. Sub-100ms globally." },
  { icon: Lock,      title: "Secure by Default",   desc: "SOC2 compliant. Zero-trust architecture." },
  { icon: BarChart2, title: "Real-time Analytics", desc: "Live dashboards. No extra setup needed." },
  { icon: RefreshCw, title: "Auto Scaling",        desc: "From 1 to 1M users without config changes." },
  { icon: Puzzle,    title: "API-First",           desc: "RESTful + GraphQL. Integrates with anything." },
  { icon: Globe,     title: "Global CDN",          desc: "200+ edge locations. Always close to users." },
];

export function SaasDark() {
  const featRef = useRef(null);
  const inView = useInView(featRef, { once: true, margin: "-80px" });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "system-ui" }}>

      {/* Hero */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "100px 24px 80px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: 999, padding: "5px 14px", marginBottom: 32,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#6366f1",
            display: "inline-block", boxShadow: "0 0 8px #6366f1" }} />
          <span style={{ fontSize: 12, color: "#818cf8", fontWeight: 500 }}>
            Now in Public Beta — Free to start
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20, color: "#fafafa" }}
        >
          Ship faster with{" "}
          <span style={{
            background: "linear-gradient(135deg, #6366f1, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            less code
          </span>
        </motion.h1>

        {/* ... Feature grid, Social proof bar, Pricing CTA */}
      </section>
    </div>
  );
}`,

  "startup-bold": `"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "200K+", label: "Active users" },
  { value: "99.9", label: "Uptime SLA" },
  { value: "$4.2M", label: "Raised in seed" },
];

function GlassCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      flex: "1 1 180px",
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 20, padding: "28px 24px", textAlign: "center",
    }}>
      <div style={{
        fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900,
        background: "linear-gradient(135deg, #f97316, #fb923c)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>
        {value}
      </div>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginTop: 6 }}>{label}</div>
    </div>
  );
}

export function StartupBold() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff", fontFamily: "system-ui" }}>
      <style>{\`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }\`}</style>

      {/* Hero: giant weight-900 gradient headline */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "90px 24px", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(52px, 10vw, 108px)", fontWeight: 900,
            letterSpacing: "-0.05em", lineHeight: 0.95, marginBottom: 28 }}
        >
          Build the{" "}
          <span style={{
            background: "linear-gradient(135deg, #f97316 0%, #ec4899 60%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            future
          </span>
          <br /><span style={{ color: "rgba(255,255,255,0.85)" }}>faster.</span>
        </motion.h1>
        {/* Stats glassmorphism, marquee logos, angled CTA section... */}
      </section>
    </div>
  );
}`,

  "agency-creative": `"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WORKS = [
  { title: "Horizon Brand", category: "Brand Identity",
    color: "linear-gradient(135deg, #ec4899, #f97316)", span: 2 },
  { title: "Pulse Dashboard", category: "Web Design",
    color: "linear-gradient(135deg, #6366f1, #ec4899)", span: 1 },
  { title: "Motion App", category: "Mobile + Motion",
    color: "linear-gradient(135deg, #22d3ee, #6366f1)", span: 1 },
];

export function AgencyCreative() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "system-ui", color: "#fafafa" }}>

      {/* Split hero: text left, geometric divs right */}
      <section style={{
        maxWidth: 1000, margin: "0 auto", padding: "80px 24px",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 48, alignItems: "center",
      }}>
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900,
            letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>
            We craft{" "}
            <span style={{ color: "#ec4899", fontStyle: "italic" }}>bold</span>
            <br />brands that{" "}
            <span style={{ textDecoration: "underline", textDecorationColor: "#ec4899", textUnderlineOffset: 6 }}>
              stick
            </span>
          </h1>
          <button style={{
            background: "#ec4899", color: "#fff", border: "none",
            borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 700,
            cursor: "pointer", boxShadow: "4px 4px 0px #a21c6a",
          }}>
            Start a project
          </button>
        </motion.div>
        {/* Right: overlapping geometric shapes, work grid, services pills... */}
      </section>
    </div>
  );
}`,

  "mobile-app": `"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function PhoneFrame() {
  return (
    <div style={{
      width: 180, height: 360, background: "#111",
      borderRadius: 36, border: "2px solid rgba(34,211,238,0.3)",
      boxShadow: "0 0 60px rgba(34,211,238,0.2), 0 40px 80px rgba(0,0,0,0.6)",
      position: "relative", overflow: "hidden", flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
        width: 60, height: 20, background: "#0a0a0a", borderRadius: 10, zIndex: 10 }} />
      {/* Screen gradient + app icon + content lines */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(34,211,238,0.2) 0%, rgba(99,102,241,0.15) 50%, #0d0d0d 100%)",
        display: "flex", flexDirection: "column", alignItems: "center",
        paddingTop: 60,
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: "linear-gradient(135deg, #22d3ee, #6366f1)",
          marginBottom: 16, display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ width: 20, height: 20, borderRadius: 4, background: "rgba(255,255,255,0.9)" }} />
        </div>
      </div>
    </div>
  );
}

export function MobileApp() {
  return (
    <div style={{
      background: "#0a0a0a", minHeight: "100vh", fontFamily: "system-ui",
      color: "#fafafa",
    }}>
      <section style={{
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.18) 0%, transparent 70%)",
        padding: "80px 24px 60px", textAlign: "center",
      }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
            letterSpacing: "-0.04em", color: "#fafafa", marginBottom: 16 }}>
          Your{" "}
          <span style={{
            background: "linear-gradient(135deg, #22d3ee, #6366f1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>focus</span>, amplified.
        </motion.h1>
        {/* PhoneFrame + feature bubbles + App Store / Google Play buttons... */}
      </section>
    </div>
  );
}`,

  "portfolio-minimal": `"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  { title: "Orbit Design System", category: "Design System",
    color: "linear-gradient(135deg, #a78bfa, #6366f1)", year: "2025" },
  { title: "Nova Mobile App", category: "iOS / Android",
    color: "linear-gradient(135deg, #22d3ee, #a78bfa)", year: "2025" },
  { title: "Stellar Dashboard", category: "Web App",
    color: "linear-gradient(135deg, #6366f1, #22d3ee)", year: "2024" },
  { title: "Flux Branding", category: "Brand Identity",
    color: "linear-gradient(135deg, #f97316, #a78bfa)", year: "2024" },
];

export function PortfolioMinimal() {
  const worksRef = useRef(null);
  const worksInView = useInView(worksRef, { once: true });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "system-ui", color: "#fafafa" }}>

      {/* Hero: avatar + name reveal + role + CTA */}
      <section style={{ maxWidth: 680, margin: "0 auto", padding: "100px 24px 80px", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg, #a78bfa, #6366f1)",
            margin: "0 auto 24px", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 32,
            boxShadow: "0 0 40px rgba(167,139,250,0.3)",
          }}
        >✦</motion.div>

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1.1 }}
        >
          Alex Morin
        </motion.h1>
        {/* Role, bio, CTA, project grid, skills, footer... */}
      </section>
    </div>
  );
}`,

  "ecommerce-product": `"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// Inline tilt card — self-contained, no external imports
function ProductTiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 24 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <div style={{ perspective: "1000px", width: "100%", maxWidth: 360 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", borderRadius: 20 }}
      >
        <div style={{
          aspectRatio: "1",
          background: "linear-gradient(135deg, #111, #1a1a1a, #0f1a10)",
          border: "1px solid rgba(74,222,128,0.2)",
          borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 160, height: 160,
            background: "linear-gradient(135deg, #4ade80, #22d3ee)",
            borderRadius: 32, display: "flex",
            alignItems: "center", justifyContent: "center",
            boxShadow: "0 20px 60px rgba(74,222,128,0.3)",
            transform: "translateZ(20px)",
          }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.25)" }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function EcommerceProduct() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "system-ui" }}>
      {/* Split hero: ProductTiltCard left, copy + CTA right */}
      {/* Feature icon grid, reviews horizontal scroll, final CTA... */}
    </div>
  );
}`,
};
