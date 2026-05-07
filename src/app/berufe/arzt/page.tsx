import { Metadata } from 'next';
import ProfessionPageTemplate, {
  type ProfessionData,
} from '@/components/content/ProfessionPageTemplate';

export const metadata: Metadata = {
  title: 'Gehalt Arzt 2026 - Brutto Netto Assistenzarzt Facharzt | gehaltly.de',
  description:
    'Was verdient ein Arzt 2026? Brutto-Netto-Berechnung für Assistenzarzt, Facharzt, Oberarzt und Chefarzt. TV-Ärzte, Facharztzulage und niedergelassene Ärzte im Vergleich.',
  alternates: { canonical: 'https://gehaltly.de/berufe/arzt/' },
  openGraph: {
    title: 'Gehalt Arzt 2026 - Brutto Netto Assistenzarzt Facharzt',
    description:
      'Arzt-Gehalt 2026: Assistenzarzt 65.000 €, Facharzt 90.000 €, Oberarzt 110.000 €, Chefarzt 200.000+ €. Brutto-Netto-Berechnung.',
    url: 'https://gehaltly.de/berufe/arzt/',
    siteName: 'gehaltly.de',
    type: 'article',
    images: [
      {
        url: 'https://gehaltly.de/logo.png',
        width: 800,
        height: 230,
        alt: 'gehaltly.de - Gehalt Arzt',
      },
    ],
  },
};

