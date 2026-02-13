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
  title: {
    default: "Brutto Netto Rechner 2026 - Gehaltsrechner kostenlos | gehaltly.de",
    template: "%s | gehaltly.de"
  },
  description: "Brutto Netto Rechner 2026: Berechnen Sie kostenlos Ihr Nettogehalt. ✓ Alle Steuerklassen ✓ Alle Bundesländer ✓ Mit Diagrammen. Jetzt Nettolohn berechnen!",
  keywords: ["Brutto Netto Rechner", "Gehaltsrechner", "Nettolohn", "Lohnrechner", "Steuerrechner", "Brutto Netto", "Nettogehalt berechnen", "Lohnsteuer", "Sozialabgaben"],
  authors: [{ name: "gehaltly.de" }],
  openGraph: {
    title: "Brutto Netto Rechner 2026 - Gehaltsrechner kostenlos",
    description: "Berechnen Sie kostenlos Ihr Nettogehalt mit unserem präzisen Brutto-Netto-Rechner 2026. Alle Steuerklassen und Bundesländer.",
    url: "https://gehaltly.de",
    siteName: "gehaltly.de",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brutto Netto Rechner 2026 - Gehaltsrechner kostenlos",
    description: "Berechnen Sie kostenlos Ihr Nettogehalt. Alle Steuerklassen, alle Bundesländer.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
