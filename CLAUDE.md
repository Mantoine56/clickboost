# CLAUDE.md — ClickBoost Rebuild Instructions

## Project Overview
Complete rebuild of clickboost.ca — a modern, multi-page marketing website for a web development, SEO, AI implementation, and app development agency.

## CRITICAL RULES
1. **ALWAYS use the `web-design-guidelines` skill** for ALL UI/frontend work. Before writing any component, fetch the guidelines and follow them.
2. **ALWAYS use the `vercel-react-best-practices` skill** for all React/Next.js code. Follow Vercel's performance patterns.
3. Build beautiful, production-quality UI. This site IS a tech demo — it must look incredible.
4. Use semantic HTML, proper accessibility (ARIA), and responsive design throughout.

## Tech Stack
- **Framework:** Next.js 15 (App Router) — use `npx create-next-app@latest` with TypeScript, Tailwind, App Router
- **UI:** React 19, Tailwind CSS 4, shadcn/ui
- **Animations:** Framer Motion
- **Content:** MDX for blog (use @next/mdx or contentlayer/velite)
- **Forms:** React Hook Form + Zod + Server Actions
- **Email:** Resend (or SendGrid)
- **SEO:** next-sitemap, JSON-LD structured data, @vercel/og for OG images
- **Hosting:** Vercel
- **Font:** Geist (Sans + Mono) from Vercel

## Design Direction: "Controlled Variety"
The site shows different visual treatments per section, held together by a strict design system.

