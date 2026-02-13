import { Metadata } from 'next'
import NettoRechnerClient from './NettoRechnerClient'

export const metadata: Metadata = {
  title: "Netto Rechner 2026 - Ihr Nettogehalt berechnen",
  description: "Netto Rechner 2026: Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt. ✓ Präzise Netto-Berechnung ✓ Alle Abzüge ✓ Kostenlos. Jetzt Netto ermitteln!",
  openGraph: {
    title: "Netto Rechner 2026 - Ihr Nettogehalt berechnen",
    description: "Berechnen Sie Ihr Nettogehalt mit unserem kostenlosen Netto Rechner 2026. Präzise und transparent.",
    url: "https://gehaltly.de/netto-rechner",
  },
};

export default function NettoRechnerPage() {
  return <NettoRechnerClient />
}
