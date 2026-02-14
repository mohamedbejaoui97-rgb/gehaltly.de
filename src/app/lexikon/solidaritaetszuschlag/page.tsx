/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Solidaritätszuschlag - Berechnung & Regelungen 2026",
  description:
    "Was ist der Solidaritätszuschlag? Wer muss ihn 2026 noch zahlen und wie wird er berechnet? Alle Informationen zum Soli 2026 in Deutschland.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/solidaritaetszuschlag/",
  },
};

export default function SolidaritaetszuschlagPage() {
  const content = (
    <>
      <h2>Was ist der Solidaritätszuschlag?</h2>
      <p>
        Der Solidaritätszuschlag (umgangssprachlich "Soli") ist eine Ergänzungsabgabe zur Einkommensteuer und Körperschaftsteuer in Deutschland. Er wurde 1991 zur Finanzierung der deutschen Wiedervereinigung eingeführt und beträgt 5,5% der festgesetzten Einkommensteuer.
      </p>
      <p>
        Seit 2021 wurde der Solidaritätszuschlag für etwa 90% der Steuerzahler abgeschafft. Nur noch Besserverdienende mit hohen Einkommen müssen den Soli entrichten.
      </p>

      <h2>Wer muss 2026 noch Solidaritätszuschlag zahlen?</h2>
      <p>
        Im Jahr 2026 müssen Sie nur dann Solidaritätszuschlag zahlen, wenn Ihre Einkommensteuer die folgenden Freigrenzen übersteigt:
      </p>
      <ul>
        <li><strong>Ledige:</strong> Freigrenze bei 17.543 € Einkommensteuer pro Jahr (entspricht ca. 73.000 € zu versteuerndem Einkommen)</li>
        <li><strong>Verheiratete/Zusammenveranlagte:</strong> Freigrenze bei 35.086 € Einkommensteuer pro Jahr (entspricht ca. 146.000 € zu versteuerndem Einkommen)</li>
      </ul>
      <p>
        Zwischen der Freigrenze und der doppelten Freigrenze gilt eine Gleitzone, in der der Solidaritätszuschlag nur teilweise erhoben wird.
      </p>

      <h2>Berechnung des Solidaritätszuschlags</h2>
      <p>
        Der Solidaritätszuschlag beträgt <strong>5,5% der Einkommensteuer</strong>, jedoch nur für den Teil der Steuer, der die Freigrenze übersteigt. Die Berechnung erfolgt in drei Stufen:
      </p>
      <ul>
        <li><strong>Unterhalb der Freigrenze:</strong> Kein Solidaritätszuschlag</li>
        <li><strong>In der Gleitzone:</strong> Nur der Teil der Einkommensteuer, der die Freigrenze übersteigt, wird zur Berechnung herangezogen</li>
        <li><strong>Oberhalb der doppelten Freigrenze:</strong> Volle 5,5% der gesamten Einkommensteuer</li>
      </ul>

      <h2>Beispielrechnungen Solidaritätszuschlag 2026</h2>
      <p>
        <strong>Beispiel 1 - Ledige Person mit 70.000 € zu versteuerndem Einkommen:</strong>
      </p>
      <ul>
        <li>Einkommensteuer: ca. 16.800 €</li>
        <li>Liegt unterhalb der Freigrenze (17.543 €)</li>
        <li>Solidaritätszuschlag: <strong>0 €</strong></li>
      </ul>

      <p>
        <strong>Beispiel 2 - Ledige Person mit 85.000 € zu versteuerndem Einkommen:</strong>
      </p>
      <ul>
        <li>Einkommensteuer: ca. 22.500 €</li>
        <li>Liegt in der Gleitzone</li>
        <li>Solidaritätszuschlag: ca. <strong>275 €</strong> (reduziert)</li>
      </ul>

      <p>
        <strong>Beispiel 3 - Ledige Person mit 120.000 € zu versteuerndem Einkommen:</strong>
      </p>
      <ul>
        <li>Einkommensteuer: ca. 38.000 €</li>
        <li>Liegt oberhalb der doppelten Freigrenze</li>
        <li>Solidaritätszuschlag: 38.000 € × 5,5% = <strong>2.090 €</strong></li>
      </ul>

      <h2>Geschichte des Solidaritätszuschlags</h2>
      <p>
        Der Solidaritätszuschlag wurde ursprünglich 1991 für ein Jahr eingeführt, um die Kosten der deutschen Wiedervereinigung und des Golfkriegs zu finanzieren. Nach einer Pause wurde er 1995 erneut eingeführt und galt zunächst als temporäre Maßnahme.
      </p>
      <p>
        Seit 2021 gilt die teilweise Abschaffung: Die meisten Arbeitnehmer und Selbstständigen zahlen keinen Soli mehr. Nur noch die einkommensstärksten 10% der Steuerzahler sind betroffen. Dies entspricht einem wichtigen Schritt zur Entlastung der Mittelschicht.
      </p>

      <h2>Solidaritätszuschlag bei Kapitalerträgen</h2>
      <p>
        Bei Kapitalerträgen (Zinsen, Dividenden, Kursgewinne) wird der Solidaritätszuschlag weiterhin vollständig erhoben, allerdings nur auf die Abgeltungsteuer, die den Sparerpauschbetrag übersteigt:
      </p>
      <ul>
        <li>Abgeltungsteuer: 25% auf Kapitalerträge</li>
        <li>Solidaritätszuschlag: 5,5% der Abgeltungsteuer</li>
        <li>Effektiver Satz: 26,375% auf Kapitalerträge</li>
      </ul>
      <p>
        Die Bank behält den Solidaritätszuschlag automatisch ein und führt ihn ans Finanzamt ab.
      </p>

      <h2>Kritik und Zukunft des Solidaritätszuschlags</h2>
      <p>
        Der Solidaritätszuschlag ist politisch umstritten. Kritiker argumentieren, dass der ursprüngliche Zweck (Finanzierung der Wiedervereinigung) erfüllt sei und die Abgabe komplett abgeschafft werden sollte. Befürworter sehen im Soli eine wichtige Einnahmequelle des Bundes.
      </p>
      <p>
        Das Bundesverfassungsgericht hat 2024 die Verfassungsmäßigkeit des Solidaritätszuschlags bestätigt, sodass er vorerst in seiner aktuellen Form bestehen bleibt.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wer zahlt 2026 keinen Solidaritätszuschlag mehr?",
      answer:
        "Etwa 90% aller Steuerzahler zahlen seit 2021 keinen Solidaritätszuschlag mehr. Betroffen sind nur noch Personen mit einem zu versteuernden Einkommen von über 73.000 € (Ledige) bzw. 146.000 € (Verheiratete). Die meisten Arbeitnehmer und Mittelverdiener sind vollständig vom Soli befreit.",
    },
    {
      question: "Wie wird der Solidaritätszuschlag berechnet?",
      answer:
        "Der Solidaritätszuschlag beträgt 5,5% der Einkommensteuer. Seit 2021 gilt jedoch eine Freigrenze: Nur wenn Ihre Einkommensteuer über 17.543 € (Ledige) bzw. 35.086 € (Verheiratete) liegt, müssen Sie anteilig oder vollständig Soli zahlen. In der Gleitzone bis zur doppelten Freigrenze wird nur ein Teil erhoben.",
    },
    {
      question: "Wird der Solidaritätszuschlag vom Brutto oder Netto berechnet?",
      answer:
        "Der Solidaritätszuschlag wird weder vom Brutto noch vom Netto berechnet, sondern von der Einkommensteuer. Er beträgt 5,5% der festgesetzten Einkommensteuer, allerdings nur, wenn diese die Freigrenze übersteigt.",
    },
    {
      question: "Gilt die Freigrenze auch für Kapitalerträge?",
      answer:
        "Nein, bei Kapitalerträgen wird der Solidaritätszuschlag weiterhin vollständig auf die Abgeltungsteuer erhoben. Die Freigrenze gilt nur für die Einkommensteuer aus Arbeitseinkommen, selbstständiger Tätigkeit und anderen Einkünften. Bei Kapitaleinkünften beträgt die Gesamtbelastung 26,375% (25% Abgeltungsteuer + 5,5% Soli darauf).",
    },
    {
      question: "Kann ich den Solidaritätszuschlag in der Steuererklärung absetzen?",
      answer:
        "Nein, der Solidaritätszuschlag kann nicht als Werbungskosten oder Sonderausgaben abgesetzt werden. Er ist eine Ergänzungsabgabe zur Einkommensteuer und mindert nicht das zu versteuernde Einkommen. Eine Ausnahme besteht für Selbstständige, die den Soli teilweise als Betriebsausgabe geltend machen können.",
    },
    {
      question: "Wird der Solidaritätszuschlag komplett abgeschafft?",
      answer:
        "Eine komplette Abschaffung ist derzeit nicht geplant. Seit 2021 wurde der Soli für etwa 90% der Steuerzahler abgeschafft. Eine vollständige Abschaffung wird politisch diskutiert, ist aber aufgrund der damit verbundenen Steuerausfälle für den Bundeshaushalt umstritten. Das Bundesverfassungsgericht hat 2024 die Verfassungsmäßigkeit bestätigt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/lexikon/kirchensteuer", title: "Kirchensteuer" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Solidaritätszuschlag"
      description="Der Solidaritätszuschlag ist eine Ergänzungsabgabe zur Einkommensteuer, die seit 2021 nur noch von Besserverdienenden gezahlt wird."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
