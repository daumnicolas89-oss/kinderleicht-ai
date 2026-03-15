import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allDownloadsQuery } from "@/lib/sanity/queries";
import DownloadsClient from "@/components/DownloadsClient";

export const revalidate = 60;

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

export default async function DownloadsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawDownloads: any[] = await client.fetch(allDownloadsQuery);
  const downloads = rawDownloads.map((d) => ({
    ...d,
    imageUrl: d.vorschaubild
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? urlFor(d.vorschaubild as any).width(600).height(450).fit("crop").url()
      : null,
  }));

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
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

      {/* ── Filter + Grid (client) ─────────────────────────── */}
      {downloads.length > 0 ? (
        <DownloadsClient downloads={downloads} />
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
