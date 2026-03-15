import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elterngeldrechner 2026 - Elterngeld berechnen',
  description: 'Kostenloser Elterngeldrechner 2026: Berechnen Sie Ihr Elterngeld, Ersatzrate und Bezugsdauer. ✓ Basiselterngeld ✓ ElterngeldPlus ✓ Geschwisterbonus',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/elterngeld/',
  },
  openGraph: {
    title: 'Elterngeldrechner 2026 - Elterngeld berechnen',
    description: 'Kostenloser Elterngeldrechner 2026: Berechnen Sie Ihr Elterngeld, Ersatzrate und Bezugsdauer. ✓ Basiselterngeld ✓ ElterngeldPlus ✓ Geschwisterbonus',
    url: 'https://gehaltly.de/rechner/elterngeld/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function ElterngeldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
