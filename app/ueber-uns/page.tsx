import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns — kinderleicht.ai",
  description:
    "Wir machen KI für Kitas, Schulen und Bildungseinrichtungen zugänglich. Kein Tech-Geblubber, keine Überforderung.",
};

const statements = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Verstehen",
    desc: "Wir erklären KI so, dass jeder mitkommt.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Anwenden",
    desc: "Praxisnah und direkt im Alltag einsetzbar.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Weiterkommen",
    desc: "Schritt für Schritt zukunftsfähig werden.",
  },
];

const audiences = [
  { emoji: "🏠", label: "Kita & Krippe" },
  { emoji: "🎒", label: "Grundschule" },
  { emoji: "🏫", label: "Weiterführende Schule" },
  { emoji: "🌅", label: "Nachmittagsbetreuung" },
  { emoji: "📋", label: "Leitung & Verwaltung" },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#2596be" }}
          >
            Über uns
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            KI im Bildungsalltag.{" "}
            <span style={{ color: "#2596be" }}>Kinderleicht.</span>
          </h1>
          <p className="mt-7 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Wir machen KI für Kitas, Schulen und Bildungseinrichtungen so
            zugänglich, dass sich auch skeptische oder gestresste Pädagogen
            sicher, kompetent und entlastet fühlen. Kein Tech-Geblubber, keine
            Überforderung. Echte Unterstützung für den pädagogischen Alltag.
          </p>
        </div>
      </section>

      {/* ── THREE STATEMENTS ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statements.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#EBF6FB", color: "#2596be" }}
              >
                {s.icon}
              </div>
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISION ───────────────────────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Unsere Vision
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            KI soll kinderleicht werden. Verständlich erklärt, praxisnah
            aufbereitet und direkt anwendbar. Wir zeigen, wie KI im Alltag von
            Bildungseinrichtungen wirklich hilft: Sie spart Zeit, unterstützt
            bei der Erstellung von Materialien und verbessert die Kommunikation,
            ohne dass die pädagogische Beziehung darunter leidet. Technologie
            soll den Menschen unterstützen, nicht ersetzen.
          </p>
        </div>
      </section>

      {/* ── FÜR WEN ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Für wen wir arbeiten
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-10">
            kinderleicht.ai richtet sich an Kitas, Schulen,
            Nachmittagsbetreuungen, Träger und Fortbildungsinstitute, die sich
            in der Welt der KI orientieren möchten. An Pädagogen, die wenig
            Zeit haben, sich aber dennoch zukunftsfähig aufstellen möchten. Die
            keine abstrakten Theorien benötigen, sondern klare, anwendbare
            Beispiele aus der Praxis.
          </p>
          <div className="flex flex-wrap gap-3">
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

      {/* ── WAS UNS UNTERSCHEIDET ────────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Was uns unterscheidet
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            kinderleicht.ai vereint beide Welten: das Verständnis für den
            pädagogischen Alltag und das Wissen über KI und digitale Tools. Wir
            übersetzen Technologie so, dass sie zur Praxis passt und nicht
            umgekehrt. Bodenständig, vertrauenswürdig und immer nah an den
            Menschen, die täglich mit Kindern und Jugendlichen arbeiten.
          </p>
        </div>
      </section>

      {/* ── WO WIR HINWOLLEN ─────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Wo wir hinwollen
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Langfristig soll kinderleicht.ai zur zentralen Anlaufstelle für KI
            in der Bildung im deutschsprachigen Raum werden. Ohne Angst, ohne
            Hype. Einrichtungen lernen Schritt für Schritt, KI verantwortlich
            und zielführend einzusetzen. Vom ersten Prompt bis zur Entwicklung
            ganzer pädagogischer Konzepte.
          </p>
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
            Entdecke Apps, Tools und fertige Materialien für deinen Bildungsalltag.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center px-8 py-3.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ffffff", color: "#2596be" }}
          >
            Jetzt entdecken
          </Link>
        </div>
      </section>
    </>
  );
}
