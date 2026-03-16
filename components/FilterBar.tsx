"use client";

export default function FilterBar({
  search,
  onSearchChange,
  searchPlaceholder = "Durchsuchen...",
  categories,
  activeCategory,
  onCategoryChange,
  categoryPlaceholder = "Alle Kategorien",
  extraChips,
  count,
  countLabel = "Ergebnisse",
  countLabelSingular = "Ergebnis",
  hasFilter,
  onReset,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  searchPlaceholder?: string;
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (v: string) => void;
  categoryPlaceholder?: string;
  extraChips?: React.ReactNode;
  count: number;
  countLabel?: string;
  countLabelSingular?: string;
  hasFilter: boolean;
  onReset: () => void;
}) {
  return (
    <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Suchfeld */}
        <div className="relative mb-3">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2596be] bg-[#F9FAFB] transition-colors"
          />
        </div>

        {/* Filter-Chips */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories && onCategoryChange && (
            <select
              value={activeCategory ?? ""}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="h-9 px-3 text-sm rounded-full border bg-white transition-colors focus:outline-none cursor-pointer"
              style={
                activeCategory
                  ? { borderColor: "#2596be", color: "#2596be", backgroundColor: "#EBF6FA" }
                  : { borderColor: "#e5e7eb", color: "#374151" }
              }
            >
              <option value="">{categoryPlaceholder}</option>
              {categories.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          )}

          {extraChips}

          {hasFilter && (
            <button
              onClick={onReset}
              className="h-9 px-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Zurücksetzen
            </button>
          )}

          <span className="text-xs text-gray-400 ml-auto hidden sm:block">
            {count} {count === 1 ? countLabelSingular : countLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
