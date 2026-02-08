export interface IndustryPainPoint {
  title: string;
  description: string;
}

export interface IndustryService {
  title: string;
  description: string;
  slug: string; // links to /services/[slug]
}

export interface IndustryStat {
  value: number;
  suffix: string;
  label: string;
}

export interface IndustryTestimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  painPoints: IndustryPainPoint[];
  services: IndustryService[];
  stats: IndustryStat[];
  testimonial: IndustryTestimonial;
}

export const industriesData: IndustryData[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Wellness",
    tagline: "HIPAA-Compliant Digital Solutions That Put Patients First",
    description:
      "Healthcare providers face unique digital challenges — from strict HIPAA compliance requirements to complex patient scheduling workflows. We build secure, accessible, and conversion-optimized websites and applications that help clinics, private practices, and wellness centers attract new patients, streamline operations, and deliver better care experiences.",
    gradient: "from-teal-600 to-cyan-600",
    painPoints: [
      {
        title: "HIPAA Compliance Gaps",
        description:
          "Most healthcare websites unknowingly violate HIPAA regulations through insecure contact forms, unencrypted patient data transmission, and non-compliant third-party tracking scripts. A single breach can result in fines up to $1.5M per violation category.",
      },
      {
        title: "Broken Appointment Booking",
        description:
          "Patients abandon the booking process when it requires phone calls, lengthy forms, or outdated scheduling widgets. 67% of patients prefer online booking, but most clinic websites make it frustratingly difficult.",
      },
      {
        title: "Poor Local Search Visibility",
        description:
          "When someone searches 'physiotherapist near me' or 'walk-in clinic downtown,' your practice needs to appear in the top 3 results. Without proper local SEO, structured data, and Google Business Profile optimization, you're invisible to nearby patients.",
      },
      {
        title: "Inaccessible Patient Portals",
        description:
          "Patients with disabilities, older adults, and those with limited tech literacy struggle with poorly designed portals. ADA and AODA non-compliance isn't just bad UX — it's a legal liability and excludes the patients who need your services most.",
      },
      {
        title: "Outdated, Slow Websites",
        description:
          "Healthcare websites built on aging WordPress themes with heavy plugins load slowly on mobile, rank poorly in search, and erode patient trust before they even read your content. First impressions happen in 50 milliseconds.",
      },
    ],
    services: [
      {
        title: "HIPAA-Compliant Web Development",
        description:
          "Custom healthcare websites with encrypted form submissions, secure patient intake workflows, compliant analytics, and integration with EHR/EMR systems like Jane App, Cliniko, and Oscar.",
        slug: "web-development",
      },
      {
        title: "Healthcare SEO & Local Visibility",
        description:
          "Dominate local search with Google Business Profile optimization, medical schema markup, service-area pages, and content strategies targeting condition-specific patient searches.",
        slug: "seo",
      },
      {
        title: "AI-Powered Patient Engagement",
        description:
          "Intelligent chatbots that handle appointment scheduling, answer insurance questions, triage symptom inquiries, and route patients to the right provider — 24/7 without adding staff.",
        slug: "ai-implementation",
      },
      {
        title: "Patient Portal & Booking Apps",
        description:
          "Custom mobile and web applications for appointment booking, telehealth integration, patient forms, prescription refills, and secure messaging between patients and providers.",
        slug: "app-development",
      },
    ],
    stats: [
      { value: 200, suffix: "%", label: "Average Increase in Online Bookings" },
      { value: 100, suffix: "%", label: "HIPAA Compliance Rate" },
      { value: 3, suffix: "x", label: "More Patient Inquiries" },
      { value: 45, suffix: "%", label: "Reduction in No-Shows" },
    ],
    testimonial: {
      quote:
        "ClickBoost rebuilt our clinic website from the ground up with full HIPAA compliance and integrated online booking. Within three months, our appointment requests jumped by 200% and our no-show rate dropped dramatically thanks to the automated reminder system. The investment paid for itself in the first month.",
      name: "Dr. Sarah Mitchell",
      title: "Clinic Director",
      company: "Vitality Wellness Centre",
    },
  },
  {
    slug: "legal",
    name: "Legal Services",
    tagline: "Professional Digital Presence That Builds Client Trust",
    description:
      "For law firms, your website is your most important first impression. Potential clients are evaluating your credibility, expertise, and trustworthiness before they ever pick up the phone. We build authoritative, conversion-focused websites and digital strategies that help small and mid-sized law firms generate qualified leads and establish thought leadership.",
    gradient: "from-slate-700 to-zinc-600",
    painPoints: [
      {
        title: "Low-Quality Lead Generation",
        description:
          "Your website gets traffic but most inquiries are irrelevant or low-value. Without proper intake qualification, practice-area targeting, and conversion optimization, you waste billable hours on leads that never convert to retained clients.",
      },
      {
        title: "Generic, Template-Looking Websites",
        description:
          "Most law firm websites look identical — stock photos of gavels, generic 'we fight for you' copy, and cookie-cutter templates. In a competitive market, a generic website signals a generic firm. Prospective clients can tell the difference.",
      },
      {
        title: "Missing Trust Signals",
        description:
          "Potential clients need to see bar association memberships, case results, client testimonials, and attorney credentials before they'll submit an inquiry. Without proper trust architecture, visitors bounce to a competitor who looks more established.",
      },
      {
        title: "Inefficient Client Intake",
        description:
          "Manual intake processes with phone-only contact, paper forms, and email chains slow down client onboarding and create bottlenecks. Modern clients expect to schedule consultations and submit documents online at their convenience.",
      },
      {
        title: "Weak Content Authority",
        description:
          "Legal SEO is brutally competitive. Without a consistent publishing strategy covering practice-area topics, FAQ content, and jurisdiction-specific pages, your firm won't rank for the high-intent searches that drive retained clients.",
      },
    ],
    services: [
      {
        title: "Law Firm Web Design",
        description:
          "Authoritative, conversion-optimized websites with attorney profiles, practice area pages, case result showcases, client testimonial integration, and professional trust signals throughout.",
        slug: "web-development",
      },
      {
        title: "Legal SEO & Content Strategy",
        description:
          "Dominate practice-area keywords with jurisdiction-specific landing pages, FAQ schema, legal blog content, and local SEO for multi-location firms. We target high-intent searches like 'divorce lawyer [city].'",
        slug: "seo",
      },
      {
        title: "AI Client Intake & Case Management",
        description:
          "Automated intake forms with smart routing by practice area, AI-powered initial case screening, document collection workflows, and CRM integration to eliminate administrative bottlenecks.",
        slug: "ai-implementation",
      },
    ],
    stats: [
      { value: 150, suffix: "%", label: "Increase in Qualified Leads" },
      { value: 40, suffix: "%", label: "Faster Client Intake" },
      { value: 85, suffix: "%", label: "Consultation Booking Rate" },
      { value: 12, suffix: "x", label: "SEO Traffic Growth" },
    ],
    testimonial: {
      quote:
        "We went from a templated website that looked like every other firm to a professional digital presence that actually reflects our expertise. The AI-powered intake system pre-qualifies leads before they reach our desk, and our consultation requests have grown 150% quarter over quarter. ClickBoost understands that for law firms, credibility isn't optional.",
      name: "Patricia Okonkwo",
      title: "Managing Partner",
      company: "Okonkwo & Associates Law",
    },
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & Retail",
    tagline: "High-Converting Stores That Turn Browsers Into Buyers",
    description:
      "In e-commerce, every millisecond of load time, every friction point in checkout, and every missed personalization opportunity costs you revenue. We build and optimize online stores that maximize conversion rates, average order values, and customer lifetime value — whether you're on Shopify, WooCommerce, or a custom platform.",
    gradient: "from-amber-600 to-orange-600",
    painPoints: [
      {
        title: "Cart Abandonment",
        description:
          "The average cart abandonment rate is 70%. Slow checkout, surprise shipping costs, limited payment options, and poor mobile UX are leaving money on the table. Every optimization to your checkout flow directly impacts your bottom line.",
      },
      {
        title: "Inventory & Order Chaos",
        description:
          "Selling across multiple channels — Shopify, Amazon, in-store POS — without real-time inventory sync leads to overselling, stockouts, and frustrated customers. Manual reconciliation wastes hours and introduces costly errors.",
      },
      {
        title: "Flat Conversion Rates",
        description:
          "Traffic is coming in but conversion rates are stuck below 2%. Without proper product page optimization, social proof, urgency mechanics, and personalized shopping experiences, you're paying for visitors who don't buy.",
      },
      {
        title: "Payment & Compliance Headaches",
        description:
          "PCI DSS compliance, multi-currency support, tax calculation across jurisdictions, and payment gateway integration add layers of complexity. One security incident or checkout error can destroy customer trust permanently.",
      },
      {
        title: "Poor Mobile Shopping Experience",
        description:
          "Over 70% of e-commerce traffic comes from mobile devices, but most stores still deliver a desktop experience shrunk to fit a phone screen. Tiny buttons, slow image loading, and clunky mobile checkout kill conversions.",
      },
    ],
    services: [
      {
        title: "Custom E-Commerce Development",
        description:
          "High-performance online stores built on Shopify, WooCommerce, or custom Next.js with Stripe. Optimized product pages, lightning-fast checkout, real-time inventory sync, and multi-channel selling.",
        slug: "shopify",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Data-driven A/B testing, checkout funnel analysis, product page optimization, upsell/cross-sell flows, and abandoned cart recovery strategies that measurably increase revenue per visitor.",
        slug: "seo",
      },
      {
        title: "AI-Powered Personalization",
        description:
          "Intelligent product recommendations, dynamic pricing, personalized email campaigns, and AI chatbots that act as virtual shopping assistants to guide customers to the right products.",
        slug: "ai-implementation",
      },
      {
        title: "Custom POS & Inventory Systems",
        description:
          "Unified commerce solutions with custom POS systems, barcode scanning, real-time inventory management, multi-location stock tracking, and seamless online-to-offline integration.",
        slug: "app-development",
      },
    ],
    stats: [
      { value: 35, suffix: "%", label: "Average Conversion Lift" },
      { value: 3, suffix: "x", label: "Revenue Growth" },
      { value: 50, suffix: "%", label: "Reduction in Cart Abandonment" },
      { value: 99, suffix: ".9%", label: "Uptime Guarantee" },
    ],
    testimonial: {
      quote:
        "ClickBoost built our entire e-commerce platform with a custom POS system that syncs inventory in real time across our online store and physical locations. Our conversion rate jumped 35% after the redesign, and the integrated POS eliminated the inventory nightmares we were dealing with daily. Revenue has tripled since launch.",
      name: "Marcus Chen",
      title: "Owner & Operator",
      company: "GreenLeaf Dispensary",
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Digital Platforms That Generate and Convert Leads 24/7",
    description:
      "Real estate is a relationship business, but the first touchpoint is almost always digital. Buyers search online, browse listings on their phones, and expect virtual tours before scheduling a showing. We build real estate websites, IDX integrations, and AI-powered tools that capture leads, nurture prospects, and give agents a competitive edge.",
    gradient: "from-emerald-600 to-teal-600",
    painPoints: [
      {
        title: "Outdated MLS/IDX Integration",
        description:
          "Slow, clunky IDX widgets with poor search UX drive potential buyers to Zillow and Realtor.ca instead of your website. When your listing search feels like it was built in 2010, you lose leads to platforms that invested in the experience.",
      },
      {
        title: "Lead Leakage",
        description:
          "Visitors browse your listings, view property details, and leave without registering or making contact. Without strategic lead capture — saved search alerts, property match notifications, and gated premium content — valuable traffic generates zero pipeline.",
      },
      {
        title: "No Virtual Tour Experience",
        description:
          "Post-pandemic buyers expect virtual tours, 3D walkthroughs, and video content for every listing. Agents without professional virtual tour integration on their websites lose out-of-area buyers and waste time on unqualified showings.",
      },
      {
        title: "Time-Consuming Follow-Up",
        description:
          "Real estate agents spend hours sending manual follow-up emails, scheduling showings, and qualifying leads. Slow response times directly cost deals — studies show that responding within 5 minutes makes you 100x more likely to connect with a lead.",
      },
      {
        title: "Weak Agent Branding Online",
        description:
          "Most agent websites are brokerage-template pages with minimal customization. In a market where personal brand is everything, a generic website undermines the trust and authority you've built through years of community presence.",
      },
    ],
    services: [
      {
        title: "Real Estate Web Development",
        description:
          "Custom IDX-integrated websites with advanced property search, neighborhood pages, agent profiles, mortgage calculators, virtual tour embedding, and mobile-optimized listing detail pages.",
        slug: "web-development",
      },
      {
        title: "Real Estate SEO & Hyperlocal Content",
        description:
          "Hyperlocal SEO strategies with neighborhood guides, market report pages, school district content, and geo-targeted landing pages that rank for 'homes for sale in [neighborhood]' searches.",
        slug: "seo",
      },
      {
        title: "AI Lead Nurturing & Automation",
        description:
          "AI-powered chatbots that qualify buyer leads instantly, automated showing scheduling, smart drip campaigns, property match notifications, and CRM integration with tools like Follow Up Boss and kvCORE.",
        slug: "ai-implementation",
      },
      {
        title: "Property Management Apps",
        description:
          "Custom applications for tenant portals, maintenance request tracking, rent collection, document management, and portfolio analytics for brokerages and property management companies.",
        slug: "app-development",
      },
    ],
    stats: [
      { value: 5, suffix: "x", label: "More Qualified Leads" },
      { value: 60, suffix: "%", label: "Faster Response Time" },
      { value: 300, suffix: "%", label: "Increase in Website Traffic" },
      { value: 25, suffix: "+", label: "Agents Served" },
    ],
    testimonial: {
      quote:
        "The AI chatbot and workflow automation ClickBoost implemented saves our agents 15+ hours per week on lead follow-up alone. The custom IDX integration on our site actually makes buyers want to search on our platform instead of Zillow. It's like having an extra team member who never sleeps — absolutely game-changing for our brokerage.",
      name: "David Park",
      title: "Managing Broker",
      company: "Cornerstone Realty Group",
    },
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((i) => i.slug === slug);
}
