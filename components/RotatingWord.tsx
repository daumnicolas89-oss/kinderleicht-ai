"use client";

import { useState, useEffect } from "react";

const words = ["Kitas", "Schulen", "Krippen", "GBS", "GTS", "Teams"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 280);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        color: "#2596be",
        display: "inline-block",
        transition: "opacity 0.28s ease, transform 0.28s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-6px)",
      }}
    >
      {words[index]}
    </span>
  );
}
