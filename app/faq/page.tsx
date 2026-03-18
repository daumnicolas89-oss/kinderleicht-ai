"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const categories = [
  {
    label: "Allgemein",
    faqs: [
      {
        q: "Was ist kinderleicht.ai?",
        a: "kinderleicht.ai ist eine Plattform, die Pädagogen dabei hilft, KI sinnvoll im Bildungsalltag einzusetzen. Du findest hier eigene Web-Apps, geprüfte KI-Tools und fertige Materialien.",
      },
      {
        q: "Für wen ist kinderleicht.ai?",
        a: "Für alle, die professionell mit Kindern und Jugendlichen arbeiten: Kitas, Krippen, Grundschulen, weiterführende Schulen, GBS, GTS sowie Leitungen und Verwaltungen.",
      },
      {
        q: "Kostet die Nutzung etwas?",
        a: "Nein. kinderleicht.ai ist kostenlos nutzbar. Alle Apps, Tools und Downloads stehen dir ohne Registrierung zur Verfügung.",
      },
      {
        q: "Wie prüft ihr die Apps, Tools und Downloads?",
        a: (
          <>
            Jedes Tool durchläuft einen festen Prüfprozess mit vier Ebenen: Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. Unsere eigenen Apps entwickeln wir nach strengen Datenschutzrichtlinien. Alle Details findest du auf unserer Seite{" "}
            <Link href="/so-arbeiten-wir" className="font-semibold underline" style={{ color: "#2596be" }}>So arbeiten wir</Link>.
          </>
        ),
      },
      {
        q: "Warum wird auf kinderleicht.ai nicht gegendert?",
        a: "Wir verwenden auf der gesamten Plattform eine möglichst einfache und klare Sprache. Dabei verzichten wir bewusst auf Genderzeichen, damit Texte gut lesbar bleiben. Selbstverständlich sind immer alle Geschlechter gemeint und alle Menschen willkommen.",
      },
    ],
  },
  {
    label: "Apps & Tools",
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Apps und Tools?",
        a: "Unsere Apps sind selbst entwickelte Web-Anwendungen, die du direkt im Browser nutzen kannst. KI-Tools sind externe Anbieter wie Canva, Fobizz oder Edpuzzle, die wir f\u00fcr den p\u00e4dagogischen Einsatz aufbereitet haben.",
      },
      {
        q: "Muss ich etwas installieren?",
        a: "Nein. Alle unsere Apps laufen direkt im Browser, ohne Installation oder App-Download.",
      },
      {
        q: "Kann ich die Apps auch auf dem Smartphone nutzen?",
        a: "Ja. Alle Apps sind für mobile Geräte optimiert und funktionieren auf Smartphone und Tablet.",
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
      },
      {
        q: "Brauche ich KI-Vorkenntnisse?",
        a: (
          <>
            Nein. kinderleicht.ai richtet sich ausdrücklich auch an Pädagogen ohne Vorkenntnisse. Alle Tools und Apps sind so aufbereitet, dass du sofort loslegen kannst. Falls du einen Begriff nicht kennst, hilft dir unser{" "}
            <Link href="/ki-abc" className="font-semibold underline" style={{ color: "#2596be" }}>KI-ABC</Link> mit über 150 einfach erklärten Begriffen.
          </>
        ),
      },
      {
        q: "Speichert kinderleicht.ai meine Daten?",
        a: (
          <>
            Wir erheben nur die Daten, die für den Betrieb der Plattform notwendig sind. Details findest du in unserer{" "}
            <Link href="/datenschutz" className="font-semibold underline" style={{ color: "#2596be" }}>Datenschutzerklärung</Link>.
          </>
        ),
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
      },
      {
        q: "Kann ich eine Kooperation anfragen?",
        a: (
          <>
            Ja, sehr gerne. Ob Fortbildungsinstitut, Träger oder Verlag, schreib uns dein Anliegen über das{" "}
            <Link href="/kontakt" className="font-semibold underline" style={{ color: "#2596be" }}>Kontaktformular</Link>.
          </>
        ),
      },
      {
        q: "Bietet ihr Workshops oder Fortbildungen an?",
        a: "Workshops und Fortbildungen sind in Vorbereitung. Trag dich für den Newsletter ein, um als Erste informiert zu werden.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = q.replace(/\s+/g, "-").toLowerCase().slice(0, 40);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-3 sm:gap-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${id}`}
      >
        <span className="text-base font-semibold text-gray-900" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ backgroundColor: open ? "#2596be" : "#F5F5F7", color: open ? "#fff" : "#9ca3af" }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />}
          </svg>
        </span>
      </button>
      <div
        id={`faq-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className="overflow-hidden transition-all duration-200"
        style={{ maxHeight: open ? 500 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="text-base text-gray-500 leading-relaxed pb-5">{a}</div>
      </div>
    </div>
  );
}

const faqPlainText: Record<string, string> = {
  "Wie prüft ihr die Apps, Tools und Downloads?":
    "Jedes Tool durchläuft einen festen Prüfprozess mit vier Ebenen: Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. Alle Details auf unserer Seite So arbeiten wir.",
  "Sind die KI-Tools datenschutzkonform?":
    "Wir weisen bei jedem Tool transparent auf den Anbieter und dessen Datenschutzbestimmungen hin. Für den Einsatz in Einrichtungen empfehlen wir, keine personenbezogenen Daten von Kindern oder Eltern einzugeben.",
  "Brauche ich KI-Vorkenntnisse?":
    "Nein. kinderleicht.ai richtet sich ausdrücklich auch an Pädagogen ohne Vorkenntnisse. Alle Tools und Apps sind so aufbereitet, dass du sofort loslegen kannst.",
  "Speichert kinderleicht.ai meine Daten?":
    "Wir erheben nur die Daten, die für den Betrieb der Plattform notwendig sind. Details findest du in unserer Datenschutzerklärung.",
  "Ich habe einen Fehler gefunden. Wo kann ich ihn melden?":
    "Schreib uns einfach über das Kontaktformular oder direkt an kontakt@kinderleicht.ai. Wir freuen uns über jedes Feedback.",
  "Kann ich eine Kooperation anfragen?":
    "Ja, sehr gerne. Ob Fortbildungsinstitut, Träger oder Verlag, schreib uns dein Anliegen über das Kontaktformular.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text:
          typeof faq.a === "string"
            ? faq.a
            : faqPlainText[faq.q] ?? "",
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

      {/* ── HERO ─────────────────────────────────────────────── */}
      <PageHero
        label="FAQ"
        title="Häufige Fragen"
        subtitle="Hier findest du Antworten auf die häufigsten Fragen rund um kinderleicht.ai."
      />

      {/* ── FAQ KATEGORIEN ───────────────────────────────────── */}
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-2xl font-bold text-gray-900 mb-3"
          >
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
