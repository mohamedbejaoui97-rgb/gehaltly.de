import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Gehalt Altenpfleger 2026 - Brutto Netto Pflegefachkraft | gehaltly.de',
  description:
    'Was verdient ein Altenpfleger 2026? Durchschnittsgehalt 32.000-38.000 €/Jahr. Brutto-Netto-Berechnung, TVöD-P-Eingruppierung, Schichtzulagen und Karriereaussichten.',
  alternates: { canonical: 'https://gehaltly.de/berufe/altenpfleger/' },
  openGraph: {
    title: 'Gehalt Altenpfleger 2026 - Brutto Netto',
    description:
      'Altenpfleger Gehalt 2026: Durchschnitt 32.000-38.000 €/Jahr mit Brutto-Netto-Berechnung und Schichtzulagen.',
    url: 'https://gehaltly.de/berufe/altenpfleger/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehalt Altenpfleger',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'altenpfleger',
  title: 'Altenpfleger',
  pageH1: 'Gehalt als Altenpfleger / Pflegefachkraft 2026',
  intro:
    'Altenpfleger und Altenpflegerinnen versorgen ältere Menschen in Heimen und ambulanten Diensten. Das durchschnittliche Bruttogehalt liegt 2026 zwischen 32.000 und 38.000 Euro pro Jahr. Durch Schichtzulagen, Pflegebonus und den anhaltenden Fachkräftemangel steigen die Gehälter spürbar.',
  metaTitle: 'Gehalt Altenpfleger 2026 - Brutto Netto Pflegefachkraft',
  metaDescription:
    'Altenpfleger-Gehalt 2026: 32.000-38.000 € Durchschnitt brutto/Jahr mit Brutto-Netto-Berechnung, TVöD-P, Schichtzulagen.',
  einstiegsgehalt: '29.000 €',
  durchschnittsgehalt: '32.000 - 38.000 €',
  topGehalt: '45.000+ €',
  topGehaltLabel: 'Mit Leitungsfunktion',
  avgYearly: 35000,
  avgMonthly: 2917,
  occupationDescription:
    'Altenpfleger versorgen, betreuen und pflegen ältere Menschen in stationären und ambulanten Einrichtungen. Sie unterstützen bei alltäglichen Aktivitäten, führen ärztliche Anordnungen aus und dokumentieren den Pflegeprozess.',
  schemaMedian: 35000,
  schemaP10: 28000,
  schemaP90: 45000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'Tarifbindung',
      description:
        'Tarifgebundene Träger (TVöD-P, AVR Caritas, AVR Diakonie) zahlen 10-20 % über dem Durchschnitt nicht-tariflicher privater Pflegeheime. Pflegekräfte im öffentlichen Dienst profitieren von planbaren Stufenaufstiegen.',
    },
    {
      icon: 'TrendingUp',
      title: 'Berufserfahrung',
      description:
        'Einsteiger starten bei rund 29.000 € pro Jahr. Nach 5-10 Jahren erreichen viele 36.000-38.000 €. Mit Stationsleitung oder Pflegedienstleitung sind 45.000-55.000 € möglich.',
    },
    {
      icon: 'GraduationCap',
      title: 'Spezialisierung & Weiterbildung',
      description:
        'Fachweiterbildungen (Gerontopsychiatrie, Palliativpflege, Praxisanleitung) führen zu Zulagen von 100-300 € pro Monat. Pflegestudium öffnet Wege ins Pflegemanagement.',
    },
    {
      icon: 'MapPin',
      title: 'Region',
      description:
        'In Süddeutschland (Bayern, Baden-Württemberg) liegen die Gehälter rund 8-12 % über dem Bundesdurchschnitt. In Ostdeutschland sind sie historisch niedriger, der Abstand verringert sich aber durch Tarifangleichungen.',
    },
  ],
  bundeslandData: [
    { land: 'Baden-Württemberg', gehalt: '38.500 €', diff: '+10 %' },
    { land: 'Bayern', gehalt: '37.500 €', diff: '+7 %' },
    { land: 'Hamburg', gehalt: '37.000 €', diff: '+6 %' },
    { land: 'Hessen', gehalt: '36.500 €', diff: '+4 %' },
    { land: 'Nordrhein-Westfalen', gehalt: '35.500 €', diff: '+1 %' },
    { land: 'Niedersachsen', gehalt: '34.500 €', diff: '-1 %' },
    { land: 'Berlin', gehalt: '34.000 €', diff: '-3 %' },
    { land: 'Sachsen', gehalt: '31.500 €', diff: '-10 %' },
    { land: 'Mecklenburg-Vorpommern', gehalt: '30.500 €', diff: '-13 %' },
  ],
  karriereIntro:
    'Der Altenpflegeberuf bietet eine außergewöhnlich hohe Beschäftigungssicherheit, getrieben vom demografischen Wandel und Fachkräftemangel. Aktuelle Trends 2026:',
  karriereItems: [
    {
      title: 'Pflegebonus & Tariferhöhungen',
      description:
        'Der TVöD-P wurde zuletzt erneut angehoben. Viele private Träger ziehen mit Bonusprogrammen nach.',
    },
    {
      title: 'Akademisierung',
      description:
        'Mit einem Pflegestudium entstehen neue Karrierewege in Forschung, Lehre und Pflegemanagement.',
    },
    {
      title: 'Leiharbeit',
      description:
        'Zeitarbeitsfirmen zahlen oft 20-30 % über Tarif, bieten dafür weniger Planungssicherheit beim Dienstplan.',
    },
    {
      title: 'Internationale Anwerbung',
      description:
        'Die zunehmende Anwerbung ausländischer Pflegekräfte erhöht den Druck auf Arbeitgeber, mit besseren Bedingungen Fachkräfte zu binden.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Altenpfleger in Deutschland?',
      answer:
        'Ein Altenpfleger verdient in Deutschland 2026 durchschnittlich zwischen 32.000 und 38.000 Euro brutto pro Jahr (rund 2.700-3.200 Euro pro Monat). Berufseinsteiger starten bei etwa 29.000 Euro, mit Leitungsfunktion sind 45.000+ Euro möglich.',
    },
    {
      question: 'Wie viel Netto bleibt einem Altenpfleger?',
      answer:
        'Bei einem durchschnittlichen Bruttogehalt von 2.917 Euro pro Monat (Steuerklasse 1) bleiben rund 1.950-2.050 Euro netto. Schicht-, Wochenend- und Feiertagszulagen sind häufig steuerlich begünstigt und können das Netto deutlich erhöhen.',
    },
    {
      question: 'Wie wird ein Altenpfleger nach TVöD-P bezahlt?',
      answer:
        'Im TVöD-P (Pflege) werden Altenpfleger in der Regel in die Entgeltgruppen P5 bis P8 eingruppiert. Das entspricht einem Bruttogehalt von 2.700-3.500 Euro pro Monat je nach Erfahrungsstufe. Mit Praxisanleitung oder Wohnbereichsleitung sind P8-P10 möglich.',
    },
    {
      question: 'Welche Zulagen gibt es in der Altenpflege?',
      answer:
        'Üblich sind Nachtzuschläge (15-25 %), Wochenend- und Feiertagszuschläge (25-35 %), Pflegezulage, Wechselschichtzulage und Funktionszulagen für Praxisanleitung. Diese Zulagen erhöhen das Monatseinkommen häufig um 200-500 Euro.',
    },
    {
      question: 'Lohnt sich eine Weiterbildung in der Altenpflege?',
      answer:
        'Ja. Weiterbildungen zur Praxisanleitung, Wohnbereichsleitung oder Pflegedienstleitung führen zu deutlich höheren Gehältern (40.000-55.000 Euro). Auch Spezialisierungen in Palliativpflege oder Gerontopsychiatrie zahlen sich finanziell aus.',
    },
  ],
};

export default function AltenpflegerPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
