import { NavLink } from 'react-router-dom'
import { useTheme } from './ThemeProvider'
import { LayoutDashboard, FolderKanban, Users, Calendar, CheckSquare, Bell, BarChart2, Zap } from 'lucide-react'

export function Sidebar() {
  const { theme } = useTheme()

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/projects/1', icon: FolderKanban, label: 'Projects' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/tasks', icon: CheckSquare, label: 'Tasks' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/reports', icon: BarChart2, label: 'Reports' },
    { path: '/integrations', icon: Zap, label: 'Integrations' }
  ]

  return (
    <div className={`w-64 border-r ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div className="p-4">
        <h1 className="text-xl font-bold">ProjectHub</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-2 rounded-lg ${isActive 
                    ? theme === 'dark' 
                      ? 'dark:bg-gray-700 dark:text-white' 
                      : 'bg-gray-100 text-gray-900'
                    : theme === 'dark' 
                      ? 'dark:text-gray-300 hover:dark:bg-gray-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
