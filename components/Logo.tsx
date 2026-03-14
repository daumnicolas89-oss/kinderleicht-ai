import Image from "next/image";

export default function Logo({ height = 32 }: { height?: number }) {
  const width = Math.round(height * 2.5); // 1000×400 → Seitenverhältnis 2.5:1

  return (
    <Image
      src="/Kinderleicht-1000x400.png"
      alt="kinderleicht.ai"
      width={width}
      height={height}
      priority
    />
  );
}
