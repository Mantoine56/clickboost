'use client';

import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <Image src="/logo.png" alt="ClickBoost Logo" width={40} height={40} className="mr-2" />
          <h1 className="text-2xl font-bold text-primary">ClickBoost</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:bg-primary/10"
              >
                {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-sm">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  className="block py-2 px-4 text-center hover:bg-primary/10 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="w-full text-center py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  toggleMobileMenu();
                }}
                className="hover:bg-primary/10"
              >
                {theme === 'dark' ? <SunIcon className="h-5 w-5 mr-2" /> : <MoonIcon className="h-5 w-5 mr-2" />}
                Toggle theme
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}