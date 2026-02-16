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
    description: 'Der universelle Brutto-Netto-Rechner für alle Arbeitnehmer',
  },
  {
    title: 'Gehaltsrechner',
    href: '/gehaltsrechner',
    description: 'Nettogehalt für Angestellte & Beamte berechnen',
  },
  {
    title: 'Lohnrechner',
    href: '/lohnrechner',
    description: 'Stundenlohn & Nettolohn für Lohnempfänger berechnen',
  },
  {
    title: 'Netto-Brutto-Rechner',
    href: '/netto-brutto-rechner',
    description: 'Wunschnetto eingeben und benötigtes Bruttogehalt berechnen',
  },
  {
    title: 'Netto-Rechner',
    href: '/netto-rechner',
    description: 'Alle Abzüge verstehen und Netto optimieren',
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
