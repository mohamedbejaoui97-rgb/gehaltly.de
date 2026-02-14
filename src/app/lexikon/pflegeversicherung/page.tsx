/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Pflegeversicherung - Beitragssatz & Kinderrabatt 2026",
  description:
    "Alles zur Pflegeversicherung 2026: Beitragssatz 3,4%, Zuschlag für Kinderlose, Kinderrabatt bis zu 1,25% und Sonderregelung in Sachsen.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/pflegeversicherung/",
  },
  openGraph: {
    title: "Pflegeversicherung - Beitragssatz & Kinderrabatt 2026",
    description:
      "Alles zur Pflegeversicherung 2026: Beitragssatz 3,4%, Zuschlag für Kinderlose, Kinderrabatt bis zu 1,25% und Sonderregelung in Sachsen.",
    url: "https://gehaltly.de/lexikon/pflegeversicherung/",
    siteName: "gehaltly.de",
    type: "article",
  },
};

export default function PflegeversicherungPage() {
  const content = (
    <>
      <h2>Was ist die Pflegeversicherung?</h2>
      <p>
        Die Pflegeversicherung ist eine Pflichtversicherung in Deutschland, die als fünfte Säule der Sozialversicherung im Jahr 1995 eingeführt wurde. Sie sichert das Risiko der Pflegebedürftigkeit ab und übernimmt einen Teil der Kosten, die bei häuslicher oder stationärer Pflege entstehen.
      </p>

      <h2>Beitragssatz zur Pflegeversicherung 2026</h2>
      <p>
        Der Beitragssatz zur Pflegeversicherung setzt sich 2026 aus mehreren Komponenten zusammen:
      </p>
      <ul>
        <li><strong>3,4%</strong> allgemeiner Beitragssatz (wird hälftig zwischen Arbeitgeber und Arbeitnehmer geteilt)</li>
        <li><strong>+ 0,6%</strong> Zuschlag für Kinderlose ab 23 Jahren (trägt allein der Arbeitnehmer)</li>
        <li>Kinderlose ab 23: <strong>4,0%</strong> gesamt</li>
        <li>Mit Kindern: <strong>3,4%</strong> minus Kinderrabatt</li>
      </ul>

      <h2>Kinderrabatt in der Pflegeversicherung</h2>
      <p>
        Seit 2024 gibt es einen gestaffelten Kinderrabatt für Eltern mit mehreren Kindern:
      </p>
      <ul>
        <li>1 Kind: Kein zusätzlicher Rabatt (nur kein Kinderlosenzuschlag)</li>
        <li>2 Kinder: <strong>-0,25%</strong> Rabatt</li>
        <li>3 Kinder: <strong>-0,50%</strong> Rabatt</li>
        <li>4 Kinder: <strong>-0,75%</strong> Rabatt</li>
        <li>5 oder mehr Kinder: <strong>-1,00%</strong> Rabatt (maximal)</li>
      </ul>
      <p>
        Der Rabatt gilt ab dem zweiten Kind und wird beim Arbeitnehmeranteil berücksichtigt.
      </p>

      <h2>Sonderregelung Sachsen</h2>
      <p>
        In Sachsen gibt es eine Besonderheit bei der Aufteilung der Pflegeversicherungsbeiträge:
      </p>
      <ul>
        <li>Arbeitnehmer zahlen: <strong>2,2%</strong> (statt 1,7%)</li>
        <li>Arbeitgeber zahlen: <strong>1,2%</strong> (statt 1,7%)</li>
        <li>Grund: In Sachsen ist der Buß- und Bettag weiterhin ein gesetzlicher Feiertag</li>
        <li>Als Ausgleich zahlen Arbeitnehmer einen höheren Pflegeversicherungsanteil</li>
      </ul>

      <h2>Beispielrechnungen Pflegeversicherung</h2>
      <p>
        <strong>Beispiel 1: Kinderloser Arbeitnehmer (28 Jahre), 4.000 € Brutto</strong>
      </p>
      <ul>
        <li>Beitragssatz: 4,0% (3,4% + 0,6% Zuschlag)</li>
        <li>Gesamtbeitrag: 4.000 € × 4,0% = 160 €</li>
        <li>Arbeitgeber: 4.000 € × 1,7% = <strong>68 €</strong></li>
        <li>Arbeitnehmer: 4.000 € × 2,3% = <strong>92 €</strong></li>
      </ul>

      <p>
        <strong>Beispiel 2: Mutter mit 3 Kindern, 4.000 € Brutto</strong>
      </p>
      <ul>
        <li>Beitragssatz: 2,9% (3,4% - 0,5% Rabatt)</li>
        <li>Gesamtbeitrag: 4.000 € × 2,9% = 116 €</li>
        <li>Arbeitgeber: 4.000 € × 1,7% = <strong>68 €</strong></li>
        <li>Arbeitnehmer: 4.000 € × 1,2% = <strong>48 €</strong></li>
      </ul>

      <p>
        <strong>Beispiel 3: In Sachsen, kinderlos, 4.000 € Brutto</strong>
      </p>
      <ul>
        <li>Beitragssatz: 4,0% (3,4% + 0,6% Zuschlag)</li>
        <li>Gesamtbeitrag: 4.000 € × 4,0% = 160 €</li>
        <li>Arbeitgeber: 4.000 € × 1,2% = <strong>48 €</strong></li>
        <li>Arbeitnehmer: 4.000 € × 2,8% = <strong>112 €</strong></li>
      </ul>

      <h2>Leistungen der Pflegeversicherung</h2>
      <p>
        Die Pflegeversicherung übernimmt je nach Pflegegrad verschiedene Leistungen:
      </p>
      <ul>
        <li><strong>Pflegegeld</strong> für häusliche Pflege durch Angehörige</li>
        <li><strong>Pflegesachleistungen</strong> für professionelle ambulante Pflege</li>
        <li><strong>Teilstationäre Pflege</strong> (Tages- und Nachtpflege)</li>
        <li><strong>Vollstationäre Pflege</strong> im Pflegeheim</li>
        <li><strong>Verhinderungspflege</strong> und <strong>Kurzzeitpflege</strong></li>
      </ul>
      <p>
        Die Höhe der Leistungen richtet sich nach dem Pflegegrad (1-5), der durch den Medizinischen Dienst (MD) festgestellt wird.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wer muss den Zuschlag für Kinderlose zahlen?",
      answer:
        "Den Zuschlag von 0,6% müssen alle kinderlosen Versicherten ab dem 23. Lebensjahr zahlen. Der Zuschlag entfällt, sobald ein Kind geboren wird oder für Personen, die vor dem 1. Januar 1940 geboren wurden.",
    },
    {
      question: "Ab wann gilt der Kinderrabatt?",
      answer:
        "Der gestaffelte Kinderrabatt gilt ab dem zweiten Kind. Mit 2 Kindern erhalten Sie 0,25% Rabatt, mit 3 Kindern 0,5%, mit 4 Kindern 0,75% und ab 5 Kindern den maximalen Rabatt von 1,0% auf Ihren Arbeitnehmeranteil.",
    },
    {
      question: "Warum zahlen Arbeitnehmer in Sachsen mehr?",
      answer:
        "In Sachsen ist der Buß- und Bettag weiterhin ein gesetzlicher Feiertag. Als Ausgleich für diesen zusätzlichen freien Tag zahlen Arbeitnehmer einen höheren Anteil zur Pflegeversicherung (2,2% statt 1,7%), während Arbeitgeber weniger zahlen (1,2% statt 1,7%).",
    },
    {
      question: "Gilt der Kinderrabatt auch für Stiefkinder und Pflegekinder?",
      answer:
        "Ja, der Kinderrabatt gilt für leibliche Kinder, Stiefkinder, Adoptivkinder und Pflegekinder. Entscheidend ist, dass die Kinder im Haushalt leben oder lebten und erzogen wurden.",
    },
    {
      question: "Zahlen Rentner auch in die Pflegeversicherung?",
      answer:
        "Ja, auch Rentner zahlen Beiträge zur Pflegeversicherung. Der Beitrag wird von der Rente berechnet, wobei die Rentenversicherung die Hälfte des allgemeinen Beitragssatzes (1,7%) übernimmt. Zuschläge für Kinderlose müssen Rentner vollständig selbst tragen.",
    },
    {
      question: "Was ist der Unterschied zur privaten Pflegeversicherung?",
      answer:
        "Wer privat krankenversichert ist, muss auch eine private Pflegepflichtversicherung abschließen. Die Leistungen sind mit der gesetzlichen Pflegeversicherung vergleichbar, aber die Beiträge richten sich nach Alter und Gesundheitszustand bei Vertragsabschluss, nicht nach dem Einkommen.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/krankenversicherung", title: "Krankenversicherung" },
    { href: "/lexikon/rentenversicherung", title: "Rentenversicherung" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Pflegeversicherung"
      description="Die Pflegeversicherung ist eine Pflichtversicherung in Deutschland, die das Risiko der Pflegebedürftigkeit absichert."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
