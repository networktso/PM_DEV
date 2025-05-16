import { useTheme } from './ThemeProvider'

export function NotificationList() {
  const { theme } = useTheme()

  const notifications = [
    {
      id: 1,
      title: 'New project assigned',
      message: 'You have been assigned to Project X',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      title: 'Task completed',
      message: 'Task "Design mockups" has been completed',
      time: '1 day ago',
      read: true
    },
    {
      id: 3,
      title: 'Team meeting',
      message: 'Weekly team meeting scheduled for tomorrow',
      time: '3 days ago',
      read: true
    }
  ]

  return (
    <div className={`rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="p-4 border-b">
        <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Notifications
        </h2>
      </div>
      <div className="divide-y">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 ${!notification.read ? (theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50') : ''}`}
          >
            <div className="flex justify-between">
              <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {notification.title}
              </h3>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {notification.time}
              </span>
            </div>
            <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {notification.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
