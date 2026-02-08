"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Globe,
  Search,
  Bot,
  Smartphone,
  Code2,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getCityBySlug,
  getServiceBySlug as getCityServiceBySlug,
} from "@/lib/cities-data";
import { PageHero } from "@/components/sections/page-hero";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  Service icon mapping                                               */
/* ------------------------------------------------------------------ */
const serviceIcons: Record<string, typeof Globe> = {
  "web-development": Globe,
  seo: Search,
  "ai-implementation": Bot,
  "app-development": Smartphone,
  wordpress: Code2,
  shopify: ShoppingBag,
};

/* ------------------------------------------------------------------ */
/*  Service-specific color gradients                                   */
/* ------------------------------------------------------------------ */
const serviceGradients: Record<string, string> = {
  "web-development": "from-blue-600 to-cyan-600",
  seo: "from-emerald-600 to-teal-600",
  "ai-implementation": "from-violet-600 to-purple-600",
  "app-development": "from-orange-600 to-red-500",
  wordpress: "from-sky-600 to-blue-600",
  shopify: "from-green-600 to-emerald-500",
};

/* Hex colours for flow-field particles, per service */
const serviceHeroColors: Record<string, string> = {
  "web-development": "#60a5fa", // blue-400
  seo: "#34d399",               // emerald-400
  "ai-implementation": "#a78bfa", // violet-400
  "app-development": "#fb923c", // orange-400
  wordpress: "#38bdf8",         // sky-400
  shopify: "#4ade80",           // green-400
};

/* ------------------------------------------------------------------ */
/*  Service-specific key points                                        */
/* ------------------------------------------------------------------ */
interface KeyPoint {
  title: string;
  description: string;
}

function getKeyPoints(serviceSlug: string, cityName: string): KeyPoint[] {
  const points: Record<string, KeyPoint[]> = {
    "web-development": [
      {
        title: "Lightning-Fast Performance",
        description: `${cityName} customers expect fast-loading websites. We build with Next.js and React for sub-second load times that keep visitors engaged and improve conversion rates.`,
      },
      {
        title: "Mobile-First Design",
        description: `Over 60% of ${cityName} web traffic comes from mobile devices. Every site we build is responsive, touch-optimized, and looks stunning on any screen size.`,
      },
      {
        title: "Conversion-Optimized",
        description: `Beautiful design is just the start. We architect user flows, CTAs, and landing pages specifically to convert ${cityName} visitors into paying customers.`,
      },
      {
        title: "Scalable Architecture",
        description: `Whether you're a startup or an established ${cityName} business, our websites are built on modern infrastructure that scales with your growth.`,
      },
    ],
    seo: [
      {
        title: "Local SEO Dominance",
        description: `Rank at the top of Google for "${cityName}" searches. We optimize your Google Business Profile, build local citations, and create geo-targeted content.`,
      },
      {
        title: "Technical SEO Foundation",
        description: `From Core Web Vitals to structured data, we ensure your website meets every technical requirement Google demands for top rankings in ${cityName}.`,
      },
      {
        title: "Content Strategy",
        description: `We develop data-driven content strategies targeting keywords that ${cityName} customers actually search for, driving qualified organic traffic to your business.`,
      },
      {
        title: "Competitor Analysis",
        description: `We analyze what your top ${cityName} competitors are doing online and build a strategy to outrank them systematically.`,
      },
    ],
    "ai-implementation": [
      {
        title: "Custom AI Agents",
        description: `Purpose-built AI assistants that handle customer inquiries, qualify leads, and automate repetitive tasks for your ${cityName} business 24/7.`,
      },
      {
        title: "Workflow Automation",
        description: `Eliminate manual processes with intelligent automation. From data entry to report generation, we free up your ${cityName} team to focus on high-value work.`,
      },
      {
        title: "AI-Powered Analytics",
        description: `Turn your business data into actionable insights. Our AI tools analyze patterns, predict trends, and help you make smarter decisions for your ${cityName} market.`,
      },
      {
        title: "Chatbot Solutions",
        description: `Deploy intelligent chatbots that provide instant support, book appointments, and capture leads for your ${cityName} business around the clock.`,
      },
    ],
    "app-development": [
      {
        title: "Cross-Platform Mobile Apps",
        description: `Reach ${cityName} customers on iOS and Android with a single codebase. We build beautiful, performant mobile apps using Flutter and React Native.`,
      },
      {
        title: "Custom SaaS Platforms",
        description: `Turn your business idea into a scalable SaaS product. We handle everything from architecture design to launch, optimized for the ${cityName} market.`,
      },
      {
        title: "Business Tools & Integrations",
        description: `Custom POS systems, inventory management, CRM integrations — we build the tools that ${cityName} businesses need to operate efficiently.`,
      },
      {
        title: "API Development",
        description: `Connect your systems with robust API integrations. We build secure, scalable APIs that power your ${cityName} business operations.`,
      },
    ],
    wordpress: [
      {
        title: "Custom Theme Development",
        description: `Unique WordPress themes designed specifically for your ${cityName} brand. No templates — every element is crafted to convert visitors into customers.`,
      },
      {
        title: "Plugin Customization",
        description: `We develop custom plugins and configure existing ones to meet your exact business requirements in ${cityName}, from booking systems to e-commerce.`,
      },
      {
        title: "WooCommerce Solutions",
        description: `Full e-commerce capabilities for ${cityName} businesses. Custom product pages, payment gateways, shipping integrations, and inventory management.`,
      },
      {
        title: "Performance & Security",
        description: `WordPress speed optimization, security hardening, and ongoing maintenance to keep your ${cityName} business website fast and protected.`,
      },
    ],
    shopify: [
      {
        title: "Custom Store Design",
        description: `Stand out from the competition with a Shopify store designed for ${cityName} customers. Custom themes that reflect your brand and maximize conversions.`,
      },
      {
        title: "App Integration",
        description: `We integrate the best Shopify apps for your ${cityName} business — from marketing automation to inventory management and customer reviews.`,
      },
      {
        title: "Shopify Plus Solutions",
        description: `Enterprise-grade Shopify solutions for high-volume ${cityName} retailers. Custom checkout experiences, B2B portals, and multi-currency support.`,
      },
      {
        title: "Migration & Optimization",
        description: `Seamlessly migrate your existing store to Shopify and optimize it for ${cityName} customers with faster load times and better conversion rates.`,
      },
    ],
  };

  return points[serviceSlug] || points["web-development"];
}

