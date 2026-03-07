import { notFound } from "next/navigation";
import { templates } from "@/lib/templates";
import { TemplatePreviewRenderer } from "@/components/shared/template-preview-renderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export default async function TemplatePreviewPage({ params }: Props) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  if (!template) notFound();

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", background: "var(--bg)" }}>
      <TemplatePreviewRenderer slug={slug} />
    </div>
  );
}
