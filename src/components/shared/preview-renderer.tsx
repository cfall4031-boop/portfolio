"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { TiltCard } from "@/components/ui/tilt-card";
import { TextScramble } from "@/components/ui/text-scramble";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlowingBorder } from "@/components/ui/glowing-border";
import { CommandPalette } from "@/components/ui/command-palette";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Typewriter } from "@/components/ui/typewriter";
import { RippleButton } from "@/components/ui/ripple-button";
import { FlipCard } from "@/components/ui/flip-card";
import { Marquee } from "@/components/ui/marquee";
import { StaggerList } from "@/components/ui/stagger-list";
import { Toast } from "@/components/ui/toast";
import { Skeleton } from "@/components/ui/skeleton";
import { SwitchToggle } from "@/components/ui/switch-toggle";
import { GradientText } from "@/components/ui/gradient-text";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { Glassmorphism } from "@/components/ui/glassmorphism";
import { NeonButton } from "@/components/ui/neon-button";
import { FloatingInput } from "@/components/ui/floating-input";

const map: Record<string, React.ComponentType> = {
  "magnetic-button": MagneticButton,
  "tilt-card": TiltCard,
  "text-scramble": TextScramble,
  "animated-counter": AnimatedCounter,
  "glowing-border": GlowingBorder,
  "command-palette": CommandPalette,
  "spotlight-card": SpotlightCard,
  "typewriter": Typewriter,
  "ripple-button": RippleButton,
  "flip-card": FlipCard,
  "marquee": Marquee,
  "stagger-list": StaggerList,
  "toast": Toast,
  "skeleton": Skeleton,
  "switch-toggle": SwitchToggle,
  "gradient-text": GradientText,
  "blur-reveal": BlurReveal,
  "progress-steps": ProgressSteps,
  "glassmorphism": Glassmorphism,
  "neon-button": NeonButton,
  "floating-input": FloatingInput,
};

export function PreviewRenderer({ slug }: { slug: string }) {
  const Component = map[slug];
  if (!Component) return null;
  return <Component />;
}
