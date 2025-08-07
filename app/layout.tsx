import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import 21st.dev Toolbar components for AI-powered editing capabilities
import { TwentyFirstToolbar } from "@21st-extension/toolbar-next";
import { ReactPlugin } from "@21st-extension/react";
import { ThemeProvider } from "next-themes";
// Global navigation bar
import { MainNavigation } from "@/components/navigation/main-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ClickBoost - Professional Web & App Development Agency",
    template: "%s | ClickBoost"
  },
  description: "Transform your ideas into powerful digital solutions. ClickBoost specializes in custom web development, mobile apps, and UI/UX design. Get your project started today.",
  keywords: ["web development", "app development", "ui/ux design", "custom software", "digital agency", "clickboost"],
  authors: [{ name: "ClickBoost Development Team" }],
  creator: "ClickBoost",
  publisher: "ClickBoost",
  metadataBase: new URL("https://clickboost.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clickboost.ca",
    title: "ClickBoost - Professional Web & App Development Agency",
    description: "Transform your ideas into powerful digital solutions. ClickBoost specializes in custom web development, mobile apps, and UI/UX design.",
    siteName: "ClickBoost",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ClickBoost - Web & App Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickBoost - Professional Web & App Development Agency",
    description: "Transform your ideas into powerful digital solutions. Custom web development, mobile apps, and UI/UX design.",
    images: ["/twitter-image.svg"],
    creator: "@clickboost",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Site-wide navigation: fixed so it appears on every page */}
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <MainNavigation />
          </div>

          {children}
        </ThemeProvider>
        {/* 21st.dev Toolbar for AI-powered editing - only renders in development mode */}
        <TwentyFirstToolbar
          config={{
            plugins: [ReactPlugin],
          }}
        />
      </body>
    </html>
  );
}
