import { KanbanBoard } from '../components/KanbanBoard'
import { ProjectTimeline } from '../components/ProjectTimeline'
import { ProjectTeam } from '../components/ProjectTeam'
import { ProjectFiles } from '../components/ProjectFiles'
import { ProjectDiscussion } from '../components/ProjectDiscussion'
import { useTheme } from '../components/ThemeProvider'

export function Dashboard() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <KanbanBoard />
        </div>
        <div>
          <ProjectTimeline />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <ProjectTeam />
        </div>
        <div>
          <ProjectFiles />
        </div>
        <div>
          <ProjectDiscussion />
        </div>
      </div>
    </div>
  )
}
