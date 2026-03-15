/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Elterngeld 2026 - Berechnung, Höhe & ElterngeldPlus",
  description:
    "Elterngeld 2026: Basiselterngeld vs. ElterngeldPlus, Berechnung (65-67 % Ersatzrate), Min. 300 € / Max. 1.800 €, Partnerschaftsbonus und Antragstellung.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/elterngeld/",
  },
  openGraph: {
    title: "Elterngeld 2026 - Berechnung, Höhe & ElterngeldPlus",
    description:
      "Elterngeld 2026: Basiselterngeld, ElterngeldPlus, Berechnung und Partnerschaftsbonus.",
    url: "https://gehaltly.de/lexikon/elterngeld/",
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

export default function ElterngeldPage() {
  const content = (
    <>
      <h2>Was ist Elterngeld?</h2>
      <p>
        Elterngeld ist eine staatliche Leistung für Eltern, die nach der Geburt eines Kindes ihre Erwerbstätigkeit unterbrechen oder einschränken, um ihr Kind zu betreuen. Es soll das wegfallende Einkommen teilweise ersetzen und wird für maximal 14 Monate gezahlt. Alle Details zur Beantragung und Berechnung finden Sie beim <a href="https://www.bmfsfj.de/bmfsfj/themen/familie/familienleistungen/elterngeld" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesministerium für Familie, Senioren, Frauen und Jugend (BMFSFJ)</a>.
      </p>

      <h2>Basiselterngeld vs. ElterngeldPlus</h2>
      <p>
        Es gibt zwei Varianten des Elterngelds, die flexibel kombiniert werden können:
      </p>
      <ul>
        <li><strong>Basiselterngeld</strong>: 65-67 % des wegfallenden Nettoeinkommens, mindestens 300 €, maximal 1.800 € pro Monat. Bezugsdauer: 12 Monate (ein Elternteil) bzw. 14 Monate (wenn beide Eltern mindestens 2 Monate nehmen).</li>
        <li><strong>ElterngeldPlus</strong>: Halber Betrag des Basiselterngelds, dafür doppelte Bezugsdauer. Ideal bei Teilzeitarbeit während des Elterngeldbezugs. Ein Monat Basiselterngeld = zwei Monate ElterngeldPlus.</li>
      </ul>

      <h2>Berechnung des Elterngelds</h2>
      <p>
        Das Elterngeld berechnet sich aus dem durchschnittlichen Nettoeinkommen der letzten 12 Monate vor der Geburt (Bemessungszeitraum). Die Ersatzrate ist einkommensabhängig:
      </p>
      <ul>
        <li><strong>Nettoeinkommen über 1.240 €</strong>: Ersatzrate 65 %</li>
        <li><strong>Nettoeinkommen 1.000 – 1.240 €</strong>: Ersatzrate stufenweise von 67 % auf 65 %</li>
        <li><strong>Nettoeinkommen unter 1.000 €</strong>: Ersatzrate erhöht sich schrittweise auf bis zu 100 % (für jede 2 € weniger steigt die Rate um 0,1 %)</li>
      </ul>
      <p>
        <strong>Beispiel:</strong> Bei einem Nettoeinkommen von 2.500 € beträgt das Basiselterngeld: 2.500 € × 65 % = <strong>1.625 €</strong> monatlich.
      </p>

      <h2>Mindest- und Höchstbeträge</h2>
      <ul>
        <li><strong>Mindestbetrag Basiselterngeld</strong>: 300 € (auch für Nicht-Erwerbstätige, Studierende, Hausfrauen/-männer)</li>
        <li><strong>Höchstbetrag Basiselterngeld</strong>: 1.800 € (bei Nettoeinkommen von ca. 2.770 € erreicht)</li>
        <li><strong>Mindestbetrag ElterngeldPlus</strong>: 150 €</li>
        <li><strong>Höchstbetrag ElterngeldPlus</strong>: 900 €</li>
        <li><strong>Geschwisterbonus</strong>: 10 % Zuschlag, mindestens 75 € (Basis) bzw. 37,50 € (Plus)</li>
        <li><strong>Mehrlingszuschlag</strong>: 300 € je weiterem Mehrlingskind</li>
      </ul>

      <h2>Partnerschaftsbonus</h2>
      <p>
        Wenn beide Elternteile gleichzeitig zwischen 24 und 32 Stunden pro Woche in Teilzeit arbeiten, erhalten sie jeweils bis zu <strong>4 zusätzliche Monate ElterngeldPlus</strong> als Partnerschaftsbonus. Auch Alleinerziehende können den Partnerschaftsbonus nutzen.
      </p>

      <h2>Einkommensgrenze seit 2024</h2>
      <p>
        Seit April 2024 gibt es eine Einkommensgrenze für den Elterngeldbezug: Paare mit einem gemeinsamen zu versteuernden Einkommen von mehr als <strong>200.000 €</strong> (seit September 2024: 175.000 €) haben keinen Anspruch auf Elterngeld. Für Alleinerziehende gilt die Grenze von 150.000 €.
      </p>

      <h2>Elterngeld und Progressionsvorbehalt</h2>
      <p>
        Das Elterngeld ist zwar steuerfrei, unterliegt aber dem <strong>Progressionsvorbehalt</strong>. Das bedeutet, es erhöht den Steuersatz auf das übrige Einkommen und kann zu einer Steuernachzahlung führen. Wer Elterngeld bezieht, ist verpflichtet, eine Steuererklärung abzugeben.
      </p>

      <h2>Antragstellung</h2>
      <p>
        Elterngeld muss schriftlich bei der zuständigen Elterngeldstelle beantragt werden. Es wird rückwirkend für maximal 3 Monate vor dem Antragsmonat gezahlt. Benötigte Unterlagen: Geburtsurkunde, Einkommensnachweise, Bescheinigung des Arbeitgebers über Elternzeit.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist das Elterngeld 2026?",
      answer:
        "Das Basiselterngeld beträgt 65-67 % des vorherigen Nettoeinkommens, mindestens 300 € und maximal 1.800 € pro Monat. Bei ElterngeldPlus sind es die Hälfte der Beträge (150-900 €) bei doppelter Bezugsdauer.",
    },
    {
      question: "Wie lange bekommt man Elterngeld?",
      answer:
        "Basiselterngeld wird für maximal 12 Monate gezahlt (14 Monate bei Aufteilung auf beide Elternteile). ElterngeldPlus kann bis zu 28 Monate bezogen werden. Der Partnerschaftsbonus gewährt zusätzlich 4 Monate ElterngeldPlus pro Elternteil.",
    },
    {
      question: "Können beide Eltern gleichzeitig Elterngeld beziehen?",
      answer:
        "Ja, beide Elternteile können gleichzeitig Elterngeld beziehen. Die Gesamtbezugsdauer von 12 bzw. 14 Monaten (Basiselterngeld) wird dann aufgeteilt. Beim Partnerschaftsbonus ist der gleichzeitige Bezug sogar Voraussetzung.",
    },
    {
      question: "Muss ich auf Elterngeld Steuern zahlen?",
      answer:
        "Das Elterngeld selbst ist steuerfrei, unterliegt aber dem Progressionsvorbehalt. Es erhöht den Steuersatz auf Ihr übriges Einkommen, was zu einer Steuernachzahlung bei der Einkommensteuererklärung führen kann.",
    },
    {
      question: "Bekommen auch Selbstständige Elterngeld?",
      answer:
        "Ja, auch Selbstständige und Freiberufler haben Anspruch auf Elterngeld. Die Berechnung basiert auf dem durchschnittlichen Gewinn (nicht Umsatz) der letzten 12 Monate vor der Geburt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/progressionsvorbehalt", title: "Progressionsvorbehalt" },
    { href: "/lexikon/kurzarbeitergeld", title: "Kurzarbeitergeld" },
    { href: "/ratgeber/elterngeld-brutto-netto", title: "Ratgeber: Elterngeld Brutto-Netto" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Elterngeld"
      description="Elterngeld ist eine staatliche Leistung, die Eltern nach der Geburt eines Kindes als Einkommensersatz erhalten."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
