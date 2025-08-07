'use client'

import { useState } from "react"
import { Home, Settings, Bell, User } from "lucide-react"
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { MenuBar } from "@/components/ui/glow-menu"
import { MainNavigation } from "@/components/navigation/main-nav"
 
// Spline-based hero section with customizable marketing copy and CTAs
// This remains a client component because it embeds the Spline canvas.
export function SplineSceneBasic({
  title = "Interactive 3D",
  subtitle,
  description = "Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture attention and enhance your design.",
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: {
  title?: string
  subtitle?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}) {
  return (
    <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none shadow-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content: marketing copy */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          {subtitle && (
            <p className="text-blue-400 font-medium mb-2 tracking-wide">{subtitle}</p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {title}
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            {description}
          </p>
          {(primaryCtaText || secondaryCtaText) && (
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {primaryCtaText && primaryCtaHref && (
                <a
                  href={primaryCtaHref}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                >
                  {primaryCtaText}
                </a>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20 w-full sm:w-auto text-center"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

export function MenuBarDemo() {
  return (
    <MainNavigation />
  )
} 