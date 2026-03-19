"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

type SearchResult = {
  title: string;
  href: string;
  type: "tool" | "prompt" | "lexikon";
  typeLabel: string;
  description?: string;
};

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Keyboard shortcut: Cmd/Ctrl+K
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Search
  const search = useCallback(async (q: string) => {
    if (q.trim().length < 2) { setResults([]); return; }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
      const data = await res.json();
      setResults(data.results ?? []);
    } catch {
      setResults([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => search(query), 250);
    return () => clearTimeout(timer);
  }, [query, search]);

  function navigate(href: string) {
    setOpen(false);
    setQuery("");
    setResults([]);
    router.push(href);
  }

  const typeColors: Record<string, string> = {
    tool: "bg-[#EBF6FA] text-[#2596be]",
    prompt: "bg-amber-50 text-amber-600",
    lexikon: "bg-emerald-50 text-emerald-600",
  };

  return (
    <>
      {/* Search trigger — nur Lupe */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-[#2596be] transition-colors"
        aria-label="Suche öffnen"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {/* Dropdown direkt unter der Lupe */}
      {open && (
        <div className="fixed inset-0 z-[100]">
          <div className="fixed inset-0" onClick={() => setOpen(false)} />
          <div
            ref={containerRef}
            className="absolute right-4 sm:right-6 lg:right-8 top-[72px] w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tools, Vorlagen oder Begriffe suchen..."
                className="flex-1 text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
              />
              {query && (
                <button onClick={() => { setQuery(""); setResults([]); }} className="text-gray-300 hover:text-gray-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {loading && (
                <div className="py-8 text-center text-sm text-gray-400">Suche...</div>
              )}
              {!loading && query.length >= 2 && results.length === 0 && (
                <div className="py-8 text-center text-sm text-gray-400">Keine Ergebnisse gefunden.</div>
              )}
              {!loading && results.length > 0 && (
                <ul className="py-2">
                  {results.map((r) => (
                    <li key={r.href}>
                      <button
                        onClick={() => navigate(r.href)}
                        className="w-full flex items-start gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0 ${typeColors[r.type] ?? "bg-gray-100 text-gray-500"}`}>
                          {r.typeLabel}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{r.title}</p>
                          {r.description && (
                            <p className="text-xs text-gray-400 truncate mt-0.5">{r.description}</p>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {!loading && query.length < 2 && (
                <div className="py-6 text-center text-xs text-gray-300">Mindestens 2 Zeichen eingeben</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
