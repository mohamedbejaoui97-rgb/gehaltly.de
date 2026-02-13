import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gehaltly.de/rechner/arbeitgeber',
  },
};

export default function ArbeitgeberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
