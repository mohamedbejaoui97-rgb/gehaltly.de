'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { CalculatorResult } from '@/lib/tax/types'

ChartJS.register(ArcElement, Tooltip, Legend)

interface TaxBreakdownChartProps {
  result: CalculatorResult
}

export function TaxBreakdownChart({ result }: TaxBreakdownChartProps) {
  const { netto, gesamtSteuern, gesamtSozialabgaben } = result

  const data = {
    labels: ['Netto', 'Steuern', 'Sozialabgaben'],
    datasets: [
      {
        data: [netto, gesamtSteuern, gesamtSozialabgaben],
        backgroundColor: [
          '#1A1A1A', // black for Netto (Germany flag)
          '#DD0000', // red for Steuern (Germany flag)
          '#FFCC00', // gold for Sozialabgaben (Germany flag)
        ],
        borderColor: [
          '#1A1A1A',
          '#DD0000',
          '#FFCC00',
        ],
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 16,
          font: {
            size: 13,
          },
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: { label?: string, parsed: number, dataset: { data: number[] } }) {
            const label = context.label || ''
            const value = context.parsed || 0
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = ((value / total) * 100).toFixed(1)
            return `${label}: ${new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(value)} (${percentage}%)`
          },
        },
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  )
}
