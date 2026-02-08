import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { NewsletterForm } from "./newsletter-form";

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "SEO & Digital Growth", href: "/services/seo" },
  { name: "AI Implementation", href: "/services/ai-implementation" },
  { name: "App Development", href: "/services/app-development" },
  { name: "WordPress", href: "/services/wordpress" },
  { name: "Shopify", href: "/services/shopify" },
];

const industryLinks = [
  { name: "Healthcare & Wellness", href: "/industries/healthcare" },
  { name: "Legal", href: "/industries/legal" },
  { name: "E-commerce & Retail", href: "/industries/ecommerce" },
  { name: "Real Estate", href: "/industries/real-estate" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="container-wide section-padding">
        {/* Main grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-tight"
            >
              ClickBoost
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We build what others can&rsquo;t. Modern web development, SEO, AI
              implementation, and app development for businesses ready to grow.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Canada &amp; United States</span>
              </div>
              <a
                href="mailto:hello@clickboost.ca"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>hello@clickboost.ca</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Industries
            </h3>
            <ul className="mb-6 space-y-2.5" role="list">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay Updated
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get insights on web development, SEO, and AI trends delivered to
              your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ClickBoost. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
