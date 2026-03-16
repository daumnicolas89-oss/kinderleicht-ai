"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1
        className="text-5xl font-bold mb-4 text-gray-900"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        Etwas ist schiefgelaufen
      </h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md">
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut oder
        kehre zur Startseite zurück.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: "#2596be" }}
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg font-medium border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
