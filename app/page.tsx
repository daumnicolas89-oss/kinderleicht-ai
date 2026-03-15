"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Rotating words ─────────────────────────────────────── */
const rotatingWords = ["Kitas", "Schulen", "Krippen", "GBS", "GTS", "Teams"];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 280);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        color: "#2596be",
        display: "inline-block",
        transition: "opacity 0.28s ease, transform 0.28s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-6px)",
      }}
    >
      {rotatingWords[index]}
    </span>
  );
}

/* ─── Fade-in on scroll ──────────────────────────────────── */
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`;
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

/* ─── Floating Badges ────────────────────────────────────── */
const badges = [
  { icon: "✉️", text: "Elternbrief in 30 Sekunden" },
  { icon: "🗓️", text: "Ferienprogramm automatisch" },
  { icon: "📋", text: "Dienstplan auf Knopfdruck" },
  { icon: "🧠", text: "KI verständlich erklärt" },
  { icon: "📥", text: "Vorlagen kostenlos" },
  { icon: "⏱️", text: "Stunden Zeit gespart" },
];

/* ─── Pillars ─────────────────────────────────────────────── */
const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h.01M10 8h5" />
        <path d="M7 11h.01M10 11h3" />
      </svg>
    ),
    label: "Unsere Apps",
    desc: "Web-Apps für den Bildungsalltag. Direkt im Browser, ohne Installation.",
    href: "/apps",
    cta: "Apps ansehen",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 4-4 6-4 9H9c0-3-4-5-4-9a7 7 0 0 1 7-7z" />
        <path d="M9 18h6M10 22h4" />
      </svg>
    ),
    label: "KI-Tools",
    desc: "Geprüfte Tools wie Canva, Claude und ChatGPT mit Tipps für den pädagogischen Einsatz.",
    href: "/tools",
    cta: "Tools ansehen",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
      </svg>
    ),
    label: "Downloads",
    desc: "Vorlagen, Checklisten und Materialien zum Sofort-Nutzen. Kostenlos.",
    href: "/downloads",
    cta: "Downloads ansehen",
  },
];

/* ─── Audience ────────────────────────────────────────────── */
const audiences = [
  { label: "Kita & Krippe", emoji: "🏠" },
  { label: "Grundschule", emoji: "✏️" },
  { label: "Weiterführende Schule", emoji: "📚" },
  { label: "GBS & GTS", emoji: "☀️" },
  { label: "Leitung & Verwaltung", emoji: "📋" },
];

/* ─── Page ────────────────────────────────────────────────── */
export default function HomePage() {
  const pillarsRef = useFadeIn(0);
  const audienceRef = useFadeIn(0);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-20 pb-4 px-4 sm:px-6 lg:px-8">
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
          style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.11) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          {/* Live-Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2596be]/20 bg-[#2596be]/5 text-xs font-medium text-[#2596be] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2596be] animate-pulse" />
            Ferienplaner ist jetzt live
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-gray-900 leading-[1.08]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            KI-Tools für
            <br />
            <RotatingWord />
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto">
            Eigene Web-Apps, geprüfte KI-Tools und fertige Materialien für den Bildungsalltag.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2596be" }}
            >
              Tools entdecken
            </Link>
            <Link
              href="/apps"
              className="inline-flex items-center px-6 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Unsere Apps
            </Link>
          </div>

          {/* Floating Badges */}
          <div className="mt-12 pb-4">
            <style>{`
              @keyframes badge-float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
            `}</style>
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-center gap-2.5 flex-wrap">
                {badges.slice(0, 3).map((b, i) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-gray-600 whitespace-nowrap"
                    style={{ animation: `badge-float 4s ease-in-out ${i * 250}ms infinite` }}
                  >
                    <span className="text-sm">{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2.5 flex-wrap">
                {badges.slice(3).map((b, i) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-gray-600 whitespace-nowrap"
                    style={{ animation: `badge-float 4s ease-in-out ${(i + 3) * 250}ms infinite` }}
                  >
                    <span className="text-sm">{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ──────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div ref={pillarsRef} className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
            >
              Was du hier findest
            </h2>
            <p className="text-gray-400">Alles für den Bildungsalltag. An einem Ort.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group flex flex-col p-6 rounded-2xl border border-gray-100 hover:border-[#2596be]/25 hover:shadow-md transition-all duration-200 bg-white"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF6FA] flex items-center justify-center mb-4 group-hover:bg-[#2596be]/15 transition-colors">
                  {p.icon}
                </div>
                <h3
                  className="text-base font-semibold text-gray-900 mb-1.5"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  {p.label}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                <span
                  className="mt-4 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: "#2596be" }}
                >
                  {p.cta}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE ───────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F5F7" }}>
        <div ref={audienceRef} className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Für wen ist kinderleicht.ai?
          </h2>
          <p className="text-gray-400 mb-8">Für alle, die professionell mit Kindern arbeiten.</p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-100 text-sm font-medium text-gray-700 shadow-sm"
              >
                <span>{a.emoji}</span>
                {a.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#2596be" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Bereit loszulegen?
          </h2>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.78)" }}>
            Entdecke Tools und Apps, die deinen Alltag wirklich erleichtern.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ffffff", color: "#2596be" }}
          >
            Jetzt entdecken
          </Link>
        </div>
      </section>
    </>
  );
}
