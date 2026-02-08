import type { Metadata } from "next";
import { BlogListingContent } from "@/components/sections/blog-listing-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on web development, SEO, AI implementation, and digital growth strategies. Actionable advice to help your business thrive online.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogListingContent />;
}
