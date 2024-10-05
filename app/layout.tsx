import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClickBoost - Top Web Development & SEO Services in Ottawa',
  description: 'Ottawa\'s leading web development, SEO, and app development company. Affordable, custom solutions for local businesses. Boost your online presence with our expert services.',
  keywords: 'Web Development Ottawa, SEO Services Ottawa, App Development Ottawa, Web Design Ottawa, SEO Expert Ottawa, Custom Web Development Ottawa, Mobile App Development Ottawa, Digital Marketing Ottawa, SEO Consultant Ottawa, Web Development Company Ottawa, Local SEO Services Ottawa, Ottawa App Developers, Ottawa SEO Specialist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.clickboost.ca" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ClickBoost" />
        <meta property="og:title" content="ClickBoost - Top Web Development & SEO Services in Ottawa" />
        <meta property="og:description" content="Ottawa's leading web development, SEO, and app development company. Affordable, custom solutions for local businesses. Boost your online presence with our expert services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clickboost.ca" />
        <meta property="og:image" content="https://www.clickboost.ca/og-image.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}