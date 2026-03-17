import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Über uns — kinderleicht.ai",
  description: "Das Team hinter kinderleicht.ai. Geprüfte KI-Tools und eigene Apps für Pädagogen im deutschsprachigen Raum.",
  alternates: { canonical: "https://kinderleicht.ai/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="KI im Bildungsalltag. Kinderleicht."
        subtitle="Geprüfte Tools, eigene Apps und ein Lexikon mit über 150 Begriffen. Speziell aufbereitet für Pädagogen im deutschsprachigen Raum."
      />

      {/* ── WER STECKT DAHINTER ──────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2596be" }}>
            Die Idee
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Aus dem Alltag. Für den Alltag.
          </h2>
          <div className="space-y-5 text-base text-gray-500 leading-relaxed">
            <p>
              <span className="text-gray-900 font-semibold">Kennst du das?</span> Du sitzt abends am Schreibtisch, willst nur
              kurz einen Elternbrief schreiben und landest in einer endlosen Google-Suche nach dem richtigen KI-Tool.
              Ist das DSGVO-konform? Kostet das was? Funktioniert das auch auf Deutsch?
            </p>
            <p>
              Genau deshalb gibt es kinderleicht.ai. Wir haben jedes Tool selbst getestet, den Datenschutz geprüft
              und alles so aufbereitet, dass du in Minuten findest, was du brauchst. Und wir entwickeln eigene Apps
              wie den Ferienplaner, die genau die Probleme lösen, die wir aus dem Bildungsalltag kennen.
            </p>
            <p className="text-lg text-gray-900 font-semibold">
              Mehr Zeit für Kinder und Jugendliche. Mehr Zeit für dein Team. Weniger Zeit am Schreibtisch.
            </p>
          </div>
        </div>
      </section>

      {/* ── WAS WIR BIETEN ───────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Was wir bieten.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                emoji: "🔍",
                title: "100+ geprüfte KI-Tools",
                desc: "Jedes Tool mit DSGVO-Ampel, pädagogischer Einschätzung, Preisdetails und Praxistipps.",
                href: "/tools",
              },
              {
                emoji: "🚀",
                title: "Eigene Web-Apps",
                desc: "Selbst entwickelte Tools wie der Ferienplaner. Kostenlos, im Browser, ohne Anmeldung.",
                href: "/apps",
              },
              {
                emoji: "📖",
                title: "KI-ABC mit 150+ Begriffen",
                desc: "Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools. Einfach erklärt für Pädagogen.",
                href: "/ki-abc",
              },
              {
                emoji: "📄",
                title: "Downloads und Materialien",
                desc: "Kostenlose Vorlagen, Checklisten und Leitfäden zum sofortigen Einsatz im Alltag.",
                href: "/downloads",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start gap-4 bg-[#F5F5F7] rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:border-[#2596be]/20 border border-transparent hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#2596be] transition-colors">{item.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WERTE ────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Woran wir uns messen.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Datenschutz zuerst",
                desc: "Kein Tool landet hier ohne DSGVO-Einschätzung. Wir zeigen transparent, wo die Server stehen und ob ein AVV vorhanden ist.",
              },
              {
                title: "Praxis vor Theorie",
                desc: "Wir empfehlen nur Tools, die im Alltag wirklich helfen. Kein Buzzword-Bingo, keine leeren Versprechen.",
              },
              {
                title: "Unabhängig und transparent",
                desc: "Affiliate-Links kennzeichnen wir offen. Unsere Bewertungen sind davon unabhängig. Mehr dazu auf unserer Transparenz-Seite.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Fragen oder Feedback?
          </h2>
          <p className="text-base text-gray-500 leading-relaxed mb-7">
            Wir freuen uns über Nachrichten, Tool-Vorschläge und Kooperationsideen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2596be" }}
          >
            Kontakt aufnehmen
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
