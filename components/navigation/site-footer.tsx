import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Users, ArrowUpRight } from "lucide-react"
import { getContactInfo, getServices, getFeaturedProjects } from "@/lib/content"

const socialIconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  dribbble: Users
}

export async function SiteFooter() {
  const [contactInfo, services, featuredProjects] = await Promise.all([
    getContactInfo(),
    getServices(),
    getFeaturedProjects()
  ])

  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: `/services/${service.id}`
  }))

  const projectLinks = featuredProjects.slice(0, 3).map((project) => ({
    label: project.title,
    href: `/portfolio/${project.id}`
  }))

  const utilityLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ]

  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/80 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.2),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(139,92,246,0.18),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-semibold">
              <span className="text-white">Click</span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Boost
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              We help teams design, build, and launch high-impact digital products—faster. From discovery to growth, we are your long-term product partner.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-blue-300" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              {contactInfo.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-blue-300" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-white">
                    {contactInfo.phone}
                  </a>
                </div>
              )}
              {contactInfo.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-300" />
                  <div className="space-y-0.5">
                    <p>{contactInfo.address.street}</p>
                    <p>
                      {contactInfo.address.city}, {contactInfo.address.province}
                    </p>
                    <p>
                      {contactInfo.address.postalCode}, {contactInfo.address.country}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center gap-3">
              {contactInfo.socialMedia.map((social) => {
                const Icon = socialIconMap[social.platform.toLowerCase() as keyof typeof socialIconMap] ?? Users
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/20 hover:text-white"
                    aria-label={social.platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="transition-colors hover:text-white">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">Case studies</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {projectLinks.map((project) => (
                <li key={project.href}>
                  <Link href={project.href} className="transition-colors hover:text-white">
                    {project.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Let’s build together
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Tell us about your product vision and we’ll return a tailored plan within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:text-sm md:flex-row md:items-center md:justify-between">
          <div>
            © {year} ClickBoost. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {utilityLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
