import { NavLink } from 'react-router-dom'
import { 
  Home, 
  FolderKanban, 
  Users, 
  Calendar, 
  CheckSquare, 
  Bell, 
  BarChart2, 
  Plug, 
  Settings 
} from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function Sidebar() {
  const { theme } = useTheme()

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/tasks', icon: CheckSquare, label: 'Tasks' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/reports', icon: BarChart2, label: 'Reports' },
    { path: '/integrations', icon: Plug, label: 'Integrations' },
  ]

  return (
    <div className={`w-64 h-full border-r ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'border-gray-200 bg-white'}`}>
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
                  `flex items-center px-4 py-2 rounded-lg ${isActive ? 
                    (theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-indigo-50 text-indigo-700') : 
                    (theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')}`
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
