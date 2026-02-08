"use client";

import { motion } from "framer-motion";
import { Globe, Search, Bot, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";

const services = [
  {
    icon: Globe,
    name: "Web Development",
    tagline: "Custom websites and web applications built for performance",
    description:
      "We build modern, fast, accessible websites and web applications using the latest technologies. From marketing sites to complex web apps.",
    href: "/services/web-development",
    gradient: "from-blue-600 to-cyan-600",
    features: [
      "Custom Next.js & React",
      "Mobile-First Design",
      "Performance Optimized",
      "CMS Integration",
    ],
  },
  {
    icon: Search,
    name: "SEO & Digital Growth",
    tagline: "Data-driven strategies that deliver measurable organic growth",
    description:
      "Technical SEO, content strategy, and digital marketing to drive sustainable organic growth and measurable business outcomes.",
    href: "/services/seo",
    gradient: "from-emerald-600 to-green-600",
    features: [
      "Technical SEO Audits",
      "Local SEO & Citations",
      "Content Strategy",
      "Programmatic SEO",
    ],
  },
  {
    icon: Bot,
    name: "AI Implementation",
    tagline: "Intelligent automation that transforms your business",
    description:
      "Custom AI agents, workflow automation, and intelligent tools that solve real business problems with measurable ROI.",
    href: "/services/ai-implementation",
    gradient: "from-brand-600 to-purple-600",
    features: [
      "Custom AI Agents",
      "Workflow Automation",
      "AI Chatbots",
      "Strategy Consulting",
    ],
  },
  {
    icon: Smartphone,
    name: "App Development",
    tagline: "Mobile apps and SaaS platforms built for scale",
    description:
      "Mobile applications, SaaS platforms, and custom business tools built with robust architecture and exceptional UX.",
    href: "/services/app-development",
    gradient: "from-orange-600 to-rose-600",
    features: [
      "Cross-Platform Apps",
      "SaaS Platforms",
      "Custom Business Tools",
      "POS Systems",
    ],
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
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.name} variants={cardVariants} className="h-full">
              <ServiceCard
                icon={service.icon}
                name={service.name}
                description={service.description}
                features={service.features}
                gradient={service.gradient}
                href={service.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
