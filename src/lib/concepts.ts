export interface ConceptMeta {
  slug: string;
  title: string;       // Nom du "client" fictif : "Maison Laurent"
  client: string;      // Type de client : "Restaurant Fine Dining"
  description: string;
  industry: string;    // Tag industrie affiché sur les cards
  accentColor: string;
  year: string;
  tags: string[];
}

export const concepts: ConceptMeta[] = [
  {
    slug: "restaurant-luxe",
    title: "Maison Laurent",
    client: "Restaurant Fine Dining",
    description:
      "Site de prestige pour un restaurant gastronomique parisien. Atmosphère sombre et dorée, menu, réservation et portrait du chef.",
    industry: "Restauration",
    accentColor: "#D4AF37",
    year: "2026",
    tags: ["restaurant", "luxe", "sombre", "gold", "réservation"],
  },
  {
    slug: "studio-fitness",
    title: "Iron Core Studio",
    client: "Studio de Fitness & Coaching",
    description:
      "Landing page énergique pour un studio de fitness urbain. Typographie massive, planning de cours et plans d'abonnement.",
    industry: "Fitness",
    accentColor: "#EF4444",
    year: "2026",
    tags: ["fitness", "gym", "bold", "énergie", "pricing"],
  },
  {
    slug: "agence-immo",
    title: "Haus Property",
    client: "Agence Immobilière",
    description:
      "Site épuré pour une agence immobilière premium. Search hero, cartes propriétés et section de confiance.",
    industry: "Immobilier",
    accentColor: "#0EA5E9",
    year: "2026",
    tags: ["immobilier", "minimal", "propriétés", "search", "clean"],
  },
  {
    slug: "studio-creatif",
    title: "Prism Studio",
    client: "Studio de Design Créatif",
    description:
      "Portfolio éditorial pour un studio créatif multi-disciplinaire. Grille de projets colorée, services et CTA de contact.",
    industry: "Créatif",
    accentColor: "#6366f1",
    year: "2026",
    tags: ["créatif", "studio", "gradient", "portfolio", "branding"],
  },
];
