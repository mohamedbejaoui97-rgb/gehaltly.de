'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Calculator, BookOpen, MoreHorizontal } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from './Logo';

interface NavLink {
  title: string;
  href: string;
  description: string;
}

interface NavCategory {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: NavLink[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    label: 'Rechner',
    icon: Calculator,
    items: [
      { title: 'Brutto-Netto-Rechner', href: '/', description: 'Nettogehalt berechnen' },
      { title: 'Gehaltsrechner', href: '/gehaltsrechner', description: 'Umfassender Gehaltsrechner' },
      { title: 'Lohnrechner', href: '/lohnrechner', description: 'Lohnsteuer & Sozialabgaben' },
      { title: 'Netto-Brutto-Rechner', href: '/netto-brutto-rechner', description: 'Brutto aus Netto berechnen' },
      { title: 'Netto-Rechner', href: '/netto-rechner', description: 'Schnelle Netto-Berechnung' },
      { title: 'Stundenlohnrechner', href: '/rechner/stundenlohn', description: 'Stundenlohn berechnen' },
      { title: 'Teilzeitrechner', href: '/rechner/teilzeit', description: 'Teilzeit-Gehalt berechnen' },
      { title: 'Lohnsteuerrechner', href: '/rechner/lohnsteuer', description: 'Lohnsteuer berechnen' },
    ],
  },
  {
    label: 'Ratgeber',
    icon: BookOpen,
    items: [
      { title: 'Brutto-Netto Unterschied', href: '/ratgeber/brutto-netto-unterschied', description: 'Brutto vs. Netto erklärt' },
      { title: 'Steuerklassen', href: '/ratgeber/steuerklassen', description: 'Alle 6 Steuerklassen' },
      { title: 'Sozialabgaben', href: '/ratgeber/sozialabgaben', description: 'Beiträge 2026' },
      { title: 'Brutto-Netto Rechnung', href: '/ratgeber/brutto-netto-rechnung', description: 'Berechnung erklärt' },
      { title: 'Elterngeld', href: '/ratgeber/elterngeld-brutto-netto', description: 'Elterngeld & Gehalt' },
    ],
  },
  {
    label: 'Mehr',
    icon: MoreHorizontal,
    items: [
      { title: 'Firmenwagenrechner', href: '/rechner/firmenwagenrechner', description: 'Geldwerter Vorteil' },
      { title: 'Steuerklassenrechner', href: '/rechner/steuerklassenrechner', description: 'Optimale Steuerklasse' },
      { title: 'Arbeitgeberrechner', href: '/rechner/arbeitgeber', description: 'Arbeitgeber-Gesamtkosten' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="relative flex h-24 md:h-24 items-center justify-between">
          {/* Logo - centered on mobile, left on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            {NAV_CATEGORIES.map((category, index) => (
              <div key={category.label} className="group relative">
                <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#DD0000] transition-colors py-4">
                  <category.icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>

                {/* Dropdown - last items align right to stay on screen */}
                <div className={`absolute top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${index > 0 ? 'right-0' : 'left-0'}`}>
                  <div className="bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 min-w-[260px] py-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#DD0000] transition-colors"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500">
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
                className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Menü öffnen"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>

              <div className="mt-4 space-y-5">
                {NAV_CATEGORIES.map((category) => (
                  <div key={category.label}>
                    <div className="flex items-center space-x-2 mb-2 text-sm font-semibold text-gray-900">
                      <category.icon className="h-4 w-4" />
                      <span>{category.label}</span>
                    </div>
                    <div className="space-y-1 ml-6">
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-gray-600 hover:text-[#DD0000] transition-colors py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Legal links in mobile */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-1">
                    <Link href="/impressum" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-[#DD0000] py-1">Impressum</Link>
                    <Link href="/datenschutz" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-[#DD0000] py-1">Datenschutz</Link>
                    <Link href="/kontakt" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-[#DD0000] py-1">Kontakt</Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
