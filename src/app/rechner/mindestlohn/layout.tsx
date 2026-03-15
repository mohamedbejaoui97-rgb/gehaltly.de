import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mindestlohnrechner 2026 - Gehalt berechnen',
  description: 'Mindestlohnrechner 2026: Berechnen Sie Ihr Netto-Gehalt beim Mindestlohn von 13,95 €/h. ✓ Minijob-Check ✓ Midijob-Check ✓ Alle Steuerklassen',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/mindestlohn/',
  },
  openGraph: {
    title: 'Mindestlohnrechner 2026 - Gehalt berechnen',
    description: 'Mindestlohnrechner 2026: Berechnen Sie Ihr Netto-Gehalt beim Mindestlohn von 13,95 €/h. ✓ Minijob-Check ✓ Midijob-Check ✓ Alle Steuerklassen',
    url: 'https://gehaltly.de/rechner/mindestlohn/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de',
    }],
  },
};

export default function MindestlohnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
