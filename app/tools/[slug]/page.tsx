export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { toolBySlugQuery, allToolSlugsQuery, similarToolsQuery } from "@/lib/sanity/queries";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";
import { ShareBar, PriceDetail } from "@/components/ToolDetailClient";
import { DSGVO_COLOR, DSGVO_BG, DSGVO_LABEL } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

function Stars({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 12 12" fill={i <= value ? "#F59E0B" : "#E5E7EB"}>
          <path d="M6 1l1.4 2.8 3.1.5-2.2 2.1.5 3.1L6 8l-2.8 1.5.5-3.1L1.5 4.3l3.1-.5z" />
        </svg>
      ))}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-lg font-semibold text-gray-900 mb-4"
    >
      {children}
    </h2>
  );
}

function SidebarLabel({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-2">
      <span className="text-sm leading-none">{emoji}</span>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{label}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(allToolSlugsQuery);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = await client.fetch(toolBySlugQuery, { slug });
  if (!tool) return { title: "Tool nicht gefunden" };
  return {
    title: `${tool.name} — KI-Tools — kinderleicht.ai`,
    description: tool.kurzbeschreibung,
  };
}

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;
  const tool = await client.fetch(toolBySlugQuery, { slug });
  if (!tool) notFound();

  const targetUrl = tool.affiliate_link || tool.website;
  const logoUrl   = tool.logo       ? urlFor(tool.logo).width(160).fit("max").url()  : null;
  const shotUrl   = tool.screenshot ? urlFor(tool.screenshot).width(1200).url()       : null;

  const kategorien = (tool.kategorie ?? []) as string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawSimilar: any[] = kategorien.length > 0
    ? await client.fetch(similarToolsQuery, { slug, kategorien })
    : [];
  const similarTools = rawSimilar.map((t) => ({
    ...t,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logoUrl: t.logo ? urlFor(t.logo as any).width(160).fit("max").url() : null,
  }));

  // Build JSON-LD structured data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.kurzbeschreibung,
    applicationCategory: "EducationalApplication",
    url: `https://kinderleicht.ai/tools/${slug}`,
  };
  if (tool.bewertung) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: tool.bewertung,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
    };
  }
  if (tool.preismodell) {
    const isFree =
      tool.preismodell.toLowerCase().includes("kostenlos") ||
      tool.preismodell.toLowerCase().includes("gratis");
    jsonLd.offers = {
      "@type": "Offer",
      price: isFree ? "0" : undefined,
      priceCurrency: "EUR",
      description: tool.preis_detail || tool.preismodell,
    };
  }

  return (
    <div className="min-h-screen scroll-smooth" style={{ backgroundColor: "#F5F5F7" }}>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 100%)",
            opacity: 0.35,
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/tools" className="hover:text-gray-600 transition-colors">
              Tools
            </Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-600 truncate max-w-[240px]">{tool.name}</span>
          </nav>

          {/* Logo + Name + Kategorien */}
          <div className="flex items-start gap-6 mb-5">
            <div className="relative flex-shrink-0">
              {/* Blue glow behind logo */}
              <div
                className="absolute -inset-5 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(37,150,190,0.13) 0%, transparent 70%)" }}
              />
              <div className="relative w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                {logoUrl ? (
                  <Image src={logoUrl} alt={tool.name} fill className="object-contain p-2.5" sizes="80px" />
                ) : (
                  <span
                    className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-200"
                    style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                  >
                    {tool.name.charAt(0)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {kategorien.map((k) => (
                  <span key={k} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-gray-500">
                    {k}
                  </span>
                ))}
              </div>
              <h1
                className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight"
              >
                {tool.name}
              </h1>
            </div>
          </div>

          {/* Kurzbeschreibung */}
          {tool.kurzbeschreibung && (
            <p className="text-lg text-gray-500 leading-relaxed mb-7 max-w-2xl">
              {tool.kurzbeschreibung}
            </p>
          )}

          {/* Badges + CTA */}
          <div className="flex flex-wrap items-center gap-3">
            {tool.dsgvo && (
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: DSGVO_BG[tool.dsgvo], color: DSGVO_COLOR[tool.dsgvo] }}
              >
                {DSGVO_LABEL[tool.dsgvo]}
              </span>
            )}
            {tool.preismodell && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EBF6FB] text-[#2596be]">
                {tool.preismodell}
              </span>
            )}
            {tool.bewertung && <Stars value={tool.bewertung} />}

            {targetUrl && (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2596be" }}
              >
                Tool öffnen
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Share-Leiste ──────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ShareBar title={tool.name} />
        </div>
      </div>

      {/* ── Zweispaltiger Inhalt ───────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">

          {/* ── Linke Spalte ──────────────────────────────────── */}
          <div className="space-y-6">

            {tool.beschreibung && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Über das Tool</SectionHeading>
                <p className="text-gray-600 leading-[1.85] whitespace-pre-line text-base">
                  {tool.beschreibung}
                </p>
              </div>
            )}

            {((tool.vorteile ?? []).length > 0 || (tool.nachteile ?? []).length > 0) && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Stärken & Schwächen</SectionHeading>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(tool.vorteile ?? []).length > 0 && (
                    <div className="rounded-xl border-l-4 bg-emerald-50 p-4" style={{ borderLeftColor: "#059669" }}>
                      <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">Vorteile</p>
                      <ul className="space-y-2">
                        {tool.vorteile.map((v: string, i: number) => (
                          <li key={i} className="flex gap-2 text-[15px] text-gray-700 leading-snug">
                            <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {(tool.nachteile ?? []).length > 0 && (
                    <div className="rounded-xl border-l-4 bg-red-50 p-4" style={{ borderLeftColor: "#DC2626" }}>
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">Nachteile</p>
                      <ul className="space-y-2">
                        {tool.nachteile.map((n: string, i: number) => (
                          <li key={i} className="flex gap-2 text-[15px] text-gray-700 leading-snug">
                            <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5">
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {tool.didaktischer_mehrwert && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Didaktischer Mehrwert</SectionHeading>
                <blockquote
                  className="border-l-4 pl-5 text-gray-600 leading-[1.85] text-base whitespace-pre-line"
                  style={{ borderColor: "#2596be" }}
                >
                  {tool.didaktischer_mehrwert}
                </blockquote>
              </div>
            )}

            {tool.aufwand && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Aufwand & Voraussetzungen</SectionHeading>
                <p className="text-gray-600 leading-[1.85] text-base">{tool.aufwand}</p>
              </div>
            )}
          </div>

          {/* ── Rechte Spalte (sticky) ────────────────────────── */}
          <aside className="lg:sticky lg:top-[88px]">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-100">

              {/* Screenshot */}
              {shotUrl && (
                <div className="p-4">
                  <ScreenshotLightbox src={shotUrl} alt={`Screenshot ${tool.name}`} fullWidth />
                </div>
              )}

              {/* PREIS */}
              {(tool.preismodell || tool.preis_detail) && (
                <div className="px-5 py-4">
                  <SidebarLabel emoji="💶" label="Preis" />
                  {tool.preismodell && (
                    <p className="text-sm font-semibold text-gray-800">{tool.preismodell}</p>
                  )}
                  {tool.preis_detail && <PriceDetail text={tool.preis_detail} />}
                </div>
              )}

              {/* DATENSCHUTZ */}
              {(tool.dsgvo || tool.dsgvo_hinweis) && (
                <div className="px-5 py-4">
                  <SidebarLabel emoji="🛡️" label="Datenschutz" />
                  {tool.dsgvo && (
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                      style={{ backgroundColor: DSGVO_BG[tool.dsgvo], color: DSGVO_COLOR[tool.dsgvo] }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: DSGVO_COLOR[tool.dsgvo] }} />
                      {DSGVO_LABEL[tool.dsgvo]}
                    </span>
                  )}
                  {tool.dsgvo_hinweis && (
                    <p className="text-xs text-gray-500 leading-relaxed">{tool.dsgvo_hinweis}</p>
                  )}
                </div>
              )}

              {/* SERVER */}
              {tool.serverstandort && (
                <div className="px-5 py-4">
                  <SidebarLabel emoji="🖥️" label="Server" />
                  <p className="text-sm text-gray-700">
                    {Array.isArray(tool.serverstandort) ? tool.serverstandort.join(", ") : tool.serverstandort}
                  </p>
                </div>
              )}

              {/* ANBIETER */}
              {tool.anbieter && (
                <div className="px-5 py-4">
                  <SidebarLabel emoji="🏢" label="Anbieter" />
                  <p className="text-sm text-gray-700">{tool.anbieter}</p>
                </div>
              )}

              {/* BILDUNGSLIZENZ */}
              {tool.bildungslizenz !== undefined && tool.bildungslizenz !== null && (
                <div className="px-5 py-4">
                  <SidebarLabel emoji="🎓" label="Bildungslizenz" />
                  {tool.bildungslizenz ? (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Verfügbar
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm font-medium text-gray-400">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                      Nicht verfügbar
                    </span>
                  )}
                  {tool.bildungslizenz_info && (
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{tool.bildungslizenz_info}</p>
                  )}
                </div>
              )}

              {/* WEBSITE */}
              {tool.website && (
                <div className="px-5 py-4">
                  <SidebarLabel emoji="🌐" label="Website" />
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline break-all"
                    style={{ color: "#2596be" }}
                  >
                    {(() => { try { return new URL(tool.website).hostname; } catch { return tool.website; } })()}
                  </a>
                </div>
              )}

              {/* CTA */}
              {targetUrl && (
                <div className="px-5 py-4">
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#2596be" }}
                  >
                    Tool öffnen
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* ── Ähnliche Tools ────────────────────────────────────── */}
      {similarTools.length >= 3 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2
            className="text-xl font-bold text-gray-900 mb-5"
          >
            Ähnliche Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {similarTools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="flex flex-col p-5 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative w-11 h-11 rounded-xl bg-[#F5F5F7] flex-shrink-0 overflow-hidden">
                      {t.logoUrl ? (
                        <Image src={t.logoUrl} alt={t.name} fill className="object-contain p-2" sizes="44px" />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center text-base font-bold text-gray-300">
                          {t.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    {t.highlight && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                        Empfohlen
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-[#2596be] transition-colors"
                  >
                    {t.name}
                  </h3>
                  {t.kurzbeschreibung && (
                    <p className="text-[15px] text-gray-500 leading-relaxed line-clamp-2 flex-1">
                      {t.kurzbeschreibung}
                    </p>
                  )}
                </div>
                <div className="px-5 py-3 border-t border-gray-50 flex items-center gap-2 flex-wrap">
                  {t.dsgvo && (
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: DSGVO_BG[t.dsgvo as string] ?? "#F3F4F6",
                        color: DSGVO_COLOR[t.dsgvo as string] ?? "#374151",
                      }}
                    >
                      {DSGVO_LABEL[t.dsgvo as string]}
                    </span>
                  )}
                  {t.preismodell && (
                    <span className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                      {t.preismodell}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
