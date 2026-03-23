import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "So arbeiten wir — kinderleicht.ai",
  description:
    "Jedes Tool durchläuft unseren 4-Schritte-Prüfprozess: Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. So arbeiten wir bei kinderleicht.ai.",
  alternates: { canonical: "https://kinderleicht.ai/so-arbeiten-wir" },
};

const checks = [
  {
    step: 1,
    title: "Datenschutz & DSGVO",
    text: "Wo liegen die Server? Gibt es einen Auftragsverarbeitungsvertrag? Werden Daten für KI-Training genutzt? Wir recherchieren die Datenschutzerklärung und vergeben eine Ampelbewertung. Grün bedeutet EU-Server und AVV vorhanden. Gelb bedeutet Einschränkungen oder Unklarheiten. Rot bedeutet kritisch für den Einsatz in Bildungseinrichtungen.",
  },
  {
    step: 2,
    title: "Pädagogischer Nutzen",
    text: "Löst das Tool ein echtes Problem im Bildungsalltag? Wir fragen: Spart es Zeit? Unterstützt es bei Planung, Kommunikation oder Materialerstellung? Ist es auch ohne KI-Vorkenntnisse nutzbar?",
  },
  {
    step: 3,
    title: "Bedienbarkeit",
    text: "Wir testen jedes Tool selbst. Wie lange dauert der Einstieg? Braucht es eine Anmeldung? Funktioniert es auf Tablet und Smartphone? Ist die Oberfläche auch auf Deutsch verfügbar?",
  },
  {
    step: 4,
    title: "Preis-Leistung",
    text: "Gibt es einen kostenlosen Plan der wirklich nutzbar ist? Wie teuer ist der Education-Tarif? Wir kennzeichnen transparent ob und wie viel ein Tool kostet.",
  },
];

const appPoints = [
  "Keine Anmeldung erforderlich",
  "Wir speichern keine personenbezogenen Daten",
  "Unsere Apps nutzen KI-Dienste externer Anbieter für die Textgenerierung",
  "Gib keine personenbezogenen Daten von Kindern oder Eltern ein",
];

export default function SoArbeitenWirPage() {
  return (
    <>
      <PageHero
        label="Transparenz"
        title="So arbeiten wir."
        subtitle="Jedes Tool, jede App und jedes Material auf kinderleicht.ai durchläuft denselben Prüfprozess. Kein Tool landet hier zufällig."
      />

      {/* ── TOOLS & KI-WERKZEUGE ───────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Tools & KI-Werkzeuge
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-2xl">
            Bevor ein Tool ins Verzeichnis kommt prüfen wir es auf vier Ebenen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {checks.map((c) => (
              <div
                key={c.title}
                className="flex flex-col p-6 bg-[#F5F5F7] rounded-2xl"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-sm font-bold text-white"
                  style={{ backgroundColor: "#2596be" }}
                >
                  {c.step}
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                >
                  {c.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EIGENE APPS ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Eigene Apps
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Unsere Apps entwickeln wir selbst für den Bildungsalltag.
          </p>
          <ul className="space-y-4">
            {appPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-700">
                <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DOWNLOADS & MATERIALIEN ────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Downloads & Materialien
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Jedes Material auf kinderleicht.ai ist praxiserprobt. Wir erstellen Vorlagen und Checklisten
            die direkt im Alltag einsetzbar sind. Kein theoretisches Fachwissen, keine langen Einleitungen.
            Nur das was wirklich hilft.
          </p>
        </div>
      </section>

      {/* ── TRANSPARENZ & AFFILIATE ────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Transparenz & Affiliate-Links
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Einige Tools im Verzeichnis enthalten Affiliate-Links. Das bedeutet: Wenn du über unseren
            Link ein kostenpflichtiges Abo abschließt erhalten wir eine kleine Provision. Das beeinflusst
            unsere Bewertung nicht. Wir empfehlen kein Tool das wir nicht selbst für gut befinden.
          </p>
          <div
            className="rounded-xl p-5 border-l-4 max-w-2xl"
            style={{ borderColor: "#2596be", backgroundColor: "#EBF6FA" }}
          >
            <p className="text-base text-gray-600 leading-relaxed">
              Unsere DSGVO-Ampel ist eine Orientierungshilfe. Wir sind keine Rechtsanwälte.
              Für verbindliche Datenschutzentscheidungen empfehlen wir die Rücksprache mit dem
              zuständigen Datenschutzbeauftragten.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
          >
            Noch Fragen?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Schreib uns wenn du ein Tool vermisst oder Feedback zur Bewertung hast.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.96]"
            style={{ backgroundColor: "#2596be" }}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
