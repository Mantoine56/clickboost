import { Service, PortfolioProject, TeamMember, HeroContent, AboutContent, ContactInfo } from './types'

// Service content utilities
export async function getServices(): Promise<Service[]> {
  const serviceIds = ['web-development', 'mobile-development', 'ui-ux-design']
  
  const services = await Promise.all(
    serviceIds.map(async (id) => {
      const response = await import(`../content/services/${id}.json`)
      return response.default as Service
    })
  )
  
  return services
}

export async function getService(id: string): Promise<Service | null> {
  try {
    const response = await import(`../content/services/${id}.json`)
    return response.default as Service
  } catch (error) {
    return null
  }
}

// Portfolio content utilities
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const projectIds = ['ecommerce-platform', 'fitness-mobile-app', 'saas-dashboard']
  
  const projects = await Promise.all(
    projectIds.map(async (id) => {
      const response = await import(`../content/portfolio/${id}.json`)
      return response.default as PortfolioProject
    })
  )
  
  return projects.sort((a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime())
}

export async function getPortfolioProject(id: string): Promise<PortfolioProject | null> {
  try {
    const response = await import(`../content/portfolio/${id}.json`)
    return response.default as PortfolioProject
  } catch (error) {
    return null
  }
}

export async function getFeaturedProjects(): Promise<PortfolioProject[]> {
  const allProjects = await getPortfolioProjects()
  return allProjects.filter(project => project.featured)
}

export async function getProjectsByCategory(category: string): Promise<PortfolioProject[]> {
  const allProjects = await getPortfolioProjects()
  return allProjects.filter(project => project.category === category)
}

// Team content utilities
export async function getTeamMembers(): Promise<TeamMember[]> {
  const response = await import('../content/team/members.json')
  return response.default.members as TeamMember[]
}

export async function getTeamMember(id: string): Promise<TeamMember | null> {
  const members = await getTeamMembers()
  return members.find(member => member.id === id) || null
}

// Site content utilities
export async function getHeroContent(): Promise<HeroContent> {
  const response = await import('../content/site/hero.json')
  return response.default as HeroContent
}

export async function getAboutContent(): Promise<AboutContent> {
  const response = await import('../content/site/about.json')
  return response.default as AboutContent
}

export async function getContactInfo(): Promise<ContactInfo> {
  const response = await import('../content/site/contact.json')
  return response.default as ContactInfo
}

// Utility functions for filtering and searching
export function filterProjectsByTechnology(projects: PortfolioProject[], technology: string): PortfolioProject[] {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )
}

export function searchProjects(projects: PortfolioProject[], query: string): PortfolioProject[] {
  const lowercaseQuery = query.toLowerCase()
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  )
}

export function getProjectStats(projects: PortfolioProject[]) {
  const totalProjects = projects.length
  const categories = [...new Set(projects.map(p => p.category))]
  const technologies = [...new Set(projects.flatMap(p => p.technologies))]
  const featuredCount = projects.filter(p => p.featured).length
  
  return {
    totalProjects,
    categories: categories.length,
    technologies: technologies.length,
    featuredCount
  }
}