"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { getServiceBySlug } from "@/lib/services-data";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ServicePageContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}
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
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; All Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-6 flex items-center gap-4"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
            >
              <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {service.name}
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                {service.tagline}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-500 px-8 text-white hover:bg-brand-600 glow"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What&rsquo;s <span className="text-gradient">Included</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need, nothing you don&rsquo;t.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="rounded-xl border border-border bg-card p-6 shadow-elevation-1"
              >
                <CheckCircle2
                  className="h-5 w-5 text-brand-500"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven approach that delivers results, every time.
            </p>
          </div>

          <div className="mt-16">
            <Timeline
              items={service.process.map((s) => ({
                step: String(s.step).padStart(2, "0"),
                title: s.title,
                description: s.description,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Related <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {service.relatedProjects.map((project) => (
              <Link
                key={project}
                href="/portfolio"
                className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:shadow-elevation-1 hover:border-brand-500/30"
              >
                {project}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
          aria-hidden="true"
        />
        <div className="container-tight relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Book a free strategy session and let&rsquo;s discuss how {service.name.toLowerCase()} can
            accelerate your business growth.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white px-8 text-base text-foreground hover:bg-white/90"
            >
              <Link href="/contact">
                Book Your Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
