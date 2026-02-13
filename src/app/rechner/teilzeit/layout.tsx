import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gehaltly.de/rechner/teilzeit',
  },
};

export default function TeilzeitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
