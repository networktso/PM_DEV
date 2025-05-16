import { useTheme } from './ThemeProvider'

export function TaskStats() {
  const { theme } = useTheme()

  return (
    <div className={`p-4 rounded-lg shadow-sm ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'}`}>
      <h3 className="font-medium mb-3">Task Statistics</h3>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Completed</span>
            <span>12/24</span>
          </div>
          <div className={`h-2 rounded-full ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-200'}`}>
            <div className="h-2 rounded-full bg-green-500" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>High Priority</span>
            <span>8</span>
          </div>
          <div className={`h-2 rounded-full ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-200'}`}>
            <div className="h-2 rounded-full bg-red-500" style={{ width: '33%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Overdue</span>
            <span>3</span>
          </div>
          <div className={`h-2 rounded-full ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-200'}`}>
            <div className="h-2 rounded-full bg-yellow-500" style={{ width: '12.5%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
