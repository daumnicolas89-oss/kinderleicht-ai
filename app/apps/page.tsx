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

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fragen zu den Apps</h2>
          <div className="space-y-4">
            {[
              { q: "Werden meine Eingaben gespeichert?", a: "Nein. Unsere Apps nutzen die OpenAI-API mit deaktiviertem Training. Deine Eingaben und die generierten Ergebnisse werden nicht gespeichert und nicht zum Trainieren von KI-Modellen verwendet." },
              { q: "Brauche ich einen Account?", a: "Nein. Alle Apps laufen direkt im Browser, ohne Registrierung und ohne Installation. Einfach öffnen und loslegen." },
              { q: "Funktionieren die Apps auf dem Smartphone?", a: "Ja. Alle Apps sind für mobile Geräte optimiert und funktionieren auf Smartphone, Tablet und Desktop." },
              { q: "Kann ich die Ergebnisse exportieren?", a: "Ja. Alle Apps bieten einen PDF-Export, damit du die Ergebnisse ausdrucken oder digital weiterverwenden kannst." },
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
            { "@type": "Question", name: "Werden meine Eingaben gespeichert?", acceptedAnswer: { "@type": "Answer", text: "Nein. Unsere Apps nutzen die OpenAI-API mit deaktiviertem Training. Deine Eingaben und die generierten Ergebnisse werden nicht gespeichert und nicht zum Trainieren von KI-Modellen verwendet." }},
            { "@type": "Question", name: "Brauche ich einen Account?", acceptedAnswer: { "@type": "Answer", text: "Nein. Alle Apps laufen direkt im Browser, ohne Registrierung und ohne Installation." }},
            { "@type": "Question", name: "Funktionieren die Apps auf dem Smartphone?", acceptedAnswer: { "@type": "Answer", text: "Ja. Alle Apps sind für mobile Geräte optimiert und funktionieren auf Smartphone, Tablet und Desktop." }},
            { "@type": "Question", name: "Kann ich die Ergebnisse exportieren?", acceptedAnswer: { "@type": "Answer", text: "Ja. Alle Apps bieten einen PDF-Export, damit du die Ergebnisse ausdrucken oder digital weiterverwenden kannst." }},
          ],
        }) }}
      />
    </>
  );
}
