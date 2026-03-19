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
        title="Kopieren. Einfügen. Fertig."
        subtitle="Erprobte Prompts für Elternbriefe, Unterrichtsplanung, Förderpläne und mehr. Einfach den passenden Prompt kopieren und in ChatGPT oder Claude einfügen."
      />

      <PromptsClient prompts={prompts} />
    </>
  );
}
