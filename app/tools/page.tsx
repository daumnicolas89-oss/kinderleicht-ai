import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allToolsQuery } from "@/lib/sanity/queries";
import ToolsClient from "@/components/ToolsClient";
import PageHero from "@/components/PageHero";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "KI-Tools — kinderleicht.ai",
  description: "Geprüfte KI-Tools für Kita, Schule und Bildung. Mit DSGVO-Ampel, Bewertungen und Praxistipps.",
  alternates: { canonical: "https://kinderleicht.ai/tools" },
};

export default async function ToolsPage() {
  const raw = await client.fetch(allToolsQuery);
  const tools = raw.map((t: Record<string, unknown>) => ({
    ...t,
    logoUrl: t.logo ? urlFor(t.logo).width(160).fit("max").url() : null,
  }));

  return (
    <>
      <PageHero
        label="KI-Tools"
        title="Der große Tool-Überblick."
        subtitle="Geprüfte KI-Tools mit Tipps für den pädagogischen Einsatz."
      >
        <Link
          href="/so-arbeiten-wir"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ color: "#2596be" }}
        >
          Wie wir prüfen
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </PageHero>

      <ToolsClient tools={tools} />
    </>
  );
}
