import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { useTheme } from './ThemeProvider'

const integrations = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Connect with your Slack workspace',
    connected: true,
    logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Sync with your GitHub repositories',
    connected: false,
    logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Link with your Jira projects',
    connected: false,
    logo: 'https://cdn.worldvectorlogo.com/logos/jira-3.svg'
  }
]

export function IntegrationList() {
  const { theme } = useTheme()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Integrations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div 
              key={integration.id}
              className={`flex items-center p-4 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <img 
                src={integration.logo} 
                alt={integration.name}
                className="w-10 h-10 mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium">{integration.name}</h3>
                <p className="text-sm text-gray-500">{integration.description}</p>
              </div>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${integration.connected 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'}`}
              >
                {integration.connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
