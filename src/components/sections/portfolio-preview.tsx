"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    slug: "syndicate-ai",
    title: "SyndicateAI",
    category: "AI + Complex App",
    description:
      "NFL analytics platform with predictive AI models, math engine, and real-time data agents.",
    gradient: "from-brand-600 to-purple-700",
    tags: ["AI/ML", "Real-time Data", "Next.js"],
  },
  {
    slug: "high-ties",
    title: "High Ties",
    category: "E-commerce + POS",
    description:
      "Cannabis dispensary platform with custom POS, inventory management, and full e-commerce.",
    gradient: "from-emerald-600 to-teal-700",
    tags: ["E-commerce", "Custom POS", "Shopify"],
  },
  {
    slug: "spec-bot",
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
              className="h-full"
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                gradient={project.gradient}
                tags={project.tags}
                href={`/portfolio/${project.slug}`}
              />
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
