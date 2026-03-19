"use client";

import { useState } from "react";
import Link from "next/link";
import FilterBar from "@/components/FilterBar";
import AppSlideshow from "@/components/AppSlideshow";

const apps = [
  {
    id: "ferienplaner",
    title: "Ferienplaner",
    description: "Ferienprogramme, Elternbriefe und Dienstpläne in Minuten statt Stunden erstellen.",
    highlight: "Spart durchschnittlich 45 Minuten pro Ferienwoche",
    href: "https://ferienplaner.kinderleicht.ai",
    tags: ["Kita", "GBS", "GTS"],
    badges: ["Kostenlos", "Keine Anmeldung", "PDF-Export"],
    features: [
      "Ferienprogramm mit Mottos, Aktivitäten und Zeitplan generieren",
      "Elternbriefe automatisch formulieren und als PDF exportieren",
      "Dienstpläne mit Schichten und Betreuungsschlüssel erstellen",
      "Alles als PDF oder Word herunterladen",
      "Direkt im Browser, ohne Installation",
    ],
    slides: [
      { src: "/ferienplaner-1.webp", alt: "Ferienplaner Übersicht" },
      { src: "/ferienplaner-2.webp", alt: "Elternbrief Generator" },
      { src: "/ferienplaner-3.webp", alt: "Dienstplan Generator" },
      { src: "/ferienplaner-4.webp", alt: "Ferienprogramm Generator" },
    ],
    domain: "ferienplaner.kinderleicht.ai",
    badge: "Beta",
    badgeColor: "bg-amber-50 text-amber-600",
  },
  {
    id: "lernstufen",
    title: "Lernstufen-Generator",
    description: "Text eingeben oder hochladen und die KI erstellt automatisch differenzierte Versionen für unterschiedliche Leistungsniveaus.",
    highlight: "Aus 1 Text werden 4 Niveaustufen in unter 30 Sekunden",
    href: "https://lernstufen.kinderleicht.ai",
    tags: ["Schule", "Kita", "Inklusion"],
    badges: ["Kostenlos", "Keine Anmeldung", "PDF-Export"],
    features: [
      "Grundstufe: vereinfacht für Kinder mit Förderbedarf",
      "Mittelstufe: Standard-Niveau für die Klasse",
      "Erweiterung: anspruchsvoll für leistungsstarke Kinder",
      "Einfache Sprache: barrierefrei auf A2-Niveau",
      "Direkt im Browser, ohne Installation",
    ],
    slides: [
      { src: "/Lernstufen 1.webp", alt: "Lernstufen Übersicht" },
      { src: "/Lernstufen 2.webp", alt: "Lernstufen Eingabe" },
      { src: "/Lernstufen 3.webp", alt: "Lernstufen Ergebnis" },
      { src: "/Lernstufen 4.webp", alt: "Lernstufen Export" },
    ],
    domain: "lernstufen.kinderleicht.ai",
    badge: "Beta",
    badgeColor: "bg-amber-50 text-amber-600",
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

      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            <div className="space-y-16">
              {filtered.map((app, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div key={app.id}>
                    {/* App-Nummer + Titel als Section Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#2596be" }}>
                        {index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{app.title}</h2>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${app.badgeColor}`}>
                        {app.badge}
                      </span>
                    </div>

                    <div className="rounded-2xl border border-gray-100 overflow-hidden">
                      <div className={`grid grid-cols-1 lg:grid-cols-2 ${isReversed ? "" : ""}`}>
                        {/* Slideshow */}
                        {app.slides && (
                          <div className={`bg-[#F5F5F7] p-6 lg:p-8 flex items-center justify-center ${isReversed ? "lg:order-2" : ""}`}>
                            <AppSlideshow slides={app.slides} url={app.href} domain={app.domain} />
                          </div>
                        )}

                        {/* Info */}
                        <div className={`p-6 lg:p-8 flex flex-col ${isReversed ? "lg:order-1" : ""}`}>
                          <p className="text-base text-gray-500 leading-relaxed mb-3">{app.description}</p>

                          {/* Highlight */}
                          <p className="text-sm font-semibold text-[#2596be] mb-5">{app.highlight}</p>

                          <ul className="space-y-2.5 mb-5 flex-1">
                            {app.features.map((f) => (
                              <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                                <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {f}
                              </li>
                            ))}
                          </ul>

                          {/* Badges */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {app.badges.map((b) => (
                              <span key={b} className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-600">{b}</span>
                            ))}
                          </div>

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
                  </div>
                );
              })}

              {/* Kommt-bald-Teaser */}
              <div className="rounded-2xl border border-dashed border-gray-200 p-8 sm:p-12 text-center">
                <p className="text-2xl mb-2">🚀</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Weitere Apps in Entwicklung</h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto mb-5">
                  Wir bauen neue Tools aus der Praxis heraus. Du hast eine Idee, was dir im Alltag helfen würde?
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Idee vorschlagen
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 text-base">Keine Apps gefunden.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
