import { ImageResponse } from "next/og";
import { client } from "@/sanity/lib/client";
import { lexikonBySlugQuery } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "KI-ABC Begriff";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const entry = await client.fetch(lexikonBySlugQuery, { slug: params.slug });

  const katColor: Record<string, string> = {
    "KI & Technologie": "#2596be",
    "Datenschutz & Recht": "#92400E",
    "Pädagogik & Didaktik": "#166534",
    "Tools & Software": "#6B21A8",
  };

  const color = entry?.kategorie ? katColor[entry.kategorie as string] || "#2596be" : "#2596be";

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
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "18px", fontWeight: 600, color, textTransform: "uppercase", letterSpacing: "2px" }}>
            KI-ABC
          </span>
          {entry?.kategorie && (
            <span style={{ fontSize: "18px", color: "#9ca3af" }}>
              — {entry.kategorie as string}
            </span>
          )}
        </div>

        <div style={{ fontSize: "56px", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "20px" }}>
          {entry?.begriff || "Begriff"}
        </div>

        <div style={{ fontSize: "24px", color: "#6b7280", lineHeight: 1.5, maxWidth: "900px" }}>
          {entry?.kurzdefinition || ""}
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
          <span style={{ fontSize: "20px", color: "#9ca3af" }}>— KI-ABC für Pädagogen</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
