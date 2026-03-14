/**
 * Crops the logo PNG via background-image positioning.
 * Source image: 1000×1000px square.
 * Logo content occupies approx x: 3%–97%, y: 45%–67% of the image.
 */
export default function Logo({ height = 28 }: { height?: number }) {
  const scale = height / 0.22;          // scale full image so logo fills `height`
  const offsetX = scale * 0.03;         // remove left whitespace
  const offsetY = scale * 0.45;         // remove top whitespace
  const width = Math.round(scale * 0.94); // logo content width

  return (
    <div
      aria-label="kinderleicht.ai"
      role="img"
      style={{
        height,
        width,
        flexShrink: 0,
        backgroundImage: "url('/Kinderleicht-1000x1000.png')",
        backgroundSize: `${Math.round(scale)}px ${Math.round(scale)}px`,
        backgroundPosition: `-${Math.round(offsetX)}px -${Math.round(offsetY)}px`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
