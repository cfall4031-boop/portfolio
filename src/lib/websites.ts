export type WebsiteStyle = "editorial" | "bold" | "minimal" | "dark";
export type WebsiteCategory = "landing" | "product" | "agency" | "ecommerce";

export interface WebsiteMeta {
  slug: string;
  title: string;
  description: string;
  style: WebsiteStyle;
  category: WebsiteCategory;
  accentColor: string;
  tags: string[];
  url: string;
  date: string;
  featured?: boolean;
}

export const websites: WebsiteMeta[] = [
  {
    slug: "velocity",
    title: "Velocity",
    description:
      "Landing page motorsport avec hero vidéo cinématique, stats animées et palette cuivre editorial.",
    style: "editorial",
    category: "landing",
    accentColor: "#C8783A",
    tags: ["landing", "video", "motorsport", "editorial"],
    url: "/sites/velocity/index.html",
    date: "2026-03",
    featured: true,
  },
  {
    slug: "kinetic",
    title: "Kinetic Air Pro",
    description:
      "Page produit sneaker premium avec vidéo blended seamlessly, animations scroll-triggered et accent électrique.",
    style: "bold",
    category: "product",
    accentColor: "#0066FF",
    tags: ["landing", "product", "sneaker", "video"],
    url: "/sites/kinetic/index.html",
    date: "2026-03",
    featured: true,
  },
];

export const websiteStyleLabels: Record<WebsiteStyle, string> = {
  editorial: "Editorial",
  bold: "Bold",
  minimal: "Minimal",
  dark: "Dark",
};

export const websiteCategoryLabels: Record<WebsiteCategory, string> = {
  landing: "Landing",
  product: "Product",
  agency: "Agency",
  ecommerce: "E-commerce",
};

export const allWebsiteStyles = Array.from(
  new Set(websites.map((w) => w.style))
) as WebsiteStyle[];

export const allWebsiteCategories = Array.from(
  new Set(websites.map((w) => w.category))
) as WebsiteCategory[];
