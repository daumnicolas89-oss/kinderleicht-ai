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

      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">So funktioniert es</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Prompt wählen", text: "Finde den passenden Prompt für deine Aufgabe." },
              { step: "2", title: "Kopieren", text: "Klicke auf den Kopieren-Button unter dem Prompt." },
              { step: "3", title: "Einfügen", text: "Füge den Prompt in ChatGPT, Claude oder ein anderes KI-Tool ein." },
              { step: "4", title: "Anpassen", text: "Ersetze die Platzhalter in [eckigen Klammern] durch deine Angaben." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center p-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2" style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}>{s.step}</span>
                <p className="text-sm font-semibold text-gray-900 mb-1">{s.title}</p>
                <p className="text-xs text-gray-500">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PromptsClient prompts={prompts} />
    </>
  );
}
