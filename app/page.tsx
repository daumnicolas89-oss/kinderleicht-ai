import Link from "next/link";

const pillars = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "Eigene Tools",
    desc: "Web-Apps, die wir selbst für den Bildungsalltag entwickelt haben — direkt im Browser, ohne Installation.",
    href: "/tools",
    cta: "Tools ansehen",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    label: "Werkzeuge",
    desc: "Kuratierte KI-Tools aus dem Web — mit Erklärungen und Tipps für den pädagogischen Einsatz.",
    href: "/werkzeuge",
    cta: "Werkzeuge entdecken",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    label: "Downloads",
    desc: "Vorlagen, Checklisten und Materialien — kostenlos, sofort nutzbar und praxiserprobt.",
    href: "/downloads",
    cta: "Downloads ansehen",
  },
];

const audiences = [
  { label: "Kita & Krippe", icon: "🏠" },
  { label: "Grundschule", icon: "✏️" },
  { label: "Weiterführende Schule", icon: "📚" },
  { label: "Nachmittagsbetreuung", icon: "☀️" },
  { label: "Leitung & Verwaltung", icon: "📋" },
];

const ferienplanerFeatures = [
  "Ferienprogramme automatisch strukturieren",
  "Elternbriefe in Sekunden erstellen",
  "Dienstpläne generieren & anpassen",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, #d4eef8 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center">
          {/* Eyebrow */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8 border"
            style={{ borderColor: "#74C5E0", color: "#215387", backgroundColor: "#EBF6FB" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#2596be" }}
            />
            Für Kita, Schule & Betreuung
          </span>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.08]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            KI & digitale Tools.{" "}
            <br />
            <span style={{ color: "#2596be" }}>Für Pädagogen.</span>
          </h1>

          {/* Subline */}
          <p className="mt-7 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            KI im Bildungsalltag? Kinderleicht.{" "}
            Mit praxisnahem Wissen, den richtigen Tools und allem, was du
            brauchst, kannst du sofort loslegen.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/werkzeuge"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold shadow-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2596be" }}
            >
              Werkzeuge entdecken
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Eigene Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED TOOL ────────────────────────────────────── */}
      <section className="bg-[#F5F5F7] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2596be" }}>
            Unser erster eigener Tool
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Top bar — decorative browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-[#F5F5F7]">
              <span className="w-3 h-3 rounded-full bg-gray-300" />
              <span className="w-3 h-3 rounded-full bg-gray-300" />
              <span className="w-3 h-3 rounded-full bg-gray-300" />
              <span className="ml-3 text-xs text-gray-400 font-mono">ferienplaner.kinderleicht.ai</span>
            </div>

            <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start">
              {/* Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#EBF6FB" }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2596be" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  Ferienplaner
                </h2>
                <p className="mt-2 text-gray-500 leading-relaxed">
                  Ferienprogramme, Elternbriefe und Dienstpläne in Minuten statt Stunden.
                  Direkt im Browser, ohne Installation.
                </p>

                <ul className="mt-5 space-y-2">
                  {ferienplanerFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <a
                    href="https://ferienplaner.kinderleicht.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#2596be" }}
                  >
                    Jetzt ausprobieren
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ─────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Was du hier findest
          </h2>
          <p className="text-gray-500 mb-10">
            Alles, was du für den digitalen Bildungsalltag brauchst — an einem Ort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group bg-[#F5F5F7] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm rounded-xl p-6 flex flex-col gap-4 transition-all duration-200"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EBF6FB", color: "#2596be" }}
                >
                  {p.icon}
                </div>
                <div>
                  <p
                    className="font-semibold text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                  >
                    {p.label}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
                <span
                  className="mt-auto text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: "#2596be" }}
                >
                  {p.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ──────────────────────────────────────────── */}
      <section className="bg-[#F5F5F7] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Für wen ist kinderleicht.ai?
          </h2>
          <p className="text-gray-500 mb-10">
            Für alle, die professionell mit Kindern und Jugendlichen arbeiten.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
              >
                <span>{a.icon}</span>
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Bereit, KI sinnvoll einzusetzen?
          </h2>
          <p className="text-gray-500 mb-8">
            Entdecke Werkzeuge und Tools, die deinen Arbeitsalltag wirklich erleichtern.
          </p>
          <Link
            href="/werkzeuge"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white text-sm font-semibold shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2596be" }}
          >
            Jetzt entdecken
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
