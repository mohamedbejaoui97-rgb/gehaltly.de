/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Krankenversicherung - GKV & PKV Beiträge 2026",
  description:
    "Alles zur gesetzlichen und privaten Krankenversicherung: Beitragssätze 2026 (14,6% + Zusatzbeitrag), Beitragsbemessungsgrenze und Arbeitgeberanteil.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/krankenversicherung/",
  },
  openGraph: {
    title: "Krankenversicherung - GKV & PKV Beiträge 2026",
    description:
      "Alles zur gesetzlichen und privaten Krankenversicherung: Beitragssätze 2026 (14,6% + Zusatzbeitrag), Beitragsbemessungsgrenze und Arbeitgeberanteil.",
    url: "https://gehaltly.de/lexikon/krankenversicherung/",
    siteName: "gehaltly.de",
    type: "article",
  },
};

export default function KrankenversicherungPage() {
  const content = (
    <>
      <h2>Was ist die Krankenversicherung?</h2>
      <p>
        Die Krankenversicherung ist eine Pflichtversicherung in Deutschland, die im Krankheitsfall die Kosten für medizinische Behandlungen übernimmt. Arbeitnehmer können zwischen der gesetzlichen Krankenversicherung (GKV) und der privaten Krankenversicherung (PKV) wählen, sofern sie die Versicherungspflichtgrenze überschreiten.
      </p>

      <h2>Beitragssatz zur Krankenversicherung 2026</h2>
      <p>
        Der allgemeine Beitragssatz zur gesetzlichen Krankenversicherung beträgt 2026:
      </p>
      <ul>
        <li><strong>14,6%</strong> allgemeiner Beitragssatz (wird hälftig zwischen Arbeitgeber und Arbeitnehmer geteilt)</li>
        <li><strong>+ durchschnittlich 1,7%</strong> kassenindividueller Zusatzbeitrag (trägt allein der Arbeitnehmer)</li>
        <li><strong>Gesamt: ca. 16,3%</strong> des Bruttoeinkommens</li>
      </ul>
      <p>
        Der Arbeitgeber zahlt die Hälfte des allgemeinen Beitragssatzes (7,3%) plus die Hälfte des Zusatzbeitrags. Der Arbeitnehmer trägt ebenfalls 7,3% plus die andere Hälfte des Zusatzbeitrags.
      </p>

      <h2>Beitragsbemessungsgrenze 2026</h2>
      <p>
        Die Beitragsbemessungsgrenze in der Krankenversicherung beträgt 2026:
      </p>
      <ul>
        <li><strong>66.150 € pro Jahr</strong> (5.512,50 € pro Monat)</li>
        <li>Einkommen oberhalb dieser Grenze wird nicht mehr für die Beitragsberechnung herangezogen</li>
        <li>Der maximale monatliche Beitrag liegt damit bei ca. 898 € (bei 16,3%)</li>
      </ul>

      <h2>GKV vs. PKV - Der Unterschied</h2>
      <p>
        <strong>Gesetzliche Krankenversicherung (GKV):</strong>
      </p>
      <ul>
        <li>Beitrag richtet sich nach dem Einkommen (einkommensabhängig)</li>
        <li>Familienversicherung für Ehepartner und Kinder kostenfrei möglich</li>
        <li>Leistungskatalog gesetzlich festgelegt</li>
        <li>Pflichtversicherung für Arbeitnehmer bis zur Versicherungspflichtgrenze</li>
      </ul>
      <p>
        <strong>Private Krankenversicherung (PKV):</strong>
      </p>
      <ul>
        <li>Beitrag richtet sich nach Alter, Gesundheitszustand und gewählten Leistungen</li>
        <li>Jedes Familienmitglied muss separat versichert werden</li>
        <li>Individuell wählbarer Leistungsumfang</li>
        <li>Möglich ab einem Bruttoeinkommen von 69.300 € (2026)</li>
      </ul>

      <h2>Beispielrechnung Krankenversicherungsbeitrag</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 4.000 € und einem Zusatzbeitrag von 1,7%:
      </p>
      <ul>
        <li>Allgemeiner Beitragssatz: 4.000 € × 14,6% = 584 €</li>
        <li>Zusatzbeitrag: 4.000 € × 1,7% = 68 €</li>
        <li><strong>Gesamt: 652 €</strong></li>
        <li>Arbeitgeberanteil: 292 € (7,3%) + 34 € (0,85%) = <strong>326 €</strong></li>
        <li>Arbeitnehmeranteil: 292 € (7,3%) + 34 € (0,85%) = <strong>326 €</strong></li>
      </ul>

      <h2>Besonderheiten und Ausnahmen</h2>
      <p>
        Bestimmte Personengruppen haben Sonderregelungen bei der Krankenversicherung:
      </p>
      <ul>
        <li><strong>Studenten:</strong> Günstigerer Studententarif bis zum 30. Lebensjahr oder 14. Fachsemester</li>
        <li><strong>Selbstständige:</strong> Zahlen den vollen Beitrag alleine (ohne Arbeitgeberanteil)</li>
        <li><strong>Rentner:</strong> Beitrag wird von der Rente berechnet, Rentenversicherung zahlt Zuschuss</li>
        <li><strong>Minijobber:</strong> Können sich von der Versicherungspflicht befreien lassen</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Wer zahlt die Krankenversicherung - Arbeitgeber oder Arbeitnehmer?",
      answer:
        "Beide zahlen. Der allgemeine Beitragssatz von 14,6% wird hälftig geteilt (je 7,3%). Den kassenindividuellen Zusatzbeitrag (durchschnittlich 1,7%) tragen Arbeitgeber und Arbeitnehmer ebenfalls jeweils zur Hälfte.",
    },
    {
      question: "Kann ich zwischen verschiedenen Krankenkassen wechseln?",
      answer:
        "Ja, Sie können Ihre Krankenkasse wechseln, wenn Sie mindestens 12 Monate Mitglied waren oder wenn Ihre Kasse den Zusatzbeitrag erhöht. Die Kündigungsfrist beträgt in der Regel zwei Monate zum Monatsende.",
    },
    {
      question: "Was passiert, wenn ich über der Beitragsbemessungsgrenze verdiene?",
      answer:
        "Einkommen oberhalb der Beitragsbemessungsgrenze (66.150 € in 2026) wird nicht mehr für die Beitragsberechnung herangezogen. Sie zahlen also maximal den Beitrag, der sich aus der Beitragsbemessungsgrenze ergibt.",
    },
    {
      question: "Wann kann ich in die private Krankenversicherung wechseln?",
      answer:
        "Ein Wechsel in die PKV ist möglich, wenn Sie als Angestellter die Jahresarbeitsentgeltgrenze von 69.300 € (2026) überschreiten oder wenn Sie selbstständig sind. Auch Beamte und Studenten können sich privat versichern.",
    },
    {
      question: "Ist die Familienversicherung in der GKV wirklich kostenlos?",
      answer:
        "Ja, Ehepartner ohne eigenes oder mit geringem Einkommen (unter 556 € monatlich bei Minijobs, sonst 505 €) sowie Kinder können in der GKV kostenfrei mitversichert werden. Dies ist ein großer Vorteil gegenüber der PKV.",
    },
    {
      question: "Was ist der Unterschied zwischen allgemeinem Beitragssatz und Zusatzbeitrag?",
      answer:
        "Der allgemeine Beitragssatz (14,6%) ist für alle Krankenkassen gleich und wird hälftig geteilt. Der Zusatzbeitrag (durchschnittlich 1,7%) wird von jeder Kasse individuell festgelegt und ebenfalls hälftig zwischen Arbeitgeber und Arbeitnehmer aufgeteilt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/pflegeversicherung", title: "Pflegeversicherung" },
    { href: "/lexikon/beitragsbemessungsgrenze", title: "Beitragsbemessungsgrenze" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Krankenversicherung"
      description="Die Krankenversicherung ist eine Pflichtversicherung in Deutschland, die im Krankheitsfall die Kosten für medizinische Behandlungen übernimmt."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
