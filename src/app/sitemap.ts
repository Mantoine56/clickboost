import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { projects } from "@/lib/portfolio-data";
import { cities, servicesList } from "@/lib/cities-data";

const BASE_URL = "https://clickboost.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static date for pages that don't change frequently (avoids misleading Google with new Date() on every crawl)
  const CONTENT_DATE = new Date("2026-01-15");

  const staticPages = [
    // Pages updated frequently — use dynamic date
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    // Mostly-static pages — use fixed date
    { url: `${BASE_URL}/services`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/web-development`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/seo`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/ai-implementation`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/app-development`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/wordpress`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/shopify`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: CONTENT_DATE, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/locations`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/industries/healthcare`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/industries/legal`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/industries/ecommerce`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/industries/real-estate`, lastModified: CONTENT_DATE, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const portfolioPages = projects.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const cityPages = cities.map((city) => ({
    url: `${BASE_URL}/${city.slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const cityServicePages = cities.flatMap((city) =>
    servicesList.map((service) => ({
      url: `${BASE_URL}/${city.slug}/${service.slug}`,
      lastModified: CONTENT_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    }))
  );

  // TODO: Add comparison pages once comparisons-data.ts is created
  // import { comparisons } from "@/lib/comparisons-data";
  // const comparisonPages = comparisons.map((comp) => ({
  //   url: `${BASE_URL}/compare/${comp.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [
    ...staticPages,
    ...blogPages,
    ...portfolioPages,
    ...cityPages,
    ...cityServicePages,
  ];
}
