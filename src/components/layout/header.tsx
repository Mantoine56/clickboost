"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Search,
  Bot,
  Smartphone,
  Code,
  ShoppingBag,
  Stethoscope,
  Scale,
  ShoppingCart,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  {
    name: "Web Development",
    href: "/services/web-development",
    icon: Globe,
    description: "Custom websites & web apps",
  },
  {
    name: "SEO & Digital Growth",
    href: "/services/seo",
    icon: Search,
    description: "Technical SEO & content strategy",
  },
  {
    name: "AI Implementation",
    href: "/services/ai-implementation",
    icon: Bot,
    description: "AI agents & workflow automation",
  },
  {
    name: "App Development",
    href: "/services/app-development",
    icon: Smartphone,
    description: "Mobile apps & SaaS platforms",
  },
  {
    name: "WordPress",
    href: "/services/wordpress",
    icon: Code,
    description: "WordPress expertise & custom builds",
  },
  {
    name: "Shopify",
    href: "/services/shopify",
    icon: ShoppingBag,
    description: "E-commerce & Shopify stores",
  },
];

const industries = [
  {
    name: "Healthcare & Wellness",
    href: "/industries/healthcare",
    icon: Stethoscope,
  },
  { name: "Legal", href: "/industries/legal", icon: Scale },
  {
    name: "E-commerce & Retail",
    href: "/industries/ecommerce",
    icon: ShoppingCart,
  },
  { name: "Real Estate", href: "/industries/real-estate", icon: Building2 },
];

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/50 shadow-elevation-1"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-wide flex h-16 items-center justify-between lg:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 text-xl font-bold tracking-tight"
        >
          <span className="text-gradient">Click</span>
          <span className="text-foreground">Boost</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-[480px] -translate-x-1/2 pt-2"
                >
                  <div className="rounded-xl border border-border bg-popover p-4 shadow-elevation-3">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-500/10 text-brand-500">
                            <item.icon
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {item.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 border-t border-border pt-3">
                      <Link
                        href="/services"
                        className="flex items-center text-sm font-medium text-brand-500 hover:text-brand-400"
                      >
                        View all services &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-2"
                >
                  <div className="rounded-xl border border-border bg-popover p-2 shadow-elevation-3">
                    {industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                      >
                        <item.icon
                          className="h-4 w-4 text-brand-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-brand-500 text-white hover:bg-brand-600 glow sm:inline-flex"
          >
            <Link href="/contact">Book Strategy Session</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left font-bold tracking-tight">
                  <span className="text-gradient">Click</span>
                  <span className="text-foreground">Boost</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-1">
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </p>
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <item.icon
                      className="h-4 w-4 text-brand-500"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}

                <div className="my-2 border-t border-border" />

                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Industries
                </p>
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    <item.icon
                      className="h-4 w-4 text-brand-500"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}

                <div className="my-2 border-t border-border" />

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="my-2 border-t border-border" />

                <div className="px-3">
                  <Button
                    asChild
                    className="w-full bg-brand-500 text-white hover:bg-brand-600 glow"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                    >
                      Book Strategy Session
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
