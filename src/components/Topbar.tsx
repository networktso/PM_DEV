import { useTheme } from './ThemeProvider'
import { Moon, Sun, Bell, Search, User } from 'lucide-react'

export function Topbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`border-b ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center justify-between p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className={`pl-10 pr-4 py-2 rounded-lg ${theme === 'dark' ? 'dark:bg-gray-700 dark:text-white' : 'bg-gray-100'}`}
          />
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className={`p-2 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Bell />
          </button>
          <div className={`p-2 rounded-full ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-100'}`}>
            <User />
          </div>
        </div>
      </div>
    </div>
  )
}
