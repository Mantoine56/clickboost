"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <Input
        id="footer-email"
        type="email"
        name="email"
        placeholder="you@company.com"
        autoComplete="email"
        required
        className="flex-1"
      />
      <Button
        type="submit"
        size="icon"
        className="shrink-0 bg-brand-500 hover:bg-brand-600"
        aria-label="Subscribe to newsletter"
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  );
}
