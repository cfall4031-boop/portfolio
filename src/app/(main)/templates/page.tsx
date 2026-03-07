"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  templates,
  allTemplateStyles,
  allTemplateCategories,
  templateStyleLabels,
  templateCategoryLabels,
  type TemplateStyle,
  type TemplateCategory,
} from "@/lib/templates";
import { cn } from "@/lib/cn";

export default function TemplatesPage() {
  const [activeStyle, setActiveStyle] = useState<TemplateStyle | null>(null);
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | null>(null);

  const filtered = templates.filter((t) => {
    if (activeStyle && t.style !== activeStyle) return false;
    if (activeCategory && t.category !== activeCategory) return false;
    return true;
  });

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
          Templates
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          {templates.length} landing pages complètes — copy, paste, ship.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-3 mb-10"
      >
        {/* Style filters */}
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-xs font-medium" style={{ color: "var(--text-subtle)", width: 48 }}>Style</span>
          <button
            onClick={() => setActiveStyle(null)}
            className={cn("px-3 py-1 rounded-full text-xs border transition-all", !activeStyle ? "opacity-100" : "opacity-50 hover:opacity-75")}
            style={{
              backgroundColor: !activeStyle ? "var(--accent-glow)" : "var(--bg-card)",
              borderColor: !activeStyle ? "rgba(99,102,241,0.4)" : "var(--border)",
              color: !activeStyle ? "var(--accent-hover)" : "var(--text-muted)",
            }}
          >
            All
          </button>
          {allTemplateStyles.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStyle(activeStyle === s ? null : s)}
              className={cn("px-3 py-1 rounded-full text-xs border transition-all", activeStyle === s ? "opacity-100" : "opacity-50 hover:opacity-75")}
              style={{
                backgroundColor: activeStyle === s ? "var(--accent-glow)" : "var(--bg-card)",
                borderColor: activeStyle === s ? "rgba(99,102,241,0.4)" : "var(--border)",
                color: activeStyle === s ? "var(--accent-hover)" : "var(--text-muted)",
              }}
            >
              {templateStyleLabels[s]}
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-xs font-medium" style={{ color: "var(--text-subtle)", width: 48 }}>Type</span>
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
          {allTemplateCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(activeCategory === c ? null : c)}
              className={cn("px-3 py-1 rounded-full text-xs border transition-all", activeCategory === c ? "opacity-100" : "opacity-50 hover:opacity-75")}
              style={{
                backgroundColor: activeCategory === c ? "var(--accent-glow)" : "var(--bg-card)",
                borderColor: activeCategory === c ? "rgba(99,102,241,0.4)" : "var(--border)",
                color: activeCategory === c ? "var(--accent-hover)" : "var(--text-muted)",
              }}
            >
              {templateCategoryLabels[c]}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: 20,
        }}
      >
        {filtered.map((template, i) => (
          <motion.div
            key={template.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
          >
            <Link
              href={`/templates/${template.slug}`}
              className="group block rounded-2xl border overflow-hidden"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                textDecoration: "none",
              }}
            >
              {/* Accent bar */}
              <div style={{ height: 3, background: template.accentColor }} />

              {/* Live iframe preview */}
              <div
                style={{
                  height: 220,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "var(--bg)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <iframe
                  src={`/template-preview/${template.slug}`}
                  style={{
                    position: "absolute", top: 0, left: 0,
                    width: "200%", height: "200%",
                    transform: "scale(0.5)", transformOrigin: "top left",
                    border: "none", pointerEvents: "none",
                  }}
                  tabIndex={-1}
                  aria-hidden="true"
                  loading="lazy"
                  title={template.title}
                />
                {/* Click overlay */}
                <div className="absolute inset-0" />
              </div>

              {/* Meta */}
              <div style={{ padding: "16px 20px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h2 style={{ color: "var(--text)", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                      {template.title}
                    </h2>
                    <p style={{ color: "var(--text-muted)", fontSize: 12, lineHeight: 1.5, maxWidth: 280 }}>
                      {template.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: template.accentColor }}
                  />
                </div>

                {/* Pills */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 10, padding: "2px 9px", borderRadius: 999, fontWeight: 600,
                    background: template.accentColor + "20",
                    color: template.accentColor,
                    border: `1px solid ${template.accentColor}40`,
                  }}>
                    {templateCategoryLabels[template.category]}
                  </span>
                  <span style={{
                    fontSize: 10, padding: "2px 9px", borderRadius: 999,
                    backgroundColor: "var(--bg)",
                    color: "var(--text-subtle)",
                    border: "1px solid var(--border)",
                  }}>
                    {templateStyleLabels[template.style]}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24"
        >
          <p style={{ color: "var(--text-subtle)" }}>Aucun template ne correspond aux filtres sélectionnés.</p>
        </motion.div>
      )}
    </div>
  );
}
