import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Übersicht — kinderleicht.ai",
  description:
    "Alle Bereiche auf einen Blick: Apps, Tools, Prompts, Downloads, KI-ABC und mehr.",
  alternates: { canonical: "https://kinderleicht.ai/uebersicht" },
};

const areas = [
  {
    title: "Apps",
    href: "/apps",
    description: "Eigene Web-Apps für den pädagogischen Alltag. Kostenlos, ohne Anmeldung, direkt im Browser.",
    examples: "Ferienplaner, Lernstufen-Generator",
    color: "#2596be",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Tools",
    href: "/tools",
    description: "315 geprüfte KI-Tools für Bildung. Mit Kategorie, Preismodell und DSGVO-Einschätzung.",
    examples: "ChatGPT, Fobizz, Canva, SchulKI",
    color: "#059669",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 5.384a2.25 2.25 0 01-3.176-3.176l5.384-5.384m0 0L15.314 4.2a2.25 2.25 0 013.176 0l1.31 1.31a2.25 2.25 0 010 3.176L12.81 15.81" />
      </svg>
    ),
  },
  {
    title: "Prompts",
    href: "/prompts",
    description: "Fertige KI-Vorlagen zum Kopieren. Für Elternbriefe, Unterrichtsplanung, Förderpläne und mehr.",
    examples: "Elternbrief, Differenzierung, Bewertungsraster",
    color: "#7C3AED",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "Downloads",
    href: "/downloads",
    description: "Kostenlose PDFs und Handouts. Zum Ausdrucken, Weitergeben oder für Fortbildungen.",
    examples: "DSGVO-Checkliste, Prompt-Sammlung",
    color: "#D97706",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    title: "KI-ABC",
    href: "/ki-abc",
    description: "385+ Begriffe rund um KI, Datenschutz und Digitalisierung. Einfach erklärt, mit Praxisbeispielen.",
    examples: "DSGVO, Prompt, Algorithmus, AVV",
    color: "#DC2626",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "L-AI-tfaden",
    href: "/laitfaden",
    description: "Dos und Don'ts für KI im Bildungsbereich. Was funktioniert, was nicht und worauf es ankommt.",
    examples: "Datenschutz, Verantwortung, Tool-Auswahl",
    color: "#0F766E",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function UebersichtPage() {
  return (
    <>
      <PageHero
        title="Was findest du wo?"
        subtitle="Alle Bereiche von kinderleicht.ai auf einen Blick."
      />

      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group flex gap-4 p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200"
              >
                <span
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${area.color}10`, color: area.color }}
                >
                  {area.icon}
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#2596be] transition-colors">
                    {area.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-2">
                    {area.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    z.B. {area.examples}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-100" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base text-gray-500 mb-6">
            Du weißt nicht genau, wo du anfangen sollst?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#2596be" }}
            >
              Tools entdecken
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/prompts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Prompts ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
