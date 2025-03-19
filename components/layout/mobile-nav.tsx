"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, FileText, Briefcase, Bookmark, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="fixed top-0 right-0 p-4">
            <button
              onClick={closeMenu}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="fixed h-full w-full flex flex-col items-center justify-center gap-8 text-foreground">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-xl hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-xl hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/articles"
              onClick={closeMenu}
              className="text-xl hover:text-primary transition-colors"
            >
              Writings
            </Link>
            <Link
              href="/bookmarks"
              onClick={closeMenu}
              className="text-xl hover:text-primary transition-colors"
            >
              Bookmarks
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
} 