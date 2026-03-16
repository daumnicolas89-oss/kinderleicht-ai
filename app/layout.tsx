import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

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
  "Kuratierte KI-Tools, praktische Vorlagen und eigene Web-Apps — speziell für Erzieher und Lehrkräfte in Deutschland.";

export const metadata: Metadata = {
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
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
