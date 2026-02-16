import { Metadata } from 'next'
import GehaltsrechnerClient from './GehaltsrechnerClient'

export const metadata: Metadata = {
  title: "Gehaltsrechner 2026 - Nettogehalt für Angestellte berechnen",
  description: "Gehaltsrechner 2026 für Angestellte & Beamte: Berechnen Sie Ihr Nettogehalt aus dem Monats- oder Jahresgehalt. ✓ Gehaltsvergleich ✓ Alle Steuerklassen ✓ Kostenlos.",
  alternates: {
    canonical: 'https://gehaltly.de/gehaltsrechner/',
  },
  openGraph: {
    title: "Gehaltsrechner 2026 - Nettogehalt für Angestellte berechnen",
    description: "Gehaltsrechner 2026 für Angestellte & Beamte: Berechnen Sie Ihr Nettogehalt aus dem Monats- oder Jahresgehalt.",
    url: "https://gehaltly.de/gehaltsrechner/",
  },
};

export default function GehaltsrechnerPage() {
  return <GehaltsrechnerClient />
}
