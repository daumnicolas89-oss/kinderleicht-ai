import Link from "next/link";
import RotatingWord from "@/components/RotatingWord";
import AppSlideshow from "@/components/AppSlideshow";
import ScrollReveal from "@/components/ScrollReveal";
import HomeFAQ from "@/components/HomeFAQ";
import { client } from "@/sanity/lib/client";
import { featuredPromptsQuery } from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const prompts = await client.fetch(featuredPromptsQuery);
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-12 pb-10 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-[2rem] sm:text-6xl lg:text-[70px] font-bold tracking-tight text-gray-900 leading-[1.15]">
            KI-Tools für
            <br />
            <RotatingWord />
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Geprüfte Tools, eigene Apps und fertige Vorlagen für Kita, Schule und Bildungseinrichtungen. Kostenlos.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-all"
              style={{ backgroundColor: "#2596be" }}
            >
              Tools entdecken
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/apps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              Eigene Apps testen
            </Link>
          </div>
        </div>
      </section>

      {/* ── FÜR WEN ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Für alle, die mit Kindern arbeiten.
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">
              Von der Krippe bis zur weiterführenden Schule, von der Leitung bis zur Verwaltung. Unsere Tools sind für deinen Alltag gemacht.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
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
              <Link
                key={card.title}
                href="/tools"
                className="flex flex-col p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-bold text-gray-900">{card.title}</h3>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── APPS HIGHLIGHT ────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2596be" }}
              >
                Eigene Apps
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Eigene Apps für den<br />
                pädagogischen Alltag.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-7">
                Ferienplanung, Textdifferenzierung, Checklisten, Entwicklungsberichte und mehr. Kostenlos im Browser, ohne Anmeldung.
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                {[
                  { label: "Ferienplaner", href: "https://ferienplaner.kinderleicht.ai", primary: true },
                  { label: "Lernstufen", href: "https://lernstufen.kinderleicht.ai", primary: false },
                  { label: "Checklisten", href: "https://checkliste.kinderleicht.ai", primary: false },
                  { label: "Entwicklung", href: "https://entwicklung.kinderleicht.ai", primary: false },
                ].map((app) => (
                  <a
                    key={app.label}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold active:scale-[0.96] transition-all ${
                      app.primary
                        ? "text-white hover:opacity-90"
                        : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                    }`}
                    style={app.primary ? { backgroundColor: "#2596be" } : undefined}
                  >
                    {app.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
              <Link
                href="/apps"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "#2596be" }}
              >
                Alle Apps ansehen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <AppSlideshow
              slides={[
                { src: "/Ferienplaner 1.webp", alt: "Ferienplaner" },
                { src: "/Lernstufen 1.webp", alt: "Lernstufen-Generator" },
                { src: "/checkliste-1.webp", alt: "Checklisten-Generator" },
                { src: "/entwicklung 1.webp", alt: "Entwicklungsbericht-Generator" },
              ]}
              url="https://ferienplaner.kinderleicht.ai"
              domain="kinderleicht.ai/apps"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── PROMPTS HIGHLIGHT ────────────────────────────── */}
      {prompts.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <ScrollReveal className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2596be" }}
              >
                KI-Prompts
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Fertige Vorlagen zum Kopieren.
              </h2>
              <p className="text-base text-gray-500 max-w-lg mx-auto">
                Kopiere eine Vorlage, füge sie in ChatGPT oder einen anderen Chatbot ein, passe die Platzhalter an und du bekommst z.B. einen fertigen Elternbrief, Förderplan oder Unterrichtsentwurf.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
              {prompts.map((prompt: { titel: string; slug: string; kategorie?: string; beschreibung?: string; promptText: string }) => (
                <Link
                  key={prompt.slug}
                  href="/prompts"
                  className="flex flex-col p-5 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-[#2596be]/20 hover:shadow-md transition-all duration-200"
                >
                  {prompt.kategorie && (
                    <span className="self-start text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be] mb-3">
                      {prompt.kategorie}
                    </span>
                  )}
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{prompt.titel}</h3>
                  {prompt.beschreibung && (
                    <p className="text-sm text-gray-500 leading-relaxed">{prompt.beschreibung}</p>
                  )}
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/prompts"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 active:scale-[0.96] transition-all"
                style={{ backgroundColor: "#2596be" }}
              >
                Alle Vorlagen ansehen
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── ZAHLEN / SOCIAL PROOF ─────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Zahlen, die für sich sprechen.
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">
              kinderleicht.ai wächst stetig. Mit echtem Feedback von Lehrkräften und Pädagogen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {[
              { value: "315", label: "Geprüfte KI-Tools" },
              { value: "55+", label: "Fertige KI-Prompts" },
              { value: "385+", label: "Begriffe im KI-ABC" },
              { value: "100%", label: "Kostenlos nutzbar" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 sm:p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
                <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#2596be" }}>{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-3">
              Jedes Tool wird auf Datenschutz, pädagogischen Nutzen und Bedienbarkeit geprüft.
            </p>
            <Link
              href="/so-arbeiten-wir"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "#2596be" }}
            >
              So arbeiten wir
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
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
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
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
