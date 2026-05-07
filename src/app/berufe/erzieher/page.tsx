import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Gehalt Erzieher 2026 - Brutto Netto TVöD SuE | gehaltly.de',
  description:
    'Was verdient ein Erzieher 2026? Durchschnittsgehalt 35.000-45.000 €/Jahr. Brutto-Netto, TVöD SuE S8a-S15, Stufenaufstieg, Zulagen und Tariferhöhung Mai 2026.',
  alternates: { canonical: 'https://gehaltly.de/berufe/erzieher/' },
  openGraph: {
    title: 'Gehalt Erzieher 2026 - Brutto Netto TVöD SuE',
    description:
      'Erzieher-Gehalt 2026: Durchschnitt 35.000-45.000 €/Jahr mit Brutto-Netto-Berechnung und TVöD SuE-Eingruppierung.',
    url: 'https://gehaltly.de/berufe/erzieher/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehalt Erzieher',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'erzieher',
  title: 'Erzieher',
  pageH1: 'Gehalt als Erzieher / Erzieherin 2026',
  intro:
    'Erzieherinnen und Erzieher betreuen, fördern und begleiten Kinder und Jugendliche in Kitas, Krippen und Jugendhilfeeinrichtungen. Mit der TVöD SuE-Erhöhung zum 1. Mai 2026 liegt das Bruttogehalt zwischen 35.000 und 45.000 Euro pro Jahr - mit klarer Aufstiegsperspektive durch Erfahrungsstufen und Leitungsfunktionen.',
  metaTitle: 'Gehalt Erzieher 2026 - Brutto Netto TVöD SuE',
  metaDescription:
    'Erzieher-Gehalt 2026: 35.000-45.000 € brutto/Jahr nach TVöD SuE S8a-S15 mit Brutto-Netto-Berechnung.',
  einstiegsgehalt: '34.000 €',
  durchschnittsgehalt: '35.000 - 45.000 €',
  topGehalt: '52.000+ €',
  topGehaltLabel: 'Mit Kita-Leitung',
  avgYearly: 40000,
  avgMonthly: 3333,
  occupationDescription:
    'Erzieher und Erzieherinnen betreuen, bilden und erziehen Kinder und Jugendliche in pädagogischen Einrichtungen wie Kindergärten, Krippen, Horten und Jugendhilfe.',
  schemaMedian: 40000,
  schemaP10: 33000,
  schemaP90: 52000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'TVöD SuE-Eingruppierung',
      description:
        'Erzieher werden überwiegend in S8a/S8b (35.000-45.000 €) eingruppiert. Stellvertretende Leitungen erreichen S9-S13, Kita-Leitungen je nach Plätzezahl S13-S18 (50.000-65.000 €).',
    },
    {
      icon: 'TrendingUp',
      title: 'Erfahrungsstufen',
      description:
        'Der TVöD kennt 6 Stufen. Berufseinsteiger starten in Stufe 1, der automatische Aufstieg erfolgt nach 1, 3, 4, 4 und 5 Jahren - das Endgehalt liegt rund 25 % über dem Einstiegsgehalt.',
    },
    {
      icon: 'GraduationCap',
      title: 'Spezialisierung',
      description:
        'Fachkraft für Integration, Sprachförderung, Sozialpädagogik oder Heilpädagogik bringt Zulagen oder Höherstufung. Ein Studium der Sozialen Arbeit eröffnet S11b-S13.',
    },
    {
      icon: 'MapPin',
      title: 'Region & Träger',
      description:
        'Bayern und Baden-Württemberg zahlen rund 8-12 % über dem Bundesdurchschnitt. Kirchliche Träger (AVR) liegen ähnlich wie der TVöD, freie Träger zum Teil darunter.',
    },
  ],
  bundeslandData: [
    { land: 'Baden-Württemberg', gehalt: '44.000 €', diff: '+10 %' },
    { land: 'Bayern', gehalt: '43.500 €', diff: '+9 %' },
    { land: 'Hamburg', gehalt: '42.500 €', diff: '+6 %' },
    { land: 'Hessen', gehalt: '42.000 €', diff: '+5 %' },
    { land: 'Nordrhein-Westfalen', gehalt: '40.500 €', diff: '+1 %' },
    { land: 'Niedersachsen', gehalt: '39.500 €', diff: '-1 %' },
    { land: 'Berlin', gehalt: '39.000 €', diff: '-3 %' },
    { land: 'Sachsen', gehalt: '37.000 €', diff: '-8 %' },
    { land: 'Thüringen', gehalt: '36.500 €', diff: '-9 %' },
  ],
  karriereIntro:
    'Erzieher gehören zu den gefragtesten Berufen in Deutschland - der Fachkräftemangel in Kitas wird die Verhandlungsposition weiter stärken. Die wichtigsten Trends 2026:',
  karriereItems: [
    {
      title: 'TVöD SuE-Erhöhung Mai 2026',
      description:
        'Mit dem Tarifabschluss steigen die Tabellenwerte ab 1. Mai 2026 - im Schnitt um 5,5 %. Erzieher in S8a profitieren mit rund 200 € mehr brutto pro Monat.',
    },
    {
      title: 'Studienabschluss und S11b/S13',
      description:
        'Mit Bachelor in Sozialer Arbeit oder Kindheitspädagogik werden Fachkräfte häufig in S11b oder S13 eingruppiert - das entspricht 5.000-8.000 € mehr pro Jahr.',
    },
    {
      title: 'Leitungspositionen',
      description:
        'Stellvertretende Leitung (S9), Kita-Leitung (S13-S18) bieten klare Aufstiegswege. Großeinrichtungen ab 180 Plätzen erreichen S18 mit 65.000+ € Jahresbrutto.',
    },
    {
      title: 'Quereinstieg',
      description:
        'Über die berufsbegleitende Ausbildung oder PiA (Praxisintegrierte Ausbildung) ist ein finanziell tragbarer Einstieg möglich - bereits in der Ausbildung wird vergütet.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Erzieher 2026?',
      answer:
        'Ein Erzieher verdient 2026 in Deutschland durchschnittlich zwischen 35.000 und 45.000 Euro brutto pro Jahr (3.000-3.750 Euro pro Monat). Nach TVöD SuE S8a startet das Einstiegsgehalt bei etwa 34.000 Euro und steigt automatisch über die Stufen.',
    },
    {
      question: 'Wie viel Netto bleibt einem Erzieher?',
      answer:
        'Bei einem durchschnittlichen Bruttogehalt von 3.333 Euro pro Monat (Steuerklasse 1) bleiben rund 2.150-2.250 Euro netto. Mit Steuerklasse 3 (verheiratet) bei rund 2.450-2.550 Euro netto.',
    },
    {
      question: 'In welche TVöD-Gruppe werden Erzieher eingestuft?',
      answer:
        'Erzieher werden grundsätzlich in S8a (Erzieher mit staatlicher Anerkennung) eingruppiert. Mit besonderen Aufgaben oder schwierigen Tätigkeiten erreicht man S8b. Heilpädagogen und Sozialpädagogen werden in S9-S13 eingruppiert.',
    },
    {
      question: 'Lohnt sich ein Studium für Erzieher?',
      answer:
        'Ja. Mit einem abgeschlossenen Studium (Soziale Arbeit, Kindheitspädagogik, Erziehungswissenschaft) wechseln Fachkräfte häufig in S11b oder S13 - das entspricht einem Gehaltsplus von 400-700 Euro pro Monat. Das Studium kann berufsbegleitend absolviert werden.',
    },
    {
      question: 'Was verdient eine Kita-Leitung?',
      answer:
        'Kita-Leitungen werden je nach Anzahl der Plätze in S13 (40-69 Plätze) bis S18 (ab 180 Plätzen) eingruppiert. Das entspricht einem Bruttojahresgehalt von 50.000-65.000 Euro plus möglicher Funktionszulagen.',
    },
  ],
};

export default function ErzieherPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
