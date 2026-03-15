import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { toolBySlugQuery, allToolSlugsQuery } from "@/lib/sanity/queries";

type Props = { params: Promise<{ slug: string }> };

const DSGVO_COLOR: Record<string, string> = {
  grün: "#059669",
  gelb: "#D97706",
  rot: "#DC2626",
};
const DSGVO_BG: Record<string, string> = {
  grün: "#F0FDF4",
  gelb: "#FFFBEB",
  rot: "#FEF2F2",
};
const DSGVO_LABEL: Record<string, string> = {
  grün: "DSGVO konform",
  gelb: "Eingeschränkt",
  rot: "Kritisch",
};

function Stars({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 12 12" fill={i <= value ? "#F59E0B" : "#E5E7EB"}>
          <path d="M6 1l1.4 2.8 3.1.5-2.2 2.1.5 3.1L6 8l-2.8 1.5.5-3.1L1.5 4.3l3.1-.5z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-500">{value} / 5</span>
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</span>
      <span className="text-sm text-gray-700">{value}</span>
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
  if (!tool) return { title: "Tool nicht gefunden — kinderleicht.ai" };
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

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Zurück */}
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Alle Tools
        </Link>

        {/* Zweispaltiges Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12">

          {/* Linke Spalte: Logo + Screenshot + Kurzinfos */}
          <div className="flex flex-col gap-6">

            {/* Logo */}
            <div className="bg-[#F5F5F7] rounded-2xl p-8 flex items-center justify-center">
              {tool.logo ? (
                <Image
                  src={urlFor(tool.logo).width(200).height(200).url()}
                  alt={tool.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              ) : (
                <span className="text-5xl font-bold text-gray-200">
                  {tool.name.charAt(0)}
                </span>
              )}
            </div>

            {/* Screenshot */}
            {tool.screenshot && (
              <div className="rounded-2xl overflow-hidden border border-gray-100">
                <Image
                  src={urlFor(tool.screenshot).width(680).url()}
                  alt={`Screenshot ${tool.name}`}
                  width={340}
                  height={210}
                  className="w-full object-cover"
                />
              </div>
            )}

            {/* Kurzinfo-Block */}
            <div className="bg-[#F5F5F7] rounded-2xl p-5 flex flex-col gap-4">
              {tool.bewertung && (
                <InfoRow label="Bewertung" value={<Stars value={tool.bewertung} />} />
              )}
              {tool.preismodell && (
                <InfoRow label="Preismodell" value={tool.preismodell} />
              )}
              {tool.preis_detail && (
                <InfoRow label="Preis" value={tool.preis_detail} />
              )}
              {tool.anbieter && (
                <InfoRow label="Anbieter" value={tool.anbieter} />
              )}
              {tool.serverstandort && (
                <InfoRow label="Server" value={tool.serverstandort} />
              )}
              {tool.dsgvo && (
                <InfoRow
                  label="DSGVO"
                  value={
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: DSGVO_BG[tool.dsgvo],
                        color: DSGVO_COLOR[tool.dsgvo],
                      }}
                    >
                      {DSGVO_LABEL[tool.dsgvo]}
                    </span>
                  }
                />
              )}
              {tool.bildungslizenz && (
                <InfoRow
                  label="Bildungslizenz"
                  value={
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EBF6FA] text-[#2596be]">
                      Verfügbar
                    </span>
                  }
                />
              )}
            </div>

            {/* CTA */}
            {targetUrl && (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2596be" }}
              >
                Tool öffnen
              </a>
            )}
          </div>

          {/* Rechte Spalte: Alle Inhalte */}
          <div className="flex flex-col gap-10">

            {/* Titel-Block */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {tool.highlight && (
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                    Highlight
                  </span>
                )}
                {(tool.kategorie ?? []).map((k: string) => (
                  <span key={k} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-gray-500">
                    {k}
                  </span>
                ))}
              </div>
              <h1
                className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                {tool.name}
              </h1>
              {tool.kurzbeschreibung && (
                <p className="text-lg text-gray-500 leading-relaxed">
                  {tool.kurzbeschreibung}
                </p>
              )}
            </div>

            {/* Beschreibung */}
            {tool.beschreibung && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                  Beschreibung
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {tool.beschreibung}
                </p>
              </div>
            )}

            {/* Vorteile + Nachteile */}
            {((tool.vorteile ?? []).length > 0 || (tool.nachteile ?? []).length > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(tool.vorteile ?? []).length > 0 && (
                  <div className="bg-[#F0FDF4] rounded-xl p-5">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#059669] mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                      Vorteile
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {tool.vorteile.map((v: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-0.5 flex-shrink-0 text-[#059669]">✓</span>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {(tool.nachteile ?? []).length > 0 && (
                  <div className="bg-[#FEF2F2] rounded-xl p-5">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#DC2626] mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                      Nachteile
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {tool.nachteile.map((n: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-0.5 flex-shrink-0 text-[#DC2626]">✗</span>
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Didaktischer Mehrwert */}
            {tool.didaktischer_mehrwert && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                  Didaktischer Mehrwert
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {tool.didaktischer_mehrwert}
                </p>
              </div>
            )}

            {/* Aufwand */}
            {tool.aufwand && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                  Aufwand
                </h2>
                <p className="text-gray-700 leading-relaxed">{tool.aufwand}</p>
              </div>
            )}

            {/* Bildungslizenz Info */}
            {tool.bildungslizenz && tool.bildungslizenz_info && (
              <div className="bg-[#EBF6FA] rounded-xl p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#2596be] mb-3" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
                  Bildungslizenz
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {tool.bildungslizenz_info}
                </p>
              </div>
            )}

            {/* DSGVO Hinweis */}
            {tool.dsgvo_hinweis && (
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: tool.dsgvo ? DSGVO_BG[tool.dsgvo] : "#F5F5F7" }}
              >
                <h2
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: "var(--font-ibm-plex-sans)",
                    color: tool.dsgvo ? DSGVO_COLOR[tool.dsgvo] : "#6B7280",
                  }}
                >
                  Datenschutz
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {tool.dsgvo_hinweis}
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
