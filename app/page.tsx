"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Rotating words ─────────────────────────────────────────── */
const rotatingWords = ["Kitas", "Schulen", "Horten", "Krippen", "Teams"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        color: "#2596be",
        display: "inline-block",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        minWidth: "200px",
      }}
    >
      {rotatingWords[index]}
    </span>
  );
}

/* ─── Fade-in on scroll ──────────────────────────────────────── */
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

/* ─── Browser Mockup ─────────────────────────────────────────── */
function BrowserMockup() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200" style={{ background: "#fff" }}>
      {/* Chrome bar */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#F5F5F7", borderBottom: "1px solid #e5e7eb" }}>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-md px-4 py-1.5 text-xs text-gray-400 border border-gray-200 flex items-center gap-2" style={{ minWidth: 220 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
            ferienplaner.kinderleicht.ai
          </div>
        </div>
      </div>

      {/* App UI */}
      <div className="p-6" style={{ background: "#fff", minHeight: 300 }}>
        {/* App header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-base font-bold text-gray-900" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>Ferienplaner</div>
            <div className="text-xs text-gray-400 mt-0.5">Sommer 2025 · Kita Sonnenschein</div>
          </div>
          <div className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ background: "#2596be" }}>
            Neu erstellen
          </div>
        </div>

        {/* Three option cards */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Ferienprogramm", icon: "🗓️", active: true },
            { label: "Elternbrief", icon: "✉️", active: false },
            { label: "Dienstplan", icon: "📋", active: false },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-xl p-3 text-center border"
              style={{
                borderColor: card.active ? "#2596be" : "#e5e7eb",
                background: card.active ? "#EBF6FA" : "#fafafa",
              }}
            >
              <div className="text-xl mb-1">{card.icon}</div>
              <div className="text-xs font-medium" style={{ color: card.active ? "#2596be" : "#6b7280" }}>
                {card.label}
              </div>
            </div>
          ))}
        </div>

        {/* Fake form */}
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 text-xs text-gray-400">
            Zeitraum: 14. Juli – 25. Juli 2025
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 text-xs text-gray-400">
            Gruppenalter: 3–6 Jahre · 18 Kinder
          </div>
          <div className="w-full rounded-lg text-xs font-semibold text-white py-2.5 text-center" style={{ background: "#2596be" }}>
            Programm generieren ✨
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */
const stats = [
  { value: "1", label: "eigene Web-App", sub: "direkt im Browser" },
  { value: "3", label: "Bereiche", sub: "Apps, Tools & Downloads" },
  { value: "100%", label: "kostenlos", sub: "ohne Registrierung" },
];

const pillars = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "Unsere Apps",
    desc: "Web-Apps speziell für den Bildungsalltag. Direkt im Browser nutzbar, ohne Installation.",
    href: "/apps",
    cta: "Apps ansehen",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    label: "KI-Tools",
    desc: "Geprüfte Tools wie Canva, Claude und ChatGPT mit Tipps für den pädagogischen Einsatz.",
    href: "/tools",
    cta: "Tools ansehen",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    label: "Downloads",
    desc: "Vorlagen, Checklisten und Materialien zum Sofort-Nutzen. Kostenlos und praxiserprobt.",
    href: "/downloads",
    cta: "Downloads ansehen",
  },
];

const audiences = [
  { label: "Kita & Krippe", emoji: "🏠" },
  { label: "Grundschule", emoji: "✏️" },
  { label: "Weiterführende Schule", emoji: "📚" },
  { label: "Nachmittagsbetreuung", emoji: "☀️" },
  { label: "Leitung & Verwaltung", emoji: "📋" },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  const statsRef = useFadeIn(0);
  const pillarsRef = useFadeIn(0);
  const audienceRef = useFadeIn(0);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        {/* Dot-grid background */}
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

        {/* Soft blue glow */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(37,150,190,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2596be]/25 bg-[#2596be]/6 text-xs font-medium text-[#2596be] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2596be] animate-pulse" />
            Ferienplaner ist jetzt live
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-gray-900 leading-[1.08]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            KI-Tools für{" "}
            <RotatingWord />
          </h1>

          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Eigene Web-Apps, geprüfte KI-Tools und fertige Materialien.
            Alles, was du für den Bildungsalltag brauchst.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2596be" }}
            >
              Tools entdecken
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center px-7 py-3 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Unsere Apps
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Bereits von Pädagogen in ganz Deutschland genutzt
          </div>

          {/* Browser Mockup */}
          <div className="mt-14 px-2">
            <BrowserMockup />
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div ref={statsRef} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-4">
                <div
                  className="text-4xl sm:text-5xl font-bold tracking-tight mb-1"
                  style={{ color: "#2596be", fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-gray-800">{s.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── THREE PILLARS ─────────────────────────────────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div ref={pillarsRef} className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Was du hier findest
            </h2>
            <p className="text-gray-400 text-lg">Alles für den Bildungsalltag. An einem Ort.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:border-[#2596be]/30 hover:shadow-lg transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#EBF6FB", color: "#2596be" }}
                >
                  {p.icon}
                </div>
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {p.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                <Link
                  href={p.href}
                  className="mt-5 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: "#2596be" }}
                >
                  {p.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ──────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div ref={audienceRef} className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Für wen ist kinderleicht.ai?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Für alle, die professionell mit Kindern und Jugendlichen arbeiten.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#2596be]/40 hover:shadow-sm transition-all duration-200"
              >
                <span>{a.emoji}</span>
                {a.label}
              </span>
            ))}
          </div>
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
            Entdecke Tools und Apps, die deinen Alltag wirklich erleichtern.
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
