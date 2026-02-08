"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function HeroBackgroundFallback() {
  return (
    <div
      className="absolute inset-0 bg-background"
      style={{
        backgroundImage: `
          radial-gradient(circle at 30% 40%, rgba(120, 80, 220, 0.15), transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(80, 60, 200, 0.12), transparent 50%)
        `,
      }}
      aria-hidden="true"
    />
  );
}

const ShaderBg = dynamic(
  () =>
    import("@/components/ui/shader-background").then((mod) => ({
      default: mod.ShaderBackground,
    })),
  { ssr: false, loading: () => <HeroBackgroundFallback /> }
);

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <ShaderBg className="absolute inset-0 h-full w-full" />

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 flex flex-col items-center pt-24 text-center">
        {/* Badge — visible immediately, animates subtly */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" aria-hidden="true" />
            Modern Tech Studio
          </span>
        </motion.div>

        {/* Heading — visible immediately, slides up subtly */}
        <motion.h1
          initial={{ opacity: 1, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          We Build What
          <br />
          <span className="text-gradient">Others Can&rsquo;t</span>
        </motion.h1>

        {/* Subtitle — visible immediately */}
        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Web Development{" "}
          <span className="text-brand-400" aria-hidden="true">&bull;</span>{" "}
          SEO{" "}
          <span className="text-brand-400" aria-hidden="true">&bull;</span>{" "}
          AI Implementation{" "}
          <span className="text-brand-400" aria-hidden="true">&bull;</span>{" "}
          App Development
        </motion.p>

        {/* CTAs — visible immediately */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <Button
              asChild
              size="lg"
              className="bg-brand-500 px-8 text-base text-white hover:bg-brand-600 glow-strong"
            >
              <Link href="/contact">
                Book Your Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </MagneticButton>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border/50 px-8 text-base backdrop-blur"
          >
            <Link href="/portfolio">See Our Work</Link>
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator — positioned relative to the full-screen section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          {/* Mouse-shaped outline with animated scroll dot */}
          <div className="flex h-9 w-5.5 items-start justify-center rounded-full border-2 border-muted-foreground/30 pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-brand-400"
            />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
