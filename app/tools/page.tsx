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
        label="Tools"
        title="Der große Tool-Überblick."
        subtitle="Alle Tools auf einen Blick. Filtere nach Kategorie, Preis oder DSGVO-Bewertung und finde genau das, was du brauchst."
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

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fragen zu den Tools</h2>
          <div className="space-y-4">
            {[
              { q: "Was bedeutet die DSGVO-Ampel?", a: "Grün: Server in der EU, AVV vorhanden. Gelb: Einschränkungen oder unklare Datenlage. Rot: Kritisch für den Einsatz in Bildungseinrichtungen. Die Ampel ist eine Orientierungshilfe, keine Rechtsberatung." },
              { q: "Wie wählt ihr die Tools aus?", a: "Jedes Tool durchläuft unseren 4-Schritte-Prüfprozess: Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. Wir testen jedes Tool selbst." },
              { q: "Sind alle Tools kostenlos?", a: "Nein. Wir kennzeichnen transparent, ob ein Tool kostenlos, Freemium oder kostenpflichtig ist. Viele Tools bieten einen kostenlosen Plan, der für den Schulalltag ausreicht." },
              { q: "Kann ich ein Tool vorschlagen?", a: "Ja. Schreib uns über das Kontaktformular. Wir prüfen jeden Vorschlag und nehmen passende Tools ins Verzeichnis auf." },
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

      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Was bedeutet die DSGVO-Ampel?", acceptedAnswer: { "@type": "Answer", text: "Grün: Server in der EU, AVV vorhanden. Gelb: Einschränkungen oder unklare Datenlage. Rot: Kritisch für den Einsatz in Bildungseinrichtungen." }},
            { "@type": "Question", name: "Wie wählt ihr die Tools aus?", acceptedAnswer: { "@type": "Answer", text: "Jedes Tool durchläuft unseren 4-Schritte-Prüfprozess: Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. Wir testen jedes Tool selbst." }},
            { "@type": "Question", name: "Sind alle Tools kostenlos?", acceptedAnswer: { "@type": "Answer", text: "Nein. Wir kennzeichnen transparent, ob ein Tool kostenlos, Freemium oder kostenpflichtig ist. Viele Tools bieten einen kostenlosen Plan, der für den Schulalltag ausreicht." }},
            { "@type": "Question", name: "Kann ich ein Tool vorschlagen?", acceptedAnswer: { "@type": "Answer", text: "Ja. Schreib uns über das Kontaktformular. Wir prüfen jeden Vorschlag und nehmen passende Tools ins Verzeichnis auf." }},
          ],
        }) }}
      />
    </>
  );
}
