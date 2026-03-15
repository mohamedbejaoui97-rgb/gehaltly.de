import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="gehaltly.de - Brutto Netto Rechner"
        width={800}
        height={446}
        className="h-[60px] md:h-[80px] w-auto"
      />
    </Link>
  );
}
