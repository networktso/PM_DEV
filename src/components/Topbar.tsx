import { useTheme } from './ThemeProvider'
import { Moon, Sun, User } from 'lucide-react'

export function Topbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`border-b ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-100'}`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`p-2 rounded-full ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-100'}`}>
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
