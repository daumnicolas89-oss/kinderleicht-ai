import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Apps — kinderleicht.ai",
  description: "Eigene Web-Apps für den Bildungsalltag — direkt im Browser nutzbar.",
};

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
} as React.CSSProperties;

const apps = [
  {
    title: "Ferienplaner",
    description: "Ferienprogramme, Elternbriefe und Dienstpläne in Minuten statt Stunden. Direkt im Browser, ohne Installation.",
    href: "https://ferienplaner.kinderleicht.ai",
    tags: ["Planung", "Kita", "Schule"],
  },
];

export default function AppsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" style={dotGrid} />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>Unsere Apps</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
            Web-Apps für Pädagogen
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Eigene KI-gestützte Web-Apps speziell für den pädagogischen Alltag. Direkt im Browser nutzbar, ohne Installation, ohne Account.
          </p>
          <Link
            href="/so-arbeiten-wir"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#2596be" }}
          >
            Wie wir entwickeln
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <Link
                key={app.title}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <h2
                    className="text-base font-bold text-gray-900 group-hover:text-[#2596be] transition-colors"
                    style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                  >
                    {app.title}
                  </h2>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-gray-300 group-hover:text-[#2596be] transition-colors shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{app.description}</p>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#F5F5F7] text-gray-500">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
