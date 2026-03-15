import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rentenrechner 2026 - Rente berechnen',
  description: 'Rentenrechner 2026: Berechnen Sie Ihre gesetzliche Rente. ✓ Entgeltpunkte ✓ Rentenlücke ✓ Frühverrentung ✓ West & Ost ✓ Kostenlos',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/rente/',
  },
  openGraph: {
    title: 'Rentenrechner 2026 - Rente berechnen',
    description: 'Rentenrechner 2026: Berechnen Sie Ihre gesetzliche Rente. ✓ Entgeltpunkte ✓ Rentenlücke ✓ Frühverrentung ✓ West & Ost ✓ Kostenlos',
    url: 'https://gehaltly.de/rechner/rente/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function RentenrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
