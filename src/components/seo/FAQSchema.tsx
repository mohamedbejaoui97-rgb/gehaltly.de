/**
 * FAQSchema Component
 * Generates and renders FAQ structured data for SEO
 */

import SchemaMarkup from './SchemaMarkup';
import { generateFAQSchema } from '@/lib/seo/schema';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = generateFAQSchema(faqs);
  return <SchemaMarkup schema={schema} />;
}
