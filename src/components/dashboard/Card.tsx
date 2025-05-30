import { LucideIcon } from 'lucide-react'
import { useTheme } from '../ThemeProvider'

type CardProps = {
  title: string
  value: string
  icon: LucideIcon
  trend?: 'up' | 'down' | 'steady' | 'warning'
  change?: string
}

export function Card({ title, value, icon: Icon, trend, change }: CardProps) {
  const { theme } = useTheme()

  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    steady: 'text-blue-500',
    warning: 'text-yellow-500'
  }

  return (
    <div className={`rounded-xl p-6 shadow-sm ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${theme === 'dark' ? 'dark:text-gray-400' : 'text-gray-500'}`}>{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-100'}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      {trend && change && (
        <div className="mt-4 flex items-center">
          <span className={`text-sm ${trendColors[trend]}`}>
            {trend === 'up' && '↑'}
            {trend === 'down' && '↓'}
            {trend === 'warning' && '⚠'}
            {change}
          </span>
        </div>
      )}
    </div>
  )
}
