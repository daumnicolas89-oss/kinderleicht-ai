"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/ferienplaner-1.webp", alt: "Ferienplaner Übersicht" },
  { src: "/ferienplaner-2.webp", alt: "Elternbrief Generator" },
  { src: "/ferienplaner-3.webp", alt: "Dienstplan Generator" },
  { src: "/ferienplaner-4.webp", alt: "Ferienprogramm Generator" },
];

export default function FerienplanerSlideshow() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((i) => (i + 1) % slides.length);
        setFading(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function goTo(i: number) {
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 300);
  }

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.08) 0%, transparent 70%)" }}
      />
      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#F5F5F7] border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 font-mono">
            ferienplaner.kinderleicht.ai
          </div>
        </div>

        {/* Slide */}
        <div className="relative aspect-[4/3] bg-[#F9FAFB] transition-opacity duration-300" style={{ opacity: fading ? 0 : 1 }}>
          <Image
            src={slides[active].src}
            alt={slides[active].alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={active === 0}
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 py-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1} anzeigen`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? "16px" : "6px",
                backgroundColor: i === active ? "#2596be" : "#e5e7eb",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
