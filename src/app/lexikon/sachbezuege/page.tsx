/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Sachbezüge 2026 - 50-Euro-Freigrenze, Sachbezugswerte & Steuer",
  description:
    "Sachbezüge 2026: 50 €/Monat steuerfrei, Sachbezugswerte für Verpflegung (313 €) und Unterkunft (278 €). Arten, Besteuerung und Tipps für Arbeitnehmer.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/sachbezuege/",
  },
  openGraph: {
    title: "Sachbezüge 2026 - 50-Euro-Freigrenze, Sachbezugswerte & Steuer",
    description:
      "Sachbezüge 2026: 50 €/Monat Freigrenze, Sachbezugswerte und steuerliche Behandlung.",
    url: "https://gehaltly.de/lexikon/sachbezuege/",
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

export default function SachbezuegePage() {
  const content = (
    <>
      <h2>Was sind Sachbezüge?</h2>
      <p>
        Sachbezüge sind Leistungen des Arbeitgebers an den Arbeitnehmer, die nicht in Geld, sondern in Sachwerten oder Dienstleistungen gewährt werden. Sie stellen einen geldwerten Vorteil dar und gehören grundsätzlich zum steuerpflichtigen Arbeitslohn. Es gibt jedoch wichtige Freigrenzen und Pauschalierungsmöglichkeiten, die Sachbezüge zu einem attraktiven Vergütungsinstrument machen. Die steuerlichen Details regelt das <a href="https://www.bundesfinanzministerium.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesfinanzministerium</a>.
      </p>

      <h2>Die 50-Euro-Freigrenze pro Monat</h2>
      <p>
        Die wichtigste Regelung für Sachbezüge ist die monatliche Freigrenze von <strong>50 €</strong> (§8 Abs. 2 Satz 11 EStG). Sachbezüge bis zu diesem Betrag sind steuer- und sozialversicherungsfrei. Wichtig: Es handelt sich um eine <strong>Freigrenze</strong>, nicht um einen Freibetrag. Wird der Betrag auch nur um einen Cent überschritten, ist der gesamte Sachbezug steuerpflichtig.
      </p>
      <ul>
        <li><strong>Bis 50 €/Monat</strong>: Komplett steuer- und SV-frei</li>
        <li><strong>Über 50 €/Monat</strong>: Der gesamte Betrag wird steuerpflichtig (nicht nur der übersteigende Teil)</li>
        <li>Die Freigrenze gilt pro Arbeitnehmer und pro Monat, nicht übertragbar</li>
      </ul>

      <h2>Typische Sachbezüge im Überblick</h2>
      <p>
        Gängige Sachbezüge, die unter die 50-Euro-Freigrenze fallen können:
      </p>
      <ul>
        <li><strong>Gutscheinkarten</strong>: Prepaid-Karten wie Sodexo, Edenred, Givve (seit 2022 nur noch geschlossene Systeme)</li>
        <li><strong>Tankgutscheine</strong>: Für bestimmte Tankstellen, als Sachbezug bis 50 €</li>
        <li><strong>Warengutscheine</strong>: Für bestimmte Geschäfte oder Online-Shops</li>
        <li><strong>Fitnessstudio-Mitgliedschaft</strong>: Wenn der Arbeitgeber direkt zahlt</li>
        <li><strong>Jobticket</strong>: Zuschuss zum ÖPNV (alternativ steuerfrei nach §3 Nr. 15 EStG)</li>
        <li><strong>Erholungsbeihilfe</strong>: Bis 156 € (Arbeitnehmer), 104 € (Ehepartner), 52 € (je Kind) pauschal mit 25 %</li>
      </ul>

      <h2>Sachbezugswerte 2026</h2>
      <p>
        Für bestimmte Sachbezüge gelten amtliche Sachbezugswerte, die jährlich angepasst werden. Für 2026 betragen sie:
      </p>
      <ul>
        <li><strong>Verpflegung (Mahlzeiten)</strong>: 313 € pro Monat (Frühstück: 65 €, Mittag- und Abendessen: je 124 €)</li>
        <li><strong>Unterkunft</strong>: 278 € pro Monat (für eine Einzelperson)</li>
      </ul>
      <p>
        Diese Werte gelten, wenn der Arbeitgeber Mahlzeiten oder Unterkunft kostenfrei oder verbilligt zur Verfügung stellt. Sie werden als steuerpflichtiger Arbeitslohn angesetzt, sofern keine Befreiung greift.
      </p>

      <h2>Abgrenzung: Sachbezug vs. Geldleistung</h2>
      <p>
        Seit 2020 gelten strengere Regeln für die Abgrenzung zwischen Sachbezug und Geldleistung. Gutscheine und Geldkarten gelten nur dann als Sachbezug, wenn sie:
      </p>
      <ul>
        <li>Ausschließlich zum Bezug von Waren oder Dienstleistungen berechtigen</li>
        <li>Die Kriterien des §2 Abs. 1 Nr. 10 des Zahlungsdiensteaufsichtsgesetzes (ZAG) erfüllen</li>
        <li>Nicht in Bargeld umgewandelt werden können</li>
      </ul>
      <p>
        Amazon-Gutscheine sind daher in der Regel kein begünstigter Sachbezug mehr, da Amazon ein offenes Warensortiment anbietet.
      </p>

      <h2>Sachbezüge und Sozialversicherung</h2>
      <p>
        Sachbezüge, die unter der 50-Euro-Freigrenze liegen, sind auch sozialversicherungsfrei. Bei steuerpflichtigen Sachbezügen fallen in der Regel auch Sozialversicherungsbeiträge an, es sei denn, der Arbeitgeber wählt die Pauschalbesteuerung nach §37b EStG (30 % pauschal). In diesem Fall sind die Sachbezüge ebenfalls sozialversicherungsfrei.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist die Sachbezugsfreigrenze 2026?",
      answer:
        "Die monatliche Freigrenze für Sachbezüge beträgt 50 € pro Arbeitnehmer. Sachbezüge bis zu diesem Betrag sind steuer- und sozialversicherungsfrei. Bei Überschreitung wird der gesamte Betrag steuerpflichtig.",
    },
    {
      question: "Sind Amazon-Gutscheine als Sachbezug steuerfrei?",
      answer:
        "Nein, seit 2020 gelten Amazon-Gutscheine in der Regel nicht mehr als begünstigter Sachbezug, da Amazon ein offenes Warensortiment anbietet. Nur Gutscheine für geschlossene Systeme (bestimmte Geschäfte, Tankstellen) oder limitierte Netzwerke sind begünstigt.",
    },
    {
      question: "Kann ich die 50-Euro-Freigrenze auf andere Monate übertragen?",
      answer:
        "Nein, die 50-Euro-Freigrenze gilt strikt pro Monat und kann nicht auf andere Monate übertragen, angesammelt oder nachgeholt werden. Wird sie in einem Monat nicht genutzt, verfällt sie.",
    },
    {
      question: "Was sind die Sachbezugswerte für Mahlzeiten 2026?",
      answer:
        "Die Sachbezugswerte für Verpflegung betragen 2026 monatlich 313 € insgesamt: 65 € für Frühstück und je 124 € für Mittag- und Abendessen. Diese Werte werden angesetzt, wenn der Arbeitgeber Mahlzeiten kostenlos oder verbilligt gewährt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/geldwerter-vorteil", title: "Geldwerter Vorteil" },
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/lexikon/betriebliche-altersvorsorge", title: "Betriebliche Altersvorsorge" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Sachbezüge"
      description="Sachbezüge sind geldwerte Vorteile vom Arbeitgeber in Form von Sachwerten oder Dienstleistungen, die bis 50 €/Monat steuer- und sozialversicherungsfrei sind."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
