import { Metadata } from 'next'
import NettoBruttoRechnerClient from './NettoBruttoRechnerClient'

export const metadata: Metadata = {
  title: "Netto Brutto Rechner 2026 - Wunschnetto berechnen",
  description: "Netto Brutto Rechner 2026: Berechnen Sie Brutto aus Netto und Netto aus Brutto. ✓ Wunschnetto-Modus ✓ Alle Steuerklassen ✓ Kostenlos berechnen!",
  alternates: {
    canonical: 'https://gehaltly.de/netto-brutto-rechner/',
  },
  openGraph: {
    title: "Netto Brutto Rechner 2026 - Wunschnetto berechnen",
    description: "Berechnen Sie Brutto aus Netto mit unserem Netto Brutto Rechner 2026. Mit Wunschnetto-Modus.",
    url: "https://gehaltly.de/netto-brutto-rechner/",
  },
};

export default function NettoBruttoRechnerPage() {
  return <NettoBruttoRechnerClient />
}
