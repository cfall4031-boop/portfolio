export type TemplateStyle = "dark" | "bold" | "minimal" | "creative";
export type TemplateCategory = "saas" | "startup" | "agency" | "app" | "portfolio" | "ecommerce";

export interface TemplateMeta {
  slug: string;
  title: string;
  description: string;
  style: TemplateStyle;
  category: TemplateCategory;
  accentColor: string;
  tags: string[];
  date: string;
  featured?: boolean;
}

export const templates: TemplateMeta[] = [
  {
    slug: "saas-dark",
    title: "SaaS Dark",
    description: "Hero animé, feature grid 3 colonnes, social proof bar et pricing CTA. Style produit moderne.",
    style: "dark",
    category: "saas",
    accentColor: "#6366f1",
    tags: ["saas", "dark", "indigo", "features", "pricing"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "startup-bold",
    title: "Startup Bold",
    description: "Typographie géante weight 900, gradient text, stats glassmorphism, marquee logos et CTA angled.",
    style: "bold",
    category: "startup",
    accentColor: "#f97316",
    tags: ["startup", "gradient", "glass", "marquee", "bold"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "agency-creative",
    title: "Agency Creative",
    description: "Split hero asymétrique, work grid avec span, services pills scrollables et CTA brutalist.",
    style: "creative",
    category: "agency",
    accentColor: "#ec4899",
    tags: ["agency", "creative", "brutalist", "split", "portfolio"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    description: "Phone frame mockup centré, radial gradient, feature bubbles animées et App Store / Play Store buttons.",
    style: "dark",
    category: "app",
    accentColor: "#22d3ee",
    tags: ["app", "mobile", "product", "gradient", "launch"],
    date: "2026-03-07",
  },
  {
    slug: "portfolio-minimal",
    title: "Portfolio Minimal",
    description: "Avatar, name reveal clipPath, work grid hover-zoom, skills tags et footer social links.",
    style: "minimal",
    category: "portfolio",
    accentColor: "#a78bfa",
    tags: ["portfolio", "minimal", "personal", "cv", "clean"],
    date: "2026-03-07",
  },
  {
    slug: "ecommerce-product",
    title: "E-commerce Product",
    description: "Split hero avec tilt card produit 3D, feature icon grid, review stars strip et add-to-cart CTA.",
    style: "dark",
    category: "ecommerce",
    accentColor: "#4ade80",
    tags: ["ecommerce", "product", "tilt", "reviews", "shop"],
    date: "2026-03-07",
  },
];

export const templateStyleLabels: Record<TemplateStyle, string> = {
  dark: "Dark",
  bold: "Bold",
  minimal: "Minimal",
  creative: "Creative",
};

export const templateCategoryLabels: Record<TemplateCategory, string> = {
  saas: "SaaS",
  startup: "Startup",
  agency: "Agency",
  app: "App",
  portfolio: "Portfolio",
  ecommerce: "E-commerce",
};

export const allTemplateStyles = Array.from(
  new Set(templates.map((t) => t.style))
) as TemplateStyle[];

export const allTemplateCategories = Array.from(
  new Set(templates.map((t) => t.category))
) as TemplateCategory[];
