import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p
        className="text-6xl sm:text-8xl font-bold mb-2"
        style={{ color: "#2596be" }}
      >
        404
      </p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Seite nicht gefunden
      </h1>
      <p className="text-base text-gray-500 mb-8 max-w-md">
        Die Seite, die du suchst, existiert leider nicht oder wurde verschoben.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2596be" }}
        >
          Zur Startseite
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
        >
          Alle Tools ansehen
        </Link>
      </div>
    </main>
  );
}
