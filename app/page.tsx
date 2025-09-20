import Link from "next/link";
import { SplineSceneBasic } from "@/components/ui/demo";
import {
  getHeroContent,
  getFeaturedProjects,
  getServices,
  getHomeContent,
  getTestimonials
} from "@/lib/content";
import { PortfolioGrid, PortfolioItem } from "@/components/ui/portfolio-item";
import { ServiceGrid, ServiceCard } from "@/components/ui/service-card";
import {
  StatsShowcase,
  DifferentiatorsShowcase,
  ProcessTimeline,
  TechnologiesShowcase,
  TrustedBySection,
  TestimonialsShowcase
} from "@/components/ui/home-sections";

export default async function Home() {
  const [hero, featured, services, homeContent, testimonials] = await Promise.all([
    getHeroContent(),
    getFeaturedProjects(),
    getServices(),
    getHomeContent(),
    getTestimonials()
  ])

  return (
    <div className="relative min-h-screen bg-black/[0.96]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_55%)]" />
      {/* Hero */}
      <section className="relative">
        <SplineSceneBasic
          title={`${hero.title} ${hero.subtitle}`}
          description={hero.description}
          primaryCtaText={hero.primaryCta.text}
          primaryCtaHref={hero.primaryCta.href}
          secondaryCtaText={hero.secondaryCta.text}
          secondaryCtaHref={hero.secondaryCta.href}
        />
      </section>

      {/* Impact Snapshot */}
      <section className="relative -mt-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Impact at a glance
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Proven outcomes from idea to launch
            </h2>
            <p className="mt-3 text-white/70">
              We rally around measurable results—speed to market, user adoption, and the metrics that matter.
            </p>
          </div>
          <StatsShowcase stats={homeContent.stats} />
          <TrustedBySection partners={homeContent.trustedBy} className="mt-10" />
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
              Why teams choose ClickBoost
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Product partners invested in your success metrics
            </h2>
            <p className="mt-3 text-white/70">
              Strategy, design, and engineering working as one squad to ship experiences that move the needle.
            </p>
          </div>
          <DifferentiatorsShowcase differentiators={homeContent.differentiators} className="mt-12" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
                Services & capabilities
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Solutions engineered for outcomes
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                From zero-to-one product launches to enterprise modernization, we combine strategy, design, and engineering to ship the experiences your users expect.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:border-white/20 hover:text-white"
            >
              View full services →
            </Link>
          </div>
          <ServiceGrid>
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                iconName={service.icon}
                features={service.features}
                gradient={service.gradient}
                iconColor={service.iconColor}
                href={`/services/${service.id}`}
                startingPrice={service.startingPrice}
                deliveryTime={service.deliveryTime}
                delay={index * 0.15}
              />
            ))}
          </ServiceGrid>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
            Delivery framework
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            A repeatable playbook from discovery to launch
          </h2>
          <p className="mt-3 text-white/70">
            Every engagement follows a transparent cadence designed to uncover opportunities fast, ship confidently, and iterate with data-backed decisions.
          </p>
          <ProcessTimeline steps={homeContent.process} className="mt-12" />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
                Selected case studies
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Launches that elevated growth and customer experience
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Browse a sample of the platforms, products, and internal tools we have shipped alongside ambitious teams.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:border-white/20 hover:text-white"
            >
              View all projects →
            </Link>
          </div>
          <PortfolioGrid>
            {featured.map((project, index) => (
              <PortfolioItem
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.images[0]?.url || '/placeholder-project.jpg'}
                category={project.category}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                caseStudyUrl={`/portfolio/${project.id}`}
                featured={project.featured}
                completedDate={project.completedDate}
                client={project.client}
                delay={index * 100}
              />
            ))}
          </PortfolioGrid>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
              Technology & tooling
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              A stack built for velocity and scale
            </h2>
            <p className="mt-3 text-white/70">
              We lean on modern frameworks, best-in-class infrastructure, and automation to deliver features faster—without compromising quality or security.
            </p>
          </div>
          <TechnologiesShowcase categories={homeContent.technologies} className="mt-12" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
              Partner stories
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Teams that ship with ClickBoost stay for the long haul
            </h2>
            <p className="mt-3 text-white/70">
              Hear how we help founders, product leaders, and operations teams translate bold ideas into shipped software.
            </p>
          </div>
          <TestimonialsShowcase testimonials={testimonials} className="mt-12" />
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to launch your next release?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Let’s co-create a roadmap, ship a production-ready experience, and build the foundation for continuous delivery.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
              >
                Book a strategy session
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-medium text-white/80 transition-colors duration-200 hover:border-white/30 hover:text-white"
              >
                Explore our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
