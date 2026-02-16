import { Metadata } from 'next'
import LohnrechnerClient from './LohnrechnerClient'

export const metadata: Metadata = {
  title: "Lohnrechner 2026 - Stundenlohn & Nettolohn berechnen",
  description: "Lohnrechner 2026: Berechnen Sie Ihren Nettolohn aus Stundenlohn oder Monatslohn. ✓ Mindestlohn 2026 ✓ Stundenlohn-Umrechnung ✓ Kostenlos.",
  alternates: {
    canonical: 'https://gehaltly.de/lohnrechner/',
  },
  openGraph: {
    title: "Lohnrechner 2026 - Stundenlohn & Nettolohn berechnen",
    description: "Lohnrechner 2026: Berechnen Sie Ihren Nettolohn aus Stundenlohn oder Monatslohn. Für Stundenlöhner und Teilzeitkräfte.",
    url: "https://gehaltly.de/lohnrechner/",
  },
};

export default function LohnrechnerPage() {
  return <LohnrechnerClient />
}
