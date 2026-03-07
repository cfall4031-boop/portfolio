"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface SwitchProps {
  label: string;
  defaultOn?: boolean;
  accent?: string;
}

function Switch({ label, defaultOn = false, accent = "var(--accent)" }: SwitchProps) {
  const [on, setOn] = useState(defaultOn);

  return (
    <div
      className="flex items-center justify-between w-52 px-4 py-3 rounded-xl cursor-pointer select-none"
      style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}
      onClick={() => setOn((v) => !v)}
    >
      <span className="text-sm" style={{ color: on ? "var(--text)" : "var(--text-muted)" }}>
        {label}
      </span>
      <div
        className="relative rounded-full transition-colors duration-200"
        style={{
          width: "44px",
          height: "24px",
          backgroundColor: on ? accent : "var(--border)",
          boxShadow: on ? `0 0 12px ${accent}66` : "none",
        }}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 rounded-full bg-white shadow-sm"
          style={{
            width: "20px",
            height: "20px",
            left: on ? "22px" : "2px",
          }}
        />
      </div>
    </div>
  );
}

export function SwitchToggle() {
  return (
    <div className="flex flex-col gap-2">
      <Switch label="Notifications" defaultOn={true} />
      <Switch label="Dark mode" defaultOn={true} accent="#818cf8" />
      <Switch label="Auto-save" />
      <Switch label="Analytics" accent="#22c55e" />
    </div>
  );
}
