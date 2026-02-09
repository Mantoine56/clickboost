import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
} from "@/lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ClickBoost — We Build What Others Can't",
    template: "%s | ClickBoost",
  },
  description:
    "Modern web development, SEO, AI implementation, and app development agency. Custom websites, AI agents, and digital growth strategies for businesses ready to scale.",
  keywords: [
    "web development",
    "SEO",
    "AI implementation",
    "app development",
    "Next.js",
    "React",
    "WordPress",
    "Shopify",
    "AI agents",
    "digital marketing",
  ],
  authors: [{ name: "ClickBoost" }],
  creator: "ClickBoost",
  metadataBase: new URL("https://clickboost.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "ClickBoost",
    title: {
      default: "ClickBoost — We Build What Others Can't",
      template: "%s | ClickBoost",
    },
    description:
      "Modern web development, SEO, AI implementation, and app development agency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
        <ThemeProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        {/* Vercel Web Analytics — auto-tracks page views */}
        <Analytics />
      </body>
    </html>
  );
}
