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
const DSGVO_BG: Record<string, string>    = { grün: "#F0FDF4", gelb: "#FFFBEB", rot: "#FEF2F2" };
const DSGVO_LABEL: Record<string, string> = { grün: "DSGVO konform", gelb: "Eingeschränkt", rot: "Kritisch" };

function Stars({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill={i <= value ? "#F59E0B" : "#E5E7EB"}>
          <path d="M6 1l1.4 2.8 3.1.5-2.2 2.1.5 3.1L6 8l-2.8 1.5.5-3.1L1.5 4.3l3.1-.5z" />
        </svg>
      ))}
    </span>
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
  const logoUrl   = tool.logo       ? urlFor(tool.logo).width(160).fit("max").url()   : null;
  const shotUrl   = tool.screenshot ? urlFor(tool.screenshot).width(1200).url()        : null;

  return (
    <div className="bg-white min-h-screen">

      {/* ── Header ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">

        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Alle Tools
        </Link>

        {/* Logo · Name · Meta · CTA */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">

          {/* Logo */}
          {logoUrl && (
            <div className="relative w-16 h-16 rounded-2xl bg-[#F5F5F7] border border-gray-100 flex-shrink-0 overflow-hidden">
              <Image src={logoUrl} alt={tool.name} fill className="object-contain p-2.5" sizes="64px" />
            </div>
          )}

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {tool.highlight && (
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                  Empfohlen
                </span>
              )}
              {(tool.kategorie ?? []).map((k: string) => (
                <span key={k} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-gray-500">
                  {k}
                </span>
              ))}
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              {tool.name}
            </h1>
            {tool.kurzbeschreibung && (
              <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-3">{tool.kurzbeschreibung}</p>
            )}
            {shotUrl && <ScreenshotLightbox src={shotUrl} alt={`Screenshot ${tool.name}`} />}
          </div>

          {/* CTA */}
          {targetUrl && (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity"
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


      {/* ── Content ────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">

          {/* Hauptinhalt */}
          <div className="space-y-10">

            {tool.beschreibung && (
              <section>
                <h2
                  className="text-lg font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  Über das Tool
                </h2>
                <p className="text-gray-600 leading-[1.85] whitespace-pre-line">{tool.beschreibung}</p>
              </section>
            )}

            {((tool.vorteile ?? []).length > 0 || (tool.nachteile ?? []).length > 0) && (
              <section>
                <h2
                  className="text-lg font-semibold text-gray-900 mb-4"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  Stärken und Schwächen
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(tool.vorteile ?? []).length > 0 && (
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
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
                    <div className="rounded-xl border border-red-100 bg-red-50 p-4">
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
              </section>
            )}

            {tool.didaktischer_mehrwert && (
              <section>
                <h2
                  className="text-lg font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  Didaktischer Mehrwert
                </h2>
                <p className="text-gray-600 leading-[1.85] whitespace-pre-line">{tool.didaktischer_mehrwert}</p>
              </section>
            )}

            {tool.aufwand && (
              <section>
                <h2
                  className="text-lg font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  Einarbeitungsaufwand
                </h2>
                <p className="text-gray-600 leading-[1.85]">{tool.aufwand}</p>
              </section>
            )}

            {tool.dsgvo_hinweis && (
              <div
                className="rounded-xl p-4 border text-sm text-gray-700 leading-relaxed"
                style={{
                  backgroundColor: tool.dsgvo ? DSGVO_BG[tool.dsgvo] : "#F5F5F7",
                  borderColor: tool.dsgvo ? `${DSGVO_COLOR[tool.dsgvo]}28` : "#e5e7eb",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1.5"
                  style={{ color: tool.dsgvo ? DSGVO_COLOR[tool.dsgvo] : "#6B7280" }}>
                  Datenschutzhinweis
                </p>
                {tool.dsgvo_hinweis}
              </div>
            )}

            {tool.bildungslizenz && tool.bildungslizenz_info && (
              <div className="rounded-xl p-4 border border-[#74C5E0]/30 bg-[#EBF6FA] text-sm text-gray-700 leading-relaxed">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2596be] mb-1.5">Bildungslizenz</p>
                {tool.bildungslizenz_info}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-[96px] h-fit">
            <div className="rounded-2xl border border-gray-100 overflow-hidden">
              {/* Bewertung prominent oben */}
              {tool.bewertung && (
                <div className="px-5 py-4 bg-[#F5F5F7] flex items-center justify-between">
                  <span className="text-sm text-gray-500">Bewertung</span>
                  <div className="flex items-center gap-2">
                    <Stars value={tool.bewertung} />
                    <span className="text-xs text-gray-400">{tool.bewertung}/5</span>
                  </div>
                </div>
              )}

              <div className="divide-y divide-gray-100">
                {tool.preismodell && (
                  <div className="px-5 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Preis</span>
                    <span className="text-sm font-medium text-gray-800">{tool.preismodell}</span>
                  </div>
                )}
                {tool.preis_detail && (
                  <div className="px-5 py-3 flex items-start justify-between gap-3">
                    <span className="text-sm text-gray-500 flex-shrink-0">Details</span>
                    <span className="text-sm text-gray-700 text-right">{tool.preis_detail}</span>
                  </div>
                )}
                {tool.dsgvo && (
                  <div className="px-5 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-500">DSGVO</span>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: DSGVO_BG[tool.dsgvo], color: DSGVO_COLOR[tool.dsgvo] }}
                    >
                      {DSGVO_LABEL[tool.dsgvo]}
                    </span>
                  </div>
                )}
                {tool.serverstandort && (
                  <div className="px-5 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Server</span>
                    <span className="text-sm font-medium text-gray-800">{tool.serverstandort}</span>
                  </div>
                )}
                {tool.anbieter && (
                  <div className="px-5 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Anbieter</span>
                    <span className="text-sm font-medium text-gray-800">{tool.anbieter}</span>
                  </div>
                )}
                {tool.bildungslizenz && (
                  <div className="px-5 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Bildungslizenz</span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EBF6FA] text-[#2596be]">
                      Verfügbar
                    </span>
                  </div>
                )}
                {tool.website && (
                  <div className="px-5 py-3 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Website</span>
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#2596be] hover:underline truncate max-w-[140px]"
                    >
                      {(() => { try { return new URL(tool.website).hostname; } catch { return tool.website; } })()}
                    </a>
                  </div>
                )}
              </div>

              {targetUrl && (
                <div className="p-4 border-t border-gray-100">
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
                </div>
              )}
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
