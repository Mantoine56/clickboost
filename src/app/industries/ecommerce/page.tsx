import type { Metadata } from "next";
import { IndustryPageContent } from "@/components/sections/industry-page-content";

export const metadata: Metadata = {
  title: "E-Commerce & Retail Digital Solutions",
  description:
    "High-converting online stores, custom POS systems, inventory management, and AI-powered personalization for e-commerce and retail businesses.",
  alternates: { canonical: "/industries/ecommerce" },
};

export default function EcommercePage() {
  return <IndustryPageContent slug="ecommerce" />;
}
