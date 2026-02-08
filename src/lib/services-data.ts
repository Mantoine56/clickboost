import {
  Globe,
  Search,
  Bot,
  Smartphone,
  Code,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  features: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  relatedProjects: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Custom websites and web applications built for performance",
    description:
      "We build modern, fast, accessible websites and web applications using the latest technologies. From marketing sites to complex web apps, every project is crafted for performance, SEO, and conversion.",
    icon: Globe,
    gradient: "from-blue-600 to-cyan-600",
    features: [
      {
        title: "Custom Next.js & React Development",
        description:
          "Server-rendered, blazing-fast applications with React 19 and Next.js App Router.",
      },
      {
        title: "Responsive & Mobile-First Design",
        description:
          "Every pixel optimized for all screen sizes, from mobile to ultrawide.",
      },
      {
        title: "Performance Optimization",
        description:
          "Lighthouse 95+ scores with Core Web Vitals in green across all metrics.",
      },
      {
        title: "CMS Integration",
        description:
          "Headless CMS setups with Contentful, Sanity, or Strapi for easy content management.",
      },
      {
        title: "E-commerce Solutions",
        description:
          "Full e-commerce builds with Stripe, Shopify Storefront API, or custom checkout.",
      },
      {
        title: "API Development & Integration",
        description:
          "REST and GraphQL APIs, third-party integrations, and webhook workflows.",
      },
      {
        title: "Accessibility (WCAG 2.1 AA)",
        description:
          "Semantic HTML, ARIA labels, keyboard navigation, and screen reader support.",
      },
      {
        title: "Deployment & DevOps",
        description:
          "CI/CD pipelines, Vercel/AWS hosting, monitoring, and analytics integration.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We audit your current site, analyze competitors, and define goals, user personas, and technical requirements.",
      },
      {
        step: 2,
        title: "Design & Prototype",
        description:
          "High-fidelity designs in Figma, interactive prototypes, and design system creation for consistent UI.",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "Agile sprints with weekly demos. Automated testing, code reviews, and performance benchmarking.",
      },
      {
        step: 4,
        title: "Launch & Optimize",
        description:
          "Zero-downtime deployment, SEO setup, analytics, and ongoing performance optimization.",
      },
    ],
    relatedProjects: ["High Ties", "NimbleNeedle", "Elysian Wellness"],
  },
  {
    slug: "seo",
    name: "SEO & Digital Growth",
    tagline: "Data-driven strategies that deliver measurable organic growth",
    description:
      "We combine technical SEO, content strategy, and digital marketing to drive sustainable organic growth. Our approach is ROI-first — every action is tied to measurable business outcomes.",
    icon: Search,
    gradient: "from-emerald-600 to-green-600",
    features: [
      {
        title: "Technical SEO Audits",
        description:
          "Comprehensive site audits covering crawlability, indexation, Core Web Vitals, and structured data.",
      },
      {
        title: "On-Page Optimization",
        description:
          "Title tags, meta descriptions, heading structure, internal linking, and content optimization.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile optimization, local citations, reviews strategy, and local schema markup.",
      },
      {
        title: "Content Strategy",
        description:
          "Keyword research, content calendars, blog strategy, and pillar/cluster content architecture.",
      },
      {
        title: "Programmatic SEO",
        description:
          "Scalable page generation for city, service, and comparison pages with unique, valuable content.",
      },
      {
        title: "Link Building & Digital PR",
        description:
          "White-hat link acquisition through content marketing, guest posting, and digital PR campaigns.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Audit & Analysis",
        description:
          "Technical audit, keyword gap analysis, competitor research, and opportunity identification.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description:
          "Custom SEO roadmap with prioritized actions, timeline, and projected impact on traffic and revenue.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "On-page fixes, technical improvements, content creation, and schema markup deployment.",
      },
      {
        step: 4,
        title: "Monitor & Iterate",
        description:
          "Monthly reporting, rank tracking, traffic analysis, and continuous strategy refinement.",
      },
    ],
    relatedProjects: ["NimbleNeedle", "High Ties", "Elysian Wellness"],
  },
  {
    slug: "ai-implementation",
    name: "AI Implementation",
    tagline: "Intelligent automation that transforms how your business operates",
    description:
      "We build custom AI solutions — from conversational agents to workflow automation — that solve real business problems. Our AI implementations are practical, scalable, and designed for measurable ROI.",
    icon: Bot,
    gradient: "from-brand-600 to-purple-600",
    features: [
      {
        title: "Custom AI Agents",
        description:
          "Multi-step AI agents using LangGraph, CrewAI, or custom orchestration for complex workflows.",
      },
      {
        title: "Workflow Automation",
        description:
          "End-to-end process automation with AI-powered decision making and human-in-the-loop controls.",
      },
      {
        title: "AI Chatbots & Assistants",
        description:
          "Intelligent chatbots trained on your data for customer support, sales, and internal knowledge bases.",
      },
      {
        title: "Data Analysis & Insights",
        description:
          "AI-powered analytics dashboards, predictive models, and automated reporting systems.",
      },
      {
        title: "Document Processing",
        description:
          "Automated document extraction, classification, and summarization using vision and NLP models.",
      },
      {
        title: "AI Strategy Consulting",
        description:
          "Technology assessment, use case identification, and implementation roadmap for AI adoption.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Use Case Discovery",
        description:
          "Identify high-impact AI opportunities in your workflows through stakeholder interviews and process mapping.",
      },
      {
        step: 2,
        title: "Proof of Concept",
        description:
          "Rapid prototype to validate the approach, demonstrate value, and refine requirements.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "Production-grade development with your existing tools, APIs, and data sources. Security-first approach.",
      },
      {
        step: 4,
        title: "Deploy & Optimize",
        description:
          "Monitoring, evaluation metrics, continuous model improvement, and team training.",
      },
    ],
    relatedProjects: ["SyndicateAI", "Spec-Bot", "DarkSec"],
  },
  {
    slug: "app-development",
    name: "App Development",
    tagline: "Mobile apps and SaaS platforms built for scale",
    description:
      "We design and develop mobile applications, SaaS platforms, and custom business tools. Cross-platform or native, every app is built with robust architecture and exceptional user experience.",
    icon: Smartphone,
    gradient: "from-orange-600 to-rose-600",
    features: [
      {
        title: "Cross-Platform Mobile Apps",
        description:
          "React Native and Flutter apps that deliver native performance on iOS and Android.",
      },
      {
        title: "SaaS Platform Development",
        description:
          "Multi-tenant architectures with billing, user management, and scalable infrastructure.",
      },
      {
        title: "Custom Business Tools",
        description:
          "Internal tools, dashboards, and workflow apps tailored to your exact business processes.",
      },
      {
        title: "POS Systems",
        description:
          "Custom point-of-sale systems with barcode scanning, inventory management, and reporting.",
      },
      {
        title: "API Integrations",
        description:
          "Connect your app with payment gateways, CRMs, ERPs, and third-party services.",
      },
      {
        title: "Real-Time Features",
        description:
          "WebSocket-powered live updates, notifications, chat, and collaborative features.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirements & Architecture",
        description:
          "Define features, user flows, and technical architecture. Choose the optimal tech stack for your needs.",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description:
          "User research, wireframes, high-fidelity mockups, and interactive prototypes for user testing.",
      },
      {
        step: 3,
        title: "Agile Development",
        description:
          "Two-week sprints with continuous delivery. Regular demos and feedback loops.",
      },
      {
        step: 4,
        title: "Launch & Scale",
        description:
          "App store submission, monitoring, crash reporting, and iterative feature development.",
      },
    ],
    relatedProjects: ["HightiesPOS", "Eventzy", "CashMe"],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    tagline: "Professional WordPress solutions with modern best practices",
    description:
      "WordPress powers 40%+ of the web for a reason. We deliver professional WordPress websites with custom themes, optimized performance, and robust security — without the typical WordPress bloat.",
    icon: Code,
    gradient: "from-sky-600 to-blue-700",
    features: [
      {
        title: "Custom Theme Development",
        description:
          "Bespoke themes built from scratch — no bloated page builders. Clean code, fast loading.",
      },
      {
        title: "WooCommerce Stores",
        description:
          "Full-featured e-commerce with custom checkout flows, payment integrations, and inventory management.",
      },
      {
        title: "Plugin Development",
        description:
          "Custom WordPress plugins for unique functionality and third-party integrations.",
      },
      {
        title: "Performance Optimization",
        description:
          "Caching, image optimization, CDN setup, and database optimization for sub-second load times.",
      },
      {
        title: "Security Hardening",
        description:
          "WAF configuration, malware scanning, SSL setup, and security best practices implementation.",
      },
      {
        title: "Migration & Redesign",
        description:
          "Seamless migrations from any platform with zero downtime and full SEO preservation.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Planning & Design",
        description:
          "Content strategy, sitemap, wireframes, and visual design that aligns with your brand.",
      },
      {
        step: 2,
        title: "Custom Development",
        description:
          "Theme development, plugin integration, and custom functionality built to WordPress best practices.",
      },
      {
        step: 3,
        title: "Content & SEO Setup",
        description:
          "Content migration, SEO configuration, schema markup, and sitemap generation.",
      },
      {
        step: 4,
        title: "Launch & Maintenance",
        description:
          "Staging review, go-live, monitoring, and optional ongoing maintenance and updates.",
      },
    ],
    relatedProjects: ["NimbleNeedle", "Elysian Wellness"],
  },
  {
    slug: "shopify",
    name: "Shopify",
    tagline: "E-commerce experiences that convert browsers into buyers",
    description:
      "We build high-converting Shopify stores with custom themes, app integrations, and optimized checkout flows. Whether you're launching your first store or scaling to millions, we've got the expertise.",
    icon: ShoppingBag,
    gradient: "from-lime-600 to-green-700",
    features: [
      {
        title: "Custom Shopify Themes",
        description:
          "Unique, brand-aligned designs built with Shopify's Online Store 2.0 and Liquid templating.",
      },
      {
        title: "Shopify Plus Solutions",
        description:
          "Enterprise-grade setups with custom checkout, Shopify Scripts, and multi-currency support.",
      },
      {
        title: "App Integration & Custom Apps",
        description:
          "Connect with ERP, CRM, and marketing tools. Build custom Shopify apps for unique needs.",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "A/B testing, checkout optimization, upsell flows, and abandoned cart recovery.",
      },
      {
        title: "Inventory & Order Management",
        description:
          "Multi-location inventory, automated fulfillment, and POS integration for retail stores.",
      },
      {
        title: "Shopify SEO",
        description:
          "Product schema, collection optimization, blog strategy, and technical SEO for Shopify.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Store Strategy",
        description:
          "Product catalog planning, navigation structure, and conversion-focused layout design.",
      },
      {
        step: 2,
        title: "Theme Development",
        description:
          "Custom Liquid theme built for speed, mobile experience, and brand consistency.",
      },
      {
        step: 3,
        title: "Product & Content Setup",
        description:
          "Product imports, collection structure, SEO content, and app configuration.",
      },
      {
        step: 4,
        title: "Launch & Grow",
        description:
          "Pre-launch checklist, payment testing, marketing setup, and analytics configuration.",
      },
    ],
    relatedProjects: ["High Ties", "Mariouomo"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
