import { Metadata } from 'next'
import LohnrechnerClient from './LohnrechnerClient'

export const metadata: Metadata = {
  title: "Lohnrechner 2026 - Nettolohn berechnen",
  description: "Lohnrechner 2026: Berechnen Sie Ihren Nettolohn aus dem Bruttolohn. ✓ Stundenlohn berechnen ✓ Alle Steuerklassen ✓ Kostenlos. Jetzt Nettolohn ermitteln!",
  alternates: {
    canonical: 'https://gehaltly.de/lohnrechner',
  },
  openGraph: {
    title: "Lohnrechner 2026 - Nettolohn berechnen",
    description: "Berechnen Sie Ihren Nettolohn mit unserem kostenlosen Lohnrechner 2026. Für Stundenlohn und Monatslohn.",
    url: "https://gehaltly.de/lohnrechner",
  },
};

export default function LohnrechnerPage() {
  return <LohnrechnerClient />
}
