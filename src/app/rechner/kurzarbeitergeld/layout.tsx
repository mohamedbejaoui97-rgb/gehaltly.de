import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurzarbeitergeld Rechner 2026 - KUG berechnen',
  description: 'Kurzarbeitergeld berechnen 2026: Ermitteln Sie Ihr KUG bei Kurzarbeit. ✓ 60% oder 67% Berechnung ✓ Alle Steuerklassen ✓ Kostenlos',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/kurzarbeitergeld/',
  },
  openGraph: {
    title: 'Kurzarbeitergeld Rechner 2026 - KUG berechnen',
    description: 'Kurzarbeitergeld berechnen 2026: Ermitteln Sie Ihr KUG bei Kurzarbeit. ✓ 60% oder 67% Berechnung ✓ Alle Steuerklassen ✓ Kostenlos',
    url: 'https://gehaltly.de/rechner/kurzarbeitergeld/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function KurzarbeitergeldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
