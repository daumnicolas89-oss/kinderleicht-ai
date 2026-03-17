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

  const filtered = useMemo(() => {
    if (!search.trim()) return entries;
    const q = search.toLowerCase();
    return entries.filter(
      (e) =>
        e.begriff.toLowerCase().includes(q) ||
        (e.kurzdefinition && e.kurzdefinition.toLowerCase().includes(q))
    );
  }, [entries, search]);

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
      const y = el.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const hasFilter = search.trim() !== "";

  return (
    <>
      {/* ── FilterBar (gleiche Struktur wie Tools/Downloads/Apps) ── */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Suchfeld */}
          <div className="relative mb-3">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setActiveLetter(null); }}
              placeholder="Begriff suchen..."
              aria-label="Begriff suchen"
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2596be]/50 focus:border-[#2596be] bg-[#F9FAFB] transition-colors"
            />
          </div>

          {/* Alphabet + Count */}
          <div className="flex items-center gap-2">
            <div className="overflow-x-auto scrollbar-hide flex-1 -mx-1 px-1">
              <div className="flex gap-[3px] min-w-max">
                {ALPHABET.map((letter) => {
                  const hasEntries = lettersWithEntries.has(letter);
                  const isActive = activeLetter === letter;
                  return (
                    <button
                      key={letter}
                      disabled={!hasEntries}
                      onClick={() => hasEntries && scrollToLetter(letter)}
                      aria-label={`Buchstabe ${letter}`}
                      className={`
                        w-8 h-8 rounded-full text-xs font-semibold transition-all duration-150 flex-shrink-0
                        ${isActive && hasEntries
                          ? "bg-[#2596be] text-white"
                          : hasEntries
                            ? "text-gray-600 hover:bg-[#2596be] hover:text-white cursor-pointer"
                            : "text-gray-300 cursor-default"
                        }
                      `}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>

            {hasFilter && (
              <button
                onClick={() => { setSearch(""); setActiveLetter(null); }}
                className="h-9 px-3 text-sm text-gray-500 hover:text-gray-600 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Zurücksetzen
              </button>
            )}

            <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0 hidden sm:block">
              {filtered.length} {filtered.length === 1 ? "Begriff" : "Begriffe"}
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-base">Kein Begriff gefunden.</p>
              <button
                onClick={() => setSearch("")}
                className="mt-4 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "#2596be" }}
              >
                Suche zurücksetzen
              </button>
            </div>
          )}

          {/* Grouped entries */}
          <div className="space-y-14">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {grouped[letter].map((entry) => {
                    const colors = entry.kategorie ? KATEGORIE_COLOR[entry.kategorie] : null;
                    return (
                      <Link
                        key={entry.slug}
                        href={`/ki-abc/${entry.slug}`}
                        className="group block rounded-2xl border border-gray-100 bg-white p-6 hover:border-[#2596be]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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
                            className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full"
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
        </div>
      </section>
    </>
  );
}
