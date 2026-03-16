import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "So arbeiten wir — kinderleicht.ai",
  description:
    "Wie wir Tools prüfen, Apps entwickeln und Materialien erstellen. Transparent und nachvollziehbar.",
};

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage:
    "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
} as React.CSSProperties;

const checks = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Datenschutz & DSGVO",
    text: "Wo liegen die Server? Gibt es einen Auftragsverarbeitungsvertrag? Werden Daten für KI-Training genutzt? Wir recherchieren die Datenschutzerklärung und vergeben eine Ampelbewertung. Grün bedeutet EU-Server und AVV vorhanden. Gelb bedeutet Einschränkungen oder Unklarheiten. Rot bedeutet kritisch für den Einsatz in Bildungseinrichtungen.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 015 12H7a7 7 0 015-12z" />
      </svg>
    ),
    title: "Pädagogischer Nutzen",
    text: "Löst das Tool ein echtes Problem im Bildungsalltag? Wir fragen: Spart es Zeit? Unterstützt es bei Planung, Kommunikation oder Materialerstellung? Ist es auch ohne KI-Vorkenntnisse nutzbar?",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
        <circle cx="17" cy="17" r="3" />
        <path d="M21 21l-1.5-1.5" />
      </svg>
    ),
    title: "Bedienbarkeit",
    text: "Wir testen jedes Tool selbst. Wie lange dauert der Einstieg? Braucht es eine Anmeldung? Funktioniert es auf Tablet und Smartphone? Ist die Oberfläche auch auf Deutsch verfügbar?",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M15 8.5c-.7-1-1.8-1.5-3-1.5-2.2 0-4 1.8-4 4s1.8 4 4 4c1.2 0 2.3-.5 3-1.5" />
        <path d="M12 6v2M12 16v2" />
      </svg>
    ),
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
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" style={dotGrid} />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.11) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#2596be" }}
          >
            Transparenz
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
          >
            So arbeiten wir.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Jedes Tool, jede App und jedes Material auf kinderleicht.ai durchläuft denselben Prüfprozess.
            Kein Tool landet hier zufällig.
          </p>
        </div>
      </section>

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
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {c.icon}
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
            style={{ borderColor: "#2596be", backgroundColor: "#EBF6FB" }}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2596be" }}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
