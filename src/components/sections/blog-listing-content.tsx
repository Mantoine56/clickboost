"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";
import { PageHero } from "@/components/sections/page-hero";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogListingContent() {
  return (
    <>
      {/* Hero — flow-field background with indigo-500 particles */}
      <PageHero color="#6366f1">
        <motion.span
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="text-sm font-semibold uppercase tracking-wider text-brand-400"
        >
          From the Blog
        </motion.span>
        <motion.h1
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Insights &{" "}
          <span className="text-gradient">Resources</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Expert perspectives on web development, SEO, AI implementation, and
          digital growth. Actionable advice to help your business thrive
          online.
        </motion.p>
      </PageHero>

      {/* Blog Grid */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).map((post) => (
              <motion.article key={post.slug} variants={cardVariants}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {/* Gradient header */}
                  <div
                    className={`flex h-44 items-end bg-gradient-to-br ${post.gradient} p-5`}
                  >
                    <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold leading-snug text-foreground group-hover:text-brand-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar
                            className="h-3 w-3"
                            aria-hidden="true"
                          />
                          {formatDate(post.publishDate)}
                        </span>
                        <span aria-hidden="true">&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock
                            className="h-3 w-3"
                            aria-hidden="true"
                          />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-500 transition-colors group-hover:text-brand-400">
                      Read Article
                      <ArrowRight
                        className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-purple-800"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-400/20 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="container-tight relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Want to Put These Insights Into{" "}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              Action?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-brand-100/80"
          >
            Book a free strategy session and let&rsquo;s discuss how we can
            implement these strategies for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-white px-8 text-base text-brand-900 hover:bg-brand-50"
            >
              <Link href="/contact">
                Book Your Free Strategy Session
                <ArrowRight
                  className="ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