const profession: ProfessionData = {
  slug: 'arzt',
  title: 'Arzt',
  pageH1: 'Gehalt als Arzt / Ärztin 2026 - Assistenzarzt bis Chefarzt',
  intro:
    'Ärztinnen und Ärzte zählen in Deutschland zu den am besten bezahlten Berufsgruppen. Das Bruttogehalt 2026 reicht von rund 65.000 Euro (Assistenzarzt im 1. Jahr nach TV-Ärzte) bis zu 200.000+ Euro (Chefarzt mit Beteiligungsmodellen). Niedergelassene Vertragsärzte erreichen oft sechsstellige Honorarumsätze, dafür mit Praxiskosten und unternehmerischem Risiko.',
  metaTitle: 'Gehalt Arzt 2026 - Brutto Netto Assistenzarzt Facharzt Oberarzt',
  metaDescription:
    'Arzt-Gehalt 2026 nach TV-Ärzte: Assistenzarzt, Facharzt, Oberarzt, Chefarzt mit Brutto-Netto-Berechnung.',
  einstiegsgehalt: '65.000 €',
  durchschnittsgehalt: '90.000 - 130.000 €',
  topGehalt: '200.000+ €',
  topGehaltLabel: 'Chefarzt / Niedergelassen',
  avgYearly: 95000,
  avgMonthly: 7917,
  occupationDescription:
    'Ärztinnen und Ärzte diagnostizieren und behandeln Krankheiten in Krankenhäusern, Praxen und Forschungseinrichtungen. Sie arbeiten in mehr als 30 Fachgebieten von Allgemeinmedizin über Chirurgie bis Radiologie.',
  schemaMedian: 95000,
  schemaP10: 65000,
  schemaP90: 180000,
  einflussfaktoren: [
    {
      icon: 'Building2',
      title: 'Karrierestufe',
      description:
        'Assistenzarzt (TV-Ärzte E1, 1.-6. Jahr): 65.000-87.000 €. Facharzt (E2): 92.000-118.000 €. Oberarzt (E3): 115.000-145.000 €. Leitender Oberarzt (E4): 135.000-160.000 €. Chefarzt: 180.000-300.000+ € (mit Beteiligungen).',
    },
    {
      icon: 'TrendingUp',
      title: 'Fachrichtung',
      description:
        'Spitzenverdiener: Radiologie, Strahlentherapie, Anästhesie, Chirurgie (Orthopädie, Kardio). Geringere Honorare typischerweise: Pädiatrie, Allgemeinmedizin, Pathologie - außer in Kombination mit Privatpraxis.',
    },
    {
      icon: 'GraduationCap',
      title: 'Klinik vs. Niederlassung',
      description:
        'Klinikärzte: feste TV-Ärzte-Tarifgehälter, 40-Stunden-Woche, viele Bereitschaftsdienste. Niedergelassene: Honorarumsätze von 200.000-500.000 € pro Jahr brutto, davon 30-50 % Praxiskosten.',
    },
    {
      icon: 'MapPin',
      title: 'Region & Träger',
      description:
        'Universitätskliniken, kommunale Kliniken (TV-Ärzte) und konfessionelle Träger (TV-Ärzte/AVR) zahlen ähnlich. Privatkliniken (Helios, Asklepios, Sana) verhandeln frei, oft mit Boni und Beteiligungen für Senior-Positionen.',
    },
  ],
  bundeslandData: [
    { land: 'Bayern', gehalt: '102.000 €', diff: '+7 %' },
    { land: 'Baden-Württemberg', gehalt: '100.000 €', diff: '+5 %' },
    { land: 'Hessen', gehalt: '99.000 €', diff: '+4 %' },
    { land: 'Hamburg', gehalt: '97.500 €', diff: '+3 %' },
    { land: 'Nordrhein-Westfalen', gehalt: '95.000 €', diff: '0 %' },
    { land: 'Niedersachsen', gehalt: '94.000 €', diff: '-1 %' },
    { land: 'Berlin', gehalt: '93.000 €', diff: '-2 %' },
    { land: 'Sachsen', gehalt: '90.000 €', diff: '-5 %' },
    { land: 'Mecklenburg-Vorpommern', gehalt: '88.000 €', diff: '-7 %' },
  ],
  karriereIntro:
    'Der Arztberuf bietet 2026 sichere Beschäftigung, hohes Einkommen und vielfältige Spezialisierungswege. Wichtige Trends:',
  karriereItems: [
    {
      title: 'Tariferhöhung TV-Ärzte 2026',
      description:
        'Der TV-Ärzte/TdL und TV-Ärzte/VKA wurden 2026 erneut angehoben - im Mittel um rund 4-5 % linear. Assistenzärzte profitieren mit 250-400 € mehr brutto pro Monat.',
    },
    {
      title: 'Niederlassung als Vertragsarzt',
      description:
        'Die Niederlassung in eigener Praxis oder als Mitgesellschafter in einem MVZ bietet Honorarumsätze von 250.000-500.000 €/Jahr. Nach Abzug der Praxiskosten (30-50 %) bleibt häufig deutlich mehr als das Klinikgehalt.',
    },
    {
      title: 'Privatabrechnung',
      description:
        'Privatpatienten und IGeL-Leistungen können das Einkommen niedergelassener Ärzte um 20-40 % erhöhen, je nach Fachgebiet und Standort.',
    },
    {
      title: 'Klinikärzte und Beteiligungsmodelle',
      description:
        'Chefärzte erhalten zusätzlich zum Grundgehalt Beteiligungen an Privatpatienten-Honoraren - das Gesamteinkommen kann 250.000-400.000 € pro Jahr erreichen.',
    },
  ],
  faqs: [
    {
      question: 'Was verdient ein Arzt 2026?',
      answer:
        'Ein Arzt in Deutschland verdient 2026 nach TV-Ärzte als Assistenzarzt 65.000-87.000 €, als Facharzt 92.000-118.000 €, als Oberarzt 115.000-145.000 € und als Chefarzt 180.000-300.000+ € brutto pro Jahr. Niedergelassene Vertragsärzte erreichen Honorarumsätze von 200.000-500.000 € (vor Praxiskosten).',
    },
    {
      question: 'Wie viel Netto bleibt einem Arzt?',
      answer:
        'Ein Assistenzarzt mit 7.917 € brutto/Monat behält rund 4.500-4.700 € netto in Steuerklasse 1. Ein Facharzt mit 9.000 € brutto/Monat hat rund 5.000-5.200 € netto. Oberärzte (12.000 € brutto) erreichen 6.500-6.800 € netto.',
    },
    {
      question: 'Was ist der TV-Ärzte/VKA?',
      answer:
        'Der TV-Ärzte/VKA ist der Tarifvertrag für Ärzte an kommunalen Krankenhäusern. Er staffelt das Gehalt nach Karrierestufen E1-E4 (Assistenzarzt bis Leitender Oberarzt) und Erfahrungsstufen 1-6. Vergleichbare Tarifverträge gibt es für Universitätskliniken (TV-Ärzte/TdL) und kirchliche Träger (AVR).',
    },
    {
      question: 'Verdient ein niedergelassener Arzt mehr als ein Klinikarzt?',
      answer:
        'In der Regel ja - aber bei höherem Risiko. Niedergelassene Ärzte erzielen Honorarumsätze von 250.000-500.000 € pro Jahr. Nach Abzug der Praxiskosten (Personal, Miete, Geräte: 30-50 %) bleiben 130.000-280.000 € Reingewinn vor Steuer. Klinikärzte haben weniger Risiko, dafür festes Gehalt.',
    },
    {
      question: 'Wie viel verdient ein Chefarzt?',
      answer:
        'Chefärzte verdienen je nach Klinik und Spezialfach zwischen 180.000 und 400.000 Euro pro Jahr. Das Grundgehalt liegt häufig bei 180.000-220.000 €, hinzu kommen Beteiligungen an Privatpatienten-Honoraren. In privaten Klinikketten und in spezialisierten Fachgebieten (Kardiologie, Orthopädie, Onkologie) sind auch über 500.000 € möglich.',
    },
  ],
};

export default function ArztPage() {
  return <ProfessionPageTemplate profession={profession} />;
}
