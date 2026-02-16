import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AMOUNT_PAGES, getNeighborAmounts } from "@/lib/utils/amount-pages";
import { calculateGermanTax, DEFAULT_INPUT } from "@/lib/tax";
import AmountPageClient from "./AmountPageClient";

interface Props {
  params: {
    slug: string;
  };
}

/**
 * Parse amount from slug like "3000-brutto-in-netto" → 3000
 */
function parseAmountFromSlug(slug: string): number | null {
  const match = slug.match(/^(\d+)-brutto-in-netto$/);
  if (!match) return null;
  const amount = parseInt(match[1]);
  if (AMOUNT_PAGES.some((p) => p.amount === amount)) return amount;
  return null;
}

/**
 * Generate static params for all 38 amount pages
 */
export async function generateStaticParams() {
  return AMOUNT_PAGES.map((page) => ({
    slug: `${page.amount}-brutto-in-netto`,
  }));
}

/**
 * Generate metadata for each amount page
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const amount = parseAmountFromSlug(params.slug);
  if (!amount) return {};

  const isAnnual = isAnnualAmount(amount);
  const periodLabel = isAnnual ? 'Jahresgehalt' : 'Bruttogehalt';

  return {
    title: `${amount} € Brutto in Netto - Gehaltsrechner 2026`,
    description: `${amount} Euro Brutto sind wieviel Netto? Berechnen Sie kostenlos, was von ${amount} € ${periodLabel} übrig bleibt. ✓ Alle Steuerklassen ✓ Aktuell 2026`,
    alternates: {
      canonical: `https://gehaltly.de/${amount}-brutto-in-netto/`,
    },
    openGraph: {
      title: `${amount} € Brutto in Netto - Gehaltsrechner 2026`,
      description: `Berechnen Sie kostenlos, was von ${amount} Euro Bruttogehalt nach Abzügen übrig bleibt.`,
      url: `https://gehaltly.de/${amount}-brutto-in-netto/`,
    },
  };
}

/**
 * Amounts >= 15000 are treated as annual salary (Jahresgehalt),
 * since users searching "50000 brutto in netto" mean annual income.
 */
function isAnnualAmount(amount: number): boolean {
  return amount >= 15000;
}

/**
 * Pre-calculate result for default settings (Steuerklasse 1, Bayern)
 */
function getPreCalculatedResult(amount: number) {
  return calculateGermanTax({
    ...DEFAULT_INPUT,
    bruttoeinkommen: amount,
    abrechnungszeitraum: isAnnualAmount(amount) ? 'jahr' : 'monat',
  });
}

/**
 * Server Component - handles static generation and data preparation
 */
export default function AmountPage({ params }: Props) {
  const amount = parseAmountFromSlug(params.slug);
  if (!amount) notFound();

  const neighbors = getNeighborAmounts(amount);
  const preCalculatedResult = getPreCalculatedResult(amount);

  const isAnnual = isAnnualAmount(amount);

  return (
    <AmountPageClient
      amount={amount}
      neighbors={neighbors}
      preCalculatedResult={preCalculatedResult}
      isAnnual={isAnnual}
    />
  );
}
