"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const KATEGORIEN = [
  "Alle",
  "Texte & Schreiben",
  "Recherche & Analyse",
  "Planung & Vorbereitung",
  "Bilder & Grafiken",
  "Präsentationen",
  "Video & Audio",
  "Fortbildung & Wissen",
];

const DSGVO_COLOR: Record<string, string> = {
  grün: "#059669",
  gelb: "#D97706",
  rot: "#DC2626",
};

const DSGVO_LABEL: Record<string, string> = {
  grün: "DSGVO konform",
  gelb: "Eingeschränkt",
  rot: "Kritisch",
};

type Tool = {
  name: string;
  slug: string;
  kurzbeschreibung?: string;
  highlight?: boolean;
  bewertung?: number;
  logoUrl?: string | null;
  kategorie?: string[];
  preismodell?: string;
  dsgvo?: string;
};

function Stars({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i <= value ? "#F59E0B" : "#E5E7EB"}
        >
          <path d="M6 1l1.4 2.8 3.1.5-2.2 2.1.5 3.1L6 8l-2.8 1.5.5-3.1L1.5 4.3l3.1-.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function ToolsClient({ tools }: { tools: Tool[] }) {
  const [activeKat, setActiveKat] = useState("Alle");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchKat =
        activeKat === "Alle" ||
        (t.kategorie ?? []).includes(activeKat);
      const matchSearch =
        search.trim() === "" ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        (t.kurzbeschreibung ?? "").toLowerCase().includes(search.toLowerCase());
      return matchKat && matchSearch;
    });
  }, [tools, activeKat, search]);

  return (
    <>
      {/* Filter-Leiste */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-2 flex-1 min-w-0">
            {KATEGORIEN.map((kat) => (
              <button
                key={kat}
                onClick={() => setActiveKat(kat)}
                className="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap"
                style={
                  activeKat === kat
                    ? { backgroundColor: "#2596be", color: "#fff" }
                    : { backgroundColor: "#F5F5F7", color: "#4B5563" }
                }
              >
                {kat}
              </button>
            ))}
          </div>

          {/* Suchfeld */}
          <div className="relative flex-shrink-0">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Suchen..."
              className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#2596be] bg-white w-40"
            />
          </div>
        </div>
      </div>

      {/* Card-Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-[400px]">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="py-24 text-center rounded-2xl border border-gray-100 bg-[#F5F5F7]">
              <p className="text-gray-400 text-sm">Keine Tools gefunden.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group relative flex flex-col bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-200"
                >
                  {/* Header: Logo + Highlight */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#F5F5F7] flex items-center justify-center overflow-hidden flex-shrink-0">
                      {tool.logoUrl ? (
                        <Image
                          src={tool.logoUrl}
                          alt={tool.name}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-gray-300">
                          {tool.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    {tool.highlight && (
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}
                      >
                        Highlight
                      </span>
                    )}
                  </div>

                  {/* Name + Beschreibung */}
                  <h3
                    className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-[#2596be] transition-colors"
                    style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                  >
                    {tool.name}
                  </h3>
                  {tool.kurzbeschreibung && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                      {tool.kurzbeschreibung}
                    </p>
                  )}

                  {/* Footer: Badges + Stars */}
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 flex-wrap">
                    {tool.preismodell && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F5F5F7] text-gray-500">
                        {tool.preismodell}
                      </span>
                    )}
                    {tool.dsgvo && (
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${DSGVO_COLOR[tool.dsgvo]}18`,
                          color: DSGVO_COLOR[tool.dsgvo],
                        }}
                      >
                        {DSGVO_LABEL[tool.dsgvo]}
                      </span>
                    )}
                    <span className="ml-auto">
                      <Stars value={tool.bewertung} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
