/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Arbeitslosenversicherung - Beitrag & Arbeitslosengeld 2026",
  description:
    "Alles zur Arbeitslosenversicherung 2026: Beitragssatz 2,6%, Berechnung des Arbeitslosengelds, Ausnahmen für Beamte und Minijobber.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/arbeitslosenversicherung/",
  },
  openGraph: {
    title: "Arbeitslosenversicherung - Beitrag & Arbeitslosengeld 2026",
    description:
      "Alles zur Arbeitslosenversicherung 2026: Beitragssatz 2,6%, Berechnung des Arbeitslosengelds, Ausnahmen für Beamte und Minijobber.",
    url: "https://gehaltly.de/lexikon/arbeitslosenversicherung/",
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

export default function ArbeitslosenversicherungPage() {
  const content = (
    <>
      <h2>Was ist die Arbeitslosenversicherung?</h2>
      <p>
        Die Arbeitslosenversicherung ist eine Pflichtversicherung für die meisten Arbeitnehmer in Deutschland. Sie wird von der Bundesagentur für Arbeit verwaltet und sichert Arbeitnehmer im Fall der Arbeitslosigkeit finanziell ab. Bei Verlust des Arbeitsplatzes haben Versicherte Anspruch auf Arbeitslosengeld I.
      </p>

      <h2>Beitragssatz zur Arbeitslosenversicherung 2026</h2>
      <p>
        Der Beitragssatz zur Arbeitslosenversicherung beträgt 2026:
      </p>
      <ul>
        <li><strong>2,6%</strong> des Bruttoeinkommens</li>
        <li>Aufteilung: <strong>1,3%</strong> Arbeitgeber + <strong>1,3%</strong> Arbeitnehmer</li>
        <li>Der Beitrag wird hälftig zwischen Arbeitgeber und Arbeitnehmer geteilt</li>
        <li>Beitragsbemessungsgrenze: 101.400 € pro Jahr (8.450 € pro Monat) — seit 2025 bundesweit einheitlich</li>
      </ul>

      <h2>Beispielrechnung Arbeitslosenversicherung</h2>
      <p>
        Bei einem monatlichen Bruttogehalt von 3.500 €:
      </p>
      <ul>
        <li>Gesamtbeitrag: 3.500 € × 2,6% = 91 €</li>
        <li>Arbeitgeberanteil: 3.500 € × 1,3% = <strong>45,50 €</strong></li>
        <li>Arbeitnehmeranteil: 3.500 € × 1,3% = <strong>45,50 €</strong></li>
      </ul>
      <p>
        Bei einem höheren Gehalt von 6.000 €:
      </p>
      <ul>
        <li>Gesamtbeitrag: 6.000 € × 2,6% = 156 €</li>
        <li>Arbeitgeberanteil: 6.000 € × 1,3% = <strong>78 €</strong></li>
        <li>Arbeitnehmeranteil: 6.000 € × 1,3% = <strong>78 €</strong></li>
      </ul>

      <h2>Berechnung des Arbeitslosengelds I</h2>
      <p>
        Das Arbeitslosengeld I berechnet sich aus dem durchschnittlichen Nettoeinkommen der letzten 12 Monate:
      </p>
      <ul>
        <li><strong>60%</strong> des pauschalierten Nettoentgelts für Kinderlose</li>
        <li><strong>67%</strong> des pauschalierten Nettoentgelts für Personen mit mindestens einem Kind</li>
      </ul>
      <p>
        <strong>Beispiel für Kinderlosen mit 3.000 € Brutto:</strong>
      </p>
      <ul>
        <li>Pauschaliertes Nettoentgelt: ca. 1.800 € (nach Abzug pauschaler Abgaben)</li>
        <li>Arbeitslosengeld: 1.800 € × 60% = <strong>1.080 € pro Monat</strong></li>
      </ul>
      <p>
        <strong>Beispiel für Person mit Kind und 3.000 € Brutto:</strong>
      </p>
      <ul>
        <li>Pauschaliertes Nettoentgelt: ca. 1.800 €</li>
        <li>Arbeitslosengeld: 1.800 € × 67% = <strong>1.206 € pro Monat</strong></li>
      </ul>

      <h2>Dauer des Arbeitslosengeldanspruchs</h2>
      <p>
        Die Bezugsdauer des Arbeitslosengelds I richtet sich nach der Dauer der versicherungspflichtigen Beschäftigung und dem Lebensalter:
      </p>
      <ul>
        <li>12 Monate Beschäftigung: <strong>6 Monate</strong> Arbeitslosengeld</li>
        <li>16 Monate Beschäftigung: <strong>8 Monate</strong> Arbeitslosengeld</li>
        <li>24 Monate Beschäftigung: <strong>12 Monate</strong> Arbeitslosengeld</li>
        <li>Ab 50 Jahren und 30 Monate Beschäftigung: <strong>15 Monate</strong></li>
        <li>Ab 55 Jahren und 36 Monate Beschäftigung: <strong>18 Monate</strong></li>
        <li>Ab 58 Jahren und 48 Monate Beschäftigung: <strong>24 Monate</strong></li>
      </ul>

      <h2>Wer ist von der Versicherungspflicht befreit?</h2>
      <p>
        Bestimmte Personengruppen sind nicht versicherungspflichtig in der Arbeitslosenversicherung:
      </p>
      <ul>
        <li><strong>Beamte:</strong> Sie haben ein besonderes Dienstverhältnis und können nicht arbeitslos werden</li>
        <li><strong>Selbstständige:</strong> Können sich freiwillig versichern (Versicherungspflicht auf Antrag)</li>
        <li><strong>Minijobber:</strong> Geringfügig Beschäftigte bis 556 € sind versicherungsfrei</li>
        <li><strong>Rentner:</strong> Personen, die eine Vollrente wegen Alters beziehen</li>
        <li><strong>Geschäftsführer:</strong> Gesellschafter-Geschäftsführer mit mehr als 50% Gesellschaftsanteilen</li>
      </ul>

      <h2>Voraussetzungen für Arbeitslosengeld I</h2>
      <p>
        Um Arbeitslosengeld I zu erhalten, müssen folgende Voraussetzungen erfüllt sein:
      </p>
      <ul>
        <li>Sie sind arbeitslos oder stehen kurz vor der Arbeitslosigkeit</li>
        <li>Sie haben sich bei der Agentur für Arbeit arbeitslos gemeldet</li>
        <li>Sie erfüllen die <strong>Anwartschaftszeit:</strong> Mindestens 12 Monate versicherungspflichtige Beschäftigung in den letzten 30 Monaten</li>
        <li>Sie sind bereit und in der Lage, mindestens 15 Stunden pro Woche zu arbeiten</li>
        <li>Sie stehen dem Arbeitsmarkt zur Verfügung</li>
      </ul>

      <h2>Arbeitslosengeld I vs. Bürgergeld (ehemals ALG II)</h2>
      <p>
        Es gibt einen wichtigen Unterschied zwischen den beiden Leistungen:
      </p>
      <ul>
        <li><strong>Arbeitslosengeld I:</strong> Versicherungsleistung, hängt vom vorherigen Einkommen ab, keine Bedürftigkeitsprüfung</li>
        <li><strong>Bürgergeld:</strong> Steuerfinanzierte Grundsicherung, einheitlicher Regelsatz, Bedürftigkeitsprüfung erforderlich</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Wer zahlt die Arbeitslosenversicherung?",
      answer:
        "Die Arbeitslosenversicherung wird hälftig von Arbeitgeber und Arbeitnehmer finanziert. Jeder zahlt 1,3% des Bruttogehalts. Bei Selbstständigen, die sich freiwillig versichern, wird der volle Beitrag von 2,6% fällig.",
    },
    {
      question: "Kann ich als Minijobber Arbeitslosengeld bekommen?",
      answer:
        "Nein, Minijobber bis 556 € sind von der Versicherungspflicht befreit und zahlen keine Beiträge zur Arbeitslosenversicherung. Daher haben sie auch keinen Anspruch auf Arbeitslosengeld I. Sie können aber unter bestimmten Umständen Bürgergeld beantragen.",
    },
    {
      question: "Was ist die Anwartschaftszeit?",
      answer:
        "Die Anwartschaftszeit ist die Mindestdauer der Beitragszahlung, die erforderlich ist, um Arbeitslosengeld zu erhalten. Sie beträgt in der Regel 12 Monate versicherungspflichtiger Beschäftigung in den letzten 30 Monaten vor der Arbeitslosigkeit.",
    },
    {
      question: "Bekomme ich weniger Arbeitslosengeld, wenn ich gekündigt habe?",
      answer:
        "Bei selbstverschuldeter Arbeitslosigkeit (Eigenkündigung ohne wichtigen Grund oder verhaltensbedingte Kündigung) verhängt die Agentur für Arbeit eine Sperrzeit von bis zu 12 Wochen. In dieser Zeit wird kein Arbeitslosengeld gezahlt, und die Bezugsdauer verkürzt sich um ein Viertel.",
    },
    {
      question: "Können Selbstständige sich arbeitslosenversichern?",
      answer:
        "Ja, Selbstständige können sich freiwillig in der Arbeitslosenversicherung versichern (Versicherungspflicht auf Antrag). Der Antrag muss innerhalb von drei Monaten nach Aufnahme der selbstständigen Tätigkeit gestellt werden. Der Beitrag beträgt 2,6% einer fiktiven Bezugsgröße.",
    },
    {
      question: "Was passiert nach dem Arbeitslosengeld I?",
      answer:
        "Nach Ablauf des Arbeitslosengeld I-Anspruchs können Sie Bürgergeld (früher Arbeitslosengeld II) beantragen, wenn Sie bedürftig sind. Dies ist eine steuerfinanzierte Grundsicherung mit einheitlichem Regelsatz und erfordert eine Bedürftigkeitsprüfung.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/rentenversicherung", title: "Rentenversicherung" },
    { href: "/lexikon/krankenversicherung", title: "Krankenversicherung" },
    { href: "/lexikon/minijob", title: "Minijob" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Arbeitslosenversicherung"
      description="Die Arbeitslosenversicherung ist eine Pflichtversicherung für Arbeitnehmer, die im Fall der Arbeitslosigkeit finanziell absichert."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
