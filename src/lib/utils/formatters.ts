/**
 * German locale formatters for currency, percentages, and numbers
 * All formatters use German formatting conventions (comma for decimal, period for thousands)
 */

/**
 * Format amount as Euro currency with 2 decimal places
 * @example formatEuro(1234.56) => "1.234,56 €"
 */
export function formatEuro(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format amount as Euro currency with no decimal places (rounded)
 * @example formatEuroRound(1234.56) => "1.235 €"
 */
export function formatEuroRound(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number as percentage with 1 decimal place
 * @example formatPercent(0.156) => "15,6 %"
 */
export function formatPercent(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Format number with German locale (comma decimal, period thousands)
 * @example formatNumber(1234.5) => "1.234,5"
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(value);
}
