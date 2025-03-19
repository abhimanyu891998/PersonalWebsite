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

  return (
    <>
      {/* Hamburger button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="sm:hidden p-2 -mr-2"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Fullscreen menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-4 py-3 border-b border-border/10 flex justify-between items-center">
              <p className="text-sm font-medium">Go to...</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Navigation links */}
            <nav className="flex-grow overflow-y-auto px-4 py-6">
              <div className="mb-8">
                <p className="text-xs uppercase text-muted-foreground mb-3 font-medium">Navigation</p>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="flex items-center gap-3 py-2 text-foreground">
                      <Home className="w-5 h-5" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles" className="flex items-center gap-3 py-2 text-foreground">
                      <FileText className="w-5 h-5" />
                      <span>Articles</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="flex items-center gap-3 py-2 text-foreground">
                      <Briefcase className="w-5 h-5" />
                      <span>Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bookmarks" className="flex items-center gap-3 py-2 text-foreground">
                      <Bookmark className="w-5 h-5" />
                      <span>Bookmarks</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* General settings */}
              <div>
                <p className="text-xs uppercase text-muted-foreground mb-3 font-medium">General</p>
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-3 py-2 w-full text-left text-foreground"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  <span>Switch to {theme === "dark" ? "light" : "dark"}</span>
                </button>
              </div>
            </nav>
            
            {/* Social links section */}
            <div className="px-4 py-3 border-t border-border/10">
              <p className="text-xs uppercase text-muted-foreground mb-3 font-medium">Connect</p>
              <div className="flex gap-4">
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground">
                  Twitter
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 