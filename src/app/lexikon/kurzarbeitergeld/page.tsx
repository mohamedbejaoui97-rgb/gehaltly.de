/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Kurzarbeitergeld 2026 - Höhe, Voraussetzungen & Dauer",
  description:
    "Kurzarbeitergeld 2026: 60 % bzw. 67 % des Netto-Entgeltausfalls. Voraussetzungen, maximale Bezugsdauer (12 Monate), Berechnung und Progressionsvorbehalt.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/kurzarbeitergeld/",
  },
  openGraph: {
    title: "Kurzarbeitergeld 2026 - Höhe, Voraussetzungen & Dauer",
    description:
      "Kurzarbeitergeld 2026: Höhe, Voraussetzungen, Bezugsdauer und steuerliche Behandlung.",
    url: "https://gehaltly.de/lexikon/kurzarbeitergeld/",
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

export default function KurzarbeitergeldPage() {
  const content = (
    <>
      <h2>Was ist Kurzarbeitergeld?</h2>
      <p>
        Kurzarbeitergeld (KuG) ist eine Leistung der Bundesagentur für Arbeit, die Arbeitnehmern bei vorübergehend reduzierter Arbeitszeit einen Teil des entfallenden Nettoentgelts ersetzt. Es dient dazu, in wirtschaftlich schwierigen Zeiten Entlassungen zu vermeiden und Arbeitsplätze zu sichern. Die gesetzliche Grundlage bilden die §§95-109 SGB III. Aktuelle Informationen bietet die <a href="https://www.arbeitsagentur.de/unternehmen/finanziell/kurzarbeitergeld" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesagentur für Arbeit</a>.
      </p>

      <h2>Höhe des Kurzarbeitergelds 2026</h2>
      <p>
        Das Kurzarbeitergeld beträgt:
      </p>
      <ul>
        <li><strong>60 %</strong> des pauschalierten Netto-Entgeltausfalls (ohne Kinder)</li>
        <li><strong>67 %</strong> des pauschalierten Netto-Entgeltausfalls (mit mindestens einem Kind)</li>
      </ul>
      <p>
        <strong>Beispiel:</strong> Ein Arbeitnehmer mit einem Bruttogehalt von 3.500 € wird auf 50 % Kurzarbeit gesetzt. Sein Netto-Entgeltausfall (pauschaliert) beträgt ca. 700 €. Das Kurzarbeitergeld beträgt dann: 700 € × 60 % = <strong>420 €</strong> (ohne Kinder) bzw. 700 € × 67 % = <strong>469 €</strong> (mit Kind).
      </p>

      <h2>Voraussetzungen für Kurzarbeitergeld</h2>
      <p>
        Damit Kurzarbeitergeld gezahlt werden kann, müssen folgende Voraussetzungen erfüllt sein:
      </p>
      <ul>
        <li><strong>Erheblicher Arbeitsausfall</strong>: Der Arbeitsausfall muss auf wirtschaftlichen Gründen oder einem unabwendbaren Ereignis beruhen und vorübergehend sein</li>
        <li><strong>Betriebliche Voraussetzungen</strong>: Mindestens ein Arbeitnehmer muss im Betrieb beschäftigt sein</li>
        <li><strong>Persönliche Voraussetzungen</strong>: Das Arbeitsverhältnis darf nicht gekündigt sein und nicht ruhen (z.B. Elternzeit)</li>
        <li><strong>Mindestquote</strong>: Mindestens 10 % der Beschäftigten müssen von einem Entgeltausfall von mehr als 10 % betroffen sein</li>
        <li><strong>Anzeige</strong>: Der Arbeitgeber muss die Kurzarbeit bei der Agentur für Arbeit anzeigen</li>
      </ul>

      <h2>Bezugsdauer</h2>
      <p>
        Kurzarbeitergeld wird für maximal <strong>12 Monate</strong> gezahlt. In Ausnahmefällen kann die Bezugsdauer per Verordnung auf bis zu 24 Monate verlängert werden, wie es während der COVID-19-Pandemie der Fall war. Nach einer Unterbrechung von mindestens 3 Monaten beginnt eine neue Bezugsdauer.
      </p>

      <h2>Berechnung des Kurzarbeitergelds</h2>
      <p>
        Die Berechnung erfolgt anhand der KuG-Tabelle der Bundesagentur für Arbeit:
      </p>
      <ul>
        <li><strong>Soll-Entgelt</strong>: Das Bruttoentgelt, das ohne Kurzarbeit gezahlt worden wäre</li>
        <li><strong>Ist-Entgelt</strong>: Das Bruttoentgelt, das bei reduzierter Arbeitszeit tatsächlich gezahlt wird</li>
        <li><strong>Differenz</strong>: Aus der KuG-Tabelle wird die Netto-Differenz ermittelt</li>
        <li><strong>KuG</strong>: 60 % bzw. 67 % dieser Netto-Differenz</li>
      </ul>
      <p>
        Das Soll-Entgelt ist nach oben auf die Beitragsbemessungsgrenze der Arbeitslosenversicherung begrenzt (2026: 8.450 €/Monat).
      </p>

      <h2>Kurzarbeitergeld und Steuern</h2>
      <p>
        Das Kurzarbeitergeld ist steuerfrei, unterliegt aber dem <strong>Progressionsvorbehalt</strong>. Es erhöht den Steuersatz auf das übrige Einkommen und kann zu einer Steuernachzahlung führen. Wer mehr als 410 € KuG im Jahr erhalten hat, ist zur Abgabe einer Steuererklärung verpflichtet.
      </p>

      <h2>Nebenverdienst während der Kurzarbeit</h2>
      <p>
        Einkommen aus einer Nebentätigkeit, die bereits vor Beginn der Kurzarbeit bestand, wird nicht auf das Kurzarbeitergeld angerechnet. Bei einer neuen Nebentätigkeit wird das Einkommen angerechnet, soweit es zusammen mit dem Kurzarbeitergeld und dem Ist-Entgelt das Soll-Entgelt übersteigt. In Minijobs (bis 556 €/Monat) ist der Nebenverdienst in der Regel anrechnungsfrei.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist das Kurzarbeitergeld 2026?",
      answer:
        "Das Kurzarbeitergeld beträgt 60 % des pauschalierten Netto-Entgeltausfalls ohne Kinder bzw. 67 % mit mindestens einem Kind. Es wird von der Bundesagentur für Arbeit gezahlt.",
    },
    {
      question: "Wie lange wird Kurzarbeitergeld gezahlt?",
      answer:
        "Die reguläre Bezugsdauer beträgt maximal 12 Monate. In Krisenzeiten kann die Bundesregierung die Bezugsdauer per Verordnung auf bis zu 24 Monate verlängern.",
    },
    {
      question: "Muss ich bei Kurzarbeit eine Steuererklärung abgeben?",
      answer:
        "Ja, wenn Sie im Kalenderjahr mehr als 410 € Kurzarbeitergeld erhalten haben, sind Sie zur Abgabe einer Einkommensteuererklärung verpflichtet. Das KuG unterliegt dem Progressionsvorbehalt.",
    },
    {
      question: "Kann ich während der Kurzarbeit einen Nebenjob annehmen?",
      answer:
        "Ja, eine Nebentätigkeit ist möglich. Bei bestehenden Nebenjobs erfolgt keine Anrechnung. Bei neuen Nebenjobs wird der Verdienst angerechnet, soweit er mit KuG und Ist-Entgelt das Soll-Entgelt übersteigt. Minijobs bis 556 € sind in der Regel anrechnungsfrei.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/progressionsvorbehalt", title: "Progressionsvorbehalt" },
    { href: "/lexikon/arbeitslosenversicherung", title: "Arbeitslosenversicherung" },
    { href: "/lexikon/elterngeld", title: "Elterngeld" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Kurzarbeitergeld"
      description="Kurzarbeitergeld ersetzt Arbeitnehmern bei vorübergehend reduzierter Arbeitszeit einen Teil des entfallenden Nettoentgelts."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
