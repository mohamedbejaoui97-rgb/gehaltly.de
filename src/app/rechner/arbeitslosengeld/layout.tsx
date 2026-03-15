import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arbeitslosengeld Rechner 2026 - ALG I berechnen',
  description: 'Arbeitslosengeld I berechnen: Wie viel ALG I steht Ihnen 2026 zu? 60% oder 67% vom Netto. ✓ Alle Steuerklassen ✓ Kostenlos.',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/arbeitslosengeld/',
  },
  openGraph: {
    title: 'Arbeitslosengeld Rechner 2026 - ALG I berechnen',
    description: 'Arbeitslosengeld I berechnen: Wie viel ALG I steht Ihnen 2026 zu? ✓ Kostenlos.',
    url: 'https://gehaltly.de/rechner/arbeitslosengeld/',
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 446,
      alt: 'gehaltly.de',
    }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
