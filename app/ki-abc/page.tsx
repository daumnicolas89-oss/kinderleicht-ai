import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allLexikonQuery } from "@/lib/sanity/queries";
import LexikonClient from "@/components/LexikonClient";
import PageHero from "@/components/PageHero";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "KI-ABC — kinderleicht.ai",
  description:
    "Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools. Einfach erklärt für Pädagogen.",
  alternates: { canonical: "https://kinderleicht.ai/ki-abc" },
};

export default async function KiAbcPage() {
  const entries = await client.fetch(allLexikonQuery);

  return (
    <>
      <PageHero
        label="Lexikon"
        title="Das KI-ABC für Pädagogen."
        subtitle="Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools. Einfach erklärt."
      >
        {entries.length > 0 && (
          <p className="mt-4 text-sm text-gray-400">{entries.length} Begriffe von A bis Z</p>
        )}
      </PageHero>

      {/* Alphabet navigation + entries */}
      <LexikonClient entries={entries} />
    </>
  );
}
