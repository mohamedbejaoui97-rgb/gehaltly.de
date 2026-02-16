import { Metadata } from 'next'
import NettoRechnerClient from './NettoRechnerClient'

export const metadata: Metadata = {
  title: "Netto Rechner 2026 - Abzüge berechnen & Netto optimieren",
  description: "Netto Rechner 2026: Verstehen Sie alle Abzüge vom Bruttogehalt und optimieren Sie Ihr Nettogehalt. ✓ Detaillierte Abzugsübersicht ✓ Optimierungstipps ✓ Kostenlos.",
  alternates: {
    canonical: 'https://gehaltly.de/netto-rechner/',
  },
  openGraph: {
    title: "Netto Rechner 2026 - Abzüge berechnen & Netto optimieren",
    description: "Netto Rechner 2026: Verstehen Sie alle Abzüge vom Bruttogehalt und optimieren Sie Ihr Nettogehalt.",
    url: "https://gehaltly.de/netto-rechner/",
  },
};

export default function NettoRechnerPage() {
  return <NettoRechnerClient />
}
