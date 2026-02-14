import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  verification: {
    google: 'j9u4a5ciRe9ygH0A0_h6knVUSMacNpVusWLDjb9rnm0',
  },
  title: {
    default: "Brutto Netto Rechner 2026 - Gehaltsrechner kostenlos | gehaltly.de",
    template: "%s | gehaltly.de"
  },
  description: "Brutto Netto Rechner 2026: Berechnen Sie kostenlos Ihr Nettogehalt. ✓ Alle Steuerklassen ✓ Alle Bundesländer ✓ Mit Diagrammen. Jetzt Nettolohn berechnen!",
  keywords: ["Brutto Netto Rechner", "Gehaltsrechner", "Nettolohn", "Lohnrechner", "Steuerrechner", "Brutto Netto", "Nettogehalt berechnen", "Lohnsteuer", "Sozialabgaben"],
  authors: [{ name: "gehaltly.de" }],
  alternates: {
    canonical: 'https://gehaltly.de',
  },
  openGraph: {
    title: "Brutto Netto Rechner 2026 - Gehaltsrechner kostenlos",
    description: "Berechnen Sie kostenlos Ihr Nettogehalt mit unserem präzisen Brutto-Netto-Rechner 2026. Alle Steuerklassen und Bundesländer.",
    url: "https://gehaltly.de",
    siteName: "gehaltly.de",
    locale: "de_DE",
    type: "website",
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brutto Netto Rechner 2026 - Gehaltsrechner kostenlos",
    description: "Berechnen Sie kostenlos Ihr Nettogehalt. Alle Steuerklassen, alle Bundesländer.",
    images: ['https://gehaltly.de/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A1A1A',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "gehaltly.de",
              "url": "https://gehaltly.de",
              "description": "Kostenlose Gehaltsrechner für Deutschland",
              "publisher": {
                "@type": "Organization",
                "name": "gehaltly.de",
                "url": "https://gehaltly.de",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gehaltly.de/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gehaltly.de/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
