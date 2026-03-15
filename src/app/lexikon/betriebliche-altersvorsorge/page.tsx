/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Betriebliche Altersvorsorge (bAV) 2026 - Entgeltumwandlung & Freibeträge",
  description:
    "Betriebliche Altersvorsorge 2026: Entgeltumwandlung, Freibeträge (302 €/Monat steuer- und SV-frei), Arbeitgeberzuschuss 15 % und Durchführungswege.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/betriebliche-altersvorsorge/",
  },
  openGraph: {
    title: "Betriebliche Altersvorsorge (bAV) 2026 - Entgeltumwandlung & Freibeträge",
    description:
      "Betriebliche Altersvorsorge 2026: Entgeltumwandlung, Freibeträge und Arbeitgeberzuschuss.",
    url: "https://gehaltly.de/lexikon/betriebliche-altersvorsorge/",
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

export default function BetrieblicheAltersvorsorgePage() {
  const content = (
    <>
      <h2>Was ist die betriebliche Altersvorsorge?</h2>
      <p>
        Die betriebliche Altersvorsorge (bAV) ist eine Form der Altersvorsorge, bei der der Arbeitgeber für seine Arbeitnehmer eine Zusatzrente aufbaut. Seit 2002 haben alle Arbeitnehmer einen gesetzlichen Anspruch auf Entgeltumwandlung, d.h. sie können Teile ihres Bruttogehalts steuer- und sozialversicherungsbegünstigt in eine betriebliche Altersvorsorge einzahlen. Details zu den steuerlichen Regelungen bietet das <a href="https://www.bundesfinanzministerium.de" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesfinanzministerium</a>.
      </p>

      <h2>Entgeltumwandlung: Wie funktioniert sie?</h2>
      <p>
        Bei der Entgeltumwandlung verzichtet der Arbeitnehmer auf einen Teil seines Bruttogehalts, der stattdessen in eine betriebliche Altersvorsorge eingezahlt wird. Da der Beitrag vom Bruttolohn abgezogen wird, sinken die Steuern und Sozialversicherungsbeiträge. Dies führt zu einer staatlichen Förderung der Altersvorsorge.
      </p>
      <p>
        <strong>Beispiel:</strong> Bei einem Bruttogehalt von 3.500 € und einer Entgeltumwandlung von 250 € wird nur auf 3.250 € Lohnsteuer und Sozialversicherung berechnet. Der tatsächliche Nettoverlust beträgt je nach Steuerklasse nur etwa 125 - 150 €, während 250 € angespart werden.
      </p>

      <h2>Freibeträge 2026</h2>
      <p>
        Für 2026 gelten folgende Höchstgrenzen für die steuer- und sozialversicherungsfreie Entgeltumwandlung:
      </p>
      <ul>
        <li><strong>Steuerfrei</strong>: Bis zu 8 % der Beitragsbemessungsgrenze Rentenversicherung = 8 % × 101.400 € = <strong>8.112 € jährlich</strong> bzw. <strong>676 € monatlich</strong></li>
        <li><strong>Sozialversicherungsfrei</strong>: Bis zu 4 % der BBG RV = 4 % × 101.400 € = <strong>4.056 € jährlich</strong> bzw. <strong>338 € monatlich</strong></li>
      </ul>
      <p>
        In der Praxis nutzen viele Arbeitnehmer den sozialversicherungsfreien Rahmen von ca. <strong>302 €/Monat</strong> (gerundeter Durchschnittswert) als Orientierung, da dieser steuer- und SV-frei ist.
      </p>

      <h2>Arbeitgeberzuschuss von 15 %</h2>
      <p>
        Seit 2022 sind Arbeitgeber verpflichtet, bei Entgeltumwandlung einen <strong>Zuschuss von mindestens 15 %</strong> des umgewandelten Betrags zu leisten, soweit sie durch die Entgeltumwandlung Sozialversicherungsbeiträge einsparen. Diese Pflicht gilt für alle Neuverträge und seit 2022 auch für Altverträge (vor 2019).
      </p>
      <p>
        <strong>Beispiel:</strong> Bei einer monatlichen Entgeltumwandlung von 200 € muss der Arbeitgeber mindestens 30 € (15 %) als Zuschuss leisten, sodass insgesamt 230 € in die bAV fließen.
      </p>

      <h2>Die fünf Durchführungswege</h2>
      <p>
        Die betriebliche Altersvorsorge kann über verschiedene Wege umgesetzt werden:
      </p>
      <ul>
        <li><strong>Direktversicherung</strong>: Der häufigste Weg, eine Lebensversicherung auf den Arbeitnehmer</li>
        <li><strong>Pensionskasse</strong>: Rechtlich selbstständige Versorgungseinrichtung</li>
        <li><strong>Pensionsfonds</strong>: Ähnlich wie Pensionskasse, aber mit mehr Anlagefreiheit</li>
        <li><strong>Unterstützungskasse</strong>: Rechtlich selbstständig, keine Beitragsbegrenzung</li>
        <li><strong>Direktzusage (Pensionszusage)</strong>: Arbeitgeber bildet Rückstellungen in der eigenen Bilanz</li>
      </ul>

      <h2>Besteuerung in der Auszahlungsphase</h2>
      <p>
        Die Auszahlung der betrieblichen Altersvorsorge ist in der Rentenphase voll steuerpflichtig (nachgelagerte Besteuerung). Zudem fallen Beiträge zur Kranken- und Pflegeversicherung an. Seit 2020 gibt es einen Freibetrag von <strong>176,75 €/Monat</strong> (2026), unterhalb dessen keine KV-Beiträge auf Betriebsrenten erhoben werden.
      </p>

      <h2>Vor- und Nachteile der bAV</h2>
      <ul>
        <li><strong>Vorteile</strong>: Steuer- und SV-Ersparnis in der Ansparphase, Arbeitgeberzuschuss, Insolvenzschutz (PSVaG), relativ sicherer Aufbau einer Zusatzrente</li>
        <li><strong>Nachteile</strong>: Volle Besteuerung bei Auszahlung, KV/PV-Beiträge auf die Betriebsrente, geringere gesetzliche Rente durch niedrigere SV-Beiträge, eingeschränkte Flexibilität</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Lohnt sich die betriebliche Altersvorsorge?",
      answer:
        "Die bAV lohnt sich besonders, wenn der Arbeitgeber einen Zuschuss (mindestens 15 %, oft mehr) leistet. Die Steuer- und SV-Ersparnis in der Ansparphase ist attraktiv. Allerdings müssen die Auszahlungen im Alter versteuert werden und es fallen KV-Beiträge an.",
    },
    {
      question: "Wie viel kann ich 2026 steuerfrei in die bAV einzahlen?",
      answer:
        "2026 können bis zu 8.112 € jährlich (676 €/Monat) steuerfrei und bis zu 4.056 € jährlich (338 €/Monat) zusätzlich sozialversicherungsfrei in die betriebliche Altersvorsorge eingezahlt werden.",
    },
    {
      question: "Was passiert mit meiner bAV bei einem Jobwechsel?",
      answer:
        "Die bAV-Anwartschaften bleiben erhalten. Bei Direktversicherungen, Pensionskassen und Pensionsfonds kann das Guthaben zum neuen Arbeitgeber übertragen werden (Portabilität). Ist dies nicht möglich, bleibt der Vertrag beitragsfrei bestehen.",
    },
    {
      question: "Muss der Arbeitgeber einen Zuschuss zur bAV zahlen?",
      answer:
        "Ja, seit 2022 ist der Arbeitgeber verpflichtet, bei Entgeltumwandlung einen Zuschuss von mindestens 15 % des umgewandelten Betrags zu leisten, soweit er Sozialversicherungsbeiträge einspart. Dies gilt für alle Verträge.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/rentenversicherung", title: "Rentenversicherung" },
    { href: "/lexikon/sachbezuege", title: "Sachbezüge" },
    { href: "/lexikon/sonderausgaben", title: "Sonderausgaben" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Betriebliche Altersvorsorge (bAV)"
      description="Die betriebliche Altersvorsorge ermöglicht Arbeitnehmern, steuer- und sozialversicherungsbegünstigt über den Arbeitgeber für das Alter vorzusorgen."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
