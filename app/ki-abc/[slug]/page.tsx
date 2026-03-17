export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import {
  lexikonBySlugQuery,
  allLexikonSlugsQuery,
} from "@/lib/sanity/queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allLexikonSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await client.fetch(lexikonBySlugQuery, { slug });
  if (!entry) return { title: "Begriff nicht gefunden" };
  return {
    title: `${entry.begriff} — KI-ABC — kinderleicht.ai`,
    description: entry.kurzdefinition || `${entry.begriff} einfach erklärt.`,
    alternates: { canonical: `https://kinderleicht.ai/ki-abc/${slug}` },
  };
}

export default async function LexikonDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = await client.fetch(lexikonBySlugQuery, { slug });
  if (!entry) notFound();

  const verwandte = (entry.verwandte_begriffe ?? []) as string[];

  const KATEGORIE_COLOR: Record<string, { bg: string; text: string }> = {
    "KI & Technologie": { bg: "#EBF6FA", text: "#2596be" },
    "Datenschutz & Recht": { bg: "#FEF9C3", text: "#92400E" },
    "Pädagogik & Didaktik": { bg: "#DCFCE7", text: "#166534" },
    "Tools & Software": { bg: "#F3E8FF", text: "#6B21A8" },
  };
  const katColors = entry.kategorie ? KATEGORIE_COLOR[entry.kategorie as string] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero area */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%)",
            opacity: 0.45,
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link
              href="/ki-abc"
              className="hover:text-gray-600 transition-colors"
            >
              KI-ABC
            </Link>
            <span className="text-gray-300">&rsaquo;</span>
            <span className="text-gray-600 truncate max-w-[240px]">
              {entry.begriff}
            </span>
          </nav>

          {/* Kategorie badge */}
          {entry.kategorie && katColors && (
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: katColors.bg, color: katColors.text }}
            >
              {entry.kategorie}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {entry.begriff}
          </h1>

          {entry.kurzdefinition && (
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              {entry.kurzdefinition}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        {/* Definition */}
        {entry.definition && (
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Definition
            </h2>
            <p className="text-gray-600 leading-[1.85] whitespace-pre-line text-base">
              {entry.definition}
            </p>
          </div>
        )}

        {/* Praxisbeispiel */}
        {entry.beispiel && (
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>💡</span> Praxisbeispiel
            </h2>
            <p className="text-gray-600 leading-[1.85] whitespace-pre-line text-base">
              {entry.beispiel}
            </p>
          </div>
        )}

        {/* Verwandte Begriffe */}
        {verwandte.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Verwandte Begriffe
            </h2>
            <div className="flex flex-wrap gap-2">
              {verwandte.map((v) => (
                <span
                  key={v}
                  className="text-sm font-medium px-3 py-1.5 rounded-full bg-[#F5F5F7] text-gray-600"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="pt-4">
          <Link
            href="/ki-abc"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#2596be" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Zurück zum KI-ABC
          </Link>
        </div>
      </div>
    </div>
  );
}
