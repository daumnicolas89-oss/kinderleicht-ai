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

      {/* Navigation + Newsletter + Bottom-Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

          {/* Newsletter-Card */}
          <div className="max-w-xl mx-auto mb-14">
            <div className="rounded-2xl px-6 py-8 sm:px-10 sm:py-10 text-center" style={{ background: "linear-gradient(135deg, #EBF6FA 0%, #F4FAFE 100%)" }}>
              <div className="flex items-center justify-center gap-2.5 mb-2">
                <svg width="24" height="19" viewBox="0 0 52 40" fill="none" className="flex-shrink-0">
                  <rect x="1" y="8" width="50" height="31" rx="4" fill="white" stroke="#2596be" strokeWidth="1.5"/>
                  <path d="M1 12 L26 26 L51 12 L51 8 Q51 8 26 22 Q1 8 1 8 Z" fill="#2596be" opacity="0.12"/>
                  <path d="M1 8 L26 24 L51 8" stroke="#2596be" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Nichts verpassen.</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Neue Tools, App-Updates und praktische Tipps. Einmal im Monat, kein Spam.
              </p>
              <div className="max-w-sm mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </div>

          {/* Links — kompakt mit Trenner */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-8">
            {[
              { label: "Über uns", href: "/ueber-uns" },
              { label: "So arbeiten wir", href: "/so-arbeiten-wir" },
              { label: "L-AI-tfaden", href: "/laitfaden" },
              { label: "FAQ", href: "/faq" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
                {l.label}
              </Link>
            ))}
            <span className="text-gray-200">|</span>
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Bottom-Bar */}
          <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} kinderleicht.ai</p>
            <span className="hidden sm:inline">·</span>
            <p>Made with <span aria-label="Liebe" role="img">♥</span> für Pädagogen</p>
          </div>

        </div>
      </div>

    </footer>
  );
}
