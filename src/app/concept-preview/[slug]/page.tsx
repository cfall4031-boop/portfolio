import { notFound } from "next/navigation";
import { concepts } from "@/lib/concepts";
import { ConceptPreviewRenderer } from "@/components/shared/concept-preview-renderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export default async function ConceptPreviewPage({ params }: Props) {
  const { slug } = await params;
  const concept = concepts.find((c) => c.slug === slug);
  if (!concept) notFound();

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <ConceptPreviewRenderer slug={slug} />
    </div>
  );
}
