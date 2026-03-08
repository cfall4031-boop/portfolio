import { notFound } from "next/navigation";
import { concepts } from "@/lib/concepts";
import { ConceptDetail } from "@/components/shared/concept-detail";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const concept = concepts.find((c) => c.slug === slug);
  if (!concept) return {};
  return {
    title: `${concept.title} — Work · UI Gallery`,
    description: concept.description,
  };
}

export default async function ConceptPage({ params }: Props) {
  const { slug } = await params;
  const concept = concepts.find((c) => c.slug === slug);
  if (!concept) notFound();

  return <ConceptDetail concept={concept} />;
}
