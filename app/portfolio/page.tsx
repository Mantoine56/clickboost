'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { PortfolioItem, PortfolioGrid, CategoryFilter } from "@/components/ui/portfolio-item"
import { getPortfolioProjects } from "@/lib/content"
import { PortfolioProject, ProjectCategory } from "@/lib/types"

// Note: This would normally be handled server-side, but for filtering we need client-side state
export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [filteredProjects, setFilteredProjects] = useState<PortfolioProject[]>([])
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const portfolioProjects = await getPortfolioProjects()
        setProjects(portfolioProjects)
        setFilteredProjects(portfolioProjects)
      } catch (error) {
        console.error('Failed to load portfolio projects:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProjects()
  }, [])

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory))
    }
  }, [activeCategory, projects])

  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    setActiveCategory(category)
  }

  const categories = Array.from(new Set(projects.map(project => project.category))) as ProjectCategory[]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black/[0.96] relative flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading portfolio...</p>
        </div>
      </div>
    )
  }

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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6"
            >
              Our Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Explore our collection of successful projects. From web applications to mobile apps 
              and stunning user interfaces, see how we've helped businesses transform their digital presence.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{projects.length}+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{categories.length}</div>
                <div className="text-sm text-white/60">Service Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{projects.filter(p => p.featured).length}</div>
                <div className="text-sm text-white/60">Featured Projects</div>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                className="justify-center"
              />
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.length > 0 ? (
                  <PortfolioGrid>
                    {filteredProjects.map((project, index) => (
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
                        delay={index * 0.1}
                      />
                    ))}
                  </PortfolioGrid>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
                    <p className="text-white/60">
                      No projects match the selected category. Try selecting a different category.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Let's discuss your project and create a digital solution that stands out. 
                Get started with a free consultation and see how we can help bring your vision to life.
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
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}