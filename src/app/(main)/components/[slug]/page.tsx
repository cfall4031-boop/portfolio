import { notFound } from "next/navigation";
import { components } from "@/lib/components";
import { ComponentShowcase } from "@/components/shared/component-showcase";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);
  if (!component) return {};
  return {
    title: `${component.title} — UI Gallery`,
    description: component.description,
  };
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);
  if (!component) notFound();

  return <ComponentShowcase component={component} />;
}
