"use client";

import { useState } from "react";

function FloatingField({ label, type = "text" }: { label: string; type?: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 pt-5 pb-2 rounded-xl text-sm outline-none transition-all"
        style={{
          backgroundColor: "var(--bg-card)",
          border: `1px solid ${focused ? "var(--accent)" : "var(--border)"}`,
          color: "var(--text)",
          boxShadow: focused ? "0 0 0 3px var(--accent-glow)" : "none",
        }}
      />
      <label
        className="absolute left-4 pointer-events-none transition-all duration-150"
        style={{
          top: active ? "6px" : "50%",
          transform: active ? "none" : "translateY(-50%)",
          fontSize: active ? "10px" : "13px",
          color: focused ? "var(--accent-hover)" : "var(--text-subtle)",
        }}
      >
        {label}
      </label>
    </div>
  );
}

export function FloatingInput() {
  return (
    <div className="flex flex-col gap-3 w-64">
      <FloatingField label="Email address" type="email" />
      <FloatingField label="Full name" />
      <FloatingField label="Password" type="password" />
    </div>
  );
}
