import { NotificationList } from '../components/NotificationList'
import { NotificationSettings } from '../components/NotificationSettings'
import { useTheme } from '../components/ThemeProvider'

export function NotificationsPage() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NotificationList />
        </div>
        <div>
          <NotificationSettings />
        </div>
      </div>
    </div>
  )
}
