import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Gehalt Mechatroniker 2026 - Brutto Netto Industrie | gehaltly.de',
  description:
    'Was verdient ein Mechatroniker 2026? Durchschnittsgehalt 38.000-48.000 €/Jahr. Brutto-Netto, IG Metall Tarif, Schichtzulagen und Karrieremöglichkeiten.',
  alternates: { canonical: 'https://gehaltly.de/berufe/mechatroniker/' },
  openGraph: {
    title: 'Gehalt Mechatroniker 2026 - Brutto Netto',
    description:
      'Mechatroniker-Gehalt 2026: Durchschnitt 38.000-48.000 €/Jahr nach IG Metall Tarif mit Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/mechatroniker/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehalt Mechatroniker',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'mechatroniker',
  title: 'Mechatroniker',
  pageH1: 'Gehalt als Mechatroniker 2026 - Brutto Netto Industrie',
  intro:
    'Mechatroniker verbinden Mechanik, Elektronik und Informatik. In der deutschen Industrie zählen sie zu den gefragtesten Fachkräften. Mit einem Bruttogehalt von 38.000 bis 48.000 Euro pro Jahr - oft nach IG Metall-Tarif - bietet der Beruf solide Verdienstmöglichkeiten und exzellente Aufstiegschancen über Techniker- oder Meisterabschluss.',
  metaTitle: 'Gehalt Mechatroniker 2026 - Brutto Netto IG Metall',
  metaDescription:
    'Mechatroniker-Gehalt 2026: 38.000-48.000 €/Jahr nach IG Metall Tarif. Brutto-Netto-Berechnung & Karriere.',
  einstiegsgehalt: '34.000 €',
  durchschnittsgehalt: '38.000 - 48.000 €',
  topGehalt: '60.000+ €',
  topGehaltLabel: 'Mit Meister/Techniker',
  avgYearly: 43000,
  avgMonthly: 3583,
  occupationDescription:
    'Mechatroniker installieren, warten und reparieren komplexe mechatronische Systeme - von Industrierobotern und Produktionsanlagen bis zu Fahrzeugtechnik. Sie arbeiten in Maschinenbau, Automobilindustrie, Energie und Anlagenbau.',
  schemaMedian: 43000,
  schemaP10: 33000,
  schemaP90: 58000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'Tarifbindung & Branche',
      description:
        'IG Metall-tarifgebundene Betriebe (Automobil, Maschinenbau) zahlen 10-20 % über nicht-tarifgebundenen Mittelständlern. Premium-Hersteller (BMW, Daimler, Bosch) liegen oft 5-10 % über dem Tarif.',
    },
    {
      icon: 'TrendingUp',
      title: 'Erfahrung & Position',
      description:
        'Berufseinsteiger starten bei 34.000-37.000 €. Nach 3-5 Jahren typisch 40.000-46.000 €. Mit Schichtleitung oder Spezialisierung sind 50.000-55.000 € realistisch.',
    },
    {
      icon: 'GraduationCap',
      title: 'Weiterbildung Meister/Techniker',
      description:
        'Industriemeister Mechatronik: rund 55.000-65.000 € pro Jahr. Staatlich geprüfter Techniker: 50.000-60.000 €. Beide Abschlüsse rechnen sich nach 3-5 Jahren amortisiert.',
    },
    {
      icon: 'MapPin',
      title: 'Region',
      description:
        'Süddeutschland (Bayern, Baden-Württemberg) zahlt 10-15 % über dem Bundesdurchschnitt - bedingt durch Automobilindustrie. Ostdeutschland liegt rund 10-15 % darunter.',
    },
  ],
  bundeslandData: [
    { land: 'Baden-Württemberg', gehalt: '49.500 €', diff: '+15 %' },
    { land: 'Bayern', gehalt: '48.500 €', diff: '+13 %' },
    { land: 'Hessen', gehalt: '46.000 €', diff: '+7 %' },
    { land: 'Hamburg', gehalt: '44.500 €', diff: '+3 %' },
    { land: 'Nordrhein-Westfalen', gehalt: '43.500 €', diff: '+1 %' },
    { land: 'Niedersachsen', gehalt: '42.500 €', diff: '-1 %' },
    { land: 'Berlin', gehalt: '41.000 €', diff: '-5 %' },
    { land: 'Sachsen', gehalt: '38.500 €', diff: '-10 %' },
    { land: 'Thüringen', gehalt: '37.500 €', diff: '-13 %' },
  ],
  karriereIntro:
    'Mechatroniker profitieren vom Strukturwandel zur Elektromobilität, Industrie 4.0 und Automatisierung. Wichtige Trends 2026:',
  karriereItems: [
    {
      title: 'Industriemeister & Techniker',
      description:
        'Der Industriemeister Mechatronik (24-36 Monate berufsbegleitend) bringt durchschnittlich 10.000-15.000 € mehr Bruttojahresgehalt. Förderung über Aufstiegs-BAföG bis zu 75 % möglich.',
    },
    {
      title: 'IG Metall-Tariferhöhung',
      description:
        'Die jüngsten Tarifabschlüsse der IG Metall haben deutliche Lohnerhöhungen gebracht. Beschäftigte profitieren zusätzlich vom Tarifvertrag T-ZUG (rund 27,5 % eines Monatsgehalts pro Jahr).',
    },
    {
      title: 'Spezialisierung Robotik / SPS',
      description:
        'Mechatroniker mit Zusatzqualifikationen in Siemens TIA / SPS-Programmierung, Robotik (KUKA, ABB, Fanuc) oder Pneumatik/Hydraulik können 5-10 % mehr verlangen.',
    },
    {
      title: 'Studium berufsbegleitend',
      description:
        'Mit Maschinenbau- oder Mechatronik-Studium (auch berufsbegleitend, ca. 4-5 Jahre) erreichen Mechatroniker als Ingenieure 60.000-75.000 € pro Jahr.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Mechatroniker 2026?',
      answer:
        'Ein Mechatroniker verdient 2026 in Deutschland durchschnittlich zwischen 38.000 und 48.000 Euro brutto pro Jahr (3.150-4.000 Euro pro Monat). Tarifgebundene Betriebe (IG Metall) zahlen am oberen Ende der Spanne, mittelständische ohne Tarifbindung am unteren.',
    },
    {
      question: 'Wie viel Netto bleibt einem Mechatroniker?',
      answer:
        'Bei einem durchschnittlichen Bruttogehalt von 3.583 Euro pro Monat (Steuerklasse 1) bleiben rund 2.300-2.400 Euro netto. Mit Schicht- und Sonntagszuschlägen, die teils steuerlich begünstigt sind, kann das Netto deutlich höher ausfallen.',
    },
    {
      question: 'Was verdient ein Mechatroniker bei BMW oder Daimler?',
      answer:
        'In Premium-Automobilkonzernen wie BMW, Mercedes-Benz und Audi liegt das Gehalt rund 5-10 % über dem IG Metall-Flächentarif. Mechatroniker können hier mit 48.000-55.000 Euro pro Jahr rechnen, plus T-ZUG (rund 27,5 % eines Monatsgehalts) und betriebliche Leistungen.',
    },
    {
      question: 'Lohnt sich der Industriemeister Mechatronik?',
      answer:
        'Ja. Der Industriemeister bringt durchschnittlich 10.000-15.000 Euro mehr Bruttojahresgehalt. Da er berufsbegleitend (Aufstiegs-BAföG bis 75 % gefördert) gemacht werden kann, amortisiert sich die Investition typischerweise innerhalb von 2-3 Jahren.',
    },
    {
      question: 'Welche Schichtzulagen gibt es?',
      answer:
        'Üblich sind Nachtzuschläge (15-30 %), Sonntagszuschläge (50-70 %) und Feiertagszuschläge (125-150 %). Diese sind teilweise steuerfrei und können das Monatseinkommen um 200-600 Euro erhöhen, je nach Schichtmodell.',
    },
  ],
};

export default function MechatronikerPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
