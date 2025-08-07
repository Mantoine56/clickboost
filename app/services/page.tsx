import { Metadata } from "next"
import { ServiceCard, ServiceGrid } from "@/components/ui/service-card"
import { getServices } from "@/lib/content"

export const metadata: Metadata = {
  title: "Our Services - Web Development, Mobile Apps & UI/UX Design",
  description: "Professional web development, mobile app development, and UI/UX design services. Transform your ideas into powerful digital solutions with ClickBoost.",
  keywords: ["web development services", "mobile app development", "ui ux design", "custom software development"],
  openGraph: {
    title: "Our Services - ClickBoost",
    description: "Professional web development, mobile app development, and UI/UX design services.",
    url: "/services",
  },
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen bg-black/[0.96] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in creating cutting-edge digital solutions that drive business growth. 
              From custom web applications to mobile apps and stunning user experiences, 
              we bring your vision to life with modern technologies and best practices.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ServiceGrid>
              {services.map((service, index) => (
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
                  delay={index * 0.2}
                />
              ))}
            </ServiceGrid>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Let's discuss your ideas and create something amazing together. 
                Get a free consultation and project estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/portfolio"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}