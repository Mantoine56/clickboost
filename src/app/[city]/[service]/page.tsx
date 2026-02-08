import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  cities,
  getCityBySlug,
  servicesList,
  getServiceBySlug,
} from "@/lib/cities-data";
import { CityServiceContent } from "@/components/sections/city-service-content";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of servicesList) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city, service } = await params;
  const cityData = getCityBySlug(city);
  const serviceData = getServiceBySlug(service);
  if (!cityData || !serviceData) return {};

  const location = cityData.province || cityData.state;
  return {
    title: `${serviceData.name} in ${cityData.name}, ${location} | ClickBoost`,
    description: `Professional ${serviceData.name.toLowerCase()} services in ${cityData.name}, ${location}. ${serviceData.description} Book your free strategy session.`,
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;
  const cityData = getCityBySlug(city);
  const serviceData = getServiceBySlug(service);
  if (!cityData || !serviceData) notFound();

  return <CityServiceContent citySlug={city} serviceSlug={service} />;
}
