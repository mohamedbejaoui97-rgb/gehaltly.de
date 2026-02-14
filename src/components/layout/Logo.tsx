import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="gehaltly.de"
        className="h-[50px] md:h-[70px] w-auto"
      />
    </Link>
  );
}
