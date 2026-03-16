"use client";

import { useState } from "react";
import Link from "next/link";
import FilterBar from "@/components/FilterBar";

interface Download {
  titel: string;
  slug: string;
  kurzbeschreibung?: string;
  typ?: string;
  kategorie?: string;
  imageUrl?: string | null;
  dateiUrl?: string;
  externer_link?: string;
  kostenlos?: boolean;
}

const KATEGORIEN = [
  "DSGVO & Datenschutz",
  "Prompts & KI-Anleitungen",
  "Vorlagen & Checklisten",
  "Elternkommunikation",
  "Planung & Organisation",
];

const KATEGORIE_ICON: Record<string, React.ReactNode> = {
  "DSGVO & Datenschutz": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Prompts & KI-Anleitungen": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 015 12H7a7 7 0 015-12z" />
    </svg>
  ),
  "Vorlagen & Checklisten": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  "Elternkommunikation": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  "Planung & Organisation": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
};

export default function DownloadsClient({ downloads }: { downloads: Download[] }) {
  const [activeKat, setActiveKat] = useState("");
  const [search, setSearch] = useState("");

  const q = search.toLowerCase().trim();
  const filtered = downloads.filter((d) => {
    if (activeKat && d.kategorie !== activeKat) return false;
    if (q && !d.titel.toLowerCase().includes(q) && !(d.kurzbeschreibung || "").toLowerCase().includes(q)) return false;
    return true;
  });

  const hasFilter = activeKat !== "" || search !== "";

  return (
    <>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Downloads durchsuchen..."
        categories={KATEGORIEN}
        activeCategory={activeKat}
        onCategoryChange={setActiveKat}
        categoryPlaceholder="Alle Kategorien"
        count={filtered.length}
        countLabel="Downloads"
        countLabelSingular="Download"
        hasFilter={hasFilter}
        onReset={() => { setActiveKat(""); setSearch(""); }}
      />

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
        {/* ── Grid ────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((dl) => {
              return (
                <Link
                  key={dl.slug}
                  href={`/downloads/${dl.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="flex flex-col p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-[#EBF6FA] flex-shrink-0 flex items-center justify-center">
                        {KATEGORIE_ICON[dl.kategorie || ""] || (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        )}
                      </div>
                      <div className="flex gap-1.5">
                        {dl.typ && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                            {dl.typ}
                          </span>
                        )}
                        {dl.kostenlos && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#059669]">
                            Kostenlos
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-[#2596be] transition-colors">
                      {dl.titel}
                    </h3>

                    {dl.kurzbeschreibung && (
                      <p className="text-base text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {dl.kurzbeschreibung}
                      </p>
                    )}
                  </div>

                  <div className="px-6 py-3.5 border-t border-gray-50 flex items-center gap-2 flex-wrap">
                    {dl.kategorie && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                        {dl.kategorie}
                      </span>
                    )}
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold ml-auto group-hover:gap-2.5 transition-all"
                      style={{ color: "#2596be" }}
                    >
                      Ansehen
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-400 text-sm">Keine Downloads gefunden.</p>
          </div>
        )}
        </div>
      </section>
    </>
  );
}
