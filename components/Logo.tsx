import Image from "next/image";

/**
 * Renders the logo PNG cropped to remove surrounding whitespace.
 * The 1000×1000 image has ~42% empty space on top, ~32% on bottom —
 * the actual logo content is ~26% of the image height.
 */
export default function Logo({ height = 28 }: { height?: number }) {
  // Scale image so the logo content fills the desired height
  const imageHeight = Math.round(height / 0.26);
  const imageWidth = imageHeight; // square source
  const marginTop = -Math.round(imageHeight * 0.42);

  return (
    <div
      style={{ height, overflow: "hidden", position: "relative" }}
      className="flex items-center"
    >
      <Image
        src="/Kinderleicht-1000x1000.png"
        alt="kinderleicht.ai"
        width={imageWidth}
        height={imageHeight}
        style={{ marginTop, display: "block", flexShrink: 0 }}
        priority
      />
    </div>
  );
}
