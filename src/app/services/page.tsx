import type { Metadata } from "next";
import { ServicesOverviewContent } from "@/components/sections/services-overview-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, SEO, AI implementation, app development, WordPress, and Shopify services. Modern technology solutions for growing businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesOverviewContent />;
}
