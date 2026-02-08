import type { Metadata } from "next";
import { IndustryPageContent } from "@/components/sections/industry-page-content";

export const metadata: Metadata = {
  title: "Law Firm Web Design & Digital Marketing | ClickBoost",
  description:
    "Professional websites, SEO strategies, and AI-powered client intake systems for small and mid-sized law firms. Build authority, generate qualified leads, and streamline operations.",
};

export default function LegalPage() {
  return <IndustryPageContent slug="legal" />;
}
