import { ArrowUp, ArrowDown, AlertCircle } from 'react-icons/lucide-react'

interface CardProps {
  title: string
  value: string
  icon: string
  trend?: 'up' | 'down' | 'steady' | 'warning'
  change?: string
}

export function Card({ title, value, icon, trend, change }: CardProps) {
  const IconComponent = require(`react-icons/lucide-react`)[icon]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1 dark:text-white">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200">
          {IconComponent && <IconComponent size={20} />}
        </div>
      </div>
      {trend && change && (
        <div className={`mt-4 flex items-center text-sm ${trend === 'up' ? 'text-green-600 dark:text-green-400' : trend === 'down' ? 'text-red-600 dark:text-red-400' : trend === 'warning' ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-400'}`}>
          {trend === 'up' && <ArrowUp className="mr-1" />}
          {trend === 'down' && <ArrowDown className="mr-1" />}
          {trend === 'warning' && <AlertCircle className="mr-1" />}
          {change}
        </div>
      )}
    </div>
  )
}
