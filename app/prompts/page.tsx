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
        subtitle={<>Fertige Vorlagen für Elternbriefe, Unterrichtsplanung, Förderpläne und mehr. Einfach kopieren und in <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">ChatGPT</a> oder <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Claude</a> einfügen. <a href="/ki-abc/prompt-prompting" className="underline underline-offset-2">Was ist ein Prompt?</a></>}
      />

      {/* ── SO FUNKTIONIERT ES ──────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 justify-center">
            {[
              { step: "1", text: "Prompt wählen" },
              { step: "2", text: "Kopieren" },
              { step: "3", text: "In ChatGPT oder Claude einfügen" },
              { step: "4", text: "Platzhalter in [Klammern] anpassen" },
            ].map((s, i) => (
              <div key={s.step} className="flex items-center gap-2.5">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}
                >
                  {s.step}
                </span>
                <span className="text-sm text-gray-700">{s.text}</span>
                {i < 3 && (
                  <svg className="hidden sm:block text-gray-300 flex-shrink-0 ml-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PromptsClient prompts={prompts} />
    </>
  );
}
