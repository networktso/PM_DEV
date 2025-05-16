import { Search, Sun, Moon, User, Bell, Settings } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function Topbar() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className={`border-b ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center justify-between px-6 py-3">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'dark:bg-gray-700 dark:text-white' : 'bg-gray-100'}`}
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className={`p-2 rounded-full relative ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className={`p-2 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  )
}
