import { Metadata } from 'next'
import GehaltsrechnerClient from './GehaltsrechnerClient'

export const metadata: Metadata = {
  title: "Gehaltsrechner 2026 - Nettogehalt kostenlos berechnen",
  description: "Gehaltsrechner 2026: Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt. ✓ Präzise Berechnung ✓ Alle Steuerklassen ✓ Kostenlos. Jetzt Gehalt berechnen!",
  alternates: {
    canonical: 'https://gehaltly.de/gehaltsrechner',
  },
  openGraph: {
    title: "Gehaltsrechner 2026 - Nettogehalt kostenlos berechnen",
    description: "Berechnen Sie Ihr Nettogehalt mit unserem kostenlosen Gehaltsrechner 2026. Präzise und einfach.",
    url: "https://gehaltly.de/gehaltsrechner",
  },
};

export default function GehaltsrechnerPage() {
  return <GehaltsrechnerClient />
}
