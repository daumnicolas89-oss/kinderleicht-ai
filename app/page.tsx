import Link from "next/link";
import RotatingWord from "@/components/RotatingWord";

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
          <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-bold tracking-tight text-gray-900 leading-[1.08]">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                href: "/tools",
                emoji: "🔍",
                count: "100+",
                title: "KI-Tools",
                description: "Geprüfte Tools mit DSGVO-Ampel, Bewertungen und Praxistipps für den Bildungsalltag.",
                linkText: "Alle Tools ansehen",
              },
              {
                href: "/apps",
                emoji: "🚀",
                count: "Neu",
                title: "Eigene Apps",
                description: "Selbst entwickelte Web-Apps wie der Ferienplaner. Kostenlos, im Browser, ohne Anmeldung.",
                linkText: "Apps entdecken",
              },
              {
                href: "/ki-abc",
                emoji: "📖",
                count: "150+",
                title: "KI-ABC",
                description: "Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools. Einfach erklärt.",
                linkText: "Zum Lexikon",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#2596be]/20 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{card.emoji}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF6FA] text-[#2596be]">
                    {card.count}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2596be] transition-colors">
                  {card.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed flex-1 mb-5">
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
        </div>
      </section>
    </>
  );
}
