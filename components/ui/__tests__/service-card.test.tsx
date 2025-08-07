import { render, screen } from '@testing-library/react'
import { Code } from 'lucide-react'
import { ServiceCard } from '../service-card'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}))

// Mock Next.js Link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('ServiceCard', () => {
  const mockProps = {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: Code,
    features: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    iconColor: 'text-blue-500',
    href: '/services/web-development',
    startingPrice: '$5,000',
    deliveryTime: '4-8 weeks'
  }

  it('renders service card with all props', () => {
    render(<ServiceCard {...mockProps} />)
    
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Custom web applications built with modern technologies')).toBeInTheDocument()
    expect(screen.getByText('$5,000')).toBeInTheDocument()
    expect(screen.getByText('4-8 weeks')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders features list', () => {
    render(<ServiceCard {...mockProps} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('renders without optional props', () => {
    const minimalProps = {
      title: 'Test Service',
      description: 'Test description',
      icon: Code,
      features: ['Feature 1'],
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      iconColor: 'text-blue-500',
      href: '/test'
    }

    render(<ServiceCard {...minimalProps} />)
    
    expect(screen.getByText('Test Service')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
    expect(screen.getByText('Feature 1')).toBeInTheDocument()
  })

  it('shows additional features count when more than 4 features', () => {
    const propsWithManyFeatures = {
      ...mockProps,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6']
    }

    render(<ServiceCard {...propsWithManyFeatures} />)
    
    expect(screen.getByText('+2 more features')).toBeInTheDocument()
  })
})