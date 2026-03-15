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
const DSGVO_BORDER: Record<string, string>= { grün: "#BBF7D0", gelb: "#FDE68A", rot: "#FECACA" };
const DSGVO_LABEL: Record<string, string> = { grün: "DSGVO konform", gelb: "Eingeschränkt", rot: "Kritisch" };

function Stars({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill={i <= value ? "#F59E0B" : "#E5E7EB"}>
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
  const logoUrl   = tool.logo       ? urlFor(tool.logo).width(160).fit("max").url() : null;
  const shotUrl   = tool.screenshot ? urlFor(tool.screenshot).width(1200).url()      : null;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Zurück */}
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Alle Tools
        </Link>

        {/* ── Logo + Name ────────────────────────────────── */}
        <div className="flex items-start gap-4 mb-6">
          {logoUrl && (
            <div className="relative w-14 h-14 rounded-xl bg-[#F5F5F7] border border-gray-100 flex-shrink-0 overflow-hidden">
              <Image src={logoUrl} alt={tool.name} fill className="object-contain p-2" sizes="56px" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {tool.highlight && (
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                  Empfohlen
                </span>
              )}
              {(tool.kategorie ?? []).map((k: string) => (
                <span key={k} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-gray-400">
                  {k}
                </span>
              ))}
            </div>
            <h1
              className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              {tool.name}
            </h1>
          </div>
        </div>

        {/* ── Kurzbeschreibung ───────────────────────────── */}
        {tool.kurzbeschreibung && (
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            {tool.kurzbeschreibung}
          </p>
        )}

        {/* ── Meta-Zeile ─────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-gray-100">
          {tool.preismodell && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F7] text-gray-600">
              {tool.preismodell}{tool.preis_detail ? ` · ${tool.preis_detail}` : ""}
            </span>
          )}
          {tool.dsgvo && (
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5"
              style={{ backgroundColor: DSGVO_BG[tool.dsgvo], color: DSGVO_COLOR[tool.dsgvo] }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: DSGVO_COLOR[tool.dsgvo] }} />
              {DSGVO_LABEL[tool.dsgvo]}
            </span>
          )}
          {tool.serverstandort && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#F5F5F7] text-gray-500">
              Server: {tool.serverstandort}
            </span>
          )}
          {tool.bewertung && <Stars value={tool.bewertung} />}
          {shotUrl && (
            <span className="ml-auto">
              <ScreenshotLightbox src={shotUrl} alt={`Screenshot ${tool.name}`} />
            </span>
          )}
        </div>

        {/* ── CTA ────────────────────────────────────────── */}
        {targetUrl && (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity mb-10"
            style={{ backgroundColor: "#2596be" }}
          >
            {tool.name} öffnen
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        )}

        {/* ── Inhalte (alle untereinander) ───────────────── */}
        <div className="space-y-10">

          {tool.beschreibung && (
            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                Über das Tool
              </h2>
              <p className="text-gray-600 leading-[1.85] whitespace-pre-line text-sm">{tool.beschreibung}</p>
            </section>
          )}

          {/* Vorteile + Nachteile — hervorgehoben */}
          {((tool.vorteile ?? []).length > 0 || (tool.nachteile ?? []).length > 0) && (
            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                Stärken und Schwächen
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {(tool.vorteile ?? []).length > 0 && (
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider mb-3">Vorteile</p>
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
                    <p className="text-[11px] font-semibold text-red-600 uppercase tracking-wider mb-3">Nachteile</p>
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
              <h2 className="text-base font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                Didaktischer Mehrwert
              </h2>
              <p className="text-gray-600 leading-[1.85] whitespace-pre-line text-sm">{tool.didaktischer_mehrwert}</p>
            </section>
          )}

          {tool.aufwand && (
            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                Einarbeitungsaufwand
              </h2>
              <p className="text-gray-600 leading-[1.85] text-sm">{tool.aufwand}</p>
            </section>
          )}

          {/* DSGVO — hervorgehoben mit Farbe */}
          {tool.dsgvo_hinweis && (
            <div
              className="rounded-xl p-4 border text-sm text-gray-700 leading-relaxed"
              style={{
                backgroundColor: tool.dsgvo ? DSGVO_BG[tool.dsgvo] : "#F5F5F7",
                borderColor: tool.dsgvo ? DSGVO_BORDER[tool.dsgvo] : "#e5e7eb",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                style={{ color: tool.dsgvo ? DSGVO_COLOR[tool.dsgvo] : "#6B7280" }}>
                Datenschutz
              </p>
              {tool.dsgvo_hinweis}
            </div>
          )}

          {tool.bildungslizenz && tool.bildungslizenz_info && (
            <div className="rounded-xl p-4 border border-[#74C5E0]/40 bg-[#EBF6FA] text-sm text-gray-700 leading-relaxed">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#2596be] mb-2">Bildungslizenz</p>
              {tool.bildungslizenz_info}
            </div>
          )}

          {/* Anbieter-Info ganz unten, dezent */}
          {(tool.anbieter || tool.website) && (
            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-400">
              {tool.anbieter && <span>Anbieter: <span className="text-gray-600">{tool.anbieter}</span></span>}
              {tool.website && (
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2596be] hover:underline"
                >
                  {(() => { try { return new URL(tool.website).hostname; } catch { return tool.website; } })()}
                </a>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
