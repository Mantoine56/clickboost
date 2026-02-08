import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://clickboost.ca",
    siteName: "ClickBoost",
    title: "ClickBoost — We Build What Others Can't",
    description:
      "Modern web development, SEO, AI implementation, and app development agency.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickBoost — We Build What Others Can't",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
