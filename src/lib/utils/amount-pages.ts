/**
 * List of 38 salary amounts with high search volume
 * These amounts are used to generate dedicated salary calculator pages
 * for SEO optimization (e.g., /1500-euro-brutto-in-netto)
 */

export interface AmountPage {
  amount: number;
  slug: string;
}

/**
 * Array of 38 salary amounts from 1500 to 100000 EUR
 * Selected based on German salary search volume data
 */
export const AMOUNT_PAGES: AmountPage[] = [
  { amount: 1500, slug: '1500-euro-brutto-in-netto' },
  { amount: 2000, slug: '2000-euro-brutto-in-netto' },
  { amount: 2500, slug: '2500-euro-brutto-in-netto' },
  { amount: 3000, slug: '3000-euro-brutto-in-netto' },
  { amount: 3500, slug: '3500-euro-brutto-in-netto' },
  { amount: 4000, slug: '4000-euro-brutto-in-netto' },
  { amount: 4500, slug: '4500-euro-brutto-in-netto' },
  { amount: 5000, slug: '5000-euro-brutto-in-netto' },
  { amount: 5500, slug: '5500-euro-brutto-in-netto' },
  { amount: 6000, slug: '6000-euro-brutto-in-netto' },
  { amount: 7000, slug: '7000-euro-brutto-in-netto' },
  { amount: 8000, slug: '8000-euro-brutto-in-netto' },
  { amount: 9000, slug: '9000-euro-brutto-in-netto' },
  { amount: 10000, slug: '10000-euro-brutto-in-netto' },
  { amount: 15000, slug: '15000-euro-brutto-in-netto' },
  { amount: 20000, slug: '20000-euro-brutto-in-netto' },
  { amount: 25000, slug: '25000-euro-brutto-in-netto' },
  { amount: 30000, slug: '30000-euro-brutto-in-netto' },
  { amount: 35000, slug: '35000-euro-brutto-in-netto' },
  { amount: 40000, slug: '40000-euro-brutto-in-netto' },
  { amount: 45000, slug: '45000-euro-brutto-in-netto' },
  { amount: 50000, slug: '50000-euro-brutto-in-netto' },
  { amount: 55000, slug: '55000-euro-brutto-in-netto' },
  { amount: 60000, slug: '60000-euro-brutto-in-netto' },
  { amount: 65000, slug: '65000-euro-brutto-in-netto' },
  { amount: 70000, slug: '70000-euro-brutto-in-netto' },
  { amount: 75000, slug: '75000-euro-brutto-in-netto' },
  { amount: 80000, slug: '80000-euro-brutto-in-netto' },
  { amount: 85000, slug: '85000-euro-brutto-in-netto' },
  { amount: 90000, slug: '90000-euro-brutto-in-netto' },
  { amount: 95000, slug: '95000-euro-brutto-in-netto' },
  { amount: 100000, slug: '100000-euro-brutto-in-netto' },
  { amount: 110000, slug: '110000-euro-brutto-in-netto' },
  { amount: 120000, slug: '120000-euro-brutto-in-netto' },
  { amount: 130000, slug: '130000-euro-brutto-in-netto' },
  { amount: 140000, slug: '140000-euro-brutto-in-netto' },
  { amount: 150000, slug: '150000-euro-brutto-in-netto' },
  { amount: 200000, slug: '200000-euro-brutto-in-netto' },
];

/**
 * Get neighboring amounts for pagination/navigation
 * Returns previous and next amount in the list
 */
export function getNeighborAmounts(currentAmount: number): {
  previous: AmountPage | null;
  next: AmountPage | null;
} {
  const currentIndex = AMOUNT_PAGES.findIndex(
    (page) => page.amount === currentAmount
  );

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? AMOUNT_PAGES[currentIndex - 1] : null,
    next:
      currentIndex < AMOUNT_PAGES.length - 1
        ? AMOUNT_PAGES[currentIndex + 1]
        : null,
  };
}
