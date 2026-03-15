/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Ehegattensplitting 2026 - Berechnung, Vorteile & Zusammenveranlagung",
  description:
    "Ehegattensplitting 2026: Wie funktioniert es, wann lohnt es sich, Zusammenveranlagung vs. Einzelveranlagung. Berechnung und Splittingvorteil erklärt.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/ehegattensplitting/",
  },
  openGraph: {
    title: "Ehegattensplitting 2026 - Berechnung, Vorteile & Zusammenveranlagung",
    description:
      "Ehegattensplitting 2026: Funktionsweise, Zusammenveranlagung und wann sich Splitting lohnt.",
    url: "https://gehaltly.de/lexikon/ehegattensplitting/",
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

export default function EhegattensplittingPage() {
  const content = (
    <>
      <h2>Was ist das Ehegattensplitting?</h2>
      <p>
        Das Ehegattensplitting ist ein steuerliches Veranlagungsverfahren für Ehepaare und eingetragene Lebenspartnerschaften in Deutschland. Dabei wird das gemeinsame zu versteuernde Einkommen beider Partner halbiert, die Einkommensteuer auf die Hälfte berechnet und anschließend verdoppelt. Dies führt aufgrund der progressiven Steuertarife zu einem Steuervorteil, wenn die Einkommen der Partner unterschiedlich hoch sind. Die Rechtsgrundlage findet sich in <a href="https://www.gesetze-im-internet.de/estg/__32a.html" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">§32a Abs. 5 EStG</a>.
      </p>

      <h2>Wie funktioniert das Ehegattensplitting?</h2>
      <p>
        Die Berechnung des Ehegattensplittings erfolgt in drei Schritten:
      </p>
      <ul>
        <li><strong>Schritt 1</strong>: Die zu versteuernden Einkommen beider Partner werden addiert.</li>
        <li><strong>Schritt 2</strong>: Die Summe wird durch zwei geteilt (gesplittet).</li>
        <li><strong>Schritt 3</strong>: Auf dieses halbierte Einkommen wird der Einkommensteuertarif angewendet und das Ergebnis verdoppelt.</li>
      </ul>
      <p>
        <strong>Beispiel 2026:</strong> Partner A verdient 60.000 € und Partner B 20.000 € (zusammen 80.000 €). Beim Splitting wird die Steuer auf 40.000 € (= 80.000 ÷ 2) berechnet und verdoppelt. Da der Steuersatz bei 40.000 € deutlich niedriger ist als bei 60.000 €, ergibt sich ein Splittingvorteil.
      </p>

      <h2>Wann lohnt sich das Ehegattensplitting?</h2>
      <p>
        Der Splittingvorteil ist umso größer, je unterschiedlicher die Einkommen der Ehepartner sind:
      </p>
      <ul>
        <li><strong>Maximaler Vorteil</strong>: Wenn ein Partner das gesamte Einkommen erzielt und der andere kein Einkommen hat (Alleinverdiener-Ehe)</li>
        <li><strong>Kein Vorteil</strong>: Wenn beide Partner exakt gleich viel verdienen</li>
        <li><strong>Großer Vorteil</strong>: Bei Einkommensverhältnissen von z.B. 70:30 oder 80:20</li>
      </ul>
      <p>
        Der maximale Splittingvorteil liegt 2026 bei ca. <strong>20.000 €</strong> (bei sehr hohen Einkommen mit Alleinverdiener-Konstellation). Bei typischen Mittelschicht-Einkommen beträgt der Vorteil meist zwischen 1.000 € und 8.000 €.
      </p>

      <h2>Zusammenveranlagung vs. Einzelveranlagung</h2>
      <p>
        Ehepaare können zwischen zwei Veranlagungsformen wählen:
      </p>
      <ul>
        <li><strong>Zusammenveranlagung (Splittingtarif)</strong>: Gemeinsame Steuererklärung, Ehegattensplitting wird angewendet. In den meisten Fällen die günstigere Variante.</li>
        <li><strong>Einzelveranlagung (Grundtarif)</strong>: Getrennte Steuererklärungen, jeder Partner wird einzeln besteuert. Kann in Ausnahmefällen günstiger sein.</li>
      </ul>
      <p>
        Die Einzelveranlagung kann vorteilhaft sein bei:
      </p>
      <ul>
        <li>Einkünften mit Progressionsvorbehalt (z.B. Elterngeld, ALG I) bei einem Partner</li>
        <li>Hohen außergewöhnlichen Belastungen bei einem Partner (wegen der zumutbaren Eigenbelastung)</li>
        <li>Abfindungen bei einem Partner (Fünftelregelung)</li>
        <li>Verlusten bei einem Partner (Verlustvortrag)</li>
      </ul>

      <h2>Steuerklassenwahl bei Ehepaaren</h2>
      <p>
        Die Steuerklassenkombination beeinflusst nur den monatlichen Lohnsteuerabzug, nicht die Jahressteuer:
      </p>
      <ul>
        <li><strong>Steuerklasse 3/5</strong>: Vorteilhaft bei großem Einkommensunterschied (3 für den Besserverdienenden)</li>
        <li><strong>Steuerklasse 4/4</strong>: Vorteilhaft bei ähnlichen Einkommen</li>
        <li><strong>Steuerklasse 4/4 mit Faktor</strong>: Genaueste Verteilung des Splittingvorteils auf die monatliche Lohnsteuer</li>
      </ul>
      <p>
        Unabhängig von der Steuerklassenwahl ergibt die Jahressteuererklärung immer das gleiche Ergebnis bei Zusammenveranlagung.
      </p>

      <h2>Kritik am Ehegattensplitting</h2>
      <p>
        Das Ehegattensplitting wird regelmäßig kritisiert, weil es Einverdiener-Ehen bevorzugt und einen negativen Erwerbsanreiz für den geringer verdienenden Partner (oft Frauen) schaffen kann. Politische Diskussionen über eine Reform (z.B. Individualbesteuerung oder Realsplitting) werden seit Jahren geführt, bisher wurde das System jedoch beibehalten.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie groß ist der Splittingvorteil bei Ehepaaren?",
      answer:
        "Der Splittingvorteil hängt vom Einkommensunterschied ab. Bei typischen Mittelschicht-Einkommen liegt er zwischen 1.000 € und 8.000 € pro Jahr. Der maximale Vorteil von ca. 20.000 € wird bei sehr hohen Alleinverdiener-Einkommen erreicht. Bei gleich hohen Einkommen beider Partner gibt es keinen Vorteil.",
    },
    {
      question: "Können auch unverheiratete Paare das Splitting nutzen?",
      answer:
        "Nein, das Ehegattensplitting steht nur Ehepaaren und eingetragenen Lebenspartnerschaften zur Verfügung. Unverheiratete Paare werden steuerlich als Einzelpersonen behandelt, auch wenn sie zusammenleben.",
    },
    {
      question: "Welche Steuerklassenkombination ist für Ehepaare am besten?",
      answer:
        "Bei großem Einkommensunterschied empfiehlt sich 3/5 (3 für den Besserverdienenden), bei ähnlichen Einkommen 4/4. Die Kombination 4/4 mit Faktor verteilt den Splittingvorteil am genauesten. Die Jahressteuer ist bei Zusammenveranlagung unabhängig von der Steuerklasse immer gleich.",
    },
    {
      question: "Wann ist die Einzelveranlagung günstiger als die Zusammenveranlagung?",
      answer:
        "Die Einzelveranlagung kann günstiger sein, wenn ein Partner Einkünfte mit Progressionsvorbehalt hat (z.B. Elterngeld, ALG I), bei hohen außergewöhnlichen Belastungen eines Partners, bei Abfindungen (Fünftelregelung) oder bei Verlusten, die vorgetragen werden sollen.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/steuerklasse-3", title: "Steuerklasse 3" },
    { href: "/lexikon/steuerklasse-5", title: "Steuerklasse 5" },
    { href: "/lexikon/progressionsvorbehalt", title: "Progressionsvorbehalt" },
    { href: "/rechner/steuerklassenrechner", title: "Steuerklassenrechner" },
  ];

  return (
    <LexikonTemplate
      title="Ehegattensplitting"
      description="Das Ehegattensplitting ist ein steuerliches Verfahren, bei dem das gemeinsame Einkommen von Ehepaaren halbiert und zum günstigeren Splittingtarif besteuert wird."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
