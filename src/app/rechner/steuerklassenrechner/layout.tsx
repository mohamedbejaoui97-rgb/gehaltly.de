import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gehaltly.de/rechner/steuerklassenrechner',
  },
};

export default function SteuerklassenrechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
