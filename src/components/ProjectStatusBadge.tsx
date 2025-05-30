import { useTheme } from './ThemeProvider'

interface ProjectStatusBadgeProps {
  status: 'planning' | 'in-progress' | 'on-hold' | 'completed' | 'cancelled'
}

const statusColors = {
  planning: { bg: 'bg-blue-100', text: 'text-blue-800', darkBg: 'dark:bg-blue-900', darkText: 'dark:text-blue-200' },
  'in-progress': { bg: 'bg-yellow-100', text: 'text-yellow-800', darkBg: 'dark:bg-yellow-900', darkText: 'dark:text-yellow-200' },
  'on-hold': { bg: 'bg-gray-100', text: 'text-gray-800', darkBg: 'dark:bg-gray-700', darkText: 'dark:text-gray-200' },
  completed: { bg: 'bg-green-100', text: 'text-green-800', darkBg: 'dark:bg-green-900', darkText: 'dark:text-green-200' },
  cancelled: { bg: 'bg-red-100', text: 'text-red-800', darkBg: 'dark:bg-red-900', darkText: 'dark:text-red-200' }
}

export const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => {
  const { theme } = useTheme()
  const colors = statusColors[status]

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} ${theme === 'dark' ? `${colors.darkBg} ${colors.darkText}` : ''}`}>
      {status.replace('-', ' ')}
    </span>
  )
}
