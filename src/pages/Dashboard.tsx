import { useTheme } from '../components/ThemeProvider'
import { Card } from '../components/dashboard/Card'
import { ActivityFeed } from '../components/dashboard/ActivityFeed'
import { ProjectProgress } from '../components/dashboard/ProjectProgress'
import { TeamMembers } from '../components/dashboard/TeamMembers'

export function Dashboard() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          title="Active Projects" 
          value="12" 
          icon="FolderKanban" 
          trend="up" 
          change="+2 this week"
        />
        <Card 
          title="Tasks Completed" 
          value="84" 
          icon="CheckCircle" 
          trend="up" 
          change="+12 today"
        />
        <Card 
          title="Team Members" 
          value="8" 
          icon="Users" 
          trend="steady" 
        />
        <Card 
          title="Upcoming Deadlines" 
          value="3" 
          icon="Calendar" 
          trend="warning" 
          change="Due soon"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectProgress />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      <div>
        <TeamMembers />
      </div>
    </div>
  )
}
