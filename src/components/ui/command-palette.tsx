"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Layers, Github, Twitter, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface Command {
  id: string;
  label: string;
  description?: string;
  icon: React.ElementType;
  shortcut?: string;
  category: string;
}

const COMMANDS: Command[] = [
  { id: "home", label: "Go Home", description: "Back to the main page", icon: Home, shortcut: "G H", category: "Navigation" },
  { id: "components", label: "View Components", description: "Browse all UI components", icon: Layers, shortcut: "G C", category: "Navigation" },
  { id: "github", label: "Open GitHub", description: "View source code", icon: Github, shortcut: "G G", category: "Links" },
  { id: "twitter", label: "Open Twitter", description: "Follow for updates", icon: Twitter, shortcut: "G T", category: "Links" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description?.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => (s + 1) % filtered.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => (s - 1 + filtered.length) % filtered.length);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [open, filtered.length]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const categories = Array.from(new Set(filtered.map((c) => c.category)));

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => { setOpen(true); setQuery(""); setSelected(0); }}
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl border text-sm transition-all hover:opacity-80"
        style={{
          color: "var(--text-muted)",
          borderColor: "var(--border)",
          backgroundColor: "var(--bg-card)",
          minWidth: "220px",
        }}
      >
        <Search className="w-3.5 h-3.5" style={{ color: "var(--text-subtle)" }} />
        <span style={{ color: "var(--text-subtle)" }}>Search commands...</span>
        <kbd
          className="ml-auto text-[10px] px-1.5 py-0.5 rounded"
          style={{
            backgroundColor: "var(--bg)",
            color: "var(--text-subtle)",
            border: "1px solid var(--border)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -12 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
              style={{
                top: "25%",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1)",
              }}
            >
              {/* Search input */}
              <div
                className="flex items-center gap-3 px-4 py-3.5 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <Search className="w-4 h-4 shrink-0" style={{ color: "var(--text-subtle)" }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-opacity-50"
                  style={{
                    color: "var(--text)",
                  }}
                />
                <kbd
                  className="text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text-subtle)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  ESC
                </kbd>
              </div>

              {/* Commands list */}
              <div className="p-2 max-h-80 overflow-y-auto">
                {filtered.length === 0 ? (
                  <div
                    className="px-4 py-8 text-center text-sm"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    No results for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  categories.map((cat) => (
                    <div key={cat} className="mb-2">
                      <div
                        className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "var(--text-subtle)" }}
                      >
                        {cat}
                      </div>
                      {filtered
                        .filter((c) => c.category === cat)
                        .map((cmd) => {
                          const globalIndex = filtered.indexOf(cmd);
                          const isSelected = globalIndex === selected;
                          return (
                            <button
                              key={cmd.id}
                              onMouseEnter={() => setSelected(globalIndex)}
                              className={cn(
                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all",
                              )}
                              style={{
                                backgroundColor: isSelected ? "var(--bg)" : "transparent",
                                border: isSelected ? "1px solid var(--border)" : "1px solid transparent",
                              }}
                            >
                              <div
                                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                                style={{
                                  backgroundColor: isSelected ? "var(--accent-glow)" : "var(--border-subtle)",
                                  border: `1px solid ${isSelected ? "rgba(99,102,241,0.3)" : "var(--border)"}`,
                                }}
                              >
                                <cmd.icon
                                  className="w-3.5 h-3.5"
                                  style={{ color: isSelected ? "var(--accent-hover)" : "var(--text-subtle)" }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div
                                  className="text-sm font-medium"
                                  style={{ color: isSelected ? "var(--text)" : "var(--text-muted)" }}
                                >
                                  {cmd.label}
                                </div>
                                {cmd.description && (
                                  <div
                                    className="text-xs truncate mt-0.5"
                                    style={{ color: "var(--text-subtle)" }}
                                  >
                                    {cmd.description}
                                  </div>
                                )}
                              </div>
                              {cmd.shortcut && (
                                <span
                                  className="text-[10px] font-mono shrink-0"
                                  style={{ color: "var(--text-subtle)" }}
                                >
                                  {cmd.shortcut}
                                </span>
                              )}
                              {isSelected && (
                                <ArrowRight
                                  className="w-3.5 h-3.5 shrink-0"
                                  style={{ color: "var(--accent)" }}
                                />
                              )}
                            </button>
                          );
                        })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div
                className="px-4 py-2 border-t flex items-center gap-4"
                style={{ borderColor: "var(--border)" }}
              >
                {[
                  { keys: ["↑", "↓"], label: "navigate" },
                  { keys: ["↵"], label: "select" },
                  { keys: ["ESC"], label: "close" },
                ].map(({ keys, label }) => (
                  <div key={label} className="flex items-center gap-1">
                    {keys.map((k) => (
                      <kbd
                        key={k}
                        className="text-[10px] px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: "var(--bg)",
                          color: "var(--text-subtle)",
                          border: "1px solid var(--border)",
                          fontFamily: "var(--font-geist-mono)",
                        }}
                      >
                        {k}
                      </kbd>
                    ))}
                    <span className="text-[10px] ml-1" style={{ color: "var(--text-subtle)" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
