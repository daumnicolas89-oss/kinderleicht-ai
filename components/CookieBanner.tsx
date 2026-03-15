"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(value: "all" | "necessary") {
    localStorage.setItem("cookieConsent", value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg px-6 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900 mb-1">Wir nutzen Cookies</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Wir verwenden Cookies und ähnliche Technologien für den Betrieb der Seite, Newsletter-Anmeldung
            über Mailchimp und anonyme Nutzungsanalyse. Details findest du in unserer{" "}
            <Link href="/datenschutz" className="font-medium" style={{ color: "#2596be" }}>
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => accept("necessary")}
            className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Nur notwendige
          </button>
          <button
            onClick={() => accept("all")}
            className="px-4 py-2 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#2596be" }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
