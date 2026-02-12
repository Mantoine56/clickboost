'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  gradient: string;
  tags: string[];
  href: string;
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

export function ProjectCard({
  title,
  category,
  description,
  gradient,
  tags,
  href,
}: ProjectCardProps) {
  // Stable line styles avoid hydration mismatch caused by Math.random() in render.
  const lineStyles = getDeterministicLineStyles(`${title}-${href}`);

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-elevation-1 transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] hover:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'
      )}
    >
      {/* Header with Gradient and Animated Lines */}
      <div
        className={cn(
          'relative flex h-48 flex-col justify-between p-6 bg-gradient-to-br overflow-hidden',
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

        {/* Category Badge */}
        <div className="relative z-10 self-start">
           <span className="rounded-lg bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-sm border border-white/10">
            {category}
          </span>
        </div>

        {/* External Link Icon */}
         <div className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="h-4 w-4 text-white" />
         </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
               className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-brand-50 group-hover:text-brand-700 dark:group-hover:bg-brand-500/10 dark:group-hover:text-brand-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
         {/* View Project Link (Visual only, whole card is link) */}
        <div className="flex items-center text-sm font-medium text-brand-600 dark:text-brand-400 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
