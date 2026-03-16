import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allDownloadsQuery } from "@/lib/sanity/queries";
import DownloadsClient from "@/components/DownloadsClient";
import PageHero from "@/components/PageHero";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Downloads — kinderleicht.ai",
  description: "Kostenlose Vorlagen, Checklisten und Leitfäden für Kita, Schule und Pädagogen.",
};

export default async function DownloadsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawDownloads: any[] = await client.fetch(allDownloadsQuery);
  const downloads = rawDownloads.map((d) => ({
    ...d,
    imageUrl: d.vorschaubild
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? urlFor(d.vorschaubild as any).width(600).height(450).fit("crop").url()
      : null,
  }));

  return (
    <>
      <PageHero
        label="Downloads"
        title="Fertige Materialien für deinen Alltag."
        subtitle="Kostenlose Vorlagen, Leitfäden und Checklisten. Sofort einsetzbar und praxiserprobt."
      >
        <Link
          href="/so-arbeiten-wir"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ color: "#2596be" }}
        >
          Wie wir arbeiten
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </PageHero>

      {/* ── Filter + Grid (client) ─────────────────────────── */}
      {downloads.length > 0 ? (
        <DownloadsClient downloads={downloads} />
      ) : (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="py-20 border border-gray-100 rounded-2xl bg-[#F5F5F7] text-center">
              <p className="text-gray-400 text-base">Downloads folgen in Kürze.</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
