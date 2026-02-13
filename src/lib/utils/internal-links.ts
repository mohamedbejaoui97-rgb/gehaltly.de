/**
 * Internal link mappings for navigation and SEO
 * Provides structured data for calculator pages, guide pages, and related links
 */

export interface InternalLink {
  title: string;
  href: string;
  description: string;
}

/**
 * List of 26 calculator pages for navigation and internal linking
 */
export const CALCULATOR_LINKS: InternalLink[] = [
  {
    title: 'Brutto-Netto-Rechner',
    href: '/',
    description: 'Berechnen Sie Ihr Nettogehalt aus dem Bruttogehalt',
  },
  {
    title: 'Netto-Brutto-Rechner',
    href: '/netto-brutto-rechner',
    description: 'Berechnen Sie Ihr Bruttogehalt aus dem Nettogehalt',
  },
  {
    title: 'Stundenlohnrechner',
    href: '/stundenlohn-rechner',
    description: 'Berechnen Sie Ihren Stundenlohn aus Monats- oder Jahresgehalt',
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
    title: 'Teilzeitrechner',
    href: '/teilzeitrechner',
    description: 'Berechnen Sie Ihr Gehalt bei Teilzeitarbeit',
  },
  {
    title: 'Midijob-Rechner',
    href: '/midijob-rechner',
    description: 'Berechnen Sie Abgaben für Midijobs (520-2000 Euro)',
  },
  {
    title: 'Minijob-Rechner',
    href: '/minijob-rechner',
    description: 'Berechnen Sie Abgaben für Minijobs (bis 520 Euro)',
  },
  {
    title: 'Kurzarbeitergeld-Rechner',
    href: '/kurzarbeitergeld-rechner',
    description: 'Berechnen Sie Ihr Kurzarbeitergeld',
  },
  {
    title: 'Arbeitslosengeld-Rechner',
    href: '/arbeitslosengeld-rechner',
    description: 'Berechnen Sie Ihr Arbeitslosengeld',
  },
  {
    title: 'Elterngeld-Rechner',
    href: '/elterngeld-rechner',
    description: 'Berechnen Sie Ihr Elterngeld',
  },
  {
    title: 'Krankengeld-Rechner',
    href: '/krankengeld-rechner',
    description: 'Berechnen Sie Ihr Krankengeld',
  },
  {
    title: 'Rentenrechner',
    href: '/rentenrechner',
    description: 'Berechnen Sie Ihre Nettorente',
  },
  {
    title: 'Abfindungsrechner',
    href: '/abfindungsrechner',
    description: 'Berechnen Sie die Steuer auf Ihre Abfindung',
  },
  {
    title: 'Firmenwagen-Rechner',
    href: '/firmenwagen-rechner',
    description: 'Berechnen Sie den geldwerten Vorteil Ihres Firmenwagens',
  },
  {
    title: 'Pendlerpauschale-Rechner',
    href: '/pendlerpauschale-rechner',
    description: 'Berechnen Sie Ihre Pendlerpauschale',
  },
  {
    title: 'Lohnsteuerermäßigung',
    href: '/lohnsteuerermassigung',
    description: 'Berechnen Sie mögliche Lohnsteuerermäßigungen',
  },
  {
    title: 'Steuerklassen-Rechner',
    href: '/steuerklassen-rechner',
    description: 'Finden Sie die optimale Steuerklassenkombination',
  },
  {
    title: 'Kirchensteuer-Rechner',
    href: '/kirchensteuer-rechner',
    description: 'Berechnen Sie Ihre Kirchensteuer',
  },
  {
    title: 'Solidaritätszuschlag-Rechner',
    href: '/solidaritatszuschlag-rechner',
    description: 'Berechnen Sie den Solidaritätszuschlag',
  },
  {
    title: 'Ehegattensplitting-Rechner',
    href: '/ehegattensplitting-rechner',
    description: 'Berechnen Sie Vorteile des Ehegattensplittings',
  },
  {
    title: 'Witwenrenten-Rechner',
    href: '/witwenrenten-rechner',
    description: 'Berechnen Sie Ihre Witwenrente',
  },
  {
    title: 'Waisenrenten-Rechner',
    href: '/waisenrenten-rechner',
    description: 'Berechnen Sie die Waisenrente',
  },
  {
    title: 'Kindergeld-Rechner',
    href: '/kindergeld-rechner',
    description: 'Berechnen Sie Ihr Kindergeld',
  },
  {
    title: 'Kinderfreibetrag-Rechner',
    href: '/kinderfreibetrag-rechner',
    description: 'Vergleichen Sie Kindergeld und Kinderfreibetrag',
  },
  {
    title: 'Unterhaltsrechner',
    href: '/unterhaltsrechner',
    description: 'Berechnen Sie Unterhaltszahlungen',
  },
];

/**
 * List of 5 guide/ratgeber pages for navigation and internal linking
 */
export const RATGEBER_LINKS: InternalLink[] = [
  {
    title: 'Steuerklassen',
    href: '/ratgeber/steuerklassen',
    description: 'Alles über deutsche Steuerklassen',
  },
  {
    title: 'Sozialversicherung',
    href: '/ratgeber/sozialversicherung',
    description: 'Übersicht der Sozialversicherungsbeiträge',
  },
  {
    title: 'Freibeträge',
    href: '/ratgeber/freibetrage',
    description: 'Steuerliche Freibeträge im Überblick',
  },
  {
    title: 'Gehaltsverhandlung',
    href: '/ratgeber/gehaltsverhandlung',
    description: 'Tipps für erfolgreiche Gehaltsverhandlungen',
  },
  {
    title: 'Nettolohn optimieren',
    href: '/ratgeber/nettolohn-optimieren',
    description: 'So optimieren Sie Ihren Nettolohn',
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
