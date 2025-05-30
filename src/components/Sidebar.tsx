import { NavLink } from 'react-router-dom'
import { useTheme } from './ThemeProvider'
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  Calendar, 
  CheckSquare, 
  Bell, 
  BarChart2,
  Zap 
} from 'lucide-react'

export function Sidebar() {
  const { theme } = useTheme()

  return (
    <div className={`w-64 border-r ${theme === 'dark' ? 'dark:border-gray-700 dark:bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div className="p-4">
        <h1 className="text-xl font-bold">ProjectHub</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <LayoutDashboard className="mr-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <FolderKanban className="mr-3" />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/team" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <Users className="mr-3" />
              Team
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/calendar" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <Calendar className="mr-3" />
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/tasks" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <CheckSquare className="mr-3" />
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/notifications" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <Bell className="mr-3" />
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/reports" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <BarChart2 className="mr-3" />
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/integrations" 
              className={({ isActive }) => 
                `flex items-center p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'} ${theme === 'dark' ? (isActive ? 'dark:bg-blue-900 dark:text-blue-100' : 'dark:hover:bg-gray-700') : ''}`
              }
            >
              <Zap className="mr-3" />
              Integrations
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
