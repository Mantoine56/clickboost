import type { Metadata } from "next";
import { getServiceMeta } from "@/lib/services-meta";
import { ServicePageContent } from "@/components/sections/service-page-content";

const meta = getServiceMeta("shopify")!;

export const metadata: Metadata = {
  title: meta.name,
  description: meta.description,
};

export default function ShopifyPage() {
  return <ServicePageContent slug="shopify" />;
}
