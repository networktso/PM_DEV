import { IntegrationList } from '../components/IntegrationList'
import { useTheme } from '../components/ThemeProvider'

export function IntegrationsPage() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <IntegrationList />
        </div>
      </div>
    </div>
  )
}
