"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useState } from "react";

function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit() {
    if (!email || !consent) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    }
  }

  if (status === "success") {
    return (
      <p className={`text-sm font-medium ${dark ? "text-green-400" : "text-green-600"}`}>
        Danke! Du erhältst gleich eine Bestätigungsmail.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* E-Mail + Button */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          aria-label="E-Mail für Newsletter"
          className={`flex-1 min-w-0 px-3 py-2 text-sm rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2596be]/50 focus:border-[#2596be] ${dark ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400" : "border border-gray-200 bg-white text-gray-900"}`}
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading" || !consent || !email}
          className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90 disabled:opacity-40 whitespace-nowrap"
          style={{ backgroundColor: "#2596be" }}
        >
          {status === "loading" ? "Wird gesendet..." : "Anmelden"}
        </button>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-2">
        <input
          id="newsletter-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 flex-shrink-0 accent-[#2596be]"
        />
        <label htmlFor="newsletter-consent" className={`text-[13px] leading-relaxed cursor-pointer ${dark ? "text-gray-400" : "text-gray-600"}`}>
          Ich habe die Datenschutzbestimmungen gelesen. Ich stimme dem Erhalt von E-Mails
          und der Übertragung meiner Daten an Mailchimp zu.
        </label>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-xs text-red-500">{errorMsg}</p>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Newsletter-Bereich */}
      <div className="border-t-2 border-[#2596be]/20" style={{ background: "linear-gradient(180deg, #EBF6FA 0%, #F4FAFE 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg width="28" height="22" viewBox="0 0 52 40" fill="none" className="flex-shrink-0">
                <rect x="1" y="8" width="50" height="31" rx="4" fill="white" stroke="#2596be" strokeWidth="1.5"/>
                <path d="M1 12 L26 26 L51 12 L51 8 Q51 8 26 22 Q1 8 1 8 Z" fill="#2596be" opacity="0.12"/>
                <path d="M1 8 L26 24 L51 8" stroke="#2596be" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                <path d="M1 39 L20 22M51 39 L32 22" stroke="#2596be" strokeWidth="1" opacity="0.3"/>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">
                Nichts verpassen.
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-7">
              Neue Tools, App-Updates und praktische Tipps. Einmal im Monat, kein Spam.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation + Bottom-Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

          {/* Logo + Nav-Spalten nebeneinander */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 max-w-3xl mx-auto mb-12">
            {/* Logo-Spalte (doppelt breit) */}
            <div className="col-span-2 flex flex-col items-center sm:items-start gap-3">
              <Logo height={36} />
              <p className="text-sm text-gray-500 leading-relaxed">
                KI im Bildungsalltag. Für Pädagogen.
              </p>
            </div>

            {/* KINDERLEICHT.AI */}
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">kinderleicht.ai</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Über uns", href: "/ueber-uns" },
                  { label: "So arbeiten wir", href: "/so-arbeiten-wir" },
                  { label: "L-AI-tfaden", href: "/laitfaden" },
                  { label: "Übersicht", href: "/uebersicht" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Kontakt", href: "/kontakt" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RECHTLICHES */}
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Rechtliches</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Impressum", href: "/impressum" },
                  { label: "Datenschutz", href: "/datenschutz" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom-Bar */}
          <div className="border-t border-gray-100 pt-6 flex flex-col items-center gap-3 text-center">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} kinderleicht.ai. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  localStorage.removeItem("cookieConsent");
                  window.location.reload();
                }}
                className="text-xs text-gray-500 hover:text-gray-600 transition-colors underline underline-offset-2"
              >
                Cookie-Einstellungen
              </button>
              <p className="text-xs text-gray-500">Made with <span aria-label="Liebe" role="img">♥</span> für Pädagogen</p>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
