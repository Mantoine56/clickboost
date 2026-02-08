"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Star,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getIndustryBySlug } from "@/lib/industries-data";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  Animated Counter (reused from Stats pattern)                      */
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
/*  Main Component                                                    */
/* ------------------------------------------------------------------ */
export function IndustryPageContent({ slug }: { slug: string }) {
  const industry = getIndustryBySlug(slug);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  if (!industry) return null;

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        {/* Gradient tint */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-10`}
          aria-hidden="true"
        />
        {/* Subtle grid overlay */}
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
          >
            <Link
              href="/services"
              className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Building2 className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              Industries We Serve
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {industry.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="mt-4 max-w-2xl text-lg font-medium text-brand-500 sm:text-xl"
          >
            {industry.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            {industry.description}
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
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PAIN POINTS                                                 */}
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
              Industry Challenges
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Problems We{" "}
              <span className="text-gradient">Solve</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              We understand the unique digital challenges facing{" "}
              {industry.name.toLowerCase()} businesses.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group rounded-xl border border-border bg-card p-6 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:border-brand-500/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <AlertTriangle
                    className="h-5 w-5 text-destructive"
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
      {/*  SERVICES FOR THIS INDUSTRY                                  */}
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
              Our Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              How We Help{" "}
              <span className="text-gradient">{industry.name}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Tailored services designed for the specific needs of your industry.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {industry.services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:border-brand-500/30 hover:scale-[1.01]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                    <CheckCircle2
                      className="h-5 w-5 text-brand-500"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-brand-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-500">
                    Learn more
                    <ArrowRight
                      className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INDUSTRY STATS                                              */}
      {/* ============================================================ */}
      <section
        ref={statsRef}
        className="relative overflow-hidden py-16 sm:py-24"
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${industry.gradient}`}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="mx-auto mb-12 max-w-xl text-center"
          >
            <TrendingUp
              className="mx-auto h-8 w-8 text-white/80"
              aria-hidden="true"
            />
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Results That Speak
            </h2>
            <p className="mt-3 text-white/70">
              Real outcomes we deliver for {industry.name.toLowerCase()}{" "}
              clients.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industry.stats.map((stat, i) => (
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
                className="text-center"
              >
                <div className="text-4xl font-bold text-white sm:text-5xl">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={statsInView}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-white/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIAL                                                 */}
      {/* ============================================================ */}
      <section className="section-padding bg-background">
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
                &ldquo;{industry.testimonial.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground">
                {industry.testimonial.title}, {industry.testimonial.company}
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
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              {industry.name}
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
            Book a free strategy session and let&rsquo;s discuss how we can
            solve your biggest digital challenges.
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
