import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Eigene Tools",
    description:
      "Web-Apps, die wir selbst für den Bildungsalltag entwickelt haben — direkt im Browser nutzbar, ohne Installation.",
    href: "/tools",
    linkLabel: "Tools entdecken",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
    title: "Werkzeuge",
    description:
      "Kuratierte KI-Tools aus dem Netz — sorgfältig ausgewählt und mit Tipps für den pädagogischen Einsatz erklärt.",
    href: "/werkzeuge",
    linkLabel: "Werkzeuge ansehen",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "Downloads",
    description:
      "Vorlagen, Checklisten und Materialien zum Sofort-Nutzen — kostenlos und praxiserprobt.",
    href: "/downloads",
    linkLabel: "Downloads ansehen",
  },
];

const audiences = [
  "Kita & Krippe",
  "Grundschule",
  "Weiterführende Schule",
  "Nachmittagsbetreuung",
  "Leitung & Verwaltung",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              KI & digitale Tools.{" "}
              <span style={{ color: "#2596be" }}>Für Pädagogen.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
              KI im Bildungsalltag? Kinderleicht! Mit praxisnahem Wissen, den richtigen Tools und allem, was du brauchst, kannst du sofort loslegen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/werkzeuge"
                className="inline-flex items-center px-6 py-3 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2596be" }}
              >
                Werkzeuge entdecken
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Eigene Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-[#F5F5F7] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold text-gray-900 mb-10"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Was du hier findest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#EBF6FB", color: "#2596be" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {f.description}
                  </p>
                </div>
                <Link
                  href={f.href}
                  className="mt-auto text-sm font-medium transition-colors"
                  style={{ color: "#2596be" }}
                >
                  {f.linkLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Für wen ist kinderleicht.ai?
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Die Plattform richtet sich an alle, die professionell mit Kindern und Jugendlichen arbeiten.
          </p>
          <div className="flex flex-wrap gap-3">
            {audiences.map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-[#F5F5F7] text-sm font-medium text-gray-700"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
