"use client";

import { useState, useEffect } from "react";

const slides = [
  /* Slide 1 — Übersicht / Home */
  <div key="home" className="p-5 h-full flex flex-col">
    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2596be] mb-4">Was kannst du erstellen?</p>
    <div className="space-y-2.5 flex-1">
      {[
        { icon: "✉️", label: "Elternbrief Generator", desc: "Professionelle Briefe in Sekunden", color: "#EBF6FA", textColor: "#2596be" },
        { icon: "📋", label: "Dienstplan Generator", desc: "Schichtplanung automatisch erstellt", color: "#F0FDF4", textColor: "#059669" },
        { icon: "🗓️", label: "Ferienprogramm Generator", desc: "Strukturiertes Ferienprogramm", color: "#FEF9C3", textColor: "#D97706" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm" style={{ backgroundColor: item.color }}>
            {item.icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">{item.label}</p>
            <p className="text-[10px] text-gray-400">{item.desc}</p>
          </div>
          <svg className="ml-auto flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      ))}
    </div>
    <div className="mt-4 text-center text-[10px] text-gray-400">Direkt im Browser · Kostenlos · Kein Login</div>
  </div>,

  /* Slide 2 — Elternbrief Generator */
  <div key="elternbrief" className="p-5 h-full flex flex-col">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-lg bg-[#EBF6FA] flex items-center justify-center text-sm">✉️</div>
      <p className="text-xs font-semibold text-gray-800">Elternbrief Generator</p>
    </div>
    <div className="flex-1 space-y-2.5">
      <div>
        <p className="text-[10px] text-gray-400 mb-1">Anlass</p>
        <div className="bg-[#F5F5F7] rounded-lg px-3 py-2 text-xs text-gray-800">Sommerfest am 18. Juli</div>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 mb-1">Ton</p>
        <div className="flex gap-1.5">
          {["Freundlich", "Formell", "Locker"].map((t, i) => (
            <div key={t} className={`text-[10px] px-2 py-1 rounded-lg border text-center flex-1 ${i === 0 ? "border-[#2596be] text-[#2596be] bg-[#EBF6FA]" : "border-gray-200 text-gray-500"}`}>{t}</div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
        <p className="text-[10px] text-gray-500 leading-relaxed">
          <span className="text-gray-800 font-medium">Liebe Eltern,</span><br />
          wir freuen uns, Sie zu unserem diesjährigen Sommerfest einzuladen...
        </p>
        <div className="mt-2 h-1.5 bg-gray-200 rounded-full w-3/4" />
        <div className="mt-1 h-1.5 bg-gray-200 rounded-full w-1/2" />
      </div>
    </div>
    <div className="mt-4 w-full py-2 rounded-lg text-xs font-semibold text-white bg-[#2596be] text-center">
      Brief generieren
    </div>
  </div>,

  /* Slide 3 — Dienstplan Generator */
  <div key="dienstplan" className="p-5 h-full flex flex-col">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-lg bg-[#F0FDF4] flex items-center justify-center text-sm">📋</div>
      <p className="text-xs font-semibold text-gray-800">Dienstplan Generator</p>
    </div>
    <div className="flex-1">
      <div className="grid grid-cols-4 gap-1 mb-1">
        <div className="text-[9px] text-gray-400"></div>
        {["Mo", "Di", "Mi"].map((d) => (
          <div key={d} className="text-[9px] text-gray-400 text-center font-medium">{d}</div>
        ))}
      </div>
      {[
        { name: "Anna K.", shifts: ["Früh", "Frei", "Früh"], colors: ["#EBF6FA", "white", "#EBF6FA"] },
        { name: "Max B.", shifts: ["Spät", "Spät", "Frei"], colors: ["#FEF9C3", "#FEF9C3", "white"] },
        { name: "Lisa M.", shifts: ["Frei", "Früh", "Spät"], colors: ["white", "#EBF6FA", "#FEF9C3"] },
        { name: "Tom W.", shifts: ["Früh", "Frei", "Früh"], colors: ["#EBF6FA", "white", "#EBF6FA"] },
      ].map((row) => (
        <div key={row.name} className="grid grid-cols-4 gap-1 mb-1">
          <div className="text-[9px] text-gray-600 flex items-center truncate">{row.name}</div>
          {row.shifts.map((shift, i) => (
            <div key={i} className="text-[8px] text-gray-600 text-center py-1.5 rounded-md border border-gray-100 font-medium" style={{ backgroundColor: row.colors[i] }}>
              {shift}
            </div>
          ))}
        </div>
      ))}
      <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[10px] text-gray-400">KW 29 · 4 Mitarbeiter</span>
        <span className="text-[10px] text-emerald-600 font-medium">Vollständig</span>
      </div>
    </div>
    <div className="mt-3 w-full py-2 rounded-lg text-xs font-semibold text-center" style={{ backgroundColor: "#F0FDF4", color: "#059669" }}>
      Als PDF exportieren
    </div>
  </div>,

  /* Slide 4 — Ferienprogramm */
  <div key="ferien" className="p-5 h-full flex flex-col">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-lg bg-[#FEF9C3] flex items-center justify-center text-sm">🗓️</div>
      <p className="text-xs font-semibold text-gray-800">Ferienprogramm Generator</p>
    </div>
    <div className="flex-1 space-y-1">
      {[
        { day: "Mo, 21.7.", activity: "Ausflug Zoo", color: "#2596be" },
        { day: "Di, 22.7.", activity: "Basteln & Kreativ", color: "#8b5cf6" },
        { day: "Mi, 23.7.", activity: "Schwimmbad", color: "#059669" },
        { day: "Do, 24.7.", activity: "Spielolympiade", color: "#d97706" },
        { day: "Fr, 25.7.", activity: "Kochen & Backen", color: "#ef4444" },
      ].map((row) => (
        <div key={row.day} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50">
          <span className="text-[10px] text-gray-400 w-20 flex-shrink-0">{row.day}</span>
          <div className="h-1.5 rounded-full flex-1" style={{ backgroundColor: row.color, opacity: 0.3 }} />
          <span className="text-[10px] text-gray-600 flex-shrink-0">{row.activity}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
      <span className="text-[10px] text-gray-400">5 von 10 Tagen geplant</span>
      <span className="text-[10px] font-semibold" style={{ color: "#2596be" }}>Weiter</span>
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
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 font-mono">
            ferienplaner.kinderleicht.ai
          </div>
        </div>

        {/* Slide */}
        <div className="min-h-[300px] transition-opacity duration-300" style={{ opacity: fading ? 0 : 1 }}>
          {slides[active]}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 pb-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
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
