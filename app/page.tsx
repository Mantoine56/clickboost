import { SplineSceneBasic } from "@/components/ui/demo";
import { getHeroContent, getFeaturedProjects, getServices } from "@/lib/content";
import { PortfolioGrid, PortfolioItem } from "@/components/ui/portfolio-item";
import { ServiceGrid, ServiceCard } from "@/components/ui/service-card";

export default async function Home() {
  const hero = await getHeroContent()
  const featured = await getFeaturedProjects()
  const services = await getServices()

  return (
    <div className="min-h-screen bg-black/[0.96] relative">
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

      {/* Services Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Services</h2>
              <p className="text-white/70 mt-2">What we do best</p>
            </div>
            <a href="/services" className="text-white/80 hover:text-white">View all →</a>
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

      {/* Featured Projects */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Featured Work</h2>
              <p className="text-white/70 mt-2">Recent projects we’re proud of</p>
            </div>
            <a href="/portfolio" className="text-white/80 hover:text-white">View portfolio →</a>
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

      {/* CTA */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              We build custom web apps, mobile apps, and world-class UI/UX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">Get a free consultation</a>
              <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20">Explore services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
