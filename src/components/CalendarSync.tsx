import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'
import { RefreshCw, Plus } from 'lucide-react'

export function CalendarSync() {
  const { theme } = useTheme()

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} p-4 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <h3 className="font-medium mb-4">Sync Calendars</h3>
      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <RefreshCw className="w-4 h-4 mr-2" />
          Sync Now
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Plus className="w-4 h-4 mr-2" />
          Add Calendar
        </Button>
      </div>
    </div>
  )
}
