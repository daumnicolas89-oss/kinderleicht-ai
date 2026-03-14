import Image from "next/image";

/**
 * Logo-Crop via overflow:hidden + negativem margin-top.
 *
 * Gemessen aus Kinderleicht-1000x1000.png:
 *   Logo-Inhalt: y ≈ 400–680px (28% Höhe, startet bei 40% von oben)
 *                x ≈ 25–975px  (95% Breite)
 */
export default function Logo({ height = 32 }: { height?: number }) {
  const fullSize = Math.round(height / 0.28); // Vollbild-Höhe so skalieren, dass Logo = height
  const offsetY = Math.round(fullSize * 0.40); // Whitespace oben abschneiden
  const offsetX = Math.round(fullSize * 0.025); // minimales Whitespace links
  const containerWidth = Math.round(fullSize * 0.95);

  return (
    <div
      style={{
        height,
        width: containerWidth,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src="/Kinderleicht-1000x1000.png"
        alt="kinderleicht.ai"
        width={fullSize}
        height={fullSize}
        style={{
          width: fullSize,
          height: fullSize,
          marginTop: -offsetY,
          marginLeft: -offsetX,
          display: "block",
          maxWidth: "none",
        }}
        priority
      />
    </div>
  );
}
