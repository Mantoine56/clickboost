import type { Metadata } from "next";
import { IndustryPageContent } from "@/components/sections/industry-page-content";

export const metadata: Metadata = {
  title: "Real Estate Web Development & Lead Generation | ClickBoost",
  description:
    "IDX-integrated websites, virtual tour platforms, AI lead nurturing, and hyperlocal SEO strategies for real estate agents, brokerages, and property management companies.",
};

export default function RealEstatePage() {
  return <IndustryPageContent slug="real-estate" />;
}
