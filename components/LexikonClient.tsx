"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";

type LexikonEntry = {
  begriff: string;
  slug: string;
  kurzdefinition: string | null;
  buchstabe: string | null;
  kategorie: string | null;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function LexikonClient({ entries }: { entries: LexikonEntry[] }) {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Group entries by first letter
  const grouped: Record<string, LexikonEntry[]> = {};
  for (const entry of entries) {
    const letter = (entry.buchstabe || entry.begriff?.charAt(0) || "").toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(entry);
  }

  const lettersWithEntries = new Set(Object.keys(grouped));

  const scrollToLetter = useCallback((letter: string) => {
    setActiveLetter(letter);
    const el = sectionRefs.current[letter];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  if (entries.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 text-lg">Noch keine Einträge vorhanden.</p>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Alphabet bar */}
      <div className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {ALPHABET.map((letter) => {
            const hasEntries = lettersWithEntries.has(letter);
            const isActive = activeLetter === letter;
            return (
              <button
                key={letter}
                disabled={!hasEntries}
                onClick={() => hasEntries && scrollToLetter(letter)}
                className={`
                  w-9 h-9 rounded-lg text-sm font-semibold transition-all duration-150
                  ${isActive && hasEntries
                    ? "bg-[#2596be] text-white shadow-sm"
                    : hasEntries
                      ? "bg-gray-100 text-gray-700 hover:bg-[#2596be]/10 hover:text-[#2596be] cursor-pointer"
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

      {/* Grouped entries */}
      <div className="mt-8 space-y-12">
        {ALPHABET.filter((l) => lettersWithEntries.has(l)).map((letter) => (
          <div
            key={letter}
            ref={(el) => { sectionRefs.current[letter] = el; }}
          >
            <h2 className="text-4xl font-bold text-gray-200 mb-5">{letter}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[letter].map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/ki-abc/${entry.slug}`}
                  className="group block rounded-2xl border border-gray-100 bg-white p-5 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-200"
                >
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2596be] transition-colors mb-1.5">
                    {entry.begriff}
                  </h3>
                  {entry.kurzdefinition && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {entry.kurzdefinition}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
