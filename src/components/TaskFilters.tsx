import { Button } from './ui/button'
import { Filter, Calendar, User } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function TaskFilters() {
  const { theme } = useTheme()

  return (
    <div className={`p-4 rounded-lg shadow-sm ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'}`}>
      <h3 className="font-medium mb-3">Filters</h3>
      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <Filter className="w-4 h-4 mr-2" />
          Status
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <User className="w-4 h-4 mr-2" />
          Assignee
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Calendar className="w-4 h-4 mr-2" />
          Due Date
        </Button>
      </div>
    </div>
  )
}
