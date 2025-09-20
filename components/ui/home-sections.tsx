"use client"
import { motion, Variants, useReducedMotion } from "framer-motion"
import {
  Sparkles,
  Handshake,
  Layers,
  TrendingUp,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  LayoutDashboard,
  Server,
  Smartphone,
  Cloud,
  Gauge,
  Quote,
  Star,
  LucideIcon,
  ShieldCheck,
  Workflow
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  HomeStat,
  Differentiator,
  ProcessStep,
  TechCategory,
  Testimonial,
  TrustedPartner
} from "@/lib/types"

const iconRegistry: Record<string, LucideIcon> = {
  Sparkles,
  Handshake,
  Layers,
  TrendingUp,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  LayoutDashboard,
  Server,
  Smartphone,
  Cloud,
  Gauge,
  ShieldCheck,
  Workflow
}

function resolveIcon(name: string | undefined): LucideIcon {
  if (!name) {
    return Sparkles
  }

  const Icon = iconRegistry[name]
  return Icon ?? Sparkles
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export function StatsShowcase({ stats, className }: { stats: HomeStat[]; className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
        className
      )}
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={prefersReducedMotion ? undefined : itemVariants}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-xl"
        >
          <div className="text-4xl font-bold text-white md:text-5xl">{stat.value}</div>
          <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-blue-300/80">
            {stat.label}
          </div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">{stat.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function DifferentiatorsShowcase({
  differentiators,
  className
}: {
  differentiators: Differentiator[]
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const accentClasses = [
    "from-blue-500/20 via-blue-500/5 to-transparent",
    "from-purple-500/20 via-purple-500/5 to-transparent",
    "from-emerald-500/20 via-emerald-500/5 to-transparent"
  ]

  return (
    <motion.div
      className={cn("grid gap-6 lg:grid-cols-3", className)}
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
    >
      {differentiators.map((item, index) => {
        const Icon = resolveIcon(item.icon)
        const accent = accentClasses[index % accentClasses.length]

        return (
          <motion.div
            key={item.id}
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-0 rounded-3xl opacity-80 transition-opacity duration-500",
                `bg-gradient-to-br ${accent}`
              )}
            />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-white/10 p-3 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <ShieldCheck className="h-5 w-5 text-white/40" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-white/50" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function ProcessTimeline({ steps, className }: { steps: ProcessStep[]; className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("relative", className)}
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-white/10 via-white/20 to-transparent" />
      <div className="space-y-10">
        {steps.map((step, index) => {
          const Icon = resolveIcon(step.icon)

          return (
            <motion.div
              key={step.id}
              variants={prefersReducedMotion ? undefined : itemVariants}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 pl-14 backdrop-blur-xl"
            >
              <div className="absolute left-0 top-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-emerald-500/20 text-white shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/70">
                  {step.duration}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wide text-blue-200/80">
                <Gauge className="h-4 w-4" />
                {step.outcome}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export function TechnologiesShowcase({
  categories,
  className
}: {
  categories: TechCategory[]
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("grid gap-6 lg:grid-cols-2", className)}
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      {categories.map((category, index) => {
        const Icon = resolveIcon(category.icon)

        return (
          <motion.div
            key={category.id}
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl"
          >
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/10 p-3 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-xs uppercase tracking-wide text-white/60">Stack pillar {index + 1}</p>
                  </div>
                </div>
                <Workflow className="h-5 w-5 text-white/30" aria-hidden="true" />
              </div>
              <div className="space-y-4">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-white">{tool.name}</div>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function TrustedBySection({ partners, className }: { partners: TrustedPartner[]; className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl", className)}
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-500/20 p-2 text-blue-200">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
              Trusted by product teams across industries
            </p>
            <p className="text-sm text-white/50">
              Partnerships that span discovery workshops to post-launch growth.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="text-sm font-semibold text-white">{partner.name}</div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{partner.description}</p>
            {partner.tagline && (
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-white/40">
                {partner.tagline}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function formatProjectLabel(projectId?: string) {
  if (!projectId) return undefined
  return projectId
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ")
}

export function TestimonialsShowcase({
  testimonials,
  className
}: {
  testimonials: Testimonial[]
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn("grid gap-6 lg:grid-cols-3", className)}
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      {testimonials.map((testimonial, index) => {
        const projectLabel = formatProjectLabel(testimonial.projectId)

        return (
          <motion.div
            key={testimonial.id}
            variants={prefersReducedMotion ? undefined : itemVariants}
            className={cn(
              "relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-xl",
              index === 0 ? "lg:col-span-1 xl:col-span-1" : ""
            )}
          >
            <Quote className="absolute -top-6 right-6 h-12 w-12 text-white/10" aria-hidden="true" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-white/60">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-300">
                <Star className="h-4 w-4 fill-current" />
                {testimonial.rating.toFixed(1)}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{testimonial.content}</p>
            {projectLabel && (
              <div className="mt-auto flex items-center gap-2 text-xs uppercase tracking-wide text-white/40">
                <ArrowBadge />
                {projectLabel} case study
              </div>
            )}
          </motion.div>
        )
      })}
    </motion.div>
  )
}

function ArrowBadge() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/60">
      <Sparkles className="h-3 w-3" />
    </span>
  )
}
