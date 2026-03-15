/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Wohngeld 2026 - Anspruch, Berechnung & Mietstufen",
  description:
    "Alles zum Wohngeld 2026: Wer hat Anspruch, wie wird es berechnet, Mietstufen und Einkommensgrenzen. Wohngeldrechner-Infos für Mieter und Eigentümer.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/wohngeld/",
  },
  openGraph: {
    title: "Wohngeld 2026 - Anspruch, Berechnung & Mietstufen",
    description:
      "Alles zum Wohngeld 2026: Anspruch, Berechnung, Mietstufen und Einkommensgrenzen.",
    url: "https://gehaltly.de/lexikon/wohngeld/",
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

export default function WohngeldPage() {
  const content = (
    <>
      <h2>Was ist Wohngeld?</h2>
      <p>
        Wohngeld ist ein staatlicher Zuschuss zu den Wohnkosten für Haushalte mit geringem Einkommen. Es wird als Mietzuschuss für Mieter oder als Lastenzuschuss für Eigentümer von selbst genutztem Wohnraum gewährt. Seit der Wohngeldreform 2023 (Wohngeld-Plus-Gesetz) profitieren deutlich mehr Haushalte von dieser Sozialleistung. Weitere Informationen bietet die <a href="https://www.bundesregierung.de/breg-de/suche/wohngeld-reform-2125028" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesregierung</a>.
      </p>

      <h2>Wer hat Anspruch auf Wohngeld?</h2>
      <p>
        Anspruch auf Wohngeld haben grundsätzlich alle Personen, die:
      </p>
      <ul>
        <li>Über ein eigenes Einkommen verfügen (auch Rente, BAföG-Bankdarlehen)</li>
        <li>Kein Bürgergeld, keine Sozialhilfe oder ähnliche Transferleistungen beziehen (diese decken Wohnkosten bereits ab)</li>
        <li>Deren Einkommen innerhalb der Einkommensgrenzen liegt</li>
        <li>Die Miete oder Belastung für Wohneigentum tragen</li>
      </ul>
      <p>
        Auch Studierende können unter bestimmten Voraussetzungen Wohngeld erhalten, etwa wenn sie kein BAföG beziehen oder nur ein BAföG-Bankdarlehen erhalten.
      </p>

      <h2>Wie wird das Wohngeld berechnet?</h2>
      <p>
        Die Höhe des Wohngelds hängt von drei Faktoren ab:
      </p>
      <ul>
        <li><strong>Anzahl der Haushaltsmitglieder</strong>: Je mehr Personen, desto höher die Einkommensgrenze und der mögliche Zuschuss</li>
        <li><strong>Gesamteinkommen des Haushalts</strong>: Berücksichtigt werden Bruttoeinkommen abzüglich Freibeträge und Pauschalen</li>
        <li><strong>Höhe der Miete bzw. Belastung</strong>: Nur bis zur Miethöchstgrenze der jeweiligen Mietstufe</li>
      </ul>
      <p>
        Die Berechnung erfolgt nach einer komplexen Wohngeldformel (§19 WoGG), die das Mindesteinkommen, die zu berücksichtigende Miete und Freibeträge für Heizkosten und einen Klimabonus einbezieht.
      </p>

      <h2>Mietstufen in Deutschland</h2>
      <p>
        Deutschland ist in <strong>7 Mietstufen</strong> (I bis VII) eingeteilt, die das regionale Mietpreisniveau widerspiegeln:
      </p>
      <ul>
        <li><strong>Mietstufe I</strong>: Geringe Mieten (z.B. viele Gemeinden in Sachsen-Anhalt, Thüringen)</li>
        <li><strong>Mietstufe III-IV</strong>: Durchschnittliches Niveau (viele mittelgroße Städte)</li>
        <li><strong>Mietstufe VI-VII</strong>: Hohe Mieten (z.B. München, Frankfurt, Stuttgart, Hamburg)</li>
      </ul>
      <p>
        Die Mietstufe bestimmt die Höchstbeträge der berücksichtigungsfähigen Miete. Für einen Ein-Personen-Haushalt liegt die Mietobergrenze 2026 je nach Mietstufe zwischen ca. 377 € (Stufe I) und ca. 633 € (Stufe VII).
      </p>

      <h2>Einkommensgrenzen beim Wohngeld</h2>
      <p>
        Die Einkommensgrenzen variieren nach Haushaltsgröße und Mietstufe. Als grobe Orientierung für 2026:
      </p>
      <ul>
        <li><strong>1-Personen-Haushalt</strong>: Monatliches Bruttoeinkommen bis ca. 1.600 – 1.900 € (je nach Mietstufe)</li>
        <li><strong>2-Personen-Haushalt</strong>: Bis ca. 2.100 – 2.500 €</li>
        <li><strong>4-Personen-Haushalt</strong>: Bis ca. 3.200 – 3.800 €</li>
      </ul>
      <p>
        Vom Bruttoeinkommen werden pauschal 10 % für Steuern und 10 % für Sozialversicherungsbeiträge abgezogen (bei Pflichtversicherten). Freibeträge gibt es für Schwerbehinderte und Alleinerziehende.
      </p>

      <h2>Wohngeld beantragen</h2>
      <p>
        Der Antrag wird bei der zuständigen Wohngeldbehörde der Gemeinde oder Stadt gestellt. Benötigte Unterlagen sind unter anderem:
      </p>
      <ul>
        <li>Einkommensnachweise aller Haushaltsmitglieder</li>
        <li>Mietvertrag bzw. Belastungsnachweise</li>
        <li>Personalausweis</li>
        <li>Nachweise über Freibeträge (z.B. Schwerbehindertenausweis)</li>
      </ul>
      <p>
        Wohngeld wird in der Regel für 12 Monate bewilligt und muss danach neu beantragt werden (Weiterleistungsantrag).
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie viel Wohngeld bekomme ich?",
      answer:
        "Die Höhe des Wohngelds hängt von Ihrem Einkommen, der Haushaltsgröße und der Mietstufe Ihres Wohnorts ab. Seit der Wohngeld-Plus-Reform liegt das durchschnittliche Wohngeld bei etwa 370 € pro Monat.",
    },
    {
      question: "Kann ich Wohngeld und Bürgergeld gleichzeitig bekommen?",
      answer:
        "Nein, Wohngeld und Bürgergeld schließen sich gegenseitig aus, da das Bürgergeld bereits die Kosten für Unterkunft und Heizung umfasst. In manchen Fällen kann Wohngeld aber günstiger sein als Bürgergeld.",
    },
    {
      question: "Wird Kindergeld beim Wohngeld als Einkommen angerechnet?",
      answer:
        "Ja, Kindergeld zählt als Einkommen bei der Wohngeldberechnung. Allerdings gibt es Freibeträge für Kinder, die die Anrechnung teilweise ausgleichen.",
    },
    {
      question: "Wie lange dauert die Bearbeitung des Wohngeldantrags?",
      answer:
        "Die Bearbeitungsdauer variiert je nach Kommune zwischen 3 und 6 Monaten. Bei Bewilligung wird das Wohngeld rückwirkend ab dem Monat der Antragstellung gezahlt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/buergergeld", title: "Bürgergeld" },
    { href: "/lexikon/minijob", title: "Minijob" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Wohngeld"
      description="Wohngeld ist ein staatlicher Zuschuss zu den Wohnkosten für Haushalte mit geringem Einkommen in Deutschland."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
