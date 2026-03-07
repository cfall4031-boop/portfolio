export type DesignCategory = "colors" | "typography" | "gradient" | "shadow" | "radius" | "spacing";

export interface DesignItem {
  id: string;
  category: DesignCategory;
  title: string;
  description: string;
}

export const designs: DesignItem[] = [
  // ─── COLORS ────────────────────────────────────────────────────────────────
  { id: "palette-dark", category: "colors", title: "Dark Minimal", description: "Fond profond, hiérarchie en niveaux de gris." },
  { id: "palette-indigo", category: "colors", title: "Indigo Tech", description: "Accent indigo, parfait pour les produits SaaS." },
  { id: "palette-sunset", category: "colors", title: "Warm Sunset", description: "Orange → Rouge → Rose — énergique et chaleureux." },
  { id: "palette-ocean", category: "colors", title: "Ocean Blue", description: "Cyan profond, calme et confiant." },
  { id: "palette-forest", category: "colors", title: "Forest Green", description: "Vert naturel, idéal pour les apps éco-responsables." },

  // ─── TYPOGRAPHY ────────────────────────────────────────────────────────────
  { id: "type-geist", category: "typography", title: "Geist Sans", description: "La police de Vercel. Propre, moderne, ultra-lisible." },
  { id: "type-inter", category: "typography", title: "Inter System", description: "Standard absolu de l'UI. Conçue pour les écrans." },
  { id: "type-mono", category: "typography", title: "Geist Mono", description: "Code et données. Clarté à chaque chiffre." },
  { id: "type-display", category: "typography", title: "Display Scale", description: "Hiérarchie de tailles — du hero au body." },
  { id: "type-weights", category: "typography", title: "Weight Stack", description: "Regular → Medium → Semibold → Bold → Black." },

  // ─── GRADIENTS ─────────────────────────────────────────────────────────────
  { id: "grad-aurora", category: "gradient", title: "Aurora", description: "Violet → Indigo → Cyan, inspiré des aurores boréales." },
  { id: "grad-sunset", category: "gradient", title: "Sunset Flame", description: "Orange → Rose → Violet, chaud et dramatique." },
  { id: "grad-ocean", category: "gradient", title: "Deep Ocean", description: "Bleu nuit → Cyan → Teal, profond et apaisant." },
  { id: "grad-neon", category: "gradient", title: "Neon Night", description: "Vert → Cyan → Indigo, effet cyberpunk." },
  { id: "grad-gold", category: "gradient", title: "Golden Hour", description: "Ambre → Orange → Rose, luxueux et chaleureux." },

  // ─── SHADOWS ───────────────────────────────────────────────────────────────
  { id: "shadow-soft", category: "shadow", title: "Soft Elevation", description: "Élévation douce en couches, style Material." },
  { id: "shadow-hard", category: "shadow", title: "Hard Noire", description: "Ombre dure décalée, style brutaliste." },
  { id: "shadow-glow", category: "shadow", title: "Glow Accent", description: "Halo coloré avec l'accent du projet." },

  // ─── BORDER RADIUS ─────────────────────────────────────────────────────────
  { id: "radius-scale", category: "radius", title: "Radius Scale", description: "Système complet de 2px à full-rounded." },
  { id: "radius-sharp", category: "radius", title: "Sharp Corners", description: "Zéro arrondi. Brutaliste, structuré, affirmé." },

  // ─── SPACING ───────────────────────────────────────────────────────────────
  { id: "spacing-4", category: "spacing", title: "4px Base Grid", description: "Système de 4px — tous les espaces sont multiples." },
  { id: "spacing-8", category: "spacing", title: "8px Rhythm", description: "Grille 8pt pour une cohérence visuelle parfaite." },
];

export const designCategories: { id: DesignCategory; label: string }[] = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "gradient", label: "Gradients" },
  { id: "shadow", label: "Shadows" },
  { id: "radius", label: "Radius" },
  { id: "spacing", label: "Spacing" },
];
