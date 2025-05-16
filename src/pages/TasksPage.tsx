import { TaskList } from '../components/TaskList'
import { TaskFilters } from '../components/TaskFilters'
import { TaskStats } from '../components/TaskStats'
import { useTheme } from '../components/ThemeProvider'

export function TasksPage() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <TaskList />
        </div>
        <div>
          <TaskFilters />
          <div className="mt-6">
            <TaskStats />
          </div>
        </div>
      </div>
    </div>
  )
}
