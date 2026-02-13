'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { CalculatorResult } from '@/lib/tax/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

interface BarBreakdownChartProps {
  result: CalculatorResult
}

export function BarBreakdownChart({ result }: BarBreakdownChartProps) {
  const { netto, gesamtSteuern, gesamtSozialabgaben, brutto } = result

  const nettoPercentage = ((netto / brutto) * 100).toFixed(1)
  const steuernPercentage = ((gesamtSteuern / brutto) * 100).toFixed(1)
  const sozialabgabenPercentage = ((gesamtSozialabgaben / brutto) * 100).toFixed(1)

  const data = {
    labels: ['Bruttoeinkommen'],
    datasets: [
      {
        label: 'Netto',
        data: [netto],
        backgroundColor: '#1A1A1A',
        borderColor: '#1A1A1A',
        borderWidth: 1,
      },
      {
        label: 'Steuern',
        data: [gesamtSteuern],
        backgroundColor: '#DD0000',
        borderColor: '#DD0000',
        borderWidth: 1,
      },
      {
        label: 'Sozialabgaben',
        data: [gesamtSozialabgaben],
        backgroundColor: '#FFCC00',
        borderColor: '#FFCC00',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: function(value: string | number) {
            return new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
              maximumFractionDigits: 0,
            }).format(Number(value))
          },
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: { dataset: { label?: string }, parsed: { x: number | null } }) {
            const label = context.dataset.label || ''
            const value = context.parsed.x || 0
            const percentage = label === 'Netto'
              ? nettoPercentage
              : label === 'Steuern'
              ? steuernPercentage
              : sozialabgabenPercentage

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
    <div className="w-full h-24">
      <Bar data={data} options={options} />
    </div>
  )
}
