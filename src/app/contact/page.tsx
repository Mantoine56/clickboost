import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ClickBoost. Book a free strategy session to discuss your web development, SEO, AI, or app development project.",
};

export default function ContactPage() {
  return <ContactContent />;
}
