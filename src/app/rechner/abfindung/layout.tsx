import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abfindungsrechner 2026 - Abfindung versteuern',
  description: 'Abfindungsrechner 2026 mit Fünftelregelung: Berechnen Sie die Steuer auf Ihre Abfindung nach §34 EStG. ✓ Steuerersparnis ✓ Netto-Abfindung ✓ Kostenlos',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/abfindung/',
  },
  openGraph: {
    title: 'Abfindungsrechner 2026 - Abfindung versteuern',
    description: 'Abfindungsrechner 2026 mit Fünftelregelung: Berechnen Sie die Steuer auf Ihre Abfindung nach §34 EStG. ✓ Steuerersparnis ✓ Netto-Abfindung ✓ Kostenlos',
    url: 'https://gehaltly.de/rechner/abfindung/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de',
    }],
  },
};

export default function AbfindungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
