"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

type ToastType = "success" | "error" | "warning";

interface ToastItem {
  id: number;
  type: ToastType;
  message: string;
}

const CONFIG = {
  success: { icon: CheckCircle, color: "#22c55e", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)" },
  error: { icon: XCircle, color: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)" },
  warning: { icon: AlertCircle, color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)" },
};

const MESSAGES: Record<ToastType, string> = {
  success: "Component saved successfully!",
  error: "Something went wrong.",
  warning: "Unsaved changes detected.",
};

export function Toast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const add = (type: ToastType) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, type, message: MESSAGES[type] }]);
    setTimeout(() => setToasts((t) => t.filter((i) => i.id !== id)), 3500);
  };

  const remove = (id: number) => setToasts((t) => t.filter((i) => i.id !== id));

  return (
    <div className="flex flex-col items-center gap-4 w-64">
      <div className="flex gap-2">
        {(["success", "error", "warning"] as ToastType[]).map((type) => {
          const { color } = CONFIG[type];
          return (
            <button
              key={type}
              onClick={() => add(type)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-opacity hover:opacity-80 capitalize"
              style={{ color, borderColor: color + "44", backgroundColor: color + "11" }}
            >
              {type}
            </button>
          );
        })}
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50" style={{ maxWidth: "280px" }}>
        <AnimatePresence>
          {toasts.map(({ id, type, message }) => {
            const { icon: Icon, color, bg, border } = CONFIG[type];
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm shadow-lg"
                style={{ backgroundColor: bg, border: `1px solid ${border}`, backdropFilter: "blur(12px)" }}
              >
                <Icon className="w-4 h-4 shrink-0" style={{ color }} />
                <span className="flex-1" style={{ color: "var(--text)" }}>{message}</span>
                <button onClick={() => remove(id)} className="opacity-40 hover:opacity-100 transition-opacity">
                  <X className="w-3.5 h-3.5" style={{ color: "var(--text)" }} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
