import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'
import { Filter, Calendar, Tag, Users } from 'lucide-react'

export function CalendarFilters() {
  const { theme } = useTheme()

  const filters = [
    { id: 1, name: 'All Events', icon: Filter },
    { id: 2, name: 'Meetings', icon: Calendar },
    { id: 3, name: 'Team Events', icon: Users },
    { id: 4, name: 'Personal', icon: Tag }
  ]

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} p-4 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <h3 className="font-medium mb-4">Calendar Filters</h3>
      <div className="space-y-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant="outline"
            className="w-full justify-start"
          >
            <filter.icon className="w-4 h-4 mr-2" />
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
