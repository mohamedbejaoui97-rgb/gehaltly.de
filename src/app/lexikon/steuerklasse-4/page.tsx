/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Steuerklasse 4 - Für Verheiratete: Faktorverfahren & Vorteile 2026",
  description:
    "Steuerklasse 4 für verheiratete Paare mit ähnlichem Einkommen. Infos zu Steuerklasse 4 mit Faktor, Freibeträgen und Beispielrechnungen 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/steuerklasse-4/",
  },
};

export default function Steuerklasse4Page() {
  const content = (
    <>
      <h2>Wer gehört in Steuerklasse 4?</h2>
      <p>
        Die Steuerklasse 4 ist die Standard-Steuerklasse für verheiratete Arbeitnehmer und wird automatisch nach der Hochzeit eingetragen. Sie gilt für:
      </p>
      <ul>
        <li><strong>Frisch verheiratete Paare:</strong> Nach der Hochzeit automatisch für beide Partner</li>
        <li><strong>Ehepaare mit ähnlichem Einkommen:</strong> Wenn beide Partner etwa gleich viel verdienen</li>
        <li><strong>Eingetragene Lebenspartnerschaften:</strong> Beide Partner erhalten Steuerklasse 4</li>
        <li><strong>Paare, die keine Nachzahlungen wollen:</strong> Alternative zur Kombination 3/5</li>
      </ul>
      <p>
        Die Steuerklasse 4 kann in drei Varianten gewählt werden:
      </p>
      <ul>
        <li><strong>4/4 ohne Faktor:</strong> Beide Partner wie Singles besteuert</li>
        <li><strong>4/4 mit Faktor:</strong> Berücksichtigt das tatsächliche Einkommensverhältnis</li>
        <li><strong>4/4 mit individuellen Freibeträgen:</strong> Zusätzliche Freibeträge können beantragt werden</li>
      </ul>

      <h2>Abzüge und Freibeträge in Steuerklasse 4</h2>
      <p>
        In der Steuerklasse 4 gelten für 2026 folgende Freibeträge (pro Person):
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> 11.604 € pro Jahr</li>
        <li><strong>Arbeitnehmerpauschbetrag:</strong> 1.230 € pro Jahr</li>
        <li><strong>Sozialausgabenpauschbetrag:</strong> 36 € pro Jahr</li>
        <li><strong>Vorsorgepauschale:</strong> Abhängig vom Bruttoeinkommen</li>
        <li><strong>Kinderfreibetrag:</strong> Wird bei beiden Partnern je zur Hälfte berücksichtigt</li>
      </ul>
      <p>
        <strong>Besonderheit beim Faktorverfahren (4/4 mit Faktor):</strong>
      </p>
      <p>
        Das Faktorverfahren berechnet einen individuellen Faktor basierend auf dem Einkommensverhältnis beider Partner. Dieser Faktor wird auf die Lohnsteuer angewendet, sodass bereits monatlich eine gerechtere Verteilung der Steuerlast erfolgt.
      </p>
      <p>
        <strong>Berechnung des Faktors:</strong> (Gemeinsame Jahressteuer nach Splittingtarif) / (Summe der Lohnsteuer beider Partner nach Grundtabelle)
      </p>

      <h2>Beispielrechnung Steuerklasse 4</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 3.500 € in Steuerklasse 4 (ohne Kirchensteuer):
      </p>
      <ul>
        <li><strong>Bruttogehalt:</strong> 3.500,00 €</li>
        <li><strong>Rentenversicherung (9,3%):</strong> -325,50 €</li>
        <li><strong>Arbeitslosenversicherung (1,3%):</strong> -45,50 €</li>
        <li><strong>Krankenversicherung (7,3% + Zusatzbeitrag ~1,0%):</strong> -290,50 €</li>
        <li><strong>Pflegeversicherung (1,7%):</strong> -59,50 €</li>
        <li><strong>Lohnsteuer:</strong> ca. -520,00 €</li>
        <li><strong>Solidaritätszuschlag:</strong> ca. -0,00 €</li>
        <li><strong>Nettogehalt:</strong> ca. 2.259,00 €</li>
      </ul>
      <p>
        Mit Faktorverfahren (Beispiel: Partner verdient 2.000 €, Faktor 0,89):
      </p>
      <ul>
        <li><strong>Lohnsteuer vor Faktor:</strong> 520,00 €</li>
        <li><strong>Lohnsteuer nach Faktor (× 0,89):</strong> ca. -463,00 €</li>
        <li><strong>Nettogehalt mit Faktor:</strong> ca. 2.316,00 €</li>
      </ul>

      <h2>Vor- und Nachteile der Steuerklasse 4</h2>
      <p>
        <strong>Vorteile:</strong>
      </p>
      <ul>
        <li>Automatische Zuordnung nach Hochzeit - kein Antrag nötig</li>
        <li>Faire Verteilung der Steuerlast auf beide Partner</li>
        <li>Meist keine oder geringe Steuernachzahlung</li>
        <li>Mit Faktorverfahren: Optimale Anpassung an Einkommensverhältnis</li>
        <li>Keine Pflicht zur Steuererklärung (außer mit Faktor)</li>
        <li>Einfaches und transparentes System</li>
      </ul>
      <p>
        <strong>Nachteile:</strong>
      </p>
      <ul>
        <li>Höhere monatliche Steuerabzüge als in Steuerklasse 3</li>
        <li>Bei großem Einkommensunterschied weniger optimal als 3/5</li>
        <li>Mit Faktorverfahren: Pflicht zur jährlichen Steuererklärung</li>
        <li>Lohnersatzleistungen niedriger als in Steuerklasse 3</li>
        <li>Faktorverfahren muss jährlich neu beantragt werden</li>
      </ul>

      <h2>Wechsel der Steuerklasse</h2>
      <p>
        So funktioniert der Wechsel und die Wahl der richtigen Variante:
      </p>
      <p>
        <strong>Automatischer Wechsel nach Heirat:</strong>
      </p>
      <ul>
        <li>Nach der Hochzeit werden beide Partner automatisch in Steuerklasse 4 eingeordnet</li>
        <li>Sie müssen nichts unternehmen, wenn Sie bei 4/4 bleiben möchten</li>
        <li>Das Finanzamt erhält die Information vom Standesamt</li>
      </ul>
      <p>
        <strong>Wechsel in andere Kombinationen:</strong>
      </p>
      <ul>
        <li><strong>Von 4/4 zu 3/5:</strong> Wenn ein Partner deutlich mehr verdient (mindestens 60% des Gesamteinkommens)</li>
        <li><strong>Von 3/5 zu 4/4:</strong> Wenn sich Einkommensverhältnisse angleichen oder Nachzahlungen vermieden werden sollen</li>
        <li><strong>Zu 4/4 mit Faktor:</strong> Antrag beim Finanzamt mit Einkommensnachweisen beider Partner</li>
      </ul>
      <p>
        <strong>Wann sollten Sie das Faktorverfahren wählen?</strong>
      </p>
      <ul>
        <li>Beide Partner arbeiten, aber mit unterschiedlichen Einkommen</li>
        <li>Sie möchten hohe Steuernachzahlungen vermeiden</li>
        <li>Gerechte Verteilung der Steuerlast ist Ihnen wichtig</li>
        <li>Sie sind bereit, jährlich eine Steuererklärung abzugeben</li>
      </ul>
      <p>
        <strong>Wann sollten Sie bei 4/4 ohne Faktor bleiben?</strong>
      </p>
      <ul>
        <li>Beide Partner verdienen etwa gleich viel</li>
        <li>Sie möchten keine Steuererklärung abgeben müssen</li>
        <li>Einfachheit ist Ihnen wichtiger als Optimierung</li>
      </ul>
      <p>
        Der Steuerklassenwechsel kann seit 2020 mehrfach im Jahr beim Finanzamt beantragt werden. Die Änderung wird in der Regel zum nächsten Monat wirksam.
      </p>
    </>
  );

  const faq = [
    {
      question: "Was ist der Unterschied zwischen Steuerklasse 4 und Steuerklasse 1?",
      answer:
        "Steuerklasse 4 ist für Verheiratete, Steuerklasse 1 für Ledige. Die Freibeträge sind identisch, aber bei Steuerklasse 4 wird das Ehegattensplitting in der Steuererklärung berücksichtigt. Monatlich zahlen Sie in beiden Klassen etwa gleich viel Lohnsteuer, aber die Jahressteuerlast ist bei Verheirateten durch das Splitting meist niedriger.",
    },
    {
      question: "Was ist besser: Steuerklasse 4/4 oder 3/5?",
      answer:
        "Bei ähnlichem Einkommen beider Partner ist 4/4 besser. Bei großem Einkommensunterschied (ein Partner verdient 60% oder mehr) kann 3/5 während des Jahres mehr Netto bringen, führt aber meist zu Nachzahlungen. Das Faktorverfahren (4/4 mit Faktor) ist oft der beste Kompromiss.",
    },
    {
      question: "Wie funktioniert das Faktorverfahren genau?",
      answer:
        "Beim Faktorverfahren berechnet das Finanzamt einen individuellen Faktor basierend auf Ihren voraussichtlichen Jahreseinkommen. Dieser Faktor (meist zwischen 0,5 und 1,0) wird auf Ihre monatliche Lohnsteuer angewendet, sodass bereits während des Jahres eine faire Verteilung erfolgt. Sie müssen dafür jährlich Ihre Einkommen dem Finanzamt melden.",
    },
    {
      question: "Muss ich mit Steuerklasse 4 eine Steuererklärung abgeben?",
      answer:
        "Mit Steuerklasse 4 ohne Faktor besteht keine Pflicht zur Steuererklärung (außer es liegen andere Gründe vor). Mit dem Faktorverfahren (4/4 mit Faktor) sind Sie jedoch zur jährlichen Abgabe verpflichtet. Eine freiwillige Abgabe kann sich aber lohnen, um Werbungskosten und Sonderausgaben geltend zu machen.",
    },
    {
      question: "Wann sollte ich in Steuerklasse 4 mit Faktor wechseln?",
      answer:
        "Das Faktorverfahren lohnt sich, wenn beide Partner arbeiten, aber unterschiedlich viel verdienen. Es vermeidet hohe Nachzahlungen und verteilt die Steuerlast fair. Besonders sinnvoll ist es, wenn ein Partner 55-75% des Gesamteinkommens verdient. Bei sehr unterschiedlichen Einkommen (über 75%) kann 3/5 vorteilhafter sein.",
    },
    {
      question: "Kann ich während des Jahres die Steuerklasse wechseln?",
      answer:
        "Ja, seit 2020 können Sie mehrfach im Jahr die Steuerklasse wechseln. Der Antrag muss beim Finanzamt gestellt werden und wird in der Regel zum Folgemonat wirksam. Ein Wechsel kann sinnvoll sein, wenn sich die Einkommensverhältnisse ändern oder Lohnersatzleistungen beantragt werden sollen.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/steuerklasse-3", title: "Steuerklasse 3" },
    { href: "/lexikon/steuerklasse-5", title: "Steuerklasse 5" },
    { href: "/lexikon/steuerklasse-1", title: "Steuerklasse 1" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Steuerklasse 4"
      description="Die Steuerklasse 4 ist die Standard-Steuerklasse für verheiratete Paare und bietet mit dem Faktorverfahren eine faire Steuerverteilung."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
