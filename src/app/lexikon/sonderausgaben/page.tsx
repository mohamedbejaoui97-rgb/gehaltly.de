/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Sonderausgaben 2026 - Vorsorgeaufwendungen, Spenden & Kirchensteuer",
  description:
    "Sonderausgaben 2026: Vorsorgeaufwendungen, Kirchensteuer, Spenden, Ausbildungskosten und private KV/PV-Beiträge. Was Sie von der Steuer absetzen können.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/sonderausgaben/",
  },
  openGraph: {
    title: "Sonderausgaben 2026 - Vorsorgeaufwendungen, Spenden & Kirchensteuer",
    description:
      "Sonderausgaben 2026: Vorsorgeaufwendungen, Spenden, Kirchensteuer und mehr.",
    url: "https://gehaltly.de/lexikon/sonderausgaben/",
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

export default function SonderausgabenPage() {
  const content = (
    <>
      <h2>Was sind Sonderausgaben?</h2>
      <p>
        Sonderausgaben sind private Aufwendungen, die der Gesetzgeber ausdrücklich zum Steuerabzug zugelassen hat. Im Unterschied zu Werbungskosten stehen sie nicht direkt mit der beruflichen Tätigkeit in Zusammenhang, mindern aber dennoch das zu versteuernde Einkommen. Die gesetzliche Grundlage findet sich in <a href="https://www.gesetze-im-internet.de/estg/__10.html" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">§10 EStG</a> und folgenden Paragraphen.
      </p>

      <h2>Arten von Sonderausgaben</h2>
      <p>
        Das Einkommensteuergesetz unterscheidet zwei Hauptkategorien:
      </p>
      <ul>
        <li><strong>Vorsorgeaufwendungen</strong> (§10 Abs. 1 Nr. 2, 3, 3a EStG): Beiträge zu Versicherungen</li>
        <li><strong>Übrige Sonderausgaben</strong> (§10 Abs. 1 Nr. 1, 4, 5, 7, 9 EStG): Kirchensteuer, Spenden, Ausbildungskosten u.a.</li>
      </ul>

      <h2>Vorsorgeaufwendungen</h2>
      <p>
        Vorsorgeaufwendungen sind die betragsmäßig wichtigsten Sonderausgaben:
      </p>

      <h2>Altersvorsorgeaufwendungen (Basisversorgung)</h2>
      <ul>
        <li><strong>Gesetzliche Rentenversicherung</strong>: Arbeitnehmeranteil (9,3 % des Brutto, max. BBG)</li>
        <li><strong>Rürup-Rente (Basisrente)</strong>: Private Altersvorsorge</li>
        <li><strong>Höchstbetrag 2026</strong>: 27.566 € (Alleinstehende) bzw. 55.132 € (Verheiratete) — seit 2023 zu 100 % absetzbar</li>
      </ul>

      <h2>Sonstige Vorsorgeaufwendungen</h2>
      <ul>
        <li><strong>Krankenversicherung</strong>: Beiträge zur Basisabsicherung (ohne Wahltarife, Krankengeld-Anteil)</li>
        <li><strong>Pflegeversicherung</strong>: Arbeitnehmer- und ggf. Zusatzbeitrag</li>
        <li><strong>Arbeitslosenversicherung</strong>: Arbeitnehmeranteil</li>
        <li><strong>Berufsunfähigkeitsversicherung</strong>: Prämienzahlungen</li>
        <li><strong>Unfallversicherung</strong>: Nur der private Anteil</li>
        <li><strong>Haftpflichtversicherung</strong>: Privathaftpflicht</li>
        <li><strong>Höchstbetrag</strong>: 1.900 € (Arbeitnehmer) bzw. 2.800 € (Selbstständige) — wird in der Praxis fast immer durch KV- und PV-Beiträge ausgeschöpft</li>
      </ul>

      <h2>Kirchensteuer</h2>
      <p>
        Die gezahlte Kirchensteuer ist in voller Höhe als Sonderausgabe absetzbar. Sie beträgt 8 % (Bayern, Baden-Württemberg) bzw. 9 % (übrige Bundesländer) der Lohnsteuer. Die Absetzbarkeit führt zu einer teilweisen Rückerstattung über die Einkommensteuer.
      </p>

      <h2>Spenden und Mitgliedsbeiträge</h2>
      <ul>
        <li><strong>Spenden an gemeinnützige Organisationen</strong>: Bis zu 20 % des Gesamtbetrags der Einkünfte absetzbar</li>
        <li><strong>Spenden an politische Parteien</strong>: 50 % Steuerermäßigung bis 1.650 € (Einzelperson) bzw. 3.300 € (Ehepaar), darüber hinaus als Sonderausgabe bis 1.650 €/3.300 €</li>
        <li><strong>Vereinfachter Nachweis</strong>: Bei Spenden bis 300 € genügt der Kontoauszug als Nachweis</li>
      </ul>

      <h2>Ausbildungskosten</h2>
      <ul>
        <li><strong>Erstausbildung/Erststudium</strong>: Bis zu 6.000 € pro Jahr als Sonderausgabe (nicht als Werbungskosten)</li>
        <li><strong>Zweitausbildung/Zweitstudium</strong>: Unbegrenzt als Werbungskosten absetzbar (nicht als Sonderausgabe)</li>
        <li>Abzugsfähig sind Studiengebühren, Fachliteratur, Fahrtkosten, Arbeitsmittel</li>
      </ul>

      <h2>Sonderausgaben-Pauschbetrag</h2>
      <p>
        Wer keine oder nur geringe Sonderausgaben nachweisen kann, erhält automatisch den <strong>Sonderausgaben-Pauschbetrag von 36 €</strong> (72 € bei Zusammenveranlagung). Dieser ist in der Praxis kaum relevant, da die tatsächlichen Sonderausgaben (insbesondere Vorsorgeaufwendungen) fast immer deutlich höher liegen.
      </p>

      <h2>Sonderausgaben in der Steuererklärung</h2>
      <p>
        Sonderausgaben werden in verschiedenen Anlagen der Steuererklärung eingetragen: Vorsorgeaufwendungen in der <strong>Anlage Vorsorgeaufwand</strong>, Spenden in der <strong>Anlage Sonderausgaben</strong> und Kirchensteuer wird automatisch aus der Lohnsteuerbescheinigung übernommen.
      </p>
    </>
  );

  const faq = [
    {
      question: "Was ist der Unterschied zwischen Sonderausgaben und Werbungskosten?",
      answer:
        "Werbungskosten sind berufsbedingte Ausgaben (z.B. Fahrtkosten, Arbeitsmittel), Sonderausgaben sind private Ausgaben, die der Gesetzgeber zum Abzug zugelassen hat (z.B. Versicherungsbeiträge, Kirchensteuer, Spenden). Beide mindern das zu versteuernde Einkommen.",
    },
    {
      question: "Welche Versicherungen kann ich als Sonderausgaben absetzen?",
      answer:
        "Absetzbar sind unter anderem: Kranken- und Pflegeversicherung (Basisabsicherung), Rentenversicherung, Arbeitslosenversicherung, Haftpflichtversicherung, Berufsunfähigkeitsversicherung und Unfallversicherung (privater Anteil).",
    },
    {
      question: "Bis zu welchem Betrag sind Spenden absetzbar?",
      answer:
        "Spenden an gemeinnützige Organisationen sind bis zu 20 % des Gesamtbetrags der Einkünfte als Sonderausgabe absetzbar. Bei Spenden bis 300 € genügt der Kontoauszug als Nachweis, darüber ist eine Spendenbescheinigung erforderlich.",
    },
    {
      question: "Kann ich Studienkosten als Sonderausgaben absetzen?",
      answer:
        "Kosten einer Erstausbildung oder eines Erststudiums können bis zu 6.000 € pro Jahr als Sonderausgaben abgesetzt werden. Bei einem Zweitstudium oder einer Zweitausbildung sind die Kosten unbegrenzt als Werbungskosten absetzbar.",
    },
    {
      question: "Ist die Kirchensteuer als Sonderausgabe absetzbar?",
      answer:
        "Ja, die gezahlte Kirchensteuer ist in voller Höhe als Sonderausgabe absetzbar. Sie wird automatisch aus der Lohnsteuerbescheinigung in die Steuererklärung übernommen und mindert das zu versteuernde Einkommen.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/werbungskosten", title: "Werbungskosten" },
    { href: "/lexikon/kirchensteuer", title: "Kirchensteuer" },
    { href: "/lexikon/krankenversicherung", title: "Krankenversicherung" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Sonderausgaben"
      description="Sonderausgaben sind private Aufwendungen wie Versicherungsbeiträge, Kirchensteuer und Spenden, die das zu versteuernde Einkommen mindern."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
