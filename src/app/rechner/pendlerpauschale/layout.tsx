import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendlerpauschale Rechner 2026 - Fahrtkosten berechnen',
  description: 'Pendlerpauschale 2026 berechnen: 0,30 €/km + 0,38 €/km ab 21. km. Steuerersparnis sofort ermitteln. ✓ Kostenlos ✓ Aktuell',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/pendlerpauschale/',
  },
  openGraph: {
    title: 'Pendlerpauschale Rechner 2026 - Fahrtkosten berechnen',
    description: 'Pendlerpauschale 2026 berechnen: 0,30 €/km + 0,38 €/km ab 21. km. Steuerersparnis sofort ermitteln. ✓ Kostenlos ✓ Aktuell',
    url: 'https://gehaltly.de/rechner/pendlerpauschale/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function PendlerpauschaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
