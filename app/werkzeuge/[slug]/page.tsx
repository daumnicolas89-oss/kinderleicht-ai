import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} — Werkzeuge — kinderleicht.ai`,
  };
}

export default async function WerkzeugDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <section className="min-h-[70vh] py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/werkzeuge"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10"
        >
          ← Alle Werkzeuge
        </Link>

        <div className="max-w-2xl">
          <p className="text-sm font-medium mb-3" style={{ color: "#2596be" }}>
            Werkzeug
          </p>
          <h1
            className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
          >
            {slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Detailseite für dieses Werkzeug — Beschreibung, Einsatzideen und
            direkte Links folgen in Kürze.
          </p>
        </div>

        <div className="mt-16 py-16 border border-gray-100 rounded-xl bg-[#F5F5F7] text-center">
          <p className="text-gray-400 text-sm">Inhalt wird noch aufgebaut.</p>
        </div>
      </div>
    </section>
  );
}
