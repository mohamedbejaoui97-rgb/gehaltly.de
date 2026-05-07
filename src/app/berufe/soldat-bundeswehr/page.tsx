import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Bundeswehr Gehalt 2026 - Brutto Netto Soldat Besoldung | gehaltly.de',
  description:
    'Was verdient ein Soldat der Bundeswehr 2026? Brutto-Netto-Berechnung, Besoldung A3-A16 / B1-B11, Stellenzulagen, Auslandseinsatz und Verpflichtungsprämien.',
  alternates: { canonical: 'https://gehaltly.de/berufe/soldat-bundeswehr/' },
  openGraph: {
    title: 'Bundeswehr Gehalt 2026 - Brutto Netto Soldat',
    description:
      'Soldat-Gehalt 2026: Besoldung A3-A16 mit Brutto-Netto-Berechnung, Stellenzulagen und Auslandsbezügen.',
    url: 'https://gehaltly.de/berufe/soldat-bundeswehr/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Bundeswehr Gehalt',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'soldat-bundeswehr',
  title: 'Soldat (Bundeswehr)',
  pageH1: 'Bundeswehr Gehalt 2026 - Soldat Brutto Netto',
  intro:
    'Soldatinnen und Soldaten der Bundeswehr werden nach der Bundesbesoldungsordnung A (Mannschaften, Unteroffiziere, Offiziere) bzw. B (Generalität) bezahlt. Das Bruttogehalt 2026 reicht von rund 30.000 € (A3 Mannschaft) bis über 90.000 € (A16 Stabsoffizier). Hinzu kommen Stellenzulagen, Verpflichtungsprämie, Auslandsverwendungszuschlag (AVZ) und freie Heilfürsorge.',
  metaTitle: 'Bundeswehr Gehalt 2026 - Brutto Netto Soldat Besoldung',
  metaDescription:
    'Soldat-Gehalt 2026: Besoldungstabelle A3-A16, Stellenzulagen, Auslandseinsatz mit Brutto-Netto-Rechnung.',
  einstiegsgehalt: '30.000 €',
  durchschnittsgehalt: '38.000 - 55.000 €',
  topGehalt: '90.000+ €',
  topGehaltLabel: 'Stabsoffizier (A15-A16)',
  avgYearly: 46000,
  avgMonthly: 3833,
  occupationDescription:
    'Soldatinnen und Soldaten der Bundeswehr leisten Dienst in den Teilstreitkräften Heer, Luftwaffe, Marine, Streitkräftebasis, CIR und ZSanDstBw. Sie verteidigen Deutschland, leisten Bündnis- und Auslandseinsätze und sichern infrastrukturelle Aufgaben.',
  schemaMedian: 46000,
  schemaP10: 30000,
  schemaP90: 80000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'Dienstgrad & Besoldung',
      description:
        'Mannschaften (A3-A6) starten bei 30.000-35.000 €. Unteroffiziere (A7-A9): 38.000-50.000 €. Offiziere (A9-A12) im Truppendienst: 45.000-65.000 €. Stabsoffiziere (A13-A16): 65.000-90.000+ €.',
    },
    {
      icon: 'TrendingUp',
      title: 'Verpflichtungs- & Berufungsprämie',
      description:
        'Soldaten auf Zeit erhalten je nach Verpflichtungsdauer eine einmalige Prämie von 1.000 bis 12.500 €. Berufssoldaten profitieren langfristig von planbarer Pension.',
    },
    {
      icon: 'GraduationCap',
      title: 'Stellenzulagen',
      description:
        'Tauchen, Springen, fliegerischer Dienst, KSK, Bordwart, ABC-Abwehr, Minentauchen u.v.m. - Stellenzulagen liegen zwischen 75 und 1.200 € pro Monat.',
    },
    {
      icon: 'MapPin',
      title: 'Auslandsverwendungszuschlag (AVZ)',
      description:
        'Bei Auslandseinsätzen (z.B. Litauen, Mali, Kosovo) gibt es 30-110 € pro Einsatztag steuerfrei. In Krisenregionen kommen Gefahrenzulagen von zusätzlich 30-130 € pro Tag dazu.',
    },
  ],
  bundeslandData: [
    { land: 'Bayern (München, Nürnberg)', gehalt: '50.000 €', diff: '+8 %' },
    { land: 'Baden-Württemberg', gehalt: '49.000 €', diff: '+6 %' },
    { land: 'Hessen', gehalt: '47.500 €', diff: '+3 %' },
    { land: 'Hamburg / Bremen (Marine)', gehalt: '47.000 €', diff: '+2 %' },
    { land: 'NRW', gehalt: '46.000 €', diff: '0 %' },
    { land: 'Niedersachsen', gehalt: '45.500 €', diff: '-1 %' },
    { land: 'Berlin (BMVg, BAAINBw)', gehalt: '45.000 €', diff: '-2 %' },
    { land: 'Sachsen', gehalt: '44.000 €', diff: '-4 %' },
    { land: 'Mecklenburg-Vorpommern', gehalt: '43.500 €', diff: '-5 %' },
  ],
  karriereIntro:
    'Die Bundeswehr bietet 2026 mit der Wehrdienstreform und steigenden Verteidigungsausgaben besonders attraktive Karriereperspektiven. Wichtige Trends:',
  karriereItems: [
    {
      title: 'Besoldungserhöhung 2026',
      description:
        'Die Besoldung der Bundeswehr wurde 2026 um durchschnittlich 2,8 % angehoben (lineare Anpassung).',
    },
    {
      title: 'Studium an der Bundeswehr-Universität',
      description:
        'Offizieranwärter studieren an der UniBw München oder Hamburg - voll bezahltes Studium plus Sold rund 2.000 € im Monat. Nach Studium Verpflichtung als Offizier auf Zeit.',
    },
    {
      title: 'Reservisten und Quereinstieg',
      description:
        'Mit ziviler Berufsausbildung kann man als Feldwebel-Anwärter oder Offizier-Anwärter quereinsteigen. Die Bundeswehr wirbt aktiv mit Verpflichtungsprämien.',
    },
    {
      title: 'Pension nach Berufssoldat',
      description:
        'Berufssoldaten erhalten eine Pension von bis zu 71,75 % der letzten Bezüge nach 40 Dienstjahren. Soldaten auf Zeit erhalten Berufsförderung und Übergangsgeld.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Soldat der Bundeswehr?',
      answer:
        'Ein Soldat der Bundeswehr verdient 2026 abhängig vom Dienstgrad zwischen 30.000 € (Mannschaftsdienstgrad A3) und 90.000+ € (Stabsoffizier A15-A16). Ein Feldwebel (A7-A8) erhält rund 38.000-46.000 €, ein Hauptmann (A11) rund 55.000-65.000 €.',
    },
    {
      question: 'Wie viel Netto bleibt einem Soldaten?',
      answer:
        'Da Soldaten Beamte sind, zahlen sie keine Renten- und Arbeitslosenversicherung. Dafür gibt es freie Heilfürsorge (keine PKV-Beiträge im aktiven Dienst). Bei 3.833 € brutto/Monat (A9) bleiben rund 2.800-3.000 € netto je nach Steuerklasse.',
    },
    {
      question: 'Was ist die Verpflichtungsprämie der Bundeswehr?',
      answer:
        'Soldaten auf Zeit (SaZ) erhalten je nach Verpflichtungsdauer eine einmalige Prämie zwischen 1.000 € (2 Jahre) und 12.500 € (12 Jahre). In gefragten Bereichen (IT, Sanität, Cyber) gibt es zusätzliche Werbeprämien.',
    },
    {
      question: 'Wie hoch ist der Auslandsverwendungszuschlag?',
      answer:
        'Der AVZ liegt zwischen 30 und 110 € pro Einsatztag und ist steuerfrei. In Krisenregionen kommen Gefahrenzulagen von 30-130 € pro Tag hinzu. Bei einem 6-monatigen Einsatz können so steuerfrei 8.000-25.000 € zusätzlich anfallen.',
    },
    {
      question: 'Wann lohnt sich die Berufssoldaten-Laufbahn?',
      answer:
        'Berufssoldaten profitieren von hoher Beschäftigungssicherheit, planbarer Pension (bis 71,75 % der letzten Bezüge) und freier Heilfürsorge. Finanziell besonders attraktiv ab Hauptmann/Major (A11-A13) mit Pension von 50.000-65.000 € pro Jahr.',
    },
  ],
};

export default function SoldatBundeswehrPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
