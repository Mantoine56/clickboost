import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "ClickBoost is a modern tech studio delivering beautiful websites, cutting-edge AI implementation, SEO, and app development for businesses ready to grow.",
};

export default function AboutPage() {
  return <AboutContent />;
}
