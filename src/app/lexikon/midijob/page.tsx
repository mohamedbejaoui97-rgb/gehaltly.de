/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Midijob - Gleitzone 556-2.000€ & reduzierte Abgaben 2026",
  description:
    "Alles zum Midijob 2026: Verdienstbereich 556-2.000€, Gleitzonenregelung mit reduzierten Sozialabgaben, Übergang zur regulären Beschäftigung.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/midijob/",
  },
};

export default function MidijobPage() {
  const content = (
    <>
      <h2>Was ist ein Midijob?</h2>
      <p>
        Ein Midijob ist eine sozialversicherungspflichtige Beschäftigung im sogenannten Übergangsbereich (früher Gleitzone genannt), bei der das monatliche Arbeitsentgelt zwischen 556,01 € und 2.000 € liegt. Im Midijob zahlen Arbeitnehmer reduzierte Sozialversicherungsbeiträge, während der Arbeitgeber die vollen Beiträge trägt.
      </p>

      <h2>Verdienstbereich Midijob 2026</h2>
      <p>
        Der Midijob-Bereich (Übergangsbereich) umfasst 2026:
      </p>
      <ul>
        <li><strong>Untergrenze: 556,01 €</strong> (direkt über der Minijob-Grenze)</li>
        <li><strong>Obergrenze: 2.000 €</strong> pro Monat</li>
        <li>Bei Überschreiten von 2.000 €: Reguläre Beschäftigung mit vollen Arbeitnehmerbeiträgen</li>
        <li>Gehaltsschwankungen sind möglich, entscheidend ist das regelmäßige monatliche Entgelt</li>
      </ul>

      <h2>Gleitzonenregelung - So funktioniert sie</h2>
      <p>
        Die Gleitzonenregelung reduziert die Sozialabgaben für Arbeitnehmer stufenweise:
      </p>
      <ul>
        <li>Bei <strong>556 €:</strong> Minimale Arbeitnehmerbeiträge (wie beim Minijob mit Rentenversicherung)</li>
        <li>Bei <strong>2.000 €:</strong> Volle Arbeitnehmerbeiträge (wie bei regulärer Beschäftigung)</li>
        <li><strong>Dazwischen:</strong> Gleitender Übergang - je höher das Einkommen, desto höher die Beiträge</li>
        <li>Der Arbeitgeber zahlt immer die vollen Sozialabgaben auf das tatsächliche Gehalt</li>
      </ul>

      <h2>Sozialversicherungsbeiträge im Midijob</h2>
      <p>
        Im Gegensatz zum Minijob sind Midijobber voll sozialversicherungspflichtig:
      </p>
      <ul>
        <li><strong>Krankenversicherung:</strong> Reduzierte Arbeitnehmerbeiträge (gleitend)</li>
        <li><strong>Pflegeversicherung:</strong> Reduzierte Arbeitnehmerbeiträge (gleitend)</li>
        <li><strong>Rentenversicherung:</strong> Reduzierte Arbeitnehmerbeiträge, aber volle Rentenansprüche</li>
        <li><strong>Arbeitslosenversicherung:</strong> Reduzierte Arbeitnehmerbeiträge (gleitend)</li>
        <li><strong>Wichtig:</strong> Volle Sozialversicherungsleistungen trotz reduzierter Beiträge</li>
      </ul>

      <h2>Beispielrechnungen Midijob</h2>
      <p>
        <strong>Beispiel 1: Midijob mit 800 € Brutto</strong>
      </p>
      <ul>
        <li>Bruttogehalt: 800 €</li>
        <li>Reduzierte Arbeitnehmerbeiträge: ca. 160 € (ca. 20% statt ca. 21%)</li>
        <li>Netto: ca. <strong>640 €</strong></li>
        <li>Arbeitgeberanteil: ca. 168 € (ca. 21% vom Brutto)</li>
        <li>Gesamtkosten Arbeitgeber: ca. 968 €</li>
      </ul>

      <p>
        <strong>Beispiel 2: Midijob mit 1.500 € Brutto</strong>
      </p>
      <ul>
        <li>Bruttogehalt: 1.500 €</li>
        <li>Reduzierte Arbeitnehmerbeiträge: ca. 270 € (ca. 18% statt ca. 21%)</li>
        <li>Lohnsteuer: ca. 50 € (je nach Steuerklasse)</li>
        <li>Netto: ca. <strong>1.180 €</strong></li>
        <li>Arbeitgeberanteil: ca. 315 € (ca. 21% vom Brutto)</li>
        <li>Gesamtkosten Arbeitgeber: ca. 1.815 €</li>
      </ul>

      <p>
        <strong>Beispiel 3: Obere Grenze mit 2.000 € Brutto</strong>
      </p>
      <ul>
        <li>Bruttogehalt: 2.000 €</li>
        <li>Arbeitnehmerbeiträge: ca. 420 € (ca. 21%, fast wie reguläre Beschäftigung)</li>
        <li>Lohnsteuer: ca. 100 € (je nach Steuerklasse)</li>
        <li>Netto: ca. <strong>1.480 €</strong></li>
        <li>Arbeitgeberanteil: ca. 420 € (ca. 21% vom Brutto)</li>
        <li>Gesamtkosten Arbeitgeber: ca. 2.420 €</li>
      </ul>

      <h2>Vorteile des Midijobs</h2>
      <p>
        Der Midijob bietet sowohl für Arbeitnehmer als auch Arbeitgeber Vorteile:
      </p>
      <p>
        <strong>Vorteile für Arbeitnehmer:</strong>
      </p>
      <ul>
        <li>Reduzierte Sozialabgaben bedeuten höheres Nettogehalt</li>
        <li>Trotzdem volle Sozialversicherungsleistungen (Krankenversicherung, Rente, Arbeitslosengeld)</li>
        <li>Volle Rentenansprüche trotz reduzierter Beiträge</li>
        <li>Schutz bei Krankheit, Arbeitslosigkeit und im Alter</li>
        <li>Keine Begrenzung der Arbeitsstunden</li>
      </ul>
      <p>
        <strong>Vorteile für Arbeitgeber:</strong>
      </p>
      <ul>
        <li>Flexiblere Arbeitszeitgestaltung als beim Minijob</li>
        <li>Mitarbeiter sind voll sozialversichert</li>
        <li>Attraktive Option für Teilzeitkräfte</li>
      </ul>

      <h2>Übergang vom Minijob zum Midijob</h2>
      <p>
        Wenn Ihr Verdienst von unter 556 € auf über 556 € steigt:
      </p>
      <ul>
        <li>Automatischer Wechsel vom Minijob zum Midijob</li>
        <li>Ab dem ersten Euro über 556 € wird der Job sozialversicherungspflichtig</li>
        <li>Der Arbeitgeber muss Sie zur Sozialversicherung anmelden</li>
        <li>Sie erhalten eine Krankenversichertenkarte und sind voll versichert</li>
      </ul>

      <h2>Übergang vom Midijob zur regulären Beschäftigung</h2>
      <p>
        Bei Überschreiten der 2.000-€-Grenze:
      </p>
      <ul>
        <li>Ab 2.000,01 € gelten die regulären Sozialversicherungsbeiträge</li>
        <li>Keine reduzierten Arbeitnehmerbeiträge mehr</li>
        <li>Gleitender Übergang verhindert "Netto-Sprünge" nach unten</li>
        <li>Volle Beiträge: ca. 21% Arbeitnehmeranteil (ohne Lohnsteuer)</li>
      </ul>

      <h2>Mehrere Jobs gleichzeitig</h2>
      <p>
        Bei mehreren Beschäftigungen gelten besondere Regelungen:
      </p>
      <ul>
        <li>Ein Midijob + ein Minijob ist möglich, wenn beide zusammen die Versicherungsgrenzen nicht überschreiten</li>
        <li>Bei mehreren sozialversicherungspflichtigen Jobs werden die Einkommen zusammengerechnet</li>
        <li>Die Gleitzonenregelung gilt nur für einen Job</li>
        <li>Hauptjob + Midijob: Nur der Hauptjob kann von der Gleitzone profitieren</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Was ist der Unterschied zwischen Minijob und Midijob?",
      answer:
        "Minijob: Bis 556 €, steuer- und weitgehend sozialabgabenfrei für Arbeitnehmer. Midijob: 556,01-2.000 €, sozialversicherungspflichtig mit reduzierten Arbeitnehmerbeiträgen. Im Midijob haben Sie vollen Sozialversicherungsschutz inklusive Anspruch auf Arbeitslosengeld.",
    },
    {
      question: "Lohnt sich ein Midijob mehr als ein Minijob?",
      answer:
        "Bei gleichem Brutto verdienen Sie im Midijob netto weniger als im Minijob, da Sie Sozialabgaben zahlen. Dafür haben Sie aber vollen Sozialversicherungsschutz: Krankenversicherung, Rentenansprüche, Arbeitslosengeld. Langfristig ist der Midijob oft besser für die soziale Absicherung.",
    },
    {
      question: "Wie werden die reduzierten Beiträge im Midijob berechnet?",
      answer:
        "Die Beiträge werden nach einer komplexen Formel berechnet, die einen gleitenden Übergang gewährleistet. Bei 556 € zahlen Sie minimal, bei 2.000 € fast die vollen Beiträge. Ihr Arbeitgeber oder die Lohnsoftware berechnet dies automatisch. Als Faustregel: Je höher das Gehalt im Midijob-Bereich, desto höher die Abgaben.",
    },
    {
      question: "Habe ich im Midijob Anspruch auf Arbeitslosengeld?",
      answer:
        "Ja, als Midijobber sind Sie arbeitslosenversichert und haben nach mindestens 12 Monaten Beschäftigung Anspruch auf Arbeitslosengeld I. Dies ist ein wichtiger Unterschied zum Minijob, bei dem kein Anspruch auf Arbeitslosengeld besteht.",
    },
    {
      question: "Kann ich als Student einen Midijob ausüben?",
      answer:
        "Ja, Studenten können einen Midijob ausüben. Beachten Sie aber: Bei mehr als 20 Stunden pro Woche während der Vorlesungszeit verlieren Sie den Studierendenstatus in der Krankenversicherung. Die studentische Krankenversicherung (ca. 120 € monatlich) ist dann nicht mehr möglich.",
    },
    {
      question: "Was passiert, wenn mein Gehalt schwankt?",
      answer:
        "Gelegentliche Schwankungen sind unproblematisch, solange das regelmäßige monatliche Arbeitsentgelt im Midijob-Bereich bleibt. Bei dauerhafter Unterschreitung von 556 € wird es zum Minijob, bei dauerhaftem Überschreiten von 2.000 € zur regulären Beschäftigung. Einmalige Sonderzahlungen werden auf den Monat der Zahlung angerechnet.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/minijob", title: "Minijob" },
    { href: "/lexikon/krankenversicherung", title: "Krankenversicherung" },
    { href: "/lexikon/rentenversicherung", title: "Rentenversicherung" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Midijob"
      description="Ein Midijob ist eine sozialversicherungspflichtige Beschäftigung im Übergangsbereich von 556,01 € bis 2.000 € mit reduzierten Arbeitnehmerbeiträgen."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
