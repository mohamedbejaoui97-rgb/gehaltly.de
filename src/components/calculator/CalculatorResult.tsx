'use client'

import { useState, useMemo, useEffect } from 'react'
import { calculateGermanTax } from '@/lib/tax'
import { CalculatorResult as CalculatorResultType, DEFAULT_INPUT } from '@/lib/tax/types'
import type { Steuerklasse } from '@/lib/tax/types'
import { formatEuro } from '@/lib/utils/formatters'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { TaxBreakdownChart } from './TaxBreakdownChart'
import { BarBreakdownChart } from './BarBreakdownChart'
import { ArrowLeftRight, Download, Share2, X } from 'lucide-react'

interface CalculatorResultProps {
  result: CalculatorResultType
  isMonthly?: boolean
}

export function CalculatorResult({ result, isMonthly = true }: CalculatorResultProps) {
  const [shareSupported] = useState(() =>
    typeof window !== 'undefined' && navigator.share !== undefined
  )

  // Comparison mode state
  const [showComparison, setShowComparison] = useState(false)
  const [compareBrutto, setCompareBrutto] = useState<string>('')
  const [compareSteuerklasse, setCompareSteuerklasse] = useState<Steuerklasse>(DEFAULT_INPUT.steuerklasse)

  // Calculate Scenario B result reactively
  const comparisonResult = useMemo<CalculatorResultType | null>(() => {
    const brutto = parseFloat(compareBrutto)
    if (!brutto || brutto <= 0) return null

    try {
      return calculateGermanTax({
        ...DEFAULT_INPUT,
        bruttoeinkommen: brutto,
        abrechnungszeitraum: isMonthly ? 'monat' : 'jahr',
        steuerklasse: compareSteuerklasse,
      })
    } catch {
      return null
    }
  }, [compareBrutto, compareSteuerklasse, isMonthly])

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
    const periodLabel_ = isMonthly ? 'monatlich' : 'jährlich'
    const now = new Date()
    const dateStr = now.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    const timeStr = now.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    })

    const htmlContent = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Gehaltsabrechnung - gehaltly.de</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #1A1A1A;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5;
    }

    /* Header */
    .header {
      text-align: center;
      border-bottom: 3px solid #DD0000;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      font-size: 26px;
      color: #1A1A1A;
      margin-bottom: 4px;
      letter-spacing: 0.5px;
    }
    .header .subtitle {
      font-size: 13px;
      color: #666;
    }
    .header .date {
      font-size: 12px;
      color: #999;
      margin-top: 8px;
    }

    /* Netto highlight box */
    .netto-box {
      background: #f0fdf4;
      border: 2px solid #16a34a;
      border-radius: 8px;
      text-align: center;
      padding: 24px 16px;
      margin-bottom: 30px;
    }
    .netto-box .label {
      font-size: 13px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
    }
    .netto-box .amount {
      font-size: 36px;
      font-weight: 700;
      color: #16a34a;
      font-variant-numeric: tabular-nums;
    }
    .netto-box .period {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }

    /* Input summary */
    .input-summary {
      background: #fafafa;
      border: 1px solid #e5e5e5;
      border-radius: 6px;
      padding: 16px 20px;
      margin-bottom: 30px;
    }
    .input-summary h2 {
      font-size: 14px;
      color: #1A1A1A;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .input-summary .row {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      font-size: 14px;
    }
    .input-summary .row .label { color: #666; }
    .input-summary .row .value { font-weight: 600; }

    /* Results table */
    .results-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    .results-table th {
      text-align: left;
      padding: 10px 12px;
      background: #1A1A1A;
      color: #fff;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .results-table th:last-child {
      text-align: right;
    }
    .results-table td {
      padding: 10px 12px;
      font-size: 14px;
      border-bottom: 1px solid #e5e5e5;
    }
    .results-table td:last-child {
      text-align: right;
      font-variant-numeric: tabular-nums;
      font-weight: 500;
    }
    .results-table tr.section-header td {
      background: #f5f5f5;
      font-weight: 600;
      font-size: 13px;
      color: #444;
      padding-top: 12px;
    }
    .results-table tr.subtotal td {
      border-top: 1px solid #ccc;
      font-weight: 600;
    }
    .results-table tr.total-deductions td {
      border-top: 2px solid #DD0000;
      font-weight: 700;
      color: #DD0000;
      font-size: 15px;
      padding-top: 14px;
    }
    .results-table tr.grand-total td {
      border-top: 3px double #1A1A1A;
      font-weight: 700;
      font-size: 16px;
      padding-top: 14px;
      padding-bottom: 14px;
      background: #f0fdf4;
      color: #16a34a;
    }
    .results-table tr:hover {
      background: #fafafa;
    }
    .results-table tr.section-header:hover,
    .results-table tr.grand-total:hover {
      background: inherit;
    }
    .results-table tr.grand-total:hover {
      background: #f0fdf4;
    }

    /* Footer */
    .footer {
      text-align: center;
      padding-top: 20px;
      border-top: 3px solid #DD0000;
      font-size: 11px;
      color: #999;
    }
    .footer .brand {
      font-weight: 600;
      color: #DD0000;
    }

    /* Print button (hidden in print) */
    .print-actions {
      text-align: center;
      margin-bottom: 30px;
    }
    .print-actions button {
      background: #DD0000;
      color: #fff;
      border: none;
      padding: 12px 32px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      margin: 0 6px;
    }
    .print-actions button:hover {
      background: #bb0000;
    }
    .print-actions button.secondary {
      background: #e5e5e5;
      color: #1A1A1A;
    }
    .print-actions button.secondary:hover {
      background: #d5d5d5;
    }

    @media print {
      body { padding: 20px; }
      .print-actions { display: none; }
      .netto-box { border-color: #16a34a !important; background: #f0fdf4 !important; }
      .results-table tr.grand-total td { background: #f0fdf4 !important; }
      .results-table th { background: #1A1A1A !important; color: #fff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .results-table tr.section-header td { background: #f5f5f5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Gehaltsabrechnung</h1>
    <div class="subtitle">gehaltly.de &mdash; Brutto-Netto-Rechner</div>
    <div class="date">Berechnung vom ${dateStr} um ${timeStr} Uhr</div>
  </div>

  <div class="netto-box">
    <div class="label">Nettoeinkommen</div>
    <div class="amount">${formatEuro(result.netto)}</div>
    <div class="period">${periodLabel_}</div>
  </div>

  <div class="input-summary">
    <h2>Eingaben</h2>
    <div class="row">
      <span class="label">Bruttoeinkommen</span>
      <span class="value">${formatEuro(result.brutto)}</span>
    </div>
    <div class="row">
      <span class="label">Berechnungszeitraum</span>
      <span class="value">${periodLabel_}</span>
    </div>
  </div>

  <table class="results-table">
    <thead>
      <tr>
        <th>Position</th>
        <th>Betrag</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bruttoeinkommen</td>
        <td>${formatEuro(result.brutto)}</td>
      </tr>

      <tr class="section-header">
        <td colspan="2">Steuern</td>
      </tr>
      <tr>
        <td>Lohnsteuer</td>
        <td>&minus; ${formatEuro(result.steuern.lohnsteuer)}</td>
      </tr>
      <tr>
        <td>Solidarit&auml;tszuschlag</td>
        <td>&minus; ${formatEuro(result.steuern.solidaritaetszuschlag)}</td>
      </tr>
      <tr>
        <td>Kirchensteuer</td>
        <td>&minus; ${formatEuro(result.steuern.kirchensteuer)}</td>
      </tr>
      <tr class="subtotal">
        <td>Steuern gesamt</td>
        <td>&minus; ${formatEuro(result.gesamtSteuern)}</td>
      </tr>

      <tr class="section-header">
        <td colspan="2">Sozialabgaben</td>
      </tr>
      <tr>
        <td>Rentenversicherung</td>
        <td>&minus; ${formatEuro(result.sozialabgaben.rentenversicherung)}</td>
      </tr>
      <tr>
        <td>Krankenversicherung</td>
        <td>&minus; ${formatEuro(result.sozialabgaben.krankenversicherung)}</td>
      </tr>
      <tr>
        <td>Pflegeversicherung</td>
        <td>&minus; ${formatEuro(result.sozialabgaben.pflegeversicherung)}</td>
      </tr>
      <tr>
        <td>Arbeitslosenversicherung</td>
        <td>&minus; ${formatEuro(result.sozialabgaben.arbeitslosenversicherung)}</td>
      </tr>
      <tr class="subtotal">
        <td>Sozialabgaben gesamt</td>
        <td>&minus; ${formatEuro(result.gesamtSozialabgaben)}</td>
      </tr>

      <tr class="total-deductions">
        <td>Gesamte Abz&uuml;ge</td>
        <td>&minus; ${formatEuro(result.gesamtAbzuege)}</td>
      </tr>

      <tr class="grand-total">
        <td><strong>Nettoeinkommen</strong></td>
        <td><strong>${formatEuro(result.netto)}</strong></td>
      </tr>
    </tbody>
  </table>

  <div class="print-actions">
    <button onclick="window.print()">Als PDF speichern / Drucken</button>
    <button class="secondary" onclick="window.close()">Schlie&szlig;en</button>
  </div>

  <div class="footer">
    Berechnet auf <span class="brand">gehaltly.de</span> &mdash; Alle Angaben ohne Gew&auml;hr
  </div>
</body>
</html>`

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(htmlContent)
      printWindow.document.close()
    }
  }

  const handleCompare = () => {
    setShowComparison((prev) => !prev)
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

        {/* Floating WhatsApp Share Button */}
        <WhatsAppShareButton result={result} isMonthly={isMonthly} />

        {/* Comparison Panel */}
        {showComparison && (
          <Card className="border-2 border-[#DD0000]/30 bg-muted/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Gehaltsvergleich</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowComparison(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Schließen</span>
                </Button>
              </div>
              <CardDescription>
                Geben Sie ein zweites Szenario ein, um die Ergebnisse zu vergleichen.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Scenario B mini-form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="compare-brutto">Bruttogehalt (Szenario B)</Label>
                  <Input
                    id="compare-brutto"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="z.B. 4000"
                    value={compareBrutto}
                    onChange={(e) => setCompareBrutto(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="compare-steuerklasse">Steuerklasse</Label>
                  <Select
                    value={String(compareSteuerklasse)}
                    onValueChange={(val) => setCompareSteuerklasse(Number(val) as Steuerklasse)}
                  >
                    <SelectTrigger id="compare-steuerklasse">
                      <SelectValue placeholder="Steuerklasse" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Klasse 1 - Ledig</SelectItem>
                      <SelectItem value="2">Klasse 2 - Alleinerziehend</SelectItem>
                      <SelectItem value="3">Klasse 3 - Verheiratet (Hauptverdiener)</SelectItem>
                      <SelectItem value="4">Klasse 4 - Verheiratet (gleich)</SelectItem>
                      <SelectItem value="5">Klasse 5 - Verheiratet (Geringverdiener)</SelectItem>
                      <SelectItem value="6">Klasse 6 - Zweitjob</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Comparison Table */}
              {comparisonResult ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-[#1A1A1A] dark:border-white">
                        <th className="text-left py-3 pr-2 font-semibold text-[#1A1A1A] dark:text-white">Position</th>
                        <th className="text-right py-3 px-2 font-semibold text-[#1A1A1A] dark:text-white">Szenario A</th>
                        <th className="text-right py-3 px-2 font-semibold text-[#1A1A1A] dark:text-white">Szenario B</th>
                        <th className="text-right py-3 pl-2 font-semibold text-[#1A1A1A] dark:text-white">Differenz</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ComparisonRow label="Brutto" a={result.brutto} b={comparisonResult.brutto} />
                      <ComparisonRow label="Steuern" a={result.gesamtSteuern} b={comparisonResult.gesamtSteuern} invertColor />
                      <ComparisonRow label="Sozialabgaben" a={result.gesamtSozialabgaben} b={comparisonResult.gesamtSozialabgaben} invertColor />
                      <ComparisonRow label="Abzüge" a={result.gesamtAbzuege} b={comparisonResult.gesamtAbzuege} invertColor />
                      <tr className="border-t-2 border-[#1A1A1A] dark:border-white">
                        <td className="py-3 pr-2 font-bold text-[#1A1A1A] dark:text-white">Netto</td>
                        <td className="py-3 px-2 text-right font-bold text-green-600 dark:text-green-500 tabular-nums">
                          {formatEuro(result.netto)}
                        </td>
                        <td className="py-3 px-2 text-right font-bold text-green-600 dark:text-green-500 tabular-nums">
                          {formatEuro(comparisonResult.netto)}
                        </td>
                        <td className={`py-3 pl-2 text-right font-bold tabular-nums ${
                          result.netto - comparisonResult.netto > 0
                            ? 'text-green-600 dark:text-green-500'
                            : result.netto - comparisonResult.netto < 0
                            ? 'text-[#DD0000]'
                            : 'text-muted-foreground'
                        }`}>
                          {result.netto - comparisonResult.netto > 0 ? '+' : ''}
                          {formatEuro(result.netto - comparisonResult.netto)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground text-sm">
                  Geben Sie ein Bruttogehalt ein, um den Vergleich zu sehen.
                </div>
              )}

              {/* Close button */}
              <div className="flex justify-end pt-2">
                <Button
                  variant="outline"
                  onClick={() => setShowComparison(false)}
                  size="sm"
                >
                  Schließen
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

/** Floating WhatsApp share button */
function WhatsAppShareButton({
  result,
  isMonthly,
}: {
  result: CalculatorResultType
  isMonthly?: boolean
}) {
  const [showLabel, setShowLabel] = useState(true)

  // Auto-hide label after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsApp = () => {
    const period = isMonthly ? 'monatlich' : 'jährlich'
    const text = [
      `🧮 Meine Gehaltsberechnung auf gehaltly.de`,
      ``,
      `💰 Brutto: ${formatEuro(result.brutto)}`,
      `📊 Steuern: -${formatEuro(result.gesamtSteuern)}`,
      `🏥 Sozialabgaben: -${formatEuro(result.gesamtSozialabgaben)}`,
      `✅ Netto: ${formatEuro(result.netto)} (${period})`,
      ``,
      `Berechne dein Gehalt: https://gehaltly.de`,
    ].join('\n')

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <button
      onClick={handleWhatsApp}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all hover:bg-[#1EBE57] hover:shadow-xl hover:scale-105 active:scale-95"
      aria-label="Ergebnisse per WhatsApp teilen"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span
        className={`text-sm font-semibold whitespace-nowrap transition-all duration-300 overflow-hidden ${
          showLabel ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Ergebnisse teilen
      </span>
    </button>
  )
}

/** Helper component for a single comparison table row */
function ComparisonRow({
  label,
  a,
  b,
  invertColor = false,
}: {
  label: string
  a: number
  b: number
  invertColor?: boolean
}) {
  const diff = a - b
  // For deductions/taxes, lower is better (green), so we invert the color logic
  const isPositive = invertColor ? diff < 0 : diff > 0
  const isNegative = invertColor ? diff > 0 : diff < 0

  return (
    <tr className="border-b border-muted">
      <td className="py-2.5 pr-2 text-muted-foreground">{label}</td>
      <td className="py-2.5 px-2 text-right font-medium tabular-nums">
        {formatEuro(a)}
      </td>
      <td className="py-2.5 px-2 text-right font-medium tabular-nums">
        {formatEuro(b)}
      </td>
      <td className={`py-2.5 pl-2 text-right font-medium tabular-nums ${
        isPositive
          ? 'text-green-600 dark:text-green-500'
          : isNegative
          ? 'text-[#DD0000]'
          : 'text-muted-foreground'
      }`}>
        {diff > 0 ? '+' : ''}{formatEuro(diff)}
      </td>
    </tr>
  )
}
