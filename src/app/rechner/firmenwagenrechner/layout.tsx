import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firmenwagenrechner 2026 - Geldwerten Vorteil berechnen',
  description: 'Firmenwagenrechner 2026: Berechnen Sie den geldwerten Vorteil Ihres Firmenwagens. ✓ 1%-Regelung ✓ Fahrtenbuch ✓ Netto-Auswirkung',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/firmenwagenrechner/',
  },
  openGraph: {
    title: 'Firmenwagenrechner 2026 - Geldwerten Vorteil berechnen',
    description: 'Firmenwagenrechner 2026: Berechnen Sie den geldwerten Vorteil Ihres Firmenwagens. ✓ 1%-Regelung ✓ Fahrtenbuch ✓ Netto-Auswirkung',
    url: 'https://gehaltly.de/rechner/firmenwagenrechner/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function FirmenwagenrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
