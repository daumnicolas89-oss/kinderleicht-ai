import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allDownloadsQuery } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Downloads — kinderleicht.ai",
  description: "Kostenlose Vorlagen, Leitfäden und Checklisten für Pädagogen.",
};

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
} as React.CSSProperties;

const KATEGORIE_ORDER = [
  "DSGVO & Datenschutz",
  "Prompts & KI-Anleitungen",
  "Vorlagen & Checklisten",
  "Elternkommunikation",
  "Planung & Organisation",
];

const KATEGORIE_ICON: Record<string, React.ReactNode> = {
  "DSGVO & Datenschutz": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Prompts & KI-Anleitungen": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 015 12H7a7 7 0 015-12z" />
    </svg>
  ),
  "Vorlagen & Checklisten": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  "Elternkommunikation": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  "Planung & Organisation": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
};

interface Download {
  titel: string;
  slug: string;
  kurzbeschreibung?: string;
  typ?: string;
  kategorie?: string;
  vorschaubild?: unknown;
  dateiUrl?: string;
  externer_link?: string;
  kostenlos?: boolean;
}

export default async function DownloadsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawDownloads: any[] = await client.fetch(allDownloadsQuery);
  const downloads: Download[] = rawDownloads.map((d) => ({
    ...d,
    imageUrl: d.vorschaubild
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? urlFor(d.vorschaubild as any).width(600).height(800).fit("crop").url()
      : null,
  }));

  const grouped = KATEGORIE_ORDER.map((kat) => ({
    kategorie: kat,
    items: downloads.filter((d) => d.kategorie === kat),
  })).filter((g) => g.items.length > 0);

  const hasDownloads = downloads.length > 0;

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" style={dotGrid} />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>
            Downloads
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Fertige Materialien für deinen Alltag.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Kostenlose Vorlagen, Leitfäden und Checklisten. Sofort einsetzbar, praxiserprobt und
            speziell für Pädagogen im DACH-Raum.
          </p>
          <Link
            href="/so-arbeiten-wir"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#2596be" }}
          >
            Wie wir arbeiten
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── DOWNLOADS ──────────────────────────────────────── */}
      {hasDownloads ? (
        grouped.map((group, gi) => (
          <section
            key={group.kategorie}
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: gi % 2 === 0 ? "#ffffff" : "#F5F5F7" }}
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6FA] flex items-center justify-center flex-shrink-0">
                  {KATEGORIE_ICON[group.kategorie]}
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {group.kategorie}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((dl) => {
                  const href = dl.dateiUrl || dl.externer_link || "#";
                  const isExternal = !dl.dateiUrl && !!dl.externer_link;
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const imageUrl = (dl as any).imageUrl as string | null;

                  return (
                    <div
                      key={dl.slug}
                      className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-200 overflow-hidden"
                    >
                      {/* Preview image */}
                      <div className="relative w-full bg-[#EBF6FB]" style={{ aspectRatio: "3/4" }}>
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={dl.titel}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center">
                              {KATEGORIE_ICON[dl.kategorie || ""] || (
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
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
                      <div className="flex flex-col p-5 flex-1">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
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
                        </div>

                        <h3
                          className="text-[15px] font-semibold text-gray-900 mb-1.5"
                          style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                        >
                          {dl.titel}
                        </h3>

                        {dl.kurzbeschreibung && (
                          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1 mb-4">
                            {dl.kurzbeschreibung}
                          </p>
                        )}

                        <a
                          href={href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          download={dl.dateiUrl ? true : undefined}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity mt-auto"
                          style={{ backgroundColor: "#2596be" }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
            </div>
          </section>
        ))
      ) : (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="py-20 border border-gray-100 rounded-2xl bg-[#F5F5F7] text-center">
              <p className="text-gray-400 text-sm">Downloads folgen in Kürze.</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
