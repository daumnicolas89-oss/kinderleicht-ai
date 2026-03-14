"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              <span style={{ color: "#2596be" }}>ki</span>
              <span className="text-gray-900">nderleicht</span>
              <span className="text-gray-400">.ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/tools"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/werkzeuge"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Werkzeuge
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4">
            <Link
              href="/tools"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Tools
            </Link>
            <Link
              href="/werkzeuge"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Werkzeuge
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
