/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Steuerklasse 3: Vorteile der Kombination 3/5 2026",
  description:
    "Steuerklasse 3 für verheiratete Besserverdiener in Kombination mit Steuerklasse 5. Alle Vorteile, Nachteile und Beispielrechnungen für 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/steuerklasse-3/",
  },
  openGraph: {
    title: "Steuerklasse 3: Vorteile der Kombination 3/5 2026",
    description:
      "Steuerklasse 3 für verheiratete Besserverdiener in Kombination mit Steuerklasse 5. Alle Vorteile, Nachteile und Beispielrechnungen für 2026.",
    url: "https://gehaltly.de/lexikon/steuerklasse-3/",
    siteName: "gehaltly.de",
    type: "article",
  },
};

export default function Steuerklasse3Page() {
  const content = (
    <>
      <h2>Wer gehört in Steuerklasse 3?</h2>
      <p>
        Die Steuerklasse 3 ist ausschließlich für verheiratete oder verpartnerte Arbeitnehmer vorgesehen und wird immer in Kombination mit Steuerklasse 5 gewählt. Sie gilt für:
      </p>
      <ul>
        <li><strong>Verheiratete Paare:</strong> Ein Ehepartner wählt Steuerklasse 3, der andere Steuerklasse 5</li>
        <li><strong>Eingetragene Lebenspartnerschaften:</strong> Gleiche Regelung wie bei Ehepartnern</li>
        <li><strong>Verwitwete Arbeitnehmer:</strong> Im Todesjahr und im Folgejahr (Gnadensplitting)</li>
        <li><strong>Alleinverdiener-Ehen:</strong> Wenn nur ein Partner arbeitet, kann dieser Steuerklasse 3 wählen</li>
      </ul>
      <p>
        Die Kombination 3/5 ist besonders sinnvoll, wenn ein Partner deutlich mehr verdient als der andere. Der Besserverdiener wählt dann Steuerklasse 3 und profitiert von sehr niedrigen monatlichen Steuerabzügen.
      </p>

      <h2>Abzüge und Freibeträge in Steuerklasse 3</h2>
      <p>
        In der Steuerklasse 3 werden für 2026 die höchsten Freibeträge aller Steuerklassen gewährt:
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> 23.208 € pro Jahr (doppelter Grundfreibetrag beider Partner)</li>
        <li><strong>Arbeitnehmerpauschbetrag:</strong> 2.460 € pro Jahr (doppelt)</li>
        <li><strong>Sozialausgabenpauschbetrag:</strong> 72 € pro Jahr (doppelt)</li>
        <li><strong>Vorsorgepauschale:</strong> Höherer Betrag durch doppelte Berücksichtigung</li>
        <li><strong>Kinderfreibetrag:</strong> Wird vollständig beim Partner in Steuerklasse 3 berücksichtigt</li>
      </ul>
      <p>
        Wichtig: Die hohen Freibeträge in Steuerklasse 3 werden durch die minimalen Freibeträge in Steuerklasse 5 ausgeglichen. Die Kombination 3/5 ist eine reine Verteilung der Freibeträge innerhalb der Ehe, die Gesamtsteuerlast des Jahres ändert sich dadurch nicht.
      </p>

      <h2>Beispielrechnung Steuerklasse 3</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 4.500 € in Steuerklasse 3 (ohne Kirchensteuer):
      </p>
      <ul>
        <li><strong>Bruttogehalt:</strong> 4.500,00 €</li>
        <li><strong>Rentenversicherung (9,3%):</strong> -418,50 €</li>
        <li><strong>Arbeitslosenversicherung (1,3%):</strong> -58,50 €</li>
        <li><strong>Krankenversicherung (7,3% + Zusatzbeitrag ~1,0%):</strong> -373,50 €</li>
        <li><strong>Pflegeversicherung (1,8%):</strong> -81,00 €</li>
        <li><strong>Lohnsteuer:</strong> ca. -490,00 €</li>
        <li><strong>Solidaritätszuschlag:</strong> ca. -0,00 €</li>
        <li><strong>Nettogehalt:</strong> ca. 3.083,00 €</li>
      </ul>
      <p>
        Zum Vergleich: Das gleiche Bruttogehalt in Steuerklasse 1 würde etwa 150-200 € mehr Lohnsteuer bedeuten. In Steuerklasse 4 läge die Lohnsteuer etwa 100-150 € höher.
      </p>

      <h2>Vor- und Nachteile der Steuerklasse 3</h2>
      <p>
        <strong>Vorteile:</strong>
      </p>
      <ul>
        <li>Niedrigste monatliche Steuerabzüge aller Steuerklassen</li>
        <li>Deutlich höheres monatliches Nettoeinkommen</li>
        <li>Höhere Lohnersatzleistungen (Arbeitslosengeld, Elterngeld, Krankengeld)</li>
        <li>Besserer Cashflow für die Familie jeden Monat</li>
        <li>Vorteilhaft bei großem Einkommensunterschied zwischen den Partnern</li>
      </ul>
      <p>
        <strong>Nachteile:</strong>
      </p>
      <ul>
        <li>Partner in Steuerklasse 5 hat sehr hohe Steuerabzüge</li>
        <li>Pflicht zur Abgabe einer Steuererklärung</li>
        <li>Häufig Steuernachzahlung bei der Jahresabrechnung</li>
        <li>Ungünstig, wenn beide Partner ähnlich viel verdienen</li>
        <li>Komplexere Steuerplanung erforderlich</li>
      </ul>

      <h2>Wechsel der Steuerklasse</h2>
      <p>
        Die Kombination 3/5 beantragen Sie gemeinsam beim Finanzamt:
      </p>
      <ul>
        <li><strong>Antrag:</strong> Beide Partner müssen den Steuerklassenwechsel gemeinsam beantragen</li>
        <li><strong>Zeitpunkt:</strong> Der Wechsel kann mehrfach im Jahr vorgenommen werden</li>
        <li><strong>Voraussetzung:</strong> Beide Partner müssen unbeschränkt steuerpflichtig sein</li>
        <li><strong>Änderung:</strong> Bei Änderung der Einkommensverhältnisse kann die Kombination getauscht werden</li>
      </ul>
      <p>
        Wann sollten Sie die Kombination 3/5 wählen?
      </p>
      <ul>
        <li>Wenn ein Partner mindestens 60% des Gesamteinkommens verdient</li>
        <li>Bei Alleinverdiener-Ehen (nur ein Partner arbeitet)</li>
        <li>Wenn der Besserverdiener Elterngeld beantragen möchte</li>
        <li>Bei geplanter Arbeitslosigkeit des Besserverdieners</li>
      </ul>
      <p>
        Wann sollten Sie die Kombination 3/5 nicht wählen?
      </p>
      <ul>
        <li>Wenn beide Partner ähnlich viel verdienen (dann besser 4/4 oder Faktorverfahren)</li>
        <li>Wenn der Partner in Klasse 5 Elterngeld beantragen möchte</li>
        <li>Wenn Sie hohe Steuernachzahlungen vermeiden möchten</li>
      </ul>
      <p>
        Alternative: Das Faktorverfahren (Steuerklasse 4 mit Faktor) berücksichtigt das tatsächliche Einkommensverhältnis bereits monatlich und vermeidet hohe Nachzahlungen, bietet aber weniger Netto während des Jahres.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wann lohnt sich die Steuerklassenkombination 3/5?",
      answer:
        "Die Kombination 3/5 lohnt sich, wenn ein Partner mindestens 60% des gemeinsamen Bruttoeinkommens verdient. Der Besserverdiener wählt Klasse 3 und hat deutlich mehr netto. Bei ähnlichen Einkommen ist die Kombination 4/4 oder das Faktorverfahren besser geeignet.",
    },
    {
      question: "Muss ich mit Steuerklasse 3 eine Steuererklärung abgeben?",
      answer:
        "Ja, die Kombination 3/5 verpflichtet zur Abgabe einer Einkommensteuererklärung. Die während des Jahres einbehaltene Lohnsteuer ist meist zu niedrig, weshalb es häufig zu Nachzahlungen kommt. Die Steuererklärung gleicht dies aus.",
    },
    {
      question: "Kann ich die Steuerklassen 3 und 5 mit meinem Partner tauschen?",
      answer:
        "Ja, Sie können die Steuerklassen 3 und 5 jederzeit tauschen, wenn sich die Einkommensverhältnisse ändern. Der Antrag muss gemeinsam beim Finanzamt gestellt werden. Ein Wechsel ist seit 2020 mehrfach im Jahr möglich.",
    },
    {
      question: "Wie hoch ist die Steuernachzahlung in Steuerklasse 3?",
      answer:
        "Die Nachzahlung hängt vom Gesamteinkommen des Paares ab. Bei deutlichem Einkommensunterschied kann die Nachzahlung mehrere hundert bis tausend Euro betragen. Je ähnlicher die Einkommen sind, desto höher wird die Nachzahlung. Mit dem Faktorverfahren lässt sich dies vermeiden.",
    },
    {
      question: "Was ist besser: 3/5 oder Faktorverfahren?",
      answer:
        "Das hängt von Ihren Prioritäten ab. Die Kombination 3/5 bringt während des Jahres mehr Netto, führt aber meist zu Nachzahlungen. Das Faktorverfahren verteilt die Steuerlast gerechter auf beide Partner und vermeidet Nachzahlungen, bringt aber insgesamt weniger monatliches Netto.",
    },
    {
      question: "Bekomme ich in Steuerklasse 3 mehr Elterngeld?",
      answer:
        "Ja, das Elterngeld wird auf Basis des Nettoeinkommens der letzten 12 Monate berechnet. In Steuerklasse 3 haben Sie höheres Netto und damit höheres Elterngeld. Wichtig: Der Wechsel in Steuerklasse 3 muss mindestens 7 Monate vor Beginn des Mutterschutzes erfolgen, damit er sich auf das Elterngeld auswirkt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/steuerklasse-4", title: "Steuerklasse 4" },
    { href: "/lexikon/steuerklasse-5", title: "Steuerklasse 5" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Steuerklasse 3"
      description="Die Steuerklasse 3 ist für verheiratete Besserverdiener in Kombination mit Steuerklasse 5 und bietet die niedrigsten Steuerabzüge."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
