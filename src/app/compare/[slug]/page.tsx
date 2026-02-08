import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisons, getComparisonBySlug } from "@/lib/comparisons-data";
import { ComparisonContent } from "@/components/sections/comparison-content";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};

  return {
    title: comparison.title,
    description: comparison.metaDescription,
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  return <ComparisonContent slug={slug} />;
}
