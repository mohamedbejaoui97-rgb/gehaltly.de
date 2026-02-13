'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface KrankenkassenTableProps {
  onSelect: (rate: number) => void;
  currentRate: number;
}

interface KrankenkassenEntry {
  name: string;
  rate: number;
  isDurchschnitt?: boolean;
}

const krankenkassenData: KrankenkassenEntry[] = [
  { name: 'hkk', rate: 1.58 },
  { name: 'BKK Gildemeister Seidensticker', rate: 1.59 },
  { name: 'BKK firmus', rate: 1.79 },
  { name: 'Audi BKK', rate: 1.79 },
  { name: 'TK (Techniker Krankenkasse)', rate: 2.45 },
  { name: 'HEK', rate: 2.48 },
  { name: 'Debeka BKK', rate: 2.50 },
  { name: 'BARMER', rate: 2.69 },
  { name: 'DAK-Gesundheit', rate: 2.80 },
  { name: 'Kaufmännische Krankenkasse (KKH)', rate: 2.88 },
  { name: 'Durchschnitt (gesetzlich)', rate: 2.90, isDurchschnitt: true },
  { name: 'IKK classic', rate: 2.90 },
  { name: 'AOK Bayern', rate: 2.90 },
  { name: 'AOK Niedersachsen', rate: 2.98 },
  { name: 'AOK Baden-Württemberg', rate: 3.00 },
  { name: 'AOK Plus (Sachsen/Thüringen)', rate: 3.00 },
  { name: 'AOK Nordost', rate: 3.10 },
  { name: 'AOK Rheinland/Hamburg', rate: 3.10 },
  { name: 'SBK', rate: 3.15 },
  { name: 'Knappschaft', rate: 3.20 },
];

const cheapestRate = Math.min(...krankenkassenData.map((k) => k.rate));

export function KrankenkassenTable({ onSelect, currentRate }: KrankenkassenTableProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (rate: number) => {
    onSelect(rate);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#DD0000] focus:outline-none focus:ring-2 focus:ring-[#DD0000]/30"
          aria-label="Krankenkassen Zusatzbeiträge anzeigen"
        >
          <Info className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            KV-Zusatzbeitrag 2026
          </DialogTitle>
          <p className="text-sm text-gray-500">
            Klicken Sie auf eine Krankenkasse, um den Zusatzbeitrag zu übernehmen.
          </p>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[60vh] -mx-1 px-1">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b-2 border-gray-200">
                <th className="py-2 pr-2 text-left font-semibold text-gray-700">
                  Krankenkasse
                </th>
                <th className="py-2 pl-2 text-right font-semibold text-gray-700 whitespace-nowrap">
                  Zusatzbeitrag
                </th>
              </tr>
            </thead>
            <tbody>
              {krankenkassenData.map((kasse) => {
                const isSelected =
                  Math.abs(kasse.rate - currentRate) < 0.001;
                const isCheapest = Math.abs(kasse.rate - cheapestRate) < 0.001;

                return (
                  <tr
                    key={`${kasse.name}-${kasse.rate}`}
                    onClick={() => handleSelect(kasse.rate)}
                    className={`
                      cursor-pointer border-b border-gray-100 transition-colors
                      ${isSelected ? 'bg-[#DD0000]/5' : 'hover:bg-gray-50'}
                      ${kasse.isDurchschnitt ? 'border-y-2 border-gray-300' : ''}
                    `}
                  >
                    <td
                      className={`py-2.5 pr-2 ${kasse.isDurchschnitt ? 'font-bold' : ''}`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={
                            isSelected ? 'text-[#DD0000] font-medium' : ''
                          }
                        >
                          {kasse.name}
                        </span>
                        {isCheapest && !kasse.isDurchschnitt && (
                          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-700 ring-1 ring-inset ring-green-200">
                            Günstigste
                          </span>
                        )}
                        {kasse.isDurchschnitt && (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600 ring-1 ring-inset ring-gray-300">
                            Durchschnitt
                          </span>
                        )}
                      </div>
                    </td>
                    <td
                      className={`py-2.5 pl-2 text-right tabular-nums whitespace-nowrap ${
                        kasse.isDurchschnitt ? 'font-bold' : ''
                      } ${isSelected ? 'text-[#DD0000] font-semibold' : ''}`}
                    >
                      {kasse.rate.toFixed(2)}&thinsp;%
                      {isSelected && (
                        <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-[#DD0000]" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-gray-400 mt-2">
          Stand: Januar 2026. Alle Angaben ohne Gewähr. Der allgemeine Beitragssatz
          von 14,6&thinsp;% kommt jeweils hinzu.
        </p>
      </DialogContent>
    </Dialog>
  );
}
