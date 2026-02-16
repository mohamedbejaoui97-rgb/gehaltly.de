import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steuerklassenrechner 2026 - Optimale Steuerklasse finden',
  description: 'Steuerklassenrechner 2026: Finden Sie die optimale Steuerklassenkombination für Ehepaare. ✓ Alle 6 Klassen ✓ Netto-Vergleich ✓ Kostenlos',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/steuerklassenrechner/',
  },
  openGraph: {
    title: 'Steuerklassenrechner 2026 - Optimale Steuerklasse finden',
    description: 'Steuerklassenrechner 2026: Finden Sie die optimale Steuerklassenkombination für Ehepaare. ✓ Alle 6 Klassen ✓ Netto-Vergleich ✓ Kostenlos',
    url: 'https://gehaltly.de/rechner/steuerklassenrechner/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function SteuerklassenrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
