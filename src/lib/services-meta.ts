export interface ServiceMeta {
  slug: string;
  name: string;
  description: string;
}

export const servicesMeta: ServiceMeta[] = [
  {
    slug: "web-development",
    name: "Web Development",
    description:
      "We build modern, fast, accessible websites and web applications using the latest technologies. From marketing sites to complex web apps, every project is crafted for performance, SEO, and conversion.",
  },
  {
    slug: "seo",
    name: "SEO & Digital Growth",
    description:
      "We combine technical SEO, content strategy, and digital marketing to drive sustainable organic growth. Our approach is ROI-first — every action is tied to measurable business outcomes.",
  },
  {
    slug: "ai-implementation",
    name: "AI Implementation",
    description:
      "We build custom AI solutions — from conversational agents to workflow automation — that solve real business problems. Our AI implementations are practical, scalable, and designed for measurable ROI.",
  },
  {
    slug: "app-development",
    name: "App Development",
    description:
      "We design and develop mobile applications, SaaS platforms, and custom business tools. Cross-platform or native, every app is built with robust architecture and exceptional user experience.",
  },
  {
    slug: "wordpress",
    name: "WordPress",
    description:
      "WordPress powers 40%+ of the web for a reason. We deliver professional WordPress websites with custom themes, optimized performance, and robust security — without the typical WordPress bloat.",
  },
  {
    slug: "shopify",
    name: "Shopify",
    description:
      "We build high-converting Shopify stores with custom themes, app integrations, and optimized checkout flows. Whether you're launching your first store or scaling to millions, we've got the expertise.",
  },
];

export function getServiceMeta(slug: string): ServiceMeta | undefined {
  return servicesMeta.find((s) => s.slug === slug);
}
