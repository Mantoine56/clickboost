'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export interface FlipCardProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  href: string;
}

const CODE_LINES_COUNT = 5;

function hashToUnitInterval(value: string): number {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  return ((hash >>> 0) % 10_000) / 10_000;
}

function getCodeLineStyles(seed: string) {
  return Array.from({ length: CODE_LINES_COUNT }, (_, index) => {
    const width = 40 + hashToUnitInterval(`${seed}-width-${index}`) * 30;
    const marginLeft =
      hashToUnitInterval(`${seed}-offset-${index}`) * 20;

    return {
      width: `${width.toFixed(4)}%`,
      animationDelay: `${index * 0.25}s`,
      marginLeft: `${marginLeft.toFixed(4)}%`,
      opacity: 0,
    };
  });
}

export function FlipCard({
  name,
  tagline,
  description,
  features,
  icon: Icon,
  gradient,
  accentColor,
  href,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') return false;

    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);
  const codeLineStyles = useMemo(() => getCodeLineStyles(name), [name]);

  const handleClick = () => {
    if (isTouchDevice) {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
    if (e.key === 'Escape' && isFlipped) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      style={{ ['--accent' as string]: accentColor }}
      className="group/flip relative h-[400px] w-full [perspective:2000px] hover:z-10"
      role="button"
      tabIndex={0}
      aria-label={`${name}. ${isFlipped ? 'Showing details. Press Escape to go back.' : 'Press Enter to see details.'}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]'
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-xl',
            'bg-card border border-border',
            'shadow-elevation-1',
            'transition-all duration-700',
            'group-hover/flip:shadow-elevation-2',
            isFlipped ? 'opacity-0' : 'opacity-100'
          )}
        >
          {/* Gradient header with icon */}
          <div
            className={cn(
              'flex h-40 items-center justify-center bg-gradient-to-br',
              gradient
            )}
          >
            {/* Animated code lines behind icon */}
            <div className="absolute inset-x-0 top-0 flex h-40 flex-col items-center justify-center gap-2 overflow-hidden opacity-30">
              {codeLineStyles.map((lineStyle, i) => (
                <div
                  key={i}
                  className="h-2 rounded-sm bg-white/30 animate-[slideIn_2s_ease-in-out_infinite]"
                  style={lineStyle}
                />
              ))}
            </div>

            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-lg transition-transform duration-500 group-hover/flip:scale-110 group-hover/flip:rotate-6">
              <Icon className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
          </div>

          {/* Bottom content */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg font-semibold tracking-tight text-foreground transition-transform duration-500 ease-out group-hover/flip:-translate-y-1">
              {name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground transition-transform delay-[50ms] duration-500 ease-out group-hover/flip:-translate-y-1">
              {tagline}
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-xl p-5',
            'bg-card border border-border',
            'shadow-elevation-1',
            'flex flex-col',
            'transition-all duration-700',
            'group-hover/flip:shadow-elevation-2',
            !isFlipped ? 'opacity-0' : 'opacity-100'
          )}
        >
          <div className="flex-1 space-y-4">
            {/* Header */}
            <div className="space-y-2">
              <div className="mb-2 flex items-center gap-2.5">
                <div
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br',
                    gradient
                  )}
                >
                  <Icon className="h-4.5 w-4.5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {name}
                </h3>
              </div>
              <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2.5">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                  style={{
                    transform: isFlipped
                      ? 'translateX(0)'
                      : 'translateX(-10px)',
                    opacity: isFlipped ? 1 : 0,
                    transition: 'all 0.5s ease',
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <div
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-auto border-t border-border pt-4">
            <Link
              href={href}
              className={cn(
                'group/cta relative',
                'flex items-center justify-between',
                'rounded-lg p-2.5',
                'transition-all duration-300',
                'bg-muted/50 hover:bg-[--accent]/10',
                'hover:scale-[1.02]',
                'border border-transparent hover:border-[--accent]/20',
                'focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover/cta:text-[--accent]">
                Learn More
              </span>
              <ArrowRight
                className="h-4 w-4 transition-all duration-300 group-hover/cta:translate-x-1"
                style={{ color: accentColor }}
                aria-hidden="true"
              />
            </Link>
          </div>
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
    </div>
  );
}
