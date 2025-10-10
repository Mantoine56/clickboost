import Link from "next/link";
import { SplineSceneBasic } from "@/components/ui/demo";
import {
  getHeroContent,
  getServices,
  getHomeContent,
  getTestimonials
} from "@/lib/content";
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
  const [hero, services, homeContent, testimonials] = await Promise.all([
    getHeroContent(),
    getServices(),
    getHomeContent(),
    getTestimonials()
  ])

  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-30%] h-[640px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35)_0%,rgba(88,28,135,0.15)_45%,rgba(4,7,18,0)_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[720px] bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.3)_0%,rgba(3,7,18,0.05)_55%,rgba(3,7,18,0)_80%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[480px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22)_0%,rgba(4,7,18,0)_70%)] blur-3xl" />
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

      <div className="relative z-10 space-y-24 pb-16 lg:pb-24">
        {/* Impact Snapshot */}
        <section className="relative isolate -mt-24 px-4 sm:px-6 lg:px-8 before:absolute before:-top-28 before:left-0 before:right-0 before:h-36 before:bg-gradient-to-b before:from-[#040915] before:via-[#040915]/85 before:to-transparent before:content-['']">
          <div className="relative z-10 mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Impact at a glance"
              title="Proven outcomes from idea to launch"
              description="We rally around measurable results—speed to market, user adoption, and the metrics that matter."
            />
            <StatsShowcase stats={homeContent.stats} className="mt-12" />
            <TrustedBySection partners={homeContent.trustedBy} className="mt-12" />
          </div>
        </section>

        {/* Differentiators */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Why teams choose ClickBoost"
              title="Product partners invested in your success metrics"
              description="Strategy, design, and engineering working as one squad to ship experiences that move the needle."
            />
            <DifferentiatorsShowcase differentiators={homeContent.differentiators} className="mt-14" />
          </div>
        </section>

        {/* Services Preview */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <SectionHeader
                eyebrow="Services & capabilities"
                title="Solutions engineered for outcomes"
                description="From zero-to-one product launches to enterprise modernization, we combine strategy, design, and engineering to ship the experiences your users expect."
                align="left"
              />
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                View full services →
              </Link>
            </div>
            <ServiceGrid className="mt-12">
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
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl text-center">
            <SectionHeader
              eyebrow="Delivery framework"
              title="A repeatable playbook from discovery to launch"
              description="Every engagement follows a transparent cadence designed to uncover opportunities fast, ship confidently, and iterate with data-backed decisions."
            />
            <ProcessTimeline steps={homeContent.process} className="mt-14" />
          </div>
        </section>

        {/* Engagement Programs */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Engagement programs"
              title="Choose the collaboration model that fits your roadmap"
              description="Whether you are validating an MVP, leveling up a live product, or modernizing a platform, we tailor squads around the outcomes you need most."
              align="left"
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {homeContent.engagements.map((engagement) => (
                <div
                  key={engagement.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col">
                    <h3 className="text-2xl font-semibold text-white">{engagement.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{engagement.description}</p>
                    <ul className="mt-6 space-y-3 text-sm text-white/80">
                      {engagement.focus.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={engagement.cta.href}
                      className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/20"
                    >
                      {engagement.cta.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Technology & tooling"
              title="A stack built for velocity and scale"
              description="We lean on modern frameworks, best-in-class infrastructure, and automation to deliver features faster—without compromising quality or security."
            />
            <TechnologiesShowcase categories={homeContent.technologies} className="mt-14" />
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Partner stories"
              title="Teams that ship with ClickBoost stay for the long haul"
              description="Hear how we help founders, product leaders, and operations teams translate bold ideas into shipped software."
            />
            <TestimonialsShowcase testimonials={testimonials} className="mt-14" />
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-4 pb-4 sm:px-6 lg:px-8 lg:pb-6 after:absolute after:-bottom-16 after:left-0 after:right-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-[#040915]/80 after:content-['']">
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),rgba(99,102,241,0.08)_45%,rgba(15,23,42,0.8)_85%)] p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold md:text-4xl">Ready to launch your next release?</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Let’s co-create a roadmap, ship a production-ready experience, and build the foundation for continuous delivery.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-8 py-4 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:scale-105"
                  >
                    Book a strategy session
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white/80 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    Explore our work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
};

function SectionHeader({ eyebrow, title, description, align = "center" }: SectionHeaderProps) {
  const isLeft = align === "left";
  return (
    <div
      className={
        isLeft
          ? "max-w-3xl text-center md:max-w-2xl md:text-left"
          : "mx-auto max-w-3xl text-center"
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/60">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-3 text-white/70">{description}</p>
    </div>
  );
}
