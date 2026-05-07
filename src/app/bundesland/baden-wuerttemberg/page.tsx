import { Metadata } from 'next';
import BundeslandPageTemplate, {
  type BundeslandData,
} from '@/components/content/BundeslandPageTemplate';

export const metadata: Metadata = {
  title: 'Brutto-Netto-Rechner Baden-Württemberg 2026 - 8 % Kirchensteuer | gehaltly.de',
  description:
    'Brutto-Netto-Rechner Baden-Württemberg 2026: 8 % Kirchensteuer, Brutto-Netto-Tabelle, Durchschnittsgehalt und Top-Städte Stuttgart, Karlsruhe, Mannheim, Freiburg.',
  alternates: { canonical: 'https://gehaltly.de/bundesland/baden-wuerttemberg/' },
  openGraph: {
    title: 'Brutto-Netto-Rechner Baden-Württemberg 2026',
    description:
      'Baden-Württemberg: 8 % Kirchensteuer, Industrieland mit hohen Gehältern. Brutto-Netto-Tabelle und Vergleich.',
    url: 'https://gehaltly.de/bundesland/baden-wuerttemberg/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Brutto-Netto Baden-Württemberg',
      },
    ],
  },
};

const data: BundeslandData = {
  slug: 'baden-wuerttemberg',
  bundeslandKey: 'baden-wuerttemberg',
  name: 'Baden-Württemberg',
  pageH1: 'Brutto-Netto-Rechner Baden-Württemberg 2026',
  metaTitle: 'Brutto-Netto-Rechner Baden-Württemberg 2026 - 8 % Kirchensteuer',
  metaDescription:
    'Brutto-Netto-Rechner Baden-Württemberg 2026 mit 8 % Kirchensteuer, Tabelle, Top-Städten und Gehaltsdaten.',
  intro:
    'Baden-Württemberg profitiert wie Bayern vom niedrigeren Kirchensteuersatz von 8 %. Mit Mercedes-Benz, Porsche, Bosch und SAP zählt das Land zu den industriellen Schwergewichten - die Durchschnittsgehälter liegen rund 6-12 % über dem Bundesdurchschnitt, in IT, Maschinenbau und Automobilbranche besonders deutlich.',
  kirchensteuerSatz: 8,
  hauptstadt: 'Stuttgart',
  einwohner: '11,3 Mio.',
  durchschnittsgehalt: '49.500 €',
  cities: [
    { name: 'Stuttgart', bemerkung: 'Mercedes-Benz, Porsche - höchste Industriegehälter' },
    { name: 'Karlsruhe', bemerkung: 'Tech-Standort mit IT-Schwerpunkt' },
    { name: 'Mannheim', bemerkung: 'Chemie und Logistik, niedrigere Mieten' },
    { name: 'Freiburg', bemerkung: 'Universitätsstadt, gute Lebensqualität' },
    { name: 'Heidelberg', bemerkung: 'Biotech, Universität, internationale Forschung' },
    { name: 'Ulm', bemerkung: 'Hochtechnologie, Daimler-Standort' },
  ],
  fakten: [
    'Kirchensteuersatz: 8 % der Lohnsteuer - genauso wie in Bayern, niedriger als in den anderen 14 Bundesländern.',
    'Durchschnittsgehalt 2026: rund 49.500 € pro Jahr - rund 6 % über dem Bundesdurchschnitt.',
    'Industriestandort: Mercedes-Benz, Porsche, Audi, Bosch, SAP, ZF Friedrichshafen - viele Konzerne mit überdurchschnittlichen Gehältern.',
    'IG Metall-Tarifvertrag deckt einen großen Teil der Industriebeschäftigten ab - mit klaren Gehaltsstrukturen und T-ZUG.',
    'Stuttgart und Heidelberg zählen zu den teuersten Mietmärkten Deutschlands.',
    'Hoher Anteil an Hidden Champions: weltmarktführende Mittelständler mit attraktiven Gehältern und Boni.',
  ],
  faqs: [
    {
      question: 'Wie hoch ist die Kirchensteuer in Baden-Württemberg?',
      answer:
        'In Baden-Württemberg beträgt die Kirchensteuer 8 % der Lohnsteuer - identisch zu Bayern. In allen anderen Bundesländern liegt der Satz bei 9 %. Wer aus der Kirche austritt, zahlt keine Kirchensteuer und behält je nach Bruttogehalt 100-400 Euro mehr Netto pro Jahr.',
    },
    {
      question: 'Verdient man in Baden-Württemberg mehr als im Bundesdurchschnitt?',
      answer:
        'Ja, deutlich. Das Durchschnittsgehalt liegt 2026 bei rund 49.500 Euro pro Jahr - rund 6 % über dem Bundesdurchschnitt. In der Automobilindustrie (Mercedes-Benz, Porsche, Audi) und im Maschinenbau sind die Gehälter besonders hoch, oft 15-25 % über dem Bundesschnitt der jeweiligen Branche.',
    },
    {
      question: 'Wie viel Netto bleiben in Baden-Württemberg bei 4.500 € brutto?',
      answer:
        'Bei 4.500 € brutto pro Monat in Steuerklasse 1 ohne Kirchensteuer bleiben in Baden-Württemberg rund 2.760-2.810 € netto. Mit Kirchensteuer (8 %) sinkt das Netto um etwa 40-50 € auf rund 2.720-2.770 €.',
    },
    {
      question: 'Was bedeutet T-ZUG im IG Metall-Tarif?',
      answer:
        'T-ZUG ist eine tarifliche Sonderzahlung der IG Metall - rund 27,5 % eines Monatsgehalts pro Jahr, zusätzlich zum Grundgehalt und Weihnachtsgeld. Beschäftigte mit Schichtarbeit, Kindern oder pflegebedürftigen Angehörigen können statt Geld zusätzliche freie Tage wählen. T-ZUG ist in Baden-Württemberg besonders relevant wegen der starken Industriebasis.',
    },
    {
      question: 'Lohnt sich ein Umzug nach Baden-Württemberg aus steuerlicher Sicht?',
      answer:
        'Aus Steuersicht klar ja: 1 % niedrigere Kirchensteuer, hohe Industriegehälter, starker Mittelstand. Stuttgart, Heidelberg und Tübingen haben allerdings sehr hohe Mieten. In Mittelstädten wie Karlsruhe, Mannheim oder Freiburg bleibt unterm Strich häufig deutlich mehr.',
    },
  ],
};

export default function BadenWuerttembergPage() {
  return <BundeslandPageTemplate data={data} />;
}
