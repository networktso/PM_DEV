import { useTheme } from './ThemeProvider'

const integrations = [
  {
    id: 1,
    name: 'Slack',
    description: 'Team communication and collaboration',
    icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    connected: true
  },
  {
    id: 2,
    name: 'GitHub',
    description: 'Code repository and version control',
    icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    connected: false
  },
  {
    id: 3,
    name: 'Jira',
    description: 'Project and issue tracking',
    icon: 'https://cdn.worldvectorlogo.com/logos/jira-3.svg',
    connected: true
  }
]

export function IntegrationList() {
  const { theme } = useTheme()

  return (
    <div className={`rounded-xl p-6 shadow-sm ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-lg font-semibold mb-6">Available Integrations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div 
            key={integration.id} 
            className={`p-4 rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center space-x-3">
              <img 
                src={integration.icon} 
                alt={integration.name} 
                className="w-10 h-10"
              />
              <div>
                <h3 className="font-medium">{integration.name}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'dark:text-gray-400' : 'text-gray-500'}`}>
                  {integration.description}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button
                className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
                  integration.connected 
                    ? 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800'
                }`}
              >
                {integration.connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
