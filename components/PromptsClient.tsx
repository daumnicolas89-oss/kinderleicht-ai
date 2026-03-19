"use client";

import { useState, useMemo, useCallback, useRef } from "react";

const KATEGORIEN = [
  { label: "Elternkommunikation", desc: "Briefe, Einladungen und Infos für Eltern", iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Unterrichtsplanung", desc: "Stundenentwürfe, Arbeitsblätter und Materialideen", iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { label: "Differenzierung", desc: "Texte und Aufgaben an verschiedene Niveaus anpassen", iconPath: "M4 6h16M4 12h10M4 18h6" },
  { label: "Berichte & Zeugnisse", desc: "Lernentwicklungsberichte und Beurteilungen", iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
  { label: "Förderpläne", desc: "Individuelle Förderziele und Maßnahmen formulieren", iconPath: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Konzepte & Organisation", desc: "Konzepte, Protokolle und Anträge erstellen", iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Programme & Planung", desc: "Ferienprogramme, Tagesabläufe und Angebote planen", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
];

const ZIELGRUPPEN = ["Krippe & Kita", "Schulen", "GBS & GTS", "Jugendarbeit", "Leitung & Teams", "Verwaltung"];

type Prompt = {
  titel: string;
  slug: string;
  kategorie?: string;
  zielgruppe?: string[];
  promptText: string;
  beschreibung?: string;
  kiTool?: string;
  highlight?: boolean;
  beispielErgebnis?: string;
};

/* ── Aufklappbarer Prompt-Text ─────────────────── */
function ExpandablePrompt({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 200;

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Prompt</p>
      <p className={`text-[13px] text-gray-700 leading-relaxed whitespace-pre-line font-mono ${!expanded && isLong ? "line-clamp-4" : ""}`}>
        {text}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2.5 text-xs font-semibold transition-colors"
          style={{ color: "#2596be" }}
        >
          {expanded ? "Weniger anzeigen" : "Ganzen Prompt anzeigen"}
        </button>
      )}
    </div>
  );
}

/* ── Beispiel-Ergebnis (kompakt, nur auf Klick) ── */
function ExpandableResult({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80"
        style={{ color: "#059669" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        Beispiel-Ergebnis ansehen
      </button>
    );
  }

  return (
    <div className="bg-[#ECFDF5] rounded-xl p-4 border border-green-100 mt-2">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">Beispiel-Ergebnis</p>
        <button
          onClick={() => setExpanded(false)}
          className="text-xs font-semibold transition-colors"
          style={{ color: "#059669" }}
        >
          Ausblenden
        </button>
      </div>
      <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}

/* ── Kopieren-Button ───────────────────────────── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 h-9 px-4 text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap"
      style={
        copied
          ? { backgroundColor: "#ECFDF5", color: "#059669" }
          : { backgroundColor: "#EBF6FA", color: "#2596be" }
      }
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Kopiert!
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          Prompt kopieren
        </>
      )}
    </button>
  );
}

/* ── Hauptkomponente ───────────────────────────── */
export default function PromptsClient({ prompts }: { prompts: Prompt[] }) {
  const [activeKat, setActiveKat] = useState("");
  const [activeZielgruppe, setActiveZielgruppe] = useState("");
  const [search, setSearch] = useState("");
  const [showPrompts, setShowPrompts] = useState(false);
  const promptsRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchKat = !activeKat || p.kategorie === activeKat;
      const matchZG = !activeZielgruppe || (p.zielgruppe ?? []).includes(activeZielgruppe);
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        p.titel.toLowerCase().includes(q) ||
        (p.beschreibung ?? "").toLowerCase().includes(q) ||
        p.promptText.toLowerCase().includes(q);
      return matchKat && matchZG && matchSearch;
    });
  }, [prompts, activeKat, activeZielgruppe, search]);

  function selectKategorie(kat: string) {
    const next = activeKat === kat ? "" : kat;
    setActiveKat(next);
    setShowPrompts(true);
    setTimeout(() => {
      promptsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function showAll() {
    setActiveKat("");
    setActiveZielgruppe("");
    setSearch("");
    setShowPrompts(true);
    setTimeout(() => {
      promptsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function resetAll() {
    setActiveKat("");
    setActiveZielgruppe("");
    setSearch("");
    setShowPrompts(false);
  }

  const countPerKat = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of prompts) {
      if (p.kategorie) counts[p.kategorie] = (counts[p.kategorie] || 0) + 1;
    }
    return counts;
  }, [prompts]);

  const hasActiveFilter = activeKat || activeZielgruppe || search;

  return (
    <>
      {/* ── KATEGORIE-KACHELN ALS EINSTIEG ──────── */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-6">
            Wähle eine Kategorie, um passende Prompts zu sehen.
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
                      {count} {count === 1 ? "Prompt" : "Prompts"}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
            {/* Alle-Prompts Kachel als 8. Element für ausgeglichenes Grid */}
            <button
              onClick={showAll}
              className="group relative flex flex-col text-left p-4 sm:p-5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/30 transition-all duration-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-[#2596be]/30 hover:bg-[#EBF6FA]/30"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2.5 bg-gray-100 transition-transform duration-200 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-bold block leading-tight text-gray-900">Alle Vorlagen</span>
              <span className="text-[11px] sm:text-[12px] text-gray-400 leading-snug block mt-1 line-clamp-2">
                Alle Kategorien durchsuchen und filtern
              </span>
              <span className="text-[11px] font-semibold mt-auto pt-2 inline-flex items-center gap-0.5 text-gray-400 group-hover:text-[#2596be] transition-colors">
                {prompts.length} Prompts
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── FILTERLEISTE + PROMPT-KARTEN (nur sichtbar nach Kategorie-Klick) ── */}
      {showPrompts && (
        <div ref={promptsRef} className="scroll-mt-20">
          <section className="py-3 px-4 sm:px-6 lg:px-8 sticky top-[72px] z-30 border-b border-gray-100" style={{ backgroundColor: "#F5F5F7" }}>
            <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-2.5">
              {/* Suche */}
              <div className="relative flex-1 min-w-0 max-w-xs">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Suchen..."
                  className="w-full h-9 pl-9 pr-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2596be]/30 focus:border-[#2596be]"
                />
              </div>

              {/* Zielgruppe Dropdown */}
              <select
                value={activeZielgruppe}
                onChange={(e) => setActiveZielgruppe(e.target.value)}
                className="h-9 pl-3 pr-8 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2596be]/30 appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
              >
                <option value="">Alle Zielgruppen</option>
                {ZIELGRUPPEN.map((zg) => (
                  <option key={zg} value={zg}>{zg}</option>
                ))}
              </select>

              {/* Aktive Kategorie als Chip */}
              {activeKat && (
                <span className="inline-flex items-center gap-1.5 h-9 px-3 text-sm rounded-lg border font-medium" style={{ borderColor: "#2596be", backgroundColor: "#EBF6FA", color: "#2596be" }}>
                  {activeKat}
                  <button onClick={() => setActiveKat("")} className="hover:opacity-70">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}

              {/* Zähler + Reset */}
              <div className="flex items-center gap-2.5 ml-auto">
                <span className="text-sm text-gray-500">{filtered.length} Prompts</span>
                {hasActiveFilter && (
                  <button
                    onClick={() => { setActiveKat(""); setActiveZielgruppe(""); setSearch(""); }}
                    className="text-xs font-semibold"
                    style={{ color: "#2596be" }}
                  >
                    Alle anzeigen
                  </button>
                )}
                <button
                  onClick={resetAll}
                  className="text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Zurück
                </button>
              </div>
            </div>
          </section>

          {/* ── PROMPT-KARTEN ──────────────────────── */}
          <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white min-h-[40vh]">
            <div className="max-w-6xl mx-auto">
              {filtered.length === 0 ? (
                <div className="py-16 text-center rounded-2xl bg-gray-50/50 border border-gray-100">
                  <p className="text-gray-500 text-base">Keine Prompts gefunden.</p>
                  <button
                    onClick={() => { setActiveKat(""); setActiveZielgruppe(""); setSearch(""); }}
                    className="mt-3 text-sm font-semibold"
                    style={{ color: "#2596be" }}
                  >
                    Filter zurücksetzen
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5">
                  {filtered.map((prompt) => (
                    <div
                      key={prompt.slug}
                      className={`group flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden ${
                        prompt.highlight
                          ? "bg-[#FAFEFF] border-[#2596be]/25 ring-1 ring-[#2596be]/8"
                          : "bg-white border-gray-100 hover:border-[#2596be]/20 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                      }`}
                    >
                      <div className="flex flex-col p-4 sm:p-5 flex-1">
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          {prompt.highlight && (
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">
                              Empfohlen
                            </span>
                          )}
                          {prompt.kategorie && (
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                              {prompt.kategorie}
                            </span>
                          )}
                          {prompt.kiTool && prompt.kiTool !== "Alle KI-Tools" && (
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 ml-auto">
                              {prompt.kiTool}
                            </span>
                          )}
                        </div>

                        {/* Titel + Beschreibung */}
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{prompt.titel}</h3>
                        {prompt.beschreibung && (
                          <p className="text-sm text-gray-500 leading-relaxed mb-3">{prompt.beschreibung}</p>
                        )}

                        {/* Prompt + Ergebnis */}
                        <div className="mt-auto pt-2">
                          <ExpandablePrompt text={prompt.promptText} />
                          {prompt.beispielErgebnis && (
                            <ExpandableResult text={prompt.beispielErgebnis} />
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-4 sm:px-5 py-3 border-t border-gray-50 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {(prompt.zielgruppe ?? []).map((zg) => (
                            <span key={zg} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                              {zg}
                            </span>
                          ))}
                        </div>
                        <CopyButton text={prompt.promptText} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
