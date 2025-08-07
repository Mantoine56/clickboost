'use client'

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Code, Briefcase, Users, Mail, Menu, X } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { EnhancedMenuBar } from "@/components/ui/enhanced-menu"
import { NavigationItem } from "@/lib/types"
import { cn } from "@/lib/utils"

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    label: "Services",
    href: "/services",
    icon: Code,
    gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(109,40,217,0) 100%)",
    iconColor: "text-purple-500",
    subItems: [
      {
        label: "Web Development",
        href: "/services/web-development",
        description: "Custom web applications and websites"
      },
      {
        label: "Mobile Development",
        href: "/services/mobile-development",
        description: "iOS and Android mobile apps"
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "User experience and interface design"
      }
    ]
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: Briefcase,
    gradient: "radial-gradient(circle, rgba(6,214,160,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
    iconColor: "text-emerald-500",
  },
  {
    label: "About",
    href: "/about",
    icon: Users,
    gradient: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(217,119,6,0.06) 50%, rgba(180,83,9,0) 100%)",
    iconColor: "text-amber-500",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

interface MainNavigationProps {
  className?: string
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  const handleItemClick = (label: string) => {
    // Close mobile menu when item is clicked
    setIsMobileMenuOpen(false)
    console.log(`Navigating to: ${label}`)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Convert navigation items to EnhancedMenuBar format
  const menuBarItems = navigationItems.map(item => ({
    icon: item.icon!,
    label: item.label,
    href: item.href,
    gradient: item.gradient,
    iconColor: item.iconColor,
  }))

  // Get current active item based on pathname
  const getCurrentActiveItem = () => {
    const currentItem = navigationItems.find(item => {
      if (item.href === "/" && pathname === "/") return true
      if (item.href !== "/" && pathname.startsWith(item.href)) return true
      return false
    })
    return currentItem?.label || "Home"
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className={cn("hidden md:block", className)}>
        <EnhancedMenuBar
          items={menuBarItems}
          onItemClick={handleItemClick}
        />
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", className)}>
        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMobileMenu}
          className="p-3 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/20 via-30% via-purple-400/20 via-60% via-pink-400/20 via-90% to-transparent rounded-3xl z-0 pointer-events-none opacity-0"
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={prefersReducedMotion ? undefined : { rotate: -90, opacity: 0 }}
                  animate={prefersReducedMotion ? undefined : { rotate: 0, opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={prefersReducedMotion ? undefined : { rotate: 90, opacity: 0 }}
                  animate={prefersReducedMotion ? undefined : { rotate: 0, opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: -20, scale: 0.95 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed top-20 left-4 right-4 z-50 p-4 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl"
              >
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon!
                    const isActive = item.label === getCurrentActiveItem()

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleItemClick(item.label)}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-xl transition-all duration-200",
                            isActive
                              ? "bg-white/10 text-white"
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          <div
                            className={cn(
                              "p-2 rounded-lg transition-colors",
                              isActive ? item.iconColor : "text-white/70"
                            )}
                            style={{
                              background: isActive ? item.gradient : 'transparent'
                            }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{item.label}</div>
                            {item.subItems && (
                              <div className="text-sm text-white/50 mt-1">
                                {item.subItems.length} services
                              </div>
                            )}
                          </div>
                        </Link>

                        {/* Sub-items for mobile */}
                        {item.subItems && isActive && (
                          <motion.div
                            initial={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                            animate={prefersReducedMotion ? undefined : { opacity: 1, height: "auto" }}
                            className="ml-6 mt-2 space-y-1"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => handleItemClick(subItem.label)}
                                className="block p-2 text-sm text-white/60 hover:text-white/80 transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

// Export the navigation items for use in other components
export { navigationItems }