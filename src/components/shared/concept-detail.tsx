"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ConceptMeta } from "@/lib/concepts";

interface Props {
  concept: ConceptMeta;
}

export function ConceptDetail({ concept }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link
          href="/concepts"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <ArrowLeft size={14} />
          Tous les concepts
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
        style={{ borderLeft: `3px solid ${concept.accentColor}`, paddingLeft: 16 }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: concept.accentColor }}
        >
          {concept.client}
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          {concept.title}
        </h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {concept.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-4">
          <span
            className="text-xs px-2.5 py-1 rounded-full font-semibold"
            style={{
              backgroundColor: concept.accentColor + "22",
              color: concept.accentColor,
              border: `1px solid ${concept.accentColor}44`,
            }}
          >
            {concept.industry}
          </span>
          <span
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text-subtle)",
              border: "1px solid var(--border)",
            }}
          >
            {concept.year}
          </span>
          {concept.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "var(--bg)",
                color: "var(--text-subtle)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Action bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex items-center justify-end mb-4"
      >
        <a
          href={`/concept-preview/${concept.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-all"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            color: "var(--text-muted)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <ExternalLink size={12} />
          Voir en plein écran
        </a>
      </motion.div>

      {/* Preview iframe */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        <div style={{ position: "relative", height: 640, overflow: "hidden", backgroundColor: "var(--bg)" }}>
          <iframe
            src={`/concept-preview/${concept.slug}`}
            style={{
              position: "absolute", top: 0, left: 0,
              width: "200%", height: "200%",
              transform: "scale(0.5)", transformOrigin: "top left",
              border: "none",
            }}
            title={`Preview: ${concept.title}`}
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Scroll hint */}
      <p className="text-xs text-center mt-3" style={{ color: "var(--text-subtle)" }}>
        Ouvre en plein écran pour scroller et interagir avec le concept complet
      </p>
    </div>
  );
}
