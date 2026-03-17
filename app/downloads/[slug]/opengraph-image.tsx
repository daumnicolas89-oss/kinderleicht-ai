import { ImageResponse } from "next/og";
import { client } from "@/sanity/lib/client";
import { downloadBySlugQuery } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "Download-Vorschau";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const dl = await client.fetch(downloadBySlugQuery, { slug: params.slug });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          backgroundColor: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: "18px", color: "#2596be", fontWeight: 600, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>
          Kostenloser Download
        </div>

        <div style={{ fontSize: "56px", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "20px" }}>
          {dl?.titel || "Download"}
        </div>

        <div style={{ fontSize: "24px", color: "#6b7280", lineHeight: 1.5, maxWidth: "900px" }}>
          {dl?.kurzbeschreibung || ""}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#2596be" }}>kinderleicht.ai</span>
          <span style={{ fontSize: "20px", color: "#9ca3af" }}>— Downloads für Pädagogen</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
