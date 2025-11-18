import { getServices, getPortfolioProjects } from "@/lib/content";

export default async function sitemap() {
  const base = "https://clickboost.ca";

  const [services, projects] = await Promise.all([
    getServices(),
    getPortfolioProjects(),
  ]);

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.id}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/portfolio/${p.id}`,
    lastModified: new Date(p.completedDate),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}


