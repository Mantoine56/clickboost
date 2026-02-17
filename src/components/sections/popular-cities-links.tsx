import Link from "next/link";

// Keep this list intentionally small on the homepage to avoid a spammy link block.
const popularCities = [
  { name: "Ottawa", href: "/ottawa" },
  { name: "Toronto", href: "/toronto" },
  { name: "Montreal", href: "/montreal" },
  { name: "Vancouver", href: "/vancouver" },
  { name: "Calgary", href: "/calgary" },
];

// Add a few high-intent city + service links to strengthen topical internal linking.
const popularCityServicePages = [
  { label: "Web Development in Ottawa", href: "/ottawa/web-development" },
  { label: "SEO in Ottawa", href: "/ottawa/seo" },
  { label: "Web Development in Toronto", href: "/toronto/web-development" },
  { label: "SEO in Toronto", href: "/toronto/seo" },
  { label: "AI Implementation in Vancouver", href: "/vancouver/ai-implementation" },
  { label: "SEO in Montreal", href: "/montreal/seo" },
];

export function PopularCitiesLinks() {
  return (
    <section className="section-padding border-y border-border/70 bg-card/30">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Cities We Serve
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore our Canadian city landing pages and see how each market
              maps to your service goals.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {popularCities.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="group flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand-500/40 hover:text-brand-500 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {city.name}
                    <span
                      className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/locations"
                className="inline-flex items-center text-sm font-semibold text-brand-500 transition-colors hover:text-brand-400 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                View all locations &rarr;
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              Popular Service + City Pages
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              These are high-intent pages often used first during indexing and
              local SEO campaigns.
            </p>
            <ul className="mt-6 space-y-3" role="list">
              {popularCityServicePages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="block rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:border-brand-500/40 hover:text-brand-500 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
