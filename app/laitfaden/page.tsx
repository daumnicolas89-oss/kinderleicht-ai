import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "L-AI-tfaden — kinderleicht.ai",
  description:
    "Dos und Don'ts für den Einsatz von KI in Kita, Schule und Bildungseinrichtungen. In 5 Themenblöcken praxisnah erklärt.",
  alternates: { canonical: "https://kinderleicht.ai/laitfaden" },
};

const sections = [
  {
    id: "datenschutz",
    title: "Datenschutz",
    intro: "KI-Tools verarbeiten alles, was du eingibst. Deshalb ist wichtig, was du teilst und wo deine Daten landen.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    pairs: [
      {
        dont: "Echte Namen, Adressen, Fotos, Noten oder Förderpläne haben in öffentlichen KI-Tools nichts zu suchen.",
        do: 'Arbeite mit fiktiven Beispielen: Namen ändern, Details verfremden, Platzhalter wie "Kind A" nutzen.',
        link: { label: "Anonymisierung", href: "/ki-abc/anonymisierung" },
      },
      {
        dont: "Schülerarbeiten, Konferenzprotokolle oder Beobachtungsbögen gehören nicht in externe Tools.",
        do: "Setze nur Tools ein, bei denen ein AVV vorliegt und klar ist, wo die Daten gespeichert werden.",
        link: { label: "AVV", href: "/ki-abc/avv-auftragsverarbeitungsvertrag" },
      },
      {
        dont: "Wenn unklar ist, was mit deinen Eingaben passiert, lieber die Finger davon lassen.",
        do: "Gib nur ein, was du wirklich brauchst. Weniger Daten bedeutet weniger Risiko.",
        link: { label: "Datenminimierung", href: "/ki-abc/datenminimierung" },
      },
    ],
  },
  {
    id: "verantwortung",
    title: "Pädagogische Verantwortung",
    intro: "KI kann dir Arbeit abnehmen, aber nicht das pädagogische Urteil. Am Ende entscheidest immer du.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    pairs: [
      {
        dont: "Lass KI nicht über Noten, Förderdiagnosen oder Zeugnisformulierungen entscheiden. Solche Texte sind Entwürfe, nicht das Endergebnis.",
        do: "Nutze KI als Unterstützung: Texte gegenlesen, an deine Situation anpassen und erst dann verwenden.",
        link: null,
      },
      {
        dont: "Beziehung, Gespräch und persönliches Feedback lassen sich nicht durch KI ersetzen.",
        do: "Dein Fachwissen, das Konzept deiner Einrichtung und deine Erfahrung haben immer Vorrang.",
        link: null,
      },
      {
        dont: "Bei Verdacht auf Kindeswohlgefährdung oder in Krisensituationen ist immer menschliche Fachkompetenz gefragt.",
        do: "Informiere Eltern, wenn du Tools mit Datenverarbeitung nutzt, und hole Einwilligungen ein.",
        link: { label: "Einwilligungserklärung", href: "/ki-abc/einwilligungserklaerung" },
      },
    ],
  },
  {
    id: "qualitaet",
    title: "Qualität und Fehler",
    intro: "KI klingt oft überzeugend, liegt aber auch mal daneben. Fakten prüfen gehört dazu.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    pairs: [
      {
        dont: "KI-Texte nicht einfach kopieren und weiterschicken. KI erfindet Fakten und formuliert manchmal unpassend.",
        do: "Wichtige Inhalte immer mit einer zweiten Quelle gegenchecken, besonders bei Fakten und Fachbegriffen.",
        link: null,
      },
      {
        dont: "Aufpassen bei einseitigen Darstellungen oder stereotypen Beispielen. KI kann Vorurteile aus Trainingsdaten übernehmen.",
        do: "Kinder und Jugendliche einbeziehen: Gemeinsam KI-Ergebnisse hinterfragen, das stärkt Medienkompetenz.",
        link: null,
      },
    ],
  },
  {
    id: "transparenz",
    title: "Fairness und Transparenz",
    intro: "Offenheit schafft Vertrauen. Klare Regeln helfen mehr als Verbote.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pairs: [
      {
        dont: 'Sogenannte "KI-Detektoren" für Schülerarbeiten liefern viele Fehlalarme und können bestimmte Gruppen benachteiligen.',
        do: "Stellt gemeinsam klare Regeln auf: Was ist erlaubt, was nicht, und wie wird KI-Nutzung kenntlich gemacht?",
        link: null,
      },
      {
        dont: "KI komplett zu verbieten, ohne Regeln oder Alternativen anzubieten, führt meistens nur zu heimlicher Nutzung.",
        do: "Sprecht offen im Team darüber, wo und wie KI zum Einsatz kommt. Das baut Berührungsängste ab.",
        link: null,
      },
    ],
  },
  {
    id: "toolauswahl",
    title: "Tool-Auswahl",
    intro: "Nicht jedes Tool, das gut aussieht, ist auch gut für den Bildungsbereich. Ein kurzer Check spart später Ärger.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pairs: [
      {
        dont: "Vorsicht bei Tools, die behaupten, die Stimmung oder das Verhalten von Kindern erkennen zu können.",
        do: "Halte dich an Tools, die von deiner Schule, deinem Träger oder deinem Bundesland empfohlen wurden.",
        link: { label: "Serverstandort", href: "/ki-abc/serverstandort" },
      },
      {
        dont: "Ein Tool nur zu installieren, weil es kostenlos oder gerade im Trend ist, reicht nicht.",
        do: "Verankert KI im Konzept eurer Einrichtung: Wer gibt Tools frei, wer ist Ansprechpartner?",
        link: null,
      },
    ],
  },
];

export default function LAItfadenPage() {
  return (
    <>
      <PageHero
        label="Verantwortung"
        title="Der L-AI-tfaden."
        subtitle="KI im Bildungsalltag: Was funktioniert, was nicht und worauf es wirklich ankommt."
      />

      {/* Schnellnavigation mit Icons */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 py-2 rounded-lg border border-gray-200 text-gray-600 hover:border-[#2596be] hover:text-[#2596be] transition-colors"
              >
                <span className="text-[#2596be] flex-shrink-0">{s.icon}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Themenblöcke */}
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 ${i % 2 === 0 ? "bg-white" : ""}`}
          style={i % 2 !== 0 ? { backgroundColor: "#F9FAFB" } : undefined}
        >
          <div className="max-w-3xl mx-auto">
            {/* Section Header — zentriert */}
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#EBF6FA] text-[#2596be] mb-4">
                {section.icon}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-lg mx-auto">{section.intro}</p>
            </div>

            {/* Gegenüberstellung: Dont links, Do rechts */}
            <div className="flex flex-col gap-6">
              {section.pairs.map((pair, j) => (
                <div key={j} className="rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Dont */}
                    <div className="p-5 sm:p-6 bg-red-50/40 border-b sm:border-b-0 sm:border-r border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3">
                            <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">Vermeiden</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{pair.dont}</p>
                    </div>
                    {/* Do */}
                    <div className="p-5 sm:p-6 bg-emerald-50/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3">
                            <path strokeLinecap="round" d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-500">Besser so</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{pair.do}</p>
                      {pair.link && (
                        <Link href={pair.link.href} className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[#2596be] hover:underline">
                          {pair.link.label}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Hinweis + CTA */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Dieser Leitfaden ersetzt keine Rechtsberatung und keine Datenschutzschulung.
            Er hilft dir, die häufigsten Fehler im Umgang mit KI im pädagogischen Alltag zu vermeiden.
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
