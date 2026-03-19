import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPromptsQuery } from "@/lib/sanity/queries";
import PromptsClient from "@/components/PromptsClient";
import PageHero from "@/components/PageHero";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "KI-Prompts für den Bildungsalltag — kinderleicht.ai",
  description:
    "Fertige KI-Prompts für Elternbriefe, Unterrichtsplanung, Förderpläne und mehr. Einfach kopieren und in ChatGPT oder Claude einfügen.",
  alternates: { canonical: "https://kinderleicht.ai/prompts" },
};

export default async function PromptsPage() {
  const prompts = await client.fetch(allPromptsQuery);

  return (
    <>
      <PageHero
        label="KI-Prompts"
        title="KI-Prompts für den Bildungsalltag."
        subtitle="Fertige Prompts zum Kopieren. Für Elternbriefe, Unterrichtsplanung, Förderpläne und vieles mehr."
      />

      <PromptsClient prompts={prompts} />
    </>
  );
}
