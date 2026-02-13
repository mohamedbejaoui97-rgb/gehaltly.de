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
        backgroundColor: '#10B981',
        borderColor: '#10B981',
        borderWidth: 1,
      },
      {
        label: 'Steuern',
        data: [gesamtSteuern],
        backgroundColor: '#F59E0B',
        borderColor: '#F59E0B',
        borderWidth: 1,
      },
      {
        label: 'Sozialabgaben',
        data: [gesamtSozialabgaben],
        backgroundColor: '#EF4444',
        borderColor: '#EF4444',
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
          callback: function(value: any) {
            return new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
              maximumFractionDigits: 0,
            }).format(value)
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
          label: function(context: any) {
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
