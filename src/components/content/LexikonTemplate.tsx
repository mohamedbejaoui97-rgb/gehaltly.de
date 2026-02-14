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
}

export default function LexikonTemplate({
  title,
  description,
  content,
  faq,
  relatedLinks,
}: LexikonTemplateProps) {
  return (
    <>
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: 'Lexikon', href: '/lexikon' }, { label: title }]} />
      </div>

      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{description}</p>

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
