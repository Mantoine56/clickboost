import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities-data";

export const metadata: Metadata = {
  title: "Locations We Serve Across Canada",
  description:
    "Browse ClickBoost city pages across Canada for web development, SEO, AI implementation, and app development services.",
  alternates: { canonical: "/locations" },
};

// Sort city names once so output remains stable between builds.
const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));

export default function LocationsPage() {
  return (
    <>
      {/* Intro section keeps this page useful for users, not only crawlers. */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.16),transparent)]"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Locations
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            City Coverage Across Canada
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            Use this hub to find your city page and service variations. Each
            city page includes localized messaging, case studies, and direct
            paths to service detail pages.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface">
        <div className="container-wide max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Canada ({sortedCities.length})
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2" role="list">
            {sortedCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/${city.slug}`}
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
        </div>
      </section>
    </>
  );
}
