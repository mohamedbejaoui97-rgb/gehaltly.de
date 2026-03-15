/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Bürgergeld 2026 - Regelsätze, Anspruch & Vermögensfreibeträge",
  description:
    "Alles zum Bürgergeld 2026: Regelsätze (563 € für Alleinstehende), Vermögensfreibeträge, Karenzzeit, Zuverdienst und Anspruchsvoraussetzungen.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/buergergeld/",
  },
  openGraph: {
    title: "Bürgergeld 2026 - Regelsätze, Anspruch & Vermögensfreibeträge",
    description:
      "Alles zum Bürgergeld 2026: Regelsätze, Vermögensfreibeträge, Karenzzeit und Zuverdienst.",
    url: "https://gehaltly.de/lexikon/buergergeld/",
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

export default function BuergergeldPage() {
  const content = (
    <>
      <h2>Was ist das Bürgergeld?</h2>
      <p>
        Das Bürgergeld hat zum 1. Januar 2023 das bisherige Arbeitslosengeld II (umgangssprachlich "Hartz IV") abgelöst. Es ist die Grundsicherung für erwerbsfähige Leistungsberechtigte in Deutschland und soll das Existenzminimum sichern. Das Bürgergeld wird vom Jobcenter ausgezahlt und umfasst neben dem Regelsatz auch die Kosten für Unterkunft und Heizung. Aktuelle Informationen finden Sie auf der Seite der <a href="https://www.bundesregierung.de/breg-de/suche/buergergeld-2125004" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">Bundesregierung</a>.
      </p>

      <h2>Regelsätze 2026</h2>
      <p>
        Die Regelsätze des Bürgergelds werden jährlich angepasst. Für 2026 gelten folgende monatliche Beträge:
      </p>
      <ul>
        <li><strong>Regelbedarfsstufe 1</strong> (Alleinstehende/Alleinerziehende): <strong>563 €</strong></li>
        <li><strong>Regelbedarfsstufe 2</strong> (Paare, je Partner): <strong>506 €</strong></li>
        <li><strong>Regelbedarfsstufe 3</strong> (Erwachsene in Einrichtungen): <strong>451 €</strong></li>
        <li><strong>Regelbedarfsstufe 4</strong> (Jugendliche 14-17 Jahre): <strong>471 €</strong></li>
        <li><strong>Regelbedarfsstufe 5</strong> (Kinder 6-13 Jahre): <strong>390 €</strong></li>
        <li><strong>Regelbedarfsstufe 6</strong> (Kinder 0-5 Jahre): <strong>357 €</strong></li>
      </ul>
      <p>
        Zusätzlich werden die tatsächlichen Kosten für Unterkunft und Heizung (KdU) übernommen, sofern sie angemessen sind.
      </p>

      <h2>Wer hat Anspruch auf Bürgergeld?</h2>
      <p>
        Anspruch auf Bürgergeld haben Personen, die:
      </p>
      <ul>
        <li>Zwischen 15 und dem Renteneintrittsalter sind</li>
        <li>Erwerbsfähig sind (mindestens 3 Stunden täglich arbeiten können)</li>
        <li>Hilfebedürftig sind (Einkommen und Vermögen reichen nicht zur Deckung des Lebensunterhalts)</li>
        <li>Ihren gewöhnlichen Aufenthalt in Deutschland haben</li>
      </ul>
      <p>
        Nicht erwerbsfähige Angehörige in einer Bedarfsgemeinschaft erhalten Sozialgeld.
      </p>

      <h2>Vermögensfreibeträge und Karenzzeit</h2>
      <p>
        In den ersten 12 Monaten des Bürgergeldbezugs gilt eine <strong>Karenzzeit</strong>. Während dieser Zeit wird Vermögen bis zu <strong>40.000 €</strong> für die erste Person und <strong>15.000 €</strong> für jede weitere Person in der Bedarfsgemeinschaft nicht angerechnet. Die Kosten der Unterkunft werden in angemessener Höhe vollständig übernommen.
      </p>
      <p>
        Nach der Karenzzeit gilt ein allgemeiner Vermögensfreibetrag von <strong>15.000 €</strong> pro Person. Selbst genutztes Wohneigentum (bis 140 m² bei Haus bzw. 130 m² bei Eigentumswohnung) wird nicht als Vermögen angerechnet.
      </p>

      <h2>Zuverdienst beim Bürgergeld</h2>
      <p>
        Bürgergeldempfänger dürfen hinzuverdienen. Die Freibeträge staffeln sich wie folgt:
      </p>
      <ul>
        <li><strong>0 - 100 €</strong>: Grundfreibetrag, komplett anrechnungsfrei</li>
        <li><strong>100 - 520 €</strong>: 20 % bleiben anrechnungsfrei</li>
        <li><strong>520 - 1.000 €</strong>: 30 % bleiben anrechnungsfrei</li>
        <li><strong>1.000 - 1.200 €</strong> (bzw. 1.500 € mit Kind): 10 % bleiben anrechnungsfrei</li>
      </ul>
      <p>
        Einkommen über diesen Grenzen wird vollständig auf das Bürgergeld angerechnet.
      </p>

      <h2>Unterschied zum früheren Hartz IV</h2>
      <p>
        Das Bürgergeld unterscheidet sich von Hartz IV durch höhere Regelsätze, großzügigere Vermögensfreibeträge in der Karenzzeit, eine stärkere Fokussierung auf Weiterbildung und Qualifizierung sowie eine mildere Sanktionspraxis. Die Mitwirkungspflichten bestehen weiterhin, werden aber kooperativer umgesetzt.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist das Bürgergeld 2026 für eine Einzelperson?",
      answer:
        "Der Regelsatz für Alleinstehende beträgt 2026 monatlich 563 €. Zusätzlich werden die angemessenen Kosten für Unterkunft und Heizung übernommen.",
    },
    {
      question: "Was ist der Unterschied zwischen Bürgergeld und Hartz IV?",
      answer:
        "Das Bürgergeld hat Hartz IV (ALG II) zum 1. Januar 2023 abgelöst. Es bietet höhere Regelsätze, großzügigere Vermögensfreibeträge in der Karenzzeit, stärkere Weiterbildungsförderung und eine kooperativere Sanktionspraxis.",
    },
    {
      question: "Wie viel darf ich beim Bürgergeld dazuverdienen?",
      answer:
        "Die ersten 100 € monatlich sind komplett anrechnungsfrei. Darüber hinaus gelten gestaffelte Freibeträge: 20 % von 100-520 €, 30 % von 520-1.000 € und 10 % von 1.000-1.200 € (bzw. 1.500 € mit Kind).",
    },
    {
      question: "Wird mein Vermögen beim Bürgergeld angerechnet?",
      answer:
        "In der 12-monatigen Karenzzeit gilt ein Freibetrag von 40.000 € (erste Person) bzw. 15.000 € (weitere Personen). Danach beträgt der Freibetrag 15.000 € pro Person. Angemessenes selbst genutztes Wohneigentum bleibt geschützt.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/minijob", title: "Minijob" },
    { href: "/lexikon/midijob", title: "Midijob" },
    { href: "/lexikon/wohngeld", title: "Wohngeld" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Bürgergeld"
      description="Das Bürgergeld ist die Grundsicherung für erwerbsfähige Leistungsberechtigte in Deutschland und hat 2023 das frühere Hartz IV abgelöst."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
