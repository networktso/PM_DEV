import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { ProjectPage } from './pages/ProjectPage'
import { TeamPage } from './pages/TeamPage'
import { CalendarPage } from './pages/CalendarPage'
import { TasksPage } from './pages/TasksPage'
import { NotificationsPage } from './pages/NotificationsPage'
import { ReportsPage } from './pages/ReportsPage'
import IntegrationsPage from './pages/IntegrationsPage'
import { Layout } from './components/Layout'
import { ThemeProvider } from './components/ThemeProvider'
import { Projects } from './pages/Projects'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
