"use client";

import { useState, useEffect } from "react";

const words = ["Kitas", "Schulen", "Krippen", "GBS", "GTS", "Teams", "Jugendarbeit", "Leitung", "Verwaltung", "Weiterführende Schulen"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exit");
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("enter");
        setTimeout(() => setPhase("visible"), 30);
      }, 300);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const style: React.CSSProperties = {
    color: "#2596be",
    display: "inline-block",
    transition: phase === "enter" ? "none" : "opacity 0.3s ease, transform 0.3s ease",
    opacity: phase === "visible" ? 1 : 0,
    transform:
      phase === "exit"
        ? "translateY(-12px)"
        : phase === "enter"
          ? "translateY(12px)"
          : "translateY(0)",
  };

  return <span style={style}>{words[index]}</span>;
}
