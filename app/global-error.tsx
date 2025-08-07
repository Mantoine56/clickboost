"use client"

import { AlertTriangle } from "lucide-react"

// Global error boundary for the root layout
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  // eslint-disable-next-line no-console
  console.error("Global error:", error)
  return (
    <html>
      <body>
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center px-6">
          <div className="max-w-lg w-full p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl text-center">
            <div className="mx-auto mb-4 p-3 rounded-xl bg-red-500/20 w-fit">
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Unexpected error</h1>
            <p className="text-white/70">Please refresh the page or return to the homepage.</p>
          </div>
        </div>
      </body>
    </html>
  )
}


