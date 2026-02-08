"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Search, Bot, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    name: "Web Development",
    description:
      "Custom websites and web applications built with modern tech stacks. From Next.js to WordPress and Shopify.",
    href: "/services/web-development",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Search,
    name: "SEO & Digital Growth",
    description:
      "Technical SEO, local SEO, and content strategy that drives measurable organic growth and revenue.",
    href: "/services/seo",
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Bot,
    name: "AI Implementation",
    description:
      "Custom AI agents, workflow automation, and intelligent tools that transform how your business operates.",
    href: "/services/ai-implementation",
    color: "from-brand-500/10 to-purple-500/10",
    iconColor: "text-brand-500",
  },
  {
    icon: Smartphone,
    name: "App Development",
    description:
      "Mobile apps, SaaS platforms, and custom business tools built for scale and exceptional user experience.",
    href: "/services/app-development",
    color: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function ServicesPreview() {
  return (
    <section className="section-padding bg-surface" id="services">
      <div className="container-wide">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-brand-500"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Everything You Need to{" "}
            <span className="text-gradient">Grow Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            From beautiful websites to cutting-edge AI, we deliver the
            technology that drives your business forward.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={cardVariants}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.color}`}
                >
                  <service.icon
                    className={`h-6 w-6 ${service.iconColor}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Learn more link */}
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-500 transition-colors group-hover:text-brand-400">
                  Learn More
                  <ArrowRight
                    className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