/* ------------------------------------------------------------------ */
/*  Deliverables by service                                            */
/* ------------------------------------------------------------------ */
function getDeliverables(serviceSlug: string): string[] {
  const deliverables: Record<string, string[]> = {
    "web-development": [
      "Custom responsive website design",
      "Next.js / React development",
      "CMS integration and content management",
      "Performance optimization (95+ Lighthouse)",
      "SSL certificate and security setup",
      "Analytics and conversion tracking",
      "Accessibility compliance (WCAG 2.1)",
      "Post-launch support and maintenance",
    ],
    seo: [
      "Comprehensive SEO audit",
      "Keyword research and strategy",
      "Google Business Profile optimization",
      "On-page SEO implementation",
      "Technical SEO fixes",
      "Local citation building",
      "Content calendar and creation",
      "Monthly performance reporting",
    ],
    "ai-implementation": [
      "AI strategy consultation",
      "Custom AI agent development",
      "Chatbot design and deployment",
      "Workflow automation setup",
      "Data pipeline integration",
      "Model training and fine-tuning",
      "API integration with existing tools",
      "Ongoing monitoring and optimization",
    ],
    "app-development": [
      "Product strategy and UX design",
      "Cross-platform mobile development",
      "Backend API development",
      "Database architecture design",
      "User authentication and security",
      "Push notifications and real-time features",
      "App store submission and optimization",
      "Ongoing maintenance and updates",
    ],
    wordpress: [
      "Custom WordPress theme design",
      "Plugin development and customization",
      "WooCommerce setup and configuration",
      "Content migration and setup",
      "Speed and performance optimization",
      "Security hardening and SSL",
      "SEO plugin configuration",
      "Training and documentation",
    ],
    shopify: [
      "Custom Shopify theme design",
      "Product catalog setup",
      "Payment and shipping configuration",
      "App integration and customization",
      "SEO optimization for products",
      "Email marketing automation",
      "Inventory management setup",
      "Launch support and training",
    ],
  };

  return deliverables[serviceSlug] || deliverables["web-development"];
}

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                   */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */
const statsData = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: Award },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 3, suffix: "x", label: "Average ROI Increase", icon: TrendingUp },
  { value: 12, suffix: "+", label: "Industries Served", icon: Users },
];

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */
export function CityServiceContent({
  citySlug,
  serviceSlug,
}: {
  citySlug: string;
  serviceSlug: string;
}) {
  const city = getCityBySlug(citySlug);
  const service = getCityServiceBySlug(serviceSlug);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  if (!city || !service) return null;

  const location = city.province || city.state;
  const gradient = serviceGradients[serviceSlug] || "from-brand-600 to-brand-800";
  const Icon = serviceIcons[serviceSlug] || Globe;
  const keyPoints = getKeyPoints(serviceSlug, city.name);
  const deliverables = getDeliverables(serviceSlug);

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO — flow-field background with service-specific color    */}
      {/* ============================================================ */}
      <PageHero
        color={serviceHeroColors[serviceSlug] || "#818cf8"}
        particleCount={400}
      >
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-4"
        >
          <Link
            href={`/${citySlug}`}
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <MapPin className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
            {city.name}, {location}
          </Link>
          <span className="text-muted-foreground/40" aria-hidden="true">
            /
          </span>
          <span className="text-sm text-muted-foreground">
            {service.name}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-6 flex items-center gap-4"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
          >
            <Icon className="h-7 w-7 text-white" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {service.name} in{" "}
              <span className="text-gradient">{city.name}</span>
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">
              {location}, {city.country}
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground"
        >
          {service.description} We bring enterprise-quality {service.name.toLowerCase()}{" "}
          to {city.name} businesses — {city.description.toLowerCase()},{" "}
          and we help local companies stand out with technology that drives real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="bg-brand-500 px-8 text-white hover:bg-brand-600 glow"
          >
            <Link href="/contact">
              Book Your Free Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8"
          >
            <Link href={`/services/${serviceSlug}`}>
              Learn More About {service.name}
            </Link>
          </Button>
        </motion.div>
      </PageHero>

      {/* ============================================================ */}
      {/*  WHY THIS SERVICE IN THIS CITY                               */}
      {/* ============================================================ */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-wider text-brand-500"
            >
              Why It Matters
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Why {city.name} Businesses Need{" "}
              <span className="text-gradient">Professional {service.name}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              In a competitive market like {city.name}, the right digital
              strategy is the difference between growing and getting left behind.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {keyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:border-brand-500/30 hover:scale-[1.01]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                  <Zap
                    className="h-5 w-5 text-brand-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT WE DELIVER                                             */}
      {/* ============================================================ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-wider text-brand-500"
            >
              Deliverables
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What You{" "}
              <span className="text-gradient">Get</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Everything included in our {service.name.toLowerCase()} package
              for {city.name} businesses.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-elevation-1"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS                                                       */}
      {/* ============================================================ */}
      <section
        ref={statsRef}
        className="relative overflow-hidden py-24 sm:py-32 bg-background"
      >
        {/* Background Effects */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent)]"
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-16 max-w-xl text-center"
          >
            <TrendingUp
              className="mx-auto h-8 w-8 text-brand-500 mb-4"
              aria-hidden="true"
            />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Proven Results
            </h2>
            <p className="mt-3 text-muted-foreground">
              Real outcomes we deliver for {service.name.toLowerCase()} clients.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease,
                }}
                className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-500/30 hover:bg-card/50 hover:shadow-glow"
              >
                {/* Icon Background Glow */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-500/20">
                  <stat.icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  <span className="text-gradient">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      inView={statsInView}
                    />
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                  {stat.label}
                </p>

                {/* Card Hover Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-purple-800"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-400/20 via-transparent to-transparent"
          aria-hidden="true"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        <div className="container-tight relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready for{" "}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              {service.name}
            </span>{" "}
            in {city.name}?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-brand-100/80"
          >
            Book a free strategy session and let&rsquo;s discuss how
            professional {service.name.toLowerCase()} can transform your{" "}
            {city.name} business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white px-8 text-base text-brand-900 hover:bg-brand-50"
            >
              <Link href="/contact">
                Book Your Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 px-8 text-base text-white hover:bg-white/10"
            >
              <Link href={`/${citySlug}`}>
                All {city.name} Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
