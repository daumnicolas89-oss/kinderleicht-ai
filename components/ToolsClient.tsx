"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { DSGVO_COLOR, DSGVO_BG, DSGVO_LABEL } from "@/lib/constants";
import FilterBar from "@/components/FilterBar";

const KATEGORIEN = [
  "Texte & Schreiben",
  "Recherche & Analyse",
  "Planung & Vorbereitung",
  "Bilder & Grafiken",
  "Präsentationen",
  "Video & Audio",
  "Fortbildung & Wissen",
];

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
  const [activeKat, setActiveKat]     = useState("");
  const [search, setSearch]           = useState("");
  const [onlyHighlight, setHighlight] = useState(false);

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchKat  = !activeKat || (t.kategorie ?? []).includes(activeKat);
      const matchHL   = !onlyHighlight || t.highlight === true;
      const q         = search.trim().toLowerCase();
      const matchSearch = !q ||
        t.name.toLowerCase().includes(q) ||
        (t.kurzbeschreibung ?? "").toLowerCase().includes(q);
      return matchKat && matchHL && matchSearch;
    });
  }, [tools, activeKat, search, onlyHighlight]);

  const hasFilter = activeKat !== "" || onlyHighlight || search.trim() !== "";

  return (
    <>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Tools durchsuchen..."
        categories={KATEGORIEN}
        activeCategory={activeKat}
        onCategoryChange={setActiveKat}
        categoryPlaceholder="Alle Kategorien"
        extraChips={
          <button
            onClick={() => setHighlight((v) => !v)}
            className="inline-flex items-center gap-1.5 h-9 px-3 text-sm rounded-full border transition-colors whitespace-nowrap"
            style={
              onlyHighlight
                ? { borderColor: "#2596be", backgroundColor: "#EBF6FA", color: "#2596be" }
                : { borderColor: "#e5e7eb", color: "#374151" }
            }
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill={onlyHighlight ? "#2596be" : "none"} stroke={onlyHighlight ? "#2596be" : "currentColor"} strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Empfohlen
          </button>
        }
        count={filtered.length}
        countLabel="Tools"
        countLabelSingular="Tool"
        hasFilter={hasFilter}
        onReset={() => { setActiveKat(""); setHighlight(false); setSearch(""); }}
      />

      {/* ── Card-Grid ─────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">

          {filtered.length === 0 ? (
            <div className="py-20 text-center rounded-2xl bg-white border border-gray-100">
              <p className="text-gray-400 text-base">Keine Tools gefunden.</p>
              <button
                onClick={() => { setActiveKat(""); setHighlight(false); setSearch(""); }}
                className="mt-4 text-sm font-semibold"
                style={{ color: "#2596be" }}
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="relative w-11 h-11 rounded-xl bg-[#F5F5F7] flex-shrink-0 overflow-hidden">
                        {tool.logoUrl ? (
                          <Image src={tool.logoUrl} alt={tool.name} fill className="object-contain p-2" sizes="44px" />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-base font-bold text-gray-300">
                            {tool.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {tool.highlight && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                            Empfohlen
                          </span>
                        )}
                        <Stars value={tool.bewertung} />
                      </div>
                    </div>
                    <h3
                      className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-[#2596be] transition-colors"
                    >
                      {tool.name}
                    </h3>
                    {tool.kurzbeschreibung && (
                      <p className="text-base text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {tool.kurzbeschreibung}
                      </p>
                    )}
                  </div>
                  <div className="px-6 py-3.5 border-t border-gray-50 flex items-center gap-2 flex-wrap">
                    {tool.dsgvo && (
                      <span
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: DSGVO_BG[tool.dsgvo] ?? "#F5F5F7",
                          color: DSGVO_COLOR[tool.dsgvo] ?? "#374151",
                        }}
                      >
                        {DSGVO_LABEL[tool.dsgvo]}
                      </span>
                    )}
                    {tool.preismodell && (
                      <span className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                        {tool.preismodell}
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
