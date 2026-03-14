"use client";

import { useState } from "react";

const faqs = [
  {
    title: "Wie kannst du uns erreichen?",
    text: "Nutze das Kontaktformular, schreib uns direkt an kontakt@kinderleicht.ai oder melde dich über unsere Social-Media-Profile. Du hörst so schnell wie möglich von uns.",
  },
  {
    title: "Wie lange dauert eine Antwort?",
    text: "Wir melden uns in der Regel innerhalb von 1 bis 2 Werktagen bei dir.",
  },
  {
    title: "Mit welchen Anliegen kannst du dich melden?",
    text: "Fragen zur Nutzung von KI im Bildungsalltag, Workshop-Anfragen, Feedback oder Kooperationsideen. Kein Anliegen ist zu klein oder zu groß. Schreib uns einfach.",
  },
];

function Accordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span
              className="text-base font-semibold text-gray-900"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              {faq.title}
            </span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: open === i ? "#2596be" : "#F5F5F7",
                color: open === i ? "#ffffff" : "#6b7280",
              }}
            >
              {open === i ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
              )}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-gray-500 leading-relaxed">{faq.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function KontaktPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#2596be" }}
          >
            Kontakt
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Schreib uns.
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Wir freuen uns über Fragen, Feedback und Kooperationsideen.
          </p>
        </div>
      </section>

      {/* ── SOCIAL SCROLL STRIP ──────────────────────────── */}
      <div className="border-y border-gray-100 bg-white overflow-hidden" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <style>{`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .scroll-track {
            display: flex;
            width: max-content;
            animation: scroll-left 20s linear infinite;
          }
        `}</style>

        <div className="scroll-track" aria-hidden="false">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" style={{ gap: 80, paddingRight: 80 }}>

              {/* LinkedIn — klickbar */}
              <a
                href="https://www.linkedin.com/in/nicolas-daum/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0"
                aria-label="LinkedIn"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                  className="text-gray-400 transition-colors duration-200 group-hover:text-[#0A66C2]">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Instagram — nicht klickbar */}
              <span className="group flex-shrink-0 cursor-default" aria-label="Instagram">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                  className="text-gray-400 transition-colors duration-200 group-hover:text-[#E1306C]">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </span>

              {/* Facebook — nicht klickbar */}
              <span className="group flex-shrink-0 cursor-default" aria-label="Facebook">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                  className="text-gray-400 transition-colors duration-200 group-hover:text-[#1877F2]">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </span>

              {/* X (Twitter) — nicht klickbar */}
              <span className="group flex-shrink-0 cursor-default" aria-label="X">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                  className="text-gray-400 transition-colors duration-200 group-hover:text-[#000000]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* ── ZWEI SPALTEN ─────────────────────────────────── */}
      <section className="bg-white pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Linke Spalte: FAQ */}
          <div>
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Häufige Fragen
            </h2>
            <Accordion />
          </div>

          {/* Rechte Spalte: Formular */}
          <div>
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Nachricht schreiben
            </h2>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Vorname</label>
                  <input
                    type="text"
                    placeholder="Max"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white outline-none transition-shadow"
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(37,150,190,0.15), 0 0 0 1px #2596be")}
                    onBlur={(e) => (e.target.style.boxShadow = "")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Nachname</label>
                  <input
                    type="text"
                    placeholder="Mustermann"
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white outline-none transition-shadow"
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(37,150,190,0.15), 0 0 0 1px #2596be")}
                    onBlur={(e) => (e.target.style.boxShadow = "")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  E-Mail <span style={{ color: "#2596be" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="max@beispiel.de"
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white outline-none transition-shadow"
                  onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(37,150,190,0.15), 0 0 0 1px #2596be")}
                  onBlur={(e) => (e.target.style.boxShadow = "")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Betreff</label>
                <input
                  type="text"
                  placeholder="Worum geht es?"
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white outline-none transition-shadow"
                  onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(37,150,190,0.15), 0 0 0 1px #2596be")}
                  onBlur={(e) => (e.target.style.boxShadow = "")}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Nachricht <span style={{ color: "#2596be" }}>*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Deine Nachricht..."
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 bg-white outline-none transition-shadow resize-none"
                  onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(37,150,190,0.15), 0 0 0 1px #2596be")}
                  onBlur={(e) => (e.target.style.boxShadow = "")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 mt-1"
                style={{ backgroundColor: "#2596be" }}
              >
                Nachricht senden
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
