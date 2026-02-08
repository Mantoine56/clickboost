import type { Metadata } from "next";
import { getServiceMeta } from "@/lib/services-meta";
import { ServicePageContent } from "@/components/sections/service-page-content";

const meta = getServiceMeta("ai-implementation")!;

export const metadata: Metadata = {
  title: meta.name,
  description: meta.description,
  alternates: { canonical: "/services/ai-implementation" },
};

export default function AIImplementationPage() {
  return <ServicePageContent slug="ai-implementation" />;
}
