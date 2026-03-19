"use client";

import { useState, useMemo, useCallback, useRef } from "react";

const KATEGORIEN: { label: string; beschreibung: string }[] = [
  { label: "Elternbriefe", beschreibung: "Elternbriefe, Einladungen und Infos an Familien" },
  { label: "Unterrichtsplanung", beschreibung: "Stunden planen, Quizze und Materialien erstellen" },
  { label: "Differenzierung", beschreibung: "Texte und Aufgaben auf verschiedene Niveaus anpassen" },
  { label: "Zeugnisse & Berichte", beschreibung: "Zeugnistexte und Berichte formulieren" },
  { label: "Konzepte & Anträge", beschreibung: "Projekttage, Konzepte und Anträge schreiben" },
  { label: "Förderpläne", beschreibung: "Individuelle Förderpläne strukturiert erstellen" },
  { label: "Kita & Krippe", beschreibung: "Entwicklungsberichte, Tagesabläufe und Kita-Alltag" },
  { label: "GBS & Ganztag", beschreibung: "Ferienprogramme, Wochenpläne und Betreuung" },
];

const ZIELGRUPPEN = ["Kita", "Schule", "GBS"];

const KI_TOOL_COLOR: Record<string, { bg: string; text: string }> = {
  ChatGPT: { bg: "#ECFDF5", text: "#059669" },
  Claude: { bg: "#FFF7ED", text: "#C2410C" },
  "Alle KI-Tools": { bg: "#F5F5F7", text: "#6B7280" },
};

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

