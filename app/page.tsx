import Link from "next/link";
import RotatingWord from "@/components/RotatingWord";
import FerienplanerSlideshow from "@/components/FerienplanerSlideshow";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
            opacity: 0.45,
          }}
        />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-bold tracking-tight text-gray-900 leading-[1.15]">
            KI-Tools für
            <br />
            <RotatingWord />
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Geprüfte Tools, eigene Apps und hilfreiche Downloads. Für Pädagogen die mehr Zeit für das Wesentliche haben wollen.
          </p>
        </div>
      </section>

      {/* ── WAS BIETET KINDERLEICHT.AI ───────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Alles an einem Ort.
            </h2>
            <p className="text-base text-gray-600 max-w-lg mx-auto">
              Geprüfte KI-Tools, eigene Web-Apps und ein Lexikon mit über 150 Begriffen. Speziell aufbereitet für den pädagogischen Alltag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: "/tools",
                emoji: "🔍",
                badge: "100+",
                title: "KI-Tools",
                description: "Geprüfte Tools mit DSGVO-Ampel, Bewertungen und Praxistipps für den Bildungsalltag.",
                linkText: "Alle Tools ansehen",
              },
              {
                href: "/apps",
                emoji: "🚀",
                badge: "Live",
                title: "Eigene Apps",
                description: "Selbst entwickelte Web-Apps wie der Ferienplaner. Kostenlos, im Browser, ohne Anmeldung.",
                linkText: "Apps entdecken",
              },
              {
                href: "/ki-abc",
                emoji: "📖",
                badge: "150+",
                title: "KI-ABC",
                description: "Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools. Einfach erklärt.",
                linkText: "Zum Lexikon",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{card.emoji}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF6FA] text-[#2596be]">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2596be] transition-colors">
                  {card.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed flex-1 mb-5">
                  {card.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: "#2596be" }}
                >
                  {card.linkText}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── FERIENPLANER HIGHLIGHT ────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2596be" }}
              >
                Jetzt live
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Ferienbetreuung planen<br />
                in Minuten statt Stunden.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-7">
                Der Ferienplaner erstellt Ferienprogramme, Elternbriefe und Dienstpläne per KI. Komplett im Browser, kostenlos und ohne Anmeldung.
              </p>
              <a
                href="https://ferienplaner.kinderleicht.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2596be" }}
              >
                Ferienplaner öffnen
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>

            <FerienplanerSlideshow />
          </div>
        </ScrollReveal>
      </section>

      {/* ── SO ARBEITEN WIR ─────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <ScrollReveal className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Jedes Tool wird geprüft.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-7">
            Datenschutz, pädagogischer Nutzen, Bedienbarkeit und Preis-Leistung. Kein Tool landet hier zufällig.
          </p>
          <Link
            href="/so-arbeiten-wir"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
            style={{ color: "#2596be" }}
          >
            Mehr erfahren
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
