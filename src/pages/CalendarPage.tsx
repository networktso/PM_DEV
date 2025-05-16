import { CalendarView } from '../components/CalendarView'
import { CalendarFilters } from '../components/CalendarFilters'
import { CalendarSync } from '../components/CalendarSync'
import { useTheme } from '../components/ThemeProvider'

export function CalendarPage() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <CalendarView />
        </div>
        <div>
          <CalendarFilters />
          <div className="mt-6">
            <CalendarSync />
          </div>
        </div>
      </div>
    </div>
  )
}
