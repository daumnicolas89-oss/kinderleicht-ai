"use client";

import { useState, useMemo, useCallback } from "react";
import FilterBar from "@/components/FilterBar";

const KATEGORIEN = [
  "Elternbriefe",
  "Unterrichtsplanung",
  "Differenzierung",
  "Zeugnisse & Berichte",
  "Konzepte & Anträge",
  "Förderpläne",
  "Kita & Krippe",
  "GBS & Ganztag",
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
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
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

  const hasFilter =
    activeKat !== "" || activeZielgruppe !== "" || search.trim() !== "";

  return (
    <>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="Prompts durchsuchen..."
        categories={KATEGORIEN}
        activeCategory={activeKat}
        onCategoryChange={setActiveKat}
        categoryPlaceholder="Alle Kategorien"
        extraChips={
          <div className="flex items-center gap-2">
            {ZIELGRUPPEN.map((zg) => (
              <button
                key={zg}
                onClick={() =>
                  setActiveZielgruppe((v) => (v === zg ? "" : zg))
                }
                className="inline-flex items-center h-9 px-3 text-sm rounded-full border transition-colors whitespace-nowrap"
                style={
                  activeZielgruppe === zg
                    ? {
                        borderColor: "#2596be",
                        backgroundColor: "#EBF6FA",
                        color: "#2596be",
                      }
                    : { borderColor: "#e5e7eb", color: "#374151" }
                }
              >
                {zg}
              </button>
            ))}
          </div>
        }
        count={filtered.length}
        countLabel="Prompts"
        countLabelSingular="Prompt"
        hasFilter={hasFilter}
        onReset={() => {
          setActiveKat("");
          setActiveZielgruppe("");
          setSearch("");
        }}
      />

      {/* Card Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white min-h-[60vh]">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="py-20 text-center rounded-2xl bg-white border border-gray-100">
              <p className="text-gray-500 text-base">
                Keine Prompts gefunden.
              </p>
              <button
                onClick={() => {
                  setActiveKat("");
                  setActiveZielgruppe("");
                  setSearch("");
                }}
                className="mt-4 text-sm font-semibold"
                style={{ color: "#2596be" }}
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prompt) => (
                <div
                  key={prompt.slug}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col p-6 flex-1">
                    {/* Header: Kategorie + KI-Tool */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {prompt.kategorie && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                          {prompt.kategorie}
                        </span>
                      )}
                      {prompt.kiTool && (
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor:
                              KI_TOOL_COLOR[prompt.kiTool]?.bg ?? "#F5F5F7",
                            color:
                              KI_TOOL_COLOR[prompt.kiTool]?.text ?? "#6B7280",
                          }}
                        >
                          {prompt.kiTool}
                        </span>
                      )}
                      {prompt.highlight && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#F59E0B"
                          className="ml-auto flex-shrink-0"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      )}
                    </div>

                    {/* Titel */}
                    <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5">
                      {prompt.titel}
                    </h3>

                    {/* Beschreibung */}
                    {prompt.beschreibung && (
                      <p className="text-sm text-gray-500 leading-relaxed mb-3">
                        {prompt.beschreibung}
                      </p>
                    )}

                    {/* Prompt-Text (eingeklappt) */}
                    <div className="mt-auto pt-3">
                      <div className="bg-[#F9FAFB] rounded-lg p-3 border border-gray-100">
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 whitespace-pre-line font-mono">
                          {prompt.promptText}
                        </p>
                      </div>
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
    </>
  );
}
