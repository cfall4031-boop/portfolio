"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { designs, designCategories, type DesignCategory } from "@/lib/designs";
import { cn } from "@/lib/cn";

// ─── Color Palettes ──────────────────────────────────────────────────────────
const PALETTES: Record<string, { name: string; hex: string }[]> = {
  "palette-dark": [
    { name: "950", hex: "#0a0a0a" }, { name: "900", hex: "#111111" },
    { name: "800", hex: "#1a1a1a" }, { name: "700", hex: "#262626" },
    { name: "500", hex: "#555555" }, { name: "300", hex: "#888888" },
    { name: "100", hex: "#fafafa" },
  ],
  "palette-indigo": [
    { name: "950", hex: "#1e1b4b" }, { name: "900", hex: "#312e81" },
    { name: "700", hex: "#4338ca" }, { name: "500", hex: "#6366f1" },
    { name: "400", hex: "#818cf8" }, { name: "300", hex: "#a5b4fc" },
    { name: "100", hex: "#e0e7ff" },
  ],
  "palette-sunset": [
    { name: "900", hex: "#7c2d12" }, { name: "700", hex: "#c2410c" },
    { name: "500", hex: "#f97316" }, { name: "400", hex: "#fb923c" },
    { name: "pink", hex: "#ec4899" }, { name: "300", hex: "#fca5a5" },
    { name: "100", hex: "#fff7ed" },
  ],
  "palette-ocean": [
    { name: "950", hex: "#083344" }, { name: "800", hex: "#155e75" },
    { name: "600", hex: "#0891b2" }, { name: "400", hex: "#22d3ee" },
    { name: "300", hex: "#67e8f9" }, { name: "200", hex: "#a5f3fc" },
    { name: "50", hex: "#ecfeff" },
  ],
  "palette-forest": [
    { name: "950", hex: "#052e16" }, { name: "800", hex: "#14532d" },
    { name: "600", hex: "#16a34a" }, { name: "400", hex: "#4ade80" },
    { name: "300", hex: "#86efac" }, { name: "teal", hex: "#2dd4bf" },
    { name: "50", hex: "#f0fdf4" },
  ],
};

