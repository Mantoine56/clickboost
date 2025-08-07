"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"

// Route segment error boundary for App Router pages
// Ensures graceful handling of unexpected errors per-page
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error for observability in development
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black/[0.96] flex items-center justify-center px-6">
      <div className="max-w-lg w-full p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl text-center">
        <div className="mx-auto mb-4 p-3 rounded-xl bg-red-500/20 w-fit">
          <AlertTriangle className="h-6 w-6 text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
        <p className="text-white/70 mb-6">An unexpected error occurred. Please try again.</p>
        <button
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
          onClick={() => reset()}
        >
          <RefreshCw className="h-4 w-4" /> Retry
        </button>
      </div>
    </div>
  )
}


