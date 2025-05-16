import { useTheme } from './ThemeProvider'

export function ProductivityDashboard() {
  const { theme } = useTheme()

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-xl font-semibold mb-4">Productivity Dashboard</h2>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Productivity chart will appear here</p>
      </div>
    </div>
  )
}
