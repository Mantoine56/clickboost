"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/sections/page-hero";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
type FormStatus = "idle" | "submitting" | "success" | "error";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "antoine@clickboost.ca",
    href: "mailto:antoine@clickboost.ca",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "613-894-4632",
    href: "tel:+16138944632",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Canada & United States",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9 AM - 6 PM EST",
    href: null,
  },
];

export function ContactContent() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedbackMessage(
          data.message ?? "Unable to send your message. Please try again."
        );
        return;
      }

      form.reset();
      setStatus("success");
      setFeedbackMessage(
        data.message ?? "Thanks. Your message has been sent successfully."
      );
    } catch {
      setStatus("error");
      setFeedbackMessage("Network error. Please try again in a moment.");
    }
  }

  return (
    <>
      {/* Hero — flow-field background with indigo-500 particles */}
      <PageHero color="#6366f1" className="pb-8 sm:pb-12">
        <motion.span
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="text-sm font-semibold uppercase tracking-wider text-brand-500"
        >
          Get In Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 1, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Let&rsquo;s Start Your{" "}
          <span className="text-gradient">Project</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-4 max-w-xl text-lg text-muted-foreground"
        >
          Book a free strategy session. Tell us about your project and
          we&rsquo;ll get back to you within 24 hours.
        </motion.p>
      </PageHero>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="lg:col-span-3"
            >
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Honeypot field for bot filtering */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO &amp; Digital Growth</option>
                    <option value="ai-implementation">AI Implementation</option>
                    <option value="app-development">App Development</option>
                    <option value="wordpress">WordPress</option>
                    <option value="shopify">Shopify</option>
                    <option value="other">Other / Multiple</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Tell Us About Your Project *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    required
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full bg-brand-500 text-white hover:bg-brand-600 glow sm:w-auto sm:px-12"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {status !== "idle" && (
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-emerald-500" : "text-red-500"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {feedbackMessage}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="lg:col-span-2"
            >
              <div className="rounded-xl border border-border bg-card p-6 shadow-elevation-1">
                <h2 className="text-lg font-semibold text-foreground">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach out directly or fill out the form. We respond within 24
                  hours.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                        <item.icon
                          className="h-5 w-5 text-brand-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-foreground transition-colors hover:text-brand-500"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="text-sm font-semibold text-foreground">
                    Prefer Direct Contact?
                  </h3>
                  <div className="mt-3 space-y-2 text-sm">
                    <a
                      href="mailto:antoine@clickboost.ca"
                      className="block font-medium text-foreground transition-colors hover:text-brand-500"
                    >
                      antoine@clickboost.ca
                    </a>
                    <a
                      href="tel:+16138944632"
                      className="block font-medium text-foreground transition-colors hover:text-brand-500"
                    >
                      613-894-4632
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-brand-500/5 p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  Free Strategy Session
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Not sure where to start? Book a 30-minute call. We&rsquo;ll
                  analyze your current setup and outline opportunities — no
                  strings attached.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
