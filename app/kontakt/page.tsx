"use client";

import { useState } from "react";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = `${data.get("vorname") || ""} ${data.get("nachname") || ""}`.trim();
    const email = data.get("email") as string;
    const betreff = (data.get("betreff") as string) || "Kontaktanfrage";
    const nachricht = data.get("nachricht") as string;

    const subject = encodeURIComponent(betreff);
    const body = encodeURIComponent(
      `${nachricht}\n\n---\nVon: ${name}\nE-Mail: ${email}`
    );
    window.location.href = `mailto:kontakt@kinderleicht.ai?subject=${subject}&body=${body}`;
    setSent(true);
  }

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
            opacity: 0.4,
          }}
        />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>
            Kontakt
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.08]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Schreib uns.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto">
            Fragen, Feedback oder Kooperationsideen. Wir freuen uns von dir zu hören.
          </p>
        </div>
      </section>

      {/* ── FORMULAR ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-10">
            {sent ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "#EBF6FA" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  Dein Mail-Programm öffnet sich.
                </h2>
                <p className="text-sm text-gray-500">
                  Falls es nicht klappt, schreib uns direkt an{" "}
                  <a href="mailto:kontakt@kinderleicht.ai" className="font-medium" style={{ color: "#2596be" }}>
                    kontakt@kinderleicht.ai
                  </a>
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-medium hover:underline"
                  style={{ color: "#2596be" }}
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="vorname" className="text-xs font-medium text-gray-500">
                      Vorname
                    </label>
                    <input
                      id="vorname"
                      name="vorname"
                      type="text"
                      placeholder="Max"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nachname" className="text-xs font-medium text-gray-500">
                      Nachname
                    </label>
                    <input
                      id="nachname"
                      name="nachname"
                      type="text"
                      placeholder="Mustermann"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-gray-500">
                    E-Mail <span style={{ color: "#2596be" }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="max@beispiel.de"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="betreff" className="text-xs font-medium text-gray-500">
                    Betreff
                  </label>
                  <input
                    id="betreff"
                    name="betreff"
                    type="text"
                    placeholder="Worum geht es?"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nachricht" className="text-xs font-medium text-gray-500">
                    Nachricht <span style={{ color: "#2596be" }}>*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    required
                    rows={5}
                    placeholder="Deine Nachricht..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all resize-none focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
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
            )}
          </div>

          {/* ── KONTAKT-ALTERNATIVEN ──────────────────────────── */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <a
              href="mailto:kontakt@kinderleicht.ai"
              className="flex items-center gap-2 hover:text-gray-700 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              kontakt@kinderleicht.ai
            </a>
            <span className="hidden sm:inline text-gray-300">·</span>
            <a
              href="https://www.linkedin.com/in/nicolas-daum/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-700 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
