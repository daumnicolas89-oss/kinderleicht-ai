"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { DSGVO_COLOR, DSGVO_BG, DSGVO_LABEL } from "@/lib/constants";

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
  const [activeKat, setActiveKat]     = useState("Alle");
  const [search, setSearch]           = useState("");
  const [onlyHighlight, setHighlight] = useState(false);

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const matchKat  = activeKat === "Alle" || (t.kategorie ?? []).includes(activeKat);
      const matchHL   = !onlyHighlight || t.highlight === true;
      const q         = search.trim().toLowerCase();
      const matchSearch = !q ||
        t.name.toLowerCase().includes(q) ||
        (t.kurzbeschreibung ?? "").toLowerCase().includes(q);
      return matchKat && matchHL && matchSearch;
    });
  }, [tools, activeKat, search, onlyHighlight]);

  const hasFilter = activeKat !== "Alle" || onlyHighlight || search.trim() !== "";

  return (
    <>
      {/* ── Filter-Leiste ─────────────────────────────────── */}
      <div className="sticky top-[72px] z-30 bg-white border border-gray-100 rounded-2xl shadow-sm mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">

            {/* Links: Kategorie + Empfohlen */}
            <div className="flex items-center gap-2">
              <select
                value={activeKat}
                onChange={(e) => setActiveKat(e.target.value)}
                aria-label="Kategorie filtern"
                className="px-4 py-2 text-sm rounded-lg border bg-white transition-colors focus:outline-none cursor-pointer"
                style={
                  activeKat !== "Alle"
                    ? { borderColor: "#2596be", color: "#2596be" }
                    : { borderColor: "#e5e7eb", color: "#374151" }
                }
              >
                {KATEGORIEN.map((kat) => (
                  <option key={kat} value={kat}>
                    {kat === "Alle" ? "Alle Kategorien" : kat}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setHighlight((v) => !v)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg border transition-colors whitespace-nowrap"
                style={
                  onlyHighlight
                    ? { borderColor: "#2596be", backgroundColor: "#EBF6FA", color: "#2596be" }
                    : { borderColor: "#e5e7eb", color: "#374151" }
                }
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill={onlyHighlight ? "#2596be" : "none"} stroke={onlyHighlight ? "#2596be" : "currentColor"} strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Empfohlen
              </button>
            </div>

            {/* Rechts: Suche + Reset */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Tools durchsuchen"
                  placeholder="Tools durchsuchen..."
                  className="w-full sm:w-52 pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2596be] bg-white transition-colors"
                />
              </div>
              {hasFilter && (
                <button
                  onClick={() => { setActiveKat("Alle"); setHighlight(false); setSearch(""); }}
                  className="flex-shrink-0 text-xs text-gray-400 hover:text-gray-600 transition-colors px-2 py-2"
                >
                  Zurücksetzen
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Card-Grid ─────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#F5F5F7] min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-5 gap-4">
            <p className="text-[15px] text-gray-400 hidden sm:block">
              Geprüfte KI-Tools mit Tipps für den pädagogischen Einsatz.
            </p>
            <p className="text-xs text-gray-400 flex-shrink-0">
              {filtered.length} {filtered.length === 1 ? "Tool" : "Tools"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center rounded-2xl bg-white border border-gray-100">
              <p className="text-gray-400 text-sm mb-3">Keine Tools gefunden.</p>
              <button
                onClick={() => { setActiveKat("Alle"); setHighlight(false); setSearch(""); }}
                className="text-xs text-[#2596be] hover:underline"
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
                  <div className="flex flex-col p-5 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative w-11 h-11 rounded-xl bg-[#F5F5F7] flex-shrink-0 overflow-hidden">
                        {tool.logoUrl ? (
                          <Image src={tool.logoUrl} alt={tool.name} fill className="object-contain p-2" sizes="44px" />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-base font-bold text-gray-300">
                            {tool.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      {tool.highlight && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                          Empfohlen
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-[#2596be] transition-colors"
                    >
                      {tool.name}
                    </h3>
                    {tool.kurzbeschreibung && (
                      <p className="text-[15px] text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {tool.kurzbeschreibung}
                      </p>
                    )}
                  </div>

                  <div className="px-5 py-3 border-t border-gray-50 flex items-center gap-2 flex-wrap">
                    {tool.dsgvo && (
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: DSGVO_BG[tool.dsgvo] ?? "#F3F4F6",
                          color: DSGVO_COLOR[tool.dsgvo] ?? "#374151",
                        }}
                      >
                        {DSGVO_LABEL[tool.dsgvo]}
                      </span>
                    )}
                    {tool.preismodell && (
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                        {tool.preismodell}
                      </span>
                    )}
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
