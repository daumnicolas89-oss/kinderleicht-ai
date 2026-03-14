import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — kinderleicht.ai",
  description: "Eigene Web-Apps für den Bildungsalltag — direkt im Browser nutzbar.",
};

export default function ToolsPage() {
  return (
    <section className="min-h-[70vh] py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-medium mb-3" style={{ color: "#2596be" }}>
            Eigene Tools
          </p>
          <h1
            className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Web-Apps für Pädagogen
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Hier entstehen eigene KI-gestützte Web-Apps, die wir speziell für den
            pädagogischen Alltag entwickeln. Direkt im Browser nutzbar — ohne
            Installation, ohne Account.
          </p>
        </div>

        <div className="mt-16 py-16 border border-gray-100 rounded-xl bg-[#F5F5F7] text-center">
          <p className="text-gray-400 text-sm">Noch keine Tools verfügbar — bald geht's los.</p>
        </div>
      </div>
    </section>
  );
}
