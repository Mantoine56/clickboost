"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, filterCategories } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ui/project-card";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-purple-800 opacity-10"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <motion.span
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="text-sm font-semibold uppercase tracking-wider text-brand-500"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Projects That{" "}
            <span className="text-gradient">Speak for Themselves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            From AI-powered platforms to e-commerce empires, every project is
            crafted for performance, scalability, and real business impact.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease }}
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                  activeFilter === category
                    ? "bg-brand-500 text-white shadow-elevation-1 glow"
                    : "border border-border bg-card text-muted-foreground hover:border-brand-500/30 hover:text-foreground"
                }`}
                aria-pressed={activeFilter === category}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            layout
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease }}
                  className="h-full"
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    description={project.tagline}
                    gradient={project.gradient}
                    tags={project.techStack}
                    href={`/portfolio/${project.slug}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-purple-800"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-400/20 via-transparent to-transparent"
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
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-lg text-brand-100/80"
          >
            Let&rsquo;s turn your idea into the next success story. Book a free
            strategy session to get started.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-medium text-brand-900 transition-colors hover:bg-brand-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Book Your Free Strategy Session
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
