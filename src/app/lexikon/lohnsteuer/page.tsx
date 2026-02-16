/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Lohnsteuer - Berechnung, Steuerprogression & Tarif 2026",
  description:
    "Alles zur Lohnsteuer 2026: Berechnung vom zu versteuernden Einkommen, progressive Steuersätze, Lohnsteuertabelle, Unterschied zur Einkommensteuer.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/lohnsteuer/",
  },
  openGraph: {
    title: "Lohnsteuer - Berechnung, Steuerprogression & Tarif 2026",
    description:
      "Alles zur Lohnsteuer 2026: Berechnung vom zu versteuernden Einkommen, progressive Steuersätze, Lohnsteuertabelle, Unterschied zur Einkommensteuer.",
    url: "https://gehaltly.de/lexikon/lohnsteuer/",
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

export default function LohnsteuerPage() {
  const content = (
    <>
      <h2>Was ist die Lohnsteuer?</h2>
      <p>
        Die Lohnsteuer ist eine besondere Erhebungsform der Einkommensteuer für Arbeitnehmer. Sie wird direkt vom Bruttogehalt einbehalten und vom Arbeitgeber an das Finanzamt abgeführt. Die Lohnsteuer ist eine Vorauszahlung auf die Jahreseinkommensteuer - erst mit der Steuererklärung erfolgt die endgültige Steuerberechnung.
      </p>

      <h2>Unterschied zwischen Lohnsteuer und Einkommensteuer</h2>
      <p>
        Lohnsteuer und Einkommensteuer sind im Kern dasselbe, unterscheiden sich aber in der Erhebung:
      </p>
      <ul>
        <li><strong>Lohnsteuer:</strong> Monatliche Vorauszahlung, wird vom Arbeitgeber einbehalten und abgeführt</li>
        <li><strong>Einkommensteuer:</strong> Jahressteuer auf das gesamte Einkommen, wird über die Steuererklärung berechnet</li>
        <li>Die Lohnsteuer ist also eine <strong>Vorauszahlung</strong> auf die Einkommensteuer</li>
        <li>Bei der Steuererklärung erfolgt die Endabrechnung: Nachzahlung oder Erstattung</li>
      </ul>

      <h2>Progressive Steuersätze 2026</h2>
      <p>
        Deutschland hat ein progressives Steuersystem - je höher das Einkommen, desto höher der Steuersatz:
      </p>
      <ul>
        <li><strong>0%:</strong> Bis zum Grundfreibetrag von 12.096 € (zvE) keine Steuer</li>
        <li><strong>14% - 42%:</strong> Eingangssteuersatz 14%, steigt progressiv bis 42%</li>
        <li><strong>42%:</strong> Ab 67.802 € (zvE) für Ledige - sogenannte "Reichensteuer"</li>
        <li><strong>45%:</strong> Ab 277.826 € (zvE) für Ledige - sogenannte "Spitzensteuersatz"</li>
      </ul>
      <p>
        <strong>Wichtig:</strong> Diese Steuersätze gelten für das <strong>zu versteuernde Einkommen (zvE)</strong>, nicht für das Bruttogehalt. Das zvE ist das Bruttoeinkommen minus Werbungskosten, Sonderausgaben und Freibeträgen.
      </p>

      <h2>Berechnung der Lohnsteuer</h2>
      <p>
        Die Lohnsteuer wird in mehreren Schritten berechnet:
      </p>
      <ul>
        <li><strong>1. Jahresbrutto:</strong> Bruttogehalt × 12 Monate</li>
        <li><strong>2. Minus Werbungskosten:</strong> Mindestens 1.230 € Pauschale</li>
        <li><strong>3. Minus Sonderausgaben:</strong> Krankenversicherung, Altersvorsorge etc.</li>
        <li><strong>4. Minus Freibeträge:</strong> Kinderfreibetrag, Grundfreibetrag etc.</li>
        <li><strong>5. = Zu versteuerndes Einkommen (zvE)</strong></li>
        <li><strong>6. Steuertarif anwenden:</strong> Progressive Berechnung nach Tarifformel</li>
        <li><strong>7. = Jahreseinkommensteuer</strong></li>
        <li><strong>8. ÷ 12 = Monatliche Lohnsteuer</strong></li>
      </ul>

      <h2>Beispielrechnung Lohnsteuer</h2>
      <p>
        <strong>Beispiel 1: Lediger ohne Kinder, 45.000 € Jahresbrutto</strong>
      </p>
      <ul>
        <li>Jahresbrutto: 45.000 €</li>
        <li>Minus Werbungskosten-Pauschale: -1.230 €</li>
        <li>Minus Sonderausgaben (geschätzt): -5.000 €</li>
        <li>Zu versteuerndes Einkommen (zvE): ca. 38.770 €</li>
        <li>Einkommensteuer nach Tarif: ca. 7.850 €</li>
        <li>Solidaritätszuschlag: ca. 0 € (unter der Freigrenze)</li>
        <li><strong>Monatliche Lohnsteuer: ca. 654 €</strong></li>
      </ul>

      <p>
        <strong>Beispiel 2: Verheiratet, 2 Kinder, 70.000 € Jahresbrutto</strong>
      </p>
      <ul>
        <li>Jahresbrutto: 70.000 €</li>
        <li>Steuerklasse 3 (günstigere Verteilung)</li>
        <li>Minus Werbungskosten-Pauschale: -1.230 €</li>
        <li>Minus Sonderausgaben: -7.000 €</li>
        <li>Kinderfreibetrag: 2 × 6.612 € = 13.224 € (oder Kindergeld, je nachdem was günstiger ist)</li>
        <li>Zu versteuerndes Einkommen (zvE): ca. 48.546 €</li>
        <li>Einkommensteuer nach Tarif: ca. 8.200 €</li>
        <li><strong>Monatliche Lohnsteuer: ca. 683 €</strong></li>
      </ul>

      <h2>Steuerprogression - So wirkt sie</h2>
      <p>
        Die Steuerprogression bedeutet: Nicht das gesamte Einkommen wird mit dem höchsten Steuersatz besteuert, sondern jeder Euro wird schrittweise höher besteuert:
      </p>
      <ul>
        <li>Erste 12.096 € (Grundfreibetrag): <strong>0% Steuer</strong></li>
        <li>Nächste 55.706 € (bis 67.802 €): <strong>14% bis 42%</strong> progressiv steigend</li>
        <li>Ab 67.802 €: <strong>42%</strong> auf jeden weiteren Euro</li>
        <li>Ab 277.826 €: <strong>45%</strong> auf jeden weiteren Euro</li>
      </ul>
      <p>
        <strong>Beispiel:</strong> Bei 50.000 € zvE zahlen Sie nicht 42% auf alles, sondern:
      </p>
      <ul>
        <li>0 € Steuer auf die ersten 12.096 €</li>
        <li>Progressiv steigende Steuer (14% bis ca. 30%) auf die restlichen 37.904 €</li>
        <li>Durchschnittssteuersatz: ca. 20% (nicht 42%!)</li>
      </ul>

      <h2>Lohnsteuertabelle und Steuerklassen</h2>
      <p>
        Die monatliche Lohnsteuer wird anhand von Lohnsteuertabellen berechnet, die folgende Faktoren berücksichtigen:
      </p>
      <ul>
        <li><strong>Steuerklasse:</strong> I bis VI, abhängig von Familienstand und weiteren Jobs</li>
        <li><strong>Bruttoeinkommen:</strong> Monatliches oder jährliches Gehalt</li>
        <li><strong>Freibeträge:</strong> Kinderfreibetrag, Behindertenpauschbetrag etc.</li>
        <li><strong>Kirchensteuer:</strong> Ja/Nein, 8% oder 9%</li>
      </ul>
      <p>
        Die Lohnsteuertabellen werden jährlich vom Bundesfinanzministerium veröffentlicht und berücksichtigen alle gesetzlichen Änderungen.
      </p>

      <h2>Lohnsteuerermäßigung durch Freibeträge</h2>
      <p>
        Sie können beim Finanzamt Freibeträge eintragen lassen, um die monatliche Lohnsteuer zu reduzieren:
      </p>
      <ul>
        <li><strong>Werbungskosten:</strong> Wenn Sie mehr als 1.230 € haben (z.B. lange Pendelstrecke)</li>
        <li><strong>Sonderausgaben:</strong> Spenden, Versicherungen über Pauschbetrag hinaus</li>
        <li><strong>Außergewöhnliche Belastungen:</strong> Krankheitskosten, Pflegekosten</li>
        <li><strong>Kinderbetreuungskosten:</strong> Zwei Drittel der Kosten, max. 4.000 € pro Kind</li>
      </ul>
      <p>
        Freibeträge gelten immer für ein Kalenderjahr und müssen jährlich neu beantragt werden.
      </p>

      <h2>Lohnsteuer und Steuererklärung</h2>
      <p>
        Die gezahlte Lohnsteuer ist eine Vorauszahlung. Bei der Steuererklärung erfolgt die Endabrechnung:
      </p>
      <ul>
        <li><strong>Zu viel gezahlt:</strong> Sie erhalten eine Steuererstattung</li>
        <li><strong>Zu wenig gezahlt:</strong> Es kommt zu einer Nachzahlung</li>
        <li>Durchschnittliche Erstattung in Deutschland: ca. 1.100 € pro Jahr</li>
        <li>Gründe für Erstattung: Werbungskosten, Sonderausgaben, Freibeträge, die bei der Lohnsteuer nicht berücksichtigt wurden</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Warum ist meine Lohnsteuer so hoch?",
      answer:
        "Die Lohnsteuer wird nach einem progressiven Tarif berechnet und steigt mit dem Einkommen. Faktoren wie Steuerklasse, Kirchensteuer und fehlende Freibeträge können die Lohnsteuer erhöhen. Mit einer Steuererklärung können Sie oft einen Teil zurückholen.",
    },
    {
      question: "Ist die Lohnsteuer endgültig oder bekomme ich etwas zurück?",
      answer:
        "Die Lohnsteuer ist eine Vorauszahlung. Mit der jährlichen Steuererklärung wird die tatsächlich geschuldete Steuer berechnet. Die meisten Arbeitnehmer bekommen eine Erstattung, weil sie Werbungskosten, Sonderausgaben oder andere Freibeträge geltend machen können.",
    },
    {
      question: "Ab welchem Einkommen muss ich Lohnsteuer zahlen?",
      answer:
        "Lohnsteuer wird erst ab einem zu versteuernden Einkommen über dem Grundfreibetrag von 12.096 € (2026) fällig. Bei einem ledigen Arbeitnehmer ohne weitere Abzüge entspricht dies einem Bruttogehalt von ca. 1.300 € monatlich.",
    },
    {
      question: "Warum zahle ich nicht 42% Steuern, obwohl ich in dieser Stufe bin?",
      answer:
        "Das progressive Steuersystem besteuert nicht das gesamte Einkommen mit dem Spitzensteuersatz. Nur der Teil über 67.802 € (zvE) wird mit 42% besteuert. Der Durchschnittssteuersatz liegt daher deutlich niedriger. Bei 70.000 € zvE zahlen Sie effektiv nur ca. 28% Durchschnittssteuersatz.",
    },
    {
      question: "Was ist der Unterschied zwischen Grenz- und Durchschnittssteuersatz?",
      answer:
        "Der Grenzsteuersatz ist der Satz, mit dem Ihr nächster verdienter Euro besteuert wird (z.B. 42%). Der Durchschnittssteuersatz ist die tatsächlich gezahlte Steuer geteilt durch das gesamte Einkommen (z.B. 25%). Der Durchschnittssteuersatz ist immer niedriger als der Grenzsteuersatz.",
    },
    {
      question: "Muss ich eine Steuererklärung machen, wenn Lohnsteuer abgezogen wird?",
      answer:
        "Für die meisten Arbeitnehmer mit nur einem Job ist die Steuererklärung freiwillig. Pflicht ist sie bei: Steuerklasse V oder VI, Nebenjob über 556 €, Lohnersatzleistungen über 410 € (Arbeitslosengeld, Elterngeld) oder wenn Sie vom Finanzamt dazu aufgefordert werden.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/kirchensteuer", title: "Kirchensteuer" },
    { href: "/lexikon/solidaritaetszuschlag", title: "Solidaritätszuschlag" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Lohnsteuer"
      description="Die Lohnsteuer ist eine Vorauszahlung auf die Einkommensteuer, die direkt vom Bruttogehalt einbehalten und vom Arbeitgeber an das Finanzamt abgeführt wird."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
