'use client'

import { useEffect, useMemo, useRef, useState, Suspense, lazy } from 'react'

// Lazy-load Spline client-side. This worked reliably in earlier build.
const Spline = lazy(() => import('@splinetool/react-spline').then(m => ({ default: m.default })))

interface SplineSceneProps {
  scene: string
  className?: string
}

// Lightweight, in-view gated Spline renderer to reduce main thread/GPU usage
export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Respect user preference for reduced motion
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReducedMotion(mq.matches)
      const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
      mq.addEventListener?.('change', handler)
      return () => mq.removeEventListener?.('change', handler)
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsInView(entry.isIntersecting)
      },
      { root: null, threshold: 0.2 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Only render Spline when in view and motion not reduced
    setShouldRender(isInView && !reducedMotion)
  }, [isInView, reducedMotion])

  // Mobile fallback: skip Spline on very small screens
  const isSmallScreen = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 640
  }, [])

  const showSpline = shouldRender && !isSmallScreen

  return (
    <div ref={containerRef} className={className}>
      {showSpline ? (
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><span className="loader" aria-label="loading" /></div>}>
          <Spline scene={scene} className="w-full h-full" />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]">
          <span className="loader" aria-label="loading" />
        </div>
      )}
    </div>
  )
}