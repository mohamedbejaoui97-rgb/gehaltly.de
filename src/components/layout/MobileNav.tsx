'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, Euro, BookOpen } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Gehalt',
    href: '/gehaltsrechner',
    icon: Euro,
  },
  {
    label: 'Netto',
    href: '/netto-brutto-rechner',
    icon: Calculator,
  },
  {
    label: 'Ratgeber',
    href: '/ratgeber/steuerklassen',
    icon: BookOpen,
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] border-t border-gray-700 safe-area-pb">
      <div className="grid grid-cols-4 h-14">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-0.5 transition-colors ${
                isActive
                  ? 'text-[#DD0000]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
