/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Steuerklasse 2 - Alleinerziehende: Entlastungsbetrag & Vorteile 2026",
  description:
    "Steuerklasse 2 für Alleinerziehende mit Entlastungsbetrag. Voraussetzungen, Freibeträge, Beispielrechnungen und wie Sie die Steuerklasse 2 beantragen.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/steuerklasse-2/",
  },
};

export default function Steuerklasse2Page() {
  const content = (
    <>
      <h2>Wer gehört in Steuerklasse 2?</h2>
      <p>
        Die Steuerklasse 2 ist speziell für alleinerziehende Arbeitnehmer vorgesehen und bietet einen zusätzlichen Steuervorteil. Folgende Voraussetzungen müssen erfüllt sein:
      </p>
      <ul>
        <li><strong>Alleinerziehend:</strong> Sie sind nicht verheiratet, geschieden, dauernd getrennt lebend oder verwitwet</li>
        <li><strong>Mindestens ein Kind</strong> lebt in Ihrem Haushalt, für das Sie Kindergeld oder Kinderfreibetrag erhalten</li>
        <li><strong>Keine Haushaltsgemeinschaft</strong> mit einer anderen volljährigen Person (außer Ihren Kindern)</li>
        <li><strong>Alleiniger Haushaltsvorstand:</strong> Sie tragen die Kosten des Haushalts hauptsächlich allein</li>
      </ul>
      <p>
        Wichtig: Wenn Sie mit einem neuen Partner zusammenziehen (auch ohne Heirat), entfällt der Anspruch auf Steuerklasse 2, da keine Haushaltsgemeinschaft mit einer anderen volljährigen Person bestehen darf.
      </p>

      <h2>Abzüge und Freibeträge in Steuerklasse 2</h2>
      <p>
        In der Steuerklasse 2 gelten für 2026 die gleichen Freibeträge wie in Steuerklasse 1, plus:
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> 11.604 € pro Jahr</li>
        <li><strong>Entlastungsbetrag für Alleinerziehende:</strong> 4.260 € für das erste Kind</li>
        <li><strong>Erhöhungsbetrag:</strong> 240 € für jedes weitere Kind</li>
        <li><strong>Arbeitnehmerpauschbetrag:</strong> 1.230 € pro Jahr</li>
        <li><strong>Sozialausgabenpauschbetrag:</strong> 36 € pro Jahr</li>
        <li><strong>Vorsorgepauschale:</strong> Abhängig vom Bruttoeinkommen</li>
      </ul>
      <p>
        Der Entlastungsbetrag ist das zentrale Merkmal der Steuerklasse 2 und führt zu niedrigeren monatlichen Steuerabzügen. Bei zwei Kindern beträgt der Entlastungsbetrag 4.500 € (4.260 € + 240 €), bei drei Kindern 4.740 € usw.
      </p>

      <h2>Beispielrechnung Steuerklasse 2</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 3.500 € in Steuerklasse 2 mit einem Kind (ohne Kirchensteuer):
      </p>
      <ul>
        <li><strong>Bruttogehalt:</strong> 3.500,00 €</li>
        <li><strong>Rentenversicherung (9,3%):</strong> -325,50 €</li>
        <li><strong>Arbeitslosenversicherung (1,3%):</strong> -45,50 €</li>
        <li><strong>Krankenversicherung (7,3% + Zusatzbeitrag ~1,0%):</strong> -290,50 €</li>
        <li><strong>Pflegeversicherung (1,7%):</strong> -59,50 €</li>
        <li><strong>Lohnsteuer:</strong> ca. -450,00 € (ca. 70 € weniger als Steuerklasse 1)</li>
        <li><strong>Solidaritätszuschlag:</strong> ca. -0,00 €</li>
        <li><strong>Nettogehalt:</strong> ca. 2.329,00 €</li>
      </ul>
      <p>
        Im Vergleich zu Steuerklasse 1 sparen Sie monatlich etwa 60-70 € an Lohnsteuer durch den Entlastungsbetrag.
      </p>

      <h2>Vor- und Nachteile der Steuerklasse 2</h2>
      <p>
        <strong>Vorteile:</strong>
      </p>
      <ul>
        <li>Deutlich niedrigere monatliche Steuerabzüge durch den Entlastungsbetrag</li>
        <li>Mehr Nettoeinkommen jeden Monat (ca. 60-80 € mehr als Steuerklasse 1)</li>
        <li>Höhere Lohnersatzleistungen (Arbeitslosengeld, Elterngeld, Krankengeld)</li>
        <li>Steuerliche Anerkennung der besonderen Belastung als Alleinerziehende/r</li>
        <li>Zusätzlicher Freibetrag pro weiterem Kind</li>
      </ul>
      <p>
        <strong>Nachteile:</strong>
      </p>
      <ul>
        <li>Antrag beim Finanzamt erforderlich (nicht automatisch)</li>
        <li>Voraussetzungen müssen dauerhaft erfüllt sein</li>
        <li>Bei Änderung der Lebensumstände (z.B. neuer Partner) muss die Steuerklasse gewechselt werden</li>
        <li>Meldepflicht bei Wegfall der Voraussetzungen</li>
      </ul>

      <h2>Wechsel der Steuerklasse</h2>
      <p>
        So beantragen Sie die Steuerklasse 2:
      </p>
      <ul>
        <li><strong>Antrag stellen:</strong> Formular "Antrag auf Lohnsteuerermäßigung" beim Finanzamt einreichen</li>
        <li><strong>Versicherung abgeben:</strong> Bestätigen, dass die Voraussetzungen erfüllt sind</li>
        <li><strong>Nachweise vorlegen:</strong> Geburtsurkunde des Kindes, Kindergeldbescheid</li>
        <li><strong>Haushaltsbescheinigung:</strong> Bestätigung, dass keine andere volljährige Person im Haushalt lebt</li>
      </ul>
      <p>
        Der Wechsel aus Steuerklasse 2 ist in folgenden Fällen erforderlich:
      </p>
      <ul>
        <li><strong>Bei Heirat:</strong> Automatischer Wechsel in Steuerklasse 4 oder Kombination 3/5</li>
        <li><strong>Bei neuem Partner im Haushalt:</strong> Wechsel zurück in Steuerklasse 1</li>
        <li><strong>Wenn das Kind auszieht:</strong> Wechsel in Steuerklasse 1 (außer es gibt weitere Kinder im Haushalt)</li>
        <li><strong>Volljähriges Kind ohne Kindergeldanspruch:</strong> Wechsel in Steuerklasse 1</li>
      </ul>
      <p>
        Wichtig: Sie müssen das Finanzamt innerhalb eines Monats informieren, wenn die Voraussetzungen für Steuerklasse 2 wegfallen. Zu Unrecht bezogene Steuervorteile müssen zurückgezahlt werden.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie beantrage ich die Steuerklasse 2?",
      answer:
        "Die Steuerklasse 2 beantragen Sie beim Finanzamt mit dem Formular 'Antrag auf Lohnsteuerermäßigung' bzw. 'Versicherung zum Entlastungsbetrag für Alleinerziehende'. Sie müssen bestätigen, dass Sie alleinerziehend sind und keine Haushaltsgemeinschaft mit einer anderen volljährigen Person besteht. Der Antrag kann auch online über ELSTER gestellt werden.",
    },
    {
      question: "Kann ich in Steuerklasse 2 bleiben, wenn mein Partner bei mir einzieht?",
      answer:
        "Nein, wenn Sie mit Ihrem Partner eine Haushaltsgemeinschaft bilden, entfällt der Anspruch auf Steuerklasse 2, auch wenn Sie nicht heiraten. Sie müssen dann in Steuerklasse 1 wechseln. Bei Heirat erfolgt automatisch der Wechsel in Steuerklasse 4.",
    },
    {
      question: "Wie viel mehr Netto habe ich in Steuerklasse 2 im Vergleich zu Steuerklasse 1?",
      answer:
        "Durch den Entlastungsbetrag von 4.260 € pro Jahr haben Sie monatlich etwa 60-80 € mehr netto als in Steuerklasse 1 (bei durchschnittlichem Einkommen). Der genaue Betrag hängt von Ihrer Einkommenshöhe ab. Mit jedem weiteren Kind kommen monatlich etwa 15-20 € hinzu.",
    },
    {
      question: "Was passiert, wenn ich die Voraussetzungen nicht mehr erfülle?",
      answer:
        "Sie müssen das Finanzamt innerhalb eines Monats informieren, wenn die Voraussetzungen wegfallen (z.B. neuer Partner zieht ein, Kind zieht aus). Das Finanzamt ordnet Sie dann in Steuerklasse 1 ein. Zu Unrecht erhaltene Steuervorteile müssen über die Steuererklärung zurückgezahlt werden.",
    },
    {
      question: "Gilt die Steuerklasse 2 auch bei geteiltem Sorgerecht?",
      answer:
        "Bei geteiltem Sorgerecht kommt es darauf an, bei wem das Kind hauptsächlich gemeldet ist und wer das Kindergeld erhält. Nur der Elternteil, bei dem das Kind mit Haupt- oder alleinigem Wohnsitz gemeldet ist, kann Steuerklasse 2 beantragen. Im Wechselmodell (50/50) kann nur ein Elternteil den Entlastungsbetrag erhalten.",
    },
    {
      question: "Kann ich den Entlastungsbetrag auch ohne Steuerklasse 2 bekommen?",
      answer:
        "Ja, auch wenn Sie nicht in Steuerklasse 2 sind, können Sie den Entlastungsbetrag über die Steuererklärung geltend machen, sofern die Voraussetzungen erfüllt sind. Die Steuerklasse 2 sorgt lediglich dafür, dass der Vorteil bereits monatlich beim Gehalt berücksichtigt wird statt erst bei der Jahressteuererklärung.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/steuerklasse-1", title: "Steuerklasse 1" },
    { href: "/lexikon/steuerklasse-4", title: "Steuerklasse 4" },
    { href: "/lexikon/kinderfreibetrag", title: "Kinderfreibetrag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Steuerklasse 2"
      description="Die Steuerklasse 2 gilt für alleinerziehende Arbeitnehmer und bietet einen steuerlichen Entlastungsbetrag."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
