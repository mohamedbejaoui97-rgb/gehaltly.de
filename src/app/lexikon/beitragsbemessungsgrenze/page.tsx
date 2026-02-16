/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Beitragsbemessungsgrenze 2026 - KV & RV",
  description:
    "Alle Beitragsbemessungsgrenzen 2026: Krankenversicherung (69.750€), Rentenversicherung (101.400€ einheitlich), Auswirkungen auf Sozialabgaben.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/beitragsbemessungsgrenze/",
  },
  openGraph: {
    title: "Beitragsbemessungsgrenze 2026 - KV & RV",
    description:
      "Alle Beitragsbemessungsgrenzen 2026: Krankenversicherung (69.750€), Rentenversicherung (101.400€ einheitlich), Auswirkungen auf Sozialabgaben.",
    url: "https://gehaltly.de/lexikon/beitragsbemessungsgrenze/",
    siteName: "gehaltly.de",
    type: "article",
  },
};

export default function BeitragsbemessungsgrenzePage() {
  const content = (
    <>
      <h2>Was ist die Beitragsbemessungsgrenze?</h2>
      <p>
        Die Beitragsbemessungsgrenze (BBG) ist die Einkommensgrenze, bis zu der Beiträge zur Sozialversicherung berechnet werden. Einkommen oberhalb dieser Grenze bleibt bei der Beitragsberechnung unberücksichtigt. Es gibt unterschiedliche Beitragsbemessungsgrenzen für verschiedene Versicherungszweige. Seit 2025 gilt für die Renten- und Arbeitslosenversicherung eine einheitliche BBG für ganz Deutschland.
      </p>

      <h2>Beitragsbemessungsgrenzen 2026 im Überblick</h2>
      <p>
        Für das Jahr 2026 gelten folgende Beitragsbemessungsgrenzen:
      </p>
      <ul>
        <li>
          <strong>Kranken- und Pflegeversicherung (bundesweit):</strong>
          <ul>
            <li>69.750 € pro Jahr (5.812,50 € pro Monat)</li>
            <li>Gilt einheitlich für ganz Deutschland</li>
          </ul>
        </li>
        <li>
          <strong>Renten- und Arbeitslosenversicherung (bundesweit einheitlich):</strong>
          <ul>
            <li>101.400 € pro Jahr (8.450 € pro Monat)</li>
            <li>Seit 2025 einheitlich für ganz Deutschland (keine Ost/West-Unterscheidung mehr)</li>
          </ul>
        </li>
      </ul>

      <h2>Vereinheitlichung der BBG Ost und West</h2>
      <p>
        Seit 2025 gibt es keine Unterscheidung mehr zwischen West und Ost bei der Beitragsbemessungsgrenze für die Renten- und Arbeitslosenversicherung:
      </p>
      <ul>
        <li>Nach der Wiedervereinigung gab es historisch unterschiedliche Lohnniveaus und daher unterschiedliche BBGs</li>
        <li>Die Angleichung wurde schrittweise vollzogen und ist seit 2025 abgeschlossen</li>
        <li>Seit 2025 gilt eine einheitliche BBG von 101.400 € pro Jahr (8.450 € pro Monat) für ganz Deutschland</li>
        <li>Die BBG für die Kranken- und Pflegeversicherung war bereits zuvor bundesweit einheitlich</li>
      </ul>

      <h2>Auswirkungen der Beitragsbemessungsgrenze</h2>
      <p>
        Was bedeutet die Beitragsbemessungsgrenze konkret für Sie?
      </p>
      <ul>
        <li>Einkommen bis zur BBG: Volle Beiträge zur Sozialversicherung</li>
        <li>Einkommen über der BBG: Keine zusätzlichen Beiträge mehr</li>
        <li>Die Beiträge werden "gedeckelt" - es gibt einen Maximalbeitrag</li>
        <li>Auch die späteren Leistungen (z.B. Rente) orientieren sich an der BBG</li>
      </ul>

      <h2>Maximale Beiträge 2026</h2>
      <p>
        Bei Erreichen der Beitragsbemessungsgrenze zahlen Sie folgende maximale Beiträge:
      </p>
      <p>
        <strong>Krankenversicherung (69.750 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 14,6% + durchschnittlich 2,9% Zusatzbeitrag = 17,5%</li>
        <li>Maximaler Gesamtbeitrag: 5.812,50 € × 17,5% = 1.017,19 € pro Monat</li>
        <li>Arbeitgeberanteil: ca. 509 € pro Monat</li>
        <li>Arbeitnehmeranteil: ca. 509 € pro Monat</li>
      </ul>

      <p>
        <strong>Pflegeversicherung (69.750 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 3,6% (zzgl. 0,6% für Kinderlose)</li>
        <li>Maximaler Beitrag kinderlos: 5.812,50 € × 4,2% = 244,13 € pro Monat</li>
        <li>Maximaler Beitrag mit Kindern: 5.812,50 € × 3,6% = 209,25 € pro Monat (abzgl. Kinderrabatt)</li>
      </ul>

      <p>
        <strong>Rentenversicherung (101.400 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 18,6%</li>
        <li>Maximaler Gesamtbeitrag: 8.450 € × 18,6% = 1.571,70 € pro Monat</li>
        <li>Arbeitgeberanteil: 785,85 € pro Monat</li>
        <li>Arbeitnehmeranteil: 785,85 € pro Monat</li>
      </ul>

      <p>
        <strong>Arbeitslosenversicherung (101.400 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 2,6%</li>
        <li>Maximaler Gesamtbeitrag: 8.450 € × 2,6% = 219,70 € pro Monat</li>
        <li>Arbeitgeberanteil: 109,85 € pro Monat</li>
        <li>Arbeitnehmeranteil: 109,85 € pro Monat</li>
      </ul>

      <h2>Beispielrechnung: Einkommen über der BBG</h2>
      <p>
        <strong>Beispiel: Bruttojahresgehalt 120.000 €</strong>
      </p>
      <ul>
        <li>Krankenversicherung: Berechnet nur bis 69.750 € (max. 1.017,19 €/Monat)</li>
        <li>Pflegeversicherung: Berechnet nur bis 69.750 € (max. 244,13 €/Monat kinderlos)</li>
        <li>Rentenversicherung: Berechnet nur bis 101.400 € (max. 1.571,70 €/Monat)</li>
        <li>Arbeitslosenversicherung: Berechnet nur bis 101.400 € (max. 219,70 €/Monat)</li>
        <li><strong>Gesamt max. Sozialabgaben: ca. 3.053 € pro Monat</strong></li>
        <li>Zusätzliches Einkommen (120.000 - 101.400 = 18.600 €): Keine Sozialabgaben mehr</li>
      </ul>

      <h2>Versicherungspflichtgrenze vs. Beitragsbemessungsgrenze</h2>
      <p>
        Wichtig: Die Beitragsbemessungsgrenze ist nicht zu verwechseln mit der Versicherungspflichtgrenze:
      </p>
      <ul>
        <li>
          <strong>Beitragsbemessungsgrenze (69.750 € / 101.400 €):</strong>
          <ul>
            <li>Obergrenze für die Berechnung der Sozialversicherungsbeiträge</li>
            <li>Gilt für alle gesetzlich Versicherten</li>
          </ul>
        </li>
        <li>
          <strong>Versicherungspflichtgrenze (77.400 € in 2026):</strong>
          <ul>
            <li>Auch Jahresarbeitsentgeltgrenze (JAEG) genannt</li>
            <li>Ab diesem Einkommen können Sie von der GKV in die PKV wechseln</li>
            <li>Nur relevant für die Krankenversicherung</li>
          </ul>
        </li>
      </ul>

      <h2>Vorteile und Nachteile hoher Einkommen</h2>
      <p>
        <strong>Vorteile bei Einkommen über der BBG:</strong>
      </p>
      <ul>
        <li>Keine zusätzlichen Sozialabgaben auf Einkommen über der Grenze</li>
        <li>Effektiver Sozialabgabensatz sinkt prozentual</li>
        <li>Mehr Netto vom Brutto (allerdings steigt die Lohnsteuer weiter)</li>
      </ul>
      <p>
        <strong>Nachteile bei Einkommen über der BBG:</strong>
      </p>
      <ul>
        <li>Rentenansprüche steigen nicht mehr über die BBG hinaus</li>
        <li>Arbeitslosengeld wird maximal aus der BBG berechnet</li>
        <li>Bei höherem Einkommen steigt der Grenzsteuersatz (bis 45%)</li>
      </ul>

      <h2>Jährliche Anpassung der BBG</h2>
      <p>
        Die Beitragsbemessungsgrenzen werden jährlich angepasst:
      </p>
      <ul>
        <li>Anpassung erfolgt in der Regel zum 1. Januar</li>
        <li>Orientierung an der Lohnentwicklung des Vorjahres</li>
        <li>Veröffentlichung der neuen Werte durch das Bundesministerium für Arbeit und Soziales</li>
        <li>In den letzten Jahren: Steigerung um ca. 3-4% pro Jahr</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Was passiert mit meinem Gehalt über der Beitragsbemessungsgrenze?",
      answer:
        "Einkommen über der Beitragsbemessungsgrenze wird nicht mehr für die Berechnung der Sozialversicherungsbeiträge herangezogen. Sie zahlen also keine zusätzlichen Sozialabgaben, profitieren aber auch nicht von höheren Leistungen (z.B. Rente). Lohnsteuer wird weiterhin auf das gesamte Einkommen fällig.",
    },
    {
      question: "Gibt es noch unterschiedliche BBG für West und Ost?",
      answer:
        "Nein, seit 2025 gibt es keine Unterscheidung mehr zwischen West und Ost bei der Beitragsbemessungsgrenze für die Renten- und Arbeitslosenversicherung. Es gilt eine einheitliche BBG von 101.400 € pro Jahr. Die BBG für die Kranken- und Pflegeversicherung war bereits zuvor bundesweit einheitlich.",
    },
    {
      question: "Kann ich freiwillig mehr in die Rentenversicherung einzahlen?",
      answer:
        "Ja, auch bei Einkommen über der Beitragsbemessungsgrenze können Sie freiwillige Beiträge zur Rentenversicherung leisten. Dies ist sinnvoll, um Abschläge bei vorzeitigem Renteneintritt auszugleichen oder zusätzliche Rentenansprüche aufzubauen.",
    },
    {
      question: "Gilt die BBG auch für Selbstständige?",
      answer:
        "Für freiwillig versicherte Selbstständige in der GKV gilt die Beitragsbemessungsgrenze ebenfalls. Sie können wählen, ob sie Beiträge vom tatsächlichen Einkommen (bis zur BBG) oder vom Mindestbeitrag zahlen. In der Rentenversicherung sind die meisten Selbstständigen nicht pflichtversichert.",
    },
    {
      question: "Ab welchem Gehalt lohnt sich die private Krankenversicherung?",
      answer:
        "Ab der Versicherungspflichtgrenze von 77.400 € (2026) können Sie in die PKV wechseln. Ob es sich lohnt, hängt von vielen Faktoren ab: Alter, Gesundheitszustand, Familienplanung. Die BBG (69.750 €) begrenzt nur die GKV-Beiträge, ist aber nicht die Wechselgrenze.",
    },
    {
      question: "Wie wirkt sich die BBG auf meine spätere Rente aus?",
      answer:
        "Sie erwerben maximal so viele Rentenpunkte, wie der Beitragsbemessungsgrenze entsprechen. Bei Einkommen über der BBG steigt die Rente nicht weiter. Für 2026: Maximal ca. 2,24 Rentenpunkte pro Jahr bei BBG (101.400 € ÷ ca. 45.358 € Durchschnittseinkommen).",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/krankenversicherung", title: "Krankenversicherung" },
    { href: "/lexikon/rentenversicherung", title: "Rentenversicherung" },
    { href: "/lexikon/arbeitslosenversicherung", title: "Arbeitslosenversicherung" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Beitragsbemessungsgrenze"
      description="Die Beitragsbemessungsgrenze ist die Einkommensgrenze, bis zu der Beiträge zur Sozialversicherung berechnet werden. Einkommen darüber bleibt unberücksichtigt."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
