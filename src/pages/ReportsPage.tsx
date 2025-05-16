import { useTheme } from '../components/ThemeProvider'
import { ProductivityDashboard } from '../components/ProductivityDashboard'
import { ProjectReports } from '../components/ProjectReports'
import { TeamReports } from '../components/TeamReports'
import { ExportOptions } from '../components/ExportOptions'

export function ReportsPage() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
      <h1 className="text-2xl font-bold">Reports</h1>
      <ProductivityDashboard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectReports />
        <TeamReports />
      </div>
      <ExportOptions />
    </div>
  )
}
