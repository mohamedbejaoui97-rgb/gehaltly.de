import { Metadata } from 'next';
import BundeslandPageTemplate, {
  type BundeslandData,
} from '@/components/content/BundeslandPageTemplate';

export const metadata: Metadata = {
  title: 'Brutto-Netto-Rechner Bayern 2026 - 8 % Kirchensteuer | gehaltly.de',
  description:
    'Brutto-Netto-Rechner Bayern 2026: 8 % Kirchensteuer (statt 9 %), Brutto-Netto-Tabelle, Durchschnittsgehalt und Top-Städte München, Nürnberg, Augsburg, Regensburg.',
  alternates: { canonical: 'https://gehaltly.de/bundesland/bayern/' },
  openGraph: {
    title: 'Brutto-Netto-Rechner Bayern 2026',
    description:
      'Bayern: 8 % Kirchensteuer, höchste Durchschnittsgehälter Deutschlands. Brutto-Netto-Tabelle und Vergleich.',
    url: 'https://gehaltly.de/bundesland/bayern/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Brutto-Netto Bayern',
      },
    ],
  },
};

const data: BundeslandData = {
  slug: 'bayern',
  bundeslandKey: 'bayern',
  name: 'Bayern',
  pageH1: 'Brutto-Netto-Rechner Bayern 2026',
  metaTitle: 'Brutto-Netto-Rechner Bayern 2026 - 8 % Kirchensteuer',
  metaDescription:
    'Brutto-Netto-Rechner Bayern 2026 mit 8 % Kirchensteuer, Tabelle, Top-Städten und Gehaltsdaten.',
  intro:
    'Bayern profitiert mit 8 % vom niedrigsten Kirchensteuersatz Deutschlands - das macht über das Jahr je nach Gehalt 100-300 Euro mehr Netto aus. Gleichzeitig liegen die Durchschnittsgehälter in Bayern rund 8-15 % über dem Bundesdurchschnitt, getrieben durch Automobil, Maschinenbau und Tech in München.',
  kirchensteuerSatz: 8,
  hauptstadt: 'München',
  einwohner: '13,2 Mio.',
  durchschnittsgehalt: '50.500 €',
  cities: [
    { name: 'München', bemerkung: 'Höchste Gehälter, hohe Lebenshaltungskosten' },
    { name: 'Nürnberg', bemerkung: 'Industrie, Logistik, mittlere Mieten' },
    { name: 'Augsburg', bemerkung: 'Maschinenbau, niedrigere Mieten als München' },
    { name: 'Regensburg', bemerkung: 'BMW Werk, Universität, attraktive Region' },
    { name: 'Würzburg', bemerkung: 'Universitätsstadt, gute Lebensqualität' },
    { name: 'Ingolstadt', bemerkung: 'Audi-Standort, hohe Industriegehälter' },
  ],
  fakten: [
    'Kirchensteuersatz: 8 % der Lohnsteuer (bundesweit niedrigster Wert, gemeinsam mit Baden-Württemberg).',
    'Durchschnittsgehalt 2026: rund 50.500 € pro Jahr - rund 8 % über dem Bundesdurchschnitt von 47.000 €.',
    'Höchste IT-Gehälter Deutschlands: Softwareentwickler verdienen in München 75.000 € im Schnitt vs. 65.000 € im Bundesmittel.',
    'Bayerische Familien profitieren zusätzlich vom Bayerischen Familiengeld (250 €/Monat im 2. Lebensjahr) - getrennt vom Elterngeld.',
    'Beamte in Bayern erhalten den höchsten Familienzuschlag und eine Ballungsraumzulage in München (rund 200 € pro Monat).',
    'Bayern hat 12 gesetzliche Feiertage (Mariä Himmelfahrt regional) - mehr als die meisten Bundesländer.',
  ],
  faqs: [
    {
      question: 'Wie hoch ist die Kirchensteuer in Bayern?',
      answer:
        'In Bayern beträgt die Kirchensteuer 8 % der Lohnsteuer - genauso wie in Baden-Württemberg. In allen anderen 14 Bundesländern liegt der Satz bei 9 %. Wer aus der Kirche austritt, zahlt keine Kirchensteuer und behält über das Jahr 100-400 Euro mehr Netto - abhängig vom Bruttogehalt.',
    },
    {
      question: 'Verdient man in Bayern mehr als im Bundesdurchschnitt?',
      answer:
        'Ja. Das Durchschnittsgehalt in Bayern liegt 2026 bei rund 50.500 Euro pro Jahr - rund 8 % über dem Bundesdurchschnitt. Besonders deutlich ist der Unterschied in München (Top 1 Deutschland) und Ingolstadt (Audi-Standort). In ländlichen Regionen Frankens und der Oberpfalz liegen die Gehälter näher am Bundesschnitt.',
    },
    {
      question: 'Wie viel Netto bleiben in Bayern bei 4.000 € brutto?',
      answer:
        'Bei 4.000 € brutto pro Monat in Steuerklasse 1 ohne Kirchensteuer bleiben in Bayern 2026 rund 2.530-2.580 € netto. Mit Kirchensteuer sinkt das Netto um etwa 35-45 € auf rund 2.490-2.540 €. Die Differenz zur 9-%-Kirchensteuer in anderen Bundesländern beträgt rund 4-6 € pro Monat.',
    },
    {
      question: 'Was ist das Bayerische Familiengeld?',
      answer:
        'Das Bayerische Familiengeld ist eine zusätzliche Leistung des Freistaats Bayern: 250 Euro pro Kind und Monat im zweiten Lebensjahr (250 € für das 1. Kind, 250 € für jedes weitere). Es wird zusätzlich zum bundesweiten Elterngeld und Kindergeld gezahlt - ein finanzieller Vorteil gegenüber anderen Bundesländern.',
    },
    {
      question: 'Lohnt sich ein Umzug nach Bayern aus steuerlicher Sicht?',
      answer:
        'Aus reiner Steuersicht ja: 1 % weniger Kirchensteuer, höhere Durchschnittsgehälter. Allerdings sind die Mieten und Lebenshaltungskosten in München und Umgebung 30-60 % höher als im Bundesschnitt. In ländlichen Regionen und Mittelstädten (Würzburg, Augsburg, Bayreuth) bleibt unterm Strich häufig mehr übrig.',
    },
  ],
};

export default function BayernPage() {
  return <BundeslandPageTemplate data={data} />;
}
