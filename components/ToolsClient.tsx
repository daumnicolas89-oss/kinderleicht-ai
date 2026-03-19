"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { DSGVO_COLOR, DSGVO_BG, DSGVO_LABEL } from "@/lib/constants";
import FilterBar from "@/components/FilterBar";

const KATEGORIEN = [
  { label: "Texte & Schreiben", desc: "Texte erstellen, umschreiben und zusammenfassen", iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
  { label: "Recherche & Analyse", desc: "Informationen finden, auswerten und aufbereiten", iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { label: "Planung & Vorbereitung", desc: "Unterricht und Projekte effizient planen", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { label: "Bilder & Grafiken", desc: "Illustrationen, Grafiken und Bildmaterial erzeugen", iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { label: "Präsentationen", desc: "Folien und Präsentationen schnell gestalten", iconPath: "M7 21l5-2.5L17 21V5a2 2 0 00-2-2H9a2 2 0 00-2 2v16z" },
  { label: "Video & Audio", desc: "Videos, Podcasts und Audiomaterial bearbeiten", iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  { label: "Fortbildung & Wissen", desc: "KI verstehen, lernen und im Team weitergeben", iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
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
  const [showTools, setShowTools]     = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

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

  const countPerKat = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const t of tools) {
      for (const k of t.kategorie ?? []) {
        counts[k] = (counts[k] || 0) + 1;
      }
    }
    return counts;
  }, [tools]);

  function selectKategorie(kat: string) {
    const next = activeKat === kat ? "" : kat;
    setActiveKat(next);
    setShowTools(true);
    setTimeout(() => {
      toolsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function showAll() {
    setActiveKat("");
    setHighlight(false);
    setSearch("");
    setShowTools(true);
    setTimeout(() => {
      toolsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function resetAll() {
    setActiveKat("");
    setHighlight(false);
    setSearch("");
    setShowTools(false);
  }

  return (
    <>
      {/* ── KATEGORIE-KACHELN ALS EINSTIEG ──────── */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-6">
            Wähle eine Kategorie, um passende Tools zu entdecken.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {KATEGORIEN.map((kat) => {
              const isActive = activeKat === kat.label;
              const count = countPerKat[kat.label] || 0;
              return (
                <button
                  key={kat.label}
                  onClick={() => selectKategorie(kat.label)}
                  className={`group relative flex flex-col text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                    isActive
                      ? "border-[#2596be] bg-[#EBF6FA] shadow-lg scale-[1.02]"
                      : "border-transparent bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#2596be]/30"
                  }`}
                  style={{ boxShadow: isActive ? undefined : "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)" }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "bg-[#2596be]/15" : "bg-[#EBF6FA]"
                  }`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                      <path d={kat.iconPath} />
                    </svg>
                  </div>
                  <span className={`text-sm sm:text-base font-bold block leading-tight ${isActive ? "text-[#2596be]" : "text-gray-900"}`}>
                    {kat.label}
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-gray-400 leading-snug block mt-1 line-clamp-2">
                    {kat.desc}
                  </span>
                  {count > 0 && (
                    <span className={`text-[11px] font-semibold mt-auto pt-2 inline-flex items-center gap-0.5 ${isActive ? "text-[#2596be]" : "text-gray-400 group-hover:text-[#2596be]"} transition-colors`}>
                      {count} Tools
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
            {/* Alle-Tools Kachel als 8. Element für ausgeglichenes Grid */}
            <button
              onClick={showAll}
              className="group relative flex flex-col text-left p-4 sm:p-5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/30 transition-all duration-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-[#2596be]/30 hover:bg-[#EBF6FA]/30"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2.5 bg-gray-100 transition-transform duration-200 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-bold block leading-tight text-gray-900">Alle Tools</span>
              <span className="text-[11px] sm:text-[12px] text-gray-400 leading-snug block mt-1 line-clamp-2">
                Alle Kategorien durchsuchen und filtern
              </span>
              <span className="text-[11px] font-semibold mt-auto pt-2 inline-flex items-center gap-0.5 text-gray-400 group-hover:text-[#2596be] transition-colors">
                {tools.length} Tools
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {showTools && (<>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Tools durchsuchen..."
        categories={KATEGORIEN.map((k) => k.label)}
        activeCategory={activeKat}
        onCategoryChange={setActiveKat}
        categoryPlaceholder="Alle Kategorien"
        extraChips={
          <>
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
            <button
              onClick={resetAll}
              className="text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Zurück
            </button>
          </>
        }
        count={filtered.length}
        countLabel="Tools"
        countLabelSingular="Tool"
        hasFilter={hasFilter}
        onReset={() => { setActiveKat(""); setHighlight(false); setSearch(""); }}
      />

      {/* ── Card-Grid ─────────────────────────────────────── */}
      <section ref={toolsRef} className="scroll-mt-20 py-14 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">

          {filtered.length === 0 ? (
            <div className="py-20 text-center rounded-2xl bg-white border border-gray-100">
              <p className="text-gray-500 text-base">Keine Tools gefunden.</p>
              <button
                onClick={() => { setActiveKat(""); setHighlight(false); setSearch(""); }}
                className="mt-4 text-sm font-semibold"
                style={{ color: "#2596be" }}
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col p-5 sm:p-6 flex-1">
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
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {tool.kurzbeschreibung}
                      </p>
                    )}
                  </div>
                  <div className="px-5 sm:px-6 py-3.5 border-t border-gray-50 flex items-center gap-2 flex-wrap">
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
      </>)}
    </>
  );
}
