import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { toolBySlugQuery, allToolSlugsQuery, similarToolsQuery } from "@/lib/sanity/queries";
import { ShareBar } from "@/components/ToolDetailClient";
import ToolDetailLayout from "@/components/ToolDetailLayout";

type Props = { params: Promise<{ slug: string }> };

const DSGVO_COLOR: Record<string, string> = { grün: "#059669", gelb: "#D97706", rot: "#DC2626" };
const DSGVO_BG: Record<string, string>    = { grün: "#DCFCE7", gelb: "#FEF9C3", rot: "#FEE2E2" };
const DSGVO_LABEL: Record<string, string> = { grün: "DSGVO konform", gelb: "Eingeschränkt", rot: "Kritisch" };

function Stars({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 12 12" fill={i <= value ? "#F59E0B" : "#E5E7EB"}>
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

  return (
    <div className="min-h-screen scroll-smooth" style={{ backgroundColor: "#F5F5F7" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
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
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                {tool.name}
              </h1>
            </div>
          </div>

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
                className="sm:ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity"
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

      {/* ── Hauptinhalt: Tabs + Sidebar ───────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ToolDetailLayout tool={tool} shotUrl={shotUrl} targetUrl={targetUrl} />
      </div>

      {/* ── Ähnliche Tools ────────────────────────────────────── */}
      {similarTools.length >= 3 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2
            className="text-xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
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
                    style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                  >
                    {t.name}
                  </h3>
                  {t.kurzbeschreibung && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
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
