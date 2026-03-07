"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, Code, Eye, ExternalLink } from "lucide-react";
import { TemplateMeta, templateCategoryLabels, templateStyleLabels } from "@/lib/templates";
import { cn } from "@/lib/cn";
import { templateCodeMap } from "@/lib/template-code";

interface Props {
  template: TemplateMeta;
}

export function TemplateShowcase({ template }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const code = templateCodeMap[template.slug] || `// Source disponible sur GitHub\n// Slug: ${template.slug}`;

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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
          href="/templates"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <ArrowLeft size={14} />
          Tous les templates
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
        style={{ borderLeft: `3px solid ${template.accentColor}`, paddingLeft: 16 }}
      >
        <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--text)" }}>
          {template.title}
        </h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-4">
          <span
            className="text-xs px-2.5 py-1 rounded-full font-semibold"
            style={{
              backgroundColor: template.accentColor + "22",
              color: template.accentColor,
              border: `1px solid ${template.accentColor}44`,
            }}
          >
            {templateCategoryLabels[template.category]}
          </span>
          <span
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text-subtle)",
              border: "1px solid var(--border)",
            }}
          >
            {templateStyleLabels[template.style]}
          </span>
          {template.tags.slice(0, 4).map((tag) => (
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

      {/* Tab bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex items-center justify-between mb-4"
      >
        <div
          className="flex gap-1 p-1 rounded-lg"
          style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                tab === t ? "shadow-sm" : "opacity-50 hover:opacity-75"
              )}
              style={{
                backgroundColor: tab === t ? "var(--bg)" : "transparent",
                color: tab === t ? "var(--text)" : "var(--text-muted)",
              }}
            >
              {t === "preview" ? <Eye size={12} /> : <Code size={12} />}
              {t === "preview" ? "Preview" : "Code"}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          {tab === "code" && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-all"
              style={{
                backgroundColor: copied ? "rgba(34,197,94,0.1)" : "var(--bg-card)",
                borderColor: copied ? "rgba(34,197,94,0.3)" : "var(--border)",
                color: copied ? "var(--green)" : "var(--text-muted)",
              }}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copié" : "Copier"}
            </button>
          )}
          <a
            href={`/template-preview/${template.slug}`}
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
            Plein écran
          </a>
        </div>
      </motion.div>

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        {tab === "preview" ? (
          /* ── Iframe Preview ── */
          <div style={{ position: "relative", height: 640, overflow: "hidden", backgroundColor: "var(--bg)" }}>
            <iframe
              src={`/template-preview/${template.slug}`}
              style={{
                position: "absolute", top: 0, left: 0,
                width: "200%", height: "200%",
                transform: "scale(0.5)", transformOrigin: "top left",
                border: "none",
              }}
              title={`Preview: ${template.title}`}
              loading="lazy"
            />
          </div>
        ) : (
          /* ── Code ── */
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              maxHeight: 640, overflowY: "auto",
              padding: "24px",
            }}
          >
            <pre style={{
              fontSize: 12, lineHeight: 1.65,
              fontFamily: "var(--font-geist-mono, 'Courier New', monospace)",
              color: "var(--text-muted)",
              whiteSpace: "pre-wrap", wordBreak: "break-word",
              margin: 0,
            }}>
              <code>{code}</code>
            </pre>
          </div>
        )}
      </motion.div>

      {/* Scroll hint */}
      {tab === "preview" && (
        <p className="text-xs text-center mt-3" style={{ color: "var(--text-subtle)" }}>
          ↗ Ouvre en plein écran pour scroller et interagir avec le template complet
        </p>
      )}
    </div>
  );
}
