"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Apps", href: "/apps" },
  { label: "Tools", href: "/tools" },
  { label: "Downloads", href: "/downloads" },
  { label: "KI-ABC", href: "/ki-abc" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b transition-shadow duration-300 ${scrolled ? "border-gray-200 shadow-sm" : "border-gray-100 shadow-none"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-18" style={{ height: "72px" }}>

          {/* Logo — links */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Logo height={64} />
          </Link>

          {/* Desktop Nav — Mitte */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
                    ${active
                      ? "text-[#2596be] bg-[#2596be]/10 font-semibold"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Social — rechts */}
          <div className="flex items-center gap-2">
            {/* Desktop: CTA Button + LinkedIn */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/apps"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 active:scale-[0.96] transition-all"
                style={{ backgroundColor: "#2596be" }}
              >
                Zu den Apps
              </Link>
              <a
                href="https://www.linkedin.com/in/nicolas-daum/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-gray-50 gap-[5px] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü öffnen"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "text-[#2596be] bg-[#2596be]/8"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/apps"
              onClick={() => setMobileOpen(false)}
              className="mx-4 mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2596be" }}
            >
              Zu den Apps
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
