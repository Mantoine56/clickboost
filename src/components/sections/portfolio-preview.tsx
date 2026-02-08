"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SyndicateAI",
    category: "AI + Complex App",
    description:
      "NFL analytics platform with predictive AI models, math engine, and real-time data agents.",
    gradient: "from-brand-600 to-purple-700",
    tags: ["AI/ML", "Real-time Data", "Next.js"],
  },
  {
    title: "High Ties",
    category: "E-commerce + POS",
    description:
      "Cannabis dispensary platform with custom POS, inventory management, and full e-commerce.",
    gradient: "from-emerald-600 to-teal-700",
    tags: ["E-commerce", "Custom POS", "Shopify"],
  },
  {
    title: "Spec-Bot",
    category: "AI Tool",
    description:
      "AI-powered specification generator using GPT-4.1 + LangGraph — chat-based 3-phase workflow.",
    gradient: "from-orange-600 to-rose-700",
    tags: ["AI Agents", "LangGraph", "SaaS"],
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function PortfolioPreview() {
  return (
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
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Real results for real businesses. From AI platforms to e-commerce empires.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <Link
                href="/portfolio"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {/* Gradient placeholder for project image */}
                <div
                  className={`relative flex h-48 items-end bg-gradient-to-br ${project.gradient} p-6`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <ExternalLink
                    className="absolute right-4 top-4 h-5 w-5 text-white/50 transition-all group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