### Design System Constants (THE GLUE)
- **Typography:** Geist Sans for body, Geist Mono for code/accents. Type scale: 14/16/18/20/24/30/36/48/60/72px
- **Spacing:** 8px grid (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- **Colors:** Define in CSS variables. Dark primary palette with accent colors. Support light/dark mode.
- **Border radius:** Consistent (sm: 6px, md: 8px, lg: 12px, xl: 16px)
- **Shadows:** 3 elevation levels
- **Animation:** Consistent easing (cubic-bezier(0.16, 1, 0.3, 1)) and duration scale (150ms, 300ms, 500ms)

### Section Visual Treatments
- **Hero:** Dark, cinematic, animated gradient mesh or particles. Bold statement typography. Scroll-triggered animations.
- **Services:** Clean card grid on light background. Smooth hover interactions with subtle elevation changes.
- **Portfolio:** Full-width immersive cards. Each project gets its own color accent. Interactive hover reveals.
- **AI Section:** Techy feel — subtle grid lines, data visualization motifs, glowing accents.
- **Testimonials:** Minimal, elegant, dark background, large quotes.
- **Stats:** Animated number counters on gradient background.
- **Blog Preview:** Light, editorial, clean grid.
- **CTA/Contact:** Bold gradient background, simple elegant form.

### Micro-interactions
- Scroll-triggered fade/slide animations (Framer Motion)
- Magnetic cursor effects on primary CTAs
- Smooth page transitions
- Number counters for stats sections
- Subtle parallax on hero elements
- Hover state changes on cards (elevation + slight scale)

## Brand & Content

### Positioning
"We Build What Others Can't" — Modern tech studio delivering beautiful websites AND cutting-edge AI implementation.

### Service Pillars
1. **Web Design & Development** — Custom (Next.js, React), WordPress, Shopify, e-commerce, web apps
2. **SEO & Digital Growth** — Technical SEO, Local SEO, Programmatic SEO, Content Strategy (blogs, landing pages, guides)
3. **AI Implementation** — Custom AI agents, workflow automation, chatbots, AI business tools, AI strategy consulting
4. **App Development** — Mobile apps, SaaS platforms, custom business tools, POS systems, API integrations

### Key Messages
- We recommend modern stacks but also have deep WordPress and Shopify expertise
- AI implementation is our differentiator
- Competitive pricing, ROI-first mentality
- "Book Your Free Strategy Session" is the primary CTA
- Company-branded (NO personal founder pages, NO government work references)

### Target Verticals (with dedicated pages)
1. Healthcare & Wellness
2. Legal (Small Firms)
3. E-commerce & Retail
4. Real Estate

### Geography
Canada + US — programmatic city pages for 30+ metro areas

## Site Map

```
/                           → Homepage
/services/                  → Services overview
/services/web-development/  → Web dev detail
/services/seo/              → SEO detail
/services/ai-implementation/→ AI implementation detail
/services/app-development/  → App dev detail
/services/wordpress/        → WordPress expertise
/services/shopify/          → Shopify expertise
/portfolio/                 → Portfolio grid
/portfolio/[slug]/          → Individual case study
/blog/                      → Blog listing
/blog/[slug]/               → Blog post
/industries/healthcare/     → Healthcare vertical
/industries/legal/          → Legal vertical
/industries/ecommerce/      → E-commerce vertical
/industries/real-estate/    → Real estate vertical
/about/                     → Company story, values, process
/contact/                   → Contact form + booking
/[city]/                    → City landing pages (pSEO)
/[city]/[service]/          → City + service combos (pSEO)
/compare/[slug]/            → Comparison pages (pSEO)
/resources/[slug]/          → Guides and resources (pSEO)
/privacy/                   → Privacy policy
/terms/                     → Terms of service
```

## Portfolio Projects (NO government work)

| Project | Category | Description |
|---------|----------|-------------|
| High Ties (highties.ca) | E-commerce + POS | Cannabis dispensary platform with custom POS, inventory management, and full e-commerce |
| SyndicateAI | AI + Complex App | NFL analytics platform with predictive AI models, math engine, and real-time data agents |
| Spec-Bot | AI Tool | AI-powered specification generator using GPT-4.1 + LangGraph — chat-based 3-phase workflow (Requirements → Design → Tasks) |
| NimbleNeedle | Web Design + SEO | Tailoring business website with 15+ service pages, booking system, Google Reviews integration, local SEO |
| Mariouomo (mariouomo.com) | E-commerce + Design | Luxury men's fashion e-commerce with sophisticated shopping experience |
| Elysian Wellness | Healthcare | Physiotherapy & wellness clinic website with service booking |
| HightiesPOS | Custom App | Custom Flutter/Dart POS system with barcode scanning for cannabis retail |
| Eventzy | App Development | Full-featured event management platform with auth and booking |
| CashMe | App Development | Business cash income tracking application |
| DollarTracker | Finance App | Personal finance management with daily budget tracking |
| ShabebCatan | Fun/Gaming | Catan board game statistics tracker with analytics

## Testimonials (Draft — based on real project outcomes)

Generate 6-8 realistic testimonials from fictional representatives of real project types:
- A cannabis dispensary owner (High Ties inspired)
- A wellness clinic manager (Elysian inspired)
- A fashion retailer (Mariouomo inspired)
- A sports analytics startup founder (SyndicateAI inspired)
- A law firm partner (target vertical)
- A real estate brokerage (target vertical)

Include name, title, company type, photo placeholder, and 2-3 sentence quote.

## Implementation Phases

### Phase 1: Foundation (DO THIS FIRST)
1. Initialize fresh Next.js 15 project with TypeScript, Tailwind CSS, App Router
2. Install dependencies: shadcn/ui, framer-motion, lucide-react, next-themes
3. Set up design system: CSS variables, typography, colors, spacing
4. Build layout components: Header (with mega-menu navigation), Footer, Container
5. Build Homepage hero section (dark, cinematic, animated)
6. Build Homepage services preview section

### Phase 2: Core Pages
1. Complete Homepage (all sections)
2. Services overview page + individual service pages (6)
3. Industry vertical pages (4)
4. About page
5. Contact page with form

### Phase 3: Portfolio & Content
1. Portfolio grid with filtering
2. Individual case study pages
3. Blog infrastructure with MDX
4. Testimonials component

### Phase 4: pSEO & Polish
1. Programmatic page templates
2. City data files + generation
3. Sitemap, robots.txt, structured data
4. Performance optimization
5. OG image generation

## Quality Standards
- Lighthouse score: 95+ on all metrics
- Core Web Vitals: all green
- Accessibility: WCAG 2.1 AA compliant
- Mobile-first responsive design
- Dark/light mode support

## DO NOT
- Reference any government work (TBS, GC, Nova, GCWAP)
- Include personal founder information
- Use stock-looking generic designs
- Skip accessibility
- Use client-side rendering where server components work
- Import huge libraries for small features
