import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arbeitgeberrechner 2026 - Personalkosten berechnen',
  description: 'Arbeitgeberrechner 2026: Berechnen Sie die gesamten Arbeitgeberkosten. ✓ Lohnnebenkosten ✓ Sozialabgaben ✓ Gesamtkosten pro Mitarbeiter',
  alternates: {
    canonical: 'https://gehaltly.de/rechner/arbeitgeber/',
  },
  openGraph: {
    title: 'Arbeitgeberrechner 2026 - Personalkosten berechnen',
    description: 'Arbeitgeberrechner 2026: Berechnen Sie die gesamten Arbeitgeberkosten. ✓ Lohnnebenkosten ✓ Sozialabgaben ✓ Gesamtkosten pro Mitarbeiter',
    url: 'https://gehaltly.de/rechner/arbeitgeber/',
  },
};

export default function ArbeitgeberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
