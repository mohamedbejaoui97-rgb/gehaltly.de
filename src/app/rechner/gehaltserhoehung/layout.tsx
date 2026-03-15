import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gehaltserhöhungsrechner 2026 - Netto-Effekt berechnen',
  description: 'Berechnen Sie den Netto-Effekt Ihrer Gehaltserhöhung 2026. Wie viel bleibt von der Brutto-Erhöhung netto übrig? ✓ Alle Steuerklassen ✓ Kostenlos',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/gehaltserhoehung/',
  },
  openGraph: {
    title: 'Gehaltserhöhungsrechner 2026 - Netto-Effekt berechnen',
    description: 'Berechnen Sie den Netto-Effekt Ihrer Gehaltserhöhung 2026. Wie viel bleibt von der Brutto-Erhöhung netto übrig? ✓ Alle Steuerklassen ✓ Kostenlos',
    url: 'https://gehaltly.de/rechner/gehaltserhoehung/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function GehaltserhoehungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
