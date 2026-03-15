import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { toolBySlugQuery, allToolSlugsQuery } from "@/lib/sanity/queries";
import ScreenshotLightbox from "@/components/ScreenshotLightbox";

type Props = { params: Promise<{ slug: string }> };

const DSGVO_COLOR: Record<string, string> = { grün: "#059669", gelb: "#D97706", rot: "#DC2626" };
const DSGVO_BG: Record<string, string>    = { grün: "#DCFCE7", gelb: "#FEF9C3", rot: "#FEE2E2" };
const DSGVO_LABEL: Record<string, string> = { grün: "DSGVO konform", gelb: "Eingeschränkt",  rot: "Kritisch" };

function Stars({ value, color = "#2596be" }: { value?: number; color?: string }) {
  if (!value) return null;
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 12 12" fill={i <= value ? color : "#E5E7EB"}>
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
      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
    >
      {children}
    </h2>
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

  const targetUrl  = tool.affiliate_link || tool.website;
  const logoUrl    = tool.logo       ? urlFor(tool.logo).width(160).fit("max").url()  : null;
  const shotUrl    = tool.screenshot ? urlFor(tool.screenshot).width(900).url()        : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F7" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Zurück */}
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Alle Tools
          </Link>

          {/* Logo + Name + Kategorien */}
          <div className="flex items-start gap-5 mb-4">
            <div className="relative w-20 h-20 rounded-2xl bg-[#F5F5F7] border border-gray-100 flex-shrink-0 overflow-hidden">
              {logoUrl ? (
                <Image src={logoUrl} alt={tool.name} fill className="object-contain p-3" sizes="80px" />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-200"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                  {tool.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {(tool.kategorie ?? []).map((k: string) => (
                  <span key={k} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-gray-600">
                    {k}
                  </span>
                ))}
              </div>
              <h1
                className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                {tool.name}
              </h1>
            </div>
          </div>

          {/* Kurzbeschreibung */}
          {tool.kurzbeschreibung && (
            <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-2xl">
              {tool.kurzbeschreibung}
            </p>
          )}

          {/* Meta-Zeile */}
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
                className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity"
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

      {/* ── Zweispaltiger Inhalt ───────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ── Linke Spalte ──────────────────────────────────── */}
          <div className="space-y-8">

            {/* Über das Tool */}
            {tool.beschreibung && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Über das Tool</SectionHeading>
                <p className="text-gray-600 leading-[1.85] whitespace-pre-line text-sm">
                  {tool.beschreibung}
                </p>
              </div>
            )}

            {/* Stärken & Schwächen */}
            {((tool.vorteile ?? []).length > 0 || (tool.nachteile ?? []).length > 0) && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Stärken & Schwächen</SectionHeading>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(tool.vorteile ?? []).length > 0 && (
                    <div className="rounded-xl border-l-4 border-l-emerald-500 bg-emerald-50 border border-emerald-100 p-4">
                      <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">Vorteile</p>
                      <ul className="space-y-2">
                        {tool.vorteile.map((v: string, i: number) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-700 leading-snug">
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
                    <div className="rounded-xl border-l-4 border-l-red-400 bg-red-50 border border-red-100 p-4">
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">Nachteile</p>
                      <ul className="space-y-2">
                        {tool.nachteile.map((n: string, i: number) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-700 leading-snug">
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

            {/* Didaktischer Mehrwert */}
            {tool.didaktischer_mehrwert && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Didaktischer Mehrwert</SectionHeading>
                <blockquote className="border-l-4 pl-4 text-gray-600 leading-[1.85] text-sm whitespace-pre-line italic"
                  style={{ borderColor: "#2596be" }}>
                  {tool.didaktischer_mehrwert}
                </blockquote>
              </div>
            )}

            {/* Aufwand */}
            {tool.aufwand && (
              <div className="bg-white rounded-2xl border border-gray-100 p-7">
                <SectionHeading>Aufwand & Voraussetzungen</SectionHeading>
                <p className="text-gray-600 leading-[1.85] text-sm">{tool.aufwand}</p>
              </div>
            )}
          </div>

          {/* ── Rechte Spalte (sticky) ────────────────────────── */}
          <aside className="lg:sticky lg:top-[88px]">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              {/* Screenshot */}
              {shotUrl && (
                <>
                  <div className="p-4 pb-3">
                    <ScreenshotLightbox src={shotUrl} alt={`Screenshot ${tool.name}`} fullWidth />
                  </div>
                  <div className="border-t border-gray-100" />
                </>
              )}

              {/* Preis */}
              {(tool.preismodell || tool.preis_detail) && (
                <>
                  <div className="px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Preis</p>
                    <p className="text-sm font-medium text-gray-800">{tool.preismodell}</p>
                    {tool.preis_detail && (
                      <p className="text-xs text-gray-500 mt-0.5">{tool.preis_detail}</p>
                    )}
                  </div>
                  <div className="border-t border-gray-100" />
                </>
              )}

              {/* DSGVO */}
              {(tool.dsgvo || tool.dsgvo_hinweis) && (
                <>
                  <div className="px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Datenschutz</p>
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
                      <p className="text-xs text-gray-500 leading-relaxed mt-1">{tool.dsgvo_hinweis}</p>
                    )}
                  </div>
                  <div className="border-t border-gray-100" />
                </>
              )}

              {/* Server + Anbieter + Bildungslizenz */}
              <div className="px-5 py-4 space-y-2.5">
                {tool.serverstandort && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Serverstandort</span>
                    <span className="text-xs font-medium text-gray-700">{tool.serverstandort}</span>
                  </div>
                )}
                {tool.anbieter && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Anbieter</span>
                    <span className="text-xs font-medium text-gray-700">{tool.anbieter}</span>
                  </div>
                )}
                {tool.bildungslizenz !== undefined && tool.bildungslizenz !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Bildungslizenz</span>
                    {tool.bildungslizenz ? (
                      <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Verfügbar
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                        Nicht verfügbar
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Website + CTA */}
              {(tool.website || targetUrl) && (
                <>
                  <div className="border-t border-gray-100" />
                  <div className="px-5 py-4 space-y-3">
                    {tool.website && (
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[#2596be] hover:underline"
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        {(() => { try { return new URL(tool.website).hostname; } catch { return tool.website; } })()}
                      </a>
                    )}
                    {targetUrl && (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#2596be" }}
                      >
                        Tool öffnen
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
