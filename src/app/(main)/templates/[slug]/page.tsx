import { notFound } from "next/navigation";
import { templates } from "@/lib/templates";
import { TemplateShowcase } from "@/components/shared/template-showcase";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  if (!template) return {};
  return {
    title: `${template.title} — Templates · UI Gallery`,
    description: template.description,
  };
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  if (!template) notFound();

  return <TemplateShowcase template={template} />;
}
