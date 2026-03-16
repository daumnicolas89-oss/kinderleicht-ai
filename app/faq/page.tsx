"use client";

import { useState } from "react";
import Link from "next/link";

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
    ],
  },
  {
    label: "Apps & Tools",
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Apps und Tools?",
        a: "Unsere Apps sind selbst entwickelte Web-Anwendungen, die du direkt im Browser nutzen kannst. KI-Tools sind externe Anbieter wie Canva, Claude oder ChatGPT, die wir für den pädagogischen Einsatz aufbereitet haben.",
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
        a: "Wir weisen bei jedem Tool transparent auf den Anbieter und dessen Datenschutzbestimmungen hin. Für den Einsatz in Einrichtungen empfehlen wir, keine personenbezogenen Daten von Kindern oder Eltern einzugeben.",
      },
      {
        q: "Brauche ich KI-Vorkenntnisse?",
        a: "Nein. kinderleicht.ai richtet sich ausdrücklich auch an Pädagogen ohne Vorkenntnisse. Alle Tools und Apps sind so aufbereitet, dass du sofort loslegen kannst.",
      },
      {
        q: "Speichert kinderleicht.ai meine Daten?",
        a: "Wir erheben nur die Daten, die für den Betrieb der Plattform notwendig sind. Details findest du in unserer Datenschutzerklärung.",
      },
    ],
  },
  {
    label: "Kontakt & Zusammenarbeit",
    faqs: [
      {
        q: "Ich habe einen Fehler gefunden. Wo kann ich ihn melden?",
        a: "Schreib uns einfach über das Kontaktformular oder direkt an kontakt@kinderleicht.ai. Wir freuen uns über jedes Feedback.",
      },
      {
        q: "Kann ich eine Kooperation anfragen?",
        a: "Ja, sehr gerne. Ob Fortbildungsinstitut, Träger oder Verlag, schreib uns dein Anliegen über das Kontaktformular.",
      },
      {
        q: "Bietet ihr Workshops oder Fortbildungen an?",
        a: "Workshops und Fortbildungen sind in Vorbereitung. Trag dich für den Newsletter ein, um als Erste informiert zu werden.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
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
        className="overflow-hidden transition-all duration-200"
        style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}
      >
        <p className="text-sm text-gray-500 leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            opacity: 0.45,
          }}
        />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>
            FAQ
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
          >
            Häufige Fragen
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Hier findest du Antworten auf die häufigsten Fragen rund um kinderleicht.ai.
          </p>
        </div>
      </section>

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
          <p className="text-gray-500 mb-7">
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
