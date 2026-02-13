import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://gehaltly.de/rechner/lohnsteuer',
  },
};

export default function LohnsteuerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
