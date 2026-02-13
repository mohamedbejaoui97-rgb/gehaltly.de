import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gehaltly.de/rechner/stundenlohn',
  },
};

export default function StundenlohnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
