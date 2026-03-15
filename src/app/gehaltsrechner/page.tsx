import { Metadata } from 'next'
import GehaltsrechnerClient from './GehaltsrechnerClient'

export const metadata: Metadata = {
  title: "Gehaltsrechner 2026 - Nettogehalt berechnen",
  description: "Gehaltsrechner 2026: Berechnen Sie Ihr Nettogehalt für Angestellte & Beamte. ✓ Alle Steuerklassen ✓ Alle Bundesländer ✓ Kostenlos.",
  alternates: {
    canonical: 'https://gehaltly.de/gehaltsrechner/',
  },
  openGraph: {
    title: "Gehaltsrechner 2026 - Nettogehalt berechnen",
    description: "Gehaltsrechner 2026 für Angestellte & Beamte: Berechnen Sie Ihr Nettogehalt aus dem Monats- oder Jahresgehalt.",
    url: "https://gehaltly.de/gehaltsrechner/",
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function GehaltsrechnerPage() {
  return <GehaltsrechnerClient />
}
