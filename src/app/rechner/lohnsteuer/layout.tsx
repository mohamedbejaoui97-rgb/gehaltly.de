import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lohnsteuerrechner 2026 - Lohnsteuer berechnen',
  description: 'Lohnsteuerrechner 2026: Berechnen Sie Ihre monatliche Lohnsteuer. ✓ Alle Steuerklassen ✓ Solidaritätszuschlag ✓ Kirchensteuer',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/lohnsteuer/',
  },
  openGraph: {
    title: 'Lohnsteuerrechner 2026 - Lohnsteuer berechnen',
    description: 'Lohnsteuerrechner 2026: Berechnen Sie Ihre monatliche Lohnsteuer. ✓ Alle Steuerklassen ✓ Solidaritätszuschlag ✓ Kirchensteuer',
    url: 'https://gehaltly.de/rechner/lohnsteuer/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function LohnsteuerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
