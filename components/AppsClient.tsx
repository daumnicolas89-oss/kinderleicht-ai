"use client";

import { useState } from "react";
import Link from "next/link";
import FilterBar from "@/components/FilterBar";
import FerienplanerSlideshow from "@/components/FerienplanerSlideshow";

const apps = [
  {
    id: "ferienplaner",
    title: "Ferienplaner",
    description: "Ferienprogramme, Elternbriefe und Dienstpläne in Minuten statt Stunden erstellen.",
    href: "https://ferienplaner.kinderleicht.ai",
    tags: ["Planung", "Kita", "Schule"],
    features: [
      "Ferienprogramm mit Mottos, Aktivitäten und Zeitplan generieren",
      "Elternbriefe automatisch formulieren und als PDF exportieren",
      "Dienstpläne mit Schichten und Betreuungsschlüssel erstellen",
      "Alles als PDF oder Word herunterladen",
      "Direkt im Browser, ohne Installation",
    ],
    hasSlideshow: true,
  },
];

export default function AppsClient() {
  const [search, setSearch] = useState("");

  const q = search.toLowerCase().trim();
  const filtered = apps.filter((a) => {
    if (!q) return true;
    return a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
  });

  const hasFilter = search.trim() !== "";

  return (
    <>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Apps durchsuchen..."
        count={filtered.length}
        countLabel="Apps"
        countLabelSingular="App"
        hasFilter={hasFilter}
        onReset={() => setSearch("")}
      />

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            <div className="space-y-12">
              {filtered.map((app) => (
                <div key={app.id} className="rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Slideshow */}
                    {app.hasSlideshow && (
                      <div className="bg-[#F5F5F7] p-6 lg:p-8 flex items-center justify-center">
                        <FerienplanerSlideshow />
                      </div>
                    )}

                    {/* Info */}
                    <div className="p-6 lg:p-8 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <h2 className="text-xl font-bold text-gray-900">{app.title}</h2>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                          Live
                        </span>
                      </div>
                      <p className="text-base text-gray-500 leading-relaxed mb-5">{app.description}</p>

                      <ul className="space-y-2.5 mb-6 flex-1">
                        {app.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={app.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: "#2596be" }}
                        >
                          App öffnen
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </a>
                        <div className="flex gap-2">
                          {app.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#F5F5F7] text-gray-500">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-base">Keine Apps gefunden.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
