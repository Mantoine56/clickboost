import { LucideIcon } from "lucide-react"

// Core Content Types
export type ProjectCategory = 'web' | 'mobile' | 'ui-ux' | 'consulting'
export type ProjectType = 'web' | 'mobile' | 'ui-ux' | 'other'
export type BudgetRange = 'under-10k' | '10k-25k' | '25k-50k' | '50k+'

// Service Data Model
export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
  technologies: string[]
  startingPrice?: string
  deliveryTime?: string
  gradient: string
  iconColor: string
}

// Portfolio Data Models
export interface ProjectImage {
  url: string
  alt: string
  caption?: string
  type: 'hero' | 'screenshot' | 'mockup'
}

export interface ProjectResult {
  metric: string
  value: string
  description: string
}

export interface PortfolioProject {
  id: string
  title: string
  client?: string
  description: string
  fullDescription: string
  category: ProjectCategory
  technologies: string[]
  images: ProjectImage[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  completedDate: string
  results?: ProjectResult[]
}

// Team Data Models
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  socialLinks: SocialLink[]
}

// Contact Form Data Models
export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: ProjectType
  budget: BudgetRange
  message: string
  timeline?: string
}

// Navigation Data Models
export interface NavigationSubItem {
  label: string
  href: string
  description?: string
}

export interface NavigationItem {
  label: string
  href: string
  icon?: LucideIcon
  gradient: string
  iconColor: string
  subItems?: NavigationSubItem[]
}

// Component Props Interfaces
export interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  gradient: string
  href: string
  delay?: number
}

export interface PortfolioItemProps {
  id: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  technologies: string[]
  liveUrl?: string
  caseStudyUrl: string
  featured?: boolean
}

// Site Content Models
export interface HeroContent {
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
}

export interface AboutContent {
  mission: string
  vision: string
  values: string[]
  story: string
  experience: {
    years: number
    projectsCompleted: number
    clientsSatisfied: number
    technologiesUsed: number
  }
}

export interface ContactInfo {
  email: string
  phone?: string
  address?: {
    street: string
    city: string
    province: string
    postalCode: string
    country: string
  }
  socialMedia: SocialLink[]
  businessHours?: {
    weekdays: string
    weekends: string
  }
}

// Testimonial Models
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  projectId?: string
}

// Blog/Content Models (for future expansion)
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedDate: string
  tags: string[]
  featuredImage?: string
  readTime: number
}

// SEO Metadata Models
export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  twitterImage?: string
  canonical?: string
}

// Form Validation Schemas (for Zod)
export interface FormFieldError {
  field: string
  message: string
}

export interface FormSubmissionResponse {
  success: boolean
  message: string
  errors?: FormFieldError[]
}

// Animation and UI State Models
export interface AnimationConfig {
  duration: number
  delay?: number
  easing: string
}

export interface LoadingState {
  isLoading: boolean
  message?: string
  progress?: number
}

// Content Management Models
export interface ContentUpdate {
  id: string
  type: 'service' | 'portfolio' | 'team' | 'site'
  action: 'create' | 'update' | 'delete'
  data: any
  timestamp: string
  author: string
}