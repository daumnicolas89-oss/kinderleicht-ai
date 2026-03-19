"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

interface AppSlideshowProps {
  slides: Slide[];
  url: string;
  domain: string;
}

export default function AppSlideshow({ slides, url, domain }: AppSlideshowProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLAnchorElement>(null);

  const goTo = useCallback((i: number, dir?: "left" | "right") => {
    if (isAnimating || i === active) return;
    setDirection(dir ?? (i > active ? "left" : "right"));
    setIsAnimating(true);
    setTimeout(() => {
      setActive(i);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, active]);

  const next = useCallback(() => {
    goTo((active + 1) % slides.length, "left");
  }, [active, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + slides.length) % slides.length, "right");
  }, [active, slides.length, goTo]);

  // Autoplay with pause on hover/touch
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [paused, next]);

  // Touch/swipe handlers
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  }

  function handleTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    // Resume autoplay after 6s
    setTimeout(() => setPaused(false), 6000);
  }

  // Slide transform
  const getTransform = () => {
    if (!isAnimating) return "translateX(0)";
    return direction === "left" ? "translateX(-100%)" : "translateX(100%)";
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 font-mono truncate">
            {domain}
          </div>
        </div>

        {/* Slide */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-[4/3] bg-[#F9FAFB] overflow-hidden cursor-pointer"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="absolute inset-0 transition-all duration-300 ease-in-out"
            style={{
              transform: getTransform(),
              opacity: isAnimating ? 0 : 1,
            }}
          >
            <Image
              src={slides[active].src}
              alt={slides[active].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={active === 0}
            />
          </div>
        </a>

        {/* Dots */}
        <div className="flex justify-center gap-2 py-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1} anzeigen`}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? "20px" : "10px",
                backgroundColor: i === active ? "#2596be" : "#e5e7eb",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
