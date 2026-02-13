'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calculator, Euro, BookOpen, MoreHorizontal } from 'lucide-react';

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
    label: 'Rechner',
    href: '/gehaltsrechner',
    icon: Calculator,
  },
  {
    label: 'Gehalt',
    href: '/netto-brutto-rechner',
    icon: Euro,
  },
  {
    label: 'Ratgeber',
    href: '/ratgeber/steuerklassen',
    icon: BookOpen,
  },
  {
    label: 'Mehr',
    href: '/steuerklassen-rechner',
    icon: MoreHorizontal,
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1E3A5F] border-t border-white/10 safe-area-pb">
      <div className="grid grid-cols-5 h-16">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive
                  ? 'text-[#10B981]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
