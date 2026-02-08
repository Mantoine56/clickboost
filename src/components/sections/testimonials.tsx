"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "ClickBoost transformed our online presence completely. Our custom e-commerce platform with integrated POS handles thousands of transactions daily, and our revenue has tripled since launch.",
    name: "Marcus Chen",
    title: "Owner, GreenLeaf Dispensary",
    industry: "Cannabis Retail",
  },
  {
    quote:
      "The AI analytics platform they built gives us a genuine competitive edge. The predictive models and real-time data agents have completely changed how we approach sports analytics.",
    name: "Jordan Williams",
    title: "Founder & CEO, AthleteIQ",
    industry: "Sports Analytics",
  },
  {
    quote:
      "We went from page 5 to the top 3 results for all our target keywords. The SEO strategy combined with the beautiful website redesign brought us 200% more leads in six months.",
    name: "Dr. Sarah Mitchell",
    title: "Clinic Director, Vitality Wellness",
    industry: "Healthcare",
  },
  {
    quote:
      "Their team understood the luxury e-commerce space immediately. The shopping experience they created captures our brand perfectly — elegant, smooth, and conversion-optimized.",
    name: "Alessandro Rossi",
    title: "Creative Director, Palazzo Menswear",
    industry: "Fashion Retail",
  },
  {
    quote:
      "As a small law firm, we needed a website that conveyed trust and professionalism. ClickBoost delivered that and more — our intake form submissions increased by 150% within the first quarter.",
    name: "Patricia Okonkwo",
    title: "Managing Partner, Okonkwo & Associates",
    industry: "Legal",
  },
  {
    quote:
      "The AI chatbot and workflow automation they implemented saves our agents 15+ hours per week. It's like having an extra team member who never sleeps. Absolutely game-changing for our brokerage.",
    name: "David Park",
    title: "Broker, Cornerstone Realty",
    industry: "Real Estate",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-elevation-1"
            >
              {/* Stars */}
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-500">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <cite className="text-sm font-medium not-italic text-foreground">
                      {testimonial.name}
                    </cite>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
