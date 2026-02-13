import { Metadata } from "next";
import { AMOUNT_PAGES, getNeighborAmounts } from "@/lib/utils/amount-pages";
import { calculateGermanTax, DEFAULT_INPUT } from "@/lib/tax";
import AmountPageClient from "./AmountPageClient";

interface Props {
  params: {
    amount: string;
  };
}

/**
 * Generate static params for all 38 amount pages
 */
export async function generateStaticParams() {
  return AMOUNT_PAGES.map((page) => ({
    amount: page.amount.toString(),
  }));
}

/**
 * Generate metadata for each amount page
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const amount = parseInt(params.amount);

  return {
    title: `${amount} € Brutto in Netto - Gehaltsrechner 2026 | gehaltly.de`,
    description: `${amount} Euro Brutto sind wieviel Netto? Berechnen Sie kostenlos, was von ${amount} € Bruttogehalt übrig bleibt. ✓ Alle Steuerklassen ✓ Aktuell 2026`,
    openGraph: {
      title: `${amount} € Brutto in Netto - Gehaltsrechner 2026`,
      description: `Berechnen Sie kostenlos, was von ${amount} Euro Bruttogehalt nach Abzügen übrig bleibt.`,
      url: `https://gehaltly.de/${amount}-brutto-in-netto`,
    },
  };
}

/**
 * Pre-calculate result for default settings (Steuerklasse 1, Bayern)
 */
function getPreCalculatedResult(amount: number) {
  return calculateGermanTax({
    ...DEFAULT_INPUT,
    bruttoeinkommen: amount,
  });
}

/**
 * Server Component - handles static generation and data preparation
 */
export default function AmountPage({ params }: Props) {
  const amount = parseInt(params.amount);
  const neighbors = getNeighborAmounts(amount);
  const preCalculatedResult = getPreCalculatedResult(amount);

  return (
    <AmountPageClient
      amount={amount}
      neighbors={neighbors}
      preCalculatedResult={preCalculatedResult}
    />
  );
}
