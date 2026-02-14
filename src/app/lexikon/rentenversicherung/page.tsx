/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Rentenversicherung - Beitrag & Rentenpunkte 2026",
  description:
    "Alles zur gesetzlichen Rentenversicherung 2026: Beitragssatz 18,6%, Beitragsbemessungsgrenzen West (96.600€) und Ost (94.800€) sowie Rentenpunkte.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/rentenversicherung/",
  },
};

export default function RentenversicherungPage() {
  const content = (
    <>
      <h2>Was ist die Rentenversicherung?</h2>
      <p>
        Die gesetzliche Rentenversicherung ist eine Pflichtversicherung für Arbeitnehmer in Deutschland. Sie wird von der Deutschen Rentenversicherung verwaltet und dient der Alterssicherung. Aus den eingezahlten Beiträgen werden die Renten der heutigen Rentner finanziert (Umlageverfahren).
      </p>

      <h2>Beitragssatz zur Rentenversicherung 2026</h2>
      <p>
        Der Beitragssatz zur gesetzlichen Rentenversicherung beträgt 2026:
      </p>
      <ul>
        <li><strong>18,6%</strong> des Bruttoeinkommens</li>
        <li>Aufteilung: <strong>9,3%</strong> Arbeitgeber + <strong>9,3%</strong> Arbeitnehmer</li>
        <li>Der Beitrag wird hälftig zwischen Arbeitgeber und Arbeitnehmer geteilt</li>
      </ul>

      <h2>Beitragsbemessungsgrenzen 2026</h2>
      <p>
        Die Beitragsbemessungsgrenzen unterscheiden sich zwischen West- und Ostdeutschland:
      </p>
      <ul>
        <li><strong>West: 96.600 € pro Jahr</strong> (8.050 € pro Monat)</li>
        <li><strong>Ost: 94.800 € pro Jahr</strong> (7.900 € pro Monat)</li>
        <li>Einkommen oberhalb dieser Grenzen wird nicht mehr für die Beitragsberechnung herangezogen</li>
        <li>Maximaler monatlicher Beitrag West: 8.050 € × 18,6% = 1.497,30 € (je 748,65 € pro Partei)</li>
        <li>Maximaler monatlicher Beitrag Ost: 7.900 € × 18,6% = 1.469,40 € (je 734,70 € pro Partei)</li>
      </ul>

      <h2>Rentenpunkte - So funktioniert das System</h2>
      <p>
        Die Höhe der späteren Rente wird durch Rentenpunkte (auch Entgeltpunkte genannt) bestimmt:
      </p>
      <ul>
        <li><strong>1 Rentenpunkt</strong> = Verdienst in Höhe des Durchschnittseinkommens aller Versicherten</li>
        <li>Durchschnittseinkommen 2026: ca. 45.358 € (Vorläufiger Wert)</li>
        <li>Wer genau das Durchschnittseinkommen verdient, erhält 1,0 Rentenpunkte pro Jahr</li>
        <li>Bei doppeltem Durchschnittseinkommen: 2,0 Rentenpunkte pro Jahr</li>
        <li>Bei halbem Durchschnittseinkommen: 0,5 Rentenpunkte pro Jahr</li>
      </ul>

      <h2>Berechnung der Rentenpunkte</h2>
      <p>
        Die Formel zur Berechnung der Rentenpunkte lautet:
      </p>
      <p>
        <strong>Rentenpunkte = Eigenes Bruttoeinkommen ÷ Durchschnittseinkommen</strong>
      </p>
      <p>
        <strong>Beispiel:</strong> Bei einem Jahresbrutto von 60.000 € und einem Durchschnittseinkommen von 45.358 €:
      </p>
      <ul>
        <li>60.000 € ÷ 45.358 € = <strong>1,323 Rentenpunkte</strong></li>
      </ul>

      <h2>Beispielrechnung Rentenversicherungsbeitrag</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 4.000 €:
      </p>
      <ul>
        <li>Gesamtbeitrag: 4.000 € × 18,6% = 744 €</li>
        <li>Arbeitgeberanteil: 4.000 € × 9,3% = <strong>372 €</strong></li>
        <li>Arbeitnehmeranteil: 4.000 € × 9,3% = <strong>372 €</strong></li>
      </ul>
      <p>
        Bei einem Jahresbrutto von 48.000 € würden Sie etwa 1,058 Rentenpunkte pro Jahr sammeln.
      </p>

      <h2>Deutsche Rentenversicherung</h2>
      <p>
        Die Deutsche Rentenversicherung ist der Träger der gesetzlichen Rentenversicherung und bietet verschiedene Leistungen:
      </p>
      <ul>
        <li><strong>Altersrenten:</strong> Regelaltersrente, vorgezogene Altersrente</li>
        <li><strong>Erwerbsminderungsrenten:</strong> Bei dauerhafter Arbeitsunfähigkeit</li>
        <li><strong>Hinterbliebenenrenten:</strong> Witwen-, Witwer- und Waisenrenten</li>
        <li><strong>Rehabilitation:</strong> Reha-Maßnahmen zur Wiederherstellung der Arbeitsfähigkeit</li>
      </ul>

      <h2>Besonderheiten und Ausnahmen</h2>
      <p>
        Nicht alle Arbeitnehmer sind rentenversicherungspflichtig:
      </p>
      <ul>
        <li><strong>Beamte:</strong> Haben eine eigene Altersversorgung, zahlen nicht in die gesetzliche Rentenversicherung</li>
        <li><strong>Selbstständige:</strong> Meist nicht versicherungspflichtig (Ausnahmen: Handwerker, Lehrer, Pfleger)</li>
        <li><strong>Minijobber:</strong> Können sich von der Versicherungspflicht befreien lassen</li>
        <li><strong>Geringfügig Beschäftigte:</strong> Reduzierte Beiträge möglich</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Wie viele Rentenpunkte brauche ich für eine gute Rente?",
      answer:
        "Das hängt vom gewünschten Rentenniveau ab. Ein Rentenpunkt hat 2026 einen Wert von ca. 39,32 € (West) bzw. 39,47 € (Ost) pro Monat. Mit 45 Rentenpunkten erhält man also etwa 1.769 € Monatsrente. Für eine Rente von 2.000 € braucht man ca. 51 Rentenpunkte.",
    },
    {
      question: "Was passiert mit meinem Einkommen über der Beitragsbemessungsgrenze?",
      answer:
        "Einkommen oberhalb der Beitragsbemessungsgrenze (96.600 € West, 94.800 € Ost) wird nicht mehr für die Beitragsberechnung herangezogen. Sie zahlen also maximal den Beitrag bis zu dieser Grenze, erwerben aber auch keine zusätzlichen Rentenpunkte für das darüber liegende Einkommen.",
    },
    {
      question: "Warum gibt es unterschiedliche Beitragsbemessungsgrenzen in Ost und West?",
      answer:
        "Die Unterscheidung zwischen Ost und West besteht noch aus historischen Gründen. Das Lohnniveau in Ostdeutschland ist im Durchschnitt noch niedriger, daher ist auch die Beitragsbemessungsgrenze etwas geringer. Die Angleichung ist aber in vollem Gange.",
    },
    {
      question: "Kann ich freiwillig mehr in die Rentenversicherung einzahlen?",
      answer:
        "Ja, Sie können freiwillige Beiträge zur Rentenversicherung leisten, um Rentenlücken zu schließen oder früher in Rente zu gehen. Dies ist besonders bei vorgezogener Altersrente sinnvoll, um Abschläge auszugleichen.",
    },
    {
      question: "Werden Rentenpunkte bei Arbeitslosigkeit oder Krankheit gesammelt?",
      answer:
        "Ja, auch während des Bezugs von Arbeitslosengeld I, Krankengeld oder Elterngeld werden Rentenpunkte gutgeschrieben, allerdings in geringerer Höhe. Die Bundesagentur für Arbeit bzw. die Krankenkasse zahlt Beiträge zur Rentenversicherung.",
    },
    {
      question: "Was ist der Unterschied zwischen gesetzlicher und privater Rentenversicherung?",
      answer:
        "Die gesetzliche Rentenversicherung ist eine Pflichtversicherung mit Umlageverfahren (heutige Beiträge finanzieren heutige Renten). Die private Rentenversicherung ist freiwillig und funktioniert nach dem Kapitaldeckungsverfahren (eigene Beiträge werden angespart und verzinst).",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/krankenversicherung", title: "Krankenversicherung" },
    { href: "/lexikon/arbeitslosenversicherung", title: "Arbeitslosenversicherung" },
    { href: "/lexikon/beitragsbemessungsgrenze", title: "Beitragsbemessungsgrenze" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Rentenversicherung"
      description="Die gesetzliche Rentenversicherung ist eine Pflichtversicherung für Arbeitnehmer in Deutschland und dient der Alterssicherung."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
