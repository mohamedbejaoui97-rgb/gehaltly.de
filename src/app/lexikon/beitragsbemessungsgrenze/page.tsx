/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Beitragsbemessungsgrenze 2026 - KV, RV & West/Ost",
  description:
    "Alle Beitragsbemessungsgrenzen 2026: Krankenversicherung (66.150€), Rentenversicherung West (96.600€) und Ost (94.800€), Auswirkungen auf Sozialabgaben.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/beitragsbemessungsgrenze/",
  },
  openGraph: {
    title: "Beitragsbemessungsgrenze 2026 - KV, RV & West/Ost",
    description:
      "Alle Beitragsbemessungsgrenzen 2026: Krankenversicherung (66.150€), Rentenversicherung West (96.600€) und Ost (94.800€), Auswirkungen auf Sozialabgaben.",
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
        Die Beitragsbemessungsgrenze (BBG) ist die Einkommensgrenze, bis zu der Beiträge zur Sozialversicherung berechnet werden. Einkommen oberhalb dieser Grenze bleibt bei der Beitragsberechnung unberücksichtigt. Es gibt unterschiedliche Beitragsbemessungsgrenzen für verschiedene Versicherungszweige und für West- und Ostdeutschland.
      </p>

      <h2>Beitragsbemessungsgrenzen 2026 im Überblick</h2>
      <p>
        Für das Jahr 2026 gelten folgende Beitragsbemessungsgrenzen:
      </p>
      <ul>
        <li>
          <strong>Kranken- und Pflegeversicherung (bundesweit):</strong>
          <ul>
            <li>66.150 € pro Jahr (5.512,50 € pro Monat)</li>
            <li>Gilt einheitlich für ganz Deutschland</li>
          </ul>
        </li>
        <li>
          <strong>Renten- und Arbeitslosenversicherung West:</strong>
          <ul>
            <li>96.600 € pro Jahr (8.050 € pro Monat)</li>
            <li>Gilt für die alten Bundesländer</li>
          </ul>
        </li>
        <li>
          <strong>Renten- und Arbeitslosenversicherung Ost:</strong>
          <ul>
            <li>94.800 € pro Jahr (7.900 € pro Monat)</li>
            <li>Gilt für die neuen Bundesländer</li>
          </ul>
        </li>
      </ul>

      <h2>Unterschied West und Ost</h2>
      <p>
        Die Unterscheidung zwischen West und Ost besteht aus historischen Gründen:
      </p>
      <ul>
        <li>Nach der Wiedervereinigung gab es unterschiedliche Lohnniveaus</li>
        <li>Die Beitragsbemessungsgrenzen wurden an die durchschnittlichen Einkommen angepasst</li>
        <li>Im Osten ist das durchschnittliche Lohnniveau noch etwas niedriger</li>
        <li>Die Angleichung der Grenzen schreitet voran, Unterschiede werden kleiner</li>
        <li><strong>West:</strong> Baden-Württemberg, Bayern, Berlin-West, Bremen, Hamburg, Hessen, Niedersachsen, Nordrhein-Westfalen, Rheinland-Pfalz, Saarland, Schleswig-Holstein</li>
        <li><strong>Ost:</strong> Berlin-Ost, Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt, Thüringen</li>
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
        <strong>Krankenversicherung (66.150 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 14,6% + durchschnittlich 1,7% Zusatzbeitrag = 16,3%</li>
        <li>Maximaler Gesamtbeitrag: 5.512,50 € × 16,3% = 898,54 € pro Monat</li>
        <li>Arbeitgeberanteil: ca. 449 € pro Monat</li>
        <li>Arbeitnehmeranteil: ca. 449 € pro Monat</li>
      </ul>

      <p>
        <strong>Pflegeversicherung (66.150 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 3,4% (zzgl. 0,6% für Kinderlose)</li>
        <li>Maximaler Beitrag kinderlos: 5.512,50 € × 4,0% = 220,50 € pro Monat</li>
        <li>Maximaler Beitrag mit Kindern: 5.512,50 € × 3,4% = 187,43 € pro Monat (abzgl. Kinderrabatt)</li>
      </ul>

      <p>
        <strong>Rentenversicherung West (96.600 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 18,6%</li>
        <li>Maximaler Gesamtbeitrag: 8.050 € × 18,6% = 1.497,30 € pro Monat</li>
        <li>Arbeitgeberanteil: 748,65 € pro Monat</li>
        <li>Arbeitnehmeranteil: 748,65 € pro Monat</li>
      </ul>

      <p>
        <strong>Arbeitslosenversicherung West (96.600 € / Jahr):</strong>
      </p>
      <ul>
        <li>Beitragssatz: 2,6%</li>
        <li>Maximaler Gesamtbeitrag: 8.050 € × 2,6% = 209,30 € pro Monat</li>
        <li>Arbeitgeberanteil: 104,65 € pro Monat</li>
        <li>Arbeitnehmeranteil: 104,65 € pro Monat</li>
      </ul>

      <h2>Beispielrechnung: Einkommen über der BBG</h2>
      <p>
        <strong>Beispiel: Bruttojahresgehalt 120.000 € in West-Deutschland</strong>
      </p>
      <ul>
        <li>Krankenversicherung: Berechnet nur bis 66.150 € (max. 898,54 €/Monat)</li>
        <li>Pflegeversicherung: Berechnet nur bis 66.150 € (max. 220,50 €/Monat kinderlos)</li>
        <li>Rentenversicherung: Berechnet nur bis 96.600 € (max. 1.497,30 €/Monat)</li>
        <li>Arbeitslosenversicherung: Berechnet nur bis 96.600 € (max. 209,30 €/Monat)</li>
        <li><strong>Gesamt max. Sozialabgaben: ca. 2.826 € pro Monat</strong></li>
        <li>Zusätzliches Einkommen (120.000 - 96.600 = 23.400 €): Keine Sozialabgaben mehr</li>
      </ul>

      <h2>Versicherungspflichtgrenze vs. Beitragsbemessungsgrenze</h2>
      <p>
        Wichtig: Die Beitragsbemessungsgrenze ist nicht zu verwechseln mit der Versicherungspflichtgrenze:
      </p>
      <ul>
        <li>
          <strong>Beitragsbemessungsgrenze (66.150 € / 96.600 €):</strong>
          <ul>
            <li>Obergrenze für die Berechnung der Sozialversicherungsbeiträge</li>
            <li>Gilt für alle gesetzlich Versicherten</li>
          </ul>
        </li>
        <li>
          <strong>Versicherungspflichtgrenze (69.300 € in 2026):</strong>
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
      question: "Warum gibt es unterschiedliche BBG für West und Ost?",
      answer:
        "Die Unterscheidung besteht aus historischen Gründen nach der Wiedervereinigung. Das durchschnittliche Lohnniveau ist in Ostdeutschland noch etwas niedriger, daher sind auch die Beitragsbemessungsgrenzen für Renten- und Arbeitslosenversicherung geringer. Die Angleichung schreitet aber voran.",
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
        "Ab der Versicherungspflichtgrenze von 69.300 € (2026) können Sie in die PKV wechseln. Ob es sich lohnt, hängt von vielen Faktoren ab: Alter, Gesundheitszustand, Familienplanung. Die BBG (66.150 €) begrenzt nur die GKV-Beiträge, ist aber nicht die Wechselgrenze.",
    },
    {
      question: "Wie wirkt sich die BBG auf meine spätere Rente aus?",
      answer:
        "Sie erwerben maximal so viele Rentenpunkte, wie der Beitragsbemessungsgrenze entsprechen. Bei Einkommen über der BBG steigt die Rente nicht weiter. Für 2026: Maximal ca. 2,13 Rentenpunkte pro Jahr bei BBG West (96.600 € ÷ ca. 45.358 € Durchschnittseinkommen).",
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
