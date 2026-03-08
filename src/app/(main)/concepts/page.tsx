"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { concepts } from "@/lib/concepts";

export default function ConceptsPage() {
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
          Work
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          {concepts.length} concepts — sites fictifs réalisés pour démontrer mes capacités.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: 20,
        }}
      >
        {concepts.map((concept, i) => (
          <motion.div
            key={concept.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Link
              href={`/concepts/${concept.slug}`}
              className="group block rounded-2xl border overflow-hidden"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                textDecoration: "none",
              }}
            >
              {/* Accent bar */}
              <div style={{ height: 3, background: concept.accentColor }} />

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
                  src={`/concept-preview/${concept.slug}`}
                  style={{
                    position: "absolute", top: 0, left: 0,
                    width: "200%", height: "200%",
                    transform: "scale(0.5)", transformOrigin: "top left",
                    border: "none", pointerEvents: "none",
                  }}
                  tabIndex={-1}
                  aria-hidden="true"
                  loading="lazy"
                  title={concept.title}
                />
                {/* Click overlay */}
                <div className="absolute inset-0" />
              </div>

              {/* Meta */}
              <div style={{ padding: "16px 20px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h2 style={{ color: "var(--text)", fontSize: 15, fontWeight: 600, marginBottom: 2 }}>
                      {concept.title}
                    </h2>
                    <p style={{ color: "var(--text-subtle)", fontSize: 11, fontWeight: 500, marginBottom: 6 }}>
                      {concept.client}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: 12, lineHeight: 1.5, maxWidth: 280 }}>
                      {concept.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: concept.accentColor }}
                  />
                </div>

                {/* Pills */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 10, padding: "2px 9px", borderRadius: 999, fontWeight: 600,
                    background: concept.accentColor + "20",
                    color: concept.accentColor,
                    border: `1px solid ${concept.accentColor}40`,
                  }}>
                    {concept.industry}
                  </span>
                  <span style={{
                    fontSize: 10, padding: "2px 9px", borderRadius: 999,
                    backgroundColor: "var(--bg)",
                    color: "var(--text-subtle)",
                    border: "1px solid var(--border)",
                  }}>
                    {concept.year}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
