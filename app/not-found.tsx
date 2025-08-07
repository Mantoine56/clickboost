import Link from "next/link"
import { Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black/[0.96] flex items-center justify-center px-6">
      <div className="max-w-lg w-full p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl text-center">
        <div className="mx-auto mb-4 p-3 rounded-xl bg-white/15 w-fit">
          <Search className="h-6 w-6 text-white/80" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Page not found</h1>
        <p className="text-white/70 mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/services"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
          >
            View services
          </Link>
        </div>
      </div>
    </div>
  )
}


