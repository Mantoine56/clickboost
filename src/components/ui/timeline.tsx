"use client";

import { useRef, useState, useEffect } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  useReducedMotion,
  motion,
} from "framer-motion";

interface TimelineItem {
  step: string;
  title: string;
  description: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative mx-auto max-w-3xl pb-12">
        <ol role="list">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-start pt-10 first:pt-0 md:pt-16 md:gap-10"
            >
              {/* Sticky step badge — desktop only */}
              <div className="sticky top-40 z-40 hidden self-start md:flex md:w-48 md:shrink-0 md:flex-col md:items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10">
                  <span className="text-sm font-bold text-brand-400">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-muted-foreground">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-full pl-12 md:pl-4">
                {/* Step dot — mobile only */}
                <div className="absolute left-[7px] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/30 bg-background md:hidden">
                  <span className="text-sm font-bold text-brand-400">
                    {item.step}
                  </span>
                </div>

                {/* Title — mobile only */}
                <h3 className="mb-2 block text-lg font-bold text-foreground md:hidden">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Animated vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[26px] top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-border to-transparent md:left-[95px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          aria-hidden="true"
        >
          <motion.div
            style={{
              height: prefersReducedMotion ? height : heightTransform,
              opacity: prefersReducedMotion ? 1 : opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-brand-500 via-brand-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