function ColorCard({ id, title, description }: { id: string; title: string; description: string }) {
  const palette = PALETTES[id] || [];
  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
      <div className="flex h-14">
        {palette.map((c) => (
          <div key={c.hex} className="flex-1 group relative" style={{ backgroundColor: c.hex }}>
            <div className="absolute inset-0 flex items-end justify-center pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[8px] font-mono bg-black/50 text-white rounded px-1">{c.hex}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <p className="text-sm font-medium mb-0.5" style={{ color: "var(--text)" }}>{title}</p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{description}</p>
        <div className="flex gap-1 flex-wrap mt-2">
          {palette.slice(0, 4).map((c) => (
            <span key={c.hex} className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ backgroundColor: "var(--bg)", color: "var(--text-subtle)", border: "1px solid var(--border)" }}>
              {c.hex}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Typography ──────────────────────────────────────────────────────────────
const TYPO_DATA: Record<string, { samples: { text: string; style: React.CSSProperties }[] }> = {
  "type-geist": {
    samples: [
      { text: "Geist Sans", style: { fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-geist-sans)", color: "var(--text)" } },
      { text: "Clean. Modern. Precise.", style: { fontSize: "13px", fontWeight: 400, fontFamily: "var(--font-geist-sans)", color: "var(--text-muted)" } },
      { text: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", style: { fontSize: "10px", fontFamily: "var(--font-geist-sans)", color: "var(--text-subtle)", letterSpacing: "0.1em" } },
    ],
  },
  "type-inter": {
    samples: [
      { text: "Inter System", style: { fontSize: "24px", fontWeight: 700, fontFamily: "Inter, system-ui", color: "var(--text)" } },
      { text: "The standard of UI typography.", style: { fontSize: "13px", fontFamily: "Inter, system-ui", color: "var(--text-muted)" } },
      { text: "0123456789 — The quick brown fox", style: { fontSize: "10px", fontFamily: "Inter, system-ui", color: "var(--text-subtle)" } },
    ],
  },
  "type-mono": {
    samples: [
      { text: "Geist Mono", style: { fontSize: "22px", fontWeight: 700, fontFamily: "var(--font-geist-mono)", color: "var(--text)" } },
      { text: "const hello = 'world';", style: { fontSize: "13px", fontFamily: "var(--font-geist-mono)", color: "#818cf8" } },
      { text: "function() { return true; }", style: { fontSize: "11px", fontFamily: "var(--font-geist-mono)", color: "var(--text-subtle)" } },
    ],
  },
  "type-display": {
    samples: [
      { text: "72px Display", style: { fontSize: "20px", fontWeight: 900, lineHeight: 1.1, color: "var(--text)", letterSpacing: "-0.04em" } },
      { text: "48px Heading", style: { fontSize: "15px", fontWeight: 700, color: "var(--text)" } },
      { text: "16px Body — readable and clear", style: { fontSize: "12px", fontWeight: 400, color: "var(--text-muted)" } },
    ],
  },
  "type-weights": {
    samples: [
      { text: "Regular 400", style: { fontSize: "14px", fontWeight: 400, color: "var(--text-muted)" } },
      { text: "Medium 500", style: { fontSize: "14px", fontWeight: 500, color: "var(--text-muted)" } },
      { text: "Semibold 600", style: { fontSize: "14px", fontWeight: 600, color: "var(--text)" } },
      { text: "Bold 700", style: { fontSize: "14px", fontWeight: 700, color: "var(--text)" } },
      { text: "Black 900", style: { fontSize: "14px", fontWeight: 900, color: "var(--text)", letterSpacing: "-0.02em" } },
    ],
  },
};

function TypographyCard({ id, title, description }: { id: string; title: string; description: string }) {
  const data = TYPO_DATA[id];
  return (
    <div className="rounded-2xl p-5 border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
      <div className="flex flex-col gap-2 mb-4 min-h-[80px] justify-center">
        {data?.samples.map((s, i) => (
          <p key={i} style={s.style}>{s.text}</p>
        ))}
      </div>
      <div className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs font-medium" style={{ color: "var(--text)" }}>{title}</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-subtle)" }}>{description}</p>
      </div>
    </div>
  );
}

// ─── Gradients ───────────────────────────────────────────────────────────────
const GRADIENTS: Record<string, string> = {
  "grad-aurora": "linear-gradient(135deg, #7c3aed 0%, #6366f1 35%, #22d3ee 100%)",
  "grad-sunset": "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
  "grad-ocean": "linear-gradient(135deg, #0c4a6e 0%, #0891b2 50%, #2dd4bf 100%)",
  "grad-neon": "linear-gradient(135deg, #22c55e 0%, #06b6d4 50%, #6366f1 100%)",
  "grad-gold": "linear-gradient(135deg, #d97706 0%, #f97316 40%, #ec4899 100%)",
};

function GradientCard({ id, title, description }: { id: string; title: string; description: string }) {
  const gradient = GRADIENTS[id] || "linear-gradient(135deg, #6366f1, #818cf8)";
  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
      <div className="h-20" style={{ background: gradient }} />
      <div className="p-4" style={{ backgroundColor: "var(--bg-card)" }}>
        <p className="text-sm font-medium mb-0.5" style={{ color: "var(--text)" }}>{title}</p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{description}</p>
      </div>
    </div>
  );
}

// ─── Shadows ─────────────────────────────────────────────────────────────────
const SHADOWS: Record<string, React.CSSProperties> = {
  "shadow-soft": { boxShadow: "0 1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 12px 24px rgba(0,0,0,0.15)" },
  "shadow-hard": { boxShadow: "4px 4px 0px #6366f1" },
  "shadow-glow": { boxShadow: "0 0 16px rgba(99,102,241,0.5), 0 0 32px rgba(99,102,241,0.25), 0 0 64px rgba(99,102,241,0.1)" },
};

function ShadowCard({ id, title, description }: { id: string; title: string; description: string }) {
  const shadow = SHADOWS[id] || {};
  return (
    <div className="rounded-2xl p-5 border flex flex-col gap-4" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
      <div className="flex items-center justify-center h-20">
        <div
          className="w-24 h-12 rounded-xl"
          style={{
            backgroundColor: id === "shadow-hard" ? "#6366f1" : "var(--bg)",
            border: "1px solid var(--border)",
            ...shadow,
          }}
        />
      </div>
      <div className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
        <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{title}</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-subtle)" }}>{description}</p>
      </div>
    </div>
  );
}

// ─── Radius ──────────────────────────────────────────────────────────────────
const RADIUS_SCALE = [
  { label: "none", value: "0px" }, { label: "sm", value: "4px" },
  { label: "md", value: "8px" }, { label: "lg", value: "12px" },
  { label: "xl", value: "16px" }, { label: "2xl", value: "20px" },
  { label: "full", value: "9999px" },
];

function RadiusCard({ id, title, description }: { id: string; title: string; description: string }) {
  const isSharp = id === "radius-sharp";
  const items = isSharp
    ? [{ label: "none", value: "0px" }, { label: "sm", value: "2px" }, { label: "md", value: "4px" }]
    : RADIUS_SCALE;

  return (
    <div className="rounded-2xl p-5 border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
      <div className="flex items-end gap-3 mb-4 h-16 flex-wrap">
        {items.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className="w-8 h-8 border-2"
              style={{ borderColor: "var(--accent)", borderRadius: value }}
            />
            <span className="text-[9px] font-mono" style={{ color: "var(--text-subtle)" }}>{label}</span>
          </div>
        ))}
      </div>
      <div className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
        <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{title}</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-subtle)" }}>{description}</p>
      </div>
    </div>
  );
}

