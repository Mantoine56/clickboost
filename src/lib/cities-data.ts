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
  // Canadian cities
  { slug: "ottawa", name: "Ottawa", province: "Ontario", country: "Canada", population: "1M+", description: "Canada's capital city and a growing tech hub" },
  { slug: "toronto", name: "Toronto", province: "Ontario", country: "Canada", population: "6M+", description: "Canada's largest city and financial capital" },
  { slug: "montreal", name: "Montreal", province: "Quebec", country: "Canada", population: "4M+", description: "Quebec's vibrant cultural and business center" },
  { slug: "vancouver", name: "Vancouver", province: "British Columbia", country: "Canada", population: "2.5M+", description: "Western Canada's tech and innovation hub" },
  { slug: "calgary", name: "Calgary", province: "Alberta", country: "Canada", population: "1.4M+", description: "Alberta's economic powerhouse and energy capital" },
  { slug: "edmonton", name: "Edmonton", province: "Alberta", country: "Canada", population: "1.4M+", description: "Alberta's capital with a rapidly diversifying economy" },
  { slug: "winnipeg", name: "Winnipeg", province: "Manitoba", country: "Canada", population: "830K+", description: "Manitoba's capital and central Canadian business hub" },
  { slug: "halifax", name: "Halifax", province: "Nova Scotia", country: "Canada", population: "460K+", description: "Atlantic Canada's largest city and tech rising star" },
  { slug: "victoria", name: "Victoria", province: "British Columbia", country: "Canada", population: "400K+", description: "British Columbia's capital with a thriving small business scene" },
  { slug: "kitchener", name: "Kitchener", province: "Ontario", country: "Canada", population: "600K+", description: "Part of Canada's Tech Triangle alongside Waterloo and Cambridge" },
  { slug: "hamilton", name: "Hamilton", province: "Ontario", country: "Canada", population: "785K+", description: "Ontario's economic revival story with growing tech sector" },
  { slug: "london-on", name: "London", province: "Ontario", country: "Canada", population: "545K+", description: "Southwestern Ontario's healthcare and education hub" },
  { slug: "quebec-city", name: "Quebec City", province: "Quebec", country: "Canada", population: "830K+", description: "Quebec's capital with a unique bilingual business landscape" },
  // US cities
  { slug: "new-york", name: "New York", state: "New York", country: "United States", population: "8.3M+", description: "The world's business and media capital" },
  { slug: "los-angeles", name: "Los Angeles", state: "California", country: "United States", population: "3.9M+", description: "The entertainment and creative industry capital" },
  { slug: "chicago", name: "Chicago", state: "Illinois", country: "United States", population: "2.7M+", description: "The Midwest's business and innovation hub" },
  { slug: "houston", name: "Houston", state: "Texas", country: "United States", population: "2.3M+", description: "Texas's largest city with a booming tech scene" },
  { slug: "phoenix", name: "Phoenix", state: "Arizona", country: "United States", population: "1.6M+", description: "One of America's fastest-growing metropolitan areas" },
  { slug: "philadelphia", name: "Philadelphia", state: "Pennsylvania", country: "United States", population: "1.6M+", description: "The East Coast's historic and evolving business center" },
  { slug: "dallas", name: "Dallas", state: "Texas", country: "United States", population: "1.3M+", description: "A top destination for corporate headquarters and startups" },
  { slug: "miami", name: "Miami", state: "Florida", country: "United States", population: "450K+", description: "The gateway to Latin America and a global business hub" },
  { slug: "atlanta", name: "Atlanta", state: "Georgia", country: "United States", population: "500K+", description: "The Southeast's tech and business capital" },
  { slug: "denver", name: "Denver", state: "Colorado", country: "United States", population: "715K+", description: "Colorado's booming tech and startup ecosystem" },
  { slug: "seattle", name: "Seattle", state: "Washington", country: "United States", population: "750K+", description: "Home to tech giants and a thriving startup culture" },
  { slug: "boston", name: "Boston", state: "Massachusetts", country: "United States", population: "675K+", description: "A world leader in healthcare, biotech, and education" },
  { slug: "austin", name: "Austin", state: "Texas", country: "United States", population: "1M+", description: "America's fastest-growing tech hub" },
  { slug: "san-francisco", name: "San Francisco", state: "California", country: "United States", population: "875K+", description: "The global epicenter of technology and innovation" },
  { slug: "portland", name: "Portland", state: "Oregon", country: "United States", population: "650K+", description: "The Pacific Northwest's creative and entrepreneurial hub" },
  { slug: "nashville", name: "Nashville", state: "Tennessee", country: "United States", population: "680K+", description: "A rising star in healthcare tech and entertainment" },
  { slug: "charlotte", name: "Charlotte", state: "North Carolina", country: "United States", population: "880K+", description: "The Southeast's financial services capital" },
  { slug: "minneapolis", name: "Minneapolis", state: "Minnesota", country: "United States", population: "430K+", description: "The Twin Cities' creative and corporate hub" },
  { slug: "tampa", name: "Tampa", state: "Florida", country: "United States", population: "400K+", description: "Florida's growing tech and business corridor" },
  { slug: "san-diego", name: "San Diego", state: "California", country: "United States", population: "1.4M+", description: "A leader in biotech, defense tech, and innovation" },
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
