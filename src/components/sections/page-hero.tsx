"use client";

import { cn } from "@/lib/utils";
import FlowFieldBackground from "@/components/ui/flow-field-background";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
interface PageHeroProps {
  children: React.ReactNode;
  /** Hex color for the flow-field particles (default: "#818cf8") */
  color?: string;
  /** Particle speed multiplier (default: 0.8) */
  speed?: number;
  /** Trail opacity — lower = longer trails (default: 0.12) */
  trailOpacity?: number;
  /** Number of particles (default: 500) */
  particleCount?: number;
  /**
   * When true, hero text is rendered in white (for dark/immersive heroes
   * like city pages). Applies a lighter overlay instead of the default one.
   */
  dark?: boolean;
  /** Additional classes on the outer <section> */
  className?: string;
  /** Use container-tight instead of container-wide */
  tight?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
/**
 * Shared hero wrapper used by every non-homepage page.
 *
 * Renders an interactive FlowFieldBackground behind the page's hero
 * content while keeping a readable gradient overlay on top.
 */
export function PageHero({
  children,
  color = "#818cf8",
  speed = 0.8,
  trailOpacity = 0.12,
  particleCount = 500,
  dark = false,
  className,
  tight = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24",
        className
      )}
    >
      {/* ---- Canvas background (purely decorative) ---- */}
      <div className="absolute inset-0" aria-hidden="true">
        <FlowFieldBackground
          color={color}
          speed={speed}
          trailOpacity={trailOpacity}
          particleCount={particleCount}
        />
      </div>

      {/* ---- Gradient overlay for text readability ---- */}
      {dark ? (
        /* Dark heroes: lighter overlay so the canvas shows through more */
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"
          aria-hidden="true"
        />
      ) : (
        /* Default: heavier overlay so foreground text stays crisp */
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"
          aria-hidden="true"
        />
      )}

      {/* ---- Foreground content ---- */}
      <div
        className={cn("relative z-10", tight ? "container-tight" : "container-wide")}
      >
        {children}
      </div>
    </section>
  );
}
