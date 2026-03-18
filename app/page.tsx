import Link from "next/link";
import RotatingWord from "@/components/RotatingWord";
import FerienplanerSlideshow from "@/components/FerienplanerSlideshow";
import ScrollReveal from "@/components/ScrollReveal";
import HomeFAQ from "@/components/HomeFAQ";

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
            Elternbriefe in 2 Minuten, Ferienprogramme per Klick, Unterricht mit KI vorbereiten. Mehr Zeit für das, was zählt.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 active:scale-[0.96] transition-all"
              style={{ backgroundColor: "#2596be" }}
            >
              Zu den Apps
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-[0.96] transition-all"
            >
              Alle Tools ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* ── FÜR WEN ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Für alle, die mit Kindern arbeiten.
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">
              Egal ob Kita, Schule oder Ganztagsbetreuung &ndash; unsere Tools sind für euren Alltag gemacht.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Lehrkräfte",
                description: "Unterricht mit KI vorbereiten, differenzieren und schneller Feedback geben.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                ),
              },
              {
                title: "Kita & Krippe",
                description: "Elternbriefe, Entwicklungsdoku und Ferienprogramme ohne Aufwand erstellen.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                ),
              },
              {
                title: "GBS & Ganztag",
                description: "Ferienbetreuung planen, Dienstpläne erstellen und Teams koordinieren.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-gray-50/50"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF6FA] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── WAS BIETET KINDERLEICHT.AI ───────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Alles an einem Ort.
            </h2>
            <p className="text-base text-gray-600 max-w-lg mx-auto">
              Geprüfte KI-Tools, eigene Web-Apps und ein umfassendes KI-Lexikon. Speziell aufbereitet für den pädagogischen Alltag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: "/tools",
                emoji: "🔍",
                badge: "200+",
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
                badge: "330+",
                title: "KI-ABC",
                description: "Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools. Einfach erklärt.",
                linkText: "Zum Lexikon",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-lg hover:-translate-y-1 active:scale-[0.97] transition-all duration-300"
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
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 active:scale-[0.96] transition-all"
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

      {/* ── ZAHLEN / SOCIAL PROOF ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Gebaut aus der Praxis. Für die Praxis.
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">
              kinderleicht.ai entsteht direkt im Bildungsalltag &ndash; mit echtem Feedback von Lehrkräften und Pädagog:innen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Geprüfte KI-Tools" },
              { value: "330+", label: "Begriffe im KI-ABC" },
              { value: "100%", label: "Kostenlos nutzbar" },
              { value: "DSGVO", label: "Datenschutz geprüft" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 rounded-2xl bg-white border border-gray-100">
                <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#2596be" }}>{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── SO ARBEITEN WIR ─────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Häufige Fragen
            </h2>
            <p className="text-base text-gray-500">
              Die wichtigsten Antworten auf einen Blick.
            </p>
          </div>

          <HomeFAQ />

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
              style={{ color: "#2596be" }}
            >
              Alle FAQ ansehen
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
