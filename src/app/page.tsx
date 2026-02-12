import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { PopularCitiesLinks } from "@/components/sections/popular-cities-links";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      {/* Surface high-value city pages directly from the homepage. */}
      <PopularCitiesLinks />
      <PortfolioPreview />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
}
