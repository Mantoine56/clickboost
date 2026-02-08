"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
interface FlowFieldBackgroundProps {
  className?: string;
  /**
   * Color of the particles (hex string).
   * Defaults to indigo (#6366f1).
   */
  color?: string;
  /**
   * The opacity of the trail fade-out (0.0 – 1.0).
   * Lower = longer trails, higher = shorter trails.
   * Default: 0.15
   */
  trailOpacity?: number;
  /**
   * Number of particles rendered on the canvas.
   * Default: 600
   */
  particleCount?: number;
  /**
   * Speed multiplier for particle movement.
   * Default: 1
   */
  speed?: number;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function FlowFieldBackground({
  className,
  color = "#6366f1",
  trailOpacity = 0.15,
  particleCount = 600,
  speed = 1,
}: FlowFieldBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ---------- Check reduced-motion preference ---------- */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // If user prefers reduced motion, skip animation entirely
    if (prefersReducedMotion) return;

    /* ---------- State ---------- */
    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 }; // start off-screen

    /* ---------- Particle class ---------- */
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        // Random lifespan creates natural recycling
        this.life = Math.random() * 200 + 100;
      }

      /** Advance the particle one frame */
      update() {
        // 1. Flow-field angle derived from position (simplex-ish noise)
        const angle =
          (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;

        // 2. Apply flow-field force
        this.vx += Math.cos(angle) * 0.2 * speed;
        this.vy += Math.sin(angle) * 0.2 * speed;

        // 3. Mouse repulsion
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          this.vx -= dx * force * 0.05;
          this.vy -= dy * force * 0.05;
        }

        // 4. Apply velocity with friction
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;

        // 5. Aging — recycle when lifespan expires
        this.age++;
        if (this.age > this.life) {
          this.reset();
        }

        // 6. Wrap around edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      /** Reset to a random position with fresh velocity */
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      /** Draw a tiny dot with age-based fade */
      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = color;
        // Smooth fade-in and fade-out over lifespan
        const alpha = 1 - Math.abs(this.age / this.life - 0.5) * 2;
        context.globalAlpha = alpha;
        // fillRect is faster than arc for tiny dots
        context.fillRect(this.x, this.y, 1.5, 1.5);
      }
    }

    /* ---------- Initialise canvas + particles ---------- */
    const init = () => {
      // Handle High-DPI / Retina screens
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    /* ---------- Animation loop ---------- */
    const animate = () => {
      // Semi-transparent overlay creates the "trail" effect
      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    /* ---------- Event handlers ---------- */
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    /* ---------- Kick off ---------- */
    init();
    animate();

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    /* ---------- Cleanup on unmount ---------- */
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, trailOpacity, particleCount, speed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden bg-black", className)}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
