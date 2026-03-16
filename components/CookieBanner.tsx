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
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]" />

      {/* Banner */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 px-6 py-6 max-w-md w-full animate-[cookie-in_0.4s_ease-out]"
        >
          <p className="text-base font-semibold text-gray-900 mb-2">Wir nutzen Cookies</p>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Wir verwenden Cookies und ähnliche Technologien für den Betrieb der Seite, Newsletter-Anmeldung
            über Mailchimp und anonyme Nutzungsanalyse. Details findest du in unserer{" "}
            <Link href="/datenschutz" className="font-medium" style={{ color: "#2596be" }}>
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => accept("necessary")}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={() => accept("all")}
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#2596be" }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
