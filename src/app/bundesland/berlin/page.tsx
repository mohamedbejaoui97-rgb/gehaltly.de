import { Metadata } from 'next';
import BundeslandPageTemplate, {
  type BundeslandData,
} from '@/components/content/BundeslandPageTemplate';

export const metadata: Metadata = {
  title: 'Brutto-Netto-Rechner Berlin 2026 - 9 % Kirchensteuer | gehaltly.de',
  description:
    'Brutto-Netto-Rechner Berlin 2026: 9 % Kirchensteuer, Brutto-Netto-Tabelle, Durchschnittsgehalt in der Hauptstadt und Tech-Hub mit steigenden Gehältern.',
  alternates: { canonical: 'https://gehaltly.de/bundesland/berlin/' },
  openGraph: {
    title: 'Brutto-Netto-Rechner Berlin 2026',
    description:
      'Berlin: Hauptstadt mit Tech-Startups, Verwaltung und steigenden Gehältern. Brutto-Netto-Tabelle 2026.',
    url: 'https://gehaltly.de/bundesland/berlin/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Brutto-Netto Berlin',
      },
    ],
  },
};

const data: BundeslandData = {
  slug: 'berlin',
  bundeslandKey: 'berlin',
  name: 'Berlin',
  pageH1: 'Brutto-Netto-Rechner Berlin 2026',
  metaTitle: 'Brutto-Netto-Rechner Berlin 2026 - 9 % Kirchensteuer',
  metaDescription:
    'Berlin Brutto-Netto-Rechner 2026 mit 9 % Kirchensteuer, Hauptstadt-Gehältern und Tech-Hub-Daten.',
  intro:
    'Berlin ist Hauptstadt, Bundesland und größte deutsche Tech-Startup-Szene zugleich. Der Kirchensteuersatz liegt bei 9 % wie in den meisten Bundesländern. Die Durchschnittsgehälter sind 2026 zwar noch leicht unter dem Bundesschnitt - aber sie steigen seit Jahren überdurchschnittlich, getrieben von Tech-Konzernen (Zalando, N26, HelloFresh), Bundesbehörden und einem Boom der Wissenschaftslandschaft.',
  kirchensteuerSatz: 9,
  hauptstadt: 'Berlin',
  einwohner: '3,8 Mio.',
  durchschnittsgehalt: '43.500 €',
  cities: [
    { name: 'Mitte', bemerkung: 'Verwaltung, Botschaften, Konzernzentralen' },
    { name: 'Charlottenburg-Wilmersdorf', bemerkung: 'Universitäten, Wirtschaft' },
    { name: 'Friedrichshain-Kreuzberg', bemerkung: 'Tech-Startups, Kreativwirtschaft' },
    { name: 'Tempelhof-Schöneberg', bemerkung: 'Mittelstand, gute Anbindung' },
    { name: 'Pankow', bemerkung: 'Familienfreundlich, Tech-Hubs' },
    { name: 'Spandau', bemerkung: 'Industrie, niedrigere Mieten' },
  ],
  fakten: [
    'Kirchensteuersatz: 9 % der Lohnsteuer - der reguläre Wert in 14 von 16 Bundesländern.',
    'Durchschnittsgehalt 2026: rund 43.500 € pro Jahr - leicht unter dem Bundesdurchschnitt, aber stark steigend.',
    'Größter Tech-Standort Deutschlands nach München: Zalando, N26, HelloFresh, Delivery Hero, SoundCloud, Babbel und viele Scale-ups.',
    'Großer öffentlicher Dienst: Bundesbehörden, Bundestag, Senatsverwaltung - rund 200.000 Beschäftigte.',
    'Berlin hat über 6 Universitäten und Hochschulen mit insgesamt 200.000+ Studierenden - hoher Anteil an Wissenschafts- und Forschungsjobs.',
    'Mietmarkt 2026: weiterhin angespannt, Mieten in Mitte/Friedrichshain teils über 18 €/m². Spandau, Marzahn und Reinickendorf bieten deutlich günstigere Alternativen.',
  ],
  faqs: [
    {
      question: 'Wie hoch ist die Kirchensteuer in Berlin?',
      answer:
        'In Berlin beträgt die Kirchensteuer 9 % der Lohnsteuer - der reguläre Wert in 14 von 16 Bundesländern. Nur Bayern und Baden-Württemberg haben mit 8 % den niedrigeren Satz. Berlin ist eines der konfessionell vielfältigsten Bundesländer - der Anteil der Kirchensteuerzahler liegt unter dem Bundesdurchschnitt.',
    },
    {
      question: 'Wie viel Netto bleibt in Berlin bei 3.000 € brutto?',
      answer:
        'Bei 3.000 € brutto pro Monat in Steuerklasse 1 ohne Kirchensteuer bleiben in Berlin rund 1.990-2.030 € netto. Mit Kirchensteuer (9 %) sinkt das Netto um etwa 25-35 € auf rund 1.965-2.005 €.',
    },
    {
      question: 'Verdient man in Berlin weniger als in München?',
      answer:
        'Ja - aktuell noch. Im Schnitt liegen Berliner Gehälter rund 8-15 % unter denen in München, am stärksten ausgeprägt in IT, Finance und Beratung. Allerdings holt Berlin auf: in Tech-Startups und bei Konzernen mit Hauptstadt-Schwerpunkt sind die Gehälter inzwischen mit München vergleichbar - bei deutlich niedrigeren Lebenshaltungskosten in vielen Bezirken.',
    },
    {
      question: 'Welche Branchen zahlen in Berlin besonders gut?',
      answer:
        'Tech-Konzerne und Scale-ups (Zalando, N26, HelloFresh, Delivery Hero, Wayfair) zahlen 70.000-100.000 € für Senior-IT-Profile. Beratung (BCG, McKinsey, Roland Berger), Pharma/Healthcare und Bundesbehörden mit Stellenzulage Berlin (rund 200 € pro Monat) bieten ebenfalls überdurchschnittliche Gehälter.',
    },
    {
      question: 'Lohnt sich ein Umzug nach Berlin aus finanzieller Sicht?',
      answer:
        'Hängt stark von der Branche ab. Im Tech-Sektor und bei Bundesbehörden ist Berlin attraktiv - hohe Gehälter, lebendiger Arbeitsmarkt, internationaler Charakter. Mieten sind in Mitte/Prenzlauer Berg/Kreuzberg teuer, in Spandau, Marzahn oder Treptow noch bezahlbar. Aus Steuersicht keine Vorteile (9 % KiSt wie der Bundesschnitt).',
    },
  ],
};

export default function BerlinPage() {
  return <BundeslandPageTemplate data={data} />;
}
