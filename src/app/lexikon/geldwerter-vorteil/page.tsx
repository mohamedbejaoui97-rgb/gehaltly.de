/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Geldwerter Vorteil - Firmenwagen, 1%-Regel & Versteuerung 2026",
  description:
    "Alles zum geldwerten Vorteil 2026: Firmenwagen-Versteuerung, 1%-Regel, Fahrtenbuch-Methode, Sachbezüge wie Dienstwohnung und Essensmarken.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/geldwerter-vorteil/",
  },
  openGraph: {
    title: "Geldwerter Vorteil - Firmenwagen, 1%-Regel & Versteuerung 2026",
    description:
      "Alles zum geldwerten Vorteil 2026: Firmenwagen-Versteuerung, 1%-Regel, Fahrtenbuch-Methode, Sachbezüge wie Dienstwohnung und Essensmarken.",
    url: "https://gehaltly.de/lexikon/geldwerter-vorteil/",
    siteName: "gehaltly.de",
    type: "article",
  },
};

export default function GeldwerterVorteilPage() {
  const content = (
    <>
      <h2>Was ist ein geldwerter Vorteil?</h2>
      <p>
        Ein geldwerter Vorteil (auch Sachbezug genannt) ist eine Leistung des Arbeitgebers an den Arbeitnehmer, die nicht in Geld ausgezahlt wird, aber einen wirtschaftlichen Wert darstellt. Geldwerte Vorteile müssen versteuert werden und erhöhen das zu versteuernde Einkommen. Die bekanntesten Beispiele sind Firmenwagen, Dienstwohnungen und Essenszuschüsse.
      </p>

      <h2>Die häufigsten geldwerten Vorteile</h2>
      <p>
        Zu den typischen geldwerten Vorteilen gehören:
      </p>
      <ul>
        <li><strong>Firmenwagen zur Privatnutzung</strong> (häufigster geldwerter Vorteil)</li>
        <li><strong>Dienstwohnung</strong> oder vergünstigter Wohnraum</li>
        <li><strong>Essensmarken, Restaurantschecks</strong> oder Kantine</li>
        <li><strong>Jobticket</strong> für öffentliche Verkehrsmittel</li>
        <li><strong>Mitarbeiterbeteiligungen</strong> und Aktienoptionen</li>
        <li><strong>Diensthandy</strong> zur privaten Nutzung</li>
        <li><strong>Kinderbetreuung</strong> durch den Arbeitgeber</li>
        <li><strong>Fitness-Studio-Mitgliedschaft</strong></li>
      </ul>

      <h2>Firmenwagen: Die 1%-Regel</h2>
      <p>
        Bei der Privatnutzung eines Firmenwagens gibt es zwei Methoden zur Versteuerung. Die häufigere ist die <strong>1%-Regel</strong>:
      </p>
      <ul>
        <li><strong>Pauschal 1%</strong> des Bruttolistenpreises pro Monat als geldwerter Vorteil</li>
        <li>Maßgeblich ist der Listenpreis bei Erstzulassung (inkl. Sonderausstattung)</li>
        <li>Zusätzlich: <strong>0,03%</strong> des Listenpreises pro Kilometer Entfernung Wohnung-Arbeitsstätte</li>
        <li>Der geldwerte Vorteil wird zum Bruttogehalt addiert und dann versteuert</li>
      </ul>
      <p>
        <strong>Beispielrechnung 1%-Regel:</strong>
      </p>
      <ul>
        <li>Firmenwagen Listenpreis: 40.000 €</li>
        <li>Entfernung Wohnung-Arbeit: 20 km (einfach)</li>
        <li>Geldwerter Vorteil Privatnutzung: 40.000 € × 1% = <strong>400 € pro Monat</strong></li>
        <li>Geldwerter Vorteil Arbeitsweg: 40.000 € × 0,03% × 20 km = <strong>240 € pro Monat</strong></li>
        <li><strong>Gesamt: 640 € pro Monat</strong> werden zum Bruttogehalt addiert</li>
        <li>Bei Steuerklasse 1 und 3.000 € Gehalt: ca. 230 € zusätzliche Abzüge</li>
      </ul>

      <h2>Firmenwagen: Fahrtenbuch-Methode</h2>
      <p>
        Als Alternative zur 1%-Regel kann ein <strong>Fahrtenbuch</strong> geführt werden:
      </p>
      <ul>
        <li>Alle Fahrten müssen lückenlos dokumentiert werden (Datum, Km-Stand, Ziel, Zweck)</li>
        <li>Es werden nur die <strong>tatsächlichen Kosten</strong> für Privatfahrten berechnet</li>
        <li>Anteil der Privatfahrten an den Gesamtkosten = geldwerter Vorteil</li>
        <li>Gesamtkosten: Leasing/AfA, Versicherung, Wartung, Kraftstoff, Steuer</li>
        <li>Lohnt sich meist nur bei wenig Privatnutzung (unter 50%)</li>
      </ul>
      <p>
        <strong>Beispielrechnung Fahrtenbuch:</strong>
      </p>
      <ul>
        <li>Gesamtkosten Firmenwagen: 800 € pro Monat</li>
        <li>Gesamtfahrleistung: 2.000 km</li>
        <li>Privatfahrten: 400 km (20%)</li>
        <li>Geldwerter Vorteil: 800 € × 20% = <strong>160 € pro Monat</strong></li>
        <li>Deutlich günstiger als 1%-Regel bei wenig Privatnutzung</li>
      </ul>

      <h2>E-Autos und Hybride: Reduzierte Versteuerung</h2>
      <p>
        Für Elektro- und Hybridfahrzeuge gelten reduzierte Steuersätze:
      </p>
      <ul>
        <li><strong>Reine E-Autos:</strong> Nur 0,25% des Listenpreises (bei Listenpreis unter 60.000 €)</li>
        <li><strong>Reine E-Autos:</strong> 0,5% des Listenpreises (bei Listenpreis über 60.000 €)</li>
        <li><strong>Plug-in-Hybride:</strong> 0,5% (wenn CO₂-Ausstoß unter 50 g/km oder elektrische Reichweite mindestens 80 km)</li>
        <li>Diese Regelungen gelten bis Ende 2030</li>
      </ul>
      <p>
        <strong>Beispiel E-Auto (unter 60.000 €):</strong>
      </p>
      <ul>
        <li>Listenpreis E-Auto: 45.000 €</li>
        <li>Geldwerter Vorteil: 45.000 € × 0,25% = <strong>112,50 € pro Monat</strong></li>
        <li>Statt 450 € bei einem vergleichbaren Verbrenner</li>
      </ul>

      <h2>Weitere wichtige geldwerte Vorteile</h2>
      <p>
        <strong>Dienstwohnung:</strong>
      </p>
      <ul>
        <li>Versteuert wird die Differenz zwischen ortsüblicher Miete und gezahlter Miete</li>
        <li>Bei kostenloser Nutzung: Ortsübliche Miete ist voll zu versteuern</li>
      </ul>
      <p>
        <strong>Essensmarken / Restaurantschecks:</strong>
      </p>
      <ul>
        <li>Steuerfreier Sachbezug bis <strong>7,23 € pro Arbeitstag</strong> (2026)</li>
        <li>Arbeitgeber darf maximal 3,87 € bezuschussen (steuer- und sozialabgabenfrei)</li>
        <li>Überschreitungen sind voll steuerpflichtig</li>
      </ul>
      <p>
        <strong>Jobticket:</strong>
      </p>
      <ul>
        <li>Kann steuerfrei oder mit 25% pauschal versteuert gewährt werden</li>
        <li>Reduziert aber die Entfernungspauschale (Pendlerpauschale) in der Steuererklärung</li>
      </ul>
      <p>
        <strong>Sachbezüge bis 50 € monatlich:</strong>
      </p>
      <ul>
        <li>Gutscheine und Sachleistungen bis 50 € pro Monat sind steuer- und sozialabgabenfrei</li>
        <li>Keine Barauszahlung möglich</li>
        <li>Beispiele: Tankgutscheine, Warengutscheine, Kinogutscheine</li>
      </ul>

      <h2>Auswirkungen auf Steuern und Sozialabgaben</h2>
      <p>
        Geldwerte Vorteile werden wie reguläres Gehalt behandelt:
      </p>
      <ul>
        <li>Sie erhöhen das <strong>zu versteuernde Bruttoeinkommen</strong></li>
        <li>Darauf werden <strong>Lohnsteuer, Solidaritätszuschlag</strong> und ggf. <strong>Kirchensteuer</strong> fällig</li>
        <li>Auch <strong>Sozialversicherungsbeiträge</strong> (Kranken-, Pflege-, Renten-, Arbeitslosenversicherung) werden fällig</li>
        <li>Der geldwerte Vorteil erscheint auf der Gehaltsabrechnung</li>
        <li>Das Nettogehalt sinkt entsprechend der Abgaben auf den geldwerten Vorteil</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Muss ich einen Firmenwagen versteuern, auch wenn ich ihn kaum privat nutze?",
      answer:
        "Ja, sobald private Nutzung erlaubt ist, muss der geldwerte Vorteil versteuert werden - auch wenn Sie das Auto kaum privat nutzen. Bei sehr geringer Privatnutzung lohnt sich die Fahrtenbuch-Methode, um nur die tatsächlichen Privatfahrten zu versteuern.",
    },
    {
      question: "Wann lohnt sich die Fahrtenbuch-Methode statt der 1%-Regel?",
      answer:
        "Die Fahrtenbuch-Methode lohnt sich meist, wenn Sie den Firmenwagen zu weniger als 50% privat nutzen. Der Aufwand ist aber höher: Sie müssen jede Fahrt lückenlos dokumentieren. Ein elektronisches Fahrtenbuch kann dies vereinfachen.",
    },
    {
      question: "Sind alle geldwerten Vorteile steuerpflichtig?",
      answer:
        "Nein, es gibt Freibeträge und Ausnahmen: Sachbezüge bis 50 € monatlich sind steuerfrei, Essensmarken bis 7,23 € pro Arbeitstag, bestimmte Gesundheitsleistungen bis 600 € jährlich, Kinderbetreuung ist komplett steuerfrei. Auch betriebliche Altersvorsorge genießt Steuervorteile.",
    },
    {
      question: "Wie wirkt sich ein geldwerter Vorteil auf mein Nettogehalt aus?",
      answer:
        "Der geldwerte Vorteil wird zum Brutto addiert, darauf fallen Steuern und Sozialabgaben an. Bei einem geldwerten Vorteil von 640 € (Firmenwagen) zahlen Sie in Steuerklasse 1 ca. 230 € mehr Abgaben. Sie haben den Vorteil der Nutzung, zahlen aber nicht den vollen Wert in bar.",
    },
    {
      question: "Muss ich auch den Arbeitsweg versteuern?",
      answer:
        "Ja, bei der 1%-Regel kommt zusätzlich 0,03% des Listenpreises pro Kilometer einfacher Entfernung Wohnung-Arbeitsstätte dazu - aber nur, wenn Sie den Firmenwagen auch für Fahrten zur Arbeit nutzen. Bei ausschließlich privater Nutzung oder Homeoffice entfällt dieser Zuschlag.",
    },
    {
      question: "Kann ich die Pendlerpauschale trotz Firmenwagen absetzen?",
      answer:
        "Grundsätzlich ja, aber die Pendlerpauschale wird mit dem geldwerten Vorteil für den Arbeitsweg verrechnet. Nur wenn die Pendlerpauschale höher ist als der geldwerte Vorteil (0,03%-Regelung), können Sie die Differenz steuerlich geltend machen.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/lexikon/krankenversicherung", title: "Krankenversicherung" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Geldwerter Vorteil"
      description="Ein geldwerter Vorteil ist eine Leistung des Arbeitgebers, die nicht in Geld ausgezahlt wird, aber einen wirtschaftlichen Wert darstellt und versteuert werden muss."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
