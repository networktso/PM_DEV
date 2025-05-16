import { useTheme } from './ThemeProvider'

export function NotificationSettings() {
  const { theme } = useTheme()

  const notificationTypes = [
    { id: 1, name: 'Email notifications', enabled: true },
    { id: 2, name: 'Push notifications', enabled: false },
    { id: 3, name: 'SMS alerts', enabled: false },
    { id: 4, name: 'Desktop notifications', enabled: true }
  ]

  return (
    <div className={`rounded-lg shadow p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Notification Settings
      </h2>
      <div className="space-y-4">
        {notificationTypes.map((type) => (
          <div key={type.id} className="flex items-center justify-between">
            <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {type.name}
            </span>
            <button
              className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                type.enabled
                  ? theme === 'dark'
                    ? 'bg-blue-600'
                    : 'bg-blue-500'
                  : theme === 'dark'
                  ? 'bg-gray-600'
                  : 'bg-gray-300'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  type.enabled ? 'translate-x-6' : 'translate-x-1'
                } ${theme === 'dark' ? 'bg-gray-200' : 'bg-white'}`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
