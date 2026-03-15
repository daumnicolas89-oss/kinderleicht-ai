import type { Metadata } from "next";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allToolsQuery } from "@/lib/sanity/queries";
import ToolsClient from "@/components/ToolsClient";

export const metadata: Metadata = {
  title: "KI-Tools — kinderleicht.ai",
  description: "Geprüfte KI-Tools mit Tipps für den pädagogischen Einsatz.",
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

export default async function ToolsPage() {
  const raw = await client.fetch(allToolsQuery);
  const tools = raw.map((t: Record<string, unknown>) => ({
    ...t,
    logoUrl: t.logo ? urlFor(t.logo).width(120).height(120).url() : null,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-14 px-4 sm:px-6 lg:px-8">
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
            KI-Tools
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-[1.06]"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Der große Tool-Überblick.
          </h1>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
            Geprüfte KI-Tools mit Tipps für den pädagogischen Einsatz.
          </p>
        </div>
      </section>

      {/* Filter + Grid (client) */}
      <ToolsClient tools={tools} />
    </>
  );
}
