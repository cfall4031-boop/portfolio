"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { components, allTags } from "@/lib/components";
import { cn } from "@/lib/cn";

export default function ComponentsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? components.filter((c) => c.tags.includes(activeTag))
    : components;

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
          Components
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          {components.length} handcrafted UI components & interactions.
        </p>
      </motion.div>

      {/* Tag filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 flex-wrap mb-10"
      >
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "px-3 py-1 rounded-full text-xs border transition-all",
            !activeTag ? "opacity-100" : "opacity-50 hover:opacity-75"
          )}
          style={{
            backgroundColor: !activeTag ? "var(--accent-glow)" : "var(--bg-card)",
            borderColor: !activeTag ? "rgba(99,102,241,0.4)" : "var(--border)",
            color: !activeTag ? "var(--accent-hover)" : "var(--text-muted)",
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={cn(
              "px-3 py-1 rounded-full text-xs border transition-all",
              activeTag === tag ? "opacity-100" : "opacity-50 hover:opacity-75"
            )}
            style={{
              backgroundColor: activeTag === tag ? "var(--accent-glow)" : "var(--bg-card)",
              borderColor: activeTag === tag ? "rgba(99,102,241,0.4)" : "var(--border)",
              color: activeTag === tag ? "var(--accent-hover)" : "var(--text-muted)",
            }}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((component, i) => (
          <motion.div
            key={component.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <Link
              href={`/components/${component.slug}`}
              className="group block rounded-xl border p-5 transition-all hover:scale-[1.01]"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              {/* Live preview iframe */}
              <div
                className="rounded-lg mb-4 h-36 overflow-hidden relative"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
              >
                <iframe
                  src={`/preview/${component.slug}`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ transform: "scale(0.7)", transformOrigin: "center center", width: "143%", height: "143%", marginLeft: "-21.5%", marginTop: "-21.5%" }}
                  tabIndex={-1}
                  aria-hidden="true"
                  loading="lazy"
                />
                {/* Overlay to keep card clickable */}
                <div className="absolute inset-0" />
              </div>

              {/* Meta */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2
                    className="text-sm font-medium mb-1 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--text)" }}
                  >
                    {component.title}
                  </h2>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {component.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0"
                  style={{ color: "var(--accent)" }}
                />
              </div>

              {/* Tags */}
              <div className="flex gap-1.5 flex-wrap mt-3">
                {component.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full"
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
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
