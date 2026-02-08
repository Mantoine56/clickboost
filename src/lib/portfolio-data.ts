export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  filterCategory: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  features: string[];
  testimonial?: {
    quote: string;
    name: string;
    title: string;
  };
  gradient: string;
}

export const projects: ProjectData[] = [
  {
    slug: "high-ties",
    title: "High Ties",
    category: "E-commerce + POS",
    filterCategory: "E-commerce",
    tagline: "Cannabis dispensary platform with custom POS and full e-commerce",
    description:
      "A complete digital platform for a cannabis dispensary, including a customer-facing e-commerce store, custom point-of-sale system, inventory management, and compliance-ready reporting.",
    challenge:
      "High Ties needed to modernize their entire retail operation — from a dated website with no e-commerce to a fully integrated digital platform. The cannabis industry has strict compliance requirements, and they needed a POS system that could handle age verification, inventory tracking, and tax calculations specific to cannabis retail.",
    solution:
      "We built a complete Shopify-powered e-commerce storefront with custom product filtering, age-gate verification, and real-time inventory sync. Alongside this, we developed a custom POS system (Flutter/Dart) for their physical retail locations, featuring barcode scanning, compliance reporting, and seamless inventory management across online and in-store channels.",
    results: [
      "Online revenue increased by 340% in the first 6 months",
      "Inventory discrepancies reduced by 95% with real-time sync",
      "Average transaction time decreased from 4 minutes to under 90 seconds",
      "Full compliance with all provincial cannabis regulations",
    ],
    techStack: ["Shopify", "Flutter", "Dart", "Firebase", "Node.js", "REST APIs"],
    features: [
      "Custom Shopify storefront with age verification",
      "Real-time inventory sync between online and in-store",
      "Custom POS with barcode scanning",
      "Compliance-ready tax calculations and reporting",
      "Customer loyalty program integration",
      "Multi-location inventory management",
    ],
    testimonial: {
      quote:
        "ClickBoost transformed our online presence completely. Our custom e-commerce platform with integrated POS handles thousands of transactions daily, and our revenue has tripled since launch.",
      name: "Marcus Chen",
      title: "Owner, High Ties",
    },
    gradient: "from-emerald-600 to-teal-700",
  },
  {
    slug: "syndicate-ai",
    title: "SyndicateAI",
    category: "AI + Complex App",
    filterCategory: "AI & Automation",
    tagline: "NFL analytics platform with predictive AI and real-time data agents",
    description:
      "An advanced sports analytics platform using AI/ML models, a custom math engine, and real-time data agents to deliver predictive insights for NFL betting and fantasy sports.",
    challenge:
      "The client envisioned a cutting-edge NFL analytics platform that could process vast amounts of statistical data, run predictive models in real-time, and deliver actionable insights through an intuitive interface. The system needed to handle live game data feeds, complex mathematical models, and serve thousands of concurrent users.",
    solution:
      "We architected a full-stack platform with a Next.js frontend, Python-based ML pipeline, and custom data ingestion agents. The math engine processes player statistics, game conditions, and historical patterns through multiple AI models to generate predictions. Real-time agents monitor live feeds and update predictions on the fly.",
    results: [
      "Prediction accuracy of 67% on player performance metrics",
      "Processes 50,000+ data points per game in real-time",
      "Scaled to 5,000+ active users within 3 months of launch",
      "Average session time of 12+ minutes per user",
    ],
    techStack: [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "TensorFlow",
      "LangChain",
    ],
    features: [
      "AI-powered player performance predictions",
      "Real-time data ingestion from multiple feeds",
      "Custom mathematical modeling engine",
      "Interactive data visualization dashboards",
      "Automated report generation",
      "User portfolio tracking and alerts",
    ],
    testimonial: {
      quote:
        "The AI analytics platform they built gives us a genuine competitive edge. The predictive models and real-time data agents have completely changed how we approach sports analytics.",
      name: "Jordan Williams",
      title: "Founder & CEO, SyndicateAI",
    },
    gradient: "from-brand-600 to-purple-700",
  },
  {
    slug: "darksec",
    title: "DarkSec",
    category: "AI Platform",
    filterCategory: "AI & Automation",
    tagline: "AI-powered executive tech news pipeline with automated curation",
    description:
      "An AI-powered news intelligence platform that automates the ingestion, enrichment, deduplication, and delivery of executive-level technology news using LangGraph, FastAPI, and Supabase.",
    challenge:
      "Executives and decision-makers are drowning in tech news from hundreds of sources. The client needed a system that could automatically collect, deduplicate, enrich, and personalize news feeds — delivering only the most relevant and actionable intelligence to each user.",
    solution:
      "We built an end-to-end AI pipeline using LangGraph for orchestration, with agents handling source ingestion, content enrichment, semantic deduplication, relevance scoring, and personalized delivery. The system processes thousands of articles daily, using NLP to extract key themes, sentiment, and actionable insights.",
    results: [
      "Processes 2,000+ articles daily from 150+ sources",
      "95% deduplication accuracy across sources",
      "Personalized feeds with 89% relevance scores from users",
      "Reduced executive news review time from 2 hours to 15 minutes daily",
    ],
    techStack: [
      "LangGraph",
      "FastAPI",
      "Supabase",
      "Python",
      "OpenAI",
      "Next.js",
      "PostgreSQL",
    ],
    features: [
      "Multi-source automated news ingestion",
      "AI-powered content enrichment and summarization",
      "Semantic deduplication across sources",
      "Personalized relevance scoring per user",
      "Executive dashboard with trend analysis",
      "Automated daily digest delivery",
    ],
    testimonial: {
      quote:
        "DarkSec cut my daily news review from two hours to fifteen minutes. The AI curation is remarkably accurate — it surfaces exactly what I need to know.",
      name: "Elena Vasquez",
      title: "CTO, Enterprise Client",
    },
    gradient: "from-slate-700 to-zinc-800",
  },
  {
    slug: "nimbleneedle",
    title: "NimbleNeedle",
    category: "Web Design + SEO",
    filterCategory: "Web Design",
    tagline: "Tailoring business website with 15+ service pages and local SEO",
    description:
      "A comprehensive website for a tailoring business with over 15 service pages, integrated booking system, Google Reviews integration, and a local SEO strategy that dominates neighborhood search results.",
    challenge:
      "NimbleNeedle had no web presence and was losing customers to competitors with strong local SEO. They needed a professional website that would showcase their services, enable online bookings, and rank for local search terms in their service area.",
    solution:
      "We designed and built a content-rich WordPress website with 15+ individually optimized service pages, each targeting specific local search terms. The site includes an integrated booking system, Google Reviews widget, service area maps, and comprehensive local SEO with Google Business Profile optimization, local citations, and schema markup.",
    results: [
      "Ranked in top 3 for 25+ local tailoring keywords within 4 months",
      "Online bookings increased from 0 to 60% of total appointments",
      "Organic traffic grew 450% in the first 6 months",
      "Google Business Profile views up 300%",
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "Google APIs", "Schema.org"],
    features: [
      "15+ individually optimized service pages",
      "Integrated online booking system",
      "Google Reviews widget and testimonials",
      "Local SEO with schema markup",
      "Service area maps and location pages",
      "Mobile-first responsive design",
    ],
    testimonial: {
      quote:
        "We went from invisible online to the top of Google in our area. The booking system alone has transformed how we run our business.",
      name: "Anika Patel",
      title: "Owner, NimbleNeedle",
    },
    gradient: "from-rose-600 to-pink-700",
  },
  {
    slug: "spec-bot",
    title: "Spec-Bot",
    category: "AI Tool",
    filterCategory: "AI & Automation",
    tagline: "AI-powered specification generator with chat-based workflow",
    description:
      "A SaaS tool that uses GPT-4.1 and LangGraph to guide users through a 3-phase specification creation process — from requirements gathering to design documentation to task breakdown.",
    challenge:
      "Software teams spend weeks writing specification documents that often end up incomplete or misaligned with actual needs. The client wanted an AI tool that could guide non-technical stakeholders through the spec creation process via natural conversation.",
    solution:
      "We built a chat-based application using LangGraph for orchestration and GPT-4.1 for generation. The tool walks users through three phases: Requirements (gathering functional and non-functional requirements through guided questions), Design (generating architecture and UI specifications), and Tasks (breaking specs into actionable development tasks with estimates).",
    results: [
      "Reduces specification creation time from 2 weeks to 2 hours",
      "90%+ user satisfaction rating in beta testing",
      "Generated specs require 40% fewer revisions than manual ones",
    ],
    techStack: ["Next.js", "LangGraph", "OpenAI GPT-4.1", "Python", "FastAPI", "PostgreSQL"],
    features: [
      "Three-phase guided specification workflow",
      "Natural language requirements gathering",
      "Automated architecture diagram generation",
      "Task breakdown with effort estimates",
      "Export to multiple formats (MD, PDF, Jira)",
      "Version history and collaboration",
    ],
    gradient: "from-orange-600 to-amber-700",
  },
  {
    slug: "mariouomo",
    title: "Mariouomo",
    category: "E-commerce + Design",
    filterCategory: "E-commerce",
    tagline: "Luxury men's fashion e-commerce with sophisticated shopping experience",
    description:
      "A premium e-commerce platform for a luxury men's fashion brand, featuring curated collections, editorial content, and a seamless shopping experience that matches the brand's high-end positioning.",
    challenge:
      "Mariouomo needed an online store that reflected the sophistication and exclusivity of their brand. The existing site felt generic and didn't convey the luxury experience their customers expected.",
    solution:
      "We designed and built a custom Shopify Plus storefront with editorial-style product pages, lookbook features, and a refined checkout experience. Every interaction was designed to feel premium — from the smooth page transitions to the carefully crafted product detail pages.",
    results: [
      "Online sales increased 180% within 4 months of launch",
      "Average order value increased by 35%",
      "Bounce rate decreased by 45% compared to previous site",
    ],
    techStack: ["Shopify Plus", "Liquid", "JavaScript", "CSS", "Figma"],
    features: [
      "Editorial product pages with lookbook integration",
      "Custom Shopify Plus checkout experience",
      "Collection-based navigation and filtering",
      "Size guide and fit recommendation tool",
      "Multi-currency support",
      "Sophisticated animation and transitions",
    ],
    gradient: "from-amber-700 to-yellow-800",
  },
  {
    slug: "elysian-wellness",
    title: "Elysian Wellness",
    category: "Healthcare",
    filterCategory: "Web Design",
    tagline: "Physiotherapy and wellness clinic website with service booking",
    description:
      "A professional healthcare website for a physiotherapy and wellness clinic, featuring service descriptions, practitioner profiles, and an integrated booking system.",
    challenge:
      "The clinic needed a modern website that would establish credibility, clearly communicate their range of services, and enable patients to book appointments online.",
    solution:
      "We built a clean, accessible WordPress site with detailed service pages, practitioner bios, patient resources, and a HIPAA-aware booking integration. The design emphasizes trust and professionalism while maintaining warmth.",
    results: [
      "Online bookings grew to represent 55% of all appointments",
      "New patient inquiries increased by 200%",
      "Site load time under 2 seconds on mobile",
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "Booking API"],
    features: [
      "Detailed service and treatment pages",
      "Practitioner profiles and credentials",
      "Integrated appointment booking",
      "Patient resource center",
      "Insurance information section",
      "WCAG 2.1 AA accessible design",
    ],
    gradient: "from-cyan-600 to-blue-700",
  },
  {
    slug: "highties-pos",
    title: "HightiesPOS",
    category: "Custom App",
    filterCategory: "App Development",
    tagline: "Custom Flutter/Dart POS system with barcode scanning",
    description:
      "A custom-built point-of-sale system for cannabis retail, featuring barcode scanning, inventory management, compliance tracking, and real-time reporting.",
    challenge:
      "The dispensary needed a purpose-built POS that could handle cannabis-specific compliance requirements while being fast and intuitive for frontline staff.",
    solution:
      "We developed a cross-platform POS application using Flutter and Dart, with barcode scanning, real-time inventory updates, compliance-ready receipt generation, and integration with the e-commerce backend.",
    results: [
      "Transaction processing time reduced by 60%",
      "Zero compliance violations since implementation",
      "Staff training time reduced to under 30 minutes",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite"],
    features: [
      "Real-time barcode scanning",
      "Cannabis compliance tracking",
      "Multi-location inventory sync",
      "Staff permissions and audit logs",
      "Receipt generation and printing",
      "Daily sales reporting dashboard",
    ],
    gradient: "from-green-600 to-emerald-700",
  },
  {
    slug: "eventzy",
    title: "Eventzy",
    category: "App Development",
    filterCategory: "App Development",
    tagline: "Full-featured event management platform with auth and booking",
    description:
      "A comprehensive event management platform with user authentication, event creation, ticket booking, and attendee management.",
    challenge:
      "The client needed a modern event platform that could handle the full lifecycle from event creation to ticket sales to check-in.",
    solution:
      "We built a full-stack event management app with secure authentication, event CRUD, payment processing, QR-code check-in, and organizer dashboards.",
    results: [
      "Successfully managed 100+ events in first year",
      "Processed $200K+ in ticket sales",
      "95% user satisfaction rating",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    features: [
      "Event creation and management dashboard",
      "Secure ticket purchasing and payment processing",
      "QR code-based event check-in",
      "Attendee management and communication",
      "Analytics and sales reporting",
      "Mobile-responsive design",
    ],
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    slug: "cashme",
    title: "CashMe",
    category: "App Development",
    filterCategory: "App Development",
    tagline: "Business cash income tracking application",
    description:
      "A mobile application for small businesses to track cash income, generate reports, and maintain financial records for tax purposes.",
    challenge:
      "Small business owners who deal primarily in cash needed a simple, fast way to log income and generate reports for their accountants.",
    solution:
      "We built a streamlined mobile app with quick-entry cash logging, categorization, daily/weekly/monthly summaries, and PDF report export.",
    results: [
      "Used by 500+ small business owners",
      "Average of 30 seconds to log a transaction",
      "Tax-season report generation saves hours of manual work",
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "PDF Generation"],
    features: [
      "Quick one-tap income logging",
      "Category-based transaction organization",
      "Daily, weekly, and monthly summaries",
      "PDF report generation for accountants",
      "Data backup and cloud sync",
      "Multi-business support",
    ],
    gradient: "from-emerald-700 to-green-800",
  },
  {
    slug: "dollar-tracker",
    title: "DollarTracker",
    category: "Finance App",
    filterCategory: "App Development",
    tagline: "Personal finance management with daily budget tracking",
    description:
      "A personal finance application that helps users set daily budgets, track spending, and visualize their financial habits over time.",
    challenge:
      "Most budgeting apps are overly complex. Users wanted a simple tool focused on daily spending limits and visual progress tracking.",
    solution:
      "We designed a minimal, intuitive app centered around a daily budget concept with visual indicators, spending streaks, and simple categorization.",
    results: [
      "4.5 star average rating in app store",
      "Users report 20% average reduction in discretionary spending",
      "85% monthly retention rate",
    ],
    techStack: ["React Native", "TypeScript", "SQLite", "Chart.js"],
    features: [
      "Daily budget setting and tracking",
      "Visual spending progress indicators",
      "Category-based expense tracking",
      "Spending streak gamification",
      "Monthly and yearly trend charts",
      "Offline-first with cloud backup",
    ],
    gradient: "from-blue-700 to-indigo-800",
  },
];

export const filterCategories = [
  "All",
  "Web Design",
  "AI & Automation",
  "E-commerce",
  "App Development",
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
