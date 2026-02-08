import type { Metadata } from "next";
import { IndustryPageContent } from "@/components/sections/industry-page-content";

export const metadata: Metadata = {
  title: "Healthcare & Wellness Digital Solutions | ClickBoost",
  description:
    "HIPAA-compliant websites, patient portals, appointment booking systems, and AI-powered engagement tools for healthcare providers, clinics, and wellness centers.",
};

export default function HealthcarePage() {
  return <IndustryPageContent slug="healthcare" />;
}
