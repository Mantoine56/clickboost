import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/lib/cities-data";
import { CityPageContent } from "@/components/sections/city-page-content";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return {};

  const location = cityData.province || cityData.state;
  return {
    title: `Web Development, SEO & AI Services in ${cityData.name}, ${location} | ClickBoost`,
    description: `ClickBoost provides expert web development, SEO, AI implementation, and app development services in ${cityData.name}, ${location}. Book your free strategy session today.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();

  return <CityPageContent citySlug={city} />;
}
