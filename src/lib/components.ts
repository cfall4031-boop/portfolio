export interface ComponentMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  featured?: boolean;
}

export const components: ComponentMeta[] = [
  {
    slug: "magnetic-button",
    title: "Magnetic Button",
    description: "Un bouton qui attire le curseur comme un aimant. Effet de suivi fluide avec Framer Motion.",
    tags: ["button", "animation", "interaction", "framer-motion"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "tilt-card",
    title: "3D Tilt Card",
    description: "Une card avec un effet d'inclinaison 3D réactif à la position du curseur.",
    tags: ["card", "3d", "animation", "interaction"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "text-scramble",
    title: "Text Scramble",
    description: "Texte qui se déchiffre lettre par lettre — effect hacker minimaliste.",
    tags: ["text", "animation", "typography"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "animated-counter",
    title: "Animated Counter",
    description: "Compteur animé qui s'active au scroll avec easing fluide.",
    tags: ["animation", "scroll", "number"],
    date: "2026-03-07",
  },
  {
    slug: "glowing-border",
    title: "Glowing Border Card",
    description: "Card avec une bordure lumineuse qui suit la position du curseur.",
    tags: ["card", "glow", "css", "interaction"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "command-palette",
    title: "Command Palette",
    description: "Palette de commandes style Linear/Vercel. Ouvrir avec Cmd+K.",
    tags: ["ui", "keyboard", "search", "modal"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "spotlight-card",
    title: "Spotlight Card",
    description: "Card avec un spotlight lumineux qui suit précisément la position du curseur.",
    tags: ["card", "glow", "css", "interaction"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "typewriter",
    title: "Typewriter",
    description: "Texte qui se tape et s'efface automatiquement, style terminal.",
    tags: ["text", "animation", "typography"],
    date: "2026-03-07",
  },
  {
    slug: "ripple-button",
    title: "Ripple Button",
    description: "Bouton avec effet ripple Material Design au click.",
    tags: ["button", "animation", "interaction"],
    date: "2026-03-07",
  },
  {
    slug: "flip-card",
    title: "Flip Card",
    description: "Card qui se retourne en 3D au click, face avant et arrière.",
    tags: ["card", "3d", "animation", "interaction"],
    date: "2026-03-07",
  },
  {
    slug: "marquee",
    title: "Infinite Marquee",
    description: "Défilement horizontal infini et fluide, se met en pause au hover.",
    tags: ["animation", "scroll", "text"],
    date: "2026-03-07",
  },
  {
    slug: "stagger-list",
    title: "Stagger List",
    description: "Liste d'items qui s'animent en décalé avec un effet cascade.",
    tags: ["animation", "list", "framer-motion"],
    date: "2026-03-07",
  },
  {
    slug: "toast",
    title: "Toast Notifications",
    description: "Notifications animées avec variantes success, error, warning.",
    tags: ["ui", "notification", "animation", "framer-motion"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "skeleton",
    title: "Skeleton Loader",
    description: "Placeholder animé shimmer pour le chargement de contenu.",
    tags: ["ui", "loading", "animation"],
    date: "2026-03-07",
  },
  {
    slug: "switch-toggle",
    title: "Switch Toggle",
    description: "Toggle iOS-style avec spring animation et couleurs customisables.",
    tags: ["input", "animation", "interaction", "framer-motion"],
    date: "2026-03-07",
  },
  {
    slug: "gradient-text",
    title: "Gradient Text",
    description: "Texte avec dégradés animés en boucle, plusieurs palettes.",
    tags: ["text", "animation", "css", "typography"],
    date: "2026-03-07",
  },
  {
    slug: "blur-reveal",
    title: "Blur Reveal",
    description: "Contenu caché derrière un blur qui se révèle avec une transition fluide.",
    tags: ["animation", "interaction", "framer-motion"],
    date: "2026-03-07",
  },
  {
    slug: "progress-steps",
    title: "Progress Steps",
    description: "Stepper animé avec transitions fluides entre les étapes.",
    tags: ["ui", "animation", "framer-motion"],
    date: "2026-03-07",
  },
  {
    slug: "glassmorphism",
    title: "Glassmorphism Card",
    description: "Card effet verre dépoli avec backdrop-blur et blobs colorés.",
    tags: ["card", "css", "design"],
    date: "2026-03-07",
    featured: true,
  },
  {
    slug: "neon-button",
    title: "Neon Button",
    description: "Bouton avec effet néon brillant, 4 couleurs au choix.",
    tags: ["button", "css", "glow", "design"],
    date: "2026-03-07",
  },
  {
    slug: "floating-input",
    title: "Floating Label Input",
    description: "Champ de saisie avec label flottant animé à la mise en focus.",
    tags: ["input", "animation", "form"],
    date: "2026-03-07",
  },
];

export const allTags = Array.from(
  new Set(components.flatMap((c) => c.tags))
).sort();
