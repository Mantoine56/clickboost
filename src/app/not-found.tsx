import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-800/20 via-transparent to-purple-800/20"
        aria-hidden="true"
      />
      <div className="container-tight relative z-10 text-center">
        <p className="text-8xl font-bold text-gradient sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600 glow focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
