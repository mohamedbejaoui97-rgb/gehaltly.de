/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Grundfreibetrag 2026 - Höhe & Bedeutung erklärt",
  description:
    "Was ist der Grundfreibetrag? Wie hoch ist er 2026 und wie funktioniert er? Alle Informationen zum steuerlichen Grundfreibetrag in Deutschland.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/grundfreibetrag/",
  },
  openGraph: {
    title: "Grundfreibetrag 2026 - Höhe & Bedeutung erklärt",
    description:
      "Was ist der Grundfreibetrag? Wie hoch ist er 2026 und wie funktioniert er? Alle Informationen zum steuerlichen Grundfreibetrag in Deutschland.",
    url: "https://gehaltly.de/lexikon/grundfreibetrag/",
    siteName: "gehaltly.de",
    type: "article",
  },
};

export default function GrundfreibetragPage() {
  const content = (
    <>
      <h2>Was ist der Grundfreibetrag?</h2>
      <p>
        Der Grundfreibetrag (auch steuerlicher Grundfreibetrag oder Existenzminimum genannt) ist der Einkommensbetrag, bis zu dem keine Einkommensteuer gezahlt werden muss. Er stellt sicher, dass das für die Existenzsicherung notwendige Einkommen steuerfrei bleibt und schützt das verfassungsrechtlich garantierte Existenzminimum.
      </p>
      <p>
        Der Grundfreibetrag wird jährlich angepasst und gilt automatisch für alle Steuerpflichtigen in Deutschland. Sie müssen ihn nicht beantragen – er wird bei der Berechnung der Einkommensteuer automatisch berücksichtigt.
      </p>

      <h2>Höhe des Grundfreibetrags 2026</h2>
      <p>
        Für das Jahr 2026 beträgt der Grundfreibetrag <strong>11.784 Euro</strong> pro Person. Das bedeutet:
      </p>
      <ul>
        <li><strong>Ledige Personen:</strong> Bis 11.784 € zu versteuerndes Einkommen zahlen keine Einkommensteuer</li>
        <li><strong>Verheiratete/Zusammenveranlagte:</strong> Bis 23.568 € zu versteuerndes Einkommen (doppelter Grundfreibetrag) zahlen keine Einkommensteuer</li>
      </ul>
      <p>
        Der Grundfreibetrag wird jährlich angepasst, um die Inflation und Lebenshaltungskosten zu berücksichtigen. In den vergangenen Jahren hat er sich wie folgt entwickelt:
      </p>
      <ul>
        <li>2024: 11.604 €</li>
        <li>2025: 11.694 €</li>
        <li>2026: 11.784 €</li>
      </ul>

      <h2>Wie funktioniert der Grundfreibetrag?</h2>
      <p>
        Der Grundfreibetrag ist in die Steuertabelle eingebaut und wird automatisch bei der Lohnsteuerberechnung berücksichtigt. Er funktioniert nach dem Prinzip der Nullzone:
      </p>
      <ul>
        <li><strong>Bis zum Grundfreibetrag:</strong> 0% Steuersatz (keine Einkommensteuer)</li>
        <li><strong>Ab dem Grundfreibetrag:</strong> Progressiver Steuersatz steigt von 14% bis maximal 42% (bzw. 45% ab der Reichensteuergrenze)</li>
      </ul>
      <p>
        Wichtig: Auch wenn Sie mehr als den Grundfreibetrag verdienen, profitieren Sie von ihm. Nur das Einkommen, das über dem Grundfreibetrag liegt, wird besteuert.
      </p>

      <h2>Beispielrechnungen mit Grundfreibetrag</h2>
      <p>
        <strong>Beispiel 1 - Einkommen unterhalb des Grundfreibetrags:</strong>
      </p>
      <ul>
        <li>Zu versteuerndes Einkommen: 10.000 €</li>
        <li>Grundfreibetrag: 11.784 €</li>
        <li>Einkommensteuer: <strong>0 €</strong></li>
      </ul>

      <p>
        <strong>Beispiel 2 - Einkommen knapp über dem Grundfreibetrag:</strong>
      </p>
      <ul>
        <li>Zu versteuerndes Einkommen: 15.000 €</li>
        <li>Grundfreibetrag: 11.784 €</li>
        <li>Zu versteuernder Betrag: 3.216 €</li>
        <li>Einkommensteuer: ca. <strong>450 €</strong> (durchschnittlicher Steuersatz ca. 3%)</li>
      </ul>

      <p>
        <strong>Beispiel 3 - Verheiratetes Paar:</strong>
      </p>
      <ul>
        <li>Gemeinsames zu versteuerndes Einkommen: 20.000 €</li>
        <li>Doppelter Grundfreibetrag: 23.568 €</li>
        <li>Einkommensteuer: <strong>0 €</strong></li>
      </ul>

      <h2>Wer profitiert vom Grundfreibetrag?</h2>
      <p>
        Der Grundfreibetrag gilt für alle steuerpflichtigen Personen in Deutschland, unabhängig von Alter, Beruf oder Familienstand:
      </p>
      <ul>
        <li><strong>Arbeitnehmer:</strong> Bei der monatlichen Lohnsteuerberechnung berücksichtigt</li>
        <li><strong>Selbstständige:</strong> Bei der Einkommensteuererklärung angerechnet</li>
        <li><strong>Rentner:</strong> Rentenbeträge bis zum Grundfreibetrag sind steuerfrei</li>
        <li><strong>Geringverdiener:</strong> Zahlen oft gar keine Einkommensteuer</li>
        <li><strong>Studenten und Auszubildende:</strong> Profitieren bei niedrigen Einkommen</li>
      </ul>
      <p>
        Besonders profitieren Personen mit niedrigen Einkommen, da sie durch den Grundfreibetrag vollständig von der Einkommensteuer befreit werden können.
      </p>

      <h2>Unterschied zwischen Grundfreibetrag und Kinderfreibetrag</h2>
      <p>
        Der Grundfreibetrag wird häufig mit dem Kinderfreibetrag verwechselt. Hier die wichtigsten Unterschiede:
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> Gilt automatisch für jeden Steuerpflichtigen, beträgt 2026 11.784 € pro Person</li>
        <li><strong>Kinderfreibetrag:</strong> Gilt nur für Eltern mit Kindern, beträgt 2026 6.612 € pro Kind und Elternteil (insgesamt 13.224 € pro Kind bei Zusammenveranlagung)</li>
        <li><strong>Kindergeld vs. Kinderfreibetrag:</strong> Das Finanzamt prüft automatisch, was günstiger ist (Günstigerprüfung)</li>
      </ul>
      <p>
        Beide Freibeträge können gleichzeitig genutzt werden – der Grundfreibetrag für die eigene Person und der Kinderfreibetrag zusätzlich für jedes Kind.
      </p>

      <h2>Grundfreibetrag bei der Lohnsteuer</h2>
      <p>
        Der Arbeitgeber berücksichtigt den Grundfreibetrag automatisch bei der monatlichen Lohnabrechnung. Wenn Sie nur ein Arbeitsverhältnis haben und keine weiteren Einkünfte beziehen, wird der Grundfreibetrag über das Jahr verteilt:
      </p>
      <ul>
        <li>Monatlicher Grundfreibetrag: 11.784 € ÷ 12 = ca. 982 € pro Monat</li>
        <li>Bei einem monatlichen Bruttogehalt unter 982 € fällt in der Regel keine Lohnsteuer an</li>
      </ul>
      <p>
        Wichtig: Der Grundfreibetrag bezieht sich auf das zu versteuernde Einkommen, nicht auf das Bruttoeinkommen. Vom Bruttoeinkommen können noch Werbungskosten, Sonderausgaben und andere Freibeträge abgezogen werden.
      </p>

      <h2>Grundfreibetrag und Steuererklärung</h2>
      <p>
        Bei der Einkommensteuererklärung wird der Grundfreibetrag automatisch vom Finanzamt berücksichtigt. Sie müssen ihn nicht gesondert beantragen oder angeben. Wenn Ihr zu versteuerndes Einkommen unter dem Grundfreibetrag liegt, erhalten Sie die gesamte gezahlte Lohnsteuer zurück.
      </p>
      <p>
        Dies ist besonders relevant für:
      </p>
      <ul>
        <li>Teilzeitbeschäftigte mit niedrigem Jahreseinkommen</li>
        <li>Personen, die nur einen Teil des Jahres gearbeitet haben</li>
        <li>Studenten mit Nebenjob</li>
        <li>Rentner mit niedrigen Renten</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist der Grundfreibetrag 2026?",
      answer:
        "Der Grundfreibetrag beträgt im Jahr 2026 11.784 Euro pro Person. Bei Verheirateten mit Zusammenveranlagung gilt der doppelte Betrag von 23.568 Euro. Bis zu diesem Betrag muss keine Einkommensteuer gezahlt werden.",
    },
    {
      question: "Muss ich den Grundfreibetrag beantragen?",
      answer:
        "Nein, der Grundfreibetrag wird automatisch berücksichtigt. Sie müssen ihn weder beantragen noch in der Steuererklärung angeben. Er ist fest in die Steuertabelle eingebaut und gilt für alle Steuerpflichtigen in Deutschland.",
    },
    {
      question: "Was ist der Unterschied zwischen Grundfreibetrag und Freibetrag?",
      answer:
        "Der Grundfreibetrag ist ein spezieller Freibetrag, der das Existenzminimum steuerfrei stellt und für alle Steuerpflichtigen gilt. Andere Freibeträge wie der Kinderfreibetrag, Sparerpauschbetrag oder Werbungskostenpauschale gelten nur unter bestimmten Voraussetzungen und kommen zusätzlich zum Grundfreibetrag.",
    },
    {
      question: "Gilt der Grundfreibetrag auch für Rentner?",
      answer:
        "Ja, der Grundfreibetrag gilt auch für Rentner. Wenn die steuerpflichtigen Renteneinkünfte unter 11.784 Euro pro Jahr liegen, muss keine Einkommensteuer gezahlt werden. Allerdings ist zu beachten, dass nicht die gesamte Rente steuerpflichtig ist – der Besteuerungsanteil hängt vom Renteneintritsjahr ab.",
    },
    {
      question: "Bekomme ich den Grundfreibetrag ausgezahlt?",
      answer:
        "Nein, der Grundfreibetrag wird nicht ausgezahlt. Er ist eine Steuerfreistellung, die automatisch bei der Berechnung der Einkommensteuer berücksichtigt wird. Wenn Ihr Jahreseinkommen unter dem Grundfreibetrag liegt und Sie Lohnsteuer gezahlt haben, erhalten Sie diese bei der Steuererklärung vollständig zurück.",
    },
    {
      question: "Warum steigt der Grundfreibetrag jedes Jahr?",
      answer:
        "Der Grundfreibetrag wird jährlich angepasst, um die Inflation und gestiegene Lebenshaltungskosten auszugleichen. Dies verhindert die sogenannte 'kalte Progression' – also dass Sie durch Gehaltserhöhungen, die nur die Inflation ausgleichen, in einen höheren Steuersatz rutschen. Die Anpassung erfolgt auf Basis des Existenzminimumberichts der Bundesregierung.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/kinderfreibetrag", title: "Kinderfreibetrag" },
    { href: "/lexikon/steuerfreibetrag", title: "Steuerfreibetrag" },
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Grundfreibetrag"
      description="Der Grundfreibetrag stellt sicher, dass das Existenzminimum steuerfrei bleibt. 2026 beträgt er 11.784 Euro pro Person."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
