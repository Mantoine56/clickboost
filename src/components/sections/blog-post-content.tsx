"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Linkedin,
  Twitter,
  LinkIcon,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getBlogPostBySlug,
  blogPosts,
  type BlogSection,
} from "@/lib/blog-data";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://clickboost.ca/blog/${slug}`;

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-brand-500 hover:border-brand-500/30"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-brand-500 hover:border-brand-500/30"
        aria-label="Share on X"
      >
        <Twitter className="h-4 w-4" />
      </a>
      <button
        onClick={copyLink}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-brand-500 hover:border-brand-500/30"
        aria-label="Copy link"
      >
        {copied ? (
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        ) : (
          <LinkIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

function TableOfContents({ sections }: { sections: BlogSection[] }) {
  const headings = sections.filter((s) => s.type === "heading");

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-xl border border-border bg-card p-6 shadow-elevation-1"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
        In This Article
      </h2>
      <ul className="mt-4 space-y-2">
        {headings.map((heading, i) => {
          const id = heading.content
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
            <li key={i}>
              <a
                href={`#${id}`}
                className="block text-sm leading-relaxed text-muted-foreground transition-colors hover:text-brand-500"
              >
                {heading.content}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose-custom">
      {sections.map((section, i) => {
        switch (section.type) {
          case "heading": {
            const id = section.content
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            return (
              <motion.h2
                key={i}
                id={id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease }}
                className="mt-10 mb-4 scroll-mt-24 text-2xl font-bold tracking-tight text-foreground first:mt-0 sm:text-3xl"
              >
                {section.content}
              </motion.h2>
            );
          }
          case "subheading":
            return (
              <motion.h3
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease }}
                className="mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground"
              >
                {section.content}
              </motion.h3>
            );
          case "paragraph":
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease }}
                className="mb-5 text-base leading-[1.8] text-muted-foreground sm:text-lg sm:leading-[1.8]"
              >
                {section.content}
              </motion.p>
            );
          case "list":
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease }}
                className="mb-6"
              >
                {section.content && (
                  <p className="mb-3 text-base leading-[1.8] text-muted-foreground sm:text-lg sm:leading-[1.8]">
                    {section.content}
                  </p>
                )}
                <ul className="space-y-2 pl-1">
                  {section.items?.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground sm:text-lg"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Related <span className="text-gradient">Articles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Continue reading with these related insights.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {related.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div
                  className={`flex h-36 items-end bg-gradient-to-br ${post.gradient} p-5`}
                >
                  <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{formatDate(post.publishDate)}</span>
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
      </div>
    </section>
  );
}

export function BlogPostContent({ slug }: { slug: string }) {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;

  return (
    <>
      {/* Article Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50`}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
          aria-hidden="true"
        />

        <div className="container-tight relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-6"
          >
            <span className="inline-block rounded-full bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-500">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
            className="mt-5 max-w-3xl text-lg text-muted-foreground"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease }}
            className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" aria-hidden="true" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 sm:py-16">
        <div className="container-wide">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px]">
            {/* Main Content */}
            <article className="min-w-0">
              <ArticleBody sections={post.content} />

              {/* Share + Author */}
              <div className="mt-12 border-t border-border pt-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <ShareButtons title={post.title} slug={post.slug} />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10">
                      <User
                        className="h-5 w-5 text-brand-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {post.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ClickBoost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-8">
                <TableOfContents sections={post.content} />

                <div className="rounded-xl border border-border bg-card p-6 shadow-elevation-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    Need Help With This?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Our team can implement these strategies for your
                    business. Book a free consultation.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="mt-4 w-full bg-brand-500 text-white hover:bg-brand-600"
                  >
                    <Link href="/contact">
                      Book a Call
                      <ArrowRight
                        className="ml-1 h-3 w-3"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts currentSlug={slug} />

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
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              Amazing?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-brand-100/80"
          >
            Let&rsquo;s discuss your project. Book a free strategy session and
            discover how we can help your business grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 px-8 text-base text-white hover:bg-white/10"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
