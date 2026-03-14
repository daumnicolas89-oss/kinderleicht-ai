"use client";

import { useState } from "react";

/* ── FAQ DATA ──────────────────────────────────────────────── */
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

/* ── SOCIAL LOGOS ──────────────────────────────────────────── */
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolas-daum/",
    hoverColor: "#0A66C2",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: null,
    hoverColor: "#E1306C",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: null,
    hoverColor: "#1877F2",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: null,
    hoverColor: "#000000",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ── ACCORDION ─────────────────────────────────────────────── */
function Accordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-gray-100 last:border-b-0">
          <button
            className="w-full flex items-center justify-between gap-6 py-5 text-left"
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
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                backgroundColor: open === i ? "#2596be" : "#F5F5F7",
                color: open === i ? "#fff" : "#9ca3af",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                {open === i
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />}
              </svg>
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-200"
            style={{ maxHeight: open === i ? 200 : 0, opacity: open === i ? 1 : 0 }}
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5">{faq.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── FOCUS HELPERS ─────────────────────────────────────────── */
const focusOn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = "#2596be";
  e.target.style.boxShadow = "0 0 0 3px rgba(37,150,190,0.12)";
};
const focusOff = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = "";
  e.target.style.boxShadow = "";
};

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all";

/* ── PAGE ──────────────────────────────────────────────────── */
export default function KontaktPage() {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-track {
          display: flex;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#2596be" }}>
            Kontakt
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Schreib uns.
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-lg mx-auto">
            Wir freuen uns über Fragen, Feedback und Kooperationsideen.
          </p>
        </div>
      </section>

      {/* ── SOCIAL SCROLL STRIP ──────────────────────────── */}
      <div className="border-y border-gray-100 bg-white overflow-hidden py-6">
        <div className="logo-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" style={{ gap: 72, paddingRight: 72 }}>
              {socials.map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex-shrink-0 text-gray-300 transition-colors duration-200"
                    style={{ ["--hover" as string]: s.hoverColor }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = s.hoverColor)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                  >
                    {s.svg}
                  </a>
                ) : (
                  <span
                    key={s.label}
                    aria-label={s.label}
                    className="flex-shrink-0 text-gray-300 transition-colors duration-200 cursor-default"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = s.hoverColor)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
                  >
                    {s.svg}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Linke Spalte: FAQ */}
          <div>
            <h2
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Häufige Fragen
            </h2>
            <p className="text-sm text-gray-400 mb-8">Antworten auf die wichtigsten Fragen.</p>
            <Accordion />

            {/* Direct contact hint */}
            <div className="mt-10 flex items-start gap-3 p-4 rounded-xl bg-[#F5F5F7]">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EBF6FB" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Direkte E-Mail</p>
                <a
                  href="mailto:kontakt@kinderleicht.ai"
                  className="text-sm transition-colors"
                  style={{ color: "#2596be" }}
                >
                  kontakt@kinderleicht.ai
                </a>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Formular */}
          <div>
            <h2
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Nachricht schreiben
            </h2>
            <p className="text-sm text-gray-400 mb-8">Wir antworten innerhalb von 1 bis 2 Werktagen.</p>

            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Vorname</label>
                  <input type="text" placeholder="Max" className={inputClass} onFocus={focusOn} onBlur={focusOff} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Nachname</label>
                  <input type="text" placeholder="Mustermann" className={inputClass} onFocus={focusOn} onBlur={focusOff} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  E-Mail <span style={{ color: "#2596be" }}>*</span>
                </label>
                <input type="email" required placeholder="max@beispiel.de" className={inputClass} onFocus={focusOn} onBlur={focusOff} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Betreff</label>
                <input type="text" placeholder="Worum geht es?" className={inputClass} onFocus={focusOn} onBlur={focusOff} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Nachricht <span style={{ color: "#2596be" }}>*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Deine Nachricht..."
                  className={`${inputClass} resize-none`}
                  onFocus={focusOn as React.FocusEventHandler<HTMLTextAreaElement>}
                  onBlur={focusOff as React.FocusEventHandler<HTMLTextAreaElement>}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
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
