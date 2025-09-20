'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, Variants, useReducedMotion } from "framer-motion"
import { LucideIcon, ArrowRight, Check, Code, Smartphone, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  iconName: string
  features: string[]
  gradient: string
  iconColor: string
  href: string
  delay?: number
  startingPrice?: string
  deliveryTime?: string
}

const cardVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20,
    rotateX: 0,
    scale: 1
  },
  animate: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  hover: {
    y: -8,
    rotateX: 5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: { duration: 0.3 }
  }
}

const featureVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + (index * 0.05),
      duration: 0.4
    }
  })
}

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 0.6,
    scale: 1.2,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

export function ServiceCard({
  title,
  description,
  iconName,
  features,
  gradient,
  iconColor,
  href,
  delay = 0,
  startingPrice,
  deliveryTime
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Map string icon names from content to Lucide icons in the client component
  const iconMap: Record<string, LucideIcon> = {
    Code,
    Smartphone,
    Palette,
  }
  const Icon = iconMap[iconName] ?? Code

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : cardVariants}
      initial={prefersReducedMotion ? undefined : "initial"}
      animate={prefersReducedMotion ? undefined : "animate"}
      whileHover={prefersReducedMotion ? undefined : "hover"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity"
      }}
      className="group relative"
    >
      <motion.div
        // Fade-and-lift entrance for the card content with configurable delay
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl backdrop-blur-xl"
      >
        {/* Animated Glow Effect */}
        <motion.div
          className="absolute -inset-4 rounded-3xl blur-xl opacity-0"
          style={{ background: gradient }}
          variants={prefersReducedMotion ? undefined : glowVariants}
          initial={prefersReducedMotion ? undefined : "initial"}
          animate={prefersReducedMotion ? undefined : (isHovered ? "hover" : "initial")}
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          style={{ background: gradient }}
          animate={{ opacity: prefersReducedMotion ? 0 : (isHovered ? 0.1 : 0) }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="p-3 rounded-xl"
              style={{ background: gradient }}
              variants={prefersReducedMotion ? undefined : iconVariants}
            >
              <Icon className={cn("h-6 w-6", iconColor)} />
            </motion.div>
            
            {startingPrice && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.2 }}
                className="text-right"
              >
                <div className="text-sm text-white/60">Starting at</div>
                <div className="text-lg font-semibold text-white">{startingPrice}</div>
              </motion.div>
            )}
          </div>

          {/* Title and Description */}
          <motion.h3
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.1 }}
            className="mb-2 text-xl font-bold text-white"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.15 }}
            className="mb-6 flex-1 text-sm leading-relaxed text-white/70"
          >
            {description}
          </motion.p>

          {/* Features List */}
          <div className="space-y-2 mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={feature}
                variants={prefersReducedMotion ? undefined : featureVariants}
                initial={prefersReducedMotion ? undefined : "initial"}
                animate={prefersReducedMotion ? undefined : "animate"}
                custom={index}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <div className={cn("p-1 rounded-full", iconColor)} style={{ background: gradient }}>
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
            
            {features.length > 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.4 }}
                className="text-xs text-white/50 ml-6"
              >
                +{features.length - 4} more features
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {deliveryTime && (
              <div className="text-xs text-white/60">
                <span className="text-white/40">Timeline:</span> {deliveryTime}
              </div>
            )}
            
            <Link href={href} className="ml-auto">
              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-white/20"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.05, x: 2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              >
                Learn More
                <motion.div
                  animate={prefersReducedMotion ? undefined : { x: isHovered ? 2 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          style={{ 
            background: `linear-gradient(135deg, ${gradient}) border-box`,
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude'
          }}
          animate={{ opacity: prefersReducedMotion ? 0 : (isHovered ? 0.3 : 0) }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

// Grid container for service cards
interface ServiceGridProps {
  children: React.ReactNode
  className?: string
}

export function ServiceGrid({ children, className }: ServiceGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
      className
    )}>
      {children}
    </div>
  )
}