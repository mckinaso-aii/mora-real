import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'CRC'): string {
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculateROI(investment: number, returnValue: number): number {
  return ((returnValue - investment) / investment) * 100
}

export function formatPercentage(value: number): string {
  return new Intl.NumberFormat('es-CR', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100)
}

export function getEfficiencyColor(efficiency: number): string {
  if (efficiency >= 80) return 'text-green-400'
  if (efficiency >= 60) return 'text-yellow-400'
  return 'text-red-400'
}

export function getPriorityColor(priority: 'high' | 'medium' | 'low'): string {
  switch (priority) {
    case 'high':
      return 'text-red-400 bg-red-400/10'
    case 'medium':
      return 'text-yellow-400 bg-yellow-400/10'
    case 'low':
      return 'text-green-400 bg-green-400/10'
    default:
      return 'text-gray-400 bg-gray-400/10'
  }
}

export function generateChartColors(count: number): string[] {
  const baseColors = [
    '#8B5CF6', // Mora purple
    '#A78BFA', // Mora purple light
    '#7C3AED', // Mora purple dark
    '#FFFFFF', // White
    '#F3F4F6', // Gray 100
    '#E5E7EB', // Gray 200
  ]
  
  const colors: string[] = []
  for (let i = 0; i < count; i++) {
    colors.push(baseColors[i % baseColors.length])
  }
  
  return colors
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-CR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) return 'hace unos segundos'
  if (diffInSeconds < 3600) return `hace ${Math.floor(diffInSeconds / 60)} minutos`
  if (diffInSeconds < 86400) return `hace ${Math.floor(diffInSeconds / 3600)} horas`
  if (diffInSeconds < 2592000) return `hace ${Math.floor(diffInSeconds / 86400)} días`
  
  return formatDate(date)
}
