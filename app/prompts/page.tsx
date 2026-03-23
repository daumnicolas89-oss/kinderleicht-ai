import type { Metadata } from "next";
import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { allPromptsQuery } from "@/lib/sanity/queries";
import PromptsClient from "@/components/PromptsClient";
import PageHero from "@/components/PageHero";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "KI-Prompts für den Bildungsalltag — kinderleicht.ai",
  description:
    "Fertige KI-Vorlagen für Elternbriefe, Unterrichtsplanung, Förderpläne und mehr. Einfach kopieren und in deinem KI-Chatbot einfügen.",
  alternates: { canonical: "https://kinderleicht.ai/prompts" },
};

export default async function PromptsPage() {
  const prompts = await client.fetch(allPromptsQuery);

  return (
    <>
      <PageHero
        label="KI-Prompts"
        title="Kopieren. Einfügen. Fertig."
        subtitle={<>Fertige Vorlagen für Elternbriefe, Unterrichtsplanung, Förderpläne und mehr. Kopiere den <a href="/ki-abc/prompting" className="underline underline-offset-2" style={{ color: "#2596be" }}>Prompt</a> deiner Wahl und füge ihn in deinem Chatbot ein.</>}
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

      <Suspense><PromptsClient prompts={prompts} /></Suspense>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fragen zu den Prompts</h2>
          <div className="space-y-4">
            {[
              { q: "Was ist ein Prompt?", a: "Ein Prompt ist eine Anweisung an eine KI wie ChatGPT oder Claude. Je genauer die Anweisung, desto besser das Ergebnis. Unsere Vorlagen sind so formuliert, dass du nur noch Platzhalter anpassen musst." },
              { q: "Welchen Chatbot kann ich verwenden?", a: "Unsere Prompts funktionieren mit allen gängigen KI-Chatbots: ChatGPT, Claude, Google Gemini, Microsoft Copilot oder Fobizz. Einfach kopieren und einfügen." },
              { q: "Muss ich die Ergebnisse noch bearbeiten?", a: "Ja. KI liefert Entwürfe, keine fertigen Dokumente. Lies das Ergebnis kritisch, passe es an deine Situation an und prüfe Fakten, bevor du es verwendest." },
              { q: "Kann ich eigene Prompts einreichen?", a: "Ja. Wenn du einen Prompt hast, der sich in der Praxis bewährt hat, schreib uns über das Kontaktformular. Wir nehmen gute Vorschläge gerne auf." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-semibold text-gray-900">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p className="px-6 pb-4 text-base text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Was ist ein Prompt?", acceptedAnswer: { "@type": "Answer", text: "Ein Prompt ist eine Anweisung an eine KI wie ChatGPT oder Claude. Je genauer die Anweisung, desto besser das Ergebnis. Unsere Vorlagen sind so formuliert, dass du nur noch Platzhalter anpassen musst." }},
            { "@type": "Question", name: "Welchen Chatbot kann ich verwenden?", acceptedAnswer: { "@type": "Answer", text: "Unsere Prompts funktionieren mit allen gängigen KI-Chatbots: ChatGPT, Claude, Google Gemini, Microsoft Copilot oder Fobizz." }},
            { "@type": "Question", name: "Muss ich die Ergebnisse noch bearbeiten?", acceptedAnswer: { "@type": "Answer", text: "Ja. KI liefert Entwürfe, keine fertigen Dokumente. Lies das Ergebnis kritisch, passe es an deine Situation an und prüfe Fakten." }},
            { "@type": "Question", name: "Kann ich eigene Prompts einreichen?", acceptedAnswer: { "@type": "Answer", text: "Ja. Wenn du einen Prompt hast, der sich in der Praxis bewährt hat, schreib uns über das Kontaktformular." }},
          ],
        }) }}
      />
    </>
  );
}
