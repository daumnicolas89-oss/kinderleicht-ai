import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteTitle = "kinderleicht.ai — KI-Tools für Pädagogen";
const siteDescription =
  "Geprüfte KI-Tools, eigene Apps und Vorlagen für Kita, Schule und Bildungseinrichtungen. Mit DSGVO-Einschätzung.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kinderleicht.ai"),
  alternates: { canonical: "./" },
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "https://kinderleicht.ai",
    locale: "de_DE",
    siteName: "kinderleicht.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${ibmPlexSans.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "kinderleicht.ai",
              url: "https://kinderleicht.ai",
              description:
                "KI-Tools und Apps für Pädagogen im deutschsprachigen Raum",
              contactPoint: {
                "@type": "ContactPoint",
                email: "kontakt@kinderleicht.ai",
                contactType: "customer service",
              },
            }),
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#2596be] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold">
          Zum Inhalt springen
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
