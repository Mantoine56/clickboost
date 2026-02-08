"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  Target,
  Heart,
  Lightbulb,
  Code,
  Palette,
  Database,
  Brain,
  Globe,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const values = [
  {
    icon: Target,
    title: "ROI-First Mentality",
    description:
      "Every decision we make is tied to measurable business outcomes. Beautiful design is meaningless if it doesn't convert.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "We don't ship slow websites. Every project targets Lighthouse 95+ scores and green Core Web Vitals.",
  },
  {
    icon: Shield,
    title: "Security by Default",
    description:
      "From input validation to infrastructure hardening, security isn't an afterthought — it's baked into everything we build.",
  },
  {
    icon: Users,
    title: "Radical Transparency",
    description:
      "No black boxes. You get full access to code, analytics, and our thinking process. Your project, your assets.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Without Hype",
    description:
      "We implement AI and modern tech where it genuinely adds value — not because it's trendy. Practical solutions, real results.",
  },
  {
    icon: Heart,
    title: "Partnership, Not Projects",
    description:
      "We invest in long-term relationships. Your success is our success, and we're with you well beyond launch day.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your business — goals, audience, competitors, and constraints. This phase defines everything that follows.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "A clear roadmap with technical architecture, design direction, content strategy, and timeline. No surprises, no scope creep.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile development with weekly demos and feedback loops. You see real progress from day one, with full transparency into our process.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "Zero-downtime deployment, SEO setup, analytics configuration, and ongoing optimization. Your success starts at launch, not ends.",
  },
];

const technologies = [
  { name: "React", icon: Code },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Node.js", icon: Database },
  { name: "Python", icon: Code },
  { name: "PostgreSQL", icon: Database },
  { name: "AI/ML", icon: Brain },
  { name: "React Native", icon: Smartphone },
  { name: "WordPress", icon: Globe },
  { name: "Shopify", icon: Globe },
  { name: "Vercel", icon: Zap },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-purple-600/5"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <motion.span
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="text-sm font-semibold uppercase tracking-wider text-brand-500"
          >
            About ClickBoost
          </motion.span>
          <motion.h1
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            A Modern Tech Studio Built for{" "}
            <span className="text-gradient">Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            We&rsquo;re a team of developers, designers, and strategists who
            believe technology should work harder for your business. We combine
            deep technical expertise with business-first thinking to deliver
            solutions that look incredible and drive measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                ClickBoost was founded on a simple observation: most businesses
                are underserved by their technology partners. They get either
                beautiful designs that don&rsquo;t perform, or performant code
                that looks like it was built in 2015. We do both.
              </p>
              <p>
                We started by building custom web applications and quickly
                realized our clients needed more than just code — they needed
                strategic partners who understand how technology drives business
                growth. Today, we deliver complete digital solutions spanning web
                development, SEO, AI implementation, and app development.
              </p>
              <p>
                What sets us apart is our commitment to modern technology stacks
                and practical AI implementation. While others talk about AI, we
                build production AI systems — from predictive analytics
                platforms to automated content pipelines — that deliver
                measurable ROI from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Principles that guide every project and every decision.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="rounded-xl border border-border bg-card p-6 shadow-elevation-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                  <value.icon
                    className="h-5 w-5 text-brand-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven approach refined across 50+ projects.
            </p>
          </div>

          <div className="mt-16">
            <Timeline items={processSteps} />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies We <span className="text-gradient">Use</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Modern stacks chosen for performance, developer experience, and
              long-term maintainability.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 shadow-elevation-1"
              >
                <tech.icon
                  className="h-6 w-6 text-muted-foreground"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-purple-800"
          aria-hidden="true"
        />
        <div className="container-tight relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&rsquo;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Ready to work with a team that truly cares about your business
            outcomes? Let&rsquo;s talk.
          </p>
          <div className="mt-8">
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
          </div>
        </div>
      </section>
    </>
  );
}
