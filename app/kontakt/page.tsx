"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

type FormState = "idle" | "loading" | "success" | "error";

export default function KontaktPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = `${fd.get("vorname") || ""} ${fd.get("nachname") || ""}`.trim();
    const email = fd.get("email") as string;
    const betreff = (fd.get("betreff") as string) || "Kontaktanfrage";
    const nachricht = fd.get("nachricht") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, betreff, nachricht }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Ein Fehler ist aufgetreten.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setErrorMsg("Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.");
      setState("error");
    }
  }

  return (
    <>
      <PageHero
        label="Kontakt"
        title="Schreib uns."
        subtitle="Fragen, Feedback oder Kooperationsideen. Wir freuen uns von dir zu hören."
      />

      {/* ── FORMULAR ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-xl mx-auto">
            {state === "success" ? (
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
                >
                  Nachricht gesendet!
                </h2>
                <p className="text-base text-gray-500">
                  Vielen Dank für deine Nachricht. Wir melden uns so schnell wie möglich bei dir.
                </p>
                <button
                  onClick={() => setState("idle")}
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
                    <label htmlFor="vorname" className="text-sm font-medium text-gray-500">
                      Vorname
                    </label>
                    <input
                      id="vorname"
                      name="vorname"
                      type="text"
                      aria-required="false"
                      placeholder="Max"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nachname" className="text-sm font-medium text-gray-500">
                      Nachname
                    </label>
                    <input
                      id="nachname"
                      name="nachname"
                      type="text"
                      aria-required="false"
                      placeholder="Mustermann"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-500">
                    E-Mail <span style={{ color: "#2596be" }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    placeholder="max@beispiel.de"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="betreff" className="text-sm font-medium text-gray-500">
                    Betreff
                  </label>
                  <input
                    id="betreff"
                    name="betreff"
                    type="text"
                    aria-required="false"
                    placeholder="Worum geht es?"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nachricht" className="text-sm font-medium text-gray-500">
                    Nachricht <span style={{ color: "#2596be" }}>*</span>
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    required
                    aria-required="true"
                    rows={5}
                    placeholder="Deine Nachricht..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 outline-none transition-all resize-none focus:border-[#2596be] focus:ring-2 focus:ring-[#2596be]/10"
                  />
                </div>

                {/* Datenschutz-Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    id="datenschutz"
                    name="datenschutz"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#2596be] focus:ring-[#2596be] cursor-pointer"
                  />
                  <label htmlFor="datenschutz" className="text-[13px] text-gray-500 leading-relaxed cursor-pointer">
                    Ich habe die{" "}
                    <a href="/datenschutz" target="_blank" className="underline font-medium" style={{ color: "#2596be" }}>
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und bin mit der Verarbeitung meiner Daten einverstanden. <span style={{ color: "#2596be" }}>*</span>
                  </label>
                </div>

                {/* Error message */}
                {state === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full py-3 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 mt-1 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#2596be" }}
                >
                  {state === "loading" ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    "Nachricht senden"
                  )}
                </button>
              </form>
            )}
        </div>
      </section>
    </>
  );
}
