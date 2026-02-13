/**
 * Metadata generators for Next.js pages
 * Generates consistent metadata with OpenGraph and Twitter cards
 */

import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

/**
 * Generate complete Next.js Metadata object
 */
export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  image = '/og-image.png',
}: PageMetadata): Metadata {
  const url = `https://gehaltly.de${path}`;
  const fullTitle = path === '/' ? title : `${title} | gehaltly.de`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'gehaltly.de' }],
    creator: 'gehaltly.de',
    publisher: 'gehaltly.de',
    metadataBase: new URL('https://gehaltly.de'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'gehaltly.de',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'de_DE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
