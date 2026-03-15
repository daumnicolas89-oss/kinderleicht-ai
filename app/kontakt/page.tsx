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

        </div>
      </section>
    </>
  );
}
