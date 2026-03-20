"use client";

import { useState } from "react";

export function AccordionItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = q.replace(/\s+/g, "-").toLowerCase().slice(0, 40);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-3 sm:gap-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${id}`}
      >
        <span className="text-base font-semibold text-gray-900" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ backgroundColor: open ? "#2596be" : "#F5F5F7", color: open ? "#fff" : "#9ca3af" }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />}
          </svg>
        </span>
      </button>
      <div
        id={`faq-${id}`}
        role="region"
        className="overflow-hidden transition-all duration-200"
        style={{ maxHeight: open ? 500 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="text-base text-gray-500 leading-relaxed pb-5">{a}</div>
      </div>
    </div>
  );
}
