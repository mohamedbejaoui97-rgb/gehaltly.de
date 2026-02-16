/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Steuerklasse 5: Abzüge in Kombination 3/5 2026",
  description:
    "Steuerklasse 5 für den Geringverdiener in der Kombination 3/5. Hohe Abzüge, Vor- und Nachteile, Alternativen und Beispielrechnungen 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/steuerklasse-5/",
  },
  openGraph: {
    title: "Steuerklasse 5: Abzüge in Kombination 3/5 2026",
    description:
      "Steuerklasse 5 für den Geringverdiener in der Kombination 3/5. Hohe Abzüge, Vor- und Nachteile, Alternativen und Beispielrechnungen 2026.",
    url: "https://gehaltly.de/lexikon/steuerklasse-5/",
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

export default function Steuerklasse5Page() {
  const content = (
    <>
      <h2>Wer gehört in Steuerklasse 5?</h2>
      <p>
        Die Steuerklasse 5 kann nur in Kombination mit Steuerklasse 3 gewählt werden und ist ausschließlich für verheiratete oder verpartnerte Arbeitnehmer vorgesehen:
      </p>
      <ul>
        <li><strong>Der Geringverdiener</strong> in einer Ehe/Partnerschaft, wenn die Kombination 3/5 gewählt wird</li>
        <li><strong>Der zweite Partner</strong>, während der andere in Steuerklasse 3 ist</li>
        <li><strong>Teilzeitbeschäftigte</strong> in einer Ehe, wenn der Partner Vollzeit in Steuerklasse 3 arbeitet</li>
      </ul>
      <p>
        Wichtig: Steuerklasse 5 bedeutet nicht automatisch, dass Sie weniger verdienen. Es ist eine bewusste Wahl innerhalb der Ehe, um dem Besserverdiener in Steuerklasse 3 monatlich mehr Netto zu ermöglichen. Die Jahressteuerlast bleibt für das Ehepaar gleich.
      </p>

      <h2>Abzüge und Freibeträge in Steuerklasse 5</h2>
      <p>
        In der Steuerklasse 5 werden für 2026 die niedrigsten Freibeträge aller Steuerklassen gewährt:
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> 0 € (wird vollständig dem Partner in Steuerklasse 3 zugerechnet)</li>
        <li><strong>Arbeitnehmerpauschbetrag:</strong> 0 €</li>
        <li><strong>Sozialausgabenpauschbetrag:</strong> 0 €</li>
        <li><strong>Vorsorgepauschale:</strong> Reduzierter Betrag</li>
        <li><strong>Kinderfreibetrag:</strong> 0 € (wird in Steuerklasse 3 berücksichtigt)</li>
      </ul>
      <p>
        Das Fehlen der Freibeträge führt dazu, dass bereits ab dem ersten Euro Einkommen Lohnsteuer abgezogen wird. Dies ist der Ausgleich für die hohen Freibeträge in Steuerklasse 3.
      </p>
      <p>
        <strong>Folge:</strong> Die monatlichen Steuerabzüge in Steuerklasse 5 sind deutlich höher als in allen anderen Steuerklassen, teilweise bis zu 40-45% des Bruttoeinkommens bei höheren Gehältern.
      </p>

      <h2>Beispielrechnung Steuerklasse 5</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 2.500 € in Steuerklasse 5 (ohne Kirchensteuer):
      </p>
      <ul>
        <li><strong>Bruttogehalt:</strong> 2.500,00 €</li>
        <li><strong>Rentenversicherung (9,3%):</strong> -232,50 €</li>
        <li><strong>Arbeitslosenversicherung (1,3%):</strong> -32,50 €</li>
        <li><strong>Krankenversicherung (7,3% + Zusatzbeitrag ~1,0%):</strong> -207,50 €</li>
        <li><strong>Pflegeversicherung (1,8%):</strong> -45,00 €</li>
        <li><strong>Lohnsteuer:</strong> ca. -650,00 €</li>
        <li><strong>Solidaritätszuschlag:</strong> ca. -0,00 €</li>
        <li><strong>Nettogehalt:</strong> ca. 1.335,00 €</li>
      </ul>
      <p>
        Zum Vergleich: Das gleiche Bruttogehalt würde ergeben:
      </p>
      <ul>
        <li><strong>In Steuerklasse 1:</strong> ca. 1.740 € netto (405 € mehr)</li>
        <li><strong>In Steuerklasse 4:</strong> ca. 1.740 € netto (405 € mehr)</li>
        <li><strong>In Steuerklasse 3:</strong> ca. 1.900 € netto (565 € mehr)</li>
      </ul>
      <p>
        Die hohen Abzüge in Steuerklasse 5 werden jedoch durch die niedrigen Abzüge des Partners in Steuerklasse 3 mehr als ausgeglichen. In der Jahressteuererklärung erfolgt dann der Ausgleich.
      </p>

      <h2>Vor- und Nachteile der Steuerklasse 5</h2>
      <p>
        <strong>Vorteile:</strong>
      </p>
      <ul>
        <li>Partner in Steuerklasse 3 hat deutlich mehr monatliches Netto</li>
        <li>Als Paar insgesamt höherer monatlicher Cashflow</li>
        <li>Vorteilhaft bei großem Einkommensunterschied (60% oder mehr)</li>
        <li>Partner in Steuerklasse 3 erhält höhere Lohnersatzleistungen</li>
        <li>Bei der Jahressteuererklärung meist Erstattung zu erwarten</li>
      </ul>
      <p>
        <strong>Nachteile:</strong>
      </p>
      <ul>
        <li>Sehr hohe monatliche Steuerabzüge (bis zu 40-45% Lohnsteuer möglich)</li>
        <li>Sehr niedriges monatliches Nettoeinkommen</li>
        <li>Niedrige Lohnersatzleistungen (Arbeitslosengeld, Elterngeld, Krankengeld)</li>
        <li>Pflicht zur Abgabe einer Steuererklärung</li>
        <li>Kann demotivierend wirken ("Arbeiten lohnt sich nicht")</li>
        <li>Bei Trennung/Scheidung sofortiger Wechsel erforderlich</li>
      </ul>

      <h2>Wechsel der Steuerklasse</h2>
      <p>
        Wann sollten Sie aus Steuerklasse 5 wechseln?
      </p>
      <ul>
        <li><strong>Elterngeld geplant:</strong> Mindestens 7 Monate vor Mutterschutz in Steuerklasse 3 oder 4 wechseln</li>
        <li><strong>Arbeitslosigkeit droht:</strong> Rechtzeitig in Steuerklasse 3 oder 4 wechseln für höheres Arbeitslosengeld</li>
        <li><strong>Einkommen angleichen sich:</strong> Wechsel zu 4/4 oder Faktorverfahren sinnvoll</li>
        <li><strong>Persönliche Unzufriedenheit:</strong> Zu niedriges Netto kann belastend sein</li>
      </ul>
      <p>
        <strong>Alternativen zur Kombination 3/5:</strong>
      </p>
      <ul>
        <li><strong>Steuerklasse 4/4 ohne Faktor:</strong> Beide Partner zahlen gleich viel, wie Singles</li>
        <li><strong>Steuerklasse 4/4 mit Faktor:</strong> Faire Verteilung basierend auf tatsächlichem Einkommensverhältnis, vermeidet hohe Nachzahlungen</li>
        <li><strong>Zurück zu 3/5 mit getauschten Rollen:</strong> Wenn sich die Einkommensverhältnisse umkehren</li>
      </ul>
      <p>
        <strong>So beantragen Sie den Wechsel:</strong>
      </p>
      <ul>
        <li>Gemeinsamer Antrag beider Ehepartner beim Finanzamt erforderlich</li>
        <li>Formular "Antrag auf Steuerklassenwechsel bei Ehegatten" ausfüllen</li>
        <li>Wechsel ist seit 2020 mehrfach pro Jahr möglich</li>
        <li>Änderung wird in der Regel zum Folgemonat wirksam</li>
      </ul>
      <p>
        <strong>Wichtige Fristen für Lohnersatzleistungen:</strong>
      </p>
      <p>
        Elterngeld und Arbeitslosengeld werden auf Basis des Nettoeinkommens der letzten 12 Monate berechnet. Daher sollten Sie mindestens 7-12 Monate vor Beantragung dieser Leistungen die Steuerklasse wechseln, wenn Sie in Steuerklasse 5 sind.
      </p>
      <p>
        Beispiel: Wenn Sie im Januar 2027 in Elternzeit gehen möchten, sollten Sie spätestens im Juni 2026 in Steuerklasse 3 oder 4 wechseln.
      </p>
    </>
  );

  const faq = [
    {
      question: "Warum sind die Abzüge in Steuerklasse 5 so hoch?",
      answer:
        "In Steuerklasse 5 werden keine Freibeträge berücksichtigt - diese werden vollständig dem Partner in Steuerklasse 3 zugerechnet. Dadurch wird bereits ab dem ersten Euro Einkommen Lohnsteuer abgezogen. Dies ist jedoch nur eine monatliche Verteilung - die Jahressteuerlast des Ehepaars bleibt gleich und wird über die Steuererklärung ausgeglichen.",
    },
    {
      question: "Bekomme ich das Geld aus Steuerklasse 5 zurück?",
      answer:
        "Ja, in den meisten Fällen erhalten Sie über die Jahressteuererklärung eine Erstattung, da die monatlich abgezogene Lohnsteuer zu hoch ist. Die Höhe der Erstattung hängt vom Gesamteinkommen des Paares und den abzugsfähigen Ausgaben ab. Eine Steuererklärung ist bei der Kombination 3/5 verpflichtend.",
    },
    {
      question: "Wann lohnt sich die Steuerklassenkombination 3/5?",
      answer:
        "Die Kombination 3/5 lohnt sich, wenn ein Partner mindestens 60% des gemeinsamen Bruttoeinkommens verdient. Der Besserverdiener sollte Steuerklasse 3 wählen. Bei ähnlichen Einkommen ist die Kombination 4/4 oder das Faktorverfahren besser geeignet, da dann hohe Nachzahlungen vermieden werden.",
    },
    {
      question: "Kann ich einfach von Steuerklasse 5 zu 4 wechseln?",
      answer:
        "Sie können nicht einseitig von Steuerklasse 5 zu 4 wechseln. Ein Wechsel muss immer gemeinsam mit Ihrem Partner beantragt werden. Beide Partner müssen entweder beide in Steuerklasse 4 wechseln oder die Rollen in der Kombination 3/5 tauschen. Der Antrag erfolgt gemeinsam beim Finanzamt.",
    },
    {
      question: "Was passiert mit Steuerklasse 5 bei Scheidung oder Trennung?",
      answer:
        "Bei dauerhafter Trennung oder Scheidung entfällt die Berechtigung für die Steuerklassenkombination 3/5. Sie werden dann automatisch in Steuerklasse 1 eingeordnet (oder Steuerklasse 2, wenn Sie alleinerziehend sind). Sie müssen das Finanzamt über die Trennung informieren. Die Änderung erfolgt in der Regel zum Folgemonat nach der Trennung.",
    },
    {
      question: "Wie wirkt sich Steuerklasse 5 auf das Elterngeld aus?",
      answer:
        "Steuerklasse 5 führt zu deutlich niedrigerem Elterngeld, da dieses auf Basis des Nettoeinkommens berechnet wird. Wenn Sie Elterngeld beantragen möchten, sollten Sie mindestens 7 Monate vor Beginn des Mutterschutzes in Steuerklasse 3 oder 4 wechseln. Der Wechsel muss rechtzeitig erfolgen, damit die Änderung im Bemessungszeitraum wirksam wird.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/steuerklasse-3", title: "Steuerklasse 3" },
    { href: "/lexikon/steuerklasse-4", title: "Steuerklasse 4" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Steuerklasse 5"
      description="Die Steuerklasse 5 ist für den Geringverdiener in der Kombination 3/5 und hat die höchsten monatlichen Steuerabzüge."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
