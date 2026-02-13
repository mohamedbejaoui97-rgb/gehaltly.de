'use client'

import { useState } from 'react'
import { CalculatorResult as CalculatorResultType } from '@/lib/tax/types'
import { formatEuro } from '@/lib/utils/formatters'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { TaxBreakdownChart } from './TaxBreakdownChart'
import { BarBreakdownChart } from './BarBreakdownChart'
import { ArrowLeftRight, Download, Share2 } from 'lucide-react'

interface CalculatorResultProps {
  result: CalculatorResultType
  isMonthly?: boolean
}

export function CalculatorResult({ result, isMonthly = true }: CalculatorResultProps) {
  const [shareSupported] = useState(() =>
    typeof window !== 'undefined' && navigator.share !== undefined
  )

  const handleShare = async () => {
    if (!shareSupported) return

    try {
      await navigator.share({
        title: 'Gehaltsrechner Ergebnis',
        text: `Mein Nettogehalt: ${formatEuro(result.netto)} von ${formatEuro(result.brutto)} Brutto`,
        url: window.location.href,
      })
    } catch (err) {
      // User cancelled or share failed
      console.log('Share cancelled or failed:', err)
    }
  }

  const handlePDF = () => {
    // TODO: Implement PDF export
    console.log('PDF export not yet implemented')
  }

  const handleCompare = () => {
    // TODO: Implement comparison view
    console.log('Comparison view not yet implemented')
  }

  const periodLabel = isMonthly ? 'monatlich' : 'jährlich'

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Ihr Ergebnis</CardTitle>
        <CardDescription>
          Berechnung für {periodLabel}es Einkommen
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Big Netto Display */}
        <div className="text-center py-6 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
          <p className="text-sm text-muted-foreground mb-2">Nettoeinkommen</p>
          <p className="text-5xl font-mono font-bold text-green-600 dark:text-green-500">
            {formatEuro(result.netto)}
          </p>
          <p className="text-sm text-muted-foreground mt-2">{periodLabel}</p>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Horizontal Bar Chart */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-center">Aufschlüsselung</h3>
            <BarBreakdownChart result={result} />

            {/* Legend for Bar Chart */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-green-600" />
                <span>Netto</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-amber-500" />
                <span>Steuern</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-red-500" />
                <span>Sozialabgaben</span>
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-center">Verteilung</h3>
            <TaxBreakdownChart result={result} />
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Brutto</p>
            <p className="font-semibold">{formatEuro(result.brutto)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Abzüge</p>
            <p className="font-semibold text-red-600 dark:text-red-500">
              {formatEuro(result.gesamtAbzuege)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Netto</p>
            <p className="font-semibold text-green-600 dark:text-green-500">
              {formatEuro(result.netto)}
            </p>
          </div>
        </div>

        {/* Detailed Breakdown Accordion */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details">
            <AccordionTrigger>
              <span className="font-semibold">Detailansicht der Abzüge</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {/* Tax Section */}
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-amber-700 dark:text-amber-500">
                    Steuern ({formatEuro(result.gesamtSteuern)})
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lohnsteuer</span>
                      <span className="font-medium">{formatEuro(result.steuern.lohnsteuer)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Solidaritätszuschlag</span>
                      <span className="font-medium">{formatEuro(result.steuern.solidaritaetszuschlag)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Kirchensteuer</span>
                      <span className="font-medium">{formatEuro(result.steuern.kirchensteuer)}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm mb-3 text-red-700 dark:text-red-500">
                    Sozialabgaben ({formatEuro(result.gesamtSozialabgaben)})
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rentenversicherung</span>
                      <span className="font-medium">{formatEuro(result.sozialabgaben.rentenversicherung)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Krankenversicherung</span>
                      <span className="font-medium">{formatEuro(result.sozialabgaben.krankenversicherung)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pflegeversicherung</span>
                      <span className="font-medium">{formatEuro(result.sozialabgaben.pflegeversicherung)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Arbeitslosenversicherung</span>
                      <span className="font-medium">{formatEuro(result.sozialabgaben.arbeitslosenversicherung)}</span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Gesamte Abzüge</span>
                    <span className="text-red-600 dark:text-red-500">
                      {formatEuro(result.gesamtAbzuege)}
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleCompare}
            className="flex-1 sm:flex-none"
          >
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            Vergleichen
          </Button>
          <Button
            variant="outline"
            onClick={handlePDF}
            className="flex-1 sm:flex-none"
          >
            <Download className="mr-2 h-4 w-4" />
            Als PDF
          </Button>
          {shareSupported && (
            <Button
              variant="outline"
              onClick={handleShare}
              className="flex-1 sm:flex-none"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Teilen
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
