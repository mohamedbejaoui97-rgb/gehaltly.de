import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Gehalt Polizist 2026 - Brutto Netto Polizei Besoldung | gehaltly.de',
  description:
    'Was verdient ein Polizist 2026? Durchschnittsgehalt 39.000-52.000 €/Jahr. Brutto-Netto-Berechnung, Besoldungstabelle A7-A13, Polizeizulage und Schichtzulagen.',
  alternates: { canonical: 'https://gehaltly.de/berufe/polizist/' },
  openGraph: {
    title: 'Gehalt Polizist 2026 - Brutto Netto Besoldung',
    description:
      'Polizist-Gehalt 2026: 39.000-52.000 €/Jahr Besoldung A7-A13 mit Polizeizulage und Schichtzulagen.',
    url: 'https://gehaltly.de/berufe/polizist/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehalt Polizist',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'polizist',
  title: 'Polizist',
  pageH1: 'Gehalt als Polizist / Polizeibeamter 2026',
  intro:
    'Polizeibeamte sichern öffentliche Ordnung und Sicherheit in Deutschland. Als Beamte werden sie nach Besoldungsordnung A bezahlt - die Werte unterscheiden sich nach Bund/Land. Das Bruttogehalt liegt typisch zwischen 39.000 und 52.000 Euro pro Jahr, plus Polizeizulage und Schichtzuschläge. Wichtig: Beamte zahlen keine Renten- und Arbeitslosenversicherung, dafür private Krankenversicherung mit Beihilfe.',
  metaTitle: 'Gehalt Polizist 2026 - Brutto Netto Besoldung A7-A13',
  metaDescription:
    'Polizist-Gehalt 2026: Besoldungstabelle A7-A13, Polizeizulage, Schichtzuschläge mit Brutto-Netto-Berechnung.',
  einstiegsgehalt: '36.000 €',
  durchschnittsgehalt: '39.000 - 52.000 €',
  topGehalt: '70.000+ €',
  topGehaltLabel: 'A12-A13 Höherer Dienst',
  avgYearly: 46000,
  avgMonthly: 3833,
  occupationDescription:
    'Polizeibeamte sorgen für öffentliche Sicherheit und Ordnung, bekämpfen Straftaten, regeln den Verkehr und leisten Erste Hilfe. Sie arbeiten im Streifen-, Ermittlungs-, Schutz- und Bereitschaftspolizeidienst.',
  schemaMedian: 46000,
  schemaP10: 36000,
  schemaP90: 65000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'Bund vs. Bundesland',
      description:
        'Bundespolizei und BKA folgen der Bundesbesoldungsordnung. Landespolizei wird nach Landesbesoldung bezahlt - Bayern und Baden-Württemberg liegen 5-10 % über dem Bundesdurchschnitt, Berlin und Bremen darunter.',
    },
    {
      icon: 'TrendingUp',
      title: 'Besoldungsgruppe & Erfahrungsstufe',
      description:
        'Mittlerer Dienst (A7-A9): 36.000-45.000 €. Gehobener Dienst (A9-A11): 42.000-58.000 €. Höherer Dienst (A13-A16): 60.000-90.000 €. Innerhalb jeder Gruppe gibt es 8 Erfahrungsstufen.',
    },
    {
      icon: 'GraduationCap',
      title: 'Polizeizulage',
      description:
        'Alle Vollzugsbeamten erhalten eine Polizeizulage von rund 130-160 € pro Monat sowie Stellenzulagen für besondere Einsätze (z.B. SEK, MEK, Cybercrime).',
    },
    {
      icon: 'MapPin',
      title: 'Familienzuschlag',
      description:
        'Verheiratete Beamte erhalten einen Familienzuschlag von rund 150 € pro Monat, plus Kinderzuschlag pro Kind (ab 130 €). Beamte mit Familie verdienen netto häufig deutlich mehr als Angestellte.',
    },
  ],
  bundeslandData: [
    { land: 'Bayern', gehalt: '50.500 €', diff: '+10 %' },
    { land: 'Baden-Württemberg', gehalt: '49.500 €', diff: '+8 %' },
    { land: 'Hessen', gehalt: '48.000 €', diff: '+4 %' },
    { land: 'Bund (Bundespolizei)', gehalt: '47.000 €', diff: '+2 %' },
    { land: 'Nordrhein-Westfalen', gehalt: '46.000 €', diff: '0 %' },
    { land: 'Niedersachsen', gehalt: '45.000 €', diff: '-2 %' },
    { land: 'Sachsen', gehalt: '44.500 €', diff: '-3 %' },
    { land: 'Berlin', gehalt: '43.500 €', diff: '-5 %' },
    { land: 'Bremen', gehalt: '42.500 €', diff: '-8 %' },
  ],
  karriereIntro:
    'Polizisten profitieren von einer strukturierten Laufbahn mit klarem Stufenaufstieg, hoher Sicherheit und attraktiven Familienzuschlägen. Wichtige Trends 2026:',
  karriereItems: [
    {
      title: 'Besoldungserhöhung 2026',
      description:
        'Bund und Länder haben für 2026 eine lineare Anhebung der Besoldung beschlossen. Die genauen Prozentsätze unterscheiden sich nach Tarifabschluss des jeweiligen Bundeslandes.',
    },
    {
      title: 'Aufstieg vom mittleren in den gehobenen Dienst',
      description:
        'Mit interner Fortbildung und Qualifikationsprüfung wechseln Polizeibeamte aus A9 in A9g/A10. Das entspricht einem Gehaltsplus von rund 5.000-8.000 € pro Jahr.',
    },
    {
      title: 'Spezialisierungen',
      description:
        'Cybercrime, Mobiles Einsatzkommando (MEK), Spezialeinsatzkommando (SEK), Wasserschutzpolizei, Bereitschaftspolizei - jede Einheit bringt zusätzliche Stellenzulagen und schnelleren Aufstieg.',
    },
    {
      title: 'Ruhegehalt',
      description:
        'Mit 65 (oder vorzeitig mit 62) gehen Beamte in Pension - das Ruhegehalt beträgt bis zu 71,75 % der letzten Bezüge. Wichtig: Beamte sind nicht in der gesetzlichen Rentenversicherung.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Polizist 2026?',
      answer:
        'Ein Polizeibeamter verdient 2026 durchschnittlich zwischen 39.000 und 52.000 Euro brutto pro Jahr, abhängig von Besoldungsgruppe und Bundesland. Im mittleren Dienst (A7-A9) liegt das Gehalt bei 36.000-45.000 Euro, im gehobenen Dienst (A9-A11) bei 42.000-58.000 Euro.',
    },
    {
      question: 'Wie viel Netto bleibt einem Polizisten?',
      answer:
        'Da Beamte keine Renten- und Arbeitslosenversicherung zahlen und in der Regel privat versichert sind (mit Beihilfe), liegt das Netto häufig 200-400 Euro über dem eines vergleichbar verdienenden Angestellten. Bei 3.833 € brutto/Monat (A9) bleiben grob 2.700-2.900 € netto je nach Steuerklasse und PKV-Beitrag.',
    },
    {
      question: 'Was ist die Polizeizulage und wer erhält sie?',
      answer:
        'Die Polizeizulage ist ein monatlicher Zuschlag von rund 130-160 € für alle Vollzugsbeamten in Bund und Ländern. Sie wird zusätzlich zur Grundbesoldung gezahlt und ist steuerpflichtig, aber sozialabgabenfrei (da Beamte ohnehin nicht sozialversichert sind).',
    },
    {
      question: 'Wie hoch ist die Pension eines Polizisten?',
      answer:
        'Die Pension beträgt nach 40 Dienstjahren bis zu 71,75 % der letzten Bezüge (Stand 2026). Bei A9 mit 4.000 € letzte Bezüge entspricht das einer Pension von rund 2.870 € brutto. Beamte erhalten keine gesetzliche Rente, dafür ist die Beamtenversorgung deutlich höher.',
    },
    {
      question: 'Lohnt sich der Aufstieg vom mittleren in den gehobenen Dienst?',
      answer:
        'Ja, finanziell deutlich. Der Sprung von A9 in A9g/A10 bringt rund 5.000-8.000 Euro mehr Bruttojahreseinkommen, plus bessere Aufstiegschancen in A11-A12 später. Die Qualifikationsprüfung ist anspruchsvoll, aber strukturiert.',
    },
  ],
};

export default function PolizistPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
