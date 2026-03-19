"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { DSGVO_COLOR, DSGVO_BG, DSGVO_LABEL } from "@/lib/constants";
import FilterBar from "@/components/FilterBar";

const KATEGORIEN = [
  { label: "Texte & Schreiben", icon: "✍️", desc: "Texte erstellen, umschreiben und zusammenfassen" },
  { label: "Recherche & Analyse", icon: "🔍", desc: "Informationen finden, auswerten und aufbereiten" },
  { label: "Planung & Vorbereitung", icon: "📅", desc: "Unterricht und Projekte effizient planen" },
  { label: "Bilder & Grafiken", icon: "🎨", desc: "Illustrationen, Grafiken und Bildmaterial erzeugen" },
  { label: "Präsentationen", icon: "📊", desc: "Folien und Präsentationen schnell gestalten" },
  { label: "Video & Audio", icon: "🎬", desc: "Videos, Podcasts und Audiomaterial bearbeiten" },
  { label: "Fortbildung & Wissen", icon: "🎓", desc: "KI verstehen, lernen und im Team weitergeben" },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {KATEGORIEN.map((kat) => {
              const isActive = activeKat === kat.label;
              const count = countPerKat[kat.label] || 0;
              return (
                <button
                  key={kat.label}
                  onClick={() => selectKategorie(kat.label)}
                  className={`group flex items-start gap-3 text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? "border-[#2596be] bg-[#EBF6FA] shadow-md"
                      : "border-gray-100 bg-white hover:border-[#2596be]/20 hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{kat.icon}</span>
                  <div className="min-w-0">
                    <span className={`text-sm font-bold block ${isActive ? "text-[#2596be]" : "text-gray-900"}`}>
                      {kat.label}
                    </span>
                    <span className="text-[12px] text-gray-400 leading-snug block mt-0.5">
                      {kat.desc}
                    </span>
                    {count > 0 && (
                      <span className={`text-[11px] font-semibold mt-2 inline-block ${isActive ? "text-[#2596be]" : "text-gray-400"}`}>
                        {count} Tools →
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
            {/* Alle-Tools Kachel als 8. Element für ausgeglichenes Grid */}
            <button
              onClick={showAll}
              className="group flex items-start gap-3 text-left p-4 sm:p-5 rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 hover:border-[#2596be]/30 hover:bg-[#EBF6FA]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">🔎</span>
              <div className="min-w-0">
                <span className="text-sm font-bold block text-gray-900">Alle Tools</span>
                <span className="text-[12px] text-gray-400 leading-snug block mt-0.5">
                  Alle Kategorien durchsuchen und filtern
                </span>
                <span className="text-[11px] font-semibold mt-2 inline-block text-gray-400">
                  {tools.length} Tools →
                </span>
              </div>
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
