"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

const statements = [
  {
    num: "01",
    title: "Verstehen",
    desc: "Wir erklären KI so, dass jeder mitkommt. Kein Fachjargon, keine Überforderung.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Anwenden",
    desc: "Praxisnah und direkt im Alltag einsetzbar. Von der ersten Idee bis zum fertigen Ergebnis.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Weiterkommen",
    desc: "Schritt für Schritt zukunftsfähig werden. Für dich und deine Einrichtung.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const differences = [
  { label: "Pädagogisches Verständnis", desc: "Wir kennen den Alltag in Kitas und Schulen aus der Praxis." },
  { label: "KI-Expertise", desc: "Wir wissen, welche Tools wirklich helfen und welche nicht." },
  { label: "Klare Sprache", desc: "Keine Buzzwords. Keine leeren Versprechen. Nur echte Hilfe." },
];

const audiences = [
  { emoji: "🏠", label: "Kita & Krippe" },
  { emoji: "🎒", label: "Grundschule" },
  { emoji: "🏫", label: "Weiterführende Schule" },
  { emoji: "🌅", label: "GBS & GTS" },
  { emoji: "📋", label: "Leitung & Verwaltung" },
];

export default function UeberUnsPage() {
  const statementsRef = useFadeIn(0);
  const visionRef = useFadeIn(0);
  const diffRef = useFadeIn(0);
  const futureRef = useFadeIn(0);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Dot-grid */}
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
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>
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
            Wir machen KI für Kitas, Schulen und Bildungseinrichtungen so zugänglich,
            dass sich auch skeptische oder gestresste Pädagogen sicher, kompetent und
            entlastet fühlen. Kein Tech-Geblubber, keine Überforderung.
          </p>
        </div>
      </section>

      {/* ── THREE STATEMENTS ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div ref={statementsRef} className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statements.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-gray-100 p-8 hover:border-[#2596be]/30 hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Large background number */}
              <span
                className="absolute -top-3 -right-1 text-8xl font-black select-none pointer-events-none leading-none"
                style={{ color: "#2596be", opacity: 0.06 }}
              >
                {s.num}
              </span>

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "#EBF6FB", color: "#2596be" }}
              >
                {s.icon}
              </div>

              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#2596be" }}>
                {s.num}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VISION ───────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div ref={visionRef} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2596be" }}>
              Unsere Vision
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
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

          {/* Visual accent */}
          <div className="flex flex-col gap-4">
            {[
              { label: "Zeitersparnis", val: "bis zu 60%" },
              { label: "Weniger Papierkram", val: "spürbar" },
              { label: "Mehr Zeit für Kinder", val: "das Ziel" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl px-6 py-4 border border-gray-100 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">{item.label}</span>
                <span className="text-sm font-bold" style={{ color: "#2596be" }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FÜR WEN ──────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2596be" }}>
                Zielgruppen
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
              >
                Für wen wir arbeiten
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                kinderleicht.ai richtet sich an Pädagogen, die wenig Zeit haben, sich
                aber dennoch zukunftsfähig aufstellen möchten. Keine abstrakten Theorien,
                sondern klare, anwendbare Beispiele aus der Praxis.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {audiences.map((a) => (
                <div
                  key={a.label}
                  className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 px-5 py-4 hover:border-[#2596be]/30 hover:shadow-sm transition-all duration-200"
                >
                  <span className="text-2xl">{a.emoji}</span>
                  <span className="font-medium text-gray-800 text-sm">{a.label}</span>
                  <svg className="ml-auto text-gray-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WAS UNS UNTERSCHEIDET ────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div ref={diffRef} className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2596be" }}>
              Was uns ausmacht
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Was uns unterscheidet
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {differences.map((d) => (
              <div key={d.label} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#2596be]/30 hover:shadow-md transition-all duration-300">
                <div className="w-2 h-2 rounded-full mb-5" style={{ backgroundColor: "#2596be" }} />
                <h3
                  className="font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {d.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WO WIR HINWOLLEN ─────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div ref={futureRef} className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#2596be" }}>
            Ausblick
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Wo wir hinwollen
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            Langfristig soll kinderleicht.ai zur zentralen Anlaufstelle für KI in der
            Bildung im deutschsprachigen Raum werden. Ohne Angst, ohne Hype. Vom ersten
            Prompt bis zur Entwicklung ganzer pädagogischer Konzepte.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
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
