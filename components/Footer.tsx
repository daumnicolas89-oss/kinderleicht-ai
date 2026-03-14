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
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Linke Spalte: Logo + Links + Copyright */}
          <div className="flex flex-col gap-4">
            <Logo height={22} />
            <div className="flex items-center gap-5 flex-wrap">
              <Link href="/impressum" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                Datenschutz
              </Link>
              <Link href="/kontakt" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                Kontakt
              </Link>
            </div>
            <p className="text-sm text-gray-400">© 2025 kinderleicht.ai</p>
          </div>

          {/* Rechte Spalte: Newsletter */}
          <div className="md:max-w-sm w-full">
            <h3
              className="text-sm font-semibold text-gray-900 mb-1"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Praxistipps und neue Tools direkt ins Postfach.
            </p>
            <NewsletterForm />
          </div>

        </div>
      </div>
    </footer>
  );
}
