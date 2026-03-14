import Link from "next/link";

const pillars = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "Unsere Apps",
    desc: "Web-Apps speziell für den Bildungsalltag. Direkt im Browser nutzbar, ohne Installation.",
    href: "/apps",
    cta: "Apps ansehen",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    label: "KI-Tools",
    desc: "Geprüfte Tools wie Canva, Claude und ChatGPT mit Tipps für den pädagogischen Einsatz.",
    href: "/tools",
    cta: "Tools ansehen",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    label: "Downloads",
    desc: "Vorlagen, Checklisten und Materialien zum Sofort-Nutzen. Kostenlos und praxiserprobt.",
    href: "/downloads",
    cta: "Downloads ansehen",
  },
];

const audiences = [
  { label: "Kita & Krippe", emoji: "🏠" },
  { label: "Grundschule", emoji: "✏️" },
  { label: "Weiterführende Schule", emoji: "📚" },
  { label: "Nachmittagsbetreuung", emoji: "☀️" },
  { label: "Leitung & Verwaltung", emoji: "📋" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-gray-900 leading-[1.06]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            KI im Bildungsalltag.{" "}
            <span style={{ color: "#2596be" }}>Kinderleicht.</span>
          </h1>

          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Eigene Web-Apps, geprüfte KI-Tools und fertige Materialien.
            Alles, was du für den Bildungsalltag brauchst.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2596be" }}
            >
              Tools entdecken
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center px-7 py-3 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Unsere Apps
            </Link>
          </div>

          {/* Trust line */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Bereits von Pädagogen in ganz Deutschland genutzt
          </div>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── THREE PILLARS ────────────────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Was du hier findest
            </h2>
            <p className="text-gray-400 text-lg">
              Alles für den Bildungsalltag. An einem Ort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#EBF6FB", color: "#2596be" }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {p.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="mt-5 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ color: "#2596be" }}
                >
                  {p.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ─────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Für wen ist kinderleicht.ai?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Für alle, die professionell mit Kindern und Jugendlichen arbeiten.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700"
              >
                <span>{a.emoji}</span>
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#2596be" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Bereit loszulegen?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.80)" }}>
            Entdecke Tools und Apps, die deinen Alltag wirklich erleichtern.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ffffff", color: "#2596be" }}
          >
            Jetzt entdecken
          </Link>
        </div>
      </section>
    </>
  );
}
