"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/design", label: "Design" },
  { href: "/templates", label: "Templates" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.8)",
        borderColor: "var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight flex items-center gap-2 group"
          style={{ color: "var(--text)" }}
        >
          <span
            className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span>ui.gallery</span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm rounded-md transition-colors",
                  isActive
                    ? "font-medium"
                    : "hover:opacity-100 opacity-60"
                )}
                style={{
                  color: isActive ? "var(--text)" : "var(--text-muted)",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-md"
                    style={{ backgroundColor: "var(--bg-card)" }}
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* GitHub link */}
        <a
          href="https://github.com/cfall4031-boop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-3 py-1.5 rounded-md border transition-all hover:opacity-100 opacity-60"
          style={{
            color: "var(--text-muted)",
            borderColor: "var(--border)",
          }}
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
