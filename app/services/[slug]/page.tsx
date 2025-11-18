import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Code, Smartphone, Palette, Check, ArrowRight, Clock, DollarSign } from "lucide-react"
import { getService } from "@/lib/content"

// Note: Next.js 15 exposes route params as a Promise when used in server components.
interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

const iconMap = {
  Code,
  Smartphone,
  Palette
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} Services - ClickBoost`,
    description: service.fullDescription,
    keywords: service.technologies,
    openGraph: {
      title: `${service.title} Services - ClickBoost`,
      description: service.fullDescription,
      url: `/services/${slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code

  return (
    <div className="min-h-screen bg-black/[0.96] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{ background: service.gradient }}
                  >
                    <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                      {service.title}
                    </h1>
                    <p className="text-lg text-neutral-400 mt-2">
                      Professional {service.title.toLowerCase()} services
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
                  >
                    View Examples
                  </Link>
                </div>
              </div>

              {/* Stats Card */}
              <div className="lg:ml-8">
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Service Details</h3>
                  
                  <div className="space-y-6">
                    {service.startingPrice && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <DollarSign className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60">Starting Price</div>
                          <div className="text-lg font-semibold text-white">{service.startingPrice}</div>
                        </div>
                      </div>
                    )}
                    
                    {service.deliveryTime && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Clock className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60">Typical Timeline</div>
                          <div className="text-lg font-semibold text-white">{service.deliveryTime}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What's Included
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive {service.title.toLowerCase()} service includes everything you need 
                to bring your project to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={feature}
                  className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ background: service.gradient }}
                    >
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{feature}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We work with the latest and most reliable technologies to ensure your project 
                is built for performance, scalability, and future growth.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Let's discuss your {service.title.toLowerCase()} project and create something amazing together. 
                Get a free consultation and detailed project proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}