"use client";

import { motion } from "framer-motion";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack";

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "ClickBoost transformed our online presence completely. Our custom e-commerce platform with integrated POS handles thousands of transactions daily, and our revenue has tripled since launch.",
    title: "Owner, GreenLeaf Dispensary",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "The AI analytics platform they built gives us a genuine competitive edge. The predictive models and real-time data agents have completely changed how we approach sports analytics.",
    title: "Founder & CEO, AthleteIQ",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "We went from page 5 to the top 3 results for all our target keywords. The SEO strategy combined with the beautiful website redesign brought us 200% more leads in six months.",
    title: "Clinic Director, Vitality Wellness",
    rating: 5,
  },
  {
    id: "testimonial-4",
    quote:
      "Their team understood the luxury e-commerce space immediately. The shopping experience they created captures our brand perfectly — elegant, smooth, and conversion-optimized.",
    title: "Creative Director, Palazzo Menswear",
    rating: 4.5,
  },
];

export function Testimonials() {
  return (
    <section className="overflow-x-clip bg-background">
      <div className="container-wide pt-16 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-brand-500"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Trusted by Businesses That{" "}
            <span className="text-gradient">Demand Excellence</span>
          </motion.h2>
        </div>
      </div>

      <ContainerScroll className="h-[200vh] w-full">
        <div className="sticky left-0 top-16 flex h-[calc(100svh-4rem)] w-full items-center justify-center lg:top-18 lg:h-[calc(100svh-4.5rem)]">
          <div className="container-wide flex justify-center">
            <CardsContainer className="h-[400px] w-[320px] sm:h-[420px] sm:w-[360px]">
              {testimonials.map((testimonial, index) => (
                <CardTransformed
                  arrayLength={testimonials.length}
                  key={testimonial.id}
                  variant="dark"
                  index={index + 2}
                  role="article"
                  aria-label={`Client testimonial from ${testimonial.title}`}
                  aria-describedby={`card-${testimonial.id}-content`}
                >
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <ReviewStars
                      className="text-amber-400"
                      rating={testimonial.rating}
                    />
                    <div className="mx-auto w-4/5 text-base leading-relaxed text-foreground">
                      <blockquote id={`card-${testimonial.id}-content`}>
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-muted-foreground">
                      {testimonial.title}
                    </span>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
