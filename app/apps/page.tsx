import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps — kinderleicht.ai",
  description: "Eigene Web-Apps für den Bildungsalltag — direkt im Browser nutzbar.",
};

const apps = [
  {
    title: "Ferienplaner",
    description:
      "Ferienprogramme, Elternbriefe und Dienstpläne in Minuten statt Stunden. Direkt im Browser, ohne Installation.",
    href: "https://ferienplaner.kinderleicht.ai",
    tags: ["Planung", "Kita", "Schule"],
  },
];

export default function AppsPage() {
  return (
    <section className="min-h-[70vh] py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-medium mb-3" style={{ color: "#2596be" }}>
            Unsere Apps
          </p>
          <h1
            className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Web-Apps für Pädagogen
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Eigene KI-gestützte Web-Apps, speziell für den pädagogischen Alltag.
            Direkt im Browser nutzbar, ohne Installation, ohne Account.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Link
              key={app.title}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:border-[#74C5E0] hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <h2
                  className="text-base font-bold text-gray-900 group-hover:text-[#2596be] transition-colors"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {app.title}
                </h2>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth={2}
                  className="text-gray-300 group-hover:text-[#2596be] transition-colors shrink-0 mt-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {app.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-[#F5F5F7] text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
