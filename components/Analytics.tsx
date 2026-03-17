"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function Analytics() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsentGiven(localStorage.getItem("cookieConsent") === "all");
    };

    check();
    window.addEventListener("storage", check);
    window.addEventListener("cookie-consent-change", check);
    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("cookie-consent-change", check);
    };
  }, []);

  if (!consentGiven) return null;

  return (
    <Script
      src="https://umami-tan-omega.vercel.app/script.js"
      data-website-id="9a236c3b-7f69-4458-8a74-fa26e3af5c78"
      strategy="afterInteractive"
    />
  );
}
