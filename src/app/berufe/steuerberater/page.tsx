import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Gehalt Steuerberater 2026 - Brutto Netto Kanzlei Selbstständig | gehaltly.de',
  description:
    'Was verdient ein Steuerberater 2026? Brutto-Netto-Berechnung für angestellte und selbstständige Steuerberater. Gehälter in Kanzlei und Big Four mit Karriereperspektive.',
  alternates: { canonical: 'https://gehaltly.de/berufe/steuerberater/' },
  openGraph: {
    title: 'Gehalt Steuerberater 2026 - Brutto Netto',
    description:
      'Steuerberater-Gehalt 2026: angestellt 55.000-85.000 €, Partner Big Four 200.000+ €. Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/steuerberater/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehalt Steuerberater',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'steuerberater',
  title: 'Steuerberater',
  pageH1: 'Gehalt als Steuerberater 2026 - Brutto Netto in Kanzlei & Big Four',
  intro:
    'Steuerberater zählen 2026 in Deutschland zu den finanziell attraktivsten freien Berufen. Angestellte Steuerberater verdienen 55.000 bis 85.000 Euro pro Jahr in mittelständischen Kanzleien, in den Big Four (PwC, EY, KPMG, Deloitte) sind 90.000-130.000 Euro üblich. Selbstständige Kanzleiinhaber erzielen Honorarumsätze von 150.000 bis weit über 500.000 Euro - abhängig von Mandantenstruktur und Spezialisierung.',
  metaTitle: 'Gehalt Steuerberater 2026 - Brutto Netto Angestellt & Partner',
  metaDescription:
    'Steuerberater-Gehalt 2026: 55.000-85.000 € angestellt, 200.000+ € als Partner. Brutto-Netto-Berechnung.',
  einstiegsgehalt: '55.000 €',
  durchschnittsgehalt: '70.000 - 95.000 €',
  topGehalt: '200.000+ €',
  topGehaltLabel: 'Partner / Eigene Kanzlei',
  avgYearly: 80000,
  avgMonthly: 6667,
  occupationDescription:
    'Steuerberater beraten natürliche und juristische Personen in steuerlichen und betriebswirtschaftlichen Fragen. Sie erstellen Jahresabschlüsse, Steuererklärungen, vertreten Mandanten gegenüber dem Finanzamt und beraten zu Steueroptimierung, Unternehmensgründung und Nachfolge.',
  schemaMedian: 80000,
  schemaP10: 55000,
  schemaP90: 150000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'Kanzleigröße',
      description:
        'Mittelständische Kanzlei (5-20 Mitarbeiter): 55.000-75.000 €. Mittelgroße Kanzlei (20-100 Mitarbeiter): 70.000-95.000 €. Big Four (PwC, EY, KPMG, Deloitte): 90.000-130.000 € als Senior bzw. Manager.',
    },
    {
      icon: 'TrendingUp',
      title: 'Karrierestufe',
      description:
        'Berufseinsteiger nach StB-Examen: 55.000-65.000 €. Senior Manager: 80.000-110.000 €. Director: 120.000-160.000 €. Partner: 200.000-500.000+ € (gewinnabhängig).',
    },
    {
      icon: 'GraduationCap',
      title: 'Spezialisierung',
      description:
        'Internationales Steuerrecht, M&A-Tax, Verrechnungspreise, Erbschaftsteuer, Konzernsteuern und Tax Technology bringen 10-25 % Aufschlag. Fachberater-Titel (z.B. für Internationales Steuerrecht) erhöhen die Verhandlungsmacht.',
    },
    {
      icon: 'MapPin',
      title: 'Standort',
      description:
        'München, Frankfurt und Hamburg zahlen als Finanz- und Wirtschaftsstandorte 10-20 % über dem Bundesdurchschnitt. Berlin und Stuttgart liegen im oberen Mittelfeld. Ostdeutsche Mittelstädte 10-15 % darunter.',
    },
  ],
  bundeslandData: [
    { land: 'Bayern (München)', gehalt: '90.000 €', diff: '+13 %' },
    { land: 'Hessen (Frankfurt)', gehalt: '88.000 €', diff: '+10 %' },
    { land: 'Baden-Württemberg', gehalt: '85.000 €', diff: '+6 %' },
    { land: 'Hamburg', gehalt: '84.000 €', diff: '+5 %' },
    { land: 'Nordrhein-Westfalen', gehalt: '80.000 €', diff: '0 %' },
    { land: 'Berlin', gehalt: '78.000 €', diff: '-3 %' },
    { land: 'Niedersachsen', gehalt: '76.000 €', diff: '-5 %' },
    { land: 'Sachsen', gehalt: '70.000 €', diff: '-13 %' },
    { land: 'Mecklenburg-Vorpommern', gehalt: '68.000 €', diff: '-15 %' },
  ],
  karriereIntro:
    'Steuerberater profitieren 2026 vom anhaltenden Fachkräftemangel und der Komplexität des deutschen Steuerrechts. Wichtige Trends:',
  karriereItems: [
    {
      title: 'Partner-Track in Big Four',
      description:
        'Der typische Weg vom Senior Associate zum Partner dauert in den Big Four 12-15 Jahre. Partner verdienen 200.000-800.000 € pro Jahr abhängig von Performance und Office-Größe.',
    },
    {
      title: 'Eigene Kanzlei',
      description:
        'Mit eigener Kanzlei und 5-15 Mitarbeitern sind Honorarumsätze von 800.000-2.000.000 €/Jahr realistisch. Nach Abzug der Personal- und Sachkosten (typisch 60-70 %) bleiben 250.000-600.000 € Gewinn vor Steuer.',
    },
    {
      title: 'Tax Technology & Digitalisierung',
      description:
        'Steuerberater mit Fokus auf Tax-Technology, Datenanalyse und Automatisierung (DATEV-Schnittstellen, KI-Buchhaltung) verdienen häufig 15-25 % über klassischem Tax-Profil.',
    },
    {
      title: 'Internationales Steuerrecht & M&A',
      description:
        'Spezialisten für internationales Steuerrecht, Verrechnungspreise und M&A-Tax sind besonders gefragt - Senior Manager erreichen 110.000-130.000 €, Partner über 350.000 €.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Steuerberater 2026?',
      answer:
        'Ein angestellter Steuerberater verdient 2026 in Deutschland zwischen 55.000 und 95.000 Euro brutto pro Jahr - in mittelständischen Kanzleien am unteren, in Big Four (PwC, EY, KPMG, Deloitte) am oberen Ende. Partner und Kanzleiinhaber erreichen 200.000-500.000+ Euro.',
    },
    {
      question: 'Wie viel Netto bleibt einem Steuerberater?',
      answer:
        'Bei einem Bruttogehalt von 6.667 €/Monat (Steuerklasse 1) bleiben rund 3.900-4.100 € netto. In Steuerklasse 3 (verheiratet, ein Verdiener) sind es etwa 4.500-4.700 €. Selbstständige Steuerberater zahlen freiwillig in die Rentenversicherung ein und können über das Versorgungswerk vorsorgen.',
    },
    {
      question: 'Wie viel verdient ein Steuerberater bei den Big Four?',
      answer:
        'In den Big Four (PwC, EY, KPMG, Deloitte) verdienen Senior Associates 70.000-85.000 €, Manager 90.000-110.000 €, Senior Manager 110.000-140.000 €, Director 150.000-180.000 € und Partner 250.000-800.000+ €. Boni machen typischerweise 10-30 % des Grundgehalts aus.',
    },
    {
      question: 'Lohnt sich die eigene Steuerberatungskanzlei?',
      answer:
        'Ja, finanziell sehr - aber bei hohem unternehmerischem Aufwand. Eigene Kanzleien (10-15 Mitarbeiter) erzielen Honorarumsätze von 800.000-2.000.000 €/Jahr. Nach Abzug der Personal- und Sachkosten (60-70 %) bleiben 250.000-600.000 € Gewinn vor Steuer. Voraussetzung: bestandenes StB-Examen plus 3-5 Jahre Berufserfahrung.',
    },
    {
      question: 'Wie hart ist das Steuerberater-Examen?',
      answer:
        'Das Steuerberater-Examen ist eines der härtesten Berufsexamen in Deutschland. Die Bestehensquote liegt bei rund 50 %. Vorbereitungskurse (intensiv 6-12 Monate) kosten typischerweise 5.000-12.000 €. Nach Bestehen folgt ein deutlicher Gehaltssprung von häufig 10.000-20.000 € pro Jahr.',
    },
  ],
};

export default function SteuerberaterPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
