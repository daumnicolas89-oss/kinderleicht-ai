import { ImageResponse } from "next/og";
import { client } from "@/sanity/lib/client";
import { toolBySlugQuery } from "@/lib/sanity/queries";

export const runtime = "edge";
export const alt = "Tool-Vorschau";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const tool = await client.fetch(toolBySlugQuery, { slug: params.slug });

  const dsgvoColor =
    tool?.dsgvo === "grün" ? "#16a34a" : tool?.dsgvo === "gelb" ? "#d97706" : "#dc2626";
  const dsgvoLabel =
    tool?.dsgvo === "grün" ? "DSGVO-konform" : tool?.dsgvo === "gelb" ? "DSGVO eingeschränkt" : "DSGVO kritisch";

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
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: dsgvoColor,
            }}
          />
          <span style={{ fontSize: "18px", color: "#6b7280" }}>{dsgvoLabel}</span>
          {tool?.preismodell && (
            <span style={{ fontSize: "18px", color: "#6b7280", marginLeft: "16px" }}>
              {tool.preismodell}
            </span>
          )}
        </div>

        <div style={{ fontSize: "56px", fontWeight: 700, color: "#111827", lineHeight: 1.15, marginBottom: "20px" }}>
          {tool?.name || "Tool"}
        </div>

        <div style={{ fontSize: "24px", color: "#6b7280", lineHeight: 1.5, maxWidth: "900px" }}>
          {tool?.kurzbeschreibung || ""}
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
          <span style={{ fontSize: "20px", color: "#9ca3af" }}>— KI-Tools für Pädagogen</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