// ─── Spacing ─────────────────────────────────────────────────────────────────
const SPACING_SCALE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16];

function SpacingCard({ id, title, description }: { id: string; title: string; description: string }) {
  const base = id === "spacing-4" ? 4 : 8;
  return (
    <div className="rounded-2xl p-5 border" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}>
      <div className="flex items-end gap-1 mb-4 h-20 overflow-hidden">
        {SPACING_SCALE.map((n) => {
          const px = n * base;
          const h = Math.min(px / 2, 64);
          return (
            <div key={n} className="flex flex-col items-center gap-1 flex-1">
              <div
                className="w-full rounded-t"
                style={{ height: `${h}px`, backgroundColor: "var(--accent)", opacity: 0.3 + (n / 16) * 0.7 }}
              />
              <span className="text-[8px] font-mono" style={{ color: "var(--text-subtle)" }}>{px}</span>
            </div>
          );
        })}
      </div>
      <div className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
        <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{title}</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-subtle)" }}>{description}</p>
        <p className="text-[10px] font-mono mt-1" style={{ color: "var(--accent-hover)" }}>base: {base}px</p>
      </div>
    </div>
  );
}

// ─── Card router ─────────────────────────────────────────────────────────────
function DesignCard({ item }: { item: (typeof designs)[0] }) {
  if (item.category === "colors") return <ColorCard {...item} />;
  if (item.category === "typography") return <TypographyCard {...item} />;
  if (item.category === "gradient") return <GradientCard {...item} />;
  if (item.category === "shadow") return <ShadowCard {...item} />;
  if (item.category === "radius") return <RadiusCard {...item} />;
  if (item.category === "spacing") return <SpacingCard {...item} />;
  return null;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DesignPage() {
  const [activeCategory, setActiveCategory] = useState<DesignCategory | null>(null);

  const filtered = activeCategory
    ? designs.filter((d) => d.category === activeCategory)
    : designs;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          Design Styles
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          {designs.length} design tokens — palettes, typography, gradients, ombres et plus.
        </p>
      </motion.div>

      {/* Category filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 flex-wrap mb-10"
      >
        <button
          onClick={() => setActiveCategory(null)}
          className={cn("px-3 py-1 rounded-full text-xs border transition-all", !activeCategory ? "opacity-100" : "opacity-50 hover:opacity-75")}
          style={{
            backgroundColor: !activeCategory ? "var(--accent-glow)" : "var(--bg-card)",
            borderColor: !activeCategory ? "rgba(99,102,241,0.4)" : "var(--border)",
            color: !activeCategory ? "var(--accent-hover)" : "var(--text-muted)",
          }}
        >
          All
        </button>
        {designCategories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(activeCategory === id ? null : id)}
            className={cn("px-3 py-1 rounded-full text-xs border transition-all", activeCategory === id ? "opacity-100" : "opacity-50 hover:opacity-75")}
            style={{
              backgroundColor: activeCategory === id ? "var(--accent-glow)" : "var(--bg-card)",
              borderColor: activeCategory === id ? "rgba(99,102,241,0.4)" : "var(--border)",
              color: activeCategory === id ? "var(--accent-hover)" : "var(--text-muted)",
            }}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
          >
            <DesignCard item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
