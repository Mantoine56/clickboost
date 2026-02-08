"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, TrendingUp, Zap } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: Award },
  { value: 12, suffix: "+", label: "Industries Served", icon: Users },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: TrendingUp },
  { value: 5, suffix: "+", label: "Years Experience", icon: Zap },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32 bg-background">
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent)]"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-500/30 hover:bg-card/50 hover:shadow-glow"
            >
              {/* Icon Background Glow */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 text-brand-500 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-500/20">
                {stat.icon && <stat.icon className="h-7 w-7" />}
              </div>

              <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <span className="text-gradient">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
              
              {/* Card Hover Gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
