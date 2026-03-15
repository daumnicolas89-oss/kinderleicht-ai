export const revalidate = 60;

import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { featuredToolsQuery } from "@/lib/sanity/queries";
import RotatingWord from "@/components/RotatingWord";
import FerienplanerSlideshow from "@/components/FerienplanerSlideshow";

const DSGVO_COLOR: Record<string, string> = { grün: "#059669", gelb: "#D97706", rot: "#DC2626" };
const DSGVO_BG: Record<string, string>    = { grün: "#DCFCE7", gelb: "#FEF9C3", rot: "#FEE2E2" };
const DSGVO_LABEL: Record<string, string> = { grün: "DSGVO konform", gelb: "Eingeschränkt", rot: "Kritisch" };

const audiences = [
  { label: "Kita & Krippe", emoji: "🏠" },
  { label: "Grundschule", emoji: "✏️" },
  { label: "Weiterführende Schule", emoji: "📚" },
  { label: "GBS & GTS", emoji: "☀️" },
  { label: "Leitung & Verwaltung", emoji: "📋" },
  { label: "Jugendarbeit", emoji: "🤝" },
];

export default async function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawTools: any[] = await client.fetch(featuredToolsQuery);
  const featuredTools = rawTools.map((t) => ({
    ...t,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logoUrl: t.logo ? urlFor(t.logo as any).width(160).fit("max").url() : null,
  }));

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            opacity: 0.4,
          }}
        />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.11) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <h1
            className="text-5xl sm:text-6xl lg:text-[70px] font-bold tracking-tight text-gray-900 leading-[1.08]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            KI-Tools für
            <br />
            <RotatingWord />
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Geprüfte Tools, eigene Apps und hilfreiche Downloads für Elternbriefe,
            Ferienpläne und Unterrichtsplanung. Damit mehr Zeit für Kinder bleibt.
          </p>

        </div>
      </section>

      {/* ── FERIENPLANER ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2596be" }}
              >
                Eigene App
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Ferienprogramm, Elternbrief<br />
                und Dienstplan auf Knopfdruck.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-7">
                Der Ferienplaner erstellt alles, was du für die Ferienbetreuung brauchst.
                Komplett im Browser, kostenlos und ohne Anmeldung.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ferienprogramm mit Mottos, Aktivitäten und Zeitplan generieren",
                  "Elternbriefe automatisch formulieren und als PDF exportieren",
                  "Dienstpläne mit Schichten und Betreuungsschlüssel erstellen",
                  "Alles als PDF oder Word herunterladen",
                  "Direkt im Browser, ohne Installation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="https://ferienplaner.kinderleicht.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#2596be" }}
                >
                  Ferienplaner öffnen
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
                <p className="text-xs text-gray-400 sm:self-center">
                  Weitere Apps folgen in Kürze
                </p>
              </div>
            </div>

            {/* Slideshow */}
            <FerienplanerSlideshow />
          </div>
        </div>
      </section>

      {/* ── EMPFOHLENE TOOLS ──────────────────────────────────── */}
      {featuredTools.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2596be" }}
              >
                Geprüfte KI-Tools
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Unsere Empfehlungen.
              </h2>
              <p className="text-gray-400 text-base max-w-md mx-auto">
                Handverlesene Tools mit DSGVO-Einschätzung und Tipps für den pädagogischen Einsatz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="flex flex-col p-5 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative w-11 h-11 rounded-xl bg-[#F5F5F7] flex-shrink-0 overflow-hidden">
                        {tool.logoUrl ? (
                          <Image src={tool.logoUrl} alt={tool.name} fill className="object-contain p-2" sizes="44px" />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-base font-bold text-gray-300">
                            {tool.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                        Empfohlen
                      </span>
                    </div>
                    <h3
                      className="text-[15px] font-semibold text-gray-900 mb-1.5 group-hover:text-[#2596be] transition-colors"
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    >
                      {tool.name}
                    </h3>
                    {tool.kurzbeschreibung && (
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                        {tool.kurzbeschreibung}
                      </p>
                    )}
                  </div>
                  <div className="px-5 py-3 border-t border-gray-50 flex items-center gap-2 flex-wrap">
                    {tool.dsgvo && (
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: DSGVO_BG[tool.dsgvo] ?? "#F3F4F6",
                          color: DSGVO_COLOR[tool.dsgvo] ?? "#374151",
                        }}
                      >
                        {DSGVO_LABEL[tool.dsgvo]}
                      </span>
                    )}
                    {tool.preismodell && (
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                        {tool.preismodell}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                style={{ color: "#2596be" }}
              >
                Alle Tools ansehen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── ENTDECKEN-GRID ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Alles an einem Ort.
            </h2>
            <p className="text-gray-400 text-base max-w-md mx-auto">
              Apps, Tools und Vorlagen für deinen pädagogischen Alltag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: "/apps",
                icon: (
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF6FA] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </div>
                ),
                title: "Eigene Apps",
                description: "Von uns entwickelte Tools wie der Ferienplaner. Kostenlos, im Browser, ohne Anmeldung.",
                linkText: "Apps entdecken",
              },
              {
                href: "/tools",
                icon: (
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF6FA] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  </div>
                ),
                title: "KI-Tools",
                description: "Geprüfte KI-Tools mit DSGVO-Einschätzung, Bewertungen und Tipps für den Einsatz.",
                linkText: "Tools durchsuchen",
              },
              {
                href: "/downloads",
                icon: (
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF6FA] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                ),
                title: "Downloads",
                description: "Kostenlose Vorlagen, Checklisten und Materialien zum direkten Herunterladen.",
                linkText: "Downloads ansehen",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-5">{card.icon}</div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                  {card.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: "#2596be" }}
                >
                  {card.linkText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZIELGRUPPEN ───────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Für wen ist kinderleicht.ai?
          </h2>
          <p className="text-gray-400 mb-8">Für alle, die professionell mit Kindern arbeiten.</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-100 text-sm font-medium text-gray-700 shadow-sm"
              >
                <span>{a.emoji}</span>
                {a.label}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
