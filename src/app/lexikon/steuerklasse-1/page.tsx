/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Steuerklasse 1: Abzüge & Freibeträge 2026",
  description:
    "Steuerklasse 1 gilt für ledige, geschiedene und verwitwete Arbeitnehmer. Alle Infos zu Freibeträgen, Abzügen und Beispielrechnungen für 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/steuerklasse-1/",
  },
  openGraph: {
    title: "Steuerklasse 1: Abzüge & Freibeträge 2026",
    description:
      "Steuerklasse 1 gilt für ledige, geschiedene und verwitwete Arbeitnehmer. Alle Infos zu Freibeträgen, Abzügen und Beispielrechnungen für 2026.",
    url: "https://gehaltly.de/lexikon/steuerklasse-1/",
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

export default function Steuerklasse1Page() {
  const content = (
    <>
      <h2>Wer gehört in Steuerklasse 1?</h2>
      <p>
        Die Steuerklasse 1 ist die häufigste Lohnsteuerklasse in Deutschland und gilt für folgende Personengruppen:
      </p>
      <ul>
        <li><strong>Ledige Arbeitnehmer</strong> ohne Kinder</li>
        <li><strong>Geschiedene Arbeitnehmer</strong></li>
        <li><strong>Dauernd getrennt lebende Arbeitnehmer</strong></li>
        <li><strong>Verwitwete Arbeitnehmer</strong> ab dem übernächsten Jahr nach dem Tod des Ehepartners</li>
      </ul>
      <p>
        Wichtig: Alleinerziehende mit Anspruch auf den Entlastungsbetrag gehören in Steuerklasse 2. Verheiratete Arbeitnehmer können nicht in Steuerklasse 1 eingeordnet werden, sondern wählen zwischen den Steuerklassen 3, 4 oder 5.
      </p>

      <h2>Abzüge und Freibeträge in Steuerklasse 1</h2>
      <p>
        In der Steuerklasse 1 gelten für 2026 folgende Freibeträge:
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> 12.348 € pro Jahr (monatlich 1.029 €)</li>
        <li><strong>Arbeitnehmerpauschbetrag:</strong> 1.230 € pro Jahr</li>
        <li><strong>Sozialausgabenpauschbetrag:</strong> 36 € pro Jahr</li>
        <li><strong>Vorsorgepauschale:</strong> Abhängig vom Bruttoeinkommen</li>
      </ul>
      <p>
        Von Ihrem Bruttogehalt werden folgende Abzüge vorgenommen:
      </p>
      <ul>
        <li>Lohnsteuer (progressiver Steuersatz)</li>
        <li>Solidaritätszuschlag (5,5% der Lohnsteuer, ab einem bestimmten Einkommen)</li>
        <li>Kirchensteuer (8% oder 9% der Lohnsteuer, falls Kirchenmitglied)</li>
        <li>Sozialversicherungsbeiträge (Renten-, Kranken-, Pflege- und Arbeitslosenversicherung)</li>
      </ul>

      <h2>Beispielrechnung Steuerklasse 1</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 3.500 € in Steuerklasse 1 (ohne Kirchensteuer, Bundesland außerhalb Bayern/Sachsen):
      </p>
      <ul>
        <li><strong>Bruttogehalt:</strong> 3.500,00 €</li>
        <li><strong>Rentenversicherung (9,3%):</strong> -325,50 €</li>
        <li><strong>Arbeitslosenversicherung (1,3%):</strong> -45,50 €</li>
        <li><strong>Krankenversicherung (7,3% + Zusatzbeitrag ~1,45%):</strong> -306,25 €</li>
        <li><strong>Pflegeversicherung (1,8%):</strong> -63,00 €</li>
        <li><strong>Lohnsteuer:</strong> ca. -520,00 €</li>
        <li><strong>Solidaritätszuschlag:</strong> ca. -0,00 € (unter Freigrenze)</li>
        <li><strong>Nettogehalt:</strong> ca. 2.243,00 €</li>
      </ul>

      <h2>Vor- und Nachteile der Steuerklasse 1</h2>
      <p>
        <strong>Vorteile:</strong>
      </p>
      <ul>
        <li>Einfache und automatische Zuordnung für ledige Arbeitnehmer</li>
        <li>Kein Handlungsbedarf oder Antrag erforderlich</li>
        <li>Grundfreibetrag wird berücksichtigt</li>
        <li>Keine Pflicht zur Steuererklärung (in den meisten Fällen)</li>
      </ul>
      <p>
        <strong>Nachteile:</strong>
      </p>
      <ul>
        <li>Höhere monatliche Steuerabzüge als in Steuerklasse 3</li>
        <li>Kein Ehegattensplitting möglich</li>
        <li>Entlastungsbetrag für Alleinerziehende nicht enthalten (hierfür Steuerklasse 2)</li>
        <li>Bei Lohnersatzleistungen (Arbeitslosengeld, Elterngeld) niedrigere Auszahlung als in Steuerklasse 3</li>
      </ul>

      <h2>Wechsel der Steuerklasse</h2>
      <p>
        Ein Wechsel aus Steuerklasse 1 ist in folgenden Situationen möglich:
      </p>
      <ul>
        <li><strong>Bei Heirat:</strong> Wechsel in Steuerklasse 4 (beide Partner) oder Kombination 3/5</li>
        <li><strong>Als Alleinerziehende/r:</strong> Wechsel in Steuerklasse 2 (mit Entlastungsbetrag)</li>
        <li><strong>Bei Verwitwung:</strong> Im Todesjahr und im Folgejahr Steuerklasse 3 möglich (Gnadensplitting)</li>
      </ul>
      <p>
        Der Steuerklassenwechsel muss beim Finanzamt beantragt werden. Dies ist seit 2020 mehrfach im Jahr möglich. Bei Heirat erfolgt der Wechsel in Steuerklasse 4 automatisch, Sie können jedoch eine andere Kombination beantragen.
      </p>
      <p>
        Die Steuerklasse hat nur Einfluss auf die monatliche Lohnsteuer, nicht auf die Jahressteuerlast. Über die Steuererklärung erfolgt ein Ausgleich zu viel oder zu wenig gezahlter Steuern.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wann bin ich automatisch in Steuerklasse 1?",
      answer:
        "Sie werden automatisch in Steuerklasse 1 eingeordnet, wenn Sie ledig, geschieden oder dauernd getrennt lebend sind und keinen Anspruch auf den Entlastungsbetrag für Alleinerziehende haben. Auch Verwitwete kommen ab dem übernächsten Jahr nach dem Tod des Ehepartners in Steuerklasse 1.",
    },
    {
      question: "Was ist der Unterschied zwischen Steuerklasse 1 und 2?",
      answer:
        "Der Hauptunterschied ist der Entlastungsbetrag für Alleinerziehende von 4.260 € pro Jahr (plus 240 € pro weiterem Kind), der in Steuerklasse 2 berücksichtigt wird. Steuerklasse 2 führt daher zu niedrigeren monatlichen Steuerabzügen als Steuerklasse 1.",
    },
    {
      question: "Kann ich als ledige Person in eine andere Steuerklasse wechseln?",
      answer:
        "Als ledige Person ohne Kinder bleiben Sie in Steuerklasse 1. Ein Wechsel ist nur möglich, wenn Sie heiraten (Wechsel in Klasse 3, 4 oder 5) oder als alleinerziehende Person mit einem Kind im Haushalt in Steuerklasse 2 wechseln können.",
    },
    {
      question: "Wie viel Prozent Steuern zahle ich in Steuerklasse 1?",
      answer:
        "Es gibt keinen festen Prozentsatz. Die Lohnsteuer wird progressiv berechnet und steigt mit dem Einkommen. Bei einem Bruttogehalt von 3.500 € liegt die effektive Steuerbelastung bei etwa 14-15%. Bei höheren Einkommen steigt dieser Prozentsatz entsprechend.",
    },
    {
      question: "Muss ich in Steuerklasse 1 eine Steuererklärung abgeben?",
      answer:
        "In Steuerklasse 1 sind Sie nur dann zur Abgabe einer Steuererklärung verpflichtet, wenn Sie weitere Einkünfte haben, Freibeträge beantragt wurden oder Sie aufgefordert werden. Eine freiwillige Abgabe kann sich aber lohnen, wenn Sie Werbungskosten, Sonderausgaben oder außergewöhnliche Belastungen geltend machen können.",
    },
    {
      question: "Was passiert mit der Steuerklasse bei Verwitwung?",
      answer:
        "Im Jahr des Todes des Ehepartners und im darauffolgenden Jahr können Sie in Steuerklasse 3 bleiben (Gnadensplitting oder Witwensplitting). Ab dem übernächsten Jahr nach dem Todesfall werden Sie automatisch in Steuerklasse 1 eingeordnet, sofern Sie nicht wieder heiraten oder alleinerziehend sind.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/steuerklasse-2", title: "Steuerklasse 2" },
    { href: "/lexikon/steuerklasse-4", title: "Steuerklasse 4" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Steuerklasse 1"
      description="Die Steuerklasse 1 gilt für ledige, geschiedene und verwitwete Arbeitnehmer ohne Kinder."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
