export interface CityData {
  slug: string;
  name: string;
  state?: string;
  province?: string;
  country: "Canada" | "United States";
  population: string;
  description: string;
}

export const cities: CityData[] = [
  { slug: "ottawa", name: "Ottawa", province: "Ontario", country: "Canada", population: "1M+", description: "Canada's capital city and a growing tech hub" },
  { slug: "toronto", name: "Toronto", province: "Ontario", country: "Canada", population: "6M+", description: "Canada's largest city and financial capital" },
  { slug: "montreal", name: "Montreal", province: "Quebec", country: "Canada", population: "4M+", description: "Quebec's vibrant cultural and business center" },
  { slug: "vancouver", name: "Vancouver", province: "British Columbia", country: "Canada", population: "2.5M+", description: "Western Canada's tech and innovation hub" },
  { slug: "calgary", name: "Calgary", province: "Alberta", country: "Canada", population: "1.4M+", description: "Alberta's economic powerhouse and energy capital" },
];

export const servicesList = [
  { slug: "web-development", name: "Web Development", description: "Custom websites and web applications built with modern technologies like Next.js, React, and TypeScript." },
  { slug: "seo", name: "SEO", description: "Search engine optimization strategies including technical SEO, local SEO, and content strategy." },
  { slug: "ai-implementation", name: "AI Implementation", description: "Custom AI agents, workflow automation, chatbots, and AI business tools." },
  { slug: "app-development", name: "App Development", description: "Mobile apps, SaaS platforms, custom business tools, and API integrations." },
  { slug: "wordpress", name: "WordPress", description: "Professional WordPress websites with custom themes, plugins, and WooCommerce integration." },
  { slug: "shopify", name: "Shopify", description: "Shopify store setup, theme customization, app integration, and Shopify Plus solutions." },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return servicesList.find((s) => s.slug === slug);
}
