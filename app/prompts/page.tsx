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
        subtitle={<>Fertige Vorlagen für Elternbriefe, Unterrichtsplanung, Förderpläne und mehr. Einfach kopieren und in ChatGPT oder Claude einfügen. <a href="/ki-abc/prompt-prompting" className="underline underline-offset-2" style={{ color: "#2596be" }}>Was ist ein Prompt?</a></>}
      />

      {/* ── SO FUNKTIONIERT ES ──────────────────────── */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
          <span className="inline-flex items-center gap-1 sm:gap-1.5"><span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}>1</span>Wählen</span>
          <svg className="text-gray-300 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          <span className="inline-flex items-center gap-1 sm:gap-1.5"><span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}>2</span>Kopieren</span>
          <svg className="text-gray-300 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          <span className="inline-flex items-center gap-1 sm:gap-1.5"><span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}>3</span>Einfügen</span>
          <svg className="text-gray-300 flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          <span className="inline-flex items-center gap-1 sm:gap-1.5"><span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}>4</span>Anpassen</span>
        </div>
      </section>

      <PromptsClient prompts={prompts} />
    </>
  );
}
