/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import LexikonTemplate from "@/components/content/LexikonTemplate";

export const metadata: Metadata = {
  title: "Werbungskosten 2026 - Pauschbetrag 1.230 €, Homeoffice & Fahrtkosten",
  description:
    "Werbungskosten 2026: Arbeitnehmer-Pauschbetrag 1.230 €, Homeoffice-Pauschale 6 €/Tag, Fahrtkosten, Arbeitsmittel und Fortbildung. Steuern sparen als Arbeitnehmer.",
  alternates: {
    canonical: "https://gehaltly.de/lexikon/werbungskosten/",
  },
  openGraph: {
    title: "Werbungskosten 2026 - Pauschbetrag 1.230 €, Homeoffice & Fahrtkosten",
    description:
      "Werbungskosten 2026: Pauschbetrag, Homeoffice-Pauschale, Fahrtkosten und mehr.",
    url: "https://gehaltly.de/lexikon/werbungskosten/",
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

export default function WerbungskostenPage() {
  const content = (
    <>
      <h2>Was sind Werbungskosten?</h2>
      <p>
        Werbungskosten sind Aufwendungen, die zur Erwerbung, Sicherung und Erhaltung der Einnahmen dienen (§9 EStG). Für Arbeitnehmer sind dies alle Ausgaben, die im Zusammenhang mit der beruflichen Tätigkeit stehen. Werbungskosten mindern das zu versteuernde Einkommen und führen damit zu einer niedrigeren Steuerlast. Die gesetzliche Grundlage ist im <a href="https://www.gesetze-im-internet.de/estg/__9.html" target="_blank" rel="noopener noreferrer" className="text-[#DD0000] hover:underline">§9 EStG</a> geregelt.
      </p>

      <h2>Arbeitnehmer-Pauschbetrag 2026</h2>
      <p>
        Allen Arbeitnehmern wird automatisch ein <strong>Arbeitnehmer-Pauschbetrag von 1.230 €</strong> pro Jahr gewährt, ohne dass Nachweise erbracht werden müssen. Dieser wird bereits beim monatlichen Lohnsteuerabzug berücksichtigt. Eine Steuererklärung lohnt sich erst, wenn die tatsächlichen Werbungskosten diesen Pauschbetrag überschreiten.
      </p>

      <h2>Typische Werbungskosten im Überblick</h2>
      <p>
        Die wichtigsten Werbungskosten für Arbeitnehmer:
      </p>

      <h2>Fahrtkosten (Pendlerpauschale)</h2>
      <ul>
        <li><strong>0,30 €/km</strong> für die ersten 20 km (einfache Entfernung)</li>
        <li><strong>0,38 €/km</strong> ab dem 21. Kilometer</li>
        <li>Gilt für alle Verkehrsmittel (Auto, Fahrrad, ÖPNV)</li>
        <li>Beispiel: 30 km × 220 Arbeitstage = (220 × 20 × 0,30) + (220 × 10 × 0,38) = 1.320 + 836 = <strong>2.156 €</strong></li>
      </ul>

      <h2>Homeoffice-Pauschale</h2>
      <ul>
        <li><strong>6 € pro Homeoffice-Tag</strong>, maximal 210 Tage pro Jahr</li>
        <li>Höchstbetrag: <strong>1.260 € pro Jahr</strong></li>
        <li>Kein separates Arbeitszimmer erforderlich</li>
        <li>An Homeoffice-Tagen keine Pendlerpauschale möglich</li>
      </ul>

      <h2>Arbeitsmittel</h2>
      <ul>
        <li><strong>Computer, Laptop, Tablet</strong>: Vollständiger Abzug im Anschaffungsjahr (seit 2021 sofortige Abschreibung für digitale Wirtschaftsgüter)</li>
        <li><strong>Büromöbel</strong>: Schreibtisch, Bürostuhl (bei überwiegend beruflicher Nutzung)</li>
        <li><strong>Fachliteratur</strong>: Bücher, Fachzeitschriften, Online-Abonnements</li>
        <li><strong>Büromaterial</strong>: Stifte, Papier, Druckerpatronen</li>
        <li>Geringwertige Wirtschaftsgüter bis 800 € netto können sofort abgeschrieben werden</li>
      </ul>

      <h2>Fortbildung und Weiterbildung</h2>
      <ul>
        <li><strong>Kursgebühren</strong>: Voll abzugsfähig bei beruflichem Zusammenhang</li>
        <li><strong>Reisekosten</strong>: Fahrt, Übernachtung, Verpflegungsmehraufwand</li>
        <li><strong>Lernmaterial</strong>: Bücher, Software, Online-Kurse</li>
        <li><strong>Prüfungsgebühren</strong></li>
      </ul>

      <h2>Weitere absetzbare Werbungskosten</h2>
      <ul>
        <li><strong>Bewerbungskosten</strong>: Porto, Bewerbungsfotos, Fahrten zum Vorstellungsgespräch</li>
        <li><strong>Berufskleidung</strong>: Typische Berufskleidung (Arztkittel, Sicherheitsschuhe), nicht Alltagskleidung</li>
        <li><strong>Kontoführungsgebühren</strong>: Pauschal 16 € ohne Nachweis</li>
        <li><strong>Gewerkschaftsbeiträge</strong>: Voll abzugsfähig</li>
        <li><strong>Doppelte Haushaltsführung</strong>: Miete am Arbeitsort (max. 1.000 €/Monat), Familienheimfahrten</li>
        <li><strong>Umzugskosten</strong>: Bei berufsbedingtem Umzug (Umzugskostenpauschale 2026: 886 €)</li>
      </ul>

      <h2>Werbungskosten in der Steuererklärung</h2>
      <p>
        Werbungskosten werden in der <strong>Anlage N</strong> der Steuererklärung eingetragen. Es lohnt sich, alle Belege zu sammeln und aufzubewahren. Erst wenn die Summe der tatsächlichen Werbungskosten den Pauschbetrag von 1.230 € übersteigt, profitieren Sie von der Einzelaufstellung. Die Steuerersparnis hängt vom persönlichen Steuersatz ab: Bei einem Grenzsteuersatz von 35 % führen 2.000 € Werbungskosten (über den Pauschbetrag hinaus) zu einer Ersparnis von ca. 270 €.
      </p>
    </>
  );

  const faq = [
    {
      question: "Wie hoch ist der Arbeitnehmer-Pauschbetrag 2026?",
      answer:
        "Der Arbeitnehmer-Pauschbetrag (Werbungskostenpauschale) beträgt 2026 insgesamt 1.230 € pro Jahr. Er wird automatisch beim Lohnsteuerabzug berücksichtigt, ohne dass ein Nachweis erforderlich ist.",
    },
    {
      question: "Kann ich Computer und Laptop als Werbungskosten absetzen?",
      answer:
        "Ja, seit 2021 können Computer, Laptops und andere digitale Wirtschaftsgüter im Anschaffungsjahr vollständig abgeschrieben werden (sofortige Abschreibung). Bei gemischter Nutzung wird der berufliche Anteil geschätzt, oft 50 %.",
    },
    {
      question: "Wie funktioniert die Homeoffice-Pauschale?",
      answer:
        "Die Homeoffice-Pauschale beträgt 6 € pro Tag, an dem Sie überwiegend von zu Hause arbeiten. Sie ist auf maximal 210 Tage (1.260 €) pro Jahr begrenzt. An Homeoffice-Tagen kann die Pendlerpauschale nicht zusätzlich geltend gemacht werden.",
    },
    {
      question: "Ab wann lohnt sich eine Steuererklärung wegen Werbungskosten?",
      answer:
        "Eine Steuererklärung lohnt sich, wenn Ihre tatsächlichen Werbungskosten den Pauschbetrag von 1.230 € übersteigen. Bereits mit 25 km Arbeitsweg und 220 Arbeitstagen kommen Sie auf Fahrtkosten von über 1.500 €.",
    },
    {
      question: "Welche Werbungskosten kann ich ohne Nachweis absetzen?",
      answer:
        "Ohne Nachweis werden der Arbeitnehmer-Pauschbetrag (1.230 €), Kontoführungsgebühren (16 €) und Telefonkosten (pauschal 20 % der Kosten, max. 20 €/Monat) akzeptiert. Für höhere Beträge sind Belege erforderlich.",
    },
  ];

  const relatedLinks = [
    { href: "/lexikon/pendlerpauschale", title: "Pendlerpauschale" },
    { href: "/lexikon/sonderausgaben", title: "Sonderausgaben" },
    { href: "/lexikon/lohnsteuer", title: "Lohnsteuer" },
    { href: "/gehaltsrechner", title: "Gehaltsrechner 2026" },
  ];

  return (
    <LexikonTemplate
      title="Werbungskosten"
      description="Werbungskosten sind berufsbedingte Ausgaben von Arbeitnehmern, die das zu versteuernde Einkommen mindern und so die Steuerlast senken."
      content={content}
      faq={faq}
      relatedLinks={relatedLinks}
    />
  );
}
