import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/content/FAQSection";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

interface LexikonTemplateProps {
  title: string;
  description: string;
  content: React.ReactNode;
  faq?: FAQ[];
  relatedLinks?: { href: string; title: string }[];
  datePublished?: string;
  dateModified?: string;
}

export default function LexikonTemplate({
  title,
  description,
  content,
  faq,
  relatedLinks,
  datePublished = '2026-01-15',
  dateModified = '2026-03-01',
}: LexikonTemplateProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            image: "https://gehaltly.de/logo.png",
            datePublished: datePublished,
            dateModified: dateModified,
            author: {
              "@type": "Organization",
              name: "gehaltly.de",
              url: "https://gehaltly.de",
            },
            publisher: {
              "@type": "Organization",
              name: "gehaltly.de",
              url: "https://gehaltly.de",
              logo: {
                "@type": "ImageObject",
                url: "https://gehaltly.de/logo.png",
              },
            },
          }),
        }}
      />
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: 'Lexikon', href: '/lexikon' }, { label: title }]} />
      </div>

      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-8">
              <span>Von <strong>gehaltly.de</strong> Redaktion</span>
              <span>|</span>
              <span>Aktualisiert: {new Date(dateModified).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              {content}
            </div>

            {relatedLinks && relatedLinks.length > 0 && (
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Verwandte Themen</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-[#DD0000] hover:underline"
                    >
                      → {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>Hinweis:</strong> Die Informationen in diesem Lexikon dienen nur zu Informationszwecken und stellen keine Steuer- oder Rechtsberatung dar. Für verbindliche Auskünfte wenden Sie sich bitte an einen Steuerberater oder Ihr zuständiges Finanzamt.
              </p>
            </div>
          </div>
        </div>
      </article>

      {faq && faq.length > 0 && (
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-3xl mx-auto">
            <FAQSection faqs={faq} />
          </div>
        </div>
      )}
    </>
  );
}
