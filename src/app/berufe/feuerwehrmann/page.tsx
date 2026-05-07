import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Gehalt Feuerwehrmann 2026 - Brutto Netto Berufsfeuerwehr | gehaltly.de',
  description:
    'Was verdient ein Feuerwehrmann 2026? Brutto-Netto-Berechnung, Besoldungstabelle A7-A12, Feuerwehrzulage, Schichtzulagen und Karriereaussichten Berufsfeuerwehr.',
  alternates: { canonical: 'https://gehaltly.de/berufe/feuerwehrmann/' },
  openGraph: {
    title: 'Gehalt Feuerwehrmann 2026 - Brutto Netto',
    description:
      'Feuerwehrmann-Gehalt 2026: 38.000-52.000 €/Jahr Besoldung A7-A12 mit Feuerwehrzulage und Schichtzuschlägen.',
    url: 'https://gehaltly.de/berufe/feuerwehrmann/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehalt Feuerwehrmann',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'feuerwehrmann',
  title: 'Feuerwehrmann',
  pageH1: 'Gehalt als Feuerwehrmann / Berufsfeuerwehr 2026',
  intro:
    'Feuerwehrleute der Berufsfeuerwehr in Deutschland werden als Beamte nach Besoldungsordnung A bezahlt. Das Bruttogehalt 2026 liegt zwischen 38.000 und 52.000 Euro pro Jahr, plus Feuerwehrzulage, Schicht- und Erschwerniszuschläge. Werkfeuerwehren in der Industrie zahlen tariflich oft höher als die kommunale Berufsfeuerwehr.',
  metaTitle: 'Gehalt Feuerwehrmann 2026 - Brutto Netto Berufsfeuerwehr',
  metaDescription:
    'Feuerwehrmann-Gehalt 2026: Besoldung A7-A12, Feuerwehrzulage, Schichtzuschläge. Brutto-Netto-Berechnung & Karriere.',
  einstiegsgehalt: '36.000 €',
  durchschnittsgehalt: '38.000 - 52.000 €',
  topGehalt: '70.000+ €',
  topGehaltLabel: 'Höherer Dienst (A13+)',
  avgYearly: 45000,
  avgMonthly: 3750,
  occupationDescription:
    'Feuerwehrleute bekämpfen Brände, leisten Technische Hilfe, retten Menschen aus Notlagen, übernehmen den ABC-Schutz und sichern den Rettungsdienst. Sie arbeiten im 24-Stunden-Schichtdienst.',
  schemaMedian: 45000,
  schemaP10: 36000,
  schemaP90: 60000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'Berufsfeuerwehr vs. Werkfeuerwehr',
      description:
        'Berufsfeuerwehren der Städte folgen der Landesbesoldung. Werkfeuerwehren (BASF, Bayer, BMW, Airports) zahlen tariflich oft 10-20 % über der Beamtenbesoldung, dafür ohne Beamtenstatus.',
    },
    {
      icon: 'TrendingUp',
      title: 'Laufbahn & Besoldungsgruppe',
      description:
        'Mittlerer Dienst (A7-A9): 38.000-46.000 €. Gehobener Dienst (A9-A12): 44.000-58.000 €. Höherer Dienst (A13-A16) für Studierte: 60.000-90.000 €.',
    },
    {
      icon: 'GraduationCap',
      title: 'Feuerwehrzulage',
      description:
        'Alle Vollzugsbeamten der Feuerwehr erhalten eine Feuerwehrzulage von 130-160 € pro Monat. Hinzu kommen Schichtdienst-, Wechselschicht-, Wochenend- und Feiertagszuschläge.',
    },
    {
      icon: 'MapPin',
      title: 'Region',
      description:
        'Bayern und Baden-Württemberg zahlen rund 8-10 % über dem Bundesdurchschnitt. Großstädte mit Ballungsraumzulage (München, Frankfurt, Stuttgart) bieten besonders attraktive Konditionen.',
    },
  ],
  bundeslandData: [
    { land: 'Bayern', gehalt: '49.500 €', diff: '+10 %' },
    { land: 'Baden-Württemberg', gehalt: '48.500 €', diff: '+8 %' },
    { land: 'Hessen', gehalt: '47.000 €', diff: '+4 %' },
    { land: 'Hamburg', gehalt: '46.500 €', diff: '+3 %' },
    { land: 'Nordrhein-Westfalen', gehalt: '45.000 €', diff: '0 %' },
    { land: 'Niedersachsen', gehalt: '44.000 €', diff: '-2 %' },
    { land: 'Berlin', gehalt: '43.500 €', diff: '-3 %' },
    { land: 'Sachsen', gehalt: '42.500 €', diff: '-6 %' },
    { land: 'Bremen', gehalt: '42.000 €', diff: '-7 %' },
  ],
  karriereIntro:
    'Die Berufsfeuerwehr bietet eine sichere Karriere mit klar geregelten Aufstiegswegen, Pension und einer hohen gesellschaftlichen Wertschätzung. Wichtige Trends 2026:',
  karriereItems: [
    {
      title: 'Aufstieg in den gehobenen Dienst',
      description:
        'Über die feuerwehrtechnische Laufbahnprüfung wechseln Beamte aus A9 in A9g/A10. Das entspricht rund 6.000-8.000 € mehr Bruttojahresgehalt.',
    },
    {
      title: 'Höherer Dienst über Studium',
      description:
        'Mit einem ingenieurwissenschaftlichen Studium plus Brandreferendariat erreicht man den höheren Dienst (A13-A16) - ab 60.000 € pro Jahr.',
    },
    {
      title: 'Werkfeuerwehr als Alternative',
      description:
        'Werkfeuerwehren in Chemie, Automobil, Flughäfen und Energie zahlen tariflich oft 10-20 % über Beamtenbesoldung. Häufig 39-Stunden-Woche statt 48 Stunden.',
    },
    {
      title: 'Pension',
      description:
        'Beamte der Feuerwehr profitieren von der besonderen Altersgrenze (60-62 Jahre) und einer Pension bis 71,75 % der letzten Bezüge nach 40 Dienstjahren.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Feuerwehrmann 2026?',
      answer:
        'Ein Feuerwehrmann der Berufsfeuerwehr verdient 2026 zwischen 38.000 und 52.000 Euro brutto pro Jahr. Im mittleren Dienst (A7-A9) liegt das Gehalt bei 38.000-46.000 Euro, im gehobenen Dienst (A9-A12) bei 44.000-58.000 Euro - plus Feuerwehrzulage und Schichtzuschläge.',
    },
    {
      question: 'Wie viel Netto bleibt einem Feuerwehrmann?',
      answer:
        'Als Beamter zahlt der Feuerwehrmann keine Renten- und Arbeitslosenversicherung, dafür anteilige PKV mit Beihilfe. Bei 3.750 € brutto/Monat (A9) bleiben grob 2.700-2.900 € netto je nach Steuerklasse und Familienstand.',
    },
    {
      question: 'Was ist die Feuerwehrzulage?',
      answer:
        'Die Feuerwehrzulage ist ein monatlicher Zuschlag von rund 130-160 € für alle Beamten im feuerwehrtechnischen Dienst. Hinzu kommen Erschwerniszulagen für besondere Einsätze (Höhenrettung, Wasserrettung, ABC-Abwehr) sowie Wechselschichtzulagen.',
    },
    {
      question: 'Lohnt sich Werkfeuerwehr finanziell mehr als Berufsfeuerwehr?',
      answer:
        'Häufig ja. Werkfeuerwehren in der Chemie- und Automobilindustrie zahlen tariflich 10-20 % über der Beamtenbesoldung, oft 39-Stunden-Woche statt 48 Stunden. Allerdings ohne Beamtenstatus, also ohne Pensionsanspruch und mit voller Sozialversicherung.',
    },
    {
      question: 'Mit wie vielen Jahren geht ein Feuerwehrmann in Pension?',
      answer:
        'Beamte im feuerwehrtechnischen Vollzugsdienst gehen aufgrund der körperlichen Belastung oft bereits mit 60-62 Jahren in Pension - die genaue Altersgrenze unterscheidet sich nach Bundesland. Die Pension kann bis 71,75 % der letzten Bezüge betragen.',
    },
  ],
};

export default function FeuerwehrmannPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
