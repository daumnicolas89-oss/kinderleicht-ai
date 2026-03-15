"use client";

import { useState, useEffect } from "react";

const slides = [
  /* Slide 1 — Eingabe */
  <div key="eingabe" className="p-5 h-full flex flex-col">
    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2596be] mb-4">Neue Planung</p>
    <div className="space-y-3 flex-1">
      <div>
        <p className="text-[10px] text-gray-400 mb-1">Einrichtung</p>
        <div className="bg-[#F5F5F7] rounded-lg px-3 py-2 text-xs text-gray-800">Kita Sonnenschein</div>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 mb-1">Zeitraum</p>
        <div className="bg-[#F5F5F7] rounded-lg px-3 py-2 text-xs text-gray-800">21.7. – 1.8.2025</div>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 mb-1">Zielgruppe</p>
        <div className="bg-[#EBF6FA] rounded-lg px-3 py-2 text-xs text-[#2596be] border border-[#2596be]/20">Vorschulkinder (15 Kinder)</div>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 mb-1">Schwerpunkte</p>
        <div className="flex flex-wrap gap-1.5">
          {["Natur", "Kreativ", "Bewegung"].map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{t}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-4 w-full py-2 rounded-lg text-xs font-semibold text-white bg-[#2596be] text-center">
      Plan erstellen
    </div>
  </div>,

  /* Slide 2 — Wochenübersicht */
  <div key="woche" className="p-5 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-[10px] text-[#2596be] font-semibold uppercase tracking-wide mb-0.5">Ferienplaner</p>
        <p className="text-sm font-bold text-gray-800">Sommerprogramm 2025</p>
      </div>
      <span className="text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">Bereit</span>
    </div>
    <div className="space-y-1 flex-1">
      {[
        { day: "Mo, 21.7.", activity: "Ausflug Zoo", color: "#2596be" },
        { day: "Di, 22.7.", activity: "Basteln & Kreativ", color: "#8b5cf6" },
        { day: "Mi, 23.7.", activity: "Schwimmbad", color: "#059669" },
        { day: "Do, 24.7.", activity: "Spielolympiade", color: "#d97706" },
        { day: "Fr, 25.7.", activity: "Kochen & Backen", color: "#ef4444" },
      ].map((row) => (
        <div key={row.day} className="flex items-center gap-3 py-2 rounded-lg px-2 hover:bg-gray-50">
          <span className="text-[11px] text-gray-400 w-20 flex-shrink-0">{row.day}</span>
          <div className="h-1.5 rounded-full flex-1" style={{ backgroundColor: row.color, opacity: 0.3 }} />
          <span className="text-[11px] text-gray-600 flex-shrink-0">{row.activity}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
      <span className="text-[10px] text-gray-400">5 von 10 Tagen geplant</span>
      <span className="text-[10px] font-semibold" style={{ color: "#2596be" }}>Weiter</span>
    </div>
  </div>,

  /* Slide 3 — Tagesdetail */
  <div key="tag" className="p-5 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-[10px] text-gray-400">Montag, 21. Juli</p>
        <p className="text-sm font-bold text-gray-800">Tag 1 von 10</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-[#EBF6FA] flex items-center justify-center text-base">🌞</div>
    </div>
    <div className="space-y-2 flex-1">
      {[
        { time: "09:00", label: "Ankommen & Frühstück", color: "#F59E0B" },
        { time: "10:00", label: "Ausflug in den Zoo", color: "#2596be" },
        { time: "12:30", label: "Mittagessen", color: "#059669" },
        { time: "14:00", label: "Kreativzeit & Basteln", color: "#8b5cf6" },
        { time: "16:00", label: "Freispiel & Abholung", color: "#d97706" },
      ].map((row) => (
        <div key={row.time} className="flex items-center gap-2.5">
          <span className="text-[10px] text-gray-400 w-10 flex-shrink-0">{row.time}</span>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: row.color }} />
          <span className="text-[11px] text-gray-700">{row.label}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 pt-3 border-t border-gray-100 flex gap-2">
      <div className="flex-1 py-1.5 rounded-lg text-[10px] font-semibold text-center bg-[#F5F5F7] text-gray-600">Bearbeiten</div>
      <div className="flex-1 py-1.5 rounded-lg text-[10px] font-semibold text-center bg-[#2596be] text-white">Weiter</div>
    </div>
  </div>,

  /* Slide 4 — Fertig */
  <div key="fertig" className="p-5 h-full flex flex-col">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-bold text-gray-800">Plan fertig!</p>
        <p className="text-[10px] text-gray-400">10 Tage, 42 Aktivitäten geplant</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-1.5 flex-1">
      {[
        { day: "Mo – Fr", color: "#2596be", label: "Woche 1" },
        { day: "Mo – Fr", color: "#8b5cf6", label: "Woche 2" },
        { day: "Ausflüge", color: "#059669", label: "6 geplant" },
        { day: "Kreativ", color: "#d97706", label: "8 geplant" },
      ].map((item) => (
        <div key={item.label} className="bg-gray-50 rounded-xl p-2.5">
          <div className="w-2 h-2 rounded-full mb-1.5" style={{ backgroundColor: item.color }} />
          <p className="text-[10px] font-semibold text-gray-700">{item.label}</p>
          <p className="text-[10px] text-gray-400">{item.day}</p>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-[#2596be] text-white text-[11px] font-semibold">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Als PDF exportieren
    </div>
  </div>,
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

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,150,190,0.08) 0%, transparent 70%)" }}
      />
      {/* Browser frame */}
      <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-[#F5F5F7] border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 font-mono">
            ferienplaner.kinderleicht.ai
          </div>
        </div>

        {/* Slide content */}
        <div
          className="min-h-[300px] transition-opacity duration-300"
          style={{ opacity: fading ? 0 : 1 }}
        >
          {slides[active]}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 pb-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFading(true); setTimeout(() => { setActive(i); setFading(false); }, 300); }}
              className="w-1.5 h-1.5 rounded-full transition-all"
              style={{ backgroundColor: i === active ? "#2596be" : "#e5e7eb", width: i === active ? "16px" : "6px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
