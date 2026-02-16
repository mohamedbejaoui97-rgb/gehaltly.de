/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Kinderfreibetrag 2026 - Höhe, Berechnung & Kindergeld",
  description:
    "Was ist der Kinderfreibetrag? Wie hoch ist er 2026 und was ist günstiger - Kindergeld oder Kinderfreibetrag? Alle Informationen zur Günstigerprüfung.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/kinderfreibetrag/",
  },
  openGraph: {
    title: "Kinderfreibetrag 2026 - Höhe, Berechnung & Kindergeld",
    description:
      "Was ist der Kinderfreibetrag? Wie hoch ist er 2026 und was ist günstiger - Kindergeld oder Kinderfreibetrag? Alle Informationen zur Günstigerprüfung.",
    url: "https://gehaltly.de/lexikon/kinderfreibetrag/",
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

export default function KinderfreibetragPage() {
  const content = (
    <>
      <h2>Was ist der Kinderfreibetrag?</h2>
      <p>
        Der Kinderfreibetrag ist ein steuerlicher Freibetrag, der das Existenzminimum eines Kindes von der Einkommensteuer freistellt. Er wird bei der Berechnung der Einkommensteuer vom zu versteuernden Einkommen abgezogen und reduziert somit die Steuerlast der Eltern.
      </p>
      <p>
        Der Kinderfreibetrag besteht aus zwei Komponenten:
      </p>
      <ul>
        <li><strong>Kinderfreibetrag:</strong> Für das sächliche Existenzminimum des Kindes (Nahrung, Kleidung, Wohnung)</li>
        <li><strong>Freibetrag für Betreuung, Erziehung und Ausbildung (BEA-Freibetrag):</strong> Für Betreuungs- und Erziehungsbedarf</li>
      </ul>

      <h2>Höhe des Kinderfreibetrags 2026</h2>
      <p>
        Für das Jahr 2026 beträgt der Kinderfreibetrag insgesamt <strong>9.756 Euro</strong> pro Kind (für beide Elternteile zusammen). Pro Elternteil sind das 4.878 Euro.
      </p>
      <p>
        Die Aufteilung im Detail:
      </p>
      <ul>
        <li><strong>Sächlicher Kinderfreibetrag:</strong> 3.414 € pro Elternteil (6.828 € zusammen)</li>
        <li><strong>BEA-Freibetrag:</strong> 1.464 € pro Elternteil (2.928 € zusammen)</li>
        <li><strong>Gesamt pro Elternteil:</strong> 4.878 €</li>
        <li><strong>Gesamt pro Kind (beide Elternteile):</strong> 9.756 €</li>
      </ul>
      <p>
        Entwicklung der vergangenen Jahre (Gesamt pro Kind, beide Elternteile):
      </p>
      <ul>
        <li>2024: 9.540 € (4.770 € pro Elternteil)</li>
        <li>2025: 9.600 € (4.800 € pro Elternteil)</li>
        <li>2026: 9.756 € (4.878 € pro Elternteil)</li>
      </ul>

      <h2>Kindergeld oder Kinderfreibetrag - Was ist besser?</h2>
      <p>
        Sie können nicht beides gleichzeitig erhalten. Das Finanzamt führt automatisch eine <strong>Günstigerprüfung</strong> durch und wendet die für Sie vorteilhaftere Variante an:
      </p>
      <ul>
        <li><strong>Kindergeld 2026:</strong> 250 € pro Monat und Kind (3.000 € pro Jahr)</li>
        <li><strong>Kinderfreibetrag 2026:</strong> 9.756 € pro Jahr und Kind (beide Elternteile)</li>
      </ul>
      <p>
        Die Günstigerprüfung funktioniert so:
      </p>
      <ul>
        <li>Das Kindergeld wird während des Jahres monatlich ausgezahlt</li>
        <li>Bei der Steuererklärung prüft das Finanzamt, ob der Kinderfreibetrag zu einer höheren Steuerersparnis führt</li>
        <li>Ist der Kinderfreibetrag günstiger, wird das erhaltene Kindergeld mit der Steuererstattung verrechnet</li>
        <li>Sie erhalten dann die Differenz als zusätzliche Steuererstattung</li>
      </ul>

      <h2>Ab welchem Einkommen lohnt sich der Kinderfreibetrag?</h2>
      <p>
        Der Kinderfreibetrag ist besonders für Besserverdienende vorteilhaft. Als Faustregel gilt:
      </p>
      <ul>
        <li><strong>Bis ca. 70.000 € zu versteuerndes Einkommen:</strong> Kindergeld ist meist günstiger</li>
        <li><strong>Ab ca. 70.000 € zu versteuerndes Einkommen:</strong> Kinderfreibetrag wird vorteilhafter</li>
        <li><strong>Grenzsteuersatz entscheidend:</strong> Je höher Ihr Steuersatz, desto größer der Vorteil des Kinderfreibetrags</li>
      </ul>

      <h2>Beispielrechnungen Kinderfreibetrag 2026</h2>
      <p>
        <strong>Beispiel 1 - Geringes Einkommen:</strong>
      </p>
      <ul>
        <li>Zu versteuerndes Einkommen: 40.000 €</li>
        <li>Grenzsteuersatz: ca. 25%</li>
        <li>Steuerersparnis durch Kinderfreibetrag: 9.756 € × 25% = ca. 2.439 €</li>
        <li>Kindergeld: 3.000 €</li>
        <li><strong>Ergebnis:</strong> Kindergeld ist günstiger (keine zusätzliche Erstattung)</li>
      </ul>

      <p>
        <strong>Beispiel 2 - Mittleres Einkommen:</strong>
      </p>
      <ul>
        <li>Zu versteuerndes Einkommen: 75.000 €</li>
        <li>Grenzsteuersatz: ca. 35%</li>
        <li>Steuerersparnis durch Kinderfreibetrag: 9.756 € × 35% = ca. 3.415 €</li>
        <li>Kindergeld: 3.000 €</li>
        <li><strong>Ergebnis:</strong> Kinderfreibetrag ist günstiger (zusätzliche Erstattung ca. 415 €)</li>
      </ul>

      <p>
        <strong>Beispiel 3 - Hohes Einkommen:</strong>
      </p>
      <ul>
        <li>Zu versteuerndes Einkommen: 120.000 €</li>
        <li>Grenzsteuersatz: 42%</li>
        <li>Steuerersparnis durch Kinderfreibetrag: 9.756 € × 42% = ca. 4.098 €</li>
        <li>Kindergeld: 3.000 €</li>
        <li><strong>Ergebnis:</strong> Kinderfreibetrag ist deutlich günstiger (zusätzliche Erstattung ca. 1.098 €)</li>
      </ul>

      <h2>Wer hat Anspruch auf den Kinderfreibetrag?</h2>
      <p>
        Der Kinderfreibetrag steht Ihnen zu, wenn Sie für ein Kind Anspruch auf Kindergeld haben oder hätten. Dies betrifft:
      </p>
      <ul>
        <li><strong>Leibliche Kinder</strong> und Adoptivkinder</li>
        <li><strong>Pflegekinder</strong> unter bestimmten Voraussetzungen</li>
        <li><strong>Stiefkinder</strong> des Ehepartners</li>
        <li><strong>Enkelkinder,</strong> die im Haushalt der Großeltern leben</li>
      </ul>
      <p>
        Altersgrenzen:
      </p>
      <ul>
        <li>Kinder unter 18 Jahren: Unbegrenzt</li>
        <li>Kinder zwischen 18 und 25 Jahren: Bei Ausbildung, Studium oder Freiwilligendienst</li>
        <li>Kinder über 25 Jahren: Nur bei Behinderung, die vor dem 25. Lebensjahr eingetreten ist</li>
      </ul>

      <h2>Kinderfreibetrag bei getrennten Eltern</h2>
      <p>
        Bei getrennt lebenden oder geschiedenen Eltern wird der Kinderfreibetrag grundsätzlich hälftig aufgeteilt:
      </p>
      <ul>
        <li>Jeder Elternteil erhält 4.878 € Kinderfreibetrag</li>
        <li>Auf Antrag kann der Freibetrag komplett auf einen Elternteil übertragen werden</li>
        <li>Voraussetzung: Der andere Elternteil zahlt weniger als 75% des Unterhalts oder die Unterhaltspflicht wird nicht erfüllt</li>
        <li>Bei alleinigem Sorgerecht kann der volle Freibetrag beantragt werden</li>
      </ul>

      <h2>So beantragen Sie den Kinderfreibetrag</h2>
      <p>
        Der Kinderfreibetrag wird automatisch bei der Einkommensteuererklärung berücksichtigt, wenn Sie Kinder in der Anlage Kind angeben. Sie müssen nichts extra beantragen:
      </p>
      <ul>
        <li><strong>Anlage Kind ausfüllen:</strong> Für jedes Kind eine separate Anlage</li>
        <li><strong>Steuer-Identifikationsnummer des Kindes angeben</strong></li>
        <li><strong>Günstigerprüfung erfolgt automatisch:</strong> Das Finanzamt berechnet, was vorteilhafter ist</li>
        <li><strong>Kindergeld wird angerechnet:</strong> Bei der Berechnung berücksichtigt</li>
      </ul>
      <p>
        Die Kinderfreibeträge werden auch auf der Lohnsteuerkarte eingetragen. Dies führt zu einer geringeren monatlichen Lohnsteuer, hat aber keinen Einfluss auf die Günstigerprüfung am Jahresende.
      </p>

      <h2>Kinderfreibetrag und weitere Freibeträge</h2>
      <p>
        Der Kinderfreibetrag kann zusätzlich zu anderen Freibeträgen genutzt werden:
      </p>
      <ul>
        <li><strong>Grundfreibetrag:</strong> Gilt zusätzlich für die eigene Person (12.348 € in 2026)</li>
        <li><strong>Ausbildungsfreibetrag:</strong> 1.200 € für volljährige Kinder in Ausbildung, die auswärts wohnen</li>
        <li><strong>Behinderten-Pauschbetrag:</strong> Bei Kindern mit Behinderung zusätzlich möglich</li>
      </ul>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist der Kinderfreibetrag 2026?",
      answer:
        "Der Kinderfreibetrag beträgt 2026 insgesamt 9.756 Euro pro Kind (beide Elternteile zusammen) bzw. 4.878 Euro pro Elternteil. Er setzt sich zusammen aus dem sächlichen Kinderfreibetrag (6.828 €) und dem BEA-Freibetrag für Betreuung und Erziehung (2.928 €).",
    },
    {
      question: "Was ist besser - Kindergeld oder Kinderfreibetrag?",
      answer:
        "Das Finanzamt prüft automatisch bei der Steuererklärung, was für Sie günstiger ist (Günstigerprüfung). Als Faustregel gilt: Bis etwa 70.000 Euro zu versteuerndem Einkommen ist das Kindergeld meist vorteilhafter. Ab diesem Betrag lohnt sich der Kinderfreibetrag zunehmend, da die Steuerersparnis das Kindergeld übersteigt. Je höher Ihr Steuersatz, desto größer der Vorteil.",
    },
    {
      question: "Muss ich mich zwischen Kindergeld und Kinderfreibetrag entscheiden?",
      answer:
        "Nein, Sie müssen sich nicht entscheiden. Sie beantragen das Kindergeld und erhalten es monatlich ausgezahlt. Bei der Steuererklärung führt das Finanzamt automatisch eine Günstigerprüfung durch. Ist der Kinderfreibetrag vorteilhafter, wird das erhaltene Kindergeld mit der Steuererstattung verrechnet und Sie erhalten die Differenz zusätzlich zurück.",
    },
    {
      question: "Wie wird der Kinderfreibetrag bei getrennten Eltern aufgeteilt?",
      answer:
        "Bei getrennten Eltern wird der Kinderfreibetrag grundsätzlich hälftig aufgeteilt - jeder Elternteil erhält 4.878 Euro. Auf Antrag kann der Freibetrag komplett auf einen Elternteil übertragen werden, wenn der andere Elternteil weniger als 75% des Unterhalts zahlt oder die Unterhaltspflicht nicht erfüllt.",
    },
    {
      question: "Bis zu welchem Alter gilt der Kinderfreibetrag?",
      answer:
        "Der Kinderfreibetrag gilt unbegrenzt für Kinder unter 18 Jahren. Für Kinder zwischen 18 und 25 Jahren besteht Anspruch während Ausbildung, Studium oder Freiwilligendienst. Bei Kindern mit Behinderung, die vor dem 25. Lebensjahr eingetreten ist, gilt der Freibetrag auch über das 25. Lebensjahr hinaus.",
    },
    {
      question: "Muss ich den Kinderfreibetrag extra beantragen?",
      answer:
        "Nein, der Kinderfreibetrag wird automatisch bei der Einkommensteuererklärung berücksichtigt, wenn Sie die Anlage Kind ausfüllen. Die Günstigerprüfung erfolgt ebenfalls automatisch. Sie müssen lediglich die Steuer-Identifikationsnummer Ihres Kindes angeben. Die Eintragung auf der Lohnsteuerkarte ist optional und reduziert die monatliche Lohnsteuer.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/grundfreibetrag", title: "Grundfreibetrag" },
    { href: "/lexikon/steuerfreibetrag", title: "Steuerfreibetrag" },
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/gehaltsrechner", title: "Brutto-Netto-Rechner" },
  ];

  return (
    <LexikonTemplate
      title="Kinderfreibetrag"
      description="Der Kinderfreibetrag stellt das Existenzminimum eines Kindes steuerfrei. 2026 beträgt er 9.756 Euro pro Kind (beide Elternteile zusammen)."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
