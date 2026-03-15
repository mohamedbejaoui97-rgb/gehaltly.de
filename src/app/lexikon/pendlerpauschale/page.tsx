/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Pendlerpauschale 2026 - Entfernungspauschale & Berechnung",
  description:
    "Pendlerpauschale 2026: 0,30 €/km (erste 20 km) und 0,38 €/km (ab 21. km). Berechnung, Höchstbetrag, Steuererklärung und Tipps für Pendler.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/pendlerpauschale/",
  },
  openGraph: {
    title: "Pendlerpauschale 2026 - Entfernungspauschale & Berechnung",
    description:
      "Pendlerpauschale 2026: 0,30 €/km und 0,38 €/km ab dem 21. Kilometer. Berechnung und Steuertipps.",
    url: "https://gehaltly.de/lexikon/pendlerpauschale/",
    siteName: "gehaltly.de",
    type: "article",
    images: [{
      url: 'https://gehaltly.de/logo.png',
      width: 800,
      height: 230,
      alt: 'gehaltly.de - Gehaltsrechner für Deutschland',
    }],
  },
};

export default function PendlerpauschalePage() {
  const content = (
    <>
      <h2>Was ist die Pendlerpauschale?</h2>
      <p>
        Die Pendlerpauschale (offiziell: Entfernungspauschale) ist ein steuerlicher Freibetrag für den Weg zwischen Wohnung und erster Tätigkeitsstätte. Sie kann als Werbungskosten in der Steuererklärung geltend gemacht werden und mindert das zu versteuernde Einkommen. Die gesetzliche Grundlage findet sich in §9 Abs. 1 Nr. 4 EStG. Weitere Informationen bietet das <a href="https://www.bundesfinanzministerium.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesfinanzministerium</a>.
      </p>

      <h2>Höhe der Pendlerpauschale 2026</h2>
      <p>
        Für das Steuerjahr 2026 gelten folgende Sätze:
      </p>
      <ul>
        <li><strong>0,30 € pro Kilometer</strong> für die ersten 20 Kilometer (einfache Entfernung)</li>
        <li><strong>0,38 € pro Kilometer</strong> ab dem 21. Kilometer (erhöhte Pauschale seit 2022)</li>
      </ul>
      <p>
        Es zählt nur die <strong>einfache Entfernung</strong> (nicht Hin- und Rückweg) und nur die kürzeste Straßenverbindung. Eine längere Strecke kann angesetzt werden, wenn sie verkehrsgünstiger ist.
      </p>

      <h2>Berechnung der Pendlerpauschale</h2>
      <p>
        Die Formel zur Berechnung lautet:
      </p>
      <ul>
        <li><strong>Bis 20 km</strong>: Arbeitstage × Entfernung × 0,30 €</li>
        <li><strong>Ab 21 km</strong>: (Arbeitstage × 20 km × 0,30 €) + (Arbeitstage × restliche km × 0,38 €)</li>
      </ul>
      <p>
        <strong>Beispiel:</strong> Bei 35 km einfacher Entfernung und 220 Arbeitstagen ergibt sich: (220 × 20 × 0,30 €) + (220 × 15 × 0,38 €) = 1.320 € + 1.254 € = <strong>2.574 €</strong> jährlich.
      </p>

      <h2>Höchstbetrag und Besonderheiten</h2>
      <p>
        Für Nutzer öffentlicher Verkehrsmittel gilt ein <strong>Höchstbetrag von 4.500 €</strong> pro Jahr. Wer mit dem eigenen Pkw fährt, kann auch höhere Beträge geltend machen. Bei Fahrgemeinschaften kann jeder Mitfahrer die Pauschale ansetzen, nicht nur der Fahrer.
      </p>
      <ul>
        <li><strong>Verkehrsmittelunabhängig</strong>: Die Pauschale gilt für Auto, Fahrrad, ÖPNV, zu Fuß</li>
        <li><strong>Höchstbetrag 4.500 €</strong>: Nur bei öffentlichen Verkehrsmitteln (kann durch Nachweis der tatsächlichen Ticketkosten überschritten werden)</li>
        <li><strong>Kein Höchstbetrag</strong>: Bei Nutzung des eigenen oder Dienst-Pkw</li>
        <li><strong>Arbeitstage</strong>: Das Finanzamt akzeptiert in der Regel 220-230 Arbeitstage bei einer 5-Tage-Woche</li>
      </ul>

      <h2>Pendlerpauschale in der Steuererklärung</h2>
      <p>
        Die Pendlerpauschale wird in der Anlage N der Steuererklärung unter Werbungskosten eingetragen. Sie lohnt sich besonders, wenn die Fahrtkosten den Arbeitnehmer-Pauschbetrag von <strong>1.230 €</strong> (2026) übersteigen. In diesem Fall wird nur der übersteigende Betrag zusätzlich steuermindernd wirksam.
      </p>

      <h2>Mobilitätsprämie für Geringverdiener</h2>
      <p>
        Arbeitnehmer, deren Einkommen unter dem Grundfreibetrag von 12.348 € (2026) liegt und die daher keine Einkommensteuer zahlen, können stattdessen eine <strong>Mobilitätsprämie</strong> beantragen. Diese beträgt 14 % der Entfernungspauschale ab dem 21. Kilometer und wird als Barauszahlung gewährt.
      </p>

      <h2>Homeoffice-Pauschale als Alternative</h2>
      <p>
        Wer im Homeoffice arbeitet, kann die <strong>Homeoffice-Pauschale von 6 € pro Tag</strong> (maximal 1.260 € pro Jahr für 210 Tage) ansetzen. An Homeoffice-Tagen kann die Pendlerpauschale nicht zusätzlich geltend gemacht werden. Es lohnt sich, zu vergleichen, welche Pauschale günstiger ist.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist die Pendlerpauschale 2026 pro Kilometer?",
      answer:
        "Die Pendlerpauschale beträgt 0,30 € pro Kilometer für die ersten 20 Kilometer und 0,38 € pro Kilometer ab dem 21. Kilometer der einfachen Entfernung.",
    },
    {
      question: "Kann ich die Pendlerpauschale auch als Radfahrer nutzen?",
      answer:
        "Ja, die Pendlerpauschale ist verkehrsmittelunabhängig. Sie gilt für Auto, Fahrrad, ÖPNV, E-Scooter und sogar für Fußgänger.",
    },
    {
      question: "Was ist günstiger: Pendlerpauschale oder Homeoffice-Pauschale?",
      answer:
        "Das hängt von der Entfernung ab. Ab etwa 20 km einfacher Entfernung ist die Pendlerpauschale pro Tag (ab 6 €) meist günstiger als die Homeoffice-Pauschale (6 €/Tag). Bei kürzeren Entfernungen kann die Homeoffice-Pauschale vorteilhafter sein.",
    },
    {
      question: "Gilt die Pendlerpauschale für Hin- und Rückweg?",
      answer:
        "Nein, die Pendlerpauschale gilt nur für die einfache Entfernung, also den Hinweg oder Rückweg. Der doppelte Weg kann nicht angesetzt werden.",
    },
    {
      question: "Wie viele Arbeitstage kann ich für die Pendlerpauschale ansetzen?",
      answer:
        "Das Finanzamt akzeptiert bei einer 5-Tage-Woche in der Regel 220-230 Arbeitstage pro Jahr, bei einer 6-Tage-Woche entsprechend mehr. Urlaub und Krankheitstage sind bereits berücksichtigt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/werbungskosten", title: "Werbungskosten" },
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Pendlerpauschale"
      description="Die Pendlerpauschale (Entfernungspauschale) ist ein steuerlicher Freibetrag für den Arbeitsweg, der als Werbungskosten absetzbar ist."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
