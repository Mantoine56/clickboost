"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTABackgroundFallback() {
  return (
    <>
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-purple-800"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-400/20 via-transparent to-transparent"
        aria-hidden="true"
      />
    </>
  );
}

const ShaderBg = dynamic(
  () =>
    import("@/components/ui/shader-background").then((mod) => ({
      default: mod.ShaderBackground,
    })),
  { ssr: false, loading: () => <CTABackgroundFallback /> }
);

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Animated shader background */}
      <ShaderBg className="absolute inset-0 h-full w-full" />

      <div className="container-tight relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Ready to Build Something{" "}
          <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
            Amazing?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-brand-100/80"
        >
          Let&rsquo;s discuss your project. Book a free strategy session and
          discover how we can help your business grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 px-8 text-base text-white hover:bg-white/10"
          >
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
