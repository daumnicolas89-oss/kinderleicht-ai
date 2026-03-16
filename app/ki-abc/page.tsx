import type { Metadata } from "next";
import React from "react";
import { client } from "@/sanity/lib/client";
import { allLexikonQuery } from "@/lib/sanity/queries";
import LexikonClient from "@/components/LexikonClient";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "KI-ABC — kinderleicht.ai",
  description:
    "Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools. Einfach erklärt für Pädagogen.",
};

const dotGrid = {
  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage:
    "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
  opacity: 0.45,
} as React.CSSProperties;

export default async function KiAbcPage() {
  const entries = await client.fetch(allLexikonQuery);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0" style={dotGrid} />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(37,150,190,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "#2596be" }}
          >
            Lexikon
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]">
            Das KI-ABC für Pädagogen.
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Alle wichtigen Begriffe rund um KI, Datenschutz und digitale Tools.
            Einfach erklärt für den pädagogischen Alltag.
          </p>
        </div>
      </section>

      {/* Alphabet navigation + entries */}
      <LexikonClient entries={entries} />
    </>
  );
}
