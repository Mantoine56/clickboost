import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, ExternalLink, Github, ArrowLeft, TrendingUp, Users, Clock } from "lucide-react"
import { getPortfolioProject } from "@/lib/content"

// Note: In Next.js 15, route params are provided as a Promise in server components.
// We type them accordingly and `await` where needed to maintain type safety.
interface PortfolioPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getPortfolioProject(slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Case Study | ClickBoost Portfolio`,
    description: project.fullDescription,
    keywords: project.technologies,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.fullDescription,
      url: `/portfolio/${slug}`,
      images: project.images.map(img => ({
        url: img.url,
        alt: img.alt,
      })),
    },
  }
}

const categoryColors = {
  web: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30"
  },
  mobile: {
    bg: "bg-purple-500/20", 
    text: "text-purple-400",
    border: "border-purple-500/30"
  },
  'ui-ux': {
    bg: "bg-emerald-500/20",
    text: "text-emerald-400", 
    border: "border-emerald-500/30"
  },
  consulting: {
    bg: "bg-amber-500/20",
    text: "text-amber-400",
    border: "border-amber-500/30"
  }
}

export default async function PortfolioCaseStudyPage({ params }: PortfolioPageProps) {
  const { slug } = await params
  const project = await getPortfolioProject(slug)

  if (!project) {
    notFound()
  }

  const categoryStyle = categoryColors[project.category]

  return (
    <div className="min-h-screen bg-black/[0.96] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Project Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
                    {project.category === 'ui-ux' ? 'UI/UX Design' : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
                  {project.title}
                </h1>

                {project.client && (
                  <p className="text-xl text-white/60 mb-6">
                    Project for {project.client}
                  </p>
                )}

                <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Calendar className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Completed</div>
                      <div className="font-semibold text-white">
                        {new Date(project.completedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <Users className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Category</div>
                      <div className="font-semibold text-white">
                        {project.category === 'ui-ux' ? 'UI/UX Design' : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="h-5 w-5" />
                      View Live Project
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hero Image */}
              <div className="lg:order-first">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.images[0]?.url || '/placeholder-project.jpg'}
                    alt={project.images[0]?.alt || project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {project.results && project.results.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Project Results
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Measurable outcomes and impact achieved through our solution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.results.map((result, index) => (
                  <div
                    key={result.metric}
                    className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg"
                  >
                    <div className="p-3 rounded-full bg-green-500/20 w-fit mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                    <div className="text-lg font-semibold text-white/80 mb-2">{result.metric}</div>
                    <div className="text-sm text-white/60">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies Used
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The modern tech stack that powered this project.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Project Gallery
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Inspired by This Project?
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Let's create something amazing for your business too. 
                Get started with a free consultation and see how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </a>
                <a
                  href="/portfolio"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
                >
                  View More Projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}