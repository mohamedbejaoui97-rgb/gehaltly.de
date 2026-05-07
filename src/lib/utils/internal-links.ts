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
  {
    title: 'Brutto-Netto-Tabelle',
    href: '/brutto-netto-tabelle',
    description: 'Nettolohn für alle 6 Steuerklassen auf einen Blick',
  },
  {
    title: 'Gehaltserhöhungsrechner',
    href: '/rechner/gehaltserhoehung',
    description: 'Berechnen Sie den Netto-Effekt Ihrer Gehaltserhöhung',
  },
  {
    title: 'Arbeitslosengeld-Rechner',
    href: '/rechner/arbeitslosengeld',
    description: 'Berechnen Sie Ihren Anspruch auf Arbeitslosengeld I',
  },
  {
    title: 'Pendlerpauschale-Rechner',
    href: '/rechner/pendlerpauschale',
    description: 'Berechnen Sie Ihre Pendlerpauschale und Steuerersparnis',
  },
  {
    title: 'Mindestlohnrechner',
    href: '/rechner/mindestlohn',
    description: 'Berechnen Sie Ihr Gehalt auf Basis des Mindestlohns 2026',
  },
  {
    title: 'Arbeitstagerechner',
    href: '/rechner/arbeitstage',
    description: 'Arbeitstage 2026 nach Bundesland berechnen',
  },
  {
    title: 'Abfindungsrechner',
    href: '/rechner/abfindung',
    description: 'Abfindung versteuern mit Fünftelregelung berechnen',
  },
  {
    title: 'Elterngeldrechner',
    href: '/rechner/elterngeld',
    description: 'Elterngeld und ElterngeldPlus berechnen',
  },
  {
    title: 'Kurzarbeitergeld-Rechner',
    href: '/rechner/kurzarbeitergeld',
    description: 'Kurzarbeitergeld (KUG) bei reduzierter Arbeitszeit berechnen',
  },
  {
    title: 'Rentenrechner',
    href: '/rechner/rente',
    description: 'Gesetzliche Rente und Rentenlücke berechnen',
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
  {
    title: 'Mehr Netto vom Brutto',
    href: '/ratgeber/mehr-netto-vom-brutto',
    description: '10 bewährte Strategien für mehr Netto in 2026',
  },
  {
    title: 'Gehaltsverhandlung',
    href: '/ratgeber/gehaltsverhandlung',
    description: '7 bewährte Tipps für eine erfolgreiche Gehaltsverhandlung',
  },
  {
    title: 'Steuerklasse wechseln',
    href: '/ratgeber/steuerklasse-wechseln',
    description: 'Wann lohnt sich ein Steuerklassenwechsel?',
  },
  {
    title: 'Steuererklärung Tipps',
    href: '/ratgeber/steuererklarung-tipps',
    description: 'Die besten Tipps für Ihre Steuererklärung 2026',
  },
  {
    title: 'Abfindung versteuern',
    href: '/ratgeber/abfindung-versteuern',
    description: 'Fünftelregelung und Steueroptimierung bei Abfindungen',
  },
  {
    title: 'Minijob & Midijob',
    href: '/ratgeber/minijob-midijob',
    description: 'Regeln, Grenzen und Abgaben für Minijob & Midijob 2026',
  },
];

/**
 * Berufe (profession salary) pages
 */
export const BERUFE_LINKS: InternalLink[] = [
  {
    title: 'Gehalt Arzt',
    href: '/berufe/arzt',
    description: 'Assistenzarzt, Facharzt, Oberarzt und Chefarzt im Gehaltsvergleich',
  },
  {
    title: 'Gehalt Steuerberater',
    href: '/berufe/steuerberater',
    description: 'Steuerberater-Gehalt in Kanzlei, Big Four und selbstständig',
  },
  {
    title: 'Gehalt Ingenieur',
    href: '/berufe/ingenieur',
    description: 'Durchschnittsgehalt und Brutto-Netto für Ingenieure',
  },
  {
    title: 'Gehalt Softwareentwickler',
    href: '/berufe/softwareentwickler',
    description: 'IT-Gehalt und Brutto-Netto für Softwareentwickler',
  },
  {
    title: 'Gehalt Polizist',
    href: '/berufe/polizist',
    description: 'Polizei-Besoldung A7-A13 mit Polizeizulage und Schichtzuschlägen',
  },
  {
    title: 'Bundeswehr Gehalt',
    href: '/berufe/soldat-bundeswehr',
    description: 'Soldaten-Besoldung A3-A16 mit Verpflichtungsprämie und AVZ',
  },
  {
    title: 'Gehalt Feuerwehrmann',
    href: '/berufe/feuerwehrmann',
    description: 'Berufsfeuerwehr und Werkfeuerwehr - Besoldung und Zulagen',
  },
  {
    title: 'Gehalt Lehrer',
    href: '/berufe/lehrer',
    description: 'Lehrergehalt nach Schulform, Besoldung und Bundesland',
  },
  {
    title: 'Gehalt Erzieher',
    href: '/berufe/erzieher',
    description: 'Erzieher-Gehalt nach TVöD SuE S8a-S15 mit Stufenaufstieg',
  },
  {
    title: 'Gehalt Mechatroniker',
    href: '/berufe/mechatroniker',
    description: 'Mechatroniker-Gehalt nach IG Metall Tarif mit Schichtzulagen',
  },
  {
    title: 'Gehalt Krankenschwester',
    href: '/berufe/krankenschwester',
    description: 'Pflegegehalt und Brutto-Netto für Pflegefachkräfte',
  },
  {
    title: 'Gehalt Altenpfleger',
    href: '/berufe/altenpfleger',
    description: 'Altenpflege-Gehalt nach TVöD-P und AVR mit Schichtzulagen',
  },
  {
    title: 'Gehalt Kaufmann/Kauffrau',
    href: '/berufe/kaufmann',
    description: 'Gehalt und Brutto-Netto für kaufmännische Berufe',
  },
];

/**
 * Bundesland pages
 */
export const BUNDESLAND_LINKS: InternalLink[] = [
  {
    title: 'Brutto-Netto Bayern',
    href: '/bundesland/bayern',
    description: '8 % Kirchensteuer, höchste Durchschnittsgehälter Deutschlands',
  },
  {
    title: 'Brutto-Netto Baden-Württemberg',
    href: '/bundesland/baden-wuerttemberg',
    description: '8 % Kirchensteuer, Industriestandort mit Mercedes, Porsche, Bosch',
  },
  {
    title: 'Brutto-Netto NRW',
    href: '/bundesland/nordrhein-westfalen',
    description: 'Bevölkerungsreichstes Bundesland mit Ruhrgebiet und Rheinland',
  },
  {
    title: 'Brutto-Netto Berlin',
    href: '/bundesland/berlin',
    description: 'Hauptstadt mit Tech-Hub und steigenden Gehältern',
  },
];

/**
 * Informational / company pages
 */
export const INFO_LINKS: InternalLink[] = [
  {
    title: 'Über uns',
    href: '/ueber-uns',
    description: 'Erfahren Sie mehr über gehaltly.de, unsere Mission und Expertise',
  },
  {
    title: 'Redaktion',
    href: '/redaktion',
    description: 'Das Team und der Verantwortliche Redakteur hinter gehaltly.de',
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
