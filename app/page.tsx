import Link from "next/link";
import RotatingWord from "@/components/RotatingWord";
import AppSlideshow from "@/components/AppSlideshow";
import ScrollReveal from "@/components/ScrollReveal";
import HomeFAQ from "@/components/HomeFAQ";
import { client } from "@/sanity/lib/client";
import { featuredPromptsQuery } from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [prompts, toolCount, promptCount, lexikonCount] = await Promise.all([
    client.fetch(featuredPromptsQuery),
    client.fetch(`count(*[_type == "werkzeug"])`),
    client.fetch(`count(*[_type == "prompt"])`),
    client.fetch(`count(*[_type == "lexikon"])`),
  ]);
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 lg:gap-12 items-center">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                Über {toolCount} Tools für Kita, Schule und Verwaltung. Mit DSGVO-Ampel, Praxistipps und ehrlicher Einschätzung.
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
                { label: "DSGVO-Ampel", desc: "Grün, Gelb oder Rot auf einen Blick", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
                { label: "Preismodell", desc: "Kostenlos, Freemium oder Kostenpflichtig", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg> },
                { label: "Kategorien", desc: "Von Texte bis Video, von Quiz bis Planung", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg> },
                { label: "Praxistipps", desc: "Didaktischer Mehrwert und Aufwand", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg> },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                  <div className="w-9 h-9 rounded-lg bg-[#EBF6FA] flex items-center justify-center mb-2">{item.icon}</div>
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
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
          <ScrollReveal className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                        className="block p-4 rounded-xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-200"
                      >
                        {prompt.kategorie && (
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EBF6FA] text-[#2596be]">
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
              { value: String(toolCount), label: "Geprüfte KI-Tools" },
              { value: String(promptCount), label: "Fertige KI-Prompts" },
              { value: String(lexikonCount), label: "Begriffe im KI-ABC" },
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
