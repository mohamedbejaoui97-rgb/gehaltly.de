import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import { CALCULATOR_LINKS, RATGEBER_LINKS } from "@/lib/utils/internal-links";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
  verification: {
    google: 'j9u4a5ciRe9ygH0A0_h6knVUSMacNpVusWLDjb9rnm0',
  },
  title: {
    default: "Brutto Netto Rechner 2026 - Kostenlos berechnen",
    template: "%s | gehaltly.de"
  },
  description: "Brutto Netto Rechner 2026: Berechnen Sie kostenlos Ihr Nettogehalt. ✓ Alle Steuerklassen ✓ Alle Bundesländer ✓ Mit Diagrammen. Jetzt Nettolohn berechnen!",
  keywords: ["Brutto Netto Rechner", "Brutto Netto", "Nettogehalt berechnen", "Nettolohn berechnen", "Steuerrechner", "Lohnsteuer", "Sozialabgaben"],
  authors: [{ name: "gehaltly.de" }],
  alternates: {
    canonical: 'https://gehaltly.de',
    languages: {
      'de': 'https://gehaltly.de',
      'x-default': 'https://gehaltly.de',
    },
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E1BKJVFXZL" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-E1BKJVFXZL');`}
        </Script>
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
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Hauptnavigation",
              "itemListElement": [
                ...CALCULATOR_LINKS.slice(0, 5).map((link, i) => ({
                  "@type": "SiteNavigationElement",
                  "position": i + 1,
                  "name": link.title,
                  "description": link.description,
                  "url": `https://gehaltly.de${link.href === '/' ? '' : link.href}`
                })),
                ...RATGEBER_LINKS.map((link, i) => ({
                  "@type": "SiteNavigationElement",
                  "position": 6 + i,
                  "name": link.title,
                  "description": link.description,
                  "url": `https://gehaltly.de${link.href}`
                })),
              ]
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
