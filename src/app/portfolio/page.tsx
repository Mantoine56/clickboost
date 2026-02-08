import type { Metadata } from "next";
import { PortfolioContent } from "@/components/sections/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of web development, AI implementation, e-commerce, and app development projects. Real results for real businesses.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
