"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/lib/services-data";
import { ServiceCard } from "@/components/ui/service-card";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function ServicesOverviewContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-purple-600/10"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <motion.span
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="text-sm font-semibold uppercase tracking-wider text-brand-500"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Everything You Need to{" "}
            <span className="text-gradient">Grow Online</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            From custom web applications to AI-powered automation, we deliver the
            technology that drives your business forward. Every solution is built
            for performance, scalability, and measurable ROI.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="h-full"
              >
                <ServiceCard
                  icon={service.icon}
                  name={service.name}
                  description={service.description}
                  gradient={service.gradient}
                  features={service.features.slice(0, 4).map((f) => f.title)}
                  href={`/services/${service.slug}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
