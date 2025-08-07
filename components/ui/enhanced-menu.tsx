"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, Variants, Transition } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface MenuItem {
  icon: LucideIcon | React.FC
  label: string
  href: string
  gradient: string
  iconColor: string
}

interface EnhancedMenuBarProps extends React.HTMLAttributes<HTMLElement> {
  items: MenuItem[]
  activeItem?: string
  onItemClick?: (label: string) => void
}

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
      scale: { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

const sharedTransition: Transition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export const EnhancedMenuBar = React.forwardRef<HTMLElement, EnhancedMenuBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    const { theme } = useTheme()
    const pathname = usePathname()
    const isDarkTheme = theme === "dark"

    // Determine active item based on pathname if not explicitly set
    const getActiveItem = () => {
      if (activeItem) return activeItem
      
      const currentItem = items.find(item => {
        if (item.href === "/" && pathname === "/") return true
        if (item.href !== "/" && pathname.startsWith(item.href)) return true
        return false
      })
      
      return currentItem?.label || items[0]?.label
    }

    const currentActiveItem = getActiveItem()

    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-2 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden",
          isDarkTheme 
            ? "from-white/10 to-white/5 border-white/20" 
            : "from-black/10 to-black/5 border-black/20",
          className,
        )}
        initial="initial"
        whileHover="hover"
        style={props.style}
        id={props.id}
        role={props.role}
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
      >
        <motion.div
          className={`absolute -inset-4 bg-gradient-radial from-transparent ${
            isDarkTheme
              ? "via-blue-500/40 via-25% via-purple-500/40 via-50% via-pink-500/40 via-75%"
              : "via-blue-400/30 via-25% via-purple-400/30 via-50% via-pink-400/30 via-75%"
          } to-transparent rounded-3xl z-0 pointer-events-none blur-xl`}
          variants={navGlowVariants}
        />
        <motion.div
          className={`absolute -inset-2 bg-gradient-radial from-transparent ${
            isDarkTheme
              ? "via-blue-400/20 via-30% via-purple-400/20 via-60% via-pink-400/20 via-90%"
              : "via-blue-300/15 via-30% via-purple-300/15 via-60% via-pink-300/15 via-90%"
          } to-transparent rounded-3xl z-0 pointer-events-none`}
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-2 relative z-10">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = item.label === currentActiveItem

            return (
              <motion.li key={item.label} className="relative">
                <Link
                  href={item.href}
                  onClick={() => onItemClick?.(item.label)}
                  className="block w-full"
                >
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 1 : 0,
                        borderRadius: "16px",
                      }}
                    />
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl",
                        isActive
                          ? "text-white"
                          : "text-white/70 group-hover:text-white",
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.iconColor : "text-white/70",
                          `group-hover:${item.iconColor}`,
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl",
                        isActive
                          ? "text-white"
                          : "text-white/70 group-hover:text-white",
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.iconColor : "text-white/70",
                          `group-hover:${item.iconColor}`,
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>
    )
  },
)

EnhancedMenuBar.displayName = "EnhancedMenuBar"