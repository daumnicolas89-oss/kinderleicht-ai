"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import Link from "next/link";

type LexikonEntry = {
  begriff: string;
  slug: string;
  kurzdefinition: string | null;
  buchstabe: string | null;
  kategorie: string | null;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const KATEGORIE_COLOR: Record<string, { bg: string; text: string }> = {
  "KI & Technologie": { bg: "#EBF6FA", text: "#2596be" },
  "Datenschutz & Recht": { bg: "#FEF9C3", text: "#92400E" },
  "Pädagogik & Didaktik": { bg: "#DCFCE7", text: "#166534" },
  "Tools & Software": { bg: "#F3E8FF", text: "#6B21A8" },
};

export default function LexikonClient({ entries }: { entries: LexikonEntry[] }) {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Filter by search
  const filtered = useMemo(() => {
    if (!search.trim()) return entries;
    const q = search.toLowerCase();
    return entries.filter(
      (e) =>
        e.begriff.toLowerCase().includes(q) ||
        (e.kurzdefinition && e.kurzdefinition.toLowerCase().includes(q))
    );
  }, [entries, search]);

  // Group entries by first letter
  const grouped: Record<string, LexikonEntry[]> = {};
  for (const entry of filtered) {
    const letter = (entry.buchstabe || entry.begriff?.charAt(0) || "").toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(entry);
  }

  const lettersWithEntries = new Set(Object.keys(grouped));

  const scrollToLetter = useCallback((letter: string) => {
    setActiveLetter(letter);
    setSearch("");
    const el = sectionRefs.current[letter];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Sticky bar: Search + Alphabet */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-gray-100">
        {/* Search */}
        <div className="max-w-md mx-auto mb-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setActiveLetter(null); }}
              placeholder="Begriff suchen..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#2596be] bg-white"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Alphabet */}
        <div className="flex justify-center gap-[3px] sm:gap-1">
          {ALPHABET.map((letter) => {
            const hasEntries = lettersWithEntries.has(letter);
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                disabled={!hasEntries}
                onClick={() => hasEntries && scrollToLetter(letter)}
                className={`
                  w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs sm:text-sm font-semibold transition-all duration-150 flex-shrink-0
                  ${isActive && hasEntries
                    ? "bg-[#2596be] text-white"
                    : hasEntries
                      ? "text-gray-600 hover:bg-[#2596be]/10 hover:text-[#2596be] cursor-pointer"
                      : "text-gray-200 cursor-default"
                  }
                `}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count when searching */}
      {search && (
        <p className="text-sm text-gray-400 mt-6 mb-2">
          {filtered.length} {filtered.length === 1 ? "Ergebnis" : "Ergebnisse"} für &quot;{search}&quot;
        </p>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Kein Begriff gefunden.</p>
          <button
            onClick={() => setSearch("")}
            className="mt-3 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#2596be" }}
          >
            Suche zurücksetzen
          </button>
        </div>
      )}

      {/* Grouped entries */}
      <div className="mt-8 space-y-14">
        {ALPHABET.filter((l) => lettersWithEntries.has(l)).map((letter) => (
          <div
            key={letter}
            ref={(el) => { sectionRefs.current[letter] = el; }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-3xl font-bold" style={{ color: "#2596be" }}>{letter}</span>
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-300">{grouped[letter].length} {grouped[letter].length === 1 ? "Begriff" : "Begriffe"}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[letter].map((entry) => {
                const colors = entry.kategorie ? KATEGORIE_COLOR[entry.kategorie] : null;
                return (
                  <Link
                    key={entry.slug}
                    href={`/ki-abc/${entry.slug}`}
                    className="group block rounded-2xl border border-gray-100 bg-white p-5 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2596be] transition-colors">
                        {entry.begriff}
                      </h3>
                    </div>
                    {entry.kurzdefinition && (
                      <p className="text-base text-gray-500 leading-relaxed line-clamp-2 mb-3">
                        {entry.kurzdefinition}
                      </p>
                    )}
                    {entry.kategorie && colors && (
                      <span
                        className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: colors.bg, color: colors.text }}
                      >
                        {entry.kategorie}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
