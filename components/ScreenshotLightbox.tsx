"use client";

import { useState } from "react";
import Image from "next/image";

export default function ScreenshotLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setOpen(true)}
        className="group relative inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        aria-label="Screenshot vergrößern"
      >
        <div className="relative w-16 h-10 rounded-lg overflow-hidden border border-gray-200 group-hover:border-[#2596be]/40 transition-colors flex-shrink-0">
          <Image src={src} alt={alt} fill className="object-cover" sizes="64px" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
            <svg
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2.5"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
        </div>
        <span className="text-xs text-gray-400 group-hover:text-[#2596be] transition-colors">Screenshot ansehen</span>
      </button>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Image */}
          <div
            className="relative z-10 max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={720}
              className="w-full object-contain"
            />

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              aria-label="Schließen"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
