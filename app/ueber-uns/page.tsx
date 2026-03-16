import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns — kinderleicht.ai",
  description: "Das Team hinter kinderleicht.ai. Geprüfte KI-Tools und eigene Apps für Pädagogen im deutschsprachigen Raum.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            opacity: 0.4,
          }}
        />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>
            Über uns
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.08]"
          >
            KI im Bildungsalltag.{" "}
            <span style={{ color: "#2596be" }}>Kinderleicht.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Wir machen KI für Kitas, Schulen und Bildungseinrichtungen zugänglich.
            Kein Tech-Geblubber, keine Überforderung. Damit Pädagogen sich sicher,
            kompetent und entlastet fühlen.
          </p>
        </div>
      </section>

      {/* ── UNSER ANSATZ ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
            >
              Unser Ansatz
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Verstehen",
                desc: "Wir erklären KI so, dass jeder mitkommt. Kein Fachjargon, keine Überforderung.",
              },
              {
                icon: (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Anwenden",
                desc: "Praxisnah und direkt im Alltag einsetzbar. Von der ersten Idee bis zum fertigen Ergebnis.",
              },
              {
                icon: (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                title: "Weiterkommen",
                desc: "Schritt für Schritt zukunftsfähig werden. Für dich und deine Einrichtung.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-7"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#EBF6FA", color: "#2596be" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                >
                  {item.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2596be" }}>
              Unsere Vision
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight"
            >
              Technologie, die den Menschen unterstützt. Nicht ersetzt.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              KI soll kinderleicht werden. Verständlich erklärt, praxisnah aufbereitet
              und direkt anwendbar. Sie spart Zeit, unterstützt bei der Erstellung von
              Materialien und verbessert die Kommunikation, ohne dass die pädagogische
              Beziehung darunter leidet.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: "🛡️", label: "DSGVO im Blick", desc: "Jedes Tool wird auf Datenschutz geprüft" },
              { icon: "🎯", label: "Praxis statt Theorie", desc: "Nur Tools, die im Alltag wirklich helfen" },
              { icon: "💬", label: "Klare Sprache", desc: "Keine Buzzwords, keine leeren Versprechen" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-[#F5F5F7] rounded-xl px-5 py-4">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-base font-semibold text-gray-900">{item.label}</p>
                  <p className="text-base text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITÄT ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Qualität ist uns wichtig.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            Kein Tool landet zufällig auf unserer Plattform. Jedes Tool, jede App und jedes Material
            durchläuft einen festen Prüfprozess, damit du dich auf unsere Empfehlungen verlassen kannst.
          </p>
          <Link
            href="/so-arbeiten-wir"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#2596be" }}
          >
            So arbeiten wir
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
