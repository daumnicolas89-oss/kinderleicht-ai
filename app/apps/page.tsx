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
        subtitle={<>Eigene KI-gestützte Web-Apps speziell für den pädagogischen Alltag. Direkt im Browser nutzbar, ohne Installation, ohne Account. Deine Eingaben werden <strong className="text-gray-700">nicht gespeichert</strong> und <strong className="text-gray-700">nicht zum KI-Training</strong> verwendet.</>}
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

      <AppsClient />
    </>
  );
}
