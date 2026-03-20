import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "L-AI-tfaden — kinderleicht.ai",
  description:
    "Dos und Don'ts für den Einsatz von KI in Kita, Schule und Bildungseinrichtungen. Praxisnah und auf den Punkt.",
  alternates: { canonical: "https://kinderleicht.ai/laitfaden" },
};

const donts = [
  {
    title: "Echte Namen eingeben",
    text: 'Gib niemals echte Namen von Kindern, Eltern oder Kollegen in KI-Tools ein. Nutze stattdessen Platzhalter wie "Kind A" oder "Schüler X".',
    link: { label: "Anonymisierung", href: "/ki-abc/anonymisierung" },
  },
  {
    title: "Noten und Diagnosen per KI erstellen",
    text: "KI kann Formulierungshilfen geben, aber die pädagogische Bewertung muss immer von dir kommen. Leistungsbeurteilungen darfst du nicht an eine KI delegieren.",
    link: null,
  },
  {
    title: "Texte ungeprüft weitergeben",
    text: "KI-generierte Elternbriefe, Berichte oder Förderpläne immer gegenlesen. KI kann Fakten erfinden, unpassende Formulierungen wählen oder den Kontext falsch verstehen.",
    link: null,
  },
  {
    title: "Fotos oder Dokumente hochladen",
    text: "Lade keine Fotos von Kindern, Zeugnisse oder Beobachtungsbögen in KI-Tools hoch. Diese Daten landen auf fremden Servern und sind dort nicht mehr unter deiner Kontrolle.",
    link: { label: "Personenbezogene Daten", href: "/ki-abc/personenbezogene-daten" },
  },
  {
    title: "Auf KI bei Kindeswohl vertrauen",
    text: "Bei Verdacht auf Kindeswohlgefährdung, psychischen Auffälligkeiten oder Krisensituationen ist menschliche Fachkompetenz gefragt. KI kann hier keine Einschätzung geben.",
    link: null,
  },
  {
    title: "Tools ohne AVV nutzen",
    text: "Bevor ein KI-Tool in der Einrichtung eingeführt wird, muss ein Auftragsverarbeitungsvertrag geprüft werden. Ohne AVV ist die Nutzung datenschutzrechtlich nicht zulässig.",
    link: { label: "AVV", href: "/ki-abc/avv-auftragsverarbeitungsvertrag" },
  },
  {
    title: "Sensible Falldaten teilen",
    text: 'Informationen über Förderbedarf, Familienkonstellationen, Verhaltensauffälligkeiten oder Gesundheitsdaten gehören nicht in KI-Tools. Auch nicht "nur kurz zum Formulieren".',
    link: { label: "Datenminimierung", href: "/ki-abc/datenminimierung" },
  },
];

const dos = [
  {
    title: "Platzhalter verwenden",
    text: 'Ersetze echte Namen durch Platzhalter wie [Name], "Kind A" oder fiktive Namen. So bekommst du gute Ergebnisse, ohne Daten preiszugeben.',
    link: { label: "Pseudonymisierung", href: "/ki-abc/pseudonymisierung" },
  },
  {
    title: "Jedes Ergebnis gegenlesen",
    text: "KI liefert Entwürfe, keine fertigen Dokumente. Lies jeden Text kritisch, prüfe Fakten und passe Formulierungen an deine Situation an.",
    link: null,
  },
  {
    title: "Datenschutz vorab klären",
    text: "Prüfe vor der Nutzung: Wo stehen die Server? Gibt es einen AVV? Werden Daten für KI-Training verwendet? Bei kinderleicht.ai findest du diese Infos bei jedem Tool.",
    link: { label: "Serverstandort", href: "/ki-abc/serverstandort" },
  },
  {
    title: "So wenig Daten wie möglich",
    text: "Gib nur die Informationen ein, die für das Ergebnis wirklich nötig sind. Je weniger personenbezogene Daten, desto sicherer.",
    link: { label: "Datenminimierung", href: "/ki-abc/datenminimierung" },
  },
  {
    title: "Im Team transparent sein",
    text: "Sprich offen darüber, wo und wie du KI nutzt. Transparenz schafft Vertrauen bei Kollegen, Eltern und Trägern.",
    link: null,
  },
  {
    title: "KI als Werkzeug, nicht als Ersatz",
    text: "KI spart Zeit bei Routineaufgaben wie Formulierungen, Differenzierung oder Recherche. Die pädagogische Entscheidung bleibt immer bei dir.",
    link: null,
  },
  {
    title: "Einwilligungen einholen",
    text: "Wenn du Tools nutzt, bei denen Daten verarbeitet werden, informiere Eltern und hole wenn nötig eine Einwilligung ein.",
    link: { label: "Einwilligungserklärung", href: "/ki-abc/einwilligungserklaerung" },
  },
];

export default function KiStolperfallenPage() {
  return (
    <>
      <PageHero
        label="Verantwortung"
        title="Der L-AI-tfaden."
        subtitle="Dos und Don'ts für den Einsatz von KI in Kita, Schule und GBS. Kurz, praxisnah und direkt anwendbar."
      />

      {/* Don'ts */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-500 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Das solltest du vermeiden.</h2>
          </div>

          <div className="grid gap-4">
            {donts.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-red-100 bg-red-50/30">
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3">
                    <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  {item.link && (
                    <Link href={item.link.href} className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#2596be] hover:underline">
                      {item.link.label} im KI-ABC
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dos */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">So machst du es richtig.</h2>
          </div>

          <div className="grid gap-4">
            {dos.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-emerald-100 bg-white">
                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3">
                    <path strokeLinecap="round" d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  {item.link && (
                    <Link href={item.link.href} className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#2596be] hover:underline">
                      {item.link.label} im KI-ABC
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hinweis + CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Diese Hinweise ersetzen keine Rechtsberatung und keine Datenschutzschulung.
            Sie helfen dir, die häufigsten Fehler im Umgang mit KI im pädagogischen Alltag zu vermeiden.
            Im Zweifel wende dich an deinen Datenschutzbeauftragten.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/ki-abc"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#2596be" }}
            >
              Alle Begriffe im KI-ABC
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Tools mit DSGVO-Bewertung
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
