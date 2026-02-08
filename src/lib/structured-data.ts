export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ClickBoost",
    url: "https://clickboost.ca",
    logo: "https://clickboost.ca/logo.png",
    description:
      "Modern web development, SEO, AI implementation, and app development agency serving businesses across Canada and the United States.",
    foundingDate: "2020",
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "antoine@clickboost.ca",
      telephone: "+1-613-894-4632",
      availableLanguage: ["English", "French"],
    },
    service: [
      {
        "@type": "Service",
        name: "Web Development",
        description:
          "Custom websites and web applications built with modern technologies.",
      },
      {
        "@type": "Service",
        name: "SEO",
        description:
          "Search engine optimization strategies for local and national visibility.",
      },
      {
        "@type": "Service",
        name: "AI Implementation",
        description:
          "Custom AI agents, workflow automation, and AI business tools.",
      },
      {
        "@type": "Service",
        name: "App Development",
        description:
          "Mobile apps, SaaS platforms, and custom business applications.",
      },
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ClickBoost",
    url: "https://clickboost.ca",
    description:
      "Web development, SEO, AI implementation, and app development agency.",
    priceRange: "$$",
    email: "antoine@clickboost.ca",
    telephone: "+1-613-894-4632",
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Web Development" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "SEO" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI Implementation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "App Development" },
        },
      ],
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "ClickBoost",
      url: "https://clickboost.ca",
    },
    datePublished: post.publishDate,
    mainEntityOfPage: `https://clickboost.ca/blog/${post.slug}`,
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "ClickBoost",
      url: "https://clickboost.ca",
      logo: {
        "@type": "ImageObject",
        url: "https://clickboost.ca/logo.png",
      },
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://clickboost.ca/blog/${post.slug}`,
    },
    image: `https://clickboost.ca/blog/${post.slug}/opengraph-image`,
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "ClickBoost",
      url: "https://clickboost.ca",
    },
    url: `https://clickboost.ca/services/${service.slug}`,
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
