import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Downloads — kinderleicht.ai",
  description: "Kostenlose Vorlagen und Materialien für Pädagogen.",
};

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
} as React.CSSProperties;

export default function DownloadsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" style={dotGrid} />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#2596be" }}>Downloads</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]" style={{ fontFamily: "var(--font-ibm-plex-sans)" }}>
            Vorlagen und Materialien
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Kostenlose Checklisten, Vorlagen und Materialien zum Sofort-Nutzen. Praxiserprobt und direkt für den Bildungsalltag gemacht.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="py-20 border border-gray-100 rounded-2xl bg-[#F5F5F7] text-center">
            <p className="text-gray-400 text-sm">Downloads folgen in Kürze.</p>
          </div>
        </div>
      </section>
    </>
  );
}
