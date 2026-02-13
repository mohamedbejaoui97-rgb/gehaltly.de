import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gehaltly.de/rechner/firmenwagenrechner',
  },
};

export default function FirmenwagenrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
