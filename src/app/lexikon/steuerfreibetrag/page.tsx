/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Steuerfreibetrag - Arten, Höhe & Beantragung 2026",
  description:
    "Was ist ein Steuerfreibetrag? Welche Arten gibt es und wie beantragen Sie ihn? Alle Informationen zu Steuerfreibeträgen und dem ELStAM-System 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/steuerfreibetrag/",
  },
  openGraph: {
    title: "Steuerfreibetrag - Arten, Höhe & Beantragung 2026",
    description:
      "Was ist ein Steuerfreibetrag? Welche Arten gibt es und wie beantragen Sie ihn? Alle Informationen zu Steuerfreibeträgen und dem ELStAM-System 2026.",
    url: "https://gehaltly.de/lexikon/steuerfreibetrag/",
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

export default function SteuerfreibetragPage() {
  const content = (
    <>
      <h2>Was ist ein Steuerfreibetrag?</h2>
      <p>
        Ein Steuerfreibetrag ist ein Betrag, bis zu dem Einkommen oder bestimmte Einnahmen steuerfrei bleiben. Freibeträge reduzieren das zu versteuernde Einkommen und damit die Höhe der zu zahlenden Steuern. Sie dienen dazu, das Existenzminimum zu sichern, besondere Lebensumstände zu berücksichtigen oder bestimmte Aufwendungen steuerlich zu entlasten.
      </p>
      <p>
        Im Gegensatz zu Pauschbeträgen, die automatisch gewährt werden, müssen viele Freibeträge beantragt oder nachgewiesen werden. Einige Freibeträge gelten jedoch automatisch für alle Steuerpflichtigen.
      </p>

      <h2>Arten von Steuerfreibeträgen in Deutschland</h2>
      <p>
        In Deutschland gibt es verschiedene Arten von Steuerfreibeträgen für unterschiedliche Lebenssituationen:
      </p>

      <h3>Automatische Freibeträge</h3>
      <ul>
        <li><strong>Grundfreibetrag:</strong> 12.348 € (2026) – stellt das Existenzminimum steuerfrei, gilt für alle</li>
        <li><strong>Sparerpauschbetrag:</strong> 1.000 € für Ledige, 2.000 € für Verheiratete – für Kapitalerträge</li>
        <li><strong>Arbeitnehmerpauschbetrag:</strong> 1.230 € – für Werbungskosten bei Arbeitnehmern</li>
        <li><strong>Sonderausgabenpauschbetrag:</strong> 36 € – für Sonderausgaben</li>
      </ul>

      <h3>Freibeträge für Familien</h3>
      <ul>
        <li><strong>Kinderfreibetrag:</strong> 4.878 € pro Elternteil (2026) – bestehend aus 3.414 € sächlichem Kinderfreibetrag + 1.464 € BEA-Freibetrag</li>
        <li><strong>BEA-Freibetrag:</strong> 2.928 € (1.464 € pro Elternteil, im Kinderfreibetrag enthalten) – für Betreuung, Erziehung, Ausbildung</li>
        <li><strong>Entlastungsbetrag für Alleinerziehende:</strong> 4.260 € plus 240 € für jedes weitere Kind</li>
        <li><strong>Ausbildungsfreibetrag:</strong> 1.200 € – für volljährige Kinder in Ausbildung mit auswärtiger Unterbringung</li>
      </ul>

      <h3>Weitere wichtige Freibeträge</h3>
      <ul>
        <li><strong>Altersentlastungsbetrag:</strong> Für Personen ab 64 Jahren (abschmelzend je nach Geburtsjahr)</li>
        <li><strong>Behinderten-Pauschbetrag:</strong> 384 € bis 2.840 € je nach Grad der Behinderung</li>
        <li><strong>Pflege-Pauschbetrag:</strong> 1.800 € bei Pflegegrad 2, bis zu 1.800 € bei höheren Pflegegraden</li>
        <li><strong>Versorgungsfreibetrag:</strong> Für Betriebsrenten und Pensionen (abschmelzend)</li>
      </ul>

      <h2>Wie funktionieren Steuerfreibeträge?</h2>
      <p>
        Steuerfreibeträge reduzieren Ihr zu versteuerndes Einkommen. Im Unterschied zu Steuerermäßigungen, die direkt von der Steuerschuld abgezogen werden, senken Freibeträge die Bemessungsgrundlage:
      </p>
      <ul>
        <li><strong>Bruttoeinkommen</strong> minus Werbungskosten, Sonderausgaben etc.</li>
        <li>= <strong>Einkommen</strong> minus Freibeträge</li>
        <li>= <strong>Zu versteuerndes Einkommen</strong></li>
        <li>Darauf wird der Steuersatz angewendet</li>
      </ul>
      <p>
        Die tatsächliche Steuerersparnis hängt von Ihrem persönlichen Steuersatz ab. Je höher Ihr Steuersatz, desto größer die Ersparnis durch Freibeträge.
      </p>

      <h2>Beispielrechnung Steuerfreibeträge</h2>
      <p>
        <strong>Beispiel - Arbeitnehmer mit Kind:</strong>
      </p>
      <ul>
        <li>Bruttoeinkommen: 50.000 €</li>
        <li>Minus Arbeitnehmerpauschbetrag: -1.230 €</li>
        <li>Minus Sonderausgabenpauschbetrag: -36 €</li>
        <li>Einkommen: 48.734 €</li>
        <li>Minus Grundfreibetrag: -12.348 €</li>
        <li>Minus Kinderfreibetrag (halber): -4.878 €</li>
        <li>Zu versteuerndes Einkommen: <strong>31.508 €</strong></li>
      </ul>
      <p>
        Bei einem durchschnittlichen Steuersatz von ca. 20% auf dieses Einkommen spart der Kinderfreibetrag allein etwa 976 € Steuern.
      </p>

      <h2>So beantragen Sie Steuerfreibeträge - Das ELStAM-System</h2>
      <p>
        Seit 2013 werden Lohnsteuerfreibeträge über das <strong>ELStAM-System</strong> (Elektronische Lohnsteuerabzugsmerkmale) verwaltet. Dieses System hat die Lohnsteuerkarte in Papierform abgelöst.
      </p>

      <h3>Funktionsweise von ELStAM</h3>
      <ul>
        <li><strong>Automatische Speicherung:</strong> Ihre Lohnsteuerabzugsmerkmale sind elektronisch beim Bundeszentralamt für Steuern gespeichert</li>
        <li><strong>Abruf durch Arbeitgeber:</strong> Ihr Arbeitgeber ruft die Daten elektronisch ab</li>
        <li><strong>Aktualisierung:</strong> Änderungen werden automatisch oder auf Antrag aktualisiert</li>
        <li><strong>Einsicht möglich:</strong> Sie können Ihre ELStAM online einsehen über Elster oder beim Finanzamt</li>
      </ul>

      <h3>Freibeträge beantragen über ELStAM</h3>
      <p>
        Bestimmte Freibeträge können Sie als Lohnsteuerfreibetrag eintragen lassen, um bereits während des Jahres weniger Lohnsteuer zu zahlen:
      </p>
      <ul>
        <li><strong>Werbungskosten:</strong> Wenn sie über 1.230 € liegen (z.B. Fahrtkosten, doppelte Haushaltsführung)</li>
        <li><strong>Sonderausgaben:</strong> Wenn sie über 36 € liegen (z.B. Altersvorsorge, Spenden)</li>
        <li><strong>Außergewöhnliche Belastungen:</strong> Z.B. Krankheitskosten, Pflegekosten</li>
        <li><strong>Behinderten-Pauschbetrag:</strong> Bei Schwerbehinderung</li>
      </ul>

      <h3>Antragstellung</h3>
      <p>
        Freibeträge beantragen Sie beim zuständigen Finanzamt:
      </p>
      <ul>
        <li><strong>Online:</strong> Über ELSTER (Mein ELSTER) – schnellste Methode</li>
        <li><strong>Formular:</strong> "Antrag auf Lohnsteuer-Ermäßigung" (Hauptvordruck mit Anlage)</li>
        <li><strong>Nachweise:</strong> Belege für die beantragten Freibeträge beifügen</li>
        <li><strong>Gültigkeit:</strong> Meist für 2 Jahre, dann erneute Beantragung nötig</li>
      </ul>

      <h2>Wann lohnt sich die Beantragung von Freibeträgen?</h2>
      <p>
        Die Eintragung von Freibeträgen auf der Lohnsteuerkarte lohnt sich besonders, wenn:
      </p>
      <ul>
        <li><strong>Hohe regelmäßige Kosten:</strong> Lange Arbeitswege (über 20 km), doppelte Haushaltsführung</li>
        <li><strong>Liquiditätsvorteil gewünscht:</strong> Sie möchten monatlich mehr Netto statt einer Steuererstattung im Folgejahr</li>
        <li><strong>Planbare Ausgaben:</strong> Sie können die Höhe der Kosten gut einschätzen</li>
        <li><strong>Vermeidung von Steuernachzahlungen:</strong> Bei zusätzlichen Einkünften kann ein niedrigerer Freibetrag Nachzahlungen vermeiden</li>
      </ul>
      <p>
        Wichtig: Wenn Ihre tatsächlichen Aufwendungen am Jahresende niedriger sind als der eingetragene Freibetrag, müssen Sie Steuern nachzahlen.
      </p>

      <h2>Freibeträge in der Steuererklärung</h2>
      <p>
        Auch wenn Sie Freibeträge nicht auf der Lohnsteuerkarte eintragen lassen, können Sie diese in der Einkommensteuererklärung geltend machen:
      </p>
      <ul>
        <li><strong>Werbungskosten:</strong> Anlage N</li>
        <li><strong>Sonderausgaben:</strong> Hauptvordruck und Anlage Vorsorgeaufwand</li>
        <li><strong>Außergewöhnliche Belastungen:</strong> Hauptvordruck</li>
        <li><strong>Kinder:</strong> Anlage Kind</li>
        <li><strong>Behinderten-Pauschbetrag:</strong> Hauptvordruck</li>
      </ul>
      <p>
        Die Erstattung erfolgt dann über die Einkommensteuerveranlagung im Folgejahr.
      </p>

      <h2>Unterschied zwischen Freibetrag und Pauschbetrag</h2>
      <p>
        Freibeträge und Pauschbeträge werden oft verwechselt, es gibt jedoch wichtige Unterschiede:
      </p>
      <ul>
        <li><strong>Pauschbetrag:</strong> Wird automatisch gewährt ohne Nachweis (z.B. Arbeitnehmerpauschbetrag 1.230 €)</li>
        <li><strong>Freibetrag:</strong> Muss oft beantragt werden oder erfordert Nachweise (z.B. Kinderfreibetrag, Behinderten-Pauschbetrag)</li>
        <li><strong>Überschreiten möglich:</strong> Bei Pauschbeträgen können Sie höhere tatsächliche Kosten nachweisen und absetzen</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Was ist der Unterschied zwischen Freibetrag und Pauschbetrag?",
      answer:
        "Ein Pauschbetrag wird automatisch ohne Nachweis gewährt (z.B. Arbeitnehmerpauschbetrag von 1.230 €), während viele Freibeträge beantragt oder nachgewiesen werden müssen. Bei Pauschbeträgen können Sie auch höhere tatsächliche Kosten geltend machen, wenn diese den Pauschbetrag übersteigen.",
    },
    {
      question: "Wie beantrage ich einen Steuerfreibetrag beim Finanzamt?",
      answer:
        "Steuerfreibeträge beantragen Sie über das ELStAM-System beim Finanzamt, entweder online über ELSTER (Mein ELSTER) oder mit dem Formular 'Antrag auf Lohnsteuer-Ermäßigung'. Sie benötigen Nachweise für die beantragten Freibeträge. Die Eintragung gilt meist für 2 Jahre und muss dann erneuert werden.",
    },
    {
      question: "Welche Freibeträge gelten automatisch?",
      answer:
        "Automatisch gelten der Grundfreibetrag (12.348 € in 2026), der Arbeitnehmerpauschbetrag (1.230 €), der Sonderausgabenpauschbetrag (36 €) und der Sparerpauschbetrag (1.000 € bzw. 2.000 € für Verheiratete). Diese müssen nicht beantragt werden und werden bei der Lohnsteuer bzw. Steuererklärung automatisch berücksichtigt.",
    },
    {
      question: "Was ist das ELStAM-System?",
      answer:
        "ELStAM steht für Elektronische Lohnsteuerabzugsmerkmale und hat seit 2013 die Lohnsteuerkarte in Papierform ersetzt. Ihre Lohnsteuerdaten sind elektronisch beim Bundeszentralamt für Steuern gespeichert und werden von Ihrem Arbeitgeber abgerufen. Freibeträge können Sie über dieses System beim Finanzamt beantragen und eintragen lassen.",
    },
    {
      question: "Wann lohnt sich die Eintragung eines Freibetrags auf der Lohnsteuerkarte?",
      answer:
        "Die Eintragung lohnt sich besonders bei hohen regelmäßigen Kosten wie langen Arbeitswegen oder doppelter Haushaltsführung. Sie erhalten dann monatlich mehr Nettolohn statt einer Erstattung im Folgejahr. Vorsicht: Sind Ihre tatsächlichen Kosten niedriger als der eingetragene Freibetrag, droht eine Nachzahlung.",
    },
    {
      question: "Kann ich Freibeträge auch nachträglich geltend machen?",
      answer:
        "Ja, auch wenn Sie keine Freibeträge auf der Lohnsteuerkarte haben eintragen lassen, können Sie alle Aufwendungen in der jährlichen Einkommensteuererklärung geltend machen. Die Erstattung erfolgt dann über die Steuerveranlagung im Folgejahr. Für viele Steuerpflichtige ist dies der einfachere Weg.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/lexikon/kinderfreibetrag", title: "Kinderfreibetrag" },
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Steuerfreibetrag"
      description="Steuerfreibeträge reduzieren das zu versteuernde Einkommen. Es gibt verschiedene Arten wie Grundfreibetrag, Kinderfreibetrag und weitere Freibeträge für besondere Situationen."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
