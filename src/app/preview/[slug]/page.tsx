import { notFound } from "next/navigation";
import { components } from "@/lib/components";
import { PreviewRenderer } from "@/components/shared/preview-renderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PreviewPage({ params }: Props) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);
  if (!component) notFound();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      <PreviewRenderer slug={slug} />
    </div>
  );
}
