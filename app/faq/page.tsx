import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { AccordionItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Häufige Fragen — kinderleicht.ai",
  description:
    "Antworten auf die häufigsten Fragen rund um kinderleicht.ai, KI-Tools, Datenschutz und unsere Apps.",
  alternates: { canonical: "https://kinderleicht.ai/faq" },
};

const categories = [
  {
    label: "Allgemein",
    faqs: [
      {
        q: "Was ist kinderleicht.ai?",
        a: "kinderleicht.ai ist eine Plattform, die Pädagogen dabei hilft, KI sinnvoll im Bildungsalltag einzusetzen. Du findest hier eigene Web-Apps, geprüfte KI-Tools und fertige Materialien.",
        plain: "kinderleicht.ai ist eine Plattform, die Pädagogen dabei hilft, KI sinnvoll im Bildungsalltag einzusetzen. Du findest hier eigene Web-Apps, geprüfte KI-Tools und fertige Materialien.",
      },
      {
        q: "Für wen ist kinderleicht.ai?",
        a: "Für alle, die professionell mit Kindern und Jugendlichen arbeiten: Kitas, Krippen, Grundschulen, weiterführende Schulen, GBS, GTS sowie Leitungen und Verwaltungen.",
        plain: "Für alle, die professionell mit Kindern und Jugendlichen arbeiten: Kitas, Krippen, Grundschulen, weiterführende Schulen, GBS, GTS sowie Leitungen und Verwaltungen.",
      },
      {
        q: "Kostet die Nutzung etwas?",
        a: "Nein. kinderleicht.ai ist kostenlos nutzbar. Alle Apps, Tools und Downloads stehen dir ohne Registrierung zur Verfügung.",
        plain: "Nein. kinderleicht.ai ist kostenlos nutzbar. Alle Apps, Tools und Downloads stehen dir ohne Registrierung zur Verfügung.",
      },
      {
        q: "Wie prüft ihr die Apps, Tools und Downloads?",
        a: (
          <>
            Jedes Tool durchläuft einen festen Prüfprozess mit vier Ebenen: Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. Unsere eigenen Apps entwickeln wir nach strengen Datenschutzrichtlinien. Alle Details findest du auf unserer Seite{" "}
            <Link href="/so-arbeiten-wir" className="font-semibold underline" style={{ color: "#2596be" }}>So arbeiten wir</Link>.
          </>
        ),
        plain: "Jedes Tool durchläuft einen festen Prüfprozess mit vier Ebenen: Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. Unsere eigenen Apps entwickeln wir nach strengen Datenschutzrichtlinien. Alle Details auf unserer Seite So arbeiten wir.",
      },
      {
        q: "Warum wird auf kinderleicht.ai nicht gegendert?",
        a: "Wir verwenden auf der gesamten Plattform eine möglichst einfache und klare Sprache. Dabei verzichten wir bewusst auf Genderzeichen, damit Texte gut lesbar bleiben. Selbstverständlich sind immer alle Geschlechter gemeint und alle Menschen willkommen.",
        plain: "Wir verwenden auf der gesamten Plattform eine möglichst einfache und klare Sprache. Dabei verzichten wir bewusst auf Genderzeichen, damit Texte gut lesbar bleiben. Selbstverständlich sind immer alle Geschlechter gemeint und alle Menschen willkommen.",
      },
    ],
  },
  {
    label: "Plattform",
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Apps und Tools?",
        a: "Unsere Apps sind selbst entwickelte Web-Anwendungen. KI-Tools sind externe Anbieter wie Canva, Fobizz oder Edpuzzle, die wir geprüft und für den pädagogischen Einsatz aufbereitet haben.",
        plain: "Unsere Apps sind selbst entwickelte Web-Anwendungen. KI-Tools sind externe Anbieter wie Canva, Fobizz oder Edpuzzle, die wir geprüft und für den pädagogischen Einsatz aufbereitet haben.",
      },
      {
        q: "Was sind Prompts und wie nutze ich sie?",
        a: (
          <>
            Prompts sind fertige Textvorlagen, die du in einen KI-Chatbot kopierst. Du passt nur die Platzhalter an und erhältst z.B. einen Elternbrief oder Förderplan. Alle Vorlagen findest du auf der{" "}
            <Link href="/prompts" className="font-semibold underline" style={{ color: "#2596be" }}>Prompts-Seite</Link>.
          </>
        ),
        plain: "Prompts sind fertige Textvorlagen, die du in einen KI-Chatbot kopierst. Du passt nur die Platzhalter an und erhältst z.B. einen Elternbrief oder Förderplan.",
      },
      {
        q: "Was ist das KI-ABC?",
        a: (
          <>
            Ein Lexikon mit hunderten Begriffen rund um KI, Datenschutz und digitale Tools. Einfach erklärt, mit Praxisbeispielen aus dem Bildungsalltag. Zum{" "}
            <Link href="/ki-abc" className="font-semibold underline" style={{ color: "#2596be" }}>KI-ABC</Link>.
          </>
        ),
        plain: "Ein Lexikon mit hunderten Begriffen rund um KI, Datenschutz und digitale Tools. Einfach erklärt, mit Praxisbeispielen aus dem Bildungsalltag.",
      },
    ],
  },
  {
    label: "KI & Datenschutz",
    faqs: [
      {
        q: "Sind die KI-Tools datenschutzkonform?",
        a: (
          <>
            Wir weisen bei jedem Tool transparent auf den Anbieter und dessen Datenschutzbestimmungen hin. Für den Einsatz in Einrichtungen empfehlen wir, keine personenbezogenen Daten von Kindern oder Eltern einzugeben. Mehr dazu in unserer{" "}
            <Link href="/datenschutz" className="font-semibold underline" style={{ color: "#2596be" }}>Datenschutzerklärung</Link>.
          </>
        ),
        plain: "Wir weisen bei jedem Tool transparent auf den Anbieter und dessen Datenschutzbestimmungen hin. Für den Einsatz in Einrichtungen empfehlen wir, keine personenbezogenen Daten von Kindern oder Eltern einzugeben. Mehr dazu in unserer Datenschutzerklärung.",
      },
      {
        q: "Brauche ich KI-Vorkenntnisse?",
        a: (
          <>
            Nein. kinderleicht.ai richtet sich ausdrücklich auch an Pädagogen ohne Vorkenntnisse. Alle Tools und Apps sind so aufbereitet, dass du sofort loslegen kannst. Falls du einen Begriff nicht kennst, hilft dir unser{" "}
            <Link href="/ki-abc" className="font-semibold underline" style={{ color: "#2596be" }}>KI-ABC</Link> mit hunderten einfach erklärten Begriffen.
          </>
        ),
        plain: "Nein. kinderleicht.ai richtet sich ausdrücklich auch an Pädagogen ohne Vorkenntnisse. Alle Tools und Apps sind so aufbereitet, dass du sofort loslegen kannst. Falls du einen Begriff nicht kennst, hilft dir unser KI-ABC mit hunderten einfach erklärten Begriffen.",
      },
      {
        q: "Speichert kinderleicht.ai meine Daten?",
        a: (
          <>
            Wir erheben nur die Daten, die für den Betrieb der Plattform notwendig sind. Details findest du in unserer{" "}
            <Link href="/datenschutz" className="font-semibold underline" style={{ color: "#2596be" }}>Datenschutzerklärung</Link>.
          </>
        ),
        plain: "Wir erheben nur die Daten, die für den Betrieb der Plattform notwendig sind. Details findest du in unserer Datenschutzerklärung.",
      },
    ],
  },
  {
    label: "Kontakt & Zusammenarbeit",
    faqs: [
      {
        q: "Ich habe einen Fehler gefunden. Wo kann ich ihn melden?",
        a: (
          <>
            Schreib uns einfach über das{" "}
            <Link href="/kontakt" className="font-semibold underline" style={{ color: "#2596be" }}>Kontaktformular</Link>{" "}
            oder direkt an kontakt@kinderleicht.ai. Wir freuen uns über jedes Feedback.
          </>
        ),
        plain: "Schreib uns einfach über das Kontaktformular oder direkt an kontakt@kinderleicht.ai. Wir freuen uns über jedes Feedback.",
      },
      {
        q: "Kann ich eine Kooperation anfragen?",
        a: (
          <>
            Ja, sehr gerne. Ob Fortbildungsinstitut, Träger oder Verlag, schreib uns dein Anliegen über das{" "}
            <Link href="/kontakt" className="font-semibold underline" style={{ color: "#2596be" }}>Kontaktformular</Link>.
          </>
        ),
        plain: "Ja, sehr gerne. Ob Fortbildungsinstitut, Träger oder Verlag, schreib uns dein Anliegen über das Kontaktformular.",
      },
      {
        q: "Bietet ihr Workshops oder Fortbildungen an?",
        a: "Workshops und Fortbildungen sind in Vorbereitung. Trag dich für den Newsletter ein, um als Erste informiert zu werden.",
        plain: "Workshops und Fortbildungen sind in Vorbereitung. Trag dich für den Newsletter ein, um als Erste informiert zu werden.",
      },
    ],
  },
];

/* ── JSON-LD (server-side, garantiert im HTML) ─────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.plain,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        label="FAQ"
        title="Häufige Fragen"
        subtitle="Hier findest du Antworten auf die häufigsten Fragen rund um kinderleicht.ai."
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col gap-14">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#2596be" }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
              <div className="rounded-2xl border border-gray-100 px-6">
                {cat.faqs.map((faq) => (
                  <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Noch Fragen offen?
          </h2>
          <p className="text-base text-gray-500 mb-7">
            Schreib uns direkt. Wir melden uns in der Regel innerhalb von 1 bis 2 Werktagen.
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
