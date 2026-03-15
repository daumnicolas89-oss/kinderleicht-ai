"use client";

import { useState } from "react";
import Image from "next/image";

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
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* ── Filter Bar ──────────────────────────────── */}
        <div className="sticky top-[72px] z-30 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <select
                value={activeKat}
                onChange={(e) => setActiveKat(e.target.value)}
                className="text-sm font-medium text-gray-700 bg-[#F5F5F7] border-none rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2596be]/30 cursor-pointer"
              >
                <option value="">Alle Kategorien</option>
                {KATEGORIEN.map((k) => (
                  <option key={k} value={k}>{k}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 sm:ml-auto">
              <input
                type="text"
                placeholder="Downloads durchsuchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-sm bg-[#F5F5F7] border-none rounded-lg px-3 py-2 w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-[#2596be]/30 placeholder:text-gray-400"
              />
              {hasFilter && (
                <button
                  onClick={() => { setActiveKat(""); setSearch(""); }}
                  className="text-xs font-medium text-gray-400 hover:text-gray-600 whitespace-nowrap transition-colors"
                >
                  Zurücksetzen
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Grid ────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((dl) => {
              const href = dl.dateiUrl || dl.externer_link || "#";
              const isExternal = !dl.dateiUrl && !!dl.externer_link;

              return (
                <div
                  key={dl.slug}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  {/* Preview */}
                  <div className="relative w-full bg-[#F5F5F7]" style={{ aspectRatio: "4/3" }}>
                    {dl.imageUrl ? (
                      <Image
                        src={dl.imageUrl}
                        alt={dl.titel}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                          {KATEGORIE_ICON[dl.kategorie || ""] || (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
                              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-4 flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {dl.typ && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                          {dl.typ}
                        </span>
                      )}
                      {dl.kostenlos && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#059669]">
                          Kostenlos
                        </span>
                      )}
                      {dl.kategorie && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                          {dl.kategorie}
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-[15px] font-semibold text-gray-900 mb-1"
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    >
                      {dl.titel}
                    </h3>

                    {dl.kurzbeschreibung && (
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1 mb-3">
                        {dl.kurzbeschreibung}
                      </p>
                    )}

                    <a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      download={dl.dateiUrl ? true : undefined}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity mt-auto"
                      style={{ backgroundColor: "#2596be" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Herunterladen
                    </a>
                  </div>
                </div>
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
  );
}
