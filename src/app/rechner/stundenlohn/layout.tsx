import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stundenlohnrechner 2026 - Stundenlohn berechnen',
  description: 'Kostenloser Stundenlohnrechner 2026: Berechnen Sie Ihren Stundenlohn aus Monats- oder Jahresgehalt. ✓ Netto-Berechnung ✓ Alle Steuerklassen ✓ Kostenlos',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/stundenlohn/',
  },
  openGraph: {
    title: 'Stundenlohnrechner 2026 - Stundenlohn berechnen',
    description: 'Kostenloser Stundenlohnrechner 2026: Berechnen Sie Ihren Stundenlohn aus Monats- oder Jahresgehalt. ✓ Netto-Berechnung ✓ Alle Steuerklassen ✓ Kostenlos',
    url: 'https://gehaltly.de/rechner/stundenlohn/',
  },
};

export default function StundenlohnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
