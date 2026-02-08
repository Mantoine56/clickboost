"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Why Your Business Needs AI Implementation in 2025",
    excerpt:
      "From automated customer service to predictive analytics, AI is no longer optional. Here's how to get started with practical AI implementation.",
    category: "AI",
    readTime: "6 min read",
    date: "Jan 2025",
    gradient: "from-brand-500/20 to-purple-500/20",
  },
  {
    title: "The Complete Guide to Technical SEO for Modern Websites",
    excerpt:
      "Core Web Vitals, structured data, and crawl optimization — the technical SEO checklist that actually moves the needle.",
    category: "SEO",
    readTime: "8 min read",
    date: "Dec 2024",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Next.js vs WordPress: Choosing the Right Stack in 2025",
    excerpt:
      "A practical comparison for business owners. When WordPress makes sense, when Next.js wins, and how to decide for your project.",
    category: "Web Dev",
    readTime: "5 min read",
    date: "Dec 2024",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function BlogPreview() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-brand-500"
          >
            From the Blog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Insights & <span className="text-gradient">Resources</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Expert perspectives on web development, SEO, AI, and digital growth.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <Link
                href="/blog"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {/* Gradient header */}
                <div
                  className={`flex h-40 items-end bg-gradient-to-br ${post.gradient} p-5`}
                >
                  <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span aria-hidden="true">&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
