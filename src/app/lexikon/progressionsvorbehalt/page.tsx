/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Progressionsvorbehalt 2026 - Definition, Berechnung & betroffene Einkünfte",
  description:
    "Was ist der Progressionsvorbehalt? Welche Einkünfte sind betroffen (Elterngeld, ALG I, Krankengeld, Kurzarbeitergeld)? Berechnung und Auswirkungen 2026.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/progressionsvorbehalt/",
  },
  openGraph: {
    title: "Progressionsvorbehalt 2026 - Definition, Berechnung & betroffene Einkünfte",
    description:
      "Was ist der Progressionsvorbehalt? Welche Einkünfte sind betroffen und wie wirkt er sich auf die Steuer aus?",
    url: "https://gehaltly.de/lexikon/progressionsvorbehalt/",
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

export default function ProgressionsvorbehaltPage() {
  const content = (
    <>
      <h2>Was ist der Progressionsvorbehalt?</h2>
      <p>
        Der Progressionsvorbehalt ist eine steuerliche Regelung, bei der bestimmte steuerfreie Einkünfte zwar nicht direkt besteuert werden, aber den Steuersatz für das übrige zu versteuernde Einkommen erhöhen. Dies führt dazu, dass auf das reguläre Einkommen ein höherer Steuersatz angewendet wird, obwohl die steuerfreien Einkünfte selbst steuerfrei bleiben. Die Rechtsgrundlage findet sich in <a href="https://www.gesetze-im-internet.de/estg/__32b.html" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">§32b EStG</a>.
      </p>

      <h2>Welche Einkünfte unterliegen dem Progressionsvorbehalt?</h2>
      <p>
        Die wichtigsten Lohnersatzleistungen, die dem Progressionsvorbehalt unterliegen:
      </p>
      <ul>
        <li><strong>Arbeitslosengeld I</strong> (ALG I)</li>
        <li><strong>Kurzarbeitergeld</strong></li>
        <li><strong>Elterngeld</strong></li>
        <li><strong>Krankengeld</strong></li>
        <li><strong>Mutterschaftsgeld</strong></li>
        <li><strong>Insolvenzgeld</strong></li>
        <li><strong>Übergangsgeld</strong></li>
        <li><strong>Aufstockungsbeträge bei Altersteilzeit</strong></li>
      </ul>
      <p>
        Auch ausländische Einkünfte, die nach einem Doppelbesteuerungsabkommen in Deutschland steuerfrei sind, können dem Progressionsvorbehalt unterliegen.
      </p>

      <h2>Wie wird der Progressionsvorbehalt berechnet?</h2>
      <p>
        Die Berechnung erfolgt in mehreren Schritten:
      </p>
      <ul>
        <li><strong>Schritt 1</strong>: Das zu versteuernde Einkommen (zvE) wird um die dem Progressionsvorbehalt unterliegenden Einkünfte erhöht.</li>
        <li><strong>Schritt 2</strong>: Auf dieses erhöhte Einkommen wird der Steuersatz nach der Einkommensteuertabelle (§32a EStG) berechnet.</li>
        <li><strong>Schritt 3</strong>: Dieser höhere Steuersatz wird dann auf das tatsächliche zu versteuernde Einkommen (ohne die steuerfreien Einkünfte) angewendet.</li>
      </ul>

      <h2>Beispielrechnung Progressionsvorbehalt 2026</h2>
      <p>
        Ein Arbeitnehmer hat ein zu versteuerndes Einkommen von 30.000 € und hat zusätzlich 5.000 € Elterngeld erhalten:
      </p>
      <ul>
        <li><strong>Ohne Progressionsvorbehalt</strong>: Steuer auf 30.000 € = ca. 4.703 € (Steuersatz ca. 15,7 %)</li>
        <li><strong>Mit Progressionsvorbehalt</strong>: Steuersatz wird auf Basis von 35.000 € ermittelt (ca. 18,3 %). Dieser höhere Satz wird auf die 30.000 € angewendet: 30.000 € × 18,3 % = ca. 5.490 €</li>
        <li><strong>Steuermehrbelastung</strong>: ca. 787 € durch den Progressionsvorbehalt</li>
      </ul>

      <h2>Pflicht zur Steuererklärung</h2>
      <p>
        Wer im Kalenderjahr mehr als <strong>410 €</strong> an Lohnersatzleistungen erhalten hat, ist verpflichtet, eine Einkommensteuererklärung abzugeben. Die Lohnersatzleistungen werden in der Regel auf der Lohnsteuerbescheinigung oder einer gesonderten Bescheinigung (z.B. vom Arbeitsamt) ausgewiesen.
      </p>

      <h2>Negativer Progressionsvorbehalt</h2>
      <p>
        Der Progressionsvorbehalt kann auch negativ wirken. Wenn zum Beispiel negative ausländische Einkünfte vorliegen, senkt dies den Steuersatz für das inländische Einkommen. In der Praxis ist der positive Progressionsvorbehalt (Steuersatzerhöhung) deutlich häufiger.
      </p>

      <h2>Tipps zur Steueroptimierung</h2>
      <ul>
        <li>Planen Sie Werbungskosten und Sonderausgaben gezielt in Jahre mit Lohnersatzleistungen ein.</li>
        <li>Prüfen Sie, ob eine Zusammenveranlagung mit dem Ehepartner günstiger ist.</li>
        <li>Reichen Sie die Steuererklärung rechtzeitig ein, um Nachzahlungen zu vermeiden.</li>
        <li>Nutzen Sie den Grundfreibetrag von 12.348 € (2026) optimal aus.</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Muss ich auf Elterngeld Steuern zahlen?",
      answer:
        "Das Elterngeld selbst ist steuerfrei. Es unterliegt jedoch dem Progressionsvorbehalt, d.h. es erhöht den Steuersatz für Ihr übriges Einkommen. Dies kann zu einer Steuernachzahlung bei der Einkommensteuererklärung führen.",
    },
    {
      question: "Wie wirkt sich ALG I auf meine Steuer aus?",
      answer:
        "ALG I ist steuerfrei, erhöht aber durch den Progressionsvorbehalt den Steuersatz auf Ihr übriges Einkommen. Bei ALG I über 410 € im Jahr sind Sie zur Abgabe einer Steuererklärung verpflichtet.",
    },
    {
      question: "Ab welchem Betrag muss ich eine Steuererklärung wegen Progressionsvorbehalt abgeben?",
      answer:
        "Wenn Sie im Kalenderjahr mehr als 410 € an Lohnersatzleistungen (ALG I, Kurzarbeitergeld, Elterngeld, Krankengeld etc.) erhalten haben, sind Sie zur Abgabe einer Einkommensteuererklärung verpflichtet.",
    },
    {
      question: "Unterliegt Bürgergeld dem Progressionsvorbehalt?",
      answer:
        "Nein, das Bürgergeld (ehemals ALG II / Hartz IV) unterliegt nicht dem Progressionsvorbehalt. Es ist eine steuerfreie Sozialleistung ohne Auswirkung auf den Steuersatz.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/elterngeld", title: "Elterngeld" },
    { href: "/lexikon/kurzarbeitergeld", title: "Kurzarbeitergeld" },
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Progressionsvorbehalt"
      description="Der Progressionsvorbehalt erhöht den Steuersatz für reguläres Einkommen durch steuerfreie Lohnersatzleistungen wie Elterngeld, ALG I oder Kurzarbeitergeld."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
