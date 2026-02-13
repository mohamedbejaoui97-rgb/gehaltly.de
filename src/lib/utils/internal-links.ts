/**
 * Internal link mappings for navigation and SEO
 * Only includes pages that actually exist in the app
 */

export interface InternalLink {
  title: string;
  href: string;
  description: string;
}

/**
 * Calculator pages that exist in the app
 */
export const CALCULATOR_LINKS: InternalLink[] = [
  {
    title: 'Brutto-Netto-Rechner',
    href: '/',
    description: 'Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt',
  },
  {
    title: 'Gehaltsrechner',
    href: '/gehaltsrechner',
    description: 'Umfassender Gehaltsrechner mit allen Steuerklassen',
  },
  {
    title: 'Lohnrechner',
    href: '/lohnrechner',
    description: 'Berechnen Sie Lohnsteuer und Sozialabgaben',
  },
  {
    title: 'Netto-Brutto-Rechner',
    href: '/netto-brutto-rechner',
    description: 'Berechnen Sie Ihr Bruttogehalt aus dem Nettogehalt',
  },
  {
    title: 'Netto-Rechner',
    href: '/netto-rechner',
    description: 'Schnelle Netto-Berechnung aus Ihrem Bruttolohn',
  },
  {
    title: 'Stundenlohnrechner',
    href: '/rechner/stundenlohn',
    description: 'Berechnen Sie Ihren Stundenlohn aus Monats- oder Jahresgehalt',
  },
  {
    title: 'Teilzeitrechner',
    href: '/rechner/teilzeit',
    description: 'Berechnen Sie Ihr Gehalt bei Teilzeitarbeit',
  },
  {
    title: 'Firmenwagenrechner',
    href: '/rechner/firmenwagenrechner',
    description: 'Berechnen Sie den geldwerten Vorteil Ihres Firmenwagens',
  },
  {
    title: 'Steuerklassenrechner',
    href: '/rechner/steuerklassenrechner',
    description: 'Finden Sie die optimale Steuerklassenkombination',
  },
  {
    title: 'Arbeitgeberrechner',
    href: '/rechner/arbeitgeber',
    description: 'Berechnen Sie die Arbeitgeber-Gesamtkosten',
  },
  {
    title: 'Lohnsteuerrechner',
    href: '/rechner/lohnsteuer',
    description: 'Berechnen Sie Ihre monatliche Lohnsteuer',
  },
];

/**
 * Ratgeber (guide) pages that exist in the app
 */
export const RATGEBER_LINKS: InternalLink[] = [
  {
    title: 'Brutto-Netto Unterschied',
    href: '/ratgeber/brutto-netto-unterschied',
    description: 'Was ist der Unterschied zwischen Brutto und Netto?',
  },
  {
    title: 'Steuerklassen',
    href: '/ratgeber/steuerklassen',
    description: 'Alles über die 6 deutschen Steuerklassen',
  },
  {
    title: 'Sozialabgaben',
    href: '/ratgeber/sozialabgaben',
    description: 'Übersicht der Sozialversicherungsbeiträge 2026',
  },
  {
    title: 'Brutto-Netto Rechnung',
    href: '/ratgeber/brutto-netto-rechnung',
    description: 'So funktioniert die Brutto-Netto-Berechnung',
  },
  {
    title: 'Elterngeld',
    href: '/ratgeber/elterngeld-brutto-netto',
    description: 'Elterngeld und Brutto-Netto erklärt',
  },
];

/**
 * Get related calculator links for internal linking
 * Excludes the current page from results
 */
export function getRelatedLinks(
  currentHref: string,
  count: number = 5
): InternalLink[] {
  return CALCULATOR_LINKS.filter((link) => link.href !== currentHref).slice(
    0,
    count
  );
}
