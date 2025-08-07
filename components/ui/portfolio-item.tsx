'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ExternalLink, Github, Eye, Calendar, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectCategory } from "@/lib/types"

interface PortfolioItemProps {
  id: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl: string
  featured?: boolean
  completedDate?: string
  client?: string
  delay?: number
}

const cardVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

const overlayVariants: Variants = {
  initial: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

const techVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + (index * 0.05),
      duration: 0.3
    }
  })
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

export function PortfolioItem({
  id,
  title,
  description,
  image,
  category,
  technologies,
  liveUrl,
  githubUrl,
  caseStudyUrl,
  featured = false,
  completedDate,
  client,
  delay = 0
}: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const categoryStyle = categoryColors[category]

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${delay}ms`
      }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
        
        {/* Featured Badge */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ delay: delay * 0.001 + 0.3 }}
            className="absolute top-4 -right-2 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-l-full shadow-lg"
          >
            <Award className="inline h-3 w-3 mr-1" />
            Featured
          </motion.div>
        )}

        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <motion.div
            variants={imageVariants}
            className="relative w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className={cn(
                "object-cover transition-all duration-700",
                imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
              )}
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={featured}
            />
            
            {/* Loading placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
            )}
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3"
          >
            <Link href={caseStudyUrl}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
              >
                <Eye className="h-5 w-5" />
              </motion.button>
            </Link>
            
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.button>
              </a>
            )}
            
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.button>
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay * 0.001 + 0.1 }}
                className="text-lg font-bold text-white mb-1 line-clamp-1"
              >
                {title}
              </motion.h3>
              
              {client && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay * 0.001 + 0.15 }}
                  className="text-sm text-white/60"
                >
                  for {client}
                </motion.p>
              )}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay * 0.001 + 0.2 }}
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium border",
                categoryStyle.bg,
                categoryStyle.text,
                categoryStyle.border
              )}
            >
              {category === 'ui-ux' ? 'UI/UX' : category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay * 0.001 + 0.2 }}
            className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2"
          >
            {description}
          </motion.p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 4).map((tech, index) => (
              <motion.span
                key={tech}
                variants={techVariants}
                initial="initial"
                animate="animate"
                custom={index}
                className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-md border border-white/20"
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 4 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay * 0.001 + 0.4 }}
                className="px-2 py-1 text-xs bg-white/5 text-white/60 rounded-md border border-white/10"
              >
                +{technologies.length - 4}
              </motion.span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {completedDate && (
              <div className="flex items-center gap-1 text-xs text-white/50">
                <Calendar className="h-3 w-3" />
                {new Date(completedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short' 
                })}
              </div>
            )}
            
            <Link href={caseStudyUrl} className="ml-auto">
              <motion.button
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 2 }}
              >
                View Case Study →
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-white/20"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

// Portfolio Grid Component
interface PortfolioGridProps {
  children: React.ReactNode
  className?: string
}

export function PortfolioGrid({ children, className }: PortfolioGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
      className
    )}>
      {children}
    </div>
  )
}

// Category Filter Component
interface CategoryFilterProps {
  categories: ProjectCategory[]
  activeCategory: ProjectCategory | 'all'
  onCategoryChange: (category: ProjectCategory | 'all') => void
  className?: string
}

export function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className 
}: CategoryFilterProps) {
  const allCategories: (ProjectCategory | 'all')[] = ['all', ...categories]
  
  const getCategoryLabel = (category: ProjectCategory | 'all') => {
    if (category === 'all') return 'All Projects'
    if (category === 'ui-ux') return 'UI/UX Design'
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {allCategories.map((category) => {
        const isActive = category === activeCategory
        const categoryStyle = category !== 'all' ? categoryColors[category] : {
          bg: "bg-white/10",
          text: "text-white",
          border: "border-white/20"
        }

        return (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200",
              isActive 
                ? `${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}` 
                : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white/80"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {getCategoryLabel(category)}
          </motion.button>
        )
      })}
    </div>
  )
}