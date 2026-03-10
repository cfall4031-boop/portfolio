"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  websites,
  allWebsiteStyles,
  allWebsiteCategories,
  websiteStyleLabels,
  websiteCategoryLabels,
  type WebsiteStyle,
  type WebsiteCategory,
} from "@/lib/websites";
import { cn } from "@/lib/cn";

export default function WebsitesPage() {
  const [activeStyle, setActiveStyle] = useState<WebsiteStyle | null>(null);
  const [activeCategory, setActiveCategory] = useState<WebsiteCategory | null>(null);

  const filtered = websites.filter((w) => {
    if (activeStyle && w.style !== activeStyle) return false;
    if (activeCategory && w.category !== activeCategory) return false;
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
        <h1
          className="text-3xl font-bold tracking-tight mb-2"
          style={{ color: "var(--text)" }}
        >
          Preview Website
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          {websites.length} sites complets livrables — live, fonctionnels, prêts à mettre en ligne.
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
          <span
            className="text-xs font-medium"
            style={{ color: "var(--text-subtle)", width: 48 }}
          >
            Style
          </span>
          <button
            onClick={() => setActiveStyle(null)}
            className={cn(
              "px-3 py-1 rounded-full text-xs border transition-all",
              !activeStyle ? "opacity-100" : "opacity-50 hover:opacity-75"
            )}
            style={{
              backgroundColor: !activeStyle ? "var(--accent-glow)" : "var(--bg-card)",
              borderColor: !activeStyle
                ? "rgba(99,102,241,0.4)"
                : "var(--border)",
              color: !activeStyle ? "var(--accent-hover)" : "var(--text-muted)",
            }}
          >
            All
          </button>
          {allWebsiteStyles.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStyle(activeStyle === s ? null : s)}
              className={cn(
                "px-3 py-1 rounded-full text-xs border transition-all",
                activeStyle === s ? "opacity-100" : "opacity-50 hover:opacity-75"
              )}
              style={{
                backgroundColor:
                  activeStyle === s ? "var(--accent-glow)" : "var(--bg-card)",
                borderColor:
                  activeStyle === s
                    ? "rgba(99,102,241,0.4)"
                    : "var(--border)",
                color:
                  activeStyle === s
                    ? "var(--accent-hover)"
                    : "var(--text-muted)",
              }}
            >
              {websiteStyleLabels[s]}
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div className="flex gap-2 flex-wrap items-center">
          <span
            className="text-xs font-medium"
            style={{ color: "var(--text-subtle)", width: 48 }}
          >
            Type
          </span>
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-3 py-1 rounded-full text-xs border transition-all",
              !activeCategory ? "opacity-100" : "opacity-50 hover:opacity-75"
            )}
            style={{
              backgroundColor: !activeCategory
                ? "var(--accent-glow)"
                : "var(--bg-card)",
              borderColor: !activeCategory
                ? "rgba(99,102,241,0.4)"
                : "var(--border)",
              color: !activeCategory
                ? "var(--accent-hover)"
                : "var(--text-muted)",
            }}
          >
            All
          </button>
          {allWebsiteCategories.map((c) => (
            <button
              key={c}
              onClick={() =>
                setActiveCategory(activeCategory === c ? null : c)
              }
              className={cn(
                "px-3 py-1 rounded-full text-xs border transition-all",
                activeCategory === c
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-75"
              )}
              style={{
                backgroundColor:
                  activeCategory === c ? "var(--accent-glow)" : "var(--bg-card)",
                borderColor:
                  activeCategory === c
                    ? "rgba(99,102,241,0.4)"
                    : "var(--border)",
                color:
                  activeCategory === c
                    ? "var(--accent-hover)"
                    : "var(--text-muted)",
              }}
            >
              {websiteCategoryLabels[c]}
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
        {filtered.map((website, i) => (
          <motion.div
            key={website.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <div
              className="group rounded-2xl border overflow-hidden flex flex-col"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Accent bar */}
              <div style={{ height: 3, background: website.accentColor }} />

              {/* Live iframe preview */}
              <div
                style={{
                  height: 280,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  borderBottom: "1px solid var(--border)",
                  flexShrink: 0,
                }}
              >
                <iframe
                  src={website.url}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "200%",
                    height: "200%",
                    transform: "scale(0.5)",
                    transformOrigin: "top left",
                    border: "none",
                    pointerEvents: "none",
                  }}
                  tabIndex={-1}
                  aria-hidden="true"
                  loading="lazy"
                  title={website.title}
                />
                {/* Invisible overlay so the card stays clickable */}
                <div className="absolute inset-0" />
              </div>

              {/* Meta */}
              <div
                style={{
                  padding: "16px 20px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  flex: 1,
                }}
              >
                {/* Title row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        color: "var(--text)",
                        fontSize: 15,
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {website.title}
                    </h2>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: 12,
                        lineHeight: 1.5,
                        maxWidth: 280,
                      }}
                    >
                      {website.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: website.accentColor }}
                  />
                </div>

                {/* Pills */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: 10,
                      padding: "2px 9px",
                      borderRadius: 999,
                      fontWeight: 600,
                      background: website.accentColor + "20",
                      color: website.accentColor,
                      border: `1px solid ${website.accentColor}40`,
                    }}
                  >
                    {websiteCategoryLabels[website.category]}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      padding: "2px 9px",
                      borderRadius: 999,
                      backgroundColor: "var(--bg)",
                      color: "var(--text-subtle)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {websiteStyleLabels[website.style]}
                  </span>
                  {website.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 10,
                        padding: "2px 9px",
                        borderRadius: 999,
                        backgroundColor: "var(--bg)",
                        color: "var(--text-subtle)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live site button */}
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-85 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    backgroundColor: website.accentColor,
                    color: "#ffffff",
                    marginTop: 4,
                  }}
                >
                  <ExternalLink size={11} />
                  Voir le site live
                </a>
              </div>
            </div>
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
          <p style={{ color: "var(--text-subtle)" }}>
            Aucun site ne correspond aux filtres sélectionnés.
          </p>
        </motion.div>
      )}
    </div>
  );
}
