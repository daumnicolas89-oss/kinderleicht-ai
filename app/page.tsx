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
      <section className="relative overflow-hidden bg-white pt-14 pb-12 sm:pt-28 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-[2rem] sm:text-6xl lg:text-[70px] font-bold tracking-tight text-gray-900 leading-[1.15]">
            KI-Tools für
            <br />
            <RotatingWord />
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Geprüfte Tools, eigene Apps und fertige Vorlagen für Kita, Schule und Bildungseinrichtungen. Kostenlos.
          </p>
        </div>
      </section>

      {/* ── APPS ────────────────────────────── */}
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
              <Link
                href="/apps"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2596be" }}
              >
                Alle Apps ansehen
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <AppSlideshow
              slides={[
                { src: "/Ferienplaner 1.webp", alt: "Ferienplaner-Generator" },
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

      {/* ── TOOLS ────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#2596be" }}
              >
                Tools
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Finde das Tool,<br />
                das zu dir passt.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-7">
                Über 315 Tools für Kita, Schule und Verwaltung. Mit DSGVO-Ampel, Praxistipps und ehrlicher Einschätzung.
              </p>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2596be" }}
              >
                Tools entdecken
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="lg:order-1 grid grid-cols-2 gap-3">
              {[
                { label: "DSGVO-Ampel", desc: "Grün, Gelb oder Rot auf einen Blick", icon: "🟢" },
                { label: "Preismodell", desc: "Kostenlos, Freemium oder Kostenpflichtig", icon: "💰" },
                { label: "Kategorien", desc: "Von Texte bis Video, von Quiz bis Planung", icon: "📂" },
                { label: "Praxistipps", desc: "Didaktischer Mehrwert und Aufwand", icon: "💡" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                  <p className="text-xl mb-2">{item.icon}</p>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{item.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── PROMPTS ────────────────────────────── */}
      {prompts.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
          <ScrollReveal className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#2596be" }}
                >
                  Prompts
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                  Fertige Vorlagen<br />
                  zum Kopieren.
                </h2>
                <p className="text-base text-gray-500 leading-relaxed mb-7">
                  Elternbrief, Förderplan oder Unterrichtsentwurf. Vorlage kopieren, in deinen Chatbot einfügen, Platzhalter anpassen, fertig.
                </p>
                <Link
                  href="/prompts"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-all"
                  style={{ backgroundColor: "#2596be" }}
                >
                  Alle Vorlagen ansehen
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Prompt-Vorschau im Terminal-Style */}
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.08) 0%, transparent 70%)" }}
                />
                <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#F5F5F7] border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 font-mono truncate">
                      Prompt-Vorlagen
                    </div>
                  </div>

                  {/* Prompt Cards */}
                  <div className="p-4 flex flex-col gap-3">
                    {prompts.map((prompt: { titel: string; slug: string; kategorie?: string; promptText: string }) => (
                      <Link
                        key={prompt.slug}
                        href={prompt.kategorie ? `/prompts?kategorie=${encodeURIComponent(prompt.kategorie)}` : "/prompts"}
                        className="block p-4 rounded-xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-sm transition-all"
                      >
                        {prompt.kategorie && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
                            {prompt.kategorie}
                          </span>
                        )}
                        <p className="text-sm font-semibold text-gray-900 mt-2 mb-1.5">{prompt.titel}</p>
                        <p className="text-xs text-gray-400 font-mono leading-relaxed line-clamp-2">
                          {prompt.promptText.slice(0, 120)}...
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── ZAHLEN ─────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
