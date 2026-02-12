'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

export interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  href: string;
  features?: string[];
}

function getDeterministicLineStyles(seed: string) {
  // Generate stable pseudo-random values from a fixed seed so SSR and client match.
  const baseHash = Array.from(seed).reduce(
    (hash, char) => ((hash * 33 + char.charCodeAt(0)) >>> 0),
    5381
  );

  return Array.from({ length: 5 }, (_, i) => {
    const widthJitter = ((baseHash >> (i * 3)) + i * 7) % 30;
    const marginJitter = ((baseHash >> (i * 2)) + i * 5) % 20;

    return {
      width: `${40 + widthJitter}%`,
      animationDelay: `${i * 0.25}s`,
      marginLeft: `${marginJitter}%`,
      opacity: 0,
    };
  });
}

export function ServiceCard({
  name,
  description,
  icon: Icon,
  gradient,
  href,
  features = [],
}: ServiceCardProps) {
  // Stable line styles avoid hydration mismatch caused by Math.random() in render.
  const lineStyles = getDeterministicLineStyles(`${name}-${href}`);

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] hover:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'
      )}
    >
      {/* Header with Gradient and Icon */}
      <div
        className={cn(
          'relative flex h-40 items-center justify-center bg-gradient-to-br overflow-hidden',
          gradient
        )}
      >
        {/* Animated code lines background */}
        <div className="absolute inset-x-0 top-0 flex h-full flex-col items-center justify-center gap-2 overflow-hidden opacity-30 pointer-events-none">
          {lineStyles.map((lineStyle, i) => (
            <div
              key={i}
              className="h-2 rounded-sm bg-white/30 animate-[slideIn_2s_ease-in-out_infinite]"
              style={lineStyle}
            />
          ))}
        </div>

        {/* Icon Container */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-lg border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
            {name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>

        {/* Features List */}
        {features.length > 0 && (
          <div className="space-y-2 pt-2">
            {features.map((feature, i) => (
               <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-500/50" />
                  <span>{feature}</span>
               </div>
            ))}
          </div>
        )}
        
         {/* Learn More Link (Visual only) */}
        <div className="mt-auto pt-4 flex items-center text-sm font-medium text-brand-600 dark:text-brand-400 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
      
       <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </Link>
  );
}
