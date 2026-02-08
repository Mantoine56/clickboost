"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Quote,
  Star,
  Layers,
  Target,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, getProjectBySlug } from "@/lib/portfolio-data";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function CaseStudyContent({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none rounded"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-8"
          >
            <Badge
              variant="secondary"
              className="bg-brand-500/10 text-brand-500 border-brand-500/20"
            >
              {project.category}
            </Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
              {project.tagline}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <Target
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  The Challenge
                </h2>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                  <Lightbulb
                    className="h-5 w-5 text-brand-500"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  The Solution
                </h2>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <BarChart3
                  className="h-5 w-5 text-emerald-500"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The <span className="text-gradient">Results</span>
              </h2>
            </div>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.results.map((result, i) => (
                <motion.div
                  key={result}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-elevation-1"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-foreground">
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                <Layers
                  className="h-5 w-5 text-brand-500"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tech <span className="text-gradient">Stack</span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
            className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3"
          >
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-brand-500/20 bg-brand-500/5 px-4 py-2 text-sm text-foreground"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What we built to make this project a success.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                className="rounded-xl border border-border bg-card p-5 shadow-elevation-1"
              >
                <CheckCircle2
                  className="h-5 w-5 text-brand-500"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-padding bg-surface">
          <div className="container-tight">
            <motion.blockquote
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease }}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-elevation-2 sm:p-12"
            >
              <Quote
                className="absolute top-6 left-6 h-10 w-10 text-brand-500/20 sm:top-8 sm:left-8 sm:h-12 sm:w-12"
                aria-hidden="true"
              />

              <p className="relative z-10 text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>

              <footer className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  {project.testimonial.title}
                </p>
                <div className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </footer>
            </motion.blockquote>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="border-t border-border bg-background py-12">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.slug}`}
                className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label={`Previous project: ${prevProject.title}`}
              >
                <ArrowLeft
                  className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
                <div>
                  <span className="text-xs text-muted-foreground">
                    Previous
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/portfolio"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none rounded"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group flex items-center gap-3 rounded-lg p-3 text-right transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label={`Next project: ${nextProject.title}`}
              >
                <div>
                  <span className="text-xs text-muted-foreground">Next</span>
                  <p className="text-sm font-medium text-foreground">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="container-tight relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Want Results Like These?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-lg text-white/80"
          >
            Let&rsquo;s build something extraordinary for your business. Book a
            free strategy session today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8"
          >
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
