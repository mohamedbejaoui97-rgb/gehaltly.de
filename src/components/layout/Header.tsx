'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Euro, Briefcase, GraduationCap, MoreHorizontal, Home } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CALCULATOR_LINKS } from '@/lib/utils/internal-links';

interface NavCategory {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: typeof CALCULATOR_LINKS;
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    label: 'Gehalt',
    icon: Euro,
    items: CALCULATOR_LINKS.filter((link) =>
      [
        'Brutto-Netto-Rechner',
        'Netto-Brutto-Rechner',
        'Gehaltsrechner',
        'Lohnrechner',
        'Stundenlohnrechner',
      ].includes(link.title)
    ),
  },
  {
    label: 'Arbeitslosengeld',
    icon: Briefcase,
    items: CALCULATOR_LINKS.filter((link) =>
      [
        'Arbeitslosengeld-Rechner',
        'Kurzarbeitergeld-Rechner',
        'Elterngeld-Rechner',
        'Krankengeld-Rechner',
      ].includes(link.title)
    ),
  },
  {
    label: 'Rente',
    icon: Home,
    items: CALCULATOR_LINKS.filter((link) =>
      [
        'Rentenrechner',
        'Witwenrenten-Rechner',
        'Waisenrenten-Rechner',
      ].includes(link.title)
    ),
  },
  {
    label: 'Studium',
    icon: GraduationCap,
    items: CALCULATOR_LINKS.filter((link) =>
      [
        'Minijob-Rechner',
        'Midijob-Rechner',
        'Teilzeitrechner',
      ].includes(link.title)
    ),
  },
  {
    label: 'Mehr',
    icon: MoreHorizontal,
    items: CALCULATOR_LINKS.filter((link) =>
      [
        'Abfindungsrechner',
        'Firmenwagen-Rechner',
        'Pendlerpauschale-Rechner',
        'Steuerklassen-Rechner',
        'Kindergeld-Rechner',
        'Unterhaltsrechner',
      ].includes(link.title)
    ),
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1E3A5F] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:opacity-90 transition-opacity">
            gehaltly.de
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_CATEGORIES.map((category) => (
              <div key={category.label} className="group relative">
                <button className="flex items-center space-x-1 text-sm font-medium hover:text-[#10B981] transition-colors">
                  <category.icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 min-w-[280px] py-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-600 mt-0.5">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Menü öffnen"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {NAV_CATEGORIES.map((category) => (
                  <div key={category.label}>
                    <div className="flex items-center space-x-2 mb-3 text-sm font-semibold text-gray-900">
                      <category.icon className="h-4 w-4" />
                      <span>{category.label}</span>
                    </div>
                    <div className="space-y-2 ml-6">
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-gray-700 hover:text-[#1E3A5F] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
