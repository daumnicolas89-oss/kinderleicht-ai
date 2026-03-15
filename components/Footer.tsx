"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useState } from "react";

function NewsletterForm() {
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
      setErrorMsg("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-green-600 font-medium">
        Danke! Du erhältst gleich eine Bestätigungsmail.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* E-Mail + Button */}
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#2596be] bg-white"
        />
        <button
          onClick={handleSubmit}
          disabled={status === "loading" || !consent || !email}
          className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90 disabled:opacity-40 whitespace-nowrap"
          style={{ backgroundColor: "#2596be" }}
        >
          {status === "loading" ? "..." : "Anmelden"}
        </button>
      </div>

      {/* Consent */}
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 flex-shrink-0 accent-[#2596be]"
        />
        <span className="text-xs text-gray-400 leading-relaxed">
          Ich habe die Datenschutzbestimmungen gelesen. Ich stimme dem Erhalt von E-Mails
          und der Übertragung meiner Daten an Mailchimp zu.
        </span>
      </label>

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
      <div className="border-t border-gray-200 bg-white">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-6px) rotate(2deg); }
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          .envelope-float { animation: float 3s ease-in-out infinite; }
          .envelope-lid { transform-origin: top; animation: wiggle 3s ease-in-out infinite; }
        `}</style>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">

          {/* Animiertes Briefumschlag-Icon + Headline eng zusammen */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="envelope-float">
              <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="8" width="50" height="31" rx="4" fill="#EBF6FA" stroke="#2596be" strokeWidth="1.5"/>
                <path
                  className="envelope-lid"
                  d="M1 12 L26 26 L51 12 L51 8 Q51 8 26 22 Q1 8 1 8 Z"
                  fill="#2596be"
                  opacity="0.15"
                />
                <path d="M1 8 L26 24 L51 8" stroke="#2596be" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                <path d="M1 39 L20 22M51 39 L32 22" stroke="#2596be" strokeWidth="1" opacity="0.4"/>
                <circle cx="42" cy="4" r="2" fill="#74C5E0" opacity="0.8"/>
                <circle cx="10" cy="5" r="1.5" fill="#2596be" opacity="0.5"/>
              </svg>
            </div>
            <h3
              className="text-2xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              KI im Bildungsalltag. Direkt ins Postfach.
            </h3>
          </div>

          <p className="text-sm text-gray-400 mb-7 max-w-lg mx-auto leading-relaxed">
            Praktische Tipps, neue Tools und fertige Materialien direkt ins Postfach.
          </p>

          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Navigation + Bottom-Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

          {/* Nav-Spalten */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            {/* Logo-Spalte */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <Logo height={22} />
              <p className="text-xs text-gray-400 leading-relaxed max-w-[180px]">
                KI im Bildungsalltag. Für Pädagogen im deutschsprachigen Raum.
              </p>
            </div>

            {/* ENTDECKEN */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Entdecken</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Apps", href: "/apps" },
                  { label: "Tools", href: "/tools" },
                  { label: "Downloads", href: "/downloads" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* KINDERLEICHT.AI */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">kinderleicht.ai</p>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Über uns", href: "/ueber-uns" },
                  { label: "So arbeiten wir", href: "/so-arbeiten-wir" },
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
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Rechtliches</p>
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
          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} kinderleicht.ai. Alle Rechte vorbehalten.</p>
            <p className="text-xs text-gray-400">Made with ♥ für Pädagogen</p>
          </div>

        </div>
      </div>

    </footer>
  );
}
