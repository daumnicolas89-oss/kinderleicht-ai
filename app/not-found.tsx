import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1
        className="text-5xl font-bold mb-4 text-gray-900"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        Seite nicht gefunden
      </h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md">
        Die Seite die du suchst existiert leider nicht.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#2596be" }}
      >
        Zur Startseite
      </Link>
    </main>
  );
}
