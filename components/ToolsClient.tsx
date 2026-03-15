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

const DSGVO_DOT: Record<string, string> = {
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
    <span className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill={i <= value ? "#F59E0B" : "#E5E7EB"}>
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
      const matchKat = activeKat === "Alle" || (t.kategorie ?? []).includes(activeKat);
      const q = search.trim().toLowerCase();
      const matchSearch = !q ||
        t.name.toLowerCase().includes(q) ||
        (t.kurzbeschreibung ?? "").toLowerCase().includes(q);
      return matchKat && matchSearch;
    });
  }, [tools, activeKat, search]);

  return (
    <>
      {/* ── Filter-Leiste ─────────────────────────────────── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3">
            {/* Scrollbare Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide flex-1 min-w-0">
              {KATEGORIEN.map((kat) => (
                <button
                  key={kat}
                  onClick={() => setActiveKat(kat)}
                  className="flex-shrink-0 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap"
                  style={
                    activeKat === kat
                      ? { backgroundColor: "#2596be", color: "#fff" }
                      : { backgroundColor: "transparent", color: "#6B7280" }
                  }
                >
                  {kat}
                </button>
              ))}
            </div>

            {/* Trennlinie + Suche */}
            <div className="flex-shrink-0 flex items-center gap-2 border-l border-gray-100 pl-3">
              <div className="relative">
                <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Suchen..."
                  className="pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#2596be] bg-white w-36 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Card-Grid ─────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] min-h-[60vh]">
        <div className="max-w-6xl mx-auto">

          {/* Ergebnis-Zeile */}
          <p className="text-xs text-gray-400 mb-5">
            {filtered.length} {filtered.length === 1 ? "Tool" : "Tools"} gefunden
          </p>

          {filtered.length === 0 ? (
            <div className="py-24 text-center rounded-2xl bg-white border border-gray-100">
              <p className="text-gray-400 text-sm">Keine Tools für diese Auswahl.</p>
              <button
                onClick={() => { setActiveKat("Alle"); setSearch(""); }}
                className="mt-4 text-xs underline text-gray-400 hover:text-gray-700"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  {/* Card Body */}
                  <div className="flex flex-col p-5 flex-1">
                    {/* Logo + Highlight Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative w-12 h-12 rounded-xl bg-[#F5F5F7] flex-shrink-0 overflow-hidden">
                        {tool.logoUrl ? (
                          <Image src={tool.logoUrl} alt={tool.name} fill className="object-contain p-2" sizes="48px" />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-300">
                            {tool.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      {tool.highlight && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}>
                          Empfohlen
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3
                      className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-[#2596be] transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    >
                      {tool.name}
                    </h3>

                    {/* Beschreibung */}
                    {tool.kurzbeschreibung && (
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {tool.kurzbeschreibung}
                      </p>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-3 border-t border-gray-50 flex items-center gap-3">
                    {/* Preismodell */}
                    {tool.preismodell && (
                      <span className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">
                        {tool.preismodell}
                      </span>
                    )}
                    {/* DSGVO-Punkt */}
                    {tool.dsgvo && (
                      <span className="flex items-center gap-1 text-[11px] text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: DSGVO_DOT[tool.dsgvo] }} />
                        {DSGVO_LABEL[tool.dsgvo]}
                      </span>
                    )}
                    {/* Stars */}
                    {tool.bewertung && (
                      <span className="ml-auto">
                        <Stars value={tool.bewertung} />
                      </span>
                    )}
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
