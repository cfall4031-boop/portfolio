"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Paintbrush2, Eye, Smartphone } from "lucide-react";

const ITEMS = [
  { id: 1, icon: Zap, label: "Lightning fast", sub: "60fps animations" },
  { id: 2, icon: Paintbrush2, label: "Pixel perfect", sub: "Designed with care" },
  { id: 3, icon: Eye, label: "Accessible", sub: "ARIA compliant" },
  { id: 4, icon: Smartphone, label: "Responsive", sub: "Works everywhere" },
];

export function StaggerList() {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(false);
    setTimeout(() => setVisible(true), 100);
  };

  return (
    <div className="w-64 flex flex-col gap-3">
      <AnimatePresence>
        {visible &&
          ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-xl p-3"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--accent-glow)" }}
              >
                <item.icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.label}</p>
                <p className="text-xs" style={{ color: "var(--text-subtle)" }}>{item.sub}</p>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
      <button
        onClick={toggle}
        className="text-xs py-1.5 rounded-lg border transition-opacity hover:opacity-80 mt-1"
        style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
      >
        Replay
      </button>
    </div>
  );
}
