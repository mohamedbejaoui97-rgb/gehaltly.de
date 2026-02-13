/**
 * RelatedLinks Component
 * Grid of related calculator/guide links with cards
 */

import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { getRelatedLinks } from '@/lib/utils/internal-links';
import { Calculator, ArrowRight } from 'lucide-react';

interface RelatedLinksProps {
  currentHref: string;
  count?: number;
  title?: string;
}

export default function RelatedLinks({
  currentHref,
  count = 6,
  title = 'Weitere Rechner',
}: RelatedLinksProps) {
  const links = getRelatedLinks(currentHref, count);

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group transition-all hover:scale-105"
              >
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-auto" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {link.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
