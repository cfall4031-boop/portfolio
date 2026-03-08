"use client";

import { RestaurantLuxe } from "@/components/concepts/restaurant-luxe";
import { StudioFitness } from "@/components/concepts/studio-fitness";
import { AgenceImmo } from "@/components/concepts/agence-immo";
import { StudioCreatif } from "@/components/concepts/studio-creatif";

const conceptMap: Record<string, React.ComponentType> = {
  "restaurant-luxe": RestaurantLuxe,
  "studio-fitness": StudioFitness,
  "agence-immo": AgenceImmo,
  "studio-creatif": StudioCreatif,
};

export function ConceptPreviewRenderer({ slug }: { slug: string }) {
  const Component = conceptMap[slug];
  if (!Component) return null;
  return <Component />;
}
