export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  downloadBySlugQuery,
  allDownloadSlugsQuery,
  similarDownloadsQuery,
} from "@/lib/sanity/queries";
import { ShareBar } from "@/components/ToolDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const downloads = await client.fetch(allDownloadSlugsQuery);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return downloads.map((d: any) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dl = await client.fetch(downloadBySlugQuery, { slug });
  if (!dl) return {};
  return {
    title: `${dl.titel} — kinderleicht.ai`,
    description: dl.kurzbeschreibung || `${dl.titel} kostenlos herunterladen.`,
    alternates: { canonical: `https://kinderleicht.ai/downloads/${slug}` },
  };
}

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage:
    "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
};

export default async function DownloadDetailPage({ params }: Props) {
  const { slug } = await params;
  const dl = await client.fetch(downloadBySlugQuery, { slug });
  if (!dl) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageUrl = dl.vorschaubild
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? urlFor(dl.vorschaubild as any).width(800).height(600).fit("crop").url()
    : null;

  // Similar downloads
  let similarDownloads: typeof dl[] = [];
  if (dl.kategorie) {
    const raw = await client.fetch(similarDownloadsQuery, {
      slug,
      kategorie: dl.kategorie,
    });
    similarDownloads = raw.map((s: typeof dl) => ({
      ...s,
      imageUrl: s.vorschaubild
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ? urlFor(s.vorschaubild as any).width(400).height(300).fit("crop").url()
        : null,
    }));
  }

  const href = dl.dateiUrl || dl.externer_link || "#";
  const isExternal = !dl.dateiUrl && !!dl.externer_link;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Downloads", item: "https://kinderleicht.ai/downloads" },
            { "@type": "ListItem", position: 2, name: dl.titel },
          ],
        }) }}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-12 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" style={dotGrid} />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
            <Link href="/downloads" className="hover:text-gray-600 transition-colors">
              Downloads
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-600 truncate">{dl.titel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
            {/* Left: Info */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {dl.typ && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EBF6FA] text-[#2596be]">
                    {dl.typ}
                  </span>
                )}
                {dl.kostenlos && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#059669]">
                    Kostenlos
                  </span>
                )}
                {dl.kategorie && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                    {dl.kategorie}
                  </span>
                )}
              </div>

              <h1
                className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4"
              >
                {dl.titel}
              </h1>

              {dl.kurzbeschreibung && (
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  {dl.kurzbeschreibung}
                </p>
              )}

              {/* Download CTA */}
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                download={dl.dateiUrl ? true : undefined}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2596be" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {isExternal ? "Zum Download" : "Herunterladen"}
              </a>

              <div className="mt-4">
                <ShareBar title={dl.titel} />
              </div>
            </div>

            {/* Right: Preview image */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#F5F5F7] border border-gray-100" style={{ aspectRatio: "4/3" }}>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={dl.titel}
                  fill
                  className="object-cover"
                  sizes="340px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5" opacity="0.4">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BESCHREIBUNG ───────────────────────────────────── */}
      {dl.beschreibung && (
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl font-bold text-gray-900 mb-5"
            >
              Beschreibung
            </h2>
            <div className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
              {dl.beschreibung}
            </div>
          </div>
        </section>
      )}

      {/* ── DETAILS SIDEBAR ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {dl.typ && (
              <div className="bg-[#F5F5F7] rounded-xl p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Format</p>
                <p className="text-sm font-medium text-gray-900">{dl.typ}</p>
              </div>
            )}
            {dl.kategorie && (
              <div className="bg-[#F5F5F7] rounded-xl p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Kategorie</p>
                <p className="text-sm font-medium text-gray-900">{dl.kategorie}</p>
              </div>
            )}
            {dl.erscheinungsdatum && (
              <div className="bg-[#F5F5F7] rounded-xl p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Veröffentlicht</p>
                <p className="text-sm font-medium text-gray-900">
                  {new Date(dl.erscheinungsdatum).toLocaleDateString("de-DE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── ÄHNLICHE DOWNLOADS ─────────────────────────────── */}
      {similarDownloads.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Weitere Downloads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {similarDownloads.map((s: any) => (
                <Link
                  key={s.slug}
                  href={`/downloads/${s.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="relative w-full bg-[#F5F5F7]" style={{ aspectRatio: "4/3" }}>
                    {s.imageUrl ? (
                      <Image
                        src={s.imageUrl}
                        alt={s.titel}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5" opacity="0.4">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {s.typ && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                          {s.typ}
                        </span>
                      )}
                      {s.kostenlos && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#059669]">
                          Kostenlos
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-base font-semibold text-gray-900 group-hover:text-[#2596be] transition-colors"
                    >
                      {s.titel}
                    </h3>
                    {s.kurzbeschreibung && (
                      <p className="text-base text-gray-500 line-clamp-2 mt-1">{s.kurzbeschreibung}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
