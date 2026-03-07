"use client";

import Link from "next/link";
import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Main row */}
      <div
        className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Left — identity */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>
              ui.gallery
            </span>
            <span className="text-sm" style={{ color: "var(--text-subtle)" }}>·</span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              Built by <strong style={{ color: "var(--text)" }}>C. Fall</strong>
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            UI/UX + Development · Next.js · Framer Motion
          </p>
        </div>

        {/* Right — links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/cfall4031-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-all hover:opacity-100 opacity-60"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="mailto:cfall4031@gmail.com"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-all hover:opacity-100 opacity-60"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            © 2026 C. Fall. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="text-xs transition-colors hover:opacity-100 opacity-50"
              style={{ color: "var(--text-muted)" }}
            >
              About
            </Link>
            <Link
              href="/components"
              className="text-xs transition-colors hover:opacity-100 opacity-50"
              style={{ color: "var(--text-muted)" }}
            >
              Components
            </Link>
            <Link
              href="/templates"
              className="text-xs transition-colors hover:opacity-100 opacity-50"
              style={{ color: "var(--text-muted)" }}
            >
              Templates
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
