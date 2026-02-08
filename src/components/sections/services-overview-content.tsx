"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";

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
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {/* Gradient header */}
                  <div
                    className={`flex h-32 items-center justify-center bg-gradient-to-br ${service.gradient}`}
                  >
                    <service.icon
                      className="h-10 w-10 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-semibold text-foreground">
                      {service.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.tagline}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-500 transition-colors group-hover:text-brand-400">
                      Learn More
                      <ArrowRight
                        className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
