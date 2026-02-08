"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const animationRef = useRef<number>(0);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "oklch(0.08 0.01 270)";
      ctx.fillRect(0, 0, width, height);

      const orbs = [
        {
          x: width * 0.3 + Math.sin(time * 0.0003) * width * 0.1,
          y: height * 0.4 + Math.cos(time * 0.0004) * height * 0.1,
          r: width * 0.4,
          color: "rgba(120, 80, 220, 0.15)",
        },
        {
          x: width * 0.7 + Math.cos(time * 0.0005) * width * 0.08,
          y: height * 0.6 + Math.sin(time * 0.0003) * height * 0.12,
          r: width * 0.35,
          color: "rgba(80, 60, 200, 0.12)",
        },
        {
          x: width * 0.5 + Math.sin(time * 0.0004) * width * 0.15,
          y: height * 0.3 + Math.cos(time * 0.0006) * height * 0.08,
          r: width * 0.3,
          color: "rgba(160, 100, 240, 0.08)",
        },
      ];

      for (const orb of orbs) {
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0, orb.x, orb.y, orb.r
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      const rect = canvas.getBoundingClientRect();
      draw(ctx, rect.width, rect.height, 0);
      return () => window.removeEventListener("resize", resize);
    }

    function animate(time: number) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      draw(ctx!, rect.width, rect.height, time);
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

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
      <GradientMesh />

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

        {/* Scroll indicator — fades in after delay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              className="h-6 w-6 text-muted-foreground/50"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
