"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Search,
  Bot,
  Smartphone,
  ShoppingBag,
  Code2,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCityBySlug, servicesList } from "@/lib/cities-data";

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
  { value: 12, suffix: "+", label: "Industries Served", icon: Users },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: TrendingUp },
  { value: 3, suffix: "x", label: "Average ROI Increase", icon: Zap },
];

/* ------------------------------------------------------------------ */
/*  Testimonial data (city-relevant)                                   */
/* ------------------------------------------------------------------ */
const testimonial = {
  quote:
    "ClickBoost didn't just build us a website — they built us a growth engine. The combination of stunning design, technical SEO, and AI-powered lead capture tripled our monthly inquiries within the first quarter.",
  title: "Owner, GreenLeaf Dispensary",
};

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */
export function CityPageContent({ citySlug }: { citySlug: string }) {
  const city = getCityBySlug(citySlug);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  if (!city) return null;

  const location = city.province || city.state;

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        {/* Gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900 opacity-90"
          aria-hidden="true"
        />
        {/* Radial accent */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-400/20 via-transparent to-transparent"
          aria-hidden="true"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-2"
          >
            <MapPin className="h-4 w-4 text-brand-300" aria-hidden="true" />
            <span className="text-sm font-medium text-brand-200">
              {city.name}, {location} &mdash; {city.country}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Web Development, SEO &amp; AI in{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
              {city.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100/80"
          >
            {city.description}. We help businesses in {city.name} build
            stunning websites, dominate local search results, and leverage
            AI to scale faster than the competition.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
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
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES GRID                                               */}
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
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What We Build in{" "}
              <span className="text-gradient">{city.name}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Full-service digital solutions tailored for {city.name}{" "}
              businesses. From custom websites to AI-powered automation.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, i) => {
              const Icon = serviceIcons[service.slug] || Globe;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                >
                  <Link
                    href={`/${citySlug}/${service.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:border-brand-500/30 hover:scale-[1.01]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500/20">
                      <Icon
                        className="h-6 w-6 text-brand-500"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground transition-colors group-hover:text-brand-500">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-5 inline-flex items-center text-sm font-medium text-brand-500">
                      {service.name} in {city.name}
                      <ArrowRight
                        className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Results That Speak
            </h2>
            <p className="mt-3 text-muted-foreground">
              Proven outcomes for businesses across {city.name} and beyond.
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
      {/*  WHY CLICKBOOST IN THIS CITY                                 */}
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
              Local Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Why {city.name} Businesses{" "}
              <span className="text-gradient">Choose ClickBoost</span>
            </motion.h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Deep Local Market Knowledge",
                description: `We understand the ${city.name} market landscape, your local competitors, and what resonates with customers in ${location}. Our strategies are tailored to your geographic context.`,
              },
              {
                title: "Modern Tech, Proven Results",
                description: `We use cutting-edge technologies like Next.js, React, and AI to build fast, SEO-optimized websites that outperform the competition in ${city.name} search results.`,
              },
              {
                title: "ROI-First Approach",
                description: `Every project starts with your business goals. We measure success by leads generated, revenue increased, and time saved — not vanity metrics.`,
              },
              {
                title: "Dedicated Partnership",
                description: `You get a dedicated team invested in your ${city.name} business growth. Regular strategy calls, transparent reporting, and proactive recommendations.`,
              },
              {
                title: "Full-Stack Capabilities",
                description: `From websites to mobile apps, from SEO to AI automation — we handle your entire digital presence so you can focus on running your business.`,
              },
              {
                title: "Competitive Pricing",
                description: `Enterprise-quality work at rates that make sense for ${city.name} businesses. Transparent pricing with no hidden fees or surprise invoices.`,
              },
            ].map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group rounded-xl border border-border bg-card p-6 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:border-brand-500/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                  <Zap
                    className="h-5 w-5 text-brand-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIAL                                                 */}
      {/* ============================================================ */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Stars */}
            <div
              className="flex justify-center gap-1"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>

            <blockquote className="mt-8">
              <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground">
                {testimonial.title}
              </p>
            </div>
          </motion.div>
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
            Ready to Grow Your{" "}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              {city.name}
            </span>{" "}
            Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-brand-100/80"
          >
            Book a free strategy session and discover how we can help your{" "}
            {city.name} business dominate online.
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
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
