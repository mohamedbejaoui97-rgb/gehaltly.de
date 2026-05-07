import { Metadata } from 'next';
import BundeslandPageTemplate, {
  type BundeslandData,
} from '@/components/content/BundeslandPageTemplate';

export const metadata: Metadata = {
  title: 'Brutto-Netto-Rechner NRW 2026 - 9 % Kirchensteuer | gehaltly.de',
  description:
    'Brutto-Netto-Rechner Nordrhein-Westfalen 2026: 9 % Kirchensteuer, Brutto-Netto-Tabelle, Durchschnittsgehalt und Top-Städte Köln, Düsseldorf, Dortmund, Essen, Bonn.',
  alternates: { canonical: 'https://gehaltly.de/bundesland/nordrhein-westfalen/' },
  openGraph: {
    title: 'Brutto-Netto-Rechner NRW 2026',
    description:
      'Nordrhein-Westfalen: bevölkerungsreichstes Bundesland mit Ruhrgebiet und Rheinland. Brutto-Netto-Tabelle 2026.',
    url: 'https://gehaltly.de/bundesland/nordrhein-westfalen/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Brutto-Netto NRW',
      },
    ],
  },
};

const data: BundeslandData = {
  slug: 'nordrhein-westfalen',
  bundeslandKey: 'nordrhein-westfalen',
  name: 'Nordrhein-Westfalen',
  pageH1: 'Brutto-Netto-Rechner Nordrhein-Westfalen (NRW) 2026',
  metaTitle: 'Brutto-Netto-Rechner NRW 2026 - 9 % Kirchensteuer',
  metaDescription:
    'NRW Brutto-Netto-Rechner 2026 mit 9 % Kirchensteuer, Tabelle, Top-Städten und Gehaltsdaten.',
  intro:
    'Nordrhein-Westfalen ist mit 17,9 Millionen Einwohnern Deutschlands bevölkerungsreichstes Bundesland - und ein wirtschaftlicher Mix aus Industriestandorten im Ruhrgebiet, Banken- und Mediendrehscheibe Düsseldorf, Chemie in Köln/Leverkusen und Universitätsstädten wie Aachen und Bonn. Der Kirchensteuersatz liegt bei 9 % - dem regulären Wert in 14 von 16 Bundesländern.',
  kirchensteuerSatz: 9,
  hauptstadt: 'Düsseldorf',
  einwohner: '17,9 Mio.',
  durchschnittsgehalt: '46.000 €',
  cities: [
    { name: 'Köln', bemerkung: 'Medien, Versicherungen, Lufthansa - größte Stadt NRW' },
    { name: 'Düsseldorf', bemerkung: 'Banken, Mode, Werbung - höchste Gehälter' },
    { name: 'Dortmund', bemerkung: 'Logistik, Tech-Hub, niedrigere Mieten' },
    { name: 'Essen', bemerkung: 'RWE, ThyssenKrupp - Industriegeschichte' },
    { name: 'Bonn', bemerkung: 'UN, DHL, Telekom - Bundesbehörden' },
    { name: 'Aachen', bemerkung: 'RWTH, Tech und Forschung' },
  ],
  fakten: [
    'Kirchensteuersatz: 9 % der Lohnsteuer - der reguläre Wert in 14 von 16 Bundesländern.',
    'Durchschnittsgehalt 2026: rund 46.000 € pro Jahr - leicht unter dem Bundesdurchschnitt.',
    'Wirtschaftliche Vielfalt: Banken/Versicherungen (Düsseldorf, Köln), Chemie (Leverkusen, Marl), Logistik (Duisburg, Dortmund), Medien (Köln).',
    'Niedrige Mieten in vielen Städten des Ruhrgebiets - Bochum, Gelsenkirchen, Duisburg deutlich günstiger als süddeutsche Metropolen.',
    'Düsseldorf hat eine der höchsten Dichten an Konzernzentralen Deutschlands (Henkel, E.ON, Vodafone, Metro).',
    'Großer öffentlicher Dienst durch Landeshauptstadt, Bezirksregierungen und Hochschulen.',
  ],
  faqs: [
    {
      question: 'Wie hoch ist die Kirchensteuer in NRW?',
      answer:
        'In Nordrhein-Westfalen beträgt die Kirchensteuer 9 % der Lohnsteuer - der reguläre Wert in 14 von 16 Bundesländern. Nur Bayern und Baden-Württemberg haben mit 8 % den niedrigeren Satz. Wer aus der Kirche austritt, zahlt keine Kirchensteuer und behält je nach Bruttogehalt 100-400 Euro mehr Netto pro Jahr.',
    },
    {
      question: 'Wie viel Netto bleiben in NRW bei 3.500 € brutto?',
      answer:
        'Bei 3.500 € brutto pro Monat in Steuerklasse 1 ohne Kirchensteuer bleiben in NRW rund 2.270-2.310 € netto. Mit Kirchensteuer (9 %) sinkt das Netto um etwa 35-45 € auf rund 2.225-2.265 €.',
    },
    {
      question: 'Verdient man in Düsseldorf mehr als in Dortmund?',
      answer:
        'Ja. Düsseldorf gehört zu den bestbezahlten Standorten in NRW (Banken, Werbung, Konzernzentralen) - die Gehälter liegen rund 8-15 % über dem NRW-Schnitt. Dortmund hat aufgeholt durch Tech-Standort und Logistik, liegt aber typisch 5-10 % darunter. Die Mieten sind dafür in Dortmund deutlich niedriger.',
    },
    {
      question: 'Wo lohnt sich Wohnen in NRW finanziell am meisten?',
      answer:
        'Aus Sicht "Netto minus Miete": Bochum, Essen, Dortmund und Krefeld bieten das beste Verhältnis. Niedrige Mieten und ein starker Arbeitsmarkt (Logistik, Tech, Universitäten) sorgen für hohe Kaufkraft. Düsseldorf zahlt zwar mehr brutto, aber die Mieten sind oft 50-80 % höher.',
    },
    {
      question: 'Welche Branchen zahlen in NRW besonders gut?',
      answer:
        'Banken und Versicherungen in Düsseldorf und Köln, Chemie in Leverkusen (Bayer) und Marl (Evonik), Energie (E.ON, RWE), Stahl (ThyssenKrupp) und Telekommunikation in Bonn (Telekom, T-Systems). Im IT-Bereich liegt Köln/Bonn rund 5-8 % unter München, aber bei deutlich niedrigeren Lebenshaltungskosten.',
    },
  ],
};

export default function NordrheinWestfalenPage() {
  return <BundeslandPageTemplate data={data} />;
}
