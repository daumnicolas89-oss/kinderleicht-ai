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
            Elternbriefe in 2 Minuten, Ferienprogramme per Klick, Konzepte und Unterricht mit KI vorbereiten. Mehr Zeit für das, was wirklich zählt.
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
              Von der Krippe bis zur weiterführenden Schule, von der Leitung bis zur Verwaltung. Unsere Tools sind für deinen Alltag gemacht.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Krippe & Kita",
                description: "Der Elternbrief muss heute noch raus, die Doku wartet seit Tagen. Wir helfen, damit beides nicht am Feierabend hängenbleibt.",
              },
              {
                title: "Schulen",
                description: "30 Kinder, 5 Niveaus, eine Stunde Vorbereitung. KI hilft beim Differenzieren, damit du dich auf den Unterricht konzentrieren kannst.",
              },
              {
                title: "GBS & GTS",
                description: "Ferienprogramm für 80 Kinder, drei Wochen, ein Team. Der Ferienplaner macht aus dem Chaos einen Plan.",
              },
              {
                title: "Jugendarbeit",
                description: "Kreative Angebote entwickeln, ohne jedes Mal bei null anzufangen. Mehr Zeit für die Jugendlichen, weniger für Papierkram.",
              },
              {
                title: "Leitung & Teams",
                description: "Konzepte schreiben, Fortbildungen vorbereiten, das Team mitnehmen. Ohne dass der Schreibtisch zum Dauerwohnsitz wird.",
              },
              {
                title: "Verwaltung",
                description: "Anschreiben, Berichte, Formulare. Die Dinge, die niemand gerne macht, aber alle brauchen. Jetzt deutlich schneller erledigt.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col p-5 rounded-2xl border border-gray-100 bg-gray-50/50"
              >
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── FERIENPLANER HIGHLIGHT ────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Gebaut aus der Praxis. Für die Praxis.
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">
              kinderleicht.ai entsteht direkt im Bildungsalltag. Mit echtem Feedback von Lehrkräften und Pädagogen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Geprüfte KI-Tools" },
              { value: "330+", label: "Begriffe im KI-ABC" },
              { value: "100%", label: "Kostenlos nutzbar" },
              { value: "DSGVO", label: "Datenschutz geprüft" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 rounded-2xl border border-gray-100" style={{ backgroundColor: "#F5F5F7" }}>
                <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#2596be" }}>{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
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

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
