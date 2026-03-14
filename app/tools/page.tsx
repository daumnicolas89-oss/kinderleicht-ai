import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — kinderleicht.ai",
  description: "Geprüfte KI-Tools für Erzieher und Lehrkräfte.",
};

export default function ToolsPage() {
  return (
    <section className="min-h-[70vh] py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm font-medium mb-3" style={{ color: "#2596be" }}>
            KI-Tools
          </p>
          <h1
            className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            Geprüfte KI-Tools
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Sorgfältig ausgewählte KI-Tools wie Canva, Claude und ChatGPT —
            mit Erklärungen und konkreten Einsatzideen für den Bildungsbereich.
          </p>
        </div>

        <div className="mt-16 py-16 border border-gray-100 rounded-xl bg-[#F5F5F7] text-center">
          <p className="text-gray-400 text-sm">Tools werden in Kürze veröffentlicht.</p>
        </div>
      </div>
    </section>
  );
}
