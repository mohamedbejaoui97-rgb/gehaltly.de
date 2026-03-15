import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arbeitstagerechner 2026 - Arbeitstage berechnen',
  description: 'Arbeitstagerechner 2026: Arbeitstage pro Monat & Jahr berechnen. Alle Bundesländer mit Feiertagen. Für Steuererklärung & Pendlerpauschale.',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/arbeitstage/',
  },
  openGraph: {
    title: 'Arbeitstagerechner 2026 - Arbeitstage berechnen',
    description: 'Arbeitstagerechner 2026: Arbeitstage pro Monat & Jahr berechnen. Alle Bundesländer mit Feiertagen. Für Steuererklärung & Pendlerpauschale.',
    url: 'https://gehaltly.de/rechner/arbeitstage/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function ArbeitstageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
