import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppsClient from "@/components/AppsClient";

export const metadata: Metadata = {
  title: "Apps — kinderleicht.ai",
  description: "Eigene Web-Apps für Kita und Schule. Kostenlos im Browser, ohne Anmeldung.",
  alternates: { canonical: "https://kinderleicht.ai/apps" },
};

export default function AppsPage() {
  return (
    <>
      <PageHero
        label="Eigene Apps"
        title="Web-Apps für Pädagogen"
        subtitle="Eigene KI-gestützte Web-Apps speziell für den pädagogischen Alltag. Direkt im Browser nutzbar, ohne Installation, ohne Account."
      >
        <Link
          href="/so-arbeiten-wir"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ color: "#2596be" }}
        >
          Wie wir entwickeln
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </PageHero>

      {/* Datenschutz-Hinweis */}
      <div className="px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-gray-100 bg-[#EBF6FA]/30 p-5 sm:p-6 flex gap-4 items-start">
            <span className="flex-shrink-0 mt-0.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Deine Daten bleiben bei dir.</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Unsere Apps nutzen die OpenAI-API mit deaktiviertem Training. Das bedeutet: Deine Eingaben und die generierten Ergebnisse werden nicht gespeichert und nicht zum Trainieren von KI-Modellen verwendet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AppsClient />
    </>
  );
}
