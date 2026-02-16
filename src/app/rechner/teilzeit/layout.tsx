import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teilzeitrechner 2026 - Teilzeit-Gehalt berechnen',
  description: 'Teilzeitrechner 2026: Berechnen Sie Ihr Gehalt bei Teilzeitarbeit. ✓ Brutto-Netto ✓ Alle Steuerklassen ✓ Verschiedene Wochenstunden',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/teilzeit/',
  },
  openGraph: {
    title: 'Teilzeitrechner 2026 - Teilzeit-Gehalt berechnen',
    description: 'Teilzeitrechner 2026: Berechnen Sie Ihr Gehalt bei Teilzeitarbeit. ✓ Brutto-Netto ✓ Alle Steuerklassen ✓ Verschiedene Wochenstunden',
    url: 'https://gehaltly.de/rechner/teilzeit/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function TeilzeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
