"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import SearchComponent from "./search";

export function Navbar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by using a default during SSR
  const logoSrc = mounted
    ? theme === "dark"
      ? "/m-white.png"
      : "/m-black.png"
    : "/m-white.png";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-y bg-background">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4 border-x">
        <div className="flex items-center mr-auto">
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src={logoSrc}
              alt="Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="font-semibold tracking-tight hover:text-foreground transition-colors"
          >
            Devfolio
          </Link>
          <Link
            href="/blogs"
            className="text-muted-foreground mr-6 hover:text-foreground transition-colors"
          >
            Blogs
          </Link>
          {/* <Link
            href="https://drive.google.com/file/d/1wDUEUoznueu4YE6_pzjnhWyjTUlwuoCf/view?usp=drive_link"
            target="_blank"
            className="text-muted-foreground mr-6 hover:text-foreground transition-colors"
          >
            Resume
          </Link> */}
        </nav>
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <SearchComponent />
          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <div className="block xs:block">
            <SearchComponent />
          </div>
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl px-4 py-4 space-y-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block font-semibold tracking-tight hover:text-foreground transition-colors"
            >
              Devfolio
            </Link>
            <Link
              href="/blogs"
              onClick={closeMobileMenu}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Blogs
            </Link>
            {/* <Link
              href="https://drive.google.com/file/d/1wDUEUoznueu4YE6_pzjnhWyjTUlwuoCf/view?usp=drive_link"
              target="_blank"
              onClick={closeMobileMenu}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </Link> */}
            {/* Mobile Search - only show if hidden on xs screens */}
          </div>
        </div>
      )}
    </header>
  );
}