function ExpandablePrompt({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 200;

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Prompt</p>
      <p
        className={`text-[13px] text-gray-700 leading-relaxed whitespace-pre-line ${!expanded && isLong ? "line-clamp-4" : ""}`}
      >
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

function ExpandableResult({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 150;

  return (
    <div className="bg-[#ECFDF5] rounded-xl p-4 border border-green-100 mt-3">
      <p className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide mb-2">Beispiel-Ergebnis</p>
      <p
        className={`text-[13px] text-gray-700 leading-relaxed whitespace-pre-line ${!expanded && isLong ? "line-clamp-3" : ""}`}
      >
        {text}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2.5 text-xs font-semibold transition-colors"
          style={{ color: "#059669" }}
        >
          {expanded ? "Weniger anzeigen" : "Ganzes Ergebnis anzeigen"}
        </button>
      )}
    </div>
  );
}

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

export default function PromptsClient({ prompts }: { prompts: Prompt[] }) {
  const [activeKat, setActiveKat] = useState("");
  const [activeZielgruppe, setActiveZielgruppe] = useState("");
  const [search, setSearch] = useState("");
  const promptsRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchKat = !activeKat || p.kategorie === activeKat;
      const matchZG =
        !activeZielgruppe ||
        (p.zielgruppe ?? []).includes(activeZielgruppe);
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
    setActiveKat((v) => (v === kat ? "" : kat));
    setTimeout(() => {
      promptsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  // Zähle Prompts pro Kategorie
  const countPerKat = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of prompts) {
      if (p.kategorie) {
        counts[p.kategorie] = (counts[p.kategorie] || 0) + 1;
      }
    }
    return counts;
  }, [prompts]);

  return (
    <>
      {/* ── KATEGORIE-KACHELN ──────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {KATEGORIEN.map((kat, i) => {
              const isActive = activeKat === kat.label;
              const count = countPerKat[kat.label] || 0;
              return (
                <button
                  key={kat.label}
                  onClick={() => selectKategorie(kat.label)}
                  className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 ${
                    isActive
                      ? "border-[#2596be] bg-[#EBF6FA] shadow-sm"
                      : "border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-2.5 ${
                      isActive ? "bg-[#2596be] text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`text-sm font-semibold mb-0.5 ${isActive ? "text-[#2596be]" : "text-gray-900"}`}>
                    {kat.label}
                  </span>
                  <span className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {kat.beschreibung}
                  </span>
                  {count > 0 && (
                    <span className={`mt-2 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-[#2596be]/20 text-[#2596be]" : "bg-gray-100 text-gray-500"
                    }`}>
                      {count} {count === 1 ? "Prompt" : "Prompts"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FILTER + PROMPTS ──────────────────────── */}
      <div ref={promptsRef} className="scroll-mt-20">
        <section className="py-4 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4">
              {/* Suche */}
              <div className="relative flex-1 min-w-0 w-full sm:max-w-xs">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Prompts durchsuchen..."
                  className="w-full h-10 pl-9 pr-3 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2596be]/30 focus:border-[#2596be]"
                />
              </div>

              {/* Zielgruppen-Chips */}
              <div className="flex items-center gap-2">
                {ZIELGRUPPEN.map((zg) => (
                  <button
                    key={zg}
                    onClick={() => setActiveZielgruppe((v) => (v === zg ? "" : zg))}
                    className="inline-flex items-center h-10 px-3.5 text-sm rounded-lg border transition-colors whitespace-nowrap"
                    style={
                      activeZielgruppe === zg
                        ? { borderColor: "#2596be", backgroundColor: "#EBF6FA", color: "#2596be" }
                        : { borderColor: "#e5e7eb", backgroundColor: "white", color: "#374151" }
                    }
                  >
                    {zg}
                  </button>
                ))}
              </div>

              {/* Zähler + Reset */}
              <div className="flex items-center gap-3 ml-auto">
                <span className="text-sm text-gray-500">
                  {filtered.length} {filtered.length === 1 ? "Prompt" : "Prompts"}
                </span>
                {(activeKat || activeZielgruppe || search) && (
                  <button
                    onClick={() => { setActiveKat(""); setActiveZielgruppe(""); setSearch(""); }}
                    className="text-xs font-semibold"
                    style={{ color: "#2596be" }}
                  >
                    Zurücksetzen
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROMPT-KARTEN ──────────────────────── */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white min-h-[40vh]">
          <div className="max-w-6xl mx-auto">
            {filtered.length === 0 ? (
              <div className="py-16 text-center rounded-2xl bg-gray-50/50 border border-gray-100">
                {prompts.length === 0 ? (
                  <>
                    <p className="text-3xl mb-3">📝</p>
                    <p className="text-gray-900 text-base font-semibold mb-1">Prompts werden gerade erstellt.</p>
                    <p className="text-gray-500 text-sm">Wir arbeiten an einer Sammlung erprobter Prompts. Schau bald wieder vorbei!</p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-500 text-base">
                      Keine Prompts in dieser Kategorie gefunden.
                    </p>
                    <button
                      onClick={() => { setActiveKat(""); setActiveZielgruppe(""); setSearch(""); }}
                      className="mt-4 text-sm font-semibold"
                      style={{ color: "#2596be" }}
                    >
                      Filter zurücksetzen
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((prompt) => (
                  <div
                    key={prompt.slug}
                    className={`group flex flex-col rounded-2xl border hover:shadow-md transition-all duration-300 overflow-hidden ${
                      prompt.highlight
                        ? "bg-[#FAFEFF] border-[#2596be]/25 ring-1 ring-[#2596be]/8"
                        : "bg-white border-gray-100 hover:border-[#2596be]/20"
                    }`}
                  >
                    <div className="flex flex-col p-6 flex-1">
                      {/* Header: Badges */}
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
                        {prompt.kiTool && (
                          <span
                            className="text-[11px] font-semibold px-2 py-0.5 rounded-full ml-auto"
                            style={{
                              backgroundColor: KI_TOOL_COLOR[prompt.kiTool]?.bg ?? "#F5F5F7",
                              color: KI_TOOL_COLOR[prompt.kiTool]?.text ?? "#6B7280",
                            }}
                          >
                            {prompt.kiTool}
                          </span>
                        )}
                      </div>

                      {/* Titel */}
                      <h3 className="text-base font-semibold text-gray-900 mb-1.5">
                        {prompt.titel}
                      </h3>

                      {/* Beschreibung */}
                      {prompt.beschreibung && (
                        <p className="text-sm text-gray-500 leading-relaxed mb-3">
                          {prompt.beschreibung}
                        </p>
                      )}

                      {/* Prompt-Text (aufklappbar) */}
                      <div className="mt-auto pt-3">
                        <ExpandablePrompt text={prompt.promptText} />
                        {prompt.beispielErgebnis && (
                          <ExpandableResult text={prompt.beispielErgebnis} />
                        )}
                      </div>
                    </div>

                    {/* Footer: Zielgruppen + Kopieren */}
                    <div className="px-6 py-3.5 border-t border-gray-50 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {(prompt.zielgruppe ?? []).map((zg) => (
                          <span
                            key={zg}
                            className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100"
                          >
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
    </>
  );
}
