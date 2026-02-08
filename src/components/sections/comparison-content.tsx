"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Scale,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getComparisonBySlug, comparisons } from "@/lib/comparisons-data";
import { PageHero } from "@/components/sections/page-hero";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ------------------------------------------------------------------ */
/*  FAQ Item with toggle                                               */
/* ------------------------------------------------------------------ */
function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease }}
      className="rounded-xl border border-border bg-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-muted/50 sm:p-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-foreground sm:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="shrink-0"
        >
          <ChevronDown
            className="h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Feature Card (stacked view for narrow screens)              */
/* ------------------------------------------------------------------ */
function MobileFeatureCard({
  feature,
  optionAName,
  optionBName,
  optionAValue,
  optionBValue,
  index,
}: {
  feature: string;
  optionAName: string;
  optionBName: string;
  optionAValue: string;
  optionBValue: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease }}
      className="rounded-xl border border-border bg-card p-5"
    >
      <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-500">
        {feature}
      </h4>
      <div className="mt-3 space-y-3">
        <div className="flex items-start gap-3">
          <Badge
            variant="outline"
            className="shrink-0 border-blue-500/30 text-blue-500"
          >
            {optionAName}
          </Badge>
          <span className="text-sm leading-relaxed text-muted-foreground">
            {optionAValue}
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Badge
            variant="outline"
            className="shrink-0 border-purple-500/30 text-purple-500"
          >
            {optionBName}
          </Badge>
          <span className="text-sm leading-relaxed text-muted-foreground">
            {optionBValue}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Related Comparisons                                                */
/* ------------------------------------------------------------------ */
function RelatedComparisons({ currentSlug }: { currentSlug: string }) {
  const related = comparisons
    .filter((c) => c.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

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
            More <span className="text-gradient">Comparisons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Explore our other in-depth technology comparisons.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((comparison, i) => (
            <motion.article
              key={comparison.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <Link
                href={`/compare/${comparison.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-elevation-2 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div className="flex items-center gap-2">
                  <Scale
                    className="h-5 w-5 text-brand-500"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    Comparison
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-brand-500 sm:text-lg">
                  {comparison.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {comparison.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-500">
                  Read comparison
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */
export function ComparisonContent({ slug }: { slug: string }) {
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return null;

  const { optionA, optionB, features, verdict, faqs } = comparison;

  return (
    <>
      {/* ---- Hero — flow-field background with indigo-400 particles ---- */}
      <PageHero color="#818cf8" tight className="pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          <Link
            href="/compare"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" />
            All Comparisons
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-6"
        >
          <Badge
            variant="outline"
            className="border-brand-500/30 text-brand-500"
          >
            <Scale className="mr-1.5 h-3 w-3" aria-hidden="true" />
            Expert Comparison
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          <span className="text-gradient">{comparison.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease }}
          className="mt-5 max-w-3xl text-lg text-muted-foreground sm:text-xl"
        >
          {comparison.excerpt}
        </motion.p>
      </PageHero>

      {/* ---- Side-by-Side Overview ---- */}
      <section className="py-12 sm:py-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              The Two Options at a Glance
            </h2>
          </motion.div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Option A */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease }}
              className="rounded-2xl border border-blue-500/20 bg-card p-6 shadow-elevation-1 sm:p-8"
            >
              <Badge
                variant="outline"
                className="border-blue-500/30 text-blue-500"
              >
                Option A
              </Badge>
              <h3 className="mt-4 text-2xl font-bold text-foreground">
                {optionA.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {optionA.description}
              </p>
            </motion.div>

            {/* Option B */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease }}
              className="rounded-2xl border border-purple-500/20 bg-card p-6 shadow-elevation-1 sm:p-8"
            >
              <Badge
                variant="outline"
                className="border-purple-500/30 text-purple-500"
              >
                Option B
              </Badge>
              <h3 className="mt-4 text-2xl font-bold text-foreground">
                {optionB.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {optionB.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- Feature Comparison Table ---- */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Feature-by-Feature{" "}
              <span className="text-gradient">Comparison</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              How {optionA.name} and {optionB.name} stack up on the criteria
              that matter most.
            </p>
          </motion.div>

          {/* Desktop table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mx-auto mt-10 hidden max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-elevation-1 md:block"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-blue-500">
                    {optionA.name}
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-purple-500">
                    {optionB.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border last:border-b-0 ${
                      i % 2 === 0 ? "bg-card" : "bg-muted/30"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {row.optionA}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {row.optionB}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile stacked cards */}
          <div className="mx-auto mt-10 max-w-lg space-y-4 md:hidden">
            {features.map((row, i) => (
              <MobileFeatureCard
                key={i}
                feature={row.feature}
                optionAName={optionA.name}
                optionBName={optionB.name}
                optionAValue={row.optionA}
                optionBValue={row.optionB}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Pros & Cons ---- */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Pros & Cons
            </h2>
            <p className="mt-4 text-muted-foreground">
              An honest look at the strengths and weaknesses of each option.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Option A Pros/Cons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground">
                {optionA.name}
              </h3>

              {/* Pros */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-500">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Advantages
                </h4>
                <ul className="mt-4 space-y-3">
                  {optionA.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {pro}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 sm:p-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-500">
                  <X className="h-4 w-4" aria-hidden="true" />
                  Disadvantages
                </h4>
                <ul className="mt-4 space-y-3">
                  {optionA.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {con}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Option B Pros/Cons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground">
                {optionB.name}
              </h3>

              {/* Pros */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-500">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Advantages
                </h4>
                <ul className="mt-4 space-y-3">
                  {optionB.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {pro}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 sm:p-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-500">
                  <X className="h-4 w-4" aria-hidden="true" />
                  Disadvantages
                </h4>
                <ul className="mt-4 space-y-3">
                  {optionB.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {con}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- Our Verdict ---- */}
      <section className="py-12 sm:py-16">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease }}
            className="relative overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/5 via-purple-500/5 to-transparent p-8 shadow-elevation-2 sm:p-10"
          >
            <div
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/5 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                  <Scale
                    className="h-5 w-5 text-brand-500"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Our Verdict
                </h2>
              </div>
              <p className="mt-5 text-base leading-[1.8] text-muted-foreground sm:text-lg sm:leading-[1.8]">
                {verdict}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- FAQ Section ---- */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10">
              <HelpCircle
                className="h-6 w-6 text-brand-500"
                aria-hidden="true"
              />
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Common questions about {optionA.name} vs {optionB.name}, answered
              by our team.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Related Comparisons ---- */}
      <RelatedComparisons currentSlug={slug} />

      {/* ---- CTA ---- */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm"
          >
            <MessageSquare
              className="h-7 w-7 text-white"
              aria-hidden="true"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Need Help{" "}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              Deciding?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-lg text-brand-100/80"
          >
            Every business is different. Book a free strategy session and
            we&rsquo;ll help you choose the right solution for your specific
            goals, budget, and timeline.
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
