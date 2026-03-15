/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Abfindung - Berechnung, Steuern & Fünftelregelung 2026",
  description:
    "Was ist eine Abfindung? Wie wird sie berechnet und versteuert? Fünftelregelung nach §34 EStG, ALG-Sperrzeit und Tipps zur Abfindung 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/abfindung/",
  },
  openGraph: {
    title: "Abfindung - Berechnung, Steuern & Fünftelregelung 2026",
    description:
      "Was ist eine Abfindung? Wie wird sie berechnet und versteuert? Fünftelregelung nach §34 EStG, ALG-Sperrzeit und Tipps zur Abfindung 2026.",
    url: "https://gehaltly.de/lexikon/abfindung/",
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

export default function AbfindungPage() {
  const content = (
    <>
      <h2>Was ist eine Abfindung?</h2>
      <p>
        Eine Abfindung ist eine einmalige Sonderzahlung des Arbeitgebers an den Arbeitnehmer bei Beendigung des Arbeitsverhältnisses. Sie dient als Entschädigung für den Verlust des Arbeitsplatzes. Es gibt in Deutschland grundsätzlich keinen gesetzlichen Anspruch auf eine Abfindung, allerdings wird sie in der Praxis häufig im Rahmen von Aufhebungsverträgen, Sozialplänen oder gerichtlichen Vergleichen vereinbart. Die rechtliche Grundlage findet sich unter anderem im <a href="https://www.gesetze-im-internet.de/estg/" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Einkommensteuergesetz (EStG)</a>.
      </p>

      <h2>Berechnung der Abfindung: Die Faustformel</h2>
      <p>
        In der Praxis hat sich eine Faustformel für die Berechnung der Abfindungshöhe etabliert:
      </p>
      <ul>
        <li><strong>0,5 × Bruttomonatsgehalt × Beschäftigungsjahre</strong></li>
      </ul>
      <p>
        Beispiel: Bei einem Bruttomonatsgehalt von 4.000 € und 10 Jahren Betriebszugehörigkeit ergibt sich eine Regelabfindung von 0,5 × 4.000 € × 10 = <strong>20.000 €</strong>. Diese Formel dient als Orientierung, die tatsächliche Höhe hängt von der Verhandlungsposition, der Unternehmensgröße und den Kündigungsgründen ab. In manchen Fällen, etwa bei betriebsbedingter Kündigung nach §1a KSchG, wird genau diese Formel angesetzt.
      </p>

      <h2>Steuern auf die Abfindung</h2>
      <p>
        Die Abfindung unterliegt in voller Höhe der Einkommensteuer. Sie ist jedoch sozialversicherungsfrei, d.h. es fallen keine Beiträge zur Kranken-, Renten-, Pflege- oder Arbeitslosenversicherung an. Da die Abfindung zum regulären Jahreseinkommen hinzugerechnet wird, kann sie zu einer erheblichen Steuerlast führen, da sie den persönlichen Steuersatz in die Höhe treibt.
      </p>

      <h2>Die Fünftelregelung nach §34 EStG</h2>
      <p>
        Um die steuerliche Belastung einer Abfindung abzumildern, gibt es die sogenannte Fünftelregelung (§34 EStG). Dabei wird die Abfindung rechnerisch auf fünf Jahre verteilt, sodass die Steuerprogression abgeschwächt wird. Die Berechnung funktioniert wie folgt:
      </p>
      <ul>
        <li>Zunächst wird die Steuer auf das reguläre Einkommen <strong>ohne</strong> Abfindung berechnet.</li>
        <li>Dann wird die Steuer auf das reguläre Einkommen <strong>plus ein Fünftel</strong> der Abfindung berechnet.</li>
        <li>Die Differenz zwischen beiden Steuerbeträgen wird mit <strong>fünf multipliziert</strong>.</li>
        <li>Dieses Ergebnis ist die Steuer auf die gesamte Abfindung.</li>
      </ul>
      <p>
        Seit 2025 wird die Fünftelregelung nicht mehr vom Arbeitgeber im Lohnsteuerabzugsverfahren berücksichtigt, sondern muss über die Einkommensteuererklärung geltend gemacht werden.
      </p>

      <h2>Abfindung und Arbeitslosengeld (ALG-Sperrzeit)</h2>
      <p>
        Wer einen Aufhebungsvertrag mit Abfindung unterzeichnet, riskiert eine <strong>Sperrzeit von bis zu 12 Wochen</strong> beim Arbeitslosengeld. Die Agentur für Arbeit wertet dies als freiwillige Aufgabe des Arbeitsplatzes. Um die Sperrzeit zu vermeiden, sollte der Aufhebungsvertrag eine drohende betriebsbedingte Kündigung dokumentieren und die ordentliche Kündigungsfrist einhalten.
      </p>
      <p>
        Zudem kann eine hohe Abfindung dazu führen, dass das ALG I erst nach einer <strong>Ruhezeit</strong> gezahlt wird, wenn die ordentliche Kündigungsfrist durch die Abfindungszahlung verkürzt wurde.
      </p>

      <h2>Tipps zur Abfindungsverhandlung</h2>
      <ul>
        <li>Lassen Sie den Aufhebungsvertrag von einem Fachanwalt für Arbeitsrecht prüfen.</li>
        <li>Prüfen Sie die Auswirkungen auf Ihr Arbeitslosengeld vor Unterzeichnung.</li>
        <li>Verhandeln Sie einen Auszahlungszeitpunkt im Folgejahr, wenn Ihr reguläres Einkommen dann niedriger ist.</li>
        <li>Nutzen Sie die Fünftelregelung über die Steuererklärung.</li>
        <li>Beachten Sie: Abfindungen über 0,5 Monatsgehälter pro Beschäftigungsjahr sind in der Praxis verhandelbar.</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Habe ich einen Anspruch auf eine Abfindung?",
      answer:
        "Grundsätzlich gibt es keinen gesetzlichen Anspruch auf eine Abfindung. Ausnahmen bestehen bei betriebsbedingten Kündigungen nach §1a KSchG, wenn der Arbeitgeber ein Abfindungsangebot macht, sowie bei Sozialplänen, gerichtlichen Vergleichen oder vertraglichen Vereinbarungen.",
    },
    {
      question: "Wie hoch ist die Steuer auf eine Abfindung?",
      answer:
        "Die Abfindung wird zum regulären Einkommen addiert und mit dem persönlichen Steuersatz versteuert. Durch die Fünftelregelung (§34 EStG) kann die Steuerlast gemindert werden. Sozialversicherungsbeiträge fallen auf die Abfindung nicht an.",
    },
    {
      question: "Was ist die Fünftelregelung bei einer Abfindung?",
      answer:
        "Die Fünftelregelung verteilt die Abfindung rechnerisch auf fünf Jahre, um die Steuerprogression abzumildern. Seit 2025 muss sie über die Einkommensteuererklärung beantragt werden und wird nicht mehr automatisch im Lohnsteuerabzug berücksichtigt.",
    },
    {
      question: "Kann ich trotz Abfindung Arbeitslosengeld erhalten?",
      answer:
        "Ja, aber bei einem Aufhebungsvertrag droht eine Sperrzeit von bis zu 12 Wochen. Um dies zu vermeiden, sollte eine drohende betriebsbedingte Kündigung dokumentiert und die ordentliche Kündigungsfrist eingehalten werden.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/lexikon/sonderausgaben", title: "Sonderausgaben" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Abfindung"
      description="Eine Abfindung ist eine einmalige Sonderzahlung des Arbeitgebers an den Arbeitnehmer bei Beendigung des Arbeitsverhältnisses."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
